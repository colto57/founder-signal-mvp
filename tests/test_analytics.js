/*
 * Founder Signal System, analytics tests.
 * Usage: node tests/test_analytics.js [path/to/data.js]
 * Default data file: data/data.js. Prints pass/fail per assertion group, exits 1 on any failure.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA_PATH = process.argv[2] ? path.resolve(process.argv[2]) : path.join(ROOT, 'data', 'data.js');
const IS_DEFAULT_DATA = !process.argv[2];

function loadData(p) {
  const raw = fs.readFileSync(p, 'utf8');
  let src = raw.trim();
  const prefix = /^window\.FSS_DATA\s*=\s*/;
  if (prefix.test(src)) src = src.replace(prefix, '');
  if (src.endsWith(';')) src = src.slice(0, -1);
  try {
    return JSON.parse(src);
  } catch (e) {
    // Fallback: evaluate with a fake window (in case the generator emitted non-strict JSON).
    const sandbox = { window: {} };
    vm.runInNewContext(raw, sandbox);
    if (!sandbox.window.FSS_DATA) throw new Error('data file did not define window.FSS_DATA');
    return sandbox.window.FSS_DATA;
  }
}

const data = loadData(DATA_PATH);
const A = require(path.join(ROOT, 'app', 'analytics.js'));

/* Expected population: 51 / 68 for the real data. A fixture may declare meta.expected_counts. */
const EXPECTED = (!IS_DEFAULT_DATA && data.meta && data.meta.expected_counts)
  ? data.meta.expected_counts
  : { invested: 51, passed: 68 };

/* ---------------------------------------------------------------- */
/* Tiny harness                                                      */
/* ---------------------------------------------------------------- */
const results = [];
let currentGroup = null;

function group(name, fn) {
  currentGroup = { name, failures: [], checks: 0 };
  try {
    fn();
  } catch (e) {
    currentGroup.failures.push('threw: ' + (e && e.stack ? e.stack.split('\n').slice(0, 2).join(' ') : e));
  }
  results.push(currentGroup);
  currentGroup = null;
}
function check(cond, msg) {
  currentGroup.checks++;
  if (!cond) currentGroup.failures.push(msg);
}
function isNum(x) { return typeof x === 'number' && isFinite(x); }
function approx(a, b, tol) { return Math.abs(a - b) <= (tol == null ? 1e-9 : tol); }

const companies = data.companies || [];
const founders = data.founders || [];
const assessments = data.assessments || [];
const outcomes = data.outcomes || [];
const moic = data.moic_panel || [];
const dimKeys = (data.dimensions || []).map(d => d.key);
const byId = (list, key) => { const m = {}; list.forEach(x => { m[x[key]] = x; }); return m; };
const companyById = byId(companies, 'id');
const founderById = byId(founders, 'id');
const outcomeByCompany = byId(outcomes, 'company_id');
const groupBy = (list, key) => { const m = {}; list.forEach(x => { (m[x[key]] = m[x[key]] || []).push(x); }); return m; };
const assessmentsByFounder = groupBy(assessments, 'founder_id');
const NO_FILTERS = A.defaultFilters();

/* ---------------------------------------------------------------- */
/* Schema groups                                                     */
/* ---------------------------------------------------------------- */
group('meta and dimensions', () => {
  check(data.meta && data.meta.synthetic === true, 'meta.synthetic must be true');
  check(data.meta && data.meta.as_of === '2026-09-22', 'meta.as_of must be 2026-09-22');
  check(dimKeys.length === 8, 'expected 8 dimensions, got ' + dimKeys.length);
  const expectedKeys = ['execution', 'market', 'customer', 'self_awareness', 'resilience', 'talent', 'decisiveness', 'ceiling'];
  check(JSON.stringify(dimKeys) === JSON.stringify(expectedKeys), 'dimension keys or order differ from spec: ' + dimKeys.join(','));
});

group('companies', () => {
  const invested = companies.filter(c => c.decision === 'invested');
  const passed = companies.filter(c => c.decision === 'passed');
  check(invested.length === EXPECTED.invested, `expected ${EXPECTED.invested} invested, got ${invested.length}`);
  check(passed.length === EXPECTED.passed, `expected ${EXPECTED.passed} passed, got ${passed.length}`);
  check(invested.every(c => ['Fund I', 'Fund II', 'Fund III', 'Legacy Fund'].includes(c.fund)), 'every invested company needs a fund from the allowed set');
  check(passed.every(c => c.pass_stage != null && c.pass_stage !== ''), 'every passed company needs pass_stage');
  check(passed.every(c => c.fund == null), 'passed companies must have fund null');
  check(passed.every(c => c.pass_reason != null), 'every passed company needs pass_reason');
  check(companies.every(c => c.decision === 'invested' || c.decision === 'passed'), 'decision must be invested or passed');
  const ids = new Set(companies.map(c => c.id));
  check(ids.size === companies.length, 'company ids must be unique');
  check(companies.every(c => typeof c.name === 'string' && c.name && typeof c.anon_name === 'string' && c.anon_name), 'name and anon_name required');
  check(companies.every(c => ['Pre-Seed', 'Seed', 'Series A'].includes(c.stage_at_entry)), 'stage_at_entry must be Pre-Seed, Seed or Series A');
  check(companies.every(c => /^\d{4}-\d{2}-\d{2}$/.test(c.entry_date)), 'entry_date must be YYYY-MM-DD');
  check(companies.every(c => isNum(c.vintage_year) && c.vintage_year === Number(c.entry_date.slice(0, 4))), 'vintage_year must match entry_date year');
  check(companies.every(c => typeof c.vertical === 'string' && c.vertical in A.VERTICAL_FAMILY), 'vertical must be one of the 14 spec verticals');
  const termSheet = passed.filter(c => c.pass_stage === 'Term Sheet');
  check(termSheet.every(c => c.pass_reason === 'lost'), 'Term Sheet passes must have pass_reason lost');
});

group('founders', () => {
  const ids = new Set(founders.map(f => f.id));
  check(ids.size === founders.length, 'founder ids must be unique');
  check(founders.every(f => companyById[f.company_id]), 'every founder must belong to an existing company');
  const ceoCount = {};
  founders.forEach(f => { if (f.role === 'CEO') ceoCount[f.company_id] = (ceoCount[f.company_id] || 0) + 1; });
  const missing = companies.filter(c => (ceoCount[c.id] || 0) !== 1);
  check(missing.length === 0, 'every company must have exactly one CEO founder; offenders: ' + missing.slice(0, 5).map(c => c.id).join(','));
  check(founders.every(f => ['CEO', 'CTO', 'COO'].includes(f.role)), 'role must be CEO, CTO or COO');
  check(founders.every(f => typeof f.display_name === 'string' && f.display_name.indexOf(',') > 0), 'display_name must look like "Role, Company"');
  check(founders.every(f => f.archetype && A.BACKGROUNDS.includes(f.archetype.background)), 'archetype.background must be from the spec list');
  check(founders.every(f => f.archetype && typeof f.archetype.repeat_founder === 'boolean' && typeof f.archetype.prior_shared_history === 'boolean'), 'archetype booleans required');
});

group('assessments', () => {
  const ids = new Set(assessments.map(a => a.id));
  check(ids.size === assessments.length, 'assessment ids must be unique');
  check(assessments.every(a => founderById[a.founder_id]), 'every assessment must point at an existing founder');
  check(assessments.every(a => ['stage1', 'stage2', 'qpr'].includes(a.stage)), 'stage must be stage1, stage2 or qpr');
  check(assessments.every(a => ['backfilled', 'forward'].includes(a.cohort)), 'cohort must be backfilled or forward');

  let badScore = 0, badConf = 0, missingKey = 0;
  assessments.forEach(a => {
    dimKeys.forEach(k => {
      const v = a.scores ? a.scores[k] : undefined;
      if (v === undefined) { missingKey++; return; }
      const s = v && typeof v === 'object' ? v.score : v;
      if (!(s === null || (Number.isInteger(s) && s >= 1 && s <= 5))) badScore++;
      const conf = v && typeof v === 'object' ? v.confidence : null;
      if (!['H', 'M', 'L'].includes(conf)) badConf++;
    });
  });
  check(missingKey === 0, missingKey + ' assessment score keys missing');
  check(badScore === 0, badScore + ' scores outside 1..5 or null');
  check(badConf === 0, badConf + ' confidence values outside H/M/L');

  check(assessments.every(a => a.intangibles && Array.isArray(a.intangibles.words) && a.intangibles.words.length === 3), 'words must have exactly 3 entries');
  check(assessments.every(a => a.intangibles.words.every(w => typeof w === 'string' && w === w.toLowerCase())), 'words must be lower case strings');
  check(assessments.every(a => Number.isInteger(a.intangibles.conviction) && a.intangibles.conviction >= 1 && a.intangibles.conviction <= 5), 'conviction must be 1..5');
  check(assessments.every(a => ['yes', 'no', 'unsure'].includes(a.intangibles.would_back_again)), 'would_back_again must be yes/no/unsure');
  check(assessments.every(a => Array.isArray(a.intangibles.themes) && a.intangibles.themes.every(t => A.THEMES.includes(t))), 'themes must be a subset of THEMES');
  check(assessments.every(a => typeof a.intangibles.lean_in === 'string' && typeof a.intangibles.worry === 'string'), 'lean_in and worry must be strings');
  check(assessments.every(a => (a.stage === 'qpr') === (a.health_check != null)), 'health_check present iff stage is qpr');

  /* MVP scope decision: only the CEO of each company is assessed. CTO and COO
     founders exist with archetype only. The stage checks below therefore run
     on CEO founders. */
  const unscored = founders.filter(f => f.role === 'CEO' && !(assessmentsByFounder[f.id] || []).length);
  const unscoredRoles = {};
  unscored.forEach(f => { unscoredRoles[f.role] = (unscoredRoles[f.role] || 0) + 1; });
  const roleNote = unscored.length ? ` (CEO founders with no assessments at all: ${JSON.stringify(unscoredRoles)})` : '';
  const ceoFounders = founders.filter(f => f.role === 'CEO');

  const invFounders = ceoFounders.filter(f => companyById[f.company_id].decision === 'invested');
  const missingStages = invFounders.filter(f => {
    const st = new Set((assessmentsByFounder[f.id] || []).map(a => a.stage));
    return !(st.has('stage1') && st.has('stage2'));
  });
  check(missingStages.length === 0, missingStages.length + ' of ' + invFounders.length + ' invested founders lack stage1 or stage2' + roleNote);

  const chemFounders = ceoFounders.filter(f => companyById[f.company_id].decision === 'passed' && companyById[f.company_id].pass_stage === 'Chemistry');
  const chemBad = chemFounders.filter(f => {
    const list = assessmentsByFounder[f.id] || [];
    return list.length === 0 || list.some(a => a.stage !== 'stage1');
  });
  check(chemBad.length === 0, chemBad.length + ' of ' + chemFounders.length + ' Chemistry-pass founders do not have exactly stage1 only' + roleNote);

  const otherPassed = ceoFounders.filter(f => companyById[f.company_id].decision === 'passed' && companyById[f.company_id].pass_stage !== 'Chemistry');
  const otherBad = otherPassed.filter(f => {
    const st = new Set((assessmentsByFounder[f.id] || []).map(a => a.stage));
    return !(st.has('stage1') && st.has('stage2')) || st.has('qpr');
  });
  check(otherBad.length === 0, otherBad.length + ' of ' + otherPassed.length + ' non-Chemistry passed founders lack stage1+stage2 or have a QPR' + roleNote);

  /* The CEO of every company must be scored regardless. */
  const ceoUnscored = founders.filter(f => f.role === 'CEO' && !(assessmentsByFounder[f.id] || []).length);
  check(ceoUnscored.length === 0, ceoUnscored.length + ' CEO founders have no assessments');

  const qprInvestedOnly = assessments.filter(a => a.stage === 'qpr').every(a => companyById[founderById[a.founder_id].company_id].decision === 'invested');
  check(qprInvestedOnly, 'QPR assessments must be invested only');
});

group('outcomes', () => {
  check(outcomes.length === companies.length, `expected ${companies.length} outcomes, got ${outcomes.length}`);
  const perCompany = groupBy(outcomes, 'company_id');
  check(companies.every(c => (perCompany[c.id] || []).length === 1), 'exactly one outcome per company');
  check(outcomes.every(o => o.graduated === true || o.graduated === false || o.graduated === null), 'graduated must be true/false/null');
  const badCensor = outcomes.filter(o => o.graduated === null && (o.window_closed !== false || o.up_round === true));
  check(badCensor.length === 0, badCensor.length + ' censored outcomes with window closed or an up round');
  const badGrad = outcomes.filter(o => o.graduated === true && !(o.up_round === true && isNum(o.next_round_pre_money) && o.next_round_date));
  check(badGrad.length === 0, badGrad.length + ' graduated outcomes lack an up round with date and pre-money');
  check(outcomes.every(o => [18, 24, 30].includes(o.window_months)), 'window_months must be 18, 24 or 30');
  check(outcomes.every(o => isNum(o.entry_pre_money) && o.entry_pre_money > 0), 'entry_pre_money must be positive');
  check(outcomes.every(o => Number.isInteger(o.headcount_entry) && Number.isInteger(o.headcount_now) && o.headcount_now >= 1), 'headcounts must be integers, now >= 1');
  check(outcomes.every(o => ['active', 'realised', 'written_off', 'shut_down', 'acquired', 'unknown'].includes(o.status)), 'status outside allowed set');

  const forced = companies.filter(c => {
    if (c.decision !== 'invested') return false;
    const cur = A.stageRank(c.current_stage), ent = A.stageRank(c.stage_at_entry);
    return cur != null && ent != null && cur > ent;
  });
  const forcedBad = forced.filter(c => outcomeByCompany[c.id].graduated !== true);
  check(forcedBad.length === 0, forcedBad.length + ' invested companies above entry stage not graduated: ' + forcedBad.slice(0, 5).map(c => c.id).join(','));

  const realised = companies.filter(c => c.fund === 'Legacy Fund');
  check(realised.every(c => outcomeByCompany[c.id].status === 'realised' && outcomeByCompany[c.id].graduated === true), 'Legacy Fund companies must be status realised and graduated');

  const hypBad = outcomes.filter(o => {
    const c = companyById[o.company_id];
    if (c.decision === 'invested') return o.hypothetical_moic != null;
    if (o.graduated === true) return !(isNum(o.hypothetical_moic) && approx(o.hypothetical_moic, o.next_round_pre_money / o.entry_pre_money, 0.02));
    return o.hypothetical_moic != null;
  });
  check(hypBad.length === 0, hypBad.length + ' hypothetical_moic values inconsistent with spec');
  check(outcomes.every(o => companyById[o.company_id].decision === 'invested' || o.motive_led_followon === false), 'motive_led_followon only for invested');
});

group('moic_panel', () => {
  check(moic.every(m => companyById[m.company_id] && companyById[m.company_id].decision === 'invested'), 'moic_panel rows must be invested only');
  check(moic.every(m => isNum(m.gross_moic) && m.gross_moic >= 0), 'gross_moic must be >= 0');
  check(moic.every(m => /^\d{4}Q[1-4]$/.test(m.quarter)), 'quarter must look like 2023Q1');
  check(moic.every(m => ['Latest priced round', 'Calibration', 'Market multiples', 'Written off'].includes(m.method)), 'method outside allowed set');
  const byCo = groupBy(moic, 'company_id');
  const invested = companies.filter(c => c.decision === 'invested');
  const missing = invested.filter(c => !(byCo[c.id] || []).length);
  check(missing.length === 0, missing.length + ' invested companies have no moic rows');
  let nonContig = 0, dupe = 0, badStart = 0, badEnd = 0, notZero = 0;
  Object.keys(byCo).forEach(cid => {
    const rows = byCo[cid].slice().sort((a, b) => A.quarterIndex(a.quarter) - A.quarterIndex(b.quarter));
    const idx = rows.map(r => A.quarterIndex(r.quarter));
    for (let i = 1; i < idx.length; i++) {
      if (idx[i] === idx[i - 1]) dupe++;
      else if (idx[i] !== idx[i - 1] + 1) nonContig++;
    }
    const c = companyById[cid];
    const entryQ = A.quarterIndex(c.entry_date);
    /* SPEC 3.6 "first quarter after entry_date": accept the entry quarter (first quarter-end after entry) or the next one. */
    if (idx[0] !== entryQ && idx[0] !== entryQ + 1) badStart++;
    if (rows[rows.length - 1].quarter !== '2026Q2') badEnd++;
    if (outcomeByCompany[cid].status === 'written_off' && rows[rows.length - 1].gross_moic !== 0) notZero++;
  });
  check(dupe === 0, dupe + ' duplicate quarters');
  check(nonContig === 0, nonContig + ' gaps in quarter sequences');
  check(badStart === 0, badStart + ' companies whose panel does not start the quarter after entry');
  check(badEnd === 0, badEnd + ' companies whose panel does not end at 2026Q2');
  check(notZero === 0, notZero + ' written_off companies do not end at 0');
  check(moic.every(m => isNum(m.invested_cost) && m.invested_cost > 0), 'invested_cost must be positive');
});

/* ---------------------------------------------------------------- */
/* Helper groups                                                     */
/* ---------------------------------------------------------------- */
group('helpers: wilson and liftCI', () => {
  const w0 = A.wilson(0, 0);
  check(w0 && w0.p === null && w0.lo === null && w0.hi === null, 'wilson(0,0) must return nulls');
  const w = A.wilson(30, 50);
  check(approx(w.p, 0.6) && w.lo > 0.45 && w.lo < 0.5 && w.hi > 0.7 && w.hi < 0.75, 'wilson(30,50) CI should be about 0.46 to 0.73');
  const wf = A.wilson(50, 50);
  check(wf.hi === 1 && wf.lo > 0.9, 'wilson(50,50) hi must be 1');
  const l = A.liftCI(30, 50, 10, 50);
  check(approx(l.lift, 3) && l.lo < 3 && l.hi > 3 && l.lo > 1, 'liftCI(30,50,10,50) should be 3.0 with CI excluding 1');
  const lz = A.liftCI(0, 20, 5, 20);
  check(isNum(lz.lift) && isNum(lz.lo) && isNum(lz.hi) && lz.continuity === true && lz.lift < 1, 'liftCI with k1=0 must apply continuity and stay finite');
  const lz2 = A.liftCI(5, 20, 0, 20);
  check(isNum(lz2.lift) && isNum(lz2.hi) && lz2.lift > 1, 'liftCI with k0=0 must be finite and > 1');
  const lz3 = A.liftCI(0, 10, 0, 10);
  check(isNum(lz3.lift) && approx(lz3.lift, 1), 'liftCI(0,10,0,10) equals 1 after continuity');
  const ln = A.liftCI(3, 0, 2, 10);
  check(ln.lift === null && ln.lo === null, 'liftCI with n=0 returns nulls');
  check(A.liftRead(1.4, 2) === 'Strong' && A.liftRead(1.1, 2) === 'Some' && A.liftRead(0.8, 1.5) === 'None' && A.liftRead(0.4, 0.9) === 'Reversed' && A.liftRead(null, null) === 'n/a', 'liftRead thresholds');
});

group('helpers: entryScores, resolvedOutcome, applyFilters', () => {
  const f = founders[0];
  const es = A.entryScores(f, assessments);
  check(es && dimKeys.every(k => k in es && 'score' in es[k] && 'confidence' in es[k]), 'entryScores returns all 8 keys with score and confidence');
  const ea = A.entryAssessment(f, assessments);
  const hasS2 = (assessmentsByFounder[f.id] || []).some(a => a.stage === 'stage2');
  check(ea && ea.stage === (hasS2 ? 'stage2' : 'stage1'), 'entryScores prefers stage2 over stage1');
  check(A.entryScores({ id: 'nope' }, assessments) === null, 'entryScores returns null without assessments');

  const resolvedCompanies = companies.filter(c => outcomeByCompany[c.id].graduated !== null);
  const censoredCompanies = companies.filter(c => outcomeByCompany[c.id].graduated === null);
  check(resolvedCompanies.every(c => A.resolvedOutcome(c, outcomes) !== null), 'resolvedOutcome returns the row for resolved companies');
  check(censoredCompanies.every(c => A.resolvedOutcome(c, outcomes) === null), 'resolvedOutcome returns null for censored companies');

  const all = A.applyFilters(data, NO_FILTERS);
  check(all.companies.length === companies.length && all.founders.length === founders.length && all.assessments.length === assessments.length && all.outcomes.length === outcomes.length, 'empty filters keep everything');
  const inv = A.applyFilters(data, { decision: 'invested' });
  check(inv.companies.every(c => c.decision === 'invested') && inv.companies.length === EXPECTED.invested, 'decision filter narrows companies');
  check(inv.founders.every(f => companyById[f.company_id].decision === 'invested'), 'decision filter cascades to founders');
  check(inv.assessments.every(a => companyById[founderById[a.founder_id].company_id].decision === 'invested'), 'decision filter cascades to assessments');
  check(inv.moic_panel.length === moic.length, 'invested filter keeps all moic rows');
  const pas = A.applyFilters(data, { decision: 'passed' });
  check(pas.moic_panel.length === 0 && pas.companies.length === EXPECTED.passed, 'passed filter drops moic rows');
  const seedOnly = A.applyFilters(data, { stage_at_entry: ['Seed'] });
  check(seedOnly.companies.every(c => c.stage_at_entry === 'Seed') && seedOnly.companies.length > 0, 'stage filter works');
  const vint = A.applyFilters(data, { vintage: [String(companies[0].vintage_year)] });
  check(vint.companies.every(c => c.vintage_year === companies[0].vintage_year) && vint.companies.length > 0, 'vintage filter accepts strings');
  const rater = A.applyFilters(data, { rater: ['Rater A'] });
  check(rater.assessments.every(a => a.rater === 'Rater A'), 'rater filter works');
  const cohort = A.applyFilters(data, { cohort: 'backfilled' });
  check(cohort.assessments.every(a => a.cohort === 'backfilled'), 'cohort filter works');
});

/* ---------------------------------------------------------------- */
/* Analytics groups                                                  */
/* ---------------------------------------------------------------- */
group('analytics: populationSummary', () => {
  const s = A.populationSummary(data, NO_FILTERS);
  check(s.invested.count === EXPECTED.invested && s.passed.count === EXPECTED.passed, 'counts match population');
  const resolved = outcomes.filter(o => o.graduated !== null).length;
  check(s.invested.n + s.passed.n === resolved, 'resolved n sums to resolved outcomes');
  check(s.pending === outcomes.length - resolved, 'pending equals censored outcomes');
  check(s.base.k === s.invested.k + s.passed.k, 'base k is the sum of both sides');
  check(s.assessments === assessments.length, 'assessment count');
  check(s.foundersScored > 0 && s.foundersScored <= founders.length, 'foundersScored in range');
  check(Object.keys(s.byStage).length >= 1, 'byStage populated');
});

group('analytics: dimensionLift', () => {
  const all = A.dimensionLift(data, NO_FILTERS, 'all');
  check(all.rows.length === 8, 'dimensionLift("all") returns 8 rows, got ' + all.rows.length);
  const byKey = {};
  all.rows.forEach(r => { byKey[r.key] = r; });
  check(isNum(byKey.ceiling.lift) && isNum(byKey.customer.lift), 'ceiling and customer lifts are numeric');
  check(byKey.ceiling.lift > byKey.customer.lift, `lift for ceiling (${byKey.ceiling.lift}) must exceed lift for customer (${byKey.customer.lift})`);
  check(all.rows.every(r => r.high.n + r.low.n <= all.nResolved), 'high + low n never exceeds resolved founders');
  check(all.rows.every(r => r.notAssessed.n === all.n), 'notAssessed denominator is all scored founders');
  check(all.rows.every(r => ['Strong', 'Some', 'None', 'Reversed', 'n/a'].includes(r.read)), 'read label valid');
  check(all.rows.every(r => r.lift === null || (r.lo <= r.lift && r.lift <= r.hi)), 'lift within its CI');

  const views = A.dimensionLiftViews(data, NO_FILTERS);
  check(views.all.rows.length === 8 && views.invested.rows.length === 8 && views.passed.rows.length === 8, 'three views with 8 rows each');
  const lifts = views.all.rows.map(r => isNum(r.lift) ? r.lift : -Infinity);
  check(lifts.every((v, i) => i === 0 || lifts[i - 1] >= v), 'all view sorted by lift descending');
  check(views.invested.rows.every((r, i) => r.key === views.order[i]) && views.passed.rows.every((r, i) => r.key === views.order[i]), 'invested and passed views follow the all-view order');
  check(views.selectionGap.length === 8 && views.selectionGap.every(g => g.gap === null || approx(g.gap, g.all - g.invested)), 'selectionGap = lift_all - lift_invested');
  const invOnly = A.dimensionLift(data, { decision: 'passed' }, 'invested');
  check(invOnly.n === A.dimensionLift(data, NO_FILTERS, 'invested').n, 'view overrides the decision filter');
});

group('analytics: vetoSpike', () => {
  const v = A.vetoSpike(data, NO_FILTERS);
  check(v.veto.with.n > 0 && v.veto.without.n > 0, 'both veto groups populated');
  check(isNum(v.veto.with.p) && isNum(v.veto.without.p) && v.veto.with.p < v.veto.without.p, `veto rate (${v.veto.with.p}) must be below no-veto rate (${v.veto.without.p})`);
  check(v.veto.with.n + v.veto.without.n === v.n && v.spike.with.n + v.spike.without.n === v.n && v.cleanSpike.with.n + v.cleanSpike.without.n === v.n, 'groups partition resolved founders');
  check(v.cleanSpike.with.n <= v.spike.with.n, 'clean spike is a subset of spike');
});

group('analytics: profileShape and personaGrid', () => {
  const p = A.profileShape(data, NO_FILTERS);
  check(p.rows.length > 0 && p.rows.every(r => r.n1 >= 0 && r.n5 >= 0 && r.nNull + r.nScored === 8), 'profile rows account for all 8 dimensions');
  check(p.rows.every(r => r.nScored === 0 || (r.maxDim && r.minDim && r.maxDim.score >= r.minDim.score)), 'max >= min');
  const g = A.personaGrid(data, NO_FILTERS);
  check(g.rows.length === 7 && g.cols.length === 8, 'persona grid is 7 backgrounds x 8 families');
  let total = 0, resolved = 0;
  g.rows.forEach(r => g.cols.forEach(c => { const cell = g.cells[r][c]; total += cell.invested + cell.passed; resolved += cell.resolved; }));
  check(total === founders.length, `grid cells sum to founders (${total} vs ${founders.length})`);
  check(resolved === g.total.resolved, 'grid resolved total consistent');
  check(g.rows.every(r => g.cols.every(c => { const cell = g.cells[r][c]; return cell.rate === null || (cell.rate >= 0 && cell.rate <= 1 && cell.graduated <= cell.resolved); })), 'cell rates valid');
  check(A.verticalFamily('Embedded finance') === 'Infrastructure' && A.verticalFamily('Stealth') === 'Other' && A.verticalFamily('Data & analytics (incl. AI)') === 'Data & AI', 'vertical family mapping');
});

group('analytics: stageDelta', () => {
  const s = A.stageDelta(data, NO_FILTERS);
  check(s.rows.length === 8, 'stageDelta returns 8 rows');
  check(s.nPairs > 0, 'has paired stage1/stage2 founders');
  check(s.rows.every(r => r.right.k <= r.right.n && (r.graduated.mean === null || Math.abs(r.graduated.mean) <= 4)), 'right-direction shares and deltas are in range');
  check(s.diligence && Array.isArray(s.diligence.top3) && s.diligence.top3.length <= 3 && typeof s.diligence.improved === 'boolean', 'diligence summary present');
});

group('analytics: raterCalibration', () => {
  const r = A.raterCalibration(data, NO_FILTERS);
  const raters = new Set(assessments.map(a => a.rater));
  check(r.rows.length === raters.size, 'one row per rater');
  check(r.rows.reduce((acc, x) => acc + x.n, 0) === assessments.length, 'rater n sums to assessments');
  check(r.rows.every(x => x.meanScore === null || (x.meanScore >= 1 && x.meanScore <= 5)), 'mean score in 1..5');
  check(r.rows.every(x => x.share3.share === null || (x.share3.share >= 0 && x.share3.share <= 1)), 'share of 3s in range');
  check(r.rows.every(x => typeof x.ceilingHigh.smallN === 'boolean'), 'small-n caveat flag present');
});

group('analytics: intangibles', () => {
  const i = A.intangibles(data, NO_FILTERS);
  check(i.n > 0, 'intangibles counted');
  check(Array.isArray(i.words.graduated) && Array.isArray(i.words.notGraduated) && Array.isArray(i.words.pending), 'word lists per outcome');
  const totalWords = ['graduated', 'notGraduated', 'pending'].reduce((acc, b) => acc + i.words[b].reduce((a, w) => a + w.count, 0), 0);
  check(totalWords === i.n * 3, 'word counts sum to 3 per entry assessment');
  check(i.themes.length >= 11 && i.themes.every(t => t.rate === null || (t.rate >= 0 && t.rate <= 1)), 'theme rows with valid rates');
  check(i.specificity.specific.n + i.specificity.adjectival.n > 0, 'specificity groups populated');
  check(A.isSpecific('closed 3 design partners') && A.isSpecific('poached the head of risk') && !A.isSpecific('very impressive founder with strong energy'), 'specificity heuristic');
  check(A.worryIntensity('Solo founder, no CTO and burn is high') === 3 && A.worryIntensity('Knows the market, nothing to note') === 0, 'worry intensity counts whole words only');
  check(i.worry.rows.length === 3, 'three worry buckets');
  const m = i.backAgain.matrix;
  let trans = 0;
  A.BACK_AGAIN.forEach(e => A.BACK_AGAIN.forEach(q => { trans += m[e][q]; }));
  check(trans === i.backAgain.n, 'transition matrix sums to n');
});

group('analytics: decisionQuality', () => {
  const d = A.decisionQuality(data, NO_FILTERS);
  const c = d.cells;
  const resolved = outcomes.filter(o => o.graduated !== null).length;
  check(c.investedGraduated + c.investedNot + c.passedGraduated + c.passedNot === resolved, `2x2 cells (${c.investedGraduated + c.investedNot + c.passedGraduated + c.passedNot}) must sum to resolved count (${resolved})`);
  check(d.resolved === resolved, 'resolved field matches');
  check(d.pending.invested + d.pending.passed === outcomes.length - resolved, 'pending matches censored');
  check(d.passedGraduatedByReason.reduce((a, r) => a + r.count, 0) === c.passedGraduated, 'pass reason breakdown sums to anti-portfolio cell');
  check(d.precision.p === null || (d.precision.p >= 0 && d.precision.p <= 1), 'precision in range');
  check(d.recall.p === null || (d.recall.p >= 0 && d.recall.p <= 1), 'recall in range');
  check(d.judgmentMisses.every(j => companyById[j.company_id].pass_reason === 'founder' && outcomeByCompany[j.company_id].graduated === true), 'judgment misses are founder passes that graduated');
  check(d.investedWithVeto.every(v => companyById[v.company_id].decision === 'invested' && v.vetoes.length > 0), 'veto list is invested with at least one 1');
  check(d.hypotheticalMoic.n === d.passedGraduatedByReason.reduce((a, r) => a + r.moicN, 0), 'hypothetical MOIC count consistent');
  check(typeof d.note === 'string' && d.note.length > 0, 'recall note present');
});

group('analytics: moicSeries', () => {
  const m = A.moicSeries(data, NO_FILTERS);
  const investedWithRows = new Set(moic.map(r => r.company_id)).size;
  check(m.companies.length === investedWithRows, 'one series per invested company with rows');
  check(m.companies.every(co => co.series.every((r, i) => i === 0 || r.qi > co.series[i - 1].qi)), 'series sorted by quarter');
  check(m.companies.every(co => co.series[0].q === 0 || co.series[0].q === 1), 'series start in the entry quarter or the one after');
  check(m.companies.every(co => co.moic24 === null || co.moic24 >= 0), 'moic24 non-negative or null');
  const old = m.companies.filter(co => co.entry_date <= '2024-06-30');
  check(old.every(co => co.moic24 !== null), 'companies older than 24 months have moic24');
  const young = m.companies.filter(co => co.entry_date > '2024-09-22');
  check(young.every(co => co.moic24 === null), 'companies younger than 24 months have moic24 null');
  check(m.median.length > 0 && m.median.every((p, i) => p.q === i + m.median[0].q && (p.median === null || p.median >= 0)), 'median trajectory is a contiguous quarters-since-entry axis');
  check(m.moic24.n === m.companies.filter(co => co.moic24 !== null).length, 'moic24 n matches');
  check(typeof m.note === 'string', 'sticky-mark note present');
});

group('analytics: completeness and founderTable', () => {
  const c = A.completeness(data, NO_FILTERS);
  check(c.byStage.length === 3 && c.byStage.every(s => s.nullScores.share === null || (s.nullScores.share >= 0 && s.nullScores.share <= 1)), 'completeness per stage');
  check(c.censored.n === outcomes.length, 'censored denominator is all outcomes');
  check(c.recentQpr.n === companies.filter(x => x.decision === 'invested').length, 'recent QPR denominator is invested companies');
  const t = A.founderTable(data, NO_FILTERS);
  check(t.rows.length === founders.length, 'founder table has one row per founder');
  check(t.rows.every(r => r.scores && dimKeys.every(k => k in r.scores)), 'every row has 8 score slots');
  check(t.rows.every(r => typeof r.company === 'string' && r.company.length > 0), 'company name present');
  const anon = A.founderTable(data, { anonymize: true });
  check(anon.rows.every(r => r.company === companyById[r.company_id].anon_name && r.display_name.indexOf(companyById[r.company_id].name) < 0 || companyById[r.company_id].name === companyById[r.company_id].anon_name), 'anonymize swaps names');
  check(t.rows.every(r => r.n1 + r.n5 <= 8 && Array.isArray(r.words)), 'n1, n5 and words shape');
});

/* ---------------------------------------------------------------- */
/* Report                                                            */
/* ---------------------------------------------------------------- */
let failed = 0, checks = 0;
console.log('Data file: ' + DATA_PATH);
console.log(`Population: ${companies.length} companies, ${founders.length} founders, ${assessments.length} assessments, ${outcomes.length} outcomes, ${moic.length} moic rows`);
console.log('');
results.forEach(g => {
  checks += g.checks;
  if (g.failures.length) {
    failed++;
    console.log(`FAIL  ${g.name} (${g.failures.length} of ${g.checks} checks failed)`);
    g.failures.forEach(f => console.log('      - ' + f));
  } else {
    console.log(`PASS  ${g.name} (${g.checks} checks)`);
  }
});
console.log('');
console.log(`${results.length - failed} of ${results.length} groups passed, ${checks} checks total`);
process.exit(failed ? 1 : 0);

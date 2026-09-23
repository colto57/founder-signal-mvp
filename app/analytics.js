/*
 * Founder Signal System, MVP analytics.
 * Pure functions over window.FSS_DATA. No DOM access.
 * Browser: window.FSS_ANALYTICS. Node: module.exports.
 * Every metric takes (data, filters) and returns plain objects.
 */
(function (root) {
  'use strict';

  var Z = 1.96;
  var DEFAULT_AS_OF = '2026-09-22';

  var THEMES = ['Grit', 'Clarity', 'Magnetism', 'Speed', 'Non-obvious insight', 'Storytelling',
    'Domain depth', 'Chip on the shoulder', 'Calm under pressure', 'Hustle', 'Intellectual honesty'];

  var BACKGROUNDS = ['Repeat founder', 'High-velocity operator', 'Banking or finance', 'Consulting',
    'Technical or academic', 'Domain insider', 'Other'];

  var FAMILIES = ['Payments', 'Lending', 'Wealth management', 'Capital markets', 'Insurance',
    'Data & AI', 'Infrastructure', 'Other'];

  var VERTICAL_FAMILY = {
    'Payments': 'Payments',
    'Lending': 'Lending',
    'Wealth management': 'Wealth management',
    'Capital markets': 'Capital markets',
    'Insurance': 'Insurance',
    'Data & analytics (incl. AI)': 'Data & AI',
    'Infrastructure': 'Infrastructure',
    'Embedded finance': 'Infrastructure',
    'Banking': 'Infrastructure',
    'Digital Assets': 'Infrastructure',
    'Alternatives': 'Other',
    'Green finance & ESG': 'Other',
    'Business Services': 'Other',
    'Stealth': 'Other'
  };

  var STAGE_RANK = {
    'Pre-Seed': 0,
    'Seed': 1,
    'Seed Extension': 1,
    'Series A': 2,
    'Series A Extension': 2,
    'Series B': 3,
    'Origination': 3,
    'Series C': 4,
    'Series D': 5,
    'Series E': 6
  };

  var PASS_REASONS = ['price', 'founder', 'business', 'timing', 'lost', 'other'];
  var BACK_AGAIN = ['yes', 'unsure', 'no'];
  var ENTRY_STAGES = ['stage1', 'stage2'];

  var SPECIFIC_KEYWORDS = ['closed', 'poached', 'shipped', 'signed', 'hired', 'left', 'churn',
    'design partner', 'pilot', 'contract', 'reference'];
  var WORRY_KEYWORDS = ['solo', 'no', 'never', 'burn', 'runway', 'churn', 'conflict', 'defensive', 'thin'];

  /* ------------------------------------------------------------------ */
  /* Small utilities                                                     */
  /* ------------------------------------------------------------------ */

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  var SPECIFIC_RE = SPECIFIC_KEYWORDS.map(function (k) { return new RegExp('\\b' + escapeRe(k), 'i'); });
  var WORRY_RE = WORRY_KEYWORDS.map(function (k) { return new RegExp('\\b' + escapeRe(k) + '\\b', 'i'); });

  function isNum(x) { return typeof x === 'number' && isFinite(x); }

  function mean(arr) {
    var v = arr.filter(isNum);
    if (!v.length) return null;
    var s = 0;
    for (var i = 0; i < v.length; i++) s += v[i];
    return s / v.length;
  }

  function median(arr) {
    var v = arr.filter(isNum).slice().sort(function (a, b) { return a - b; });
    if (!v.length) return null;
    var m = Math.floor(v.length / 2);
    return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
  }

  function indexBy(list, key) {
    var out = {};
    for (var i = 0; i < list.length; i++) out[list[i][key]] = list[i];
    return out;
  }

  function groupBy(list, key) {
    var out = {};
    for (var i = 0; i < list.length; i++) {
      var k = list[i][key];
      if (!out[k]) out[k] = [];
      out[k].push(list[i]);
    }
    return out;
  }

  function uniq(list) {
    var seen = {}, out = [];
    for (var i = 0; i < list.length; i++) {
      var k = String(list[i]);
      if (!seen[k]) { seen[k] = true; out.push(list[i]); }
    }
    return out;
  }

  function latest(assessments) {
    if (!assessments || !assessments.length) return null;
    var best = assessments[0];
    for (var i = 1; i < assessments.length; i++) {
      var a = assessments[i];
      if ((a.date || '') > (best.date || '') || ((a.date || '') === (best.date || '') && String(a.id) > String(best.id))) best = a;
    }
    return best;
  }

  function parseDate(s) {
    if (!s) return null;
    if (s instanceof Date) return s;
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(s));
    if (!m) return null;
    return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  }

  function toISO(d) {
    if (!d) return null;
    return d.toISOString().slice(0, 10);
  }

  function addMonths(dateStr, months) {
    var d = parseDate(dateStr);
    if (!d) return null;
    var y = d.getUTCFullYear(), m = d.getUTCMonth() + months, day = d.getUTCDate();
    var target = new Date(Date.UTC(y, m, 1));
    var lastDay = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
    target.setUTCDate(Math.min(day, lastDay));
    return target;
  }

  function monthsBetween(a, b) {
    var da = parseDate(a), db = parseDate(b);
    if (!da || !db) return null;
    return (db.getUTCFullYear() - da.getUTCFullYear()) * 12 + (db.getUTCMonth() - da.getUTCMonth()) + (db.getUTCDate() - da.getUTCDate()) / 30.44;
  }

  /* "2023Q1" or "2023-02-14" to an integer quarter index */
  function quarterIndex(s) {
    if (s == null) return null;
    var m = /^(\d{4})\s*Q([1-4])$/i.exec(String(s));
    if (m) return (+m[1]) * 4 + (+m[2] - 1);
    var d = parseDate(s);
    if (!d) return null;
    return d.getUTCFullYear() * 4 + Math.floor(d.getUTCMonth() / 3);
  }

  function quarterLabel(qi) {
    if (qi == null) return null;
    return Math.floor(qi / 4) + 'Q' + ((qi % 4) + 1);
  }

  function stageRank(stage) {
    if (stage == null) return null;
    var r = STAGE_RANK[stage];
    return r == null ? null : r;
  }

  function verticalFamily(vertical) {
    return VERTICAL_FAMILY[vertical] || 'Other';
  }

  function displayName(founder, company, anonymize) {
    if (!founder) return '';
    if (anonymize && company) return (founder.role || 'Founder') + ', ' + (company.anon_name || company.id);
    if (founder.display_name) return founder.display_name;
    return (founder.role || 'Founder') + ', ' + (company ? company.name : founder.company_id);
  }

  function companyName(company, anonymize) {
    if (!company) return '';
    return anonymize ? (company.anon_name || company.id) : company.name;
  }

  /* ------------------------------------------------------------------ */
  /* 4.1 Helpers                                                         */
  /* ------------------------------------------------------------------ */

  function wilson(k, n, z) {
    z = z == null ? Z : z;
    k = isNum(k) ? k : 0;
    n = isNum(n) ? n : 0;
    if (n <= 0) return { p: null, lo: null, hi: null, k: k, n: 0 };
    var p = k / n, z2 = z * z;
    var denom = 1 + z2 / n;
    var centre = (p + z2 / (2 * n)) / denom;
    var half = (z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / denom;
    return { p: p, lo: Math.max(0, centre - half), hi: Math.min(1, centre + half), k: k, n: n };
  }

  /* Ratio of proportions with Katz log CI. +0.5 continuity on all four counts when any k is 0. */
  function liftCI(k1, n1, k0, n0, z) {
    z = z == null ? Z : z;
    if (!isNum(n1) || !isNum(n0) || n1 <= 0 || n0 <= 0) {
      return { lift: null, lo: null, hi: null, se: null, continuity: false };
    }
    k1 = isNum(k1) ? k1 : 0;
    k0 = isNum(k0) ? k0 : 0;
    var cc = (k1 === 0 || k0 === 0);
    var a = k1, b = n1, c = k0, d = n0;
    if (cc) { a += 0.5; b += 0.5; c += 0.5; d += 0.5; }
    var lift = (a / b) / (c / d);
    var v = 1 / a - 1 / b + 1 / c - 1 / d;
    var se = Math.sqrt(Math.max(v, 0));
    return { lift: lift, lo: lift * Math.exp(-z * se), hi: lift * Math.exp(z * se), se: se, continuity: cc };
  }

  /* One-word read of a lift CI, gated by a minimum sample in each of the two groups being
     compared. Without the floor, a small group that happens to land 100% one way (or 0%)
     produces zero variance in the Katz formula and can look more confident than a much
     larger, more representative group, exactly backwards from what "confident" should mean.
     highN/lowN are optional so existing callers that only have the interval keep working; pass
     them whenever the group sizes are available. */
  var MIN_LIFT_BUCKET_N = 10;
  function liftRead(lo, hi, highN, lowN) {
    if (!isNum(lo) || !isNum(hi)) return 'n/a';
    if (isNum(highN) && isNum(lowN) && (highN < MIN_LIFT_BUCKET_N || lowN < MIN_LIFT_BUCKET_N)) return 'Thin';
    if (lo > 1.3) return 'Strong';
    if (lo > 1.0) return 'Some';
    if (hi < 1.0) return 'Reversed';
    return 'None';
  }

  function normalizeScores(scores) {
    var out = {};
    if (!scores) return out;
    Object.keys(scores).forEach(function (k) {
      var v = scores[k];
      if (v == null) { out[k] = { score: null, confidence: null }; return; }
      if (typeof v === 'number') { out[k] = { score: v, confidence: null }; return; }
      var s = v.score;
      out[k] = { score: isNum(s) ? s : null, confidence: v.confidence || null };
    });
    return out;
  }

  function pickEntryAssessment(list) {
    var s2 = latest(list.filter(function (a) { return a.stage === 'stage2'; }));
    if (s2) return s2;
    return latest(list.filter(function (a) { return a.stage === 'stage1'; }));
  }

  /* Score at entry: stage2 if present, else stage1. Returns { key -> {score, confidence} } or null. */
  function entryScores(founder, assessments) {
    var a = entryAssessment(founder, assessments);
    return a ? normalizeScores(a.scores) : null;
  }

  function entryAssessment(founder, assessments) {
    if (!founder) return null;
    var list = (assessments || []).filter(function (a) { return a.founder_id === founder.id; });
    return pickEntryAssessment(list);
  }

  /* Outcome row where graduated is true or false. Null when censored or missing. */
  function resolvedOutcome(company, outcomes) {
    if (!company) return null;
    var list = outcomes || [];
    for (var i = 0; i < list.length; i++) {
      var o = list[i];
      if (o.company_id === company.id && (o.graduated === true || o.graduated === false)) return o;
    }
    return null;
  }

  /* ------------------------------------------------------------------ */
  /* Filters and context                                                  */
  /* ------------------------------------------------------------------ */

  function defaultFilters() {
    return { decision: 'all', stage_at_entry: [], vertical: [], vintage: [], cohort: 'all', rater: [], anonymize: false };
  }

  function normalizeFilters(f) {
    var d = defaultFilters();
    if (!f) return d;
    var out = {};
    Object.keys(d).forEach(function (k) {
      var v = f[k];
      if (Array.isArray(d[k])) out[k] = Array.isArray(v) ? v.slice() : (v == null || v === '' ? [] : [v]);
      else out[k] = v == null ? d[k] : v;
    });
    if (out.decision !== 'invested' && out.decision !== 'passed') out.decision = 'all';
    if (out.cohort !== 'backfilled' && out.cohort !== 'forward') out.cohort = 'all';
    out.anonymize = !!out.anonymize;
    return out;
  }

  function inList(list, v) {
    if (!list.length) return true;
    var s = String(v);
    for (var i = 0; i < list.length; i++) if (String(list[i]) === s) return true;
    return false;
  }

  function applyFilters(data, filters) {
    var f = normalizeFilters(filters);
    var companies = (data.companies || []).filter(function (c) {
      if (f.decision !== 'all' && c.decision !== f.decision) return false;
      if (!inList(f.stage_at_entry, c.stage_at_entry)) return false;
      if (!inList(f.vertical, c.vertical)) return false;
      if (!inList(f.vintage, c.vintage_year)) return false;
      return true;
    });
    var cids = {};
    companies.forEach(function (c) { cids[c.id] = true; });
    var founders = (data.founders || []).filter(function (fo) { return cids[fo.company_id]; });
    var fids = {};
    founders.forEach(function (fo) { fids[fo.id] = true; });
    var assessments = (data.assessments || []).filter(function (a) {
      if (!fids[a.founder_id]) return false;
      if (f.cohort !== 'all' && a.cohort !== f.cohort) return false;
      if (!inList(f.rater, a.rater)) return false;
      return true;
    });
    var outcomes = (data.outcomes || []).filter(function (o) { return cids[o.company_id]; });
    var moic_panel = (data.moic_panel || []).filter(function (m) { return cids[m.company_id]; });
    return { companies: companies, founders: founders, assessments: assessments, outcomes: outcomes, moic_panel: moic_panel, filters: f };
  }

  function buildContext(data, filters) {
    var sub = applyFilters(data, filters);
    var ctx = {
      data: data,
      filters: sub.filters,
      asOf: (data.meta && data.meta.as_of) || DEFAULT_AS_OF,
      dims: data.dimensions || [],
      companies: sub.companies,
      founders: sub.founders,
      assessments: sub.assessments,
      outcomes: sub.outcomes,
      moic: sub.moic_panel
    };
    ctx.keys = ctx.dims.map(function (d) { return d.key; });
    ctx.labels = {};
    ctx.dims.forEach(function (d) { ctx.labels[d.key] = d.label; });
    ctx.companyById = indexBy(ctx.companies, 'id');
    ctx.founderById = indexBy(ctx.founders, 'id');
    ctx.foundersByCompany = groupBy(ctx.founders, 'company_id');
    ctx.assessmentsByFounder = groupBy(ctx.assessments, 'founder_id');
    ctx.outcomeByCompany = indexBy(ctx.outcomes, 'company_id');
    ctx.moicByCompany = groupBy(ctx.moic, 'company_id');
    return ctx;
  }

  function graduatedOf(ctx, companyId) {
    var o = ctx.outcomeByCompany[companyId];
    if (!o) return null;
    return (o.graduated === true || o.graduated === false) ? o.graduated : null;
  }

  function outcomeBucket(g) {
    return g === true ? 'graduated' : (g === false ? 'notGraduated' : 'pending');
  }

  /* One unit per founder that has an entry assessment. */
  function scoredFounders(ctx) {
    var units = [];
    ctx.founders.forEach(function (fo) {
      var list = ctx.assessmentsByFounder[fo.id] || [];
      var a = pickEntryAssessment(list);
      if (!a) return;
      var company = ctx.companyById[fo.company_id] || null;
      units.push({
        founder: fo,
        company: company,
        entryA: a,
        entry: normalizeScores(a.scores),
        outcome: ctx.outcomeByCompany[fo.company_id] || null,
        graduated: graduatedOf(ctx, fo.company_id)
      });
    });
    return units;
  }

  /* ------------------------------------------------------------------ */
  /* 4.2 Metrics                                                         */
  /* ------------------------------------------------------------------ */

  function populationSummary(data, filters) {
    var ctx = buildContext(data, filters);
    var inv = { count: 0, k: 0, n: 0 }, pas = { count: 0, k: 0, n: 0 };
    var pending = 0, pendingInvested = 0, pendingPassed = 0;
    var byStage = {};
    ctx.companies.forEach(function (c) {
      var side = c.decision === 'invested' ? inv : pas;
      side.count++;
      var st = c.stage_at_entry || 'Unknown';
      if (!byStage[st]) byStage[st] = { invested: 0, passed: 0, total: 0 };
      byStage[st][c.decision === 'invested' ? 'invested' : 'passed']++;
      byStage[st].total++;
      var g = graduatedOf(ctx, c.id);
      if (g == null) {
        pending++;
        if (c.decision === 'invested') pendingInvested++; else pendingPassed++;
        return;
      }
      side.n++;
      if (g) side.k++;
    });
    var units = scoredFounders(ctx);
    var invW = wilson(inv.k, inv.n), pasW = wilson(pas.k, pas.n), baseW = wilson(inv.k + pas.k, inv.n + pas.n);
    return {
      invested: { count: inv.count, k: inv.k, n: inv.n, rate: invW.p, lo: invW.lo, hi: invW.hi },
      passed: { count: pas.count, k: pas.k, n: pas.n, rate: pasW.p, lo: pasW.lo, hi: pasW.hi },
      base: { k: baseW.k, n: baseW.n, rate: baseW.p, lo: baseW.lo, hi: baseW.hi },
      pending: pending,
      pendingInvested: pendingInvested,
      pendingPassed: pendingPassed,
      companies: ctx.companies.length,
      founders: ctx.founders.length,
      foundersScored: units.length,
      assessments: ctx.assessments.length,
      byStage: byStage
    };
  }

  /* outcomeOf defaults to graduation; pass a different accessor (e.g. was this founder invested) to reuse the same lift math for a different question. */
  function liftRowsFromUnits(ctx, units, scoreOf, outcomeOf) {
    outcomeOf = outcomeOf || function (u) { return u.graduated; };
    return ctx.dims.map(function (d) {
      var hi = { k: 0, n: 0 }, lo = { k: 0, n: 0 }, nulls = 0, total = 0;
      units.forEach(function (u) {
        var sc = scoreOf(u, d.key);
        total++;
        if (sc == null) { nulls++; return; }
        var outcome = outcomeOf(u);
        if (outcome == null) return;
        var g = sc >= 4 ? hi : lo;
        g.n++;
        if (outcome) g.k++;
      });
      var L = liftCI(hi.k, hi.n, lo.k, lo.n);
      return {
        key: d.key,
        label: d.label,
        high: wilson(hi.k, hi.n),
        low: wilson(lo.k, lo.n),
        lift: L.lift,
        lo: L.lo,
        hi: L.hi,
        continuity: L.continuity,
        notAssessed: { k: nulls, n: total, share: total ? nulls / total : null },
        read: liftRead(L.lo, L.hi, hi.n, lo.n)
      };
    });
  }

  /* view: "all" | "invested" | "passed". The view overrides filters.decision. */
  function dimensionLift(data, filters, view) {
    var f = normalizeFilters(filters);
    view = view || 'all';
    f.decision = (view === 'invested' || view === 'passed') ? view : 'all';
    var ctx = buildContext(data, f);
    var units = scoredFounders(ctx);
    var rows = liftRowsFromUnits(ctx, units, function (u, key) { return u.entry[key] ? u.entry[key].score : null; });
    var resolved = units.filter(function (u) { return u.graduated != null; }).length;
    return { view: view, n: units.length, nResolved: resolved, rows: rows };
  }

  function dimensionLiftViews(data, filters) {
    var all = dimensionLift(data, filters, 'all');
    var inv = dimensionLift(data, filters, 'invested');
    var pas = dimensionLift(data, filters, 'passed');
    var order = all.rows.slice().sort(function (a, b) {
      var la = isNum(a.lift) ? a.lift : -Infinity, lb = isNum(b.lift) ? b.lift : -Infinity;
      return lb - la;
    }).map(function (r) { return r.key; });
    function reorder(res) {
      var byKey = indexBy(res.rows, 'key');
      res.rows = order.map(function (k) { return byKey[k]; });
      return res;
    }
    reorder(all); reorder(inv); reorder(pas);
    var invByKey = indexBy(inv.rows, 'key');
    var selectionGap = all.rows.map(function (r) {
      var i = invByKey[r.key];
      var gap = (isNum(r.lift) && i && isNum(i.lift)) ? r.lift - i.lift : null;
      return { key: r.key, label: r.label, all: r.lift, invested: i ? i.lift : null, gap: gap };
    });
    return { all: all, invested: inv, passed: pas, order: order, selectionGap: selectionGap };
  }

  /* Same lift math, different question: does a high score on this dimension predict getting invested at all
     (regardless of what happens after), rather than predicting graduation. This is what "over-weighted in
     decisions" means in practice: a high decision lift paired with a weak or absent graduation lift. */
  function dimensionDecisionLift(data, filters) {
    var f = normalizeFilters(filters);
    f.decision = 'all';
    var ctx = buildContext(data, f);
    var units = scoredFounders(ctx);
    var rows = liftRowsFromUnits(
      ctx, units,
      function (u, key) { return u.entry[key] ? u.entry[key].score : null; },
      function (u) { return u.company ? u.company.decision === 'invested' : null; }
    );
    return { n: units.length, rows: rows };
  }

  /* The ground-truth summary: which dimensions actually predict success, and which ones the firm leans on in
     decisions without them predicting anything. Everything here is derived from dimensionLiftViews, vetoSpike
     and dimensionDecisionLift; this function only picks out and labels the rows worth leading with. */
  function topInsights(data, filters) {
    var grad = dimensionLiftViews(data, filters).all;
    var dec = dimensionDecisionLift(data, filters);
    var decByKey = indexBy(dec.rows, 'key');
    var predictive = grad.rows.filter(function (r) {
      return r.read === 'Strong' || r.read === 'Some';
    });
    /* Asymmetric on purpose: flagging "the team leans on this" only needs a suggestive point estimate
       (>= 1.3x), because the cost of watching it is low; flagging "and it does not predict graduation"
       needs the full confidence-interval read, because that is the stronger claim to act on. */
    var overweighted = grad.rows.filter(function (r) {
      var weak = r.read === 'None' || r.read === 'Reversed' || !isNum(r.lift);
      var d = decByKey[r.key];
      var leanedOn = d && isNum(d.lift) && d.lift >= 1.3;
      return weak && leanedOn;
    }).map(function (r) {
      return { key: r.key, label: r.label, graduation: r, decision: decByKey[r.key] };
    });
    return {
      n: grad.n,
      nResolved: grad.nResolved,
      predictive: predictive,
      overweighted: overweighted,
      decisionByKey: decByKey,
      veto: vetoSpike(data, filters)
    };
  }

  function vetoSpike(data, filters) {
    var ctx = buildContext(data, filters);
    var units = scoredFounders(ctx).filter(function (u) { return u.graduated != null; });
    var groups = {
      veto: { with: { k: 0, n: 0 }, without: { k: 0, n: 0 } },
      spike: { with: { k: 0, n: 0 }, without: { k: 0, n: 0 } },
      cleanSpike: { with: { k: 0, n: 0 }, without: { k: 0, n: 0 } }
    };
    units.forEach(function (u) {
      var any1 = false, any5 = false;
      ctx.keys.forEach(function (k) {
        var s = u.entry[k] ? u.entry[k].score : null;
        if (s === 1) any1 = true;
        if (s === 5) any5 = true;
      });
      function tally(g, cond) { var side = cond ? g.with : g.without; side.n++; if (u.graduated) side.k++; }
      tally(groups.veto, any1);
      tally(groups.spike, any5);
      tally(groups.cleanSpike, any5 && !any1);
    });
    function finish(g) { return { with: wilson(g.with.k, g.with.n), without: wilson(g.without.k, g.without.n) }; }
    return { n: units.length, veto: finish(groups.veto), spike: finish(groups.spike), cleanSpike: finish(groups.cleanSpike) };
  }

  function shapeOf(ctx, entry) {
    var maxDim = null, minDim = null, n5 = 0, n1 = 0, nNull = 0, vals = [];
    ctx.keys.forEach(function (k) {
      var s = entry[k] ? entry[k].score : null;
      if (s == null) { nNull++; return; }
      vals.push(s);
      if (s === 5) n5++;
      if (s === 1) n1++;
      if (!maxDim || s > maxDim.score) maxDim = { key: k, label: ctx.labels[k], score: s };
      if (!minDim || s < minDim.score) minDim = { key: k, label: ctx.labels[k], score: s };
    });
    return { maxDim: maxDim, minDim: minDim, n5: n5, n1: n1, nNull: nNull, nScored: vals.length, mean: mean(vals) };
  }

  function profileShape(data, filters) {
    var ctx = buildContext(data, filters);
    var units = scoredFounders(ctx);
    return {
      note: 'Mean is reference only, we do not average dimensions.',
      rows: units.map(function (u) {
        var s = shapeOf(ctx, u.entry);
        s.founder_id = u.founder.id;
        s.company_id = u.founder.company_id;
        s.display_name = displayName(u.founder, u.company, ctx.filters.anonymize);
        s.graduated = u.graduated;
        return s;
      })
    };
  }

  function personaGrid(data, filters) {
    var ctx = buildContext(data, filters);
    var cells = {}, rowTotals = {}, colTotals = {};
    function blank() { return { invested: 0, passed: 0, graduated: 0, resolved: 0, pending: 0, rate: null }; }
    BACKGROUNDS.forEach(function (b) {
      cells[b] = {};
      rowTotals[b] = blank();
      FAMILIES.forEach(function (f) { cells[b][f] = blank(); });
    });
    FAMILIES.forEach(function (f) { colTotals[f] = blank(); });
    var total = blank();
    function add(cell, c, g) {
      if (c.decision === 'invested') cell.invested++; else cell.passed++;
      if (g == null) { cell.pending++; return; }
      cell.resolved++;
      if (g) cell.graduated++;
    }
    ctx.founders.forEach(function (fo) {
      var c = ctx.companyById[fo.company_id];
      if (!c) return;
      var bg = (fo.archetype && fo.archetype.background) || 'Other';
      if (!cells[bg]) bg = 'Other';
      var fam = verticalFamily(c.vertical);
      var g = graduatedOf(ctx, c.id);
      add(cells[bg][fam], c, g);
      add(rowTotals[bg], c, g);
      add(colTotals[fam], c, g);
      add(total, c, g);
    });
    function rate(cell) { cell.rate = cell.resolved ? cell.graduated / cell.resolved : null; return cell; }
    BACKGROUNDS.forEach(function (b) { FAMILIES.forEach(function (f) { rate(cells[b][f]); }); rate(rowTotals[b]); });
    FAMILIES.forEach(function (f) { rate(colTotals[f]); });
    rate(total);
    return { rows: BACKGROUNDS.slice(), cols: FAMILIES.slice(), cells: cells, rowTotals: rowTotals, colTotals: colTotals, total: total, unit: 'founders', smallN: 4 };
  }

  function stageDelta(data, filters) {
    var ctx = buildContext(data, filters);
    var pairs = [];
    ctx.founders.forEach(function (fo) {
      var list = ctx.assessmentsByFounder[fo.id] || [];
      var s1 = latest(list.filter(function (a) { return a.stage === 'stage1'; }));
      var s2 = latest(list.filter(function (a) { return a.stage === 'stage2'; }));
      if (!s1 || !s2) return;
      pairs.push({ founder: fo, s1: normalizeScores(s1.scores), s2: normalizeScores(s2.scores), graduated: graduatedOf(ctx, fo.company_id) });
    });
    var lift1 = liftRowsFromUnits(ctx, pairs, function (u, k) { return u.s1[k] ? u.s1[k].score : null; });
    var lift2 = liftRowsFromUnits(ctx, pairs, function (u, k) { return u.s2[k] ? u.s2[k].score : null; });
    var l1ByKey = indexBy(lift1, 'key'), l2ByKey = indexBy(lift2, 'key');
    var rows = ctx.dims.map(function (d) {
      var grad = [], not = [], right = 0, moved = 0, unchanged = 0, nBoth = 0;
      pairs.forEach(function (p) {
        var a = p.s1[d.key] ? p.s1[d.key].score : null;
        var b = p.s2[d.key] ? p.s2[d.key].score : null;
        if (a == null || b == null) return;
        nBoth++;
        var delta = b - a;
        if (p.graduated === true) grad.push(delta);
        else if (p.graduated === false) not.push(delta);
        if (p.graduated == null) return;
        if (delta === 0) { unchanged++; return; }
        moved++;
        if ((p.graduated && delta > 0) || (!p.graduated && delta < 0)) right++;
      });
      var l1 = l1ByKey[d.key], l2 = l2ByKey[d.key];
      return {
        key: d.key,
        label: d.label,
        nBoth: nBoth,
        graduated: { mean: mean(grad), n: grad.length },
        notGraduated: { mean: mean(not), n: not.length },
        right: { k: right, n: moved, share: moved ? right / moved : null },
        unchanged: unchanged,
        lift1: { lift: l1.lift, lo: l1.lo, hi: l1.hi, high: l1.high, low: l1.low },
        lift2: { lift: l2.lift, lo: l2.lo, hi: l2.hi, high: l2.high, low: l2.low }
      };
    });
    var ranked = rows.filter(function (r) { return isNum(r.lift2.lift); })
      .sort(function (a, b) { return b.lift2.lift - a.lift2.lift; }).slice(0, 3);
    var top3 = ranked.map(function (r) {
      var improved = isNum(r.lift1.lift) && isNum(r.lift2.lift) ? r.lift2.lift > r.lift1.lift : null;
      return { key: r.key, label: r.label, stage1Lift: r.lift1.lift, stage2Lift: r.lift2.lift, improved: improved };
    });
    var improvedCount = top3.filter(function (t) { return t.improved === true; }).length;
    var rightAll = rows.reduce(function (acc, r) { acc.k += r.right.k; acc.n += r.right.n; return acc; }, { k: 0, n: 0 });
    return {
      nPairs: pairs.length,
      rows: rows,
      rightOverall: { k: rightAll.k, n: rightAll.n, share: rightAll.n ? rightAll.k / rightAll.n : null },
      diligence: {
        top3: top3,
        improvedCount: improvedCount,
        allImproved: top3.length === 3 && improvedCount === 3,
        improved: top3.length > 0 && improvedCount >= Math.ceil(top3.length / 2),
        label: top3.length ? ('Stage 2 improved prediction on ' + improvedCount + ' of ' + top3.length + ' top dimensions') : 'Not enough paired assessments'
      }
    };
  }

  function raterCalibration(data, filters) {
    var ctx = buildContext(data, filters);
    var byRater = groupBy(ctx.assessments, 'rater');
    var raters = Object.keys(byRater).sort();
    var rows = raters.map(function (r) {
      var list = byRater[r];
      var total = 0, nulls = 0, threes = 0, fives = 0, ones = 0, vals = [];
      var highCeilingFounders = {};
      list.forEach(function (a) {
        var sc = normalizeScores(a.scores);
        ctx.keys.forEach(function (k) {
          var s = sc[k] ? sc[k].score : null;
          total++;
          if (s == null) { nulls++; return; }
          vals.push(s);
          if (s === 3) threes++;
          if (s === 5) fives++;
          if (s === 1) ones++;
        });
        var ceil = sc.ceiling ? sc.ceiling.score : null;
        if (ENTRY_STAGES.indexOf(a.stage) >= 0 && ceil != null && ceil >= 4) highCeilingFounders[a.founder_id] = true;
      });
      var k = 0, n = 0;
      Object.keys(highCeilingFounders).forEach(function (fid) {
        var fo = ctx.founderById[fid];
        if (!fo) return;
        var g = graduatedOf(ctx, fo.company_id);
        if (g == null) return;
        n++;
        if (g) k++;
      });
      var w = wilson(k, n);
      return {
        rater: r,
        n: list.length,
        nScores: total,
        meanScore: mean(vals),
        share3: { k: threes, n: total - nulls, share: (total - nulls) ? threes / (total - nulls) : null },
        shareNull: { k: nulls, n: total, share: total ? nulls / total : null },
        share5: { k: fives, n: total - nulls, share: (total - nulls) ? fives / (total - nulls) : null },
        share1: { k: ones, n: total - nulls, share: (total - nulls) ? ones / (total - nulls) : null },
        ceilingHigh: { k: w.k, n: w.n, p: w.p, lo: w.lo, hi: w.hi, smallN: w.n < 10 }
      };
    });
    return { rows: rows, note: 'Graduation rate of founders scored 4 or 5 on ceiling by this rater. Small n, read with caution.' };
  }

  function isSpecific(text) {
    if (!text) return false;
    if (/\d/.test(text)) return true;
    for (var i = 0; i < SPECIFIC_RE.length; i++) if (SPECIFIC_RE[i].test(text)) return true;
    return false;
  }

  function worryIntensity(text) {
    if (!text) return 0;
    var hits = 0;
    for (var i = 0; i < WORRY_RE.length; i++) if (WORRY_RE[i].test(text)) hits++;
    return hits;
  }

  function worryBucket(hits) { return hits >= 2 ? '2+' : String(hits); }

  function intangibles(data, filters) {
    var ctx = buildContext(data, filters);
    var units = scoredFounders(ctx);
    var wordCounts = { graduated: {}, notGraduated: {}, pending: {} };
    var themeCounts = {};
    var themeList = THEMES.slice();
    var spec = { specific: { k: 0, n: 0 }, adjectival: { k: 0, n: 0 } };
    var worry = { '0': { k: 0, n: 0, pending: 0 }, '1': { k: 0, n: 0, pending: 0 }, '2+': { k: 0, n: 0, pending: 0 } };
    var nIntangibles = 0;
    units.forEach(function (u) {
      var it = u.entryA.intangibles;
      if (!it) return;
      nIntangibles++;
      var bucket = outcomeBucket(u.graduated);
      (it.words || []).forEach(function (w) {
        var key = String(w).toLowerCase().trim();
        if (!key) return;
        wordCounts[bucket][key] = (wordCounts[bucket][key] || 0) + 1;
      });
      (it.themes || []).forEach(function (t) {
        if (themeList.indexOf(t) < 0) themeList.push(t);
        if (!themeCounts[t]) themeCounts[t] = { graduated: 0, notGraduated: 0, pending: 0 };
        themeCounts[t][bucket]++;
      });
      if (u.graduated != null) {
        var side = isSpecific(it.lean_in) ? spec.specific : spec.adjectival;
        side.n++;
        if (u.graduated) side.k++;
      }
      var wb = worry[worryBucket(worryIntensity(it.worry))];
      if (u.graduated == null) wb.pending++;
      else { wb.n++; if (u.graduated) wb.k++; }
    });
    function topList(counts) {
      return Object.keys(counts).map(function (w) { return { word: w, count: counts[w] }; })
        .sort(function (a, b) { return b.count - a.count || (a.word < b.word ? -1 : 1); });
    }
    var themes = themeList.map(function (t) {
      var c = themeCounts[t] || { graduated: 0, notGraduated: 0, pending: 0 };
      var resolved = c.graduated + c.notGraduated;
      var w = wilson(c.graduated, resolved);
      return { theme: t, graduated: c.graduated, notGraduated: c.notGraduated, pending: c.pending, resolved: resolved, rate: w.p, lo: w.lo, hi: w.hi };
    }).sort(function (a, b) { return (b.graduated + b.notGraduated + b.pending) - (a.graduated + a.notGraduated + a.pending); });

    /* would_back_again: entry vs latest QPR, invested only */
    var matrix = {};
    BACK_AGAIN.forEach(function (e) { matrix[e] = {}; BACK_AGAIN.forEach(function (q) { matrix[e][q] = 0; }); });
    var nTrans = 0;
    units.forEach(function (u) {
      if (!u.company || u.company.decision !== 'invested') return;
      var list = ctx.assessmentsByFounder[u.founder.id] || [];
      var qpr = latest(list.filter(function (a) { return a.stage === 'qpr'; }));
      if (!qpr || !qpr.intangibles || !u.entryA.intangibles) return;
      var e = u.entryA.intangibles.would_back_again, q = qpr.intangibles.would_back_again;
      if (BACK_AGAIN.indexOf(e) < 0 || BACK_AGAIN.indexOf(q) < 0) return;
      matrix[e][q]++;
      nTrans++;
    });

    var worryRows = ['0', '1', '2+'].map(function (b) {
      var w = wilson(worry[b].k, worry[b].n);
      return { bucket: b, k: w.k, n: w.n, pending: worry[b].pending, rate: w.p, lo: w.lo, hi: w.hi };
    });

    return {
      n: nIntangibles,
      words: {
        graduated: topList(wordCounts.graduated),
        notGraduated: topList(wordCounts.notGraduated),
        pending: topList(wordCounts.pending)
      },
      themes: themes,
      specificity: {
        specific: wilson(spec.specific.k, spec.specific.n),
        adjectival: wilson(spec.adjectival.k, spec.adjectival.n),
        lift: liftCI(spec.specific.k, spec.specific.n, spec.adjectival.k, spec.adjectival.n),
        keywords: SPECIFIC_KEYWORDS.slice()
      },
      worry: { rows: worryRows, keywords: WORRY_KEYWORDS.slice() },
      backAgain: { order: BACK_AGAIN.slice(), matrix: matrix, n: nTrans }
    };
  }

  function decisionQuality(data, filters) {
    var ctx = buildContext(data, filters);
    var cells = { investedGraduated: 0, investedNot: 0, passedGraduated: 0, passedNot: 0 };
    var pending = { invested: 0, passed: 0 };
    var byReason = {};
    PASS_REASONS.forEach(function (r) { byReason[r] = { reason: r, count: 0, moics: [] }; });
    var moics = [];
    var judgmentMisses = [];
    var investedWithVeto = [];
    var units = scoredFounders(ctx);
    var vetoByCompany = {};
    units.forEach(function (u) {
      ctx.keys.forEach(function (k) {
        if (u.entry[k] && u.entry[k].score === 1) {
          if (!vetoByCompany[u.founder.company_id]) vetoByCompany[u.founder.company_id] = [];
          vetoByCompany[u.founder.company_id].push({ founder: displayName(u.founder, u.company, ctx.filters.anonymize), dim: ctx.labels[k] || k, key: k });
        }
      });
    });
    ctx.companies.forEach(function (c) {
      var g = graduatedOf(ctx, c.id);
      var o = ctx.outcomeByCompany[c.id];
      var inv = c.decision === 'invested';
      if (g == null) { pending[inv ? 'invested' : 'passed']++; }
      else if (inv && g) cells.investedGraduated++;
      else if (inv && !g) cells.investedNot++;
      else if (!inv && g) {
        cells.passedGraduated++;
        var r = PASS_REASONS.indexOf(c.pass_reason) >= 0 ? c.pass_reason : 'other';
        byReason[r].count++;
        var m = o && isNum(o.hypothetical_moic) ? o.hypothetical_moic : null;
        if (m != null) { byReason[r].moics.push(m); moics.push(m); }
        if (c.pass_reason === 'founder') {
          judgmentMisses.push({
            company_id: c.id,
            name: companyName(c, ctx.filters.anonymize),
            vertical: c.vertical,
            stage_at_entry: c.stage_at_entry,
            pass_stage: c.pass_stage,
            pass_reason_note: c.pass_reason_note || null,
            hypothetical_moic: m,
            graduation_months: o ? o.graduation_months : null
          });
        }
      } else cells.passedNot++;
      if (inv && vetoByCompany[c.id]) {
        var rows = ctx.moicByCompany[c.id] || [];
        var lastRow = rows.slice().sort(function (a, b) { return quarterIndex(a.quarter) - quarterIndex(b.quarter); }).pop();
        investedWithVeto.push({
          company_id: c.id,
          name: companyName(c, ctx.filters.anonymize),
          fund: c.fund,
          vertical: c.vertical,
          vetoes: vetoByCompany[c.id],
          graduated: g,
          status: o ? o.status : null,
          latest_moic: lastRow ? lastRow.gross_moic : null
        });
      }
    });
    judgmentMisses.sort(function (a, b) { return (b.hypothetical_moic || 0) - (a.hypothetical_moic || 0); });
    var resolved = cells.investedGraduated + cells.investedNot + cells.passedGraduated + cells.passedNot;
    var precN = cells.investedGraduated + cells.investedNot;
    var recN = cells.investedGraduated + cells.passedGraduated;
    /* MOIC is a multiple, not an additive quantity: without knowing the hypothetical dollars
       behind each pass, summing multiples across companies has no real-world meaning. Median
       (or looking at the ranked list of judgment misses below) is the honest read here. */
    var reasons = PASS_REASONS.map(function (r) {
      var b = byReason[r];
      return { reason: r, count: b.count, moicMedian: median(b.moics), moicN: b.moics.length };
    });
    return {
      cells: cells,
      resolved: resolved,
      pending: pending,
      passedGraduatedByReason: reasons,
      hypotheticalMoic: { median: median(moics), n: moics.length },
      precision: { k: cells.investedGraduated, n: precN, p: precN ? cells.investedGraduated / precN : null },
      recall: { k: cells.investedGraduated, n: recN, p: recN ? cells.investedGraduated / recN : null },
      note: 'Recall is the venture-relevant number: of every company that graduated, how many did we back. Precision only says how clean the portfolio is.',
      judgmentMisses: judgmentMisses,
      investedWithVeto: investedWithVeto
    };
  }

  function companySeries(ctx, company) {
    var rows = (ctx.moicByCompany[company.id] || []).slice()
      .sort(function (a, b) { return quarterIndex(a.quarter) - quarterIndex(b.quarter); });
    var entryQ = quarterIndex(company.entry_date);
    return rows.map(function (r) {
      var qi = quarterIndex(r.quarter);
      return { quarter: r.quarter, qi: qi, q: entryQ == null ? null : qi - entryQ, gross_moic: isNum(r.gross_moic) ? r.gross_moic : null, method: r.method || null };
    });
  }

  /* Fixed-horizon MOIC: nearest quarter at or before entry + months. Null if the horizon is in the future. */
  function moicAtHorizon(ctx, company, series, months) {
    var target = addMonths(company.entry_date, months);
    if (!target) return null;
    if (toISO(target) > ctx.asOf) return null;
    var targetQ = quarterIndex(toISO(target));
    var best = null;
    series.forEach(function (r) {
      if (r.qi != null && r.qi <= targetQ && r.gross_moic != null && (!best || r.qi > best.qi)) best = r;
    });
    return best ? best.gross_moic : null;
  }

  function moicSeries(data, filters) {
    var ctx = buildContext(data, filters);
    var companies = [];
    var maxQ = 0, minQ = null;
    ctx.companies.forEach(function (c) {
      if (c.decision !== 'invested') return;
      var series = companySeries(ctx, c);
      if (!series.length) return;
      series.forEach(function (r) {
        if (r.q == null) return;
        if (r.q > maxQ) maxQ = r.q;
        if (minQ == null || r.q < minQ) minQ = r.q;
      });
      var o = ctx.outcomeByCompany[c.id];
      companies.push({
        company_id: c.id,
        name: companyName(c, ctx.filters.anonymize),
        fund: c.fund,
        entry_date: c.entry_date,
        status: o ? o.status : null,
        graduated: graduatedOf(ctx, c.id),
        series: series,
        latest: series[series.length - 1].gross_moic,
        moic24: moicAtHorizon(ctx, c, series, 24),
        moic36: moicAtHorizon(ctx, c, series, 36)
      });
    });
    var medianTraj = [];
    for (var q = (minQ == null ? 1 : minQ); q <= maxQ; q++) {
      var vals = [];
      companies.forEach(function (co) {
        co.series.forEach(function (r) { if (r.q === q && r.gross_moic != null) vals.push(r.gross_moic); });
      });
      medianTraj.push({ q: q, median: median(vals), n: vals.length });
    }
    var m24 = companies.map(function (c) { return c.moic24; }).filter(isNum);
    var m36 = companies.map(function (c) { return c.moic36; }).filter(isNum);
    return {
      companies: companies,
      median: medianTraj,
      moic24: { median: median(m24), n: m24.length },
      moic36: { median: median(m36), n: m36.length },
      note: 'Marks are sticky: gross MOIC stays at 1.0x until a priced round, then steps and holds. Written-off companies step to 0.'
    };
  }

  function completeness(data, filters) {
    var ctx = buildContext(data, filters);
    var stages = ['stage1', 'stage2', 'qpr'];
    var byStage = stages.map(function (st) {
      var list = ctx.assessments.filter(function (a) { return a.stage === st; });
      var total = 0, nulls = 0, missing = 0;
      list.forEach(function (a) {
        var sc = normalizeScores(a.scores);
        ctx.keys.forEach(function (k) { total++; if (!sc[k] || sc[k].score == null) nulls++; });
        var it = a.intangibles;
        if (!it || !Array.isArray(it.words) || it.words.length !== 3 || !it.lean_in || !it.worry) missing++;
      });
      return {
        stage: st,
        n: list.length,
        nullScores: { k: nulls, n: total, share: total ? nulls / total : null },
        missingIntangibles: { k: missing, n: list.length, share: list.length ? missing / list.length : null }
      };
    });
    var censored = 0;
    ctx.outcomes.forEach(function (o) { if (o.graduated !== true && o.graduated !== false) censored++; });
    var cutoff = toISO(addMonths(ctx.asOf, -6));
    var invested = ctx.companies.filter(function (c) { return c.decision === 'invested'; });
    var recent = 0;
    invested.forEach(function (c) {
      var fos = ctx.foundersByCompany[c.id] || [];
      var has = fos.some(function (fo) {
        return (ctx.assessmentsByFounder[fo.id] || []).some(function (a) { return a.stage === 'qpr' && a.date >= cutoff; });
      });
      if (has) recent++;
    });
    return {
      byStage: byStage,
      censored: { k: censored, n: ctx.outcomes.length, share: ctx.outcomes.length ? censored / ctx.outcomes.length : null },
      recentQpr: { k: recent, n: invested.length, share: invested.length ? recent / invested.length : null, since: cutoff },
      asOf: ctx.asOf
    };
  }

  function founderTable(data, filters) {
    var ctx = buildContext(data, filters);
    var anon = ctx.filters.anonymize;
    var rows = ctx.founders.map(function (fo) {
      var c = ctx.companyById[fo.company_id] || null;
      var list = ctx.assessmentsByFounder[fo.id] || [];
      var a = pickEntryAssessment(list);
      var entry = a ? normalizeScores(a.scores) : null;
      var scores = {};
      ctx.keys.forEach(function (k) { scores[k] = entry && entry[k] ? entry[k] : { score: null, confidence: null }; });
      var shape = entry ? shapeOf(ctx, entry) : { n1: 0, n5: 0, nNull: ctx.keys.length, nScored: 0, mean: null, maxDim: null, minDim: null };
      var o = ctx.outcomeByCompany[fo.company_id] || null;
      var series = c ? companySeries(ctx, c) : [];
      var it = a && a.intangibles ? a.intangibles : null;
      var qprs = list.filter(function (x) { return x.stage === 'qpr'; });
      var lastQpr = latest(qprs);
      return {
        founder_id: fo.id,
        company_id: fo.company_id,
        company: companyName(c, anon),
        name: c ? c.name : null,
        anon_name: c ? c.anon_name : null,
        display_name: displayName(fo, c, anon),
        role: fo.role,
        archetype: fo.archetype || null,
        decision: c ? c.decision : null,
        fund: c ? c.fund : null,
        vertical: c ? c.vertical : null,
        family: c ? verticalFamily(c.vertical) : null,
        stage: c ? c.stage_at_entry : null,
        current_stage: c ? c.current_stage : null,
        vintage: c ? c.vintage_year : null,
        entry_date: c ? c.entry_date : null,
        pass_stage: c ? c.pass_stage : null,
        pass_reason: c ? c.pass_reason : null,
        rater: a ? a.rater : null,
        entry_stage: a ? a.stage : null,
        entry_date_assessed: a ? a.date : null,
        cohort: a ? a.cohort : null,
        scores: scores,
        n1: shape.n1,
        n5: shape.n5,
        nNull: shape.nNull,
        mean: shape.mean,
        conviction: it && isNum(it.conviction) ? it.conviction : null,
        words: it && Array.isArray(it.words) ? it.words.slice() : [],
        lean_in: it ? it.lean_in || null : null,
        worry: it ? it.worry || null : null,
        would_back_again: it ? it.would_back_again || null : null,
        themes: it && Array.isArray(it.themes) ? it.themes.slice() : [],
        graduated: graduatedOf(ctx, fo.company_id),
        months: o ? o.graduation_months : null,
        window_months: o ? o.window_months : null,
        window_closed: o ? o.window_closed : null,
        up_round: o ? o.up_round : null,
        status: o ? o.status : null,
        hypothetical_moic: o && isNum(o.hypothetical_moic) ? o.hypothetical_moic : null,
        motive_led_followon: o ? !!o.motive_led_followon : false,
        headcount_entry: o ? o.headcount_entry : null,
        headcount_now: o ? o.headcount_now : null,
        moic_24: c ? moicAtHorizon(ctx, c, series, 24) : null,
        moic_36: c ? moicAtHorizon(ctx, c, series, 36) : null,
        moic_latest: series.length ? series[series.length - 1].gross_moic : null,
        moic_series: series,
        n_assessments: list.length,
        n_qpr: qprs.length,
        last_health: lastQpr && lastQpr.health_check ? lastQpr.health_check : null
      };
    });
    return { rows: rows, keys: ctx.keys.slice(), labels: ctx.labels };
  }

  /* ------------------------------------------------------------------ */
  /* Export                                                              */
  /* ------------------------------------------------------------------ */

  var api = {
    VERSION: '0.1.0',
    THEMES: THEMES,
    BACKGROUNDS: BACKGROUNDS,
    FAMILIES: FAMILIES,
    VERTICAL_FAMILY: VERTICAL_FAMILY,
    STAGE_RANK: STAGE_RANK,
    PASS_REASONS: PASS_REASONS,
    BACK_AGAIN: BACK_AGAIN,
    SPECIFIC_KEYWORDS: SPECIFIC_KEYWORDS,
    WORRY_KEYWORDS: WORRY_KEYWORDS,
    /* helpers */
    wilson: wilson,
    liftCI: liftCI,
    liftRead: liftRead,
    entryScores: entryScores,
    entryAssessment: entryAssessment,
    resolvedOutcome: resolvedOutcome,
    defaultFilters: defaultFilters,
    normalizeFilters: normalizeFilters,
    applyFilters: applyFilters,
    stageRank: stageRank,
    verticalFamily: verticalFamily,
    quarterIndex: quarterIndex,
    quarterLabel: quarterLabel,
    addMonths: addMonths,
    monthsBetween: monthsBetween,
    isSpecific: isSpecific,
    worryIntensity: worryIntensity,
    displayName: displayName,
    companyName: companyName,
    mean: mean,
    median: median,
    /* metrics */
    populationSummary: populationSummary,
    dimensionLift: dimensionLift,
    dimensionLiftViews: dimensionLiftViews,
    dimensionDecisionLift: dimensionDecisionLift,
    topInsights: topInsights,
    vetoSpike: vetoSpike,
    profileShape: profileShape,
    personaGrid: personaGrid,
    stageDelta: stageDelta,
    raterCalibration: raterCalibration,
    intangibles: intangibles,
    decisionQuality: decisionQuality,
    moicSeries: moicSeries,
    completeness: completeness,
    founderTable: founderTable
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root && typeof root === 'object') root.FSS_ANALYTICS = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));

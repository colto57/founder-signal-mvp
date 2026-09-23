/*
 * Builds tests/fixture.js: a tiny hand-made dataset (3 invested, 3 passed) in the
 * exact SPEC section 2 schema, so the analytics tests can run before data/data.js exists.
 * Usage: node tests/make_fixture.js
 */
const fs = require('fs');
const path = require('path');

const AS_OF = '2026-09-22';
const dims = [
  { key: 'execution', label: 'Execution framework' },
  { key: 'market', label: 'Market thinking' },
  { key: 'customer', label: 'Customer obsession' },
  { key: 'self_awareness', label: 'Self-awareness and learning velocity' },
  { key: 'resilience', label: 'Resilience and adaptability' },
  { key: 'talent', label: 'Talent magnetism and team building' },
  { key: 'decisiveness', label: 'Decisiveness under ambiguity' },
  { key: 'ceiling', label: 'Ceiling: insight, ambition and capital pull' }
];
const K = dims.map(d => d.key);

function sc(arr) {
  const out = {};
  K.forEach((k, i) => {
    const s = arr[i];
    out[k] = { score: s, confidence: s == null ? 'L' : (Math.abs(s - 3) >= 1.5 ? 'H' : 'M') };
  });
  return out;
}
function hc(g) {
  return { execution: g, talent: g, self_awareness: g, resilience: g, relationship: g,
    milestones: g === 'G' ? 'Met' : (g === 'R' ? 'Missed' : 'Partial'), what_changed: 'Trend held through the period.' };
}
function C(id, name, decision, fund, vertical, stage, current, entry, vintage, passStage, passReason, note) {
  return { id, name, anon_name: 'Company ' + id.slice(2), decision, fund, vertical, stage_at_entry: stage, current_stage: current,
    entry_date: entry, vintage_year: vintage, pass_stage: passStage, pass_reason: passReason, pass_reason_note: note };
}
const companies = [
  C('c001', 'Alpha Ledger', 'invested', 'Fund I', 'Payments', 'Seed', 'Series A', '2023-03-15', 2023, null, null, null),
  C('c002', 'Beta Risk', 'invested', 'Fund II', 'Insurance', 'Pre-Seed', 'Pre-Seed', '2022-06-01', 2022, null, null, null),
  C('c003', 'Gamma Markets', 'invested', 'Legacy Fund', 'Capital markets', 'Seed', 'Series B', '2021-09-10', 2021, null, null, null),
  C('c004', 'Delta Lend', 'passed', null, 'Lending', 'Seed', 'Series A', '2024-02-01', 2024, 'Chemistry', 'founder', 'Team felt thin at the top.'),
  C('c005', 'Epsilon Wealth', 'passed', null, 'Wealth management', 'Series A', 'Series A', '2023-08-01', 2023, 'Active DD', 'business', 'Unit economics did not hold.'),
  C('c006', 'Zeta Data', 'passed', null, 'Data & analytics (incl. AI)', 'Seed', 'Seed', '2025-11-01', 2025, 'IC', 'price', 'Round priced above our range.')
];
function arch(bg, fmf, shape, hist, rep, exit) {
  return { background: bg, fmf_type: fmf, team_shape: shape, prior_shared_history: hist, repeat_founder: rep, prior_exit: exit };
}
function F(id, cid, role, name, a) { return { id, company_id: cid, role, display_name: role + ', ' + name, archetype: a }; }
const founders = [
  F('f001', 'c001', 'CEO', 'Alpha Ledger', arch('Repeat founder', 'Built it before', 'Two complementary', true, true, 'Small')),
  F('f002', 'c001', 'CTO', 'Alpha Ledger', arch('Technical or academic', 'Built it before', 'Two complementary', true, false, 'None')),
  F('f003', 'c002', 'CEO', 'Beta Risk', arch('Consulting', 'Outsider with insight', 'Solo', false, false, 'None')),
  F('f004', 'c003', 'CEO', 'Gamma Markets', arch('Banking or finance', 'Lived the problem', 'Three or more', true, false, 'None')),
  F('f005', 'c004', 'CEO', 'Delta Lend', arch('High-velocity operator', 'Sold into it', 'Two complementary', false, false, 'None')),
  F('f006', 'c005', 'CEO', 'Epsilon Wealth', arch('Domain insider', 'Lived the problem', 'Solo', false, false, 'None')),
  F('f007', 'c006', 'CEO', 'Zeta Data', arch('Repeat founder', 'Built it before', 'Two complementary', true, true, 'Meaningful'))
];

let aid = 0;
function A(fid, stage, date, rater, scores, it, decision, health) {
  aid++;
  return { id: 'a' + String(aid).padStart(4, '0'), founder_id: fid, stage, date, rater, cohort: 'backfilled', scores: sc(scores),
    intangibles: { words: it[0], lean_in: it[1], worry: it[2], conviction: it[3], would_back_again: it[4], themes: it[5] },
    integrity: 'passed', decision_at_stage: decision, health_check: health || null };
}
const I1 = [['grit', 'clarity', 'insight'], 'Closed 3 design partners before the seed.', 'Runway is thin if the pilot slips.', 5, 'yes', ['Grit', 'Clarity', 'Non-obvious insight']];
const I2 = [['precise', 'calm', 'honest'], 'Shipped the core ledger in 6 weeks.', 'Has never managed a team above five.', 4, 'yes', ['Calm under pressure', 'Intellectual honesty']];
const I3 = [['polished', 'energetic', 'likeable'], 'Very impressive founder with strong energy.', 'Solo founder, no CTO and burn is high.', 3, 'unsure', ['Storytelling']];
const I3q = [['polished', 'energetic', 'likeable'], 'Very impressive founder with strong energy.', 'Solo founder, no CTO and burn is high.', 2, 'no', ['Storytelling']];
const I4 = [['relentless', 'sharp', 'calm'], 'Poached the head of risk from a scaled lender.', 'Hard to say what would derail this team.', 4, 'yes', ['Grit', 'Calm under pressure']];
const I5 = [['scrappy', 'hungry', 'insight'], 'Signed 2 pilots with regional banks.', 'Team is thin and the story is defensive.', 3, 'unsure', ['Hustle', 'Non-obvious insight']];
const I6 = [['salesy', 'smooth', 'confident'], 'Very polished and confident presenter.', 'Never shipped a product; churn in the early cohort.', 2, 'no', ['Storytelling']];
const I7 = [['precise', 'deliberate', 'credible'], 'Hired a CFO from a scaled fintech.', 'Price is high for this stage.', 4, 'yes', ['Clarity']];

const assessments = [
  A('f001', 'stage1', '2023-02-20', 'Rater A', [3, 4, 3, null, 3, 4, 4, 4], I1, 'advance'),
  A('f001', 'stage2', '2023-03-10', 'Rater A', [4, 4, 3, 3, 4, 5, 4, 5], I1, 'invest'),
  A('f001', 'qpr', '2023-09-15', 'Rater A', [4, 4, 3, 3, 4, 5, 4, 5], I1, 'invest', hc('G')),
  A('f001', 'qpr', '2026-06-15', 'Rater A', [4, 4, 3, 3, 4, 5, 4, 5], I1, 'invest', hc('G')),
  A('f002', 'stage1', '2023-02-20', 'Rater B', [4, 3, 3, 4, 3, 4, 3, 4], I2, 'advance'),
  A('f002', 'stage2', '2023-03-10', 'Rater B', [4, 3, 3, 4, 4, 4, 3, 4], I2, 'invest'),
  A('f003', 'stage1', '2022-05-10', 'Rater E', [3, 3, 4, 3, 3, 2, 3, 3], I3, 'advance'),
  A('f003', 'stage2', '2022-05-25', 'Rater E', [3, 2, 5, 2, 3, 1, 3, 4], I3, 'invest'),
  A('f003', 'qpr', '2022-12-01', 'Rater E', [3, 2, 5, 2, 3, 1, 3, 4], I3q, 'invest', hc('R')),
  A('f004', 'stage1', '2021-08-15', 'Rater C', [4, 4, 2, null, 4, 4, 4, 5], I4, 'advance'),
  A('f004', 'stage2', '2021-09-01', 'Rater C', [5, 4, 2, null, 4, 5, 4, 5], I4, 'invest'),
  A('f004', 'qpr', '2022-03-10', 'Rater C', [5, 4, 2, null, 4, 5, 4, 5], I4, 'invest', hc('G')),
  A('f004', 'qpr', '2022-09-10', 'Rater C', [5, 4, 2, null, 4, 5, 4, 5], I4, 'invest', hc('G')),
  A('f005', 'stage1', '2024-01-20', 'Rater D', [3, 4, 4, 3, 3, 3, 4, 4], I5, 'pass'),
  A('f006', 'stage1', '2023-07-01', 'Rater F', [3, 3, 4, 3, 2, 3, 3, 3], I6, 'advance'),
  A('f006', 'stage2', '2023-07-20', 'Rater F', [2, 3, 5, 3, 1, 2, 3, 2], I6, 'pass'),
  A('f007', 'stage1', '2025-10-05', 'Rater B', [4, 4, 3, 4, 3, 4, 4, 4], I7, 'advance'),
  A('f007', 'stage2', '2025-10-25', 'Rater B', [4, 4, 3, 4, 4, 4, 4, 5], I7, 'pass')
];

function O(cid, pre, nrd, nrp, up, grad, months, win, closed, follow, he, hn, status, hyp) {
  return { company_id: cid, as_of: AS_OF, entry_pre_money: pre, next_round_date: nrd, next_round_pre_money: nrp, up_round: up,
    graduated: grad, graduation_months: months, window_months: win, window_closed: closed, motive_led_followon: follow,
    headcount_entry: he, headcount_now: hn, headcount_growth_yoy: Math.round(((hn / he) - 1) * 100) / 100, status, hypothetical_moic: hyp };
}
const outcomes = [
  O('c001', 20000000, '2024-05-15', 56000000, true, true, 14, 24, true, false, 12, 30, 'active', null),
  O('c002', 8000000, null, null, null, false, null, 18, true, false, 6, 3, 'written_off', null),
  O('c003', 25000000, '2023-05-10', 70000000, true, true, 20, 24, true, true, 15, 40, 'realised', null),
  O('c004', 22000000, '2025-02-01', 61600000, true, true, 12, 24, true, false, 10, 22, 'active', 2.8),
  O('c005', 70000000, null, null, null, false, null, 30, true, false, 30, 12, 'shut_down', null),
  O('c006', 20000000, null, null, null, null, null, 24, false, false, 9, 11, 'active', null)
];

function qlabel(i) { return Math.floor(i / 4) + 'Q' + ((i % 4) + 1); }
function qidx(y, q) { return y * 4 + (q - 1); }
const END = qidx(2026, 2);
const moic_panel = [];
function panel(cid, startQ, cost, stepQ, stepTo, zeroQ, realiseQ) {
  let m = 1.0;
  for (let q = startQ; q <= END; q++) {
    let method = 'Latest priced round';
    if (stepQ != null && q >= stepQ) m = stepTo;
    if (zeroQ != null && q >= zeroQ) { m = 0; method = 'Written off'; }
    let realized = 0, unreal = cost * m;
    if (realiseQ != null && q >= realiseQ) { realized = cost * m; unreal = 0; }
    moic_panel.push({ company_id: cid, quarter: qlabel(q), invested_cost: cost, unrealized_value: Math.round(unreal),
      realized_value: Math.round(realized), gross_moic: Math.round(m * 100) / 100, method });
  }
}
panel('c001', qidx(2023, 2), 2000000, qidx(2024, 2), 2.8, null, null);
panel('c002', qidx(2022, 3), 1000000, null, null, qidx(2024, 1), null);
panel('c003', qidx(2021, 4), 2500000, qidx(2023, 2), 2.8, null, qidx(2024, 4));

const data = {
  meta: { generated_at: '2026-09-22T00:00:00Z', seed: 0, synthetic: true, as_of: AS_OF,
    notes: ['Hand-built fixture for tests'], expected_counts: { invested: 3, passed: 3 } },
  dimensions: dims, companies, founders, assessments, outcomes, moic_panel
};
const out = path.join(__dirname, 'fixture.js');
fs.writeFileSync(out, 'window.FSS_DATA = ' + JSON.stringify(data, null, 1) + ';\n');
console.log('fixture written to', out, ':', assessments.length, 'assessments,', moic_panel.length, 'moic rows');

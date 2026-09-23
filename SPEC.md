# Founder Signal System, MVP spec

Prototype of the "Agent 3" founder analytics layer. Every company, fund, founder score, intangible and outcome in this MVP is SYNTHETIC and fabricated, including the 51 "invested" companies in data/portfolio_roster.json. Nothing is derived from any real company, fund, or CRM record. No real founder or rater names appear anywhere.

Today's date for all "as of" logic: 2026-09-22.

## 1. Files

```
founder-signal-mvp/
  SPEC.md                      this file
  README.md
  data/portfolio_roster.json   fabricated roster (51 companies)
  data/generate_synthetic.py   deterministic generator, seed 42, writes data/data.js
  data/data.js                 window.FSS_DATA = {...}
  app/index.html               dashboard shell, loads styles.css, data.js, analytics.js, app.js, Chart.js CDN
  app/styles.css
  app/analytics.js             pure functions, no DOM, also loadable in node (module.exports guard)
  app/app.js                   rendering, filters, assessment form
  tests/test_analytics.js      node test: loads data.js + analytics.js, asserts invariants
  build/build_dist.py          inlines everything into dist/founder-signal-mvp.html
  dist/founder-signal-mvp.html single file for sharing
```

## 2. Data schema (window.FSS_DATA)

```js
{
  meta: { generated_at, seed, synthetic: true, as_of: "2026-09-22", notes: [] },
  dimensions: [                       // fixed order, used everywhere
    { key:"execution",     label:"Execution framework" },
    { key:"market",        label:"Market thinking" },
    { key:"customer",      label:"Customer obsession" },
    { key:"self_awareness",label:"Self-awareness and learning velocity" },
    { key:"resilience",    label:"Resilience and adaptability" },
    { key:"talent",        label:"Talent magnetism and team building" },
    { key:"decisiveness",  label:"Decisiveness under ambiguity" },
    { key:"ceiling",       label:"Ceiling: insight, ambition and capital pull" }
  ],
  companies: [ {
    id: "c001",
    name: "Nelly",                    // real for invested, fictional for passed
    anon_name: "Company 01",          // used when anonymize toggle is on
    decision: "invested" | "passed",
    fund: "Fund I" | "Fund II" | "Fund III" | "Legacy Fund" | null,   // null for passed
    vertical: "Payments" | "Lending" | "Wealth management" | "Capital markets" | "Insurance" | "Data & analytics (incl. AI)" | "Alternatives" | "Infrastructure" | "Green finance & ESG" | "Digital Assets" | "Embedded finance" | "Business Services" | "Banking" | "Stealth",
    stage_at_entry: "Pre-Seed" | "Seed" | "Series A",
    current_stage: string | null,     // roster series for invested; synthetic for passed
    entry_date: "YYYY-MM-DD",         // date we met / invested
    vintage_year: 2021..2026,
    pass_stage: null | "Chemistry" | "Active DD" | "Pre IC" | "IC" | "Term Sheet",
    pass_reason: null | "price" | "founder" | "business" | "timing" | "lost" | "other",
    pass_reason_note: string | null
  } ],
  founders: [ {
    id: "f001", company_id: "c001", role: "CEO" | "CTO" | "COO",
    display_name: "CEO, Nelly",       // never a real person name
    archetype: {
      background: "Repeat founder" | "High-velocity operator" | "Banking or finance" | "Consulting" | "Technical or academic" | "Domain insider" | "Other",
      fmf_type: "Lived the problem" | "Sold into it" | "Built it before" | "Outsider with insight",
      team_shape: "Solo" | "Two complementary" | "Three or more",
      prior_shared_history: true | false,
      repeat_founder: true | false,
      prior_exit: "None" | "Small" | "Meaningful"
    }
  } ],
  assessments: [ {
    id: "a0001", founder_id: "f001", stage: "stage1" | "stage2" | "qpr",
    date: "YYYY-MM-DD", rater: "Rater A".."Rater F",
    cohort: "backfilled" | "forward",          // backfilled = scored retrospectively
    scores: { execution: { score: 1..5 | null, confidence: "H"|"M"|"L" }, ... 8 keys },
    // null score = "Not assessed" (the fix for 3 meaning two things)
    intangibles: {
      words: ["grit","clarity","magnetism"],   // exactly 3, lower case
      lean_in: "one sentence",
      worry: "one sentence",
      conviction: 1..5,
      would_back_again: "yes" | "no" | "unsure",
      themes: []                                // subset of THEMES
    },
    integrity: "passed" | "pending",
    decision_at_stage: "advance" | "pass" | "invest",
    health_check: null | {                      // qpr only
      execution: "G"|"A"|"R", talent: ..., self_awareness: ..., resilience: ..., relationship: ...,
      milestones: "Met" | "Partial" | "Missed",
      what_changed: "one sentence"
    }
  } ],
  outcomes: [ {
    company_id, as_of: "2026-09-22",
    entry_pre_money: number,                 // USD, at the round we met them
    next_round_date: "YYYY-MM-DD" | null,
    next_round_pre_money: number | null,
    up_round: true | false | null,
    graduated: true | false | null,          // null = window not yet closed and no round yet (censored)
    graduation_months: number | null,
    window_months: 18 | 24 | 30,
    window_closed: true | false,
    motive_led_followon: true | false,       // invested only, flags label leakage
    headcount_entry: int, headcount_now: int, headcount_growth_yoy: number,
    status: "active" | "realised" | "written_off" | "shut_down" | "acquired" | "unknown",
    hypothetical_moic: number | null          // passed only: next_round_pre_money / entry_pre_money if graduated
  } ],
  moic_panel: [ {                             // invested only, one row per company per quarter
    company_id, quarter: "2023Q1", invested_cost, unrealized_value, realized_value, gross_moic, method: "Latest priced round" | "Calibration" | "Market multiples" | "Written off"
  } ]
}
```

THEMES = ["Grit","Clarity","Magnetism","Speed","Non-obvious insight","Storytelling","Domain depth","Chip on the shoulder","Calm under pressure","Hustle","Intellectual honesty"]

## 3. Generation rules (generate_synthetic.py)

Deterministic: `random.seed(42)` and `numpy` not required (stdlib only).

### 3.1 Population
- Invested: all 51 roster companies. fund from status: "Portfolio Fund1" -> "Fund I", "Portfolio Fund2" -> "Fund II", "Portfolio Fund3" -> "Fund III", "Realised" -> "Legacy Fund". vertical = roster taxonomy. current_stage = roster series. entry_date = roster list_created_at date (that is when the deal entered the pipeline; good enough). vintage_year from entry_date.
- stage_at_entry: derived from current_stage with the rule below, so that a company whose current stage is above its entry stage is a graduate by construction.
  - current in {Pre-Seed} -> entry Pre-Seed
  - current in {Seed, Seed Extension} -> entry Pre-Seed (60%) or Seed (40%)
  - current in {Series A, Series A Extension} -> entry Seed (65%) or Series A (35%)
  - current in {Series B, C, D, Origination} -> entry Series A (70%) or Seed (30%)
- Passed: 68 fictional companies (names list embedded in generator; plausible fintech names, none matching a real known company). vertical drawn from the same distribution as invested. stage_at_entry drawn Pre-Seed 35% / Seed 45% / Series A 20%. entry_date uniform 2021-06 to 2026-03. pass_stage: Chemistry 45%, Active DD 30%, Pre IC 12%, IC 8%, Term Sheet 5% (Term Sheet passes get pass_reason "lost"). pass_reason distribution excluding lost: price 30%, founder 25%, business 25%, timing 12%, other 8%.

### 3.2 Latent quality and scores
- Each founder gets latent quality q ~ Normal(0,1), clipped to [-2.5, 2.5].
- For passed founders, shift q by pass reason: price +0.6, lost +0.7, timing +0.2, business -0.2, founder -0.9, other 0.
- Invested founders: q + 0.5 (selection).
- True dimension loadings (how much each dimension reflects q): ceiling 0.95, talent 0.85, execution 0.70, decisiveness 0.60, market 0.55, self_awareness 0.40, resilience 0.35, customer 0.30. These make Ceiling and Talent the real predictors and Customer the weak one.
- Stage 2 score_d = round(clip(3 + 1.1 * loading_d * q + Normal(0, 0.55) + rater_bias, 1, 5)).
- Selection bias to reproduce the "portfolio has no variance on Ceiling" effect: invested founders with ceiling < 4 are re-drawn once (keep if still < 4, so a few remain).
- Decision over-weighting of Customer: invested founders get +0.5 added to customer before rounding (the team likes it, it does not predict).
- Stage 1 score_d = round(clip(stage2 + Normal(0, 0.7), 1, 5)); with probability 0.15 per dimension Stage 1 is null (Not assessed) with confidence "L". Stage 2 null probability 0.05.
- Confidence: H if |score-3| >= 1.5 and not null, else M 60% / L 40%.
- Raters: 6 raters "Rater A".."Rater F" with bias offsets [+0.3, 0, -0.3, +0.1, -0.1, +0.5] (applied before rounding) and a "three-heavy" tendency for Rater E (30% of scores forced to 3). Same rater for stage1 and stage2 of a founder 70% of the time.
- cohort: "backfilled" for entry_date < 2026-04-01, else "forward".
- Passed founders with pass_stage "Chemistry" only get stage1 (no stage2). All others get stage1 and stage2. Invested get stage1, stage2 and QPR entries (one per completed half-year since entry, max 6).

### 3.3 Intangibles
- words: pick 3 from a vocabulary bank conditioned on q and on the top dimension. High q bank: grit, clarity, magnetism, relentless, insight, calm, precise, obsessed, sharp, honest, fast, deliberate, credible, magnetic, unusual. Low q bank: polished, energetic, likeable, ambitious, salesy, smooth, confident, optimistic, charming, articulate, scrappy, hungry, network, pedigree, hustle. Mix: 3 words from the bank matching sign of q with probability 0.7 each, else from the other bank.
- lean_in: template sentences, two families. Specific family includes a number or a concrete artifact ("closed 3 design partners before the seed", "poached the head of risk from a scaled lender"). Adjectival family ("very impressive founder with strong energy"). Probability of specific = 0.35 + 0.2*q (clipped 0.1..0.85).
- worry: template sentences; intensity 1..5 stored implicitly by wording; generate a hidden worry_intensity = clip(round(3 - 0.8*q + Normal(0,0.8)),1,5) and pick a sentence from that bucket.
- conviction = round(clip(3 + 0.8*q + 0.4*(invested) + Normal(0,0.6),1,5)).
- would_back_again at entry: yes if conviction >= 4, unsure if 3, no if <= 2. At QPR: re-drawn from realised outcome (see 3.5).
- themes: 1 to 3 themes; map words to themes where obvious (grit->Grit, clarity->Clarity, magnetism/magnetic->Magnetism, fast->Speed, insight/unusual->Non-obvious insight, honest->Intellectual honesty, calm->Calm under pressure, hustle/scrappy/hungry->Hustle, salesy/smooth/articulate->Storytelling, pedigree/network->Domain depth).

### 3.4 Outcomes
- window_months by stage_at_entry: Pre-Seed 18, Seed 24, Series A 30. This is an assumption (earlier stages need to return to market sooner, later stages get more runway), not sourced from Motive's actual historical time-between-rounds. Replace with real numbers before this runs on real data; everything downstream (graduated true/false/null, the pending/censored count, every graduation rate) depends on where this line is drawn.
- window_closed = entry_date + window_months <= as_of.
- Graduation probability p = sigmoid(-0.6 + 1.0*q + 0.35*(vintage_year in {2021, 2024, 2025}) - 0.35*(vintage_year in {2022, 2023}) + 0.3*(stage_at_entry == "Series A")). For invested companies whose current_stage is above stage_at_entry, force graduated = true (consistency with the roster). For "Legacy Fund" companies force graduated = true and status "realised".
- If graduated: graduation_months uniform in [7, window_months], next_round_date = entry_date + graduation_months, step-up multiple uniform in [1.6, 4.5] (skewed low: use 1.6 + 2.9 * random()**1.8), next_round_pre_money = entry_pre_money * step_up, up_round true. Otherwise if a round happened but flat/down (prob 0.15 of non-graduates): step-up uniform [0.6, 1.2], up_round false, graduated false. Else no round.
- If window not closed and no round: graduated = null (censored).
- entry_pre_money by stage: Pre-Seed lognormal around 8M, Seed around 22M, Series A around 70M (USD).
- motive_led_followon: invested and graduated, probability 0.25.
- headcount_entry by stage: Pre-Seed 4-9, Seed 8-25, Series A 20-60. headcount_now = entry * (1.9 if graduated else 1.15 if status active else 0.5) * (1 + 0.2*q) * Uniform(0.8,1.2), integer >= 1. headcount_growth_yoy derived.
- status: realised for Realised fund; written_off for invested with q < -1.3 and not graduated (prob 0.6); shut_down for passed non-graduates with q < -1.0 (prob 0.4); acquired prob 0.05 for graduates; else active. Passed companies with pass_stage Chemistry and no round: status "unknown" with probability 0.3.
- hypothetical_moic (passed only): if graduated, next_round_pre_money / entry_pre_money (this is what we missed); else null.

### 3.5 QPR entries (invested only)
- One QPR per completed half-year after entry, dated entry + 6k months, up to as_of, max 6.
- health_check per dimension: distribution driven by q and by whether graduated: G prob = 0.45 + 0.2*q (+0.15 if graduated), R prob = 0.15 - 0.08*q (+0.15 if status written_off), rest A. Clip probabilities to [0.05, 0.9].
- milestones: Met if graduated and random < 0.7, Missed if written_off or (not graduated and random < 0.4), else Partial.
- would_back_again at QPR: yes if graduated and q > -0.5, no if written_off, else unsure.
- what_changed: one sentence template referencing the trend.

### 3.6 MOIC panel (invested only)
- Quarters from the first quarter after entry_date to 2026Q2 (Valuation Committee cadence), inclusive.
- invested_cost by stage: Pre-Seed 0.5M to 1.5M, Seed 1M to 3M, Series A 3M to 8M (USD).
- Sticky marks: gross_moic = 1.00 until the quarter containing next_round_date, then step to step_up (rounded 2dp), held flat after. If a flat/down round occurred, step to that multiple. Written-off companies: mark goes to 0 in a random quarter at least 4 quarters after entry, method "Written off". Realised fund companies: at a random quarter after graduation, realized_value = cost * final multiple (Corastone-like, 1.1x to 3.4x), unrealized 0.
- Small noise: with probability 0.1 per quarter, method "Calibration" and moic multiplied by Uniform(0.9, 1.1), then held.
- unrealized_value = cost * gross_moic (minus realized share), realized_value as above.

## 4. Analytics definitions (analytics.js, pure functions)

All functions take (data, filters) and return plain objects. filters = { decision: "all"|"invested"|"passed", stage_at_entry: [], vertical: [], vintage: [], cohort: "all"|"backfilled"|"forward", rater: [], anonymize: bool }.

### 4.1 Helpers
- `entryScores(founder)`: use stage2 assessment scores if present, else stage1. Returns { key -> {score, confidence} }. This is the "score at entry".
- `resolvedOutcome(company)`: outcome where graduated is true or false (not null). Censored rows are excluded from rates but counted in a "pending" tally.
- `wilson(k, n, z=1.96)`: returns {p, lo, hi}. If n=0 return nulls.
- `liftCI(k1,n1,k0,n0)`: ratio of proportions with Katz log CI: se = sqrt(1/k1 - 1/n1 + 1/k0 - 1/n0); if any k is 0 apply +0.5 continuity to all four counts. Returns {lift, lo, hi}.

### 4.2 Metrics
- `populationSummary`: counts invested/passed, graduated rates each (resolved only), base rate, pending count, founders scored, assessments count, by stage counts.
- `dimensionLift(view)`: for each dimension, high = score in {4,5}, low = score in {1,2,3}, null excluded; k/n graduated for each group; Wilson CIs; lift and CI; "not assessed" share. Computed for three views: "all", "invested", "passed". Sort by lift in "all" view descending. Also return `selectionGap` = lift_all - lift_invested per dimension.
- `vetoSpike`: any score == 1 at entry vs none; any score == 5 vs none. Rates with Wilson CIs. Also "clean spike": at least one 5 and no 1.
- `profileShape`: per founder: max dim, min dim, n5, n1, nNull, mean of non-null (shown but labelled "reference only, we do not average").
- `personaGrid`: rows = background archetype, cols = vertical family (map the 14 verticals into 8 families: Payments; Lending; Wealth management; Capital markets; Insurance; Data & AI; Infrastructure (incl. Embedded finance, Banking, Digital Assets); Other (Alternatives, Green finance, Business Services, Stealth)). Cell = { invested, passed, graduated, resolved, rate }.
- `stageDelta`: per dimension, mean(stage2 - stage1) where both non-null; split by outcome (graduated vs not); share of founders where stage2 moved in the "right" direction (up if graduated, down if not); overall correlation-free summary: "Stage 2 improved prediction" flag = does stage2 lift exceed stage1 lift for the top 3 dimensions.
- `raterCalibration`: per rater: n assessments, mean score, share of 3s, share of null, share of 5s, share of 1s, graduation rate of founders they scored >= 4 on ceiling (small-n caveat).
- `intangibles`: word frequency by outcome (graduated vs not vs pending) from entry assessments; theme x outcome counts with rates; specificity heuristic: lean_in is "specific" if it contains a digit or one of ["closed","poached","shipped","signed","hired","left","churn","design partner","pilot","contract","reference"]; graduation rate specific vs adjectival with Wilson CIs; worry intensity proxy: count of worry sentences containing ["solo","no","never","burn","runway","churn","conflict","defensive","thin"] bucketed; entry-vs-QPR would_back_again transition matrix for invested.
- `decisionQuality`: 2x2 over resolved companies: invested&graduated, invested&not, passed&graduated, passed&not. Passed&graduated broken down by pass_reason. Sum and median of hypothetical_moic for passed graduates, and by pass_reason. Precision, recall, and a note that recall is the venture-relevant one. Also "founder-driven pass that graduated" list (the judgment misses) and "invested with a veto" list.
- `moicSeries`: per invested company: array of {quarter, gross_moic}; fixed-horizon MOIC at 24 and 36 months after entry (nearest quarter at or before); portfolio median trajectory by quarters-since-entry.
- `completeness`: per stage: share of dimension scores null; share of assessments missing intangibles; share of outcomes censored; share of companies with QPR in last 2 quarters.
- `founderTable`: flat rows for the explorer: company, decision, fund, vertical, stage, vintage, rater, 8 scores, n1, n5, conviction, words, graduated, months, moic_24, status.

## 5. Dashboard (index.html + app.js)

Single page, sections stacked vertically, sticky top bar with filters and toggles. Everything computed client-side from FSS_DATA so the assessment form changes the charts live.

Top bar: synthetic-data banner (always visible, cannot be dismissed), Anonymize toggle (swaps name -> anon_name everywhere), Decision filter (All / Invested / Passed), Stage at entry multi-select, Vertical multi-select, Cohort (All / Backfilled / Forward), "Reset".

Sections, in order:
1. Population summary: metric cards (founders scored, invested graduation rate, passed graduation rate, base rate, pending/censored, assessments).
2. Dimension lift: horizontal grouped bar, two series (Full population blue #2a78d6, Portfolio only gray #b4b2a9), sorted by full-population lift; error bars drawn as thin lines using a Chart.js plugin or as a second overlay; a table beneath with High k/n, Low k/n, rates, lift, CI, not-assessed share, and a one-word "read": Strong (lo > 1.3), Some (lo > 1.0), None (CI spans 1), Reversed (hi < 1). Text note: 1.0x is no effect.
3. Veto and spike cards (4 metric cards with n and CI).
4. Decision quality: 2x2 grid with counts, pass-reason breakdown inside the anti-portfolio cell, hypothetical MOIC total, and two small lists (judgment misses; invested with a veto).
5. Persona x vertical grid: heat table, cell shows "graduated/resolved (invested+passed)"; color by rate with a sequential blue ramp; cells with resolved < 4 rendered muted with a dashed border to signal small n.
6. Stage 1 to Stage 2: dumbbell or grouped bar of mean delta by dimension split by outcome; plus the "did diligence help" summary line.
7. Intangibles: two word lists side by side (graduated vs not, top 12 words with counts); theme x outcome bar; specificity rate comparison; would-back-again transition matrix.
8. MOIC panel: line chart of gross MOIC by quarters since entry for invested companies (thin gray lines) with the median in blue; metric cards for median MOIC at 24 and 36 months; note on sticky marks.
9. Rater calibration table.
10. Data completeness panel.
11. Founder explorer: sortable table (click header), row click opens a detail card with an 8-bar profile (score bars 1 to 5 with confidence shading, null shown as "Not assessed"), intangibles, outcome, MOIC sparkline.
12. New assessment form: company (select existing or type new with decision/vertical/stage), founder role, stage (stage1/stage2), rater, 8 dimension scores each with options 1..5 and "Not assessed" (no confidence input, submitted assessments carry confidence: null), archetype selects, three words (3 inputs, required), lean-in, worry, conviction, would back again, pass reason if decision is passed. On submit: validate (all 3 words present, at least 4 dimensions scored), append to FSS_DATA in memory, persist to localStorage under key "fss_mvp_added" (wrapped in try/catch), re-render everything. A "Clear added" button.

Design: flat, light, 0.5px borders, cards radius 12px, sans font, sentence case, no emoji, Tabler icons not required (plain text fine). Colors: blue #2a78d6 for primary series, gray #b4b2a9 for portfolio-only/comparison, semantic: green #1D9E75 (good), amber #EF9F27 (caution), red #E24B4A (bad), used only with a label. Always show n. Never show a bare percentage without its count.

## 6. Tests (tests/test_analytics.js)

Node script: `node tests/test_analytics.js`. Loads data/data.js by evaluating it with a fake window, requires app/analytics.js. Asserts:
- companies: 51 invested with fund set; 68 passed with pass_stage set and no fund; ids unique; every founder has a company; every company has exactly one CEO founder.
- assessments: every invested founder has stage1 and stage2; passed founders with pass_stage Chemistry have only stage1; scores are 1..5 or null; words length 3; conviction 1..5.
- outcomes: one per company; graduated null only when window_closed false and no up round; invested companies whose current_stage rank > stage_at_entry rank are graduated; Realised fund companies status realised.
- moic_panel: only invested; quarters contiguous; gross_moic >= 0; written_off companies end at 0.
- analytics: dimensionLift("all") returns 8 rows, lift for ceiling > lift for customer; vetoSpike veto rate < no-veto rate; decisionQuality cells sum to resolved count; wilson(0,0) returns nulls without throwing; liftCI handles zero counts.
Print a short summary and exit non-zero on any failure.

## 7. Build (build/build_dist.py)

Reads app/index.html, replaces `<link rel="stylesheet" href="styles.css">` with inline style, and each `<script src="...">` local file with inline script (keep the Chart.js CDN tag as is). Writes dist/founder-signal-mvp.html. Prints size.

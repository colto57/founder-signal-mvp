# Founder Signal System, MVP demo

A sandboxed prototype of the founder analytics layer described in the Team Interviewing Framework (the "Agent 3" idea) plus the intangibles layer and the success definition we worked through. Everything here is local, self-contained, and fully fabricated. Nothing reads from or writes to Affinity, Notion or Box at runtime, or anywhere else.

## Everything here is synthetic

Every company (all 119, "invested" and "passed" alike), every fund label, every founder score, every intangible, every outcome, every MOIC mark, and every rater is fabricated. Nothing in this repository is derived from any real company, fund, or CRM record. No real founder or partner name appears anywhere. Raters are "Rater A" to "Rater F".

The synthetic data is built to contain specific patterns so the dashboard has something to show. Ceiling and Talent magnetism are designed to predict graduation; Customer obsession is designed to be over-weighted in decisions but weakly predictive; the portfolio has almost no variance on Ceiling because the generator selects on it, so the "selection gap" between the full-population view and the portfolio-only view is visible by construction. When you present this, say so. The point of the demo is the shape of the analysis, not the numbers.

The generator uses seed 33. That seed was chosen from a sweep of 60 so that the designed ordering is legible at this sample size. Other seeds show the same structure with more noise, which is itself a useful demonstration of what N of 85 resolved outcomes looks like. Change `SEED` in `data/generate_synthetic.py` to see it.

### How a company's stage decides when it counts as "pending"

A company is "graduated" (raised its next priced up-round) or "not graduated", or it is "pending / censored" if neither has happened yet. Whether it's still pending depends on a window that starts at entry and is keyed to `stage_at_entry`: Pre-Seed gets 18 months, Seed gets 24, Series A gets 30 (`WINDOW_MONTHS` in `data/generate_synthetic.py`, also in `SPEC.md` section 3.4). Once entry date plus that window has passed with no round either way, the company is called "not graduated"; before that, with no round yet, it's pending.

These specific numbers (18/24/30) are an assumption, not pulled from Motive's actual historical time between rounds, the reasoning was that earlier-stage companies have less runway and need to return to market sooner, later-stage companies have more capital and more time. If this ever runs on real data, these should be replaced with Motive's own median time-between-rounds by stage; every graduation rate and the pending count in this dashboard depend on where this line is drawn.

## Open the demo

Option 1, single file: open `dist/founder-signal-mvp.html` in any browser. It needs internet access once to fetch Chart.js from a CDN; everything else is inline. Share this one file with the team.

Option 2, source: open `app/index.html` in a browser (it loads `../data/data.js` relative to itself).

Option 3, Cowork: the same page is saved as the artifact "founder-signal-mvp-demo" in the Cowork sidebar.

## What the dashboard shows, top to bottom

The ground truth read (no number, always open). Three plain-language cards, computed from the same data as everything below: which dimensions actually predict graduation (top 3 by lift), what the firm may be over-weighting in decisions without it predicting graduation, and the veto/spike numbers. This exists so the headline finding is never buried under process detail. Read this first; every other section is the evidence behind it.

1. Population summary. Founders scored, graduation rate for invested and passed, base rate for everyone we met, pending (censored) count.
2. Dimension lift. For each of the 8 dimensions, graduation rate for scores of 4 to 5 versus 1 to 3, a plain "Read" (Strong, Some, None, Reversed) and the lift multiple, the share Not assessed, and the selection gap (full population lift minus portfolio-only lift). Toggle between full population, portfolio only, passed only. 1.0x means no effect. The Read is still derived from a 95 percent confidence interval underneath, the raw interval just isn't displayed.
3. Veto and spike. Graduation rate for founders with any 1 at entry versus none, and any 5 versus none. This is the "do not average" principle made visible.
4. Decision quality. Two by two of invested and passed against graduated and not, with the anti-portfolio cell broken down by pass reason and the summed hypothetical step-up we missed. Lists of judgment misses (founder-driven passes that graduated) and invested-with-a-veto.

Supporting detail (collapsed by default, click to expand): persona by vertical grid, Stage 1 to Stage 2 drift, intangibles (word frequency, theme, worry, would-back-again), the MOIC panel, rater calibration, and data completeness. These are the exploratory and QA views; nothing in them is needed to answer "what predicts success," so they stay out of the way until you want them.

5. Founder explorer. Sortable table of every scored founder; click a row for the 8-bar profile, intangibles, outcome and MOIC sparkline.
6. New assessment form. The questionnaire from the plan: identity, 8 dimensions with Not assessed and confidence, archetype, three words, lean-in, worry, conviction, would back again, pass reason. Submitting adds a record in memory (and in browser localStorage) and re-renders every chart. "Clear added" removes them.

Top bar: permanent synthetic-data banner, Anonymize toggle (swaps company names for Company 01 to 119, for presenting outside the team), and filters for decision, stage at entry, vertical and cohort.

## The two lift questions, and why both exist

`app/analytics.js` computes two different lifts per dimension, and the ground-truth headline is the difference between them: dimension lift is "does a high score here predict graduation" (drives the main chart, the Dimension lift table, and the "What actually predicts graduation" card); decision lift is "does a high score here predict getting invested at all" (a new, smaller calculation, `dimensionDecisionLift`, used only to power the "What we may be over-weighting" card). A dimension that scores high on decision lift but low on dimension lift is one the firm leans on when deciding who to back, without it actually forecasting who succeeds, which was the original question this whole project was built to answer.

## Regenerate or change the data

```
python3 data/generate_synthetic.py      # writes data/data.js and data/data.json
node tests/test_analytics.js            # 18 groups, 167 checks
python3 build/build_dist.py             # rebuilds dist/founder-signal-mvp.html
```

Tunable constants are at the top of `generate_synthetic.py`: dimension loadings, rater biases, pass reason distribution, graduation windows, pre-money centres. `SPEC.md` documents every rule.

## Layout

```
SPEC.md                       schema, generation rules, analytics definitions
data/portfolio_roster.json    fabricated roster (names, fund, vertical, current stage only)
data/generate_synthetic.py    deterministic generator
data/data.js, data.json       generated data
app/analytics.js              pure analytics functions (Wilson CIs, Katz lift CI, all metrics)
app/app.js                    rendering, filters, explorer, form
app/index.html, styles.css
tests/test_analytics.js       node tests on data invariants and analytics
tests/smoke_app.js            optional headless render test (needs jsdom)
build/build_dist.py           single-file build
dist/founder-signal-mvp.html  the shareable demo
```

## What this MVP deliberately does not do

It does not connect to live data. It scores only the CEO of each company (co-founders exist with archetype only). It does not run a predictive model; every number is descriptive with a confidence interval, which is the right posture at this N. It does not persist assessments anywhere except browser localStorage.

## From demo to real system

The path in the Notion plan still applies: create the Founder Assessments and Company Outcomes databases in Notion, backfill the outcome panel from the Box Valuation Committee memos, capture forward assessments (including passes at Chemistry or later), and point this dashboard at the real data. The analytics layer here is data-source agnostic: anything that produces the schema in `SPEC.md` section 2 will render.

#!/usr/bin/env python3
"""
Synthetic data generator for the Founder Signal System MVP.

Implements SPEC.md sections 2 and 3. Standard library only, deterministic
(random.seed(42)). Writes data/data.js as `window.FSS_DATA = {...};` and a
data/data.json copy for tooling.

Everything in this dataset is SYNTHETIC and fabricated: founders, scores,
intangibles, outcomes, and every company (invested and passed alike),
along with their names, funds, verticals and stages. Nothing is derived
from any real company, fund, or CRM record. No real person names appear
anywhere.
"""

import json
import math
import os
import random
from datetime import date, datetime, timedelta, timezone

# ----------------------------------------------------------------------------
# Constants
# ----------------------------------------------------------------------------

SEED = 33
AS_OF = date(2026, 9, 22)
FORWARD_CUTOFF = date(2026, 4, 1)
LAST_QUARTER = (2026, 2)  # Valuation Committee cadence, panel ends 2026Q2

HERE = os.path.dirname(os.path.abspath(__file__))
ROSTER_PATH = os.path.join(HERE, "portfolio_roster.json")
OUT_JS = os.path.join(HERE, "data.js")
OUT_JSON = os.path.join(HERE, "data.json")

DIMENSIONS = [
    {"key": "execution", "label": "Execution framework"},
    {"key": "market", "label": "Market thinking"},
    {"key": "customer", "label": "Customer obsession"},
    {"key": "self_awareness", "label": "Self-awareness and learning velocity"},
    {"key": "resilience", "label": "Resilience and adaptability"},
    {"key": "talent", "label": "Talent magnetism and team building"},
    {"key": "decisiveness", "label": "Decisiveness under ambiguity"},
    {"key": "ceiling", "label": "Ceiling: insight, ambition and capital pull"},
]
DIM_KEYS = [d["key"] for d in DIMENSIONS]

# How much each dimension reflects latent quality q (SPEC 3.2)
LOADINGS = {
    "ceiling": 0.95,
    "talent": 0.85,
    "execution": 0.70,
    "decisiveness": 0.60,
    "market": 0.55,
    "self_awareness": 0.40,
    "resilience": 0.35,
    "customer": 0.25,
}

THEMES = [
    "Grit", "Clarity", "Magnetism", "Speed", "Non-obvious insight",
    "Storytelling", "Domain depth", "Chip on the shoulder",
    "Calm under pressure", "Hustle", "Intellectual honesty",
]

RATERS = ["Rater A", "Rater B", "Rater C", "Rater D", "Rater E", "Rater F"]
RATER_BIAS = {
    "Rater A": 0.3,
    "Rater B": 0.0,
    "Rater C": -0.3,
    "Rater D": 0.1,
    "Rater E": -0.1,
    "Rater F": 0.5,
}
THREE_HEAVY_RATER = "Rater E"
THREE_HEAVY_P = 0.30

STAGE_RANK = {
    "Pre-Seed": 0,
    "Seed": 1,
    "Seed Extension": 1,
    "Series A": 2,
    "Series A Extension": 2,
    "Series B": 3,
    "Series C": 4,
    "Series D": 5,
    "Origination": 3,
}
NEXT_STAGE = {"Pre-Seed": "Seed", "Seed": "Series A", "Series A": "Series B"}

FUND_MAP = {
    "Portfolio Fund1": "Fund I",
    "Portfolio Fund2": "Fund II",
    "Portfolio Fund3": "Fund III",
    "Realised": "Legacy Fund",
}

# How long a company gets, from entry, to raise its next priced up-round before we call the
# outcome "graduated" or "not" instead of "pending". Not sourced from Motive's actual portfolio
# timing, an assumption that earlier stages need to return to market sooner (less runway, smaller
# checks) and later stages take longer (more capital, more time to hit the next round's bar).
# Replace with real median time-between-rounds by stage if this ever runs on real data.
WINDOW_MONTHS = {"Pre-Seed": 18, "Seed": 24, "Series A": 30}
PRE_MONEY_CENTER = {"Pre-Seed": 8_000_000, "Seed": 22_000_000, "Series A": 70_000_000}
HEADCOUNT_RANGE = {"Pre-Seed": (4, 9), "Seed": (8, 25), "Series A": (20, 60)}
COST_RANGE = {"Pre-Seed": (500_000, 1_500_000), "Seed": (1_000_000, 3_000_000), "Series A": (3_000_000, 8_000_000)}

PASS_STAGE_DIST = [("Chemistry", 45), ("Active DD", 30), ("Pre IC", 12), ("IC", 8), ("Term Sheet", 5)]
PASS_REASON_DIST = [("price", 30), ("founder", 25), ("business", 25), ("timing", 12), ("other", 8)]
PASS_REASON_SHIFT = {"price": 0.6, "lost": 0.7, "timing": 0.2, "business": -0.2, "founder": -0.9, "other": 0.0}
PASSED_STAGE_DIST = [("Pre-Seed", 35), ("Seed", 45), ("Series A", 20)]

# 68 fictional passed companies. None of these are real known fintechs.
PASSED_NAMES = [
    "Ledgerline", "Kestrel Pay", "Fathom Credit", "Orbital Treasury",
    "Marrowline Capital", "Quillbank", "Tessery", "Vantablock",
    "Northwick Lending", "Halyard Markets", "Brightmoor Cover", "Saltmarsh Analytics",
    "Fennel Wealth", "Ironquay", "Pellucid Data", "Wrenfield",
    "Lumenfold", "Tidewater Credit", "Ashgrove Risk", "Bramblewick",
    "Corvid Insight", "Glasswing Pay", "Harrowgate Capital", "Palisade Treasury",
    "Quarterdeck Finance", "Rookery", "Thistledown Ledger", "Umbra Compliance",
    "Verdant Yield", "Windrow Capital", "Yardarm Markets", "Alderbrook",
    "Cinderpath", "Driftline Cover", "Emberly", "Foxglove Pay",
    "Granary Credit", "Hollowell", "Inkwell Books", "Lanternfish",
    "Mossbank", "Nettlebed Insurance", "Pinecrest Wealth", "Quillon Data",
    "Ridgeback Lending", "Slatewater", "Tallowtine", "Umberline Pay",
    "Wickerfield", "Ambergris Capital", "Birchwater", "Dunmore Ledger",
    "Elmstead Risk", "Fernbrook Wealth", "Oxbow Settlements", "Hearthline Pay",
    "Sextant Markets", "Gallowglass", "Peatland Capital", "Larkspur Treasury",
    "Brindle Credit", "Coppice Insurance", "Skerry Data", "Tarnwater",
    "Millrace Finance", "Stonecrop Ledger", "Vesperline", "Fallowfield Lending",
]
assert len(PASSED_NAMES) == 68
assert len(set(PASSED_NAMES)) == 68

BACKGROUND_DIST = [
    ("Repeat founder", 18), ("High-velocity operator", 20), ("Banking or finance", 22),
    ("Consulting", 10), ("Technical or academic", 14), ("Domain insider", 12), ("Other", 4),
]
CTO_BACKGROUND_DIST = [
    ("Technical or academic", 55), ("High-velocity operator", 20), ("Repeat founder", 15), ("Other", 10),
]
FMF_DIST = [("Lived the problem", 35), ("Sold into it", 25), ("Built it before", 20), ("Outsider with insight", 20)]

PASS_REASON_NOTES = {
    "price": [
        "Valuation ask was well above where we could underwrite the round.",
        "Round priced at a level that left little room for our return case.",
        "Pre-empted at a price that did not fit the fund's ownership model.",
    ],
    "founder": [
        "Team did not build conviction on the founder's ability to scale the organisation.",
        "Concerns about self-awareness and hiring judgement surfaced in references.",
        "Strong storyteller, but the team worried about follow through and delegation.",
    ],
    "business": [
        "Unit economics did not hold up in diligence.",
        "Market looked smaller than pitched once we mapped the actual buyer.",
        "Distribution depended on a partner channel we could not get comfortable with.",
    ],
    "timing": [
        "Too early for the fund's stage focus, asked to stay close.",
        "Fund was between closes and could not move on the founder's timeline.",
        "Sector exposure already full in the current fund.",
    ],
    "lost": [
        "Term sheet issued, founder went with a competing offer.",
        "Lost to a larger lead who pre-empted the round.",
        "Term sheet was outbid on price and ownership.",
    ],
    "other": [
        "Overlap with an existing portfolio company.",
        "Geography outside the fund's mandate.",
        "Structure of the round did not work for the fund.",
    ],
}

# ----------------------------------------------------------------------------
# Intangibles banks and templates (SPEC 3.3)
# ----------------------------------------------------------------------------

HIGH_WORDS = [
    "grit", "clarity", "magnetism", "relentless", "insight", "calm", "precise",
    "obsessed", "sharp", "honest", "fast", "deliberate", "credible", "magnetic", "unusual",
]
LOW_WORDS = [
    "polished", "energetic", "likeable", "ambitious", "salesy", "smooth", "confident",
    "optimistic", "charming", "articulate", "scrappy", "hungry", "network", "pedigree", "hustle",
]

# Words favoured when a given dimension is the founder's top dimension
FAVORED_HIGH = {
    "ceiling": ["insight", "unusual", "magnetic", "credible"],
    "talent": ["magnetism", "magnetic", "credible"],
    "execution": ["precise", "deliberate", "fast", "relentless"],
    "decisiveness": ["fast", "sharp", "calm"],
    "market": ["insight", "sharp", "clarity"],
    "self_awareness": ["honest", "clarity"],
    "resilience": ["grit", "relentless", "calm"],
    "customer": ["obsessed", "deliberate"],
}
FAVORED_LOW = {
    "ceiling": ["ambitious", "pedigree"],
    "talent": ["charming", "network", "likeable"],
    "execution": ["scrappy", "hustle", "energetic"],
    "decisiveness": ["confident", "optimistic"],
    "market": ["articulate", "polished"],
    "self_awareness": ["smooth", "polished"],
    "resilience": ["hungry", "scrappy"],
    "customer": ["likeable", "energetic"],
}

WORD_THEME = {
    "grit": "Grit",
    "clarity": "Clarity",
    "magnetism": "Magnetism",
    "magnetic": "Magnetism",
    "fast": "Speed",
    "insight": "Non-obvious insight",
    "unusual": "Non-obvious insight",
    "honest": "Intellectual honesty",
    "calm": "Calm under pressure",
    "hustle": "Hustle",
    "scrappy": "Hustle",
    "hungry": "Hustle",
    "salesy": "Storytelling",
    "smooth": "Storytelling",
    "articulate": "Storytelling",
    "pedigree": "Domain depth",
    "network": "Domain depth",
}

# Specific family: each contains a number or a concrete artifact keyword
# (closed, poached, shipped, signed, hired, left, churn, design partner,
# pilot, contract, reference). Placeholders are filled with random integers.
SPECIFIC_LEAN_IN = [
    ("Closed {n} design partners before the seed round, all of them paying.", {"n": (2, 6)}),
    ("Poached the head of risk from a scaled lender within {n} months of founding.", {"n": (3, 9)}),
    ("Shipped the first version in {n} weeks and signed {m} pilot customers off the back of it.", {"n": (4, 12), "m": (2, 6)}),
    ("Signed a {n} year contract with a tier one bank before hiring a single salesperson.", {"n": (2, 4)}),
    ("Hired {n} engineers from a prior team, all of whom took pay cuts to join.", {"n": (3, 8)}),
    ("Left a senior role at a large payments firm and brought {n} customers along.", {"n": (2, 5)}),
    ("Churn in the pilot cohort was under {n} percent after {m} months.", {"n": (2, 6), "m": (6, 12)}),
    ("Every reference call came back with the same unprompted story about follow through.", {}),
    ("Ran {n} customer interviews before writing code and can quote most of them from memory.", {"n": (40, 150)}),
    ("Grew from zero to {n} accounts in {m} months with a team of {k}.", {"n": (15, 80), "m": (6, 14), "k": (3, 7)}),
    ("Converted {n} of {m} pilots into paid contracts within a quarter.", {"n": (2, 4), "m": (5, 8)}),
    ("A former manager on the reference list said this founder hired above their own level twice.", {}),
    ("Cut onboarding time from {n} days to {m} with a single product change.", {"n": (20, 45), "m": (2, 7)}),
    ("Won a competitive pilot against {n} incumbents with a two person team.", {"n": (2, 4)}),
]

# Adjectival family: no digits and none of the specificity keywords.
ADJECTIVAL_LEAN_IN = [
    "Very impressive founder with strong energy and a clear sense of purpose.",
    "Great presence in the room, the whole team leaned forward.",
    "Smart, ambitious and clearly hungry to build something big.",
    "Polished storyteller who made the market feel inevitable.",
    "Strong pedigree and an obvious passion for the space.",
    "Charismatic and confident, the kind of person people want to follow.",
    "Deep conviction about the problem and a compelling personal story.",
    "High energy, fast talker, seemed to have an answer for everything.",
    "Likeable and articulate, would be easy to work with.",
    "Impressive network and a real sense of momentum around the company.",
    "Thoughtful and calm, took feedback well in the meeting.",
    "Ambitious vision and genuine enthusiasm for the customer.",
]

# Worry sentences by hidden intensity 1..5. Buckets 1 and 2 deliberately avoid
# the intensity keywords used by the analytics heuristic (solo, no, never,
# burn, runway, churn, conflict, defensive, thin); buckets 3 to 5 use them
# naturally and increasingly.
WORRIES = {
    1: [
        "Hard to find a real concern, the main risk is market timing rather than the founder.",
        "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
        "Would like to see a stronger finance hire before the next raise, a small gap.",
        "Talks quickly and can lose the room at times, a style point more than a substance issue.",
        "Board management is untested, though early investors speak highly of the cadence.",
    ],
    2: [
        "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
        "Relies heavily on one large customer for most of the revenue today.",
        "Pricing is still being worked out and the sales cycle is longer than pitched.",
        "Second time founder energy but first time in a regulated market, learning curve ahead.",
        "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    ],
    3: [
        "Team is thin below the founder, every key function still runs through one person.",
        "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
        "Burn is running ahead of plan and the next raise will need a step change in traction.",
        "Gets defensive when challenged on unit economics, though recovers quickly.",
        "Runway is under twelve months and the pipeline is not yet converting.",
    ],
    4: [
        "Solo founder with no technical cofounder and no clear plan to fix it.",
        "Early churn in the first cohort is high and the founder has no explanation for it.",
        "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
        "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
        "Never worked in the vertical and has been defensive about that gap in every conversation.",
    ],
    5: [
        "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
        "References raised the same conflict story independently, the founder was defensive about all of it.",
        "Never shipped a product to production and churn in the beta has been near total.",
        "Runway is under six months, no lead investor, and the board has never met.",
        "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    ],
}

WHAT_CHANGED = {
    "improving": [
        "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead.",
        "Pipeline conversion improved and the board cadence is now steady.",
        "Landed the senior hire that was missing and the product roadmap tightened as a result.",
        "Founder is delegating more and the team below is visibly stronger than last review.",
        "Momentum picked up across the board and the next raise is being prepared from a position of strength.",
    ],
    "steady": [
        "Little change since the last review, execution steady against plan.",
        "Same team, same plan, progress broadly in line with the last update.",
        "Founder remains hands on across functions, no change in team shape this period.",
        "Revenue tracked to plan, hiring slightly behind, nothing structural moved.",
        "Board relationship stable, product shipping on the expected cadence.",
    ],
    "deteriorating": [
        "Two senior departures and the founder is back to running sales alone.",
        "Burn stayed high while the pipeline slipped a quarter.",
        "Progress slowed against the plan that gates the next raise and morale is visibly lower.",
        "Founder has become defensive in board sessions and is slow to share bad news.",
        "Key customer churned and the replacement pipeline is thin.",
    ],
}

# ----------------------------------------------------------------------------
# Helpers
# ----------------------------------------------------------------------------


def rnd(x):
    """Round half up (avoids Python's banker's rounding)."""
    return int(math.floor(x + 0.5))


def clip(x, lo, hi):
    return max(lo, min(hi, x))


def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))


def weighted_choice(pairs):
    items = [p[0] for p in pairs]
    weights = [p[1] for p in pairs]
    return random.choices(items, weights=weights, k=1)[0]


def days_in_month(y, m):
    nxt = date(y + (1 if m == 12 else 0), 1 if m == 12 else m + 1, 1)
    return (nxt - date(y, m, 1)).days


def add_months(d, n):
    total = d.month - 1 + n
    y = d.year + total // 12
    m = total % 12 + 1
    return date(y, m, min(d.day, days_in_month(y, m)))


def months_between(d1, d2):
    n = (d2.year - d1.year) * 12 + (d2.month - d1.month)
    if d2.day < d1.day:
        n -= 1
    return max(0, n)


def quarter_of(d):
    return (d.year, (d.month - 1) // 3 + 1)


def q_index(yq):
    return yq[0] * 4 + (yq[1] - 1)


def q_from_index(i):
    return (i // 4, i % 4 + 1)


def q_str(yq):
    return "%dQ%d" % (yq[0], yq[1])


def iso(d):
    return d.isoformat()


def money(x):
    return int(round(x))


def round_to(x, unit):
    return int(round(x / unit) * unit)


# ----------------------------------------------------------------------------
# 3.1 Population
# ----------------------------------------------------------------------------


def derive_entry_stage(current):
    # Entry stage is drawn one step below the current stage only some of the
    # time, so that a realistic share (roughly 60 to 65 percent) of invested
    # companies are graduates by construction rather than nearly all of them.
    if current == "Pre-Seed":
        return "Pre-Seed"
    if current in ("Seed", "Seed Extension"):
        return "Pre-Seed" if random.random() < 0.35 else "Seed"
    if current in ("Series A", "Series A Extension"):
        return "Seed" if random.random() < 0.40 else "Series A"
    if current in ("Series B", "Series C", "Series D", "Origination"):
        return "Series A"
    return "Seed"


def build_companies(roster):
    companies = []
    for r in roster:
        entry = datetime.strptime(r["list_created_at"][:10], "%Y-%m-%d").date()
        current = r["series"]
        companies.append({
            "id": "c%03d" % (len(companies) + 1),
            "name": r["name"],
            "anon_name": None,  # assigned after shuffle
            "decision": "invested",
            "fund": FUND_MAP[r["status"]],
            "vertical": r["taxonomy"],
            "stage_at_entry": derive_entry_stage(current),
            "current_stage": current,
            "entry_date": iso(entry),
            "vintage_year": entry.year,
            "pass_stage": None,
            "pass_reason": None,
            "pass_reason_note": None,
        })

    vertical_pool = [c["vertical"] for c in companies]
    start = date(2021, 6, 1)
    end = date(2026, 8, 31)
    span = (end - start).days
    for name in PASSED_NAMES:
        entry = start + timedelta(days=random.randint(0, span))
        pass_stage = weighted_choice(PASS_STAGE_DIST)
        if pass_stage == "Term Sheet":
            reason = "lost"
        else:
            reason = weighted_choice(PASS_REASON_DIST)
        companies.append({
            "id": "c%03d" % (len(companies) + 1),
            "name": name,
            "anon_name": None,
            "decision": "passed",
            "fund": None,
            "vertical": random.choice(vertical_pool),
            "stage_at_entry": weighted_choice(PASSED_STAGE_DIST),
            "current_stage": None,  # set after outcomes
            "entry_date": iso(entry),
            "vintage_year": entry.year,
            "pass_stage": pass_stage,
            "pass_reason": reason,
            "pass_reason_note": random.choice(PASS_REASON_NOTES[reason]),
        })

    # anon names assigned in shuffled order so the anon index does not leak decision
    order = list(range(len(companies)))
    random.shuffle(order)
    for anon_idx, comp_idx in enumerate(order):
        companies[comp_idx]["anon_name"] = "Company %02d" % (anon_idx + 1)
    return companies


# ----------------------------------------------------------------------------
# Founders
# ----------------------------------------------------------------------------


def make_archetype(role, team_shape, shared_history):
    if role == "CTO":
        background = weighted_choice(CTO_BACKGROUND_DIST)
    else:
        background = weighted_choice(BACKGROUND_DIST)
    repeat = background == "Repeat founder" or random.random() < 0.15
    if repeat:
        prior_exit = weighted_choice([("None", 40), ("Small", 40), ("Meaningful", 20)])
    else:
        prior_exit = "None"
    return {
        "background": background,
        "fmf_type": weighted_choice(FMF_DIST),
        "team_shape": team_shape,
        "prior_shared_history": shared_history,
        "repeat_founder": repeat,
        "prior_exit": prior_exit,
    }


def build_founders(companies):
    founders = []
    ceo_of = {}
    for c in companies:
        has_second = random.random() < 0.40
        if has_second:
            team_shape = "Two complementary" if random.random() < 0.65 else "Three or more"
        else:
            team_shape = weighted_choice([("Solo", 55), ("Two complementary", 30), ("Three or more", 15)])
        shared_history = team_shape != "Solo" and random.random() < 0.55

        ceo = {
            "id": "f%03d" % (len(founders) + 1),
            "company_id": c["id"],
            "role": "CEO",
            "display_name": "CEO, %s" % c["name"],
            "archetype": make_archetype("CEO", team_shape, shared_history),
        }
        founders.append(ceo)
        ceo_of[c["id"]] = ceo
        if has_second:
            role = "CTO" if random.random() < 0.70 else "COO"
            founders.append({
                "id": "f%03d" % (len(founders) + 1),
                "company_id": c["id"],
                "role": role,
                "display_name": "%s, %s" % (role, c["name"]),
                "archetype": make_archetype(role, team_shape, shared_history),
            })
    return founders, ceo_of


# ----------------------------------------------------------------------------
# 3.2 Latent quality and scores
# ----------------------------------------------------------------------------


def draw_latent_q(company):
    q = clip(random.gauss(0, 1), -2.5, 2.5)
    if company["decision"] == "passed":
        q += PASS_REASON_SHIFT[company["pass_reason"]]
    else:
        q += 0.5  # selection
    return q


def apply_three_heavy(raw, rater):
    if rater == THREE_HEAVY_RATER:
        for d in DIM_KEYS:
            if random.random() < THREE_HEAVY_P:
                raw[d] = 3
    return raw


def gen_stage2_raw(q, invested, rater):
    bias = RATER_BIAS[rater]
    raw = {}
    for d in DIM_KEYS:
        x = 3 + 1.2 * LOADINGS[d] * q + random.gauss(0, 0.45) + bias
        if d == "customer" and invested:
            x += 0.35  # the team over-weights customer obsession; it does not predict
        raw[d] = rnd(clip(x, 1, 5))
    # Selection bias: invested founders with ceiling < 4 are re-drawn once
    if invested and raw["ceiling"] < 4:
        x = 3 + 1.2 * LOADINGS["ceiling"] * q + random.gauss(0, 0.45) + bias
        raw["ceiling"] = rnd(clip(x, 1, 5))
    return apply_three_heavy(raw, rater)


def gen_stage1_raw(s2raw, rater):
    raw = {}
    for d in DIM_KEYS:
        raw[d] = rnd(clip(s2raw[d] + random.gauss(0, 0.7), 1, 5))
    return apply_three_heavy(raw, rater)


def gen_qpr_raw(s2raw, rater, drift):
    raw = {}
    for d in DIM_KEYS:
        raw[d] = rnd(clip(s2raw[d] + drift + random.gauss(0, 0.5), 1, 5))
    return apply_three_heavy(raw, rater)


def to_scores(raw, null_p):
    scores = {}
    for d in DIM_KEYS:
        if random.random() < null_p:
            scores[d] = {"score": None, "confidence": "L"}
        else:
            s = raw[d]
            if abs(s - 3) >= 1.5:
                conf = "H"
            else:
                conf = "M" if random.random() < 0.6 else "L"
            scores[d] = {"score": s, "confidence": conf}
    return scores


def top_dimension(raw):
    best = None
    for d in DIM_KEYS:
        if best is None or raw[d] > raw[best] or (raw[d] == raw[best] and LOADINGS[d] > LOADINGS[best]):
            best = d
    return best


# ----------------------------------------------------------------------------
# 3.3 Intangibles
# ----------------------------------------------------------------------------


def pick_words(q, top_dim):
    if q >= 0:
        match_bank, other_bank, favored = HIGH_WORDS, LOW_WORDS, FAVORED_HIGH.get(top_dim, [])
    else:
        match_bank, other_bank, favored = LOW_WORDS, HIGH_WORDS, FAVORED_LOW.get(top_dim, [])
    words = []
    while len(words) < 3:
        bank = match_bank if random.random() < 0.7 else other_bank
        pool = [w for w in bank if w not in words]
        if not words and bank is match_bank and favored and random.random() < 0.6:
            fav_pool = [w for w in favored if w not in words]
            if fav_pool:
                pool = fav_pool
        words.append(random.choice(pool))
    return words


def pick_lean_in(q):
    p_specific = clip(0.35 + 0.2 * q, 0.10, 0.85)
    if random.random() < p_specific:
        template, ranges = random.choice(SPECIFIC_LEAN_IN)
        fills = {k: random.randint(lo, hi) for k, (lo, hi) in ranges.items()}
        return template.format(**fills)
    return random.choice(ADJECTIVAL_LEAN_IN)


def themes_from_words(words):
    themes = []
    for w in words:
        t = WORD_THEME.get(w)
        if t and t not in themes:
            themes.append(t)
    if not themes:
        themes.append(random.choice(THEMES))
    return themes[:3]


def gen_intangibles(q, invested, top_dim):
    words = pick_words(q, top_dim)
    lean_in = pick_lean_in(q)
    intensity = clip(rnd(3 - 0.8 * q + random.gauss(0, 0.8)), 1, 5)
    worry = random.choice(WORRIES[intensity])
    conviction = clip(rnd(3 + 0.8 * q + 0.4 * (1 if invested else 0) + random.gauss(0, 0.6)), 1, 5)
    if conviction >= 4:
        wba = "yes"
    elif conviction == 3:
        wba = "unsure"
    else:
        wba = "no"
    return {
        "words": words,
        "lean_in": lean_in,
        "worry": worry,
        "conviction": conviction,
        "would_back_again": wba,
        "themes": themes_from_words(words),
    }


# ----------------------------------------------------------------------------
# 3.4 Outcomes
# ----------------------------------------------------------------------------


def gen_outcome(c, q):
    stage = c["stage_at_entry"]
    entry = date.fromisoformat(c["entry_date"])
    invested = c["decision"] == "invested"
    wm = WINDOW_MONTHS[stage]
    window_closed = add_months(entry, wm) <= AS_OF
    months_avail = months_between(entry, AS_OF)
    vintage = c["vintage_year"]

    logit = (
        -1.2
        + 1.7 * q
        + 0.35 * (1 if vintage in (2021, 2024, 2025) else 0)
        - 0.35 * (1 if vintage in (2022, 2023) else 0)
        + 0.3 * (1 if stage == "Series A" else 0)
    )
    grad = random.random() < sigmoid(logit)

    forced = False
    if invested:
        if STAGE_RANK.get(c["current_stage"], 0) > STAGE_RANK[stage]:
            forced = True
        if c["fund"] == "Legacy Fund":
            forced = True
    if forced:
        grad = True

    entry_pre = round_to(random.lognormvariate(math.log(PRE_MONEY_CENTER[stage]), 0.35), 100_000)

    next_round_date = None
    next_pre = None
    up_round = None
    grad_months = None
    step_up = None

    if grad:
        if forced:
            hi = min(wm, months_avail)
            gm = random.randint(7, hi) if hi >= 7 else max(1, hi)
        else:
            gm = random.randint(7, wm)
        d = add_months(entry, gm)
        if d > AS_OF:
            # the round would happen inside the window but has not happened yet
            grad = None
        else:
            grad = True
            grad_months = gm
            next_round_date = d
            step_up = 1.6 + 2.9 * (random.random() ** 1.8)
            next_pre = money(entry_pre * step_up)
            up_round = True
    else:
        if random.random() < 0.15:
            rm = random.randint(7, wm)
            d = add_months(entry, rm)
            if d <= AS_OF:
                grad = False
                next_round_date = d
                step_up = random.uniform(0.6, 1.2)
                next_pre = money(entry_pre * step_up)
                up_round = False
            else:
                grad = False if window_closed else None
        else:
            grad = False if window_closed else None

    # status
    if c["fund"] == "Legacy Fund":
        status = "realised"
    elif invested and grad is False and q < -0.5 and random.random() < 0.55:
        status = "written_off"
    elif (not invested) and grad is False and q < -1.0 and random.random() < 0.4:
        status = "shut_down"
    elif grad is True and random.random() < 0.05:
        status = "acquired"
    else:
        status = "active"
    if (not invested) and c["pass_stage"] == "Chemistry" and next_round_date is None and status == "active":
        if random.random() < 0.3:
            status = "unknown"

    # headcount
    hc_entry = random.randint(*HEADCOUNT_RANGE[stage])
    if grad is True:
        mult = 1.9
    elif status == "active":
        mult = 1.15
    else:
        mult = 0.5
    hc_now = max(1, int(round(hc_entry * mult * (1 + 0.2 * q) * random.uniform(0.8, 1.2))))
    years = max(0.5, months_avail / 12.0)
    growth = (hc_now / float(hc_entry)) ** (1.0 / years) - 1.0

    motive_led = bool(invested and grad is True and random.random() < 0.25)

    hypo = None
    if (not invested) and grad is True:
        hypo = round(next_pre / float(entry_pre), 2)

    outcome = {
        "company_id": c["id"],
        "as_of": iso(AS_OF),
        "entry_pre_money": entry_pre,
        "next_round_date": iso(next_round_date) if next_round_date else None,
        "next_round_pre_money": next_pre,
        "up_round": up_round,
        "graduated": grad,
        "graduation_months": grad_months,
        "window_months": wm,
        "window_closed": window_closed,
        "motive_led_followon": motive_led,
        "headcount_entry": hc_entry,
        "headcount_now": hc_now,
        "headcount_growth_yoy": round(growth, 3),
        "status": status,
        "hypothetical_moic": hypo,
    }
    info = {"step_up": step_up, "next_round_date": next_round_date}
    return outcome, info


def passed_current_stage(c, outcome):
    stage = c["stage_at_entry"]
    if outcome["status"] == "unknown":
        return None
    if outcome["graduated"] is True:
        return NEXT_STAGE[stage]
    if outcome["up_round"] is False and stage in ("Seed", "Series A"):
        return stage + " Extension"
    return stage


# ----------------------------------------------------------------------------
# 3.5 QPR entries
# ----------------------------------------------------------------------------

HEALTH_KEYS = ["execution", "talent", "self_awareness", "resilience", "relationship"]


def gen_health_check(q, outcome, prev_signal):
    grad = outcome["graduated"] is True
    wo = outcome["status"] == "written_off"
    g = clip(0.45 + 0.2 * q + (0.15 if grad else 0.0), 0.05, 0.9)
    r = clip(0.15 - 0.08 * q + (0.15 if wo else 0.0), 0.05, 0.9)
    if g + r > 0.95:
        scale = 0.95 / (g + r)
        g *= scale
        r *= scale
    hc = {}
    for k in HEALTH_KEYS:
        u = random.random()
        if u < g:
            hc[k] = "G"
        elif u < g + r:
            hc[k] = "R"
        else:
            hc[k] = "A"

    if grad and random.random() < 0.7:
        milestones = "Met"
    elif wo or (outcome["graduated"] is not True and random.random() < 0.4):
        milestones = "Missed"
    else:
        milestones = "Partial"
    hc["milestones"] = milestones

    signal = sum(1 for k in HEALTH_KEYS if hc[k] == "G") - sum(1 for k in HEALTH_KEYS if hc[k] == "R")
    if prev_signal is None:
        trend = "improving" if signal >= 3 else ("deteriorating" if signal <= -1 else "steady")
    else:
        trend = "improving" if signal > prev_signal else ("deteriorating" if signal < prev_signal else "steady")
    hc["what_changed"] = random.choice(WHAT_CHANGED[trend])
    return hc, signal


def qpr_would_back_again(q, outcome):
    if outcome["graduated"] is True and q > -0.5:
        return "yes"
    if outcome["status"] == "written_off":
        return "no"
    return "unsure"


# ----------------------------------------------------------------------------
# 3.6 MOIC panel
# ----------------------------------------------------------------------------


def gen_moic_panel(c, outcome, info):
    entry = date.fromisoformat(c["entry_date"])
    stage = c["stage_at_entry"]
    start_i = q_index(quarter_of(entry))  # first quarter end after entry
    last_i = q_index(LAST_QUARTER)
    if start_i > last_i:
        return []

    cost = round_to(random.uniform(*COST_RANGE[stage]), 10_000)
    step_i = None
    step_mult = None
    if info["next_round_date"] is not None:
        step_i = q_index(quarter_of(info["next_round_date"]))
        step_mult = round(info["step_up"], 2)

    wo_i = None
    if outcome["status"] == "written_off":
        lo = start_i + 4
        wo_i = random.randint(lo, last_i) if lo <= last_i else last_i

    real_i = None
    final_mult = None
    if c["fund"] == "Legacy Fund":
        lo = (step_i + 1) if step_i is not None else start_i + 1
        lo = min(lo, last_i)
        real_i = random.randint(lo, last_i)
        final_mult = round(random.uniform(1.1, 3.4), 2)

    late_stage = STAGE_RANK.get(c["current_stage"], 0) >= 3

    rows = []
    current = 1.0
    for i in range(start_i, last_i + 1):
        method = "Latest priced round"
        realized = 0
        if wo_i is not None and i >= wo_i:
            current = 0.0
            method = "Written off"
        elif real_i is not None and i >= real_i:
            current = final_mult
            realized = money(cost * final_mult)
        elif step_i is not None and i == step_i:
            current = step_mult
        else:
            if random.random() < 0.10:
                current = round(current * random.uniform(0.9, 1.1), 2)
                method = "Calibration"
            elif late_stage and step_i is not None and i - step_i >= 6:
                # later stage companies a long way from their last priced round
                # are carried on market multiples (value held, method label changes)
                method = "Market multiples"
        gross = round(current, 2)
        unrealized = 0 if realized else money(cost * gross)
        rows.append({
            "company_id": c["id"],
            "quarter": q_str(q_from_index(i)),
            "invested_cost": cost,
            "unrealized_value": unrealized,
            "realized_value": realized,
            "gross_moic": gross,
            "method": method,
        })
    return rows


# ----------------------------------------------------------------------------
# Assembly
# ----------------------------------------------------------------------------


def integrity_flag(cohort):
    if cohort == "forward":
        return "pending" if random.random() < 0.5 else "passed"
    return "pending" if random.random() < 0.05 else "passed"


def main():
    random.seed(SEED)

    with open(ROSTER_PATH, "r", encoding="utf-8") as fh:
        roster = json.load(fh)
    assert len(roster) == 51, "expected 51 roster companies, got %d" % len(roster)

    companies = build_companies(roster)
    founders, ceo_of = build_founders(companies)

    assessments = []
    outcomes = []
    moic_panel = []
    latent = {}

    def next_aid():
        return "a%04d" % (len(assessments) + 1)

    for c in companies:
        invested = c["decision"] == "invested"
        ceo = ceo_of[c["id"]]
        q = draw_latent_q(c)
        latent[c["id"]] = q
        entry = date.fromisoformat(c["entry_date"])
        cohort = "backfilled" if entry < FORWARD_CUTOFF else "forward"

        # raters
        rater2 = random.choice(RATERS)
        if random.random() < 0.7:
            rater1 = rater2
        else:
            rater1 = random.choice([r for r in RATERS if r != rater2])

        # scores: stage 2 first (the truth-ish view), stage 1 as a noisy copy
        s2raw = gen_stage2_raw(q, invested, rater2)
        s1raw = gen_stage1_raw(s2raw, rater1)
        top_dim = top_dimension(s2raw)

        has_stage2 = invested or c["pass_stage"] != "Chemistry"

        # Stage 1
        if invested or has_stage2:
            d1 = "advance"
        else:
            d1 = "pass"
        assessments.append({
            "id": next_aid(),
            "founder_id": ceo["id"],
            "stage": "stage1",
            "date": iso(entry),
            "rater": rater1,
            "cohort": cohort,
            "scores": to_scores(s1raw, 0.15),
            "intangibles": gen_intangibles(q, invested, top_dim),
            "integrity": integrity_flag(cohort),
            "decision_at_stage": d1,
            "health_check": None,
        })

        # Stage 2
        if has_stage2:
            d2_date = entry + timedelta(days=random.randint(14, 45))
            if d2_date > AS_OF:
                d2_date = AS_OF
            assessments.append({
                "id": next_aid(),
                "founder_id": ceo["id"],
                "stage": "stage2",
                "date": iso(d2_date),
                "rater": rater2,
                "cohort": cohort,
                "scores": to_scores(s2raw, 0.05),
                "intangibles": gen_intangibles(q, invested, top_dim),
                "integrity": integrity_flag(cohort),
                "decision_at_stage": "invest" if invested else "pass",
                "health_check": None,
            })

        # Outcome
        outcome, info = gen_outcome(c, q)
        outcomes.append(outcome)
        if not invested:
            c["current_stage"] = passed_current_stage(c, outcome)

        # QPRs and MOIC panel for invested
        if invested:
            if outcome["graduated"] is True:
                drift = 0.4
            elif outcome["status"] == "written_off":
                drift = -0.6
            else:
                drift = 0.0
            prev_signal = None
            k = 1
            while k <= 6:
                qd = add_months(entry, 6 * k)
                if qd > AS_OF:
                    break
                rater_q = rater2 if random.random() < 0.7 else random.choice(RATERS)
                hc, prev_signal = gen_health_check(q, outcome, prev_signal)
                intang = gen_intangibles(q, invested, top_dim)
                intang["would_back_again"] = qpr_would_back_again(q, outcome)
                assessments.append({
                    "id": next_aid(),
                    "founder_id": ceo["id"],
                    "stage": "qpr",
                    "date": iso(qd),
                    "rater": rater_q,
                    "cohort": cohort,
                    "scores": to_scores(gen_qpr_raw(s2raw, rater_q, drift * min(k, 3) / 3.0), 0.05),
                    "intangibles": intang,
                    "integrity": integrity_flag(cohort),
                    "decision_at_stage": "invest",
                    "health_check": hc,
                })
                k += 1
            moic_panel.extend(gen_moic_panel(c, outcome, info))

    meta = {
        "generated_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "seed": SEED,
        "synthetic": True,
        "as_of": iso(AS_OF),
        "notes": [
            "Every field in this dataset is synthetic and fabricated, including all invested and passed company names, funds, verticals and stages. Nothing here is derived from any real company, fund, or CRM record.",
            "Ceiling and Talent magnetism are built to predict; Customer obsession is built to be over-weighted in decisions but weakly predictive.",
            "Invested founders carry a selection shift (+0.5 latent quality) and a one-time re-draw when Ceiling scores below 4, so the portfolio has little variance on Ceiling by construction.",
            "Stage 1 scores are a noisier copy of Stage 2 with 15 percent Not assessed (null); Stage 2 has 5 percent Not assessed. A null score means Not assessed, never a middling 3.",
            "Six raters with fixed bias offsets (A +0.3, B 0, C -0.3, D +0.1, E -0.1, F +0.5). Rater E is three-heavy: 30 percent of their scores are forced to 3.",
            "Graduation is a logistic function of latent quality, vintage year and entry stage. Invested companies whose current stage is above their entry stage are forced graduates; Legacy Fund companies are forced graduates with status realised.",
            "Outcomes are censored (graduated null) when the graduation window has not closed and no round has happened yet. Passed companies that graduated carry a hypothetical MOIC equal to their step-up.",
            "MOIC panel uses sticky marks: 1.00x until the quarter of the next priced round, then held flat, with 10 percent per quarter calibration noise. Written off companies go to 0 at least four quarters after entry.",
        ],
    }

    data = {
        "meta": meta,
        "dimensions": DIMENSIONS,
        "companies": companies,
        "founders": founders,
        "assessments": assessments,
        "outcomes": outcomes,
        "moic_panel": moic_panel,
    }

    payload = json.dumps(data, indent=1, ensure_ascii=False)
    assert chr(0x2014) not in payload, "em dash found in generated output"

    with open(OUT_JS, "w", encoding="utf-8") as fh:
        fh.write("window.FSS_DATA = " + payload + ";\n")
    with open(OUT_JSON, "w", encoding="utf-8") as fh:
        fh.write(payload + "\n")

    print("wrote %s and %s" % (OUT_JS, OUT_JSON))
    print(
        "companies=%d founders=%d assessments=%d outcomes=%d moic_rows=%d"
        % (len(companies), len(founders), len(assessments), len(outcomes), len(moic_panel))
    )


if __name__ == "__main__":
    main()

window.FSS_DATA = {
 "meta": {
  "generated_at": "2026-09-23T19:53:05Z",
  "seed": 33,
  "synthetic": true,
  "as_of": "2026-09-22",
  "notes": [
   "Every field in this dataset is synthetic and fabricated, including all invested and passed company names, funds, verticals and stages. Nothing here is derived from any real company, fund, or CRM record.",
   "Ceiling and Talent magnetism are built to predict; Customer obsession is built to be over-weighted in decisions but weakly predictive.",
   "Invested founders carry a selection shift (+0.5 latent quality) and a one-time re-draw when Ceiling scores below 4, so the portfolio has little variance on Ceiling by construction.",
   "Stage 1 scores are a noisier copy of Stage 2 with 15 percent Not assessed (null); Stage 2 has 5 percent Not assessed. A null score means Not assessed, never a middling 3.",
   "Six raters with fixed bias offsets (A +0.3, B 0, C -0.3, D +0.1, E -0.1, F +0.5). Rater E is three-heavy: 30 percent of their scores are forced to 3.",
   "Graduation is a logistic function of latent quality, vintage year and entry stage. Invested companies whose current stage is above their entry stage are forced graduates; Legacy Fund companies are forced graduates with status realised.",
   "Outcomes are censored (graduated null) when the graduation window has not closed and no round has happened yet. Passed companies that graduated carry a hypothetical MOIC equal to their step-up.",
   "MOIC panel uses sticky marks: 1.00x until the quarter of the next priced round, then held flat, with 10 percent per quarter calibration noise. Written off companies go to 0 at least four quarters after entry."
  ]
 },
 "dimensions": [
  {
   "key": "execution",
   "label": "Execution framework"
  },
  {
   "key": "market",
   "label": "Market thinking"
  },
  {
   "key": "customer",
   "label": "Customer obsession"
  },
  {
   "key": "self_awareness",
   "label": "Self-awareness and learning velocity"
  },
  {
   "key": "resilience",
   "label": "Resilience and adaptability"
  },
  {
   "key": "talent",
   "label": "Talent magnetism and team building"
  },
  {
   "key": "decisiveness",
   "label": "Decisiveness under ambiguity"
  },
  {
   "key": "ceiling",
   "label": "Ceiling: insight, ambition and capital pull"
  }
 ],
 "companies": [
  {
   "id": "c001",
   "name": "Amberfield Capital",
   "anon_name": "Company 64",
   "decision": "invested",
   "fund": "Fund III",
   "vertical": "Capital markets",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2024-10-17",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c002",
   "name": "Brackenwell",
   "anon_name": "Company 40",
   "decision": "invested",
   "fund": "Fund III",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2026-01-05",
   "vintage_year": 2026,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c003",
   "name": "Cloudspire Ledger",
   "anon_name": "Company 118",
   "decision": "invested",
   "fund": "Fund III",
   "vertical": "Infrastructure",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2026-01-05",
   "vintage_year": 2026,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c004",
   "name": "Driftmark Pay",
   "anon_name": "Company 108",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-04-26",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c005",
   "name": "Emberglass",
   "anon_name": "Company 63",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Capital markets",
   "stage_at_entry": "Series A",
   "current_stage": "Series D",
   "entry_date": "2022-11-22",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c006",
   "name": "Fenwick Markets",
   "anon_name": "Company 78",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-03-12",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c007",
   "name": "Glenridge Treasury",
   "anon_name": "Company 53",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series C",
   "entry_date": "2021-07-22",
   "vintage_year": 2021,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c008",
   "name": "Hartstone Credit",
   "anon_name": "Company 52",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Alternatives",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2021-10-07",
   "vintage_year": 2021,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c009",
   "name": "Ironvale",
   "anon_name": "Company 48",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Lending",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2022-11-22",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c010",
   "name": "Juniper Cover",
   "anon_name": "Company 70",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Lending",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2022-11-22",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c011",
   "name": "Kelpwater Data",
   "anon_name": "Company 27",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Lending",
   "stage_at_entry": "Seed",
   "current_stage": "Seed Extension",
   "entry_date": "2023-09-19",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c012",
   "name": "Larkfield Pay",
   "anon_name": "Company 102",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Alternatives",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2024-07-12",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c013",
   "name": "Mistgate Wealth",
   "anon_name": "Company 77",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Wealth management",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2023-04-24",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c014",
   "name": "Nightshade Ledger",
   "anon_name": "Company 10",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Lending",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2022-03-22",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c015",
   "name": "Oakspire Finance",
   "anon_name": "Company 83",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Insurance",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-04-06",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c016",
   "name": "Pinehollow",
   "anon_name": "Company 54",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed Extension",
   "entry_date": "2022-01-25",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c017",
   "name": "Quicksilver Markets",
   "anon_name": "Company 35",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Wealth management",
   "stage_at_entry": "Series A",
   "current_stage": "Series A Extension",
   "entry_date": "2022-01-18",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c018",
   "name": "Ravensmoor Capital",
   "anon_name": "Company 85",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series A Extension",
   "entry_date": "2022-02-28",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c019",
   "name": "Silverbrook Lending",
   "anon_name": "Company 88",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2021-06-22",
   "vintage_year": 2021,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c020",
   "name": "Thornfield Insight",
   "anon_name": "Company 100",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Green finance & ESG",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2023-11-16",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c021",
   "name": "Upwell Compliance",
   "anon_name": "Company 05",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2024-06-13",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c022",
   "name": "Vaultstone",
   "anon_name": "Company 36",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Insurance",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-01-13",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c023",
   "name": "Wraithmoor Data",
   "anon_name": "Company 60",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed Extension",
   "entry_date": "2021-10-05",
   "vintage_year": 2021,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c024",
   "name": "Yellowbrick Treasury",
   "anon_name": "Company 50",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Lending",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2024-03-15",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c025",
   "name": "Ashfen Credit",
   "anon_name": "Company 101",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Wealth management",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2021-10-14",
   "vintage_year": 2021,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c026",
   "name": "Bellmoor",
   "anon_name": "Company 37",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Capital markets",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2022-11-22",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c027",
   "name": "Copperline Pay",
   "anon_name": "Company 91",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2024-05-23",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c028",
   "name": "Duskwater Risk",
   "anon_name": "Company 39",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2023-02-12",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c029",
   "name": "Everglen Markets",
   "anon_name": "Company 75",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Wealth management",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-03-24",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c030",
   "name": "Foxhollow Capital",
   "anon_name": "Company 28",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Alternatives",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2022-11-22",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c031",
   "name": "Greywick Ledger",
   "anon_name": "Company 13",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Lending",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2023-03-13",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c032",
   "name": "Hollowbrook",
   "anon_name": "Company 80",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Capital markets",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2024-01-24",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c033",
   "name": "Ivorypeak Data",
   "anon_name": "Company 17",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Alternatives",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2023-05-02",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c034",
   "name": "Jetstream Finance",
   "anon_name": "Company 68",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2024-11-29",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c035",
   "name": "Kingsmere Pay",
   "anon_name": "Company 47",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-05-03",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c036",
   "name": "Loamfield",
   "anon_name": "Company 44",
   "decision": "invested",
   "fund": "Fund I",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2024-04-23",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c037",
   "name": "Marlstone Treasury",
   "anon_name": "Company 95",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2025-08-03",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c038",
   "name": "Nettlefield Insurance",
   "anon_name": "Company 07",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-01-28",
   "vintage_year": 2026,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c039",
   "name": "Overbay Wealth",
   "anon_name": "Company 18",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-10-17",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c040",
   "name": "Pemberline",
   "anon_name": "Company 42",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-01-20",
   "vintage_year": 2026,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c041",
   "name": "Quarryfen",
   "anon_name": "Company 15",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2025-10-14",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c042",
   "name": "Rimewater Markets",
   "anon_name": "Company 93",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-10-01",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c043",
   "name": "Stormvane Capital",
   "anon_name": "Company 58",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2024-12-20",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c044",
   "name": "Timberline Data",
   "anon_name": "Company 66",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Business Services",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2025-03-21",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c045",
   "name": "Underglen Credit",
   "anon_name": "Company 29",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Wealth management",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2026-06-25",
   "vintage_year": 2026,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c046",
   "name": "Vesselwick",
   "anon_name": "Company 92",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Infrastructure",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-06-26",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c047",
   "name": "Waverstone Pay",
   "anon_name": "Company 105",
   "decision": "invested",
   "fund": "Fund II",
   "vertical": "Stealth",
   "stage_at_entry": "Series A",
   "current_stage": "Origination",
   "entry_date": "2025-07-31",
   "vintage_year": 2025,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c048",
   "name": "Xandermoor",
   "anon_name": "Company 20",
   "decision": "invested",
   "fund": "Legacy Fund",
   "vertical": "Alternatives",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2023-01-09",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c049",
   "name": "Yarrowfield Ledger",
   "anon_name": "Company 109",
   "decision": "invested",
   "fund": "Legacy Fund",
   "vertical": "Alternatives",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed Extension",
   "entry_date": "2023-05-11",
   "vintage_year": 2023,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c050",
   "name": "Zephyrline Finance",
   "anon_name": "Company 55",
   "decision": "invested",
   "fund": "Legacy Fund",
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2022-08-05",
   "vintage_year": 2022,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c051",
   "name": "Brightfen Data",
   "anon_name": "Company 73",
   "decision": "invested",
   "fund": "Legacy Fund",
   "vertical": "Insurance",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2024-02-26",
   "vintage_year": 2024,
   "pass_stage": null,
   "pass_reason": null,
   "pass_reason_note": null
  },
  {
   "id": "c052",
   "name": "Ledgerline",
   "anon_name": "Company 31",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-06-11",
   "vintage_year": 2026,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Team did not build conviction on the founder's ability to scale the organisation."
  },
  {
   "id": "c053",
   "name": "Kestrel Pay",
   "anon_name": "Company 61",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": null,
   "entry_date": "2024-04-16",
   "vintage_year": 2024,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Pre-empted at a price that did not fit the fund's ownership model."
  },
  {
   "id": "c054",
   "name": "Fathom Credit",
   "anon_name": "Company 16",
   "decision": "passed",
   "fund": null,
   "vertical": "Infrastructure",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-08-17",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Distribution depended on a partner channel we could not get comfortable with."
  },
  {
   "id": "c055",
   "name": "Orbital Treasury",
   "anon_name": "Company 34",
   "decision": "passed",
   "fund": null,
   "vertical": "Capital markets",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-08-09",
   "vintage_year": 2025,
   "pass_stage": "Active DD",
   "pass_reason": "timing",
   "pass_reason_note": "Too early for the fund's stage focus, asked to stay close."
  },
  {
   "id": "c056",
   "name": "Marrowline Capital",
   "anon_name": "Company 110",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": null,
   "entry_date": "2025-12-12",
   "vintage_year": 2025,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Valuation ask was well above where we could underwrite the round."
  },
  {
   "id": "c057",
   "name": "Quillbank",
   "anon_name": "Company 21",
   "decision": "passed",
   "fund": null,
   "vertical": "Lending",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2025-03-18",
   "vintage_year": 2025,
   "pass_stage": "Active DD",
   "pass_reason": "founder",
   "pass_reason_note": "Strong storyteller, but the team worried about follow through and delegation."
  },
  {
   "id": "c058",
   "name": "Tessery",
   "anon_name": "Company 103",
   "decision": "passed",
   "fund": null,
   "vertical": "Capital markets",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2024-06-08",
   "vintage_year": 2024,
   "pass_stage": "Active DD",
   "pass_reason": "timing",
   "pass_reason_note": "Fund was between closes and could not move on the founder's timeline."
  },
  {
   "id": "c059",
   "name": "Vantablock",
   "anon_name": "Company 72",
   "decision": "passed",
   "fund": null,
   "vertical": "Alternatives",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-07-18",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  },
  {
   "id": "c060",
   "name": "Northwick Lending",
   "anon_name": "Company 32",
   "decision": "passed",
   "fund": null,
   "vertical": "Stealth",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2021-07-01",
   "vintage_year": 2021,
   "pass_stage": "IC",
   "pass_reason": "business",
   "pass_reason_note": "Distribution depended on a partner channel we could not get comfortable with."
  },
  {
   "id": "c061",
   "name": "Halyard Markets",
   "anon_name": "Company 41",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": null,
   "entry_date": "2026-04-03",
   "vintage_year": 2026,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Strong storyteller, but the team worried about follow through and delegation."
  },
  {
   "id": "c062",
   "name": "Brightmoor Cover",
   "anon_name": "Company 56",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2021-11-27",
   "vintage_year": 2021,
   "pass_stage": "IC",
   "pass_reason": "other",
   "pass_reason_note": "Geography outside the fund's mandate."
  },
  {
   "id": "c063",
   "name": "Saltmarsh Analytics",
   "anon_name": "Company 11",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2024-04-04",
   "vintage_year": 2024,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Concerns about self-awareness and hiring judgement surfaced in references."
  },
  {
   "id": "c064",
   "name": "Fennel Wealth",
   "anon_name": "Company 97",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2023-08-04",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Team did not build conviction on the founder's ability to scale the organisation."
  },
  {
   "id": "c065",
   "name": "Ironquay",
   "anon_name": "Company 65",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2026-07-18",
   "vintage_year": 2026,
   "pass_stage": "Active DD",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  },
  {
   "id": "c066",
   "name": "Pellucid Data",
   "anon_name": "Company 38",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2025-09-05",
   "vintage_year": 2025,
   "pass_stage": "Active DD",
   "pass_reason": "founder",
   "pass_reason_note": "Concerns about self-awareness and hiring judgement surfaced in references."
  },
  {
   "id": "c067",
   "name": "Wrenfield",
   "anon_name": "Company 90",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2026-08-09",
   "vintage_year": 2026,
   "pass_stage": "Active DD",
   "pass_reason": "founder",
   "pass_reason_note": "Team did not build conviction on the founder's ability to scale the organisation."
  },
  {
   "id": "c068",
   "name": "Lumenfold",
   "anon_name": "Company 08",
   "decision": "passed",
   "fund": null,
   "vertical": "Capital markets",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-03-08",
   "vintage_year": 2026,
   "pass_stage": "Active DD",
   "pass_reason": "timing",
   "pass_reason_note": "Too early for the fund's stage focus, asked to stay close."
  },
  {
   "id": "c069",
   "name": "Tidewater Credit",
   "anon_name": "Company 30",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-11-19",
   "vintage_year": 2025,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  },
  {
   "id": "c070",
   "name": "Ashgrove Risk",
   "anon_name": "Company 106",
   "decision": "passed",
   "fund": null,
   "vertical": "Capital markets",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2022-07-13",
   "vintage_year": 2022,
   "pass_stage": "Term Sheet",
   "pass_reason": "lost",
   "pass_reason_note": "Term sheet was outbid on price and ownership."
  },
  {
   "id": "c071",
   "name": "Bramblewick",
   "anon_name": "Company 81",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2025-09-29",
   "vintage_year": 2025,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Team did not build conviction on the founder's ability to scale the organisation."
  },
  {
   "id": "c072",
   "name": "Corvid Insight",
   "anon_name": "Company 112",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2026-03-25",
   "vintage_year": 2026,
   "pass_stage": "IC",
   "pass_reason": "founder",
   "pass_reason_note": "Team did not build conviction on the founder's ability to scale the organisation."
  },
  {
   "id": "c073",
   "name": "Glasswing Pay",
   "anon_name": "Company 86",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2023-12-23",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Pre-empted at a price that did not fit the fund's ownership model."
  },
  {
   "id": "c074",
   "name": "Harrowgate Capital",
   "anon_name": "Company 59",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2022-09-10",
   "vintage_year": 2022,
   "pass_stage": "Active DD",
   "pass_reason": "founder",
   "pass_reason_note": "Strong storyteller, but the team worried about follow through and delegation."
  },
  {
   "id": "c075",
   "name": "Palisade Treasury",
   "anon_name": "Company 24",
   "decision": "passed",
   "fund": null,
   "vertical": "Alternatives",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2024-03-19",
   "vintage_year": 2024,
   "pass_stage": "Pre IC",
   "pass_reason": "other",
   "pass_reason_note": "Overlap with an existing portfolio company."
  },
  {
   "id": "c076",
   "name": "Quarterdeck Finance",
   "anon_name": "Company 114",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-12-06",
   "vintage_year": 2025,
   "pass_stage": "Chemistry",
   "pass_reason": "timing",
   "pass_reason_note": "Sector exposure already full in the current fund."
  },
  {
   "id": "c077",
   "name": "Rookery",
   "anon_name": "Company 62",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2022-02-18",
   "vintage_year": 2022,
   "pass_stage": "Active DD",
   "pass_reason": "price",
   "pass_reason_note": "Round priced at a level that left little room for our return case."
  },
  {
   "id": "c078",
   "name": "Thistledown Ledger",
   "anon_name": "Company 25",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Series A",
   "current_stage": null,
   "entry_date": "2022-12-08",
   "vintage_year": 2022,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Round priced at a level that left little room for our return case."
  },
  {
   "id": "c079",
   "name": "Umbra Compliance",
   "anon_name": "Company 57",
   "decision": "passed",
   "fund": null,
   "vertical": "Lending",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2021-12-23",
   "vintage_year": 2021,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Strong storyteller, but the team worried about follow through and delegation."
  },
  {
   "id": "c080",
   "name": "Verdant Yield",
   "anon_name": "Company 115",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2024-01-06",
   "vintage_year": 2024,
   "pass_stage": "Active DD",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  },
  {
   "id": "c081",
   "name": "Windrow Capital",
   "anon_name": "Company 23",
   "decision": "passed",
   "fund": null,
   "vertical": "Alternatives",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2021-11-09",
   "vintage_year": 2021,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Round priced at a level that left little room for our return case."
  },
  {
   "id": "c082",
   "name": "Yardarm Markets",
   "anon_name": "Company 94",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": "Series A",
   "entry_date": "2024-11-10",
   "vintage_year": 2024,
   "pass_stage": "Pre IC",
   "pass_reason": "price",
   "pass_reason_note": "Pre-empted at a price that did not fit the fund's ownership model."
  },
  {
   "id": "c083",
   "name": "Alderbrook",
   "anon_name": "Company 89",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2022-12-30",
   "vintage_year": 2022,
   "pass_stage": "Term Sheet",
   "pass_reason": "lost",
   "pass_reason_note": "Term sheet issued, founder went with a competing offer."
  },
  {
   "id": "c084",
   "name": "Cinderpath",
   "anon_name": "Company 76",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2023-01-07",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "other",
   "pass_reason_note": "Overlap with an existing portfolio company."
  },
  {
   "id": "c085",
   "name": "Driftline Cover",
   "anon_name": "Company 79",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2025-01-11",
   "vintage_year": 2025,
   "pass_stage": "IC",
   "pass_reason": "founder",
   "pass_reason_note": "Team did not build conviction on the founder's ability to scale the organisation."
  },
  {
   "id": "c086",
   "name": "Emberly",
   "anon_name": "Company 09",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-03-12",
   "vintage_year": 2026,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Market looked smaller than pitched once we mapped the actual buyer."
  },
  {
   "id": "c087",
   "name": "Foxglove Pay",
   "anon_name": "Company 84",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2024-11-14",
   "vintage_year": 2024,
   "pass_stage": "IC",
   "pass_reason": "price",
   "pass_reason_note": "Valuation ask was well above where we could underwrite the round."
  },
  {
   "id": "c088",
   "name": "Granary Credit",
   "anon_name": "Company 02",
   "decision": "passed",
   "fund": null,
   "vertical": "Infrastructure",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-04-24",
   "vintage_year": 2026,
   "pass_stage": "IC",
   "pass_reason": "founder",
   "pass_reason_note": "Strong storyteller, but the team worried about follow through and delegation."
  },
  {
   "id": "c089",
   "name": "Hollowell",
   "anon_name": "Company 99",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-07-28",
   "vintage_year": 2023,
   "pass_stage": "IC",
   "pass_reason": "business",
   "pass_reason_note": "Distribution depended on a partner channel we could not get comfortable with."
  },
  {
   "id": "c090",
   "name": "Inkwell Books",
   "anon_name": "Company 06",
   "decision": "passed",
   "fund": null,
   "vertical": "Capital markets",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2023-07-16",
   "vintage_year": 2023,
   "pass_stage": "Pre IC",
   "pass_reason": "founder",
   "pass_reason_note": "Concerns about self-awareness and hiring judgement surfaced in references."
  },
  {
   "id": "c091",
   "name": "Lanternfish",
   "anon_name": "Company 87",
   "decision": "passed",
   "fund": null,
   "vertical": "Infrastructure",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-09-21",
   "vintage_year": 2025,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Valuation ask was well above where we could underwrite the round."
  },
  {
   "id": "c092",
   "name": "Mossbank",
   "anon_name": "Company 119",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2023-07-26",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "timing",
   "pass_reason_note": "Too early for the fund's stage focus, asked to stay close."
  },
  {
   "id": "c093",
   "name": "Nettlebed Insurance",
   "anon_name": "Company 82",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2021-12-16",
   "vintage_year": 2021,
   "pass_stage": "Pre IC",
   "pass_reason": "other",
   "pass_reason_note": "Structure of the round did not work for the fund."
  },
  {
   "id": "c094",
   "name": "Pinecrest Wealth",
   "anon_name": "Company 96",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2024-03-22",
   "vintage_year": 2024,
   "pass_stage": "Chemistry",
   "pass_reason": "timing",
   "pass_reason_note": "Sector exposure already full in the current fund."
  },
  {
   "id": "c095",
   "name": "Quillon Data",
   "anon_name": "Company 111",
   "decision": "passed",
   "fund": null,
   "vertical": "Insurance",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2023-11-23",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Market looked smaller than pitched once we mapped the actual buyer."
  },
  {
   "id": "c096",
   "name": "Ridgeback Lending",
   "anon_name": "Company 117",
   "decision": "passed",
   "fund": null,
   "vertical": "Alternatives",
   "stage_at_entry": "Seed",
   "current_stage": null,
   "entry_date": "2024-03-07",
   "vintage_year": 2024,
   "pass_stage": "Chemistry",
   "pass_reason": "timing",
   "pass_reason_note": "Sector exposure already full in the current fund."
  },
  {
   "id": "c097",
   "name": "Slatewater",
   "anon_name": "Company 71",
   "decision": "passed",
   "fund": null,
   "vertical": "Business Services",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2023-11-04",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Concerns about self-awareness and hiring judgement surfaced in references."
  },
  {
   "id": "c098",
   "name": "Tallowtine",
   "anon_name": "Company 03",
   "decision": "passed",
   "fund": null,
   "vertical": "Green finance & ESG",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2021-06-29",
   "vintage_year": 2021,
   "pass_stage": "Chemistry",
   "pass_reason": "timing",
   "pass_reason_note": "Too early for the fund's stage focus, asked to stay close."
  },
  {
   "id": "c099",
   "name": "Umberline Pay",
   "anon_name": "Company 12",
   "decision": "passed",
   "fund": null,
   "vertical": "Stealth",
   "stage_at_entry": "Pre-Seed",
   "current_stage": null,
   "entry_date": "2026-08-16",
   "vintage_year": 2026,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Concerns about self-awareness and hiring judgement surfaced in references."
  },
  {
   "id": "c100",
   "name": "Wickerfield",
   "anon_name": "Company 98",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2021-08-20",
   "vintage_year": 2021,
   "pass_stage": "Pre IC",
   "pass_reason": "price",
   "pass_reason_note": "Pre-empted at a price that did not fit the fund's ownership model."
  },
  {
   "id": "c101",
   "name": "Ambergris Capital",
   "anon_name": "Company 33",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-08-25",
   "vintage_year": 2026,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Market looked smaller than pitched once we mapped the actual buyer."
  },
  {
   "id": "c102",
   "name": "Birchwater",
   "anon_name": "Company 04",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2022-10-10",
   "vintage_year": 2022,
   "pass_stage": "Active DD",
   "pass_reason": "price",
   "pass_reason_note": "Pre-empted at a price that did not fit the fund's ownership model."
  },
  {
   "id": "c103",
   "name": "Dunmore Ledger",
   "anon_name": "Company 107",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2023-04-04",
   "vintage_year": 2023,
   "pass_stage": "Pre IC",
   "pass_reason": "price",
   "pass_reason_note": "Valuation ask was well above where we could underwrite the round."
  },
  {
   "id": "c104",
   "name": "Elmstead Risk",
   "anon_name": "Company 01",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Series A",
   "current_stage": "Series B",
   "entry_date": "2022-06-11",
   "vintage_year": 2022,
   "pass_stage": "Pre IC",
   "pass_reason": "timing",
   "pass_reason_note": "Fund was between closes and could not move on the founder's timeline."
  },
  {
   "id": "c105",
   "name": "Fernbrook Wealth",
   "anon_name": "Company 116",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2021-10-06",
   "vintage_year": 2021,
   "pass_stage": "Pre IC",
   "pass_reason": "founder",
   "pass_reason_note": "Concerns about self-awareness and hiring judgement surfaced in references."
  },
  {
   "id": "c106",
   "name": "Oxbow Settlements",
   "anon_name": "Company 74",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2026-02-02",
   "vintage_year": 2026,
   "pass_stage": "Active DD",
   "pass_reason": "founder",
   "pass_reason_note": "Team did not build conviction on the founder's ability to scale the organisation."
  },
  {
   "id": "c107",
   "name": "Hearthline Pay",
   "anon_name": "Company 43",
   "decision": "passed",
   "fund": null,
   "vertical": "Alternatives",
   "stage_at_entry": "Series A",
   "current_stage": "Series A",
   "entry_date": "2024-10-03",
   "vintage_year": 2024,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  },
  {
   "id": "c108",
   "name": "Sextant Markets",
   "anon_name": "Company 45",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed Extension",
   "entry_date": "2022-11-13",
   "vintage_year": 2022,
   "pass_stage": "Chemistry",
   "pass_reason": "founder",
   "pass_reason_note": "Concerns about self-awareness and hiring judgement surfaced in references."
  },
  {
   "id": "c109",
   "name": "Gallowglass",
   "anon_name": "Company 67",
   "decision": "passed",
   "fund": null,
   "vertical": "Infrastructure",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2025-06-17",
   "vintage_year": 2025,
   "pass_stage": "Chemistry",
   "pass_reason": "other",
   "pass_reason_note": "Structure of the round did not work for the fund."
  },
  {
   "id": "c110",
   "name": "Peatland Capital",
   "anon_name": "Company 26",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2022-05-29",
   "vintage_year": 2022,
   "pass_stage": "Active DD",
   "pass_reason": "timing",
   "pass_reason_note": "Fund was between closes and could not move on the founder's timeline."
  },
  {
   "id": "c111",
   "name": "Larkspur Treasury",
   "anon_name": "Company 14",
   "decision": "passed",
   "fund": null,
   "vertical": "Green finance & ESG",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Seed",
   "entry_date": "2023-01-09",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  },
  {
   "id": "c112",
   "name": "Brindle Credit",
   "anon_name": "Company 22",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2023-09-29",
   "vintage_year": 2023,
   "pass_stage": "Active DD",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  },
  {
   "id": "c113",
   "name": "Coppice Insurance",
   "anon_name": "Company 113",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2026-08-14",
   "vintage_year": 2026,
   "pass_stage": "Active DD",
   "pass_reason": "price",
   "pass_reason_note": "Pre-empted at a price that did not fit the fund's ownership model."
  },
  {
   "id": "c114",
   "name": "Skerry Data",
   "anon_name": "Company 49",
   "decision": "passed",
   "fund": null,
   "vertical": "Wealth management",
   "stage_at_entry": "Series A",
   "current_stage": null,
   "entry_date": "2026-04-13",
   "vintage_year": 2026,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Pre-empted at a price that did not fit the fund's ownership model."
  },
  {
   "id": "c115",
   "name": "Tarnwater",
   "anon_name": "Company 19",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2024-12-31",
   "vintage_year": 2024,
   "pass_stage": "Active DD",
   "pass_reason": "price",
   "pass_reason_note": "Valuation ask was well above where we could underwrite the round."
  },
  {
   "id": "c116",
   "name": "Millrace Finance",
   "anon_name": "Company 69",
   "decision": "passed",
   "fund": null,
   "vertical": "Payments",
   "stage_at_entry": "Pre-Seed",
   "current_stage": "Pre-Seed",
   "entry_date": "2022-04-21",
   "vintage_year": 2022,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Distribution depended on a partner channel we could not get comfortable with."
  },
  {
   "id": "c117",
   "name": "Stonecrop Ledger",
   "anon_name": "Company 51",
   "decision": "passed",
   "fund": null,
   "vertical": "Infrastructure",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2023-05-12",
   "vintage_year": 2023,
   "pass_stage": "Chemistry",
   "pass_reason": "price",
   "pass_reason_note": "Valuation ask was well above where we could underwrite the round."
  },
  {
   "id": "c118",
   "name": "Vesperline",
   "anon_name": "Company 104",
   "decision": "passed",
   "fund": null,
   "vertical": "Lending",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2022-01-16",
   "vintage_year": 2022,
   "pass_stage": "Active DD",
   "pass_reason": "business",
   "pass_reason_note": "Distribution depended on a partner channel we could not get comfortable with."
  },
  {
   "id": "c119",
   "name": "Fallowfield Lending",
   "anon_name": "Company 46",
   "decision": "passed",
   "fund": null,
   "vertical": "Data & analytics (incl. AI)",
   "stage_at_entry": "Seed",
   "current_stage": "Seed",
   "entry_date": "2025-02-26",
   "vintage_year": 2025,
   "pass_stage": "Chemistry",
   "pass_reason": "business",
   "pass_reason_note": "Unit economics did not hold up in diligence."
  }
 ],
 "founders": [
  {
   "id": "f001",
   "company_id": "c001",
   "role": "CEO",
   "display_name": "CEO, Amberfield Capital",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f002",
   "company_id": "c002",
   "role": "CEO",
   "display_name": "CEO, Brackenwell",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f003",
   "company_id": "c002",
   "role": "CTO",
   "display_name": "CTO, Brackenwell",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f004",
   "company_id": "c003",
   "role": "CEO",
   "display_name": "CEO, Cloudspire Ledger",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f005",
   "company_id": "c004",
   "role": "CEO",
   "display_name": "CEO, Driftmark Pay",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f006",
   "company_id": "c005",
   "role": "CEO",
   "display_name": "CEO, Emberglass",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f007",
   "company_id": "c006",
   "role": "CEO",
   "display_name": "CEO, Fenwick Markets",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f008",
   "company_id": "c007",
   "role": "CEO",
   "display_name": "CEO, Glenridge Treasury",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f009",
   "company_id": "c008",
   "role": "CEO",
   "display_name": "CEO, Hartstone Credit",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f010",
   "company_id": "c009",
   "role": "CEO",
   "display_name": "CEO, Ironvale",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f011",
   "company_id": "c009",
   "role": "COO",
   "display_name": "COO, Ironvale",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f012",
   "company_id": "c010",
   "role": "CEO",
   "display_name": "CEO, Juniper Cover",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f013",
   "company_id": "c010",
   "role": "CTO",
   "display_name": "CTO, Juniper Cover",
   "archetype": {
    "background": "Other",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f014",
   "company_id": "c011",
   "role": "CEO",
   "display_name": "CEO, Kelpwater Data",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f015",
   "company_id": "c012",
   "role": "CEO",
   "display_name": "CEO, Larkfield Pay",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f016",
   "company_id": "c013",
   "role": "CEO",
   "display_name": "CEO, Mistgate Wealth",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f017",
   "company_id": "c013",
   "role": "CTO",
   "display_name": "CTO, Mistgate Wealth",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f018",
   "company_id": "c014",
   "role": "CEO",
   "display_name": "CEO, Nightshade Ledger",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f019",
   "company_id": "c015",
   "role": "CEO",
   "display_name": "CEO, Oakspire Finance",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f020",
   "company_id": "c016",
   "role": "CEO",
   "display_name": "CEO, Pinehollow",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Sold into it",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f021",
   "company_id": "c017",
   "role": "CEO",
   "display_name": "CEO, Quicksilver Markets",
   "archetype": {
    "background": "Other",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f022",
   "company_id": "c018",
   "role": "CEO",
   "display_name": "CEO, Ravensmoor Capital",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Sold into it",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f023",
   "company_id": "c019",
   "role": "CEO",
   "display_name": "CEO, Silverbrook Lending",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f024",
   "company_id": "c019",
   "role": "COO",
   "display_name": "COO, Silverbrook Lending",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f025",
   "company_id": "c020",
   "role": "CEO",
   "display_name": "CEO, Thornfield Insight",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f026",
   "company_id": "c021",
   "role": "CEO",
   "display_name": "CEO, Upwell Compliance",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f027",
   "company_id": "c021",
   "role": "CTO",
   "display_name": "CTO, Upwell Compliance",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f028",
   "company_id": "c022",
   "role": "CEO",
   "display_name": "CEO, Vaultstone",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f029",
   "company_id": "c023",
   "role": "CEO",
   "display_name": "CEO, Wraithmoor Data",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f030",
   "company_id": "c023",
   "role": "CTO",
   "display_name": "CTO, Wraithmoor Data",
   "archetype": {
    "background": "Other",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f031",
   "company_id": "c024",
   "role": "CEO",
   "display_name": "CEO, Yellowbrick Treasury",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f032",
   "company_id": "c025",
   "role": "CEO",
   "display_name": "CEO, Ashfen Credit",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f033",
   "company_id": "c026",
   "role": "CEO",
   "display_name": "CEO, Bellmoor",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f034",
   "company_id": "c027",
   "role": "CEO",
   "display_name": "CEO, Copperline Pay",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f035",
   "company_id": "c027",
   "role": "CTO",
   "display_name": "CTO, Copperline Pay",
   "archetype": {
    "background": "Other",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f036",
   "company_id": "c028",
   "role": "CEO",
   "display_name": "CEO, Duskwater Risk",
   "archetype": {
    "background": "Other",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f037",
   "company_id": "c029",
   "role": "CEO",
   "display_name": "CEO, Everglen Markets",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f038",
   "company_id": "c029",
   "role": "CTO",
   "display_name": "CTO, Everglen Markets",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f039",
   "company_id": "c030",
   "role": "CEO",
   "display_name": "CEO, Foxhollow Capital",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f040",
   "company_id": "c031",
   "role": "CEO",
   "display_name": "CEO, Greywick Ledger",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f041",
   "company_id": "c031",
   "role": "CTO",
   "display_name": "CTO, Greywick Ledger",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f042",
   "company_id": "c032",
   "role": "CEO",
   "display_name": "CEO, Hollowbrook",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Sold into it",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f043",
   "company_id": "c033",
   "role": "CEO",
   "display_name": "CEO, Ivorypeak Data",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f044",
   "company_id": "c034",
   "role": "CEO",
   "display_name": "CEO, Jetstream Finance",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f045",
   "company_id": "c034",
   "role": "COO",
   "display_name": "COO, Jetstream Finance",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f046",
   "company_id": "c035",
   "role": "CEO",
   "display_name": "CEO, Kingsmere Pay",
   "archetype": {
    "background": "Other",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f047",
   "company_id": "c036",
   "role": "CEO",
   "display_name": "CEO, Loamfield",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f048",
   "company_id": "c037",
   "role": "CEO",
   "display_name": "CEO, Marlstone Treasury",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f049",
   "company_id": "c038",
   "role": "CEO",
   "display_name": "CEO, Nettlefield Insurance",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f050",
   "company_id": "c039",
   "role": "CEO",
   "display_name": "CEO, Overbay Wealth",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f051",
   "company_id": "c040",
   "role": "CEO",
   "display_name": "CEO, Pemberline",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f052",
   "company_id": "c040",
   "role": "CTO",
   "display_name": "CTO, Pemberline",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f053",
   "company_id": "c041",
   "role": "CEO",
   "display_name": "CEO, Quarryfen",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f054",
   "company_id": "c042",
   "role": "CEO",
   "display_name": "CEO, Rimewater Markets",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f055",
   "company_id": "c043",
   "role": "CEO",
   "display_name": "CEO, Stormvane Capital",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f056",
   "company_id": "c043",
   "role": "COO",
   "display_name": "COO, Stormvane Capital",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f057",
   "company_id": "c044",
   "role": "CEO",
   "display_name": "CEO, Timberline Data",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f058",
   "company_id": "c045",
   "role": "CEO",
   "display_name": "CEO, Underglen Credit",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f059",
   "company_id": "c046",
   "role": "CEO",
   "display_name": "CEO, Vesselwick",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f060",
   "company_id": "c046",
   "role": "CTO",
   "display_name": "CTO, Vesselwick",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f061",
   "company_id": "c047",
   "role": "CEO",
   "display_name": "CEO, Waverstone Pay",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f062",
   "company_id": "c048",
   "role": "CEO",
   "display_name": "CEO, Xandermoor",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f063",
   "company_id": "c048",
   "role": "CTO",
   "display_name": "CTO, Xandermoor",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f064",
   "company_id": "c049",
   "role": "CEO",
   "display_name": "CEO, Yarrowfield Ledger",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f065",
   "company_id": "c050",
   "role": "CEO",
   "display_name": "CEO, Zephyrline Finance",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f066",
   "company_id": "c051",
   "role": "CEO",
   "display_name": "CEO, Brightfen Data",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f067",
   "company_id": "c052",
   "role": "CEO",
   "display_name": "CEO, Ledgerline",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f068",
   "company_id": "c052",
   "role": "CTO",
   "display_name": "CTO, Ledgerline",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f069",
   "company_id": "c053",
   "role": "CEO",
   "display_name": "CEO, Kestrel Pay",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f070",
   "company_id": "c054",
   "role": "CEO",
   "display_name": "CEO, Fathom Credit",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f071",
   "company_id": "c054",
   "role": "CTO",
   "display_name": "CTO, Fathom Credit",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f072",
   "company_id": "c055",
   "role": "CEO",
   "display_name": "CEO, Orbital Treasury",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f073",
   "company_id": "c055",
   "role": "COO",
   "display_name": "COO, Orbital Treasury",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f074",
   "company_id": "c056",
   "role": "CEO",
   "display_name": "CEO, Marrowline Capital",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f075",
   "company_id": "c057",
   "role": "CEO",
   "display_name": "CEO, Quillbank",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f076",
   "company_id": "c058",
   "role": "CEO",
   "display_name": "CEO, Tessery",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f077",
   "company_id": "c058",
   "role": "CTO",
   "display_name": "CTO, Tessery",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f078",
   "company_id": "c059",
   "role": "CEO",
   "display_name": "CEO, Vantablock",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f079",
   "company_id": "c060",
   "role": "CEO",
   "display_name": "CEO, Northwick Lending",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f080",
   "company_id": "c061",
   "role": "CEO",
   "display_name": "CEO, Halyard Markets",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f081",
   "company_id": "c062",
   "role": "CEO",
   "display_name": "CEO, Brightmoor Cover",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f082",
   "company_id": "c063",
   "role": "CEO",
   "display_name": "CEO, Saltmarsh Analytics",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f083",
   "company_id": "c063",
   "role": "CTO",
   "display_name": "CTO, Saltmarsh Analytics",
   "archetype": {
    "background": "Other",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f084",
   "company_id": "c064",
   "role": "CEO",
   "display_name": "CEO, Fennel Wealth",
   "archetype": {
    "background": "Other",
    "fmf_type": "Outsider with insight",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f085",
   "company_id": "c065",
   "role": "CEO",
   "display_name": "CEO, Ironquay",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f086",
   "company_id": "c065",
   "role": "CTO",
   "display_name": "CTO, Ironquay",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f087",
   "company_id": "c066",
   "role": "CEO",
   "display_name": "CEO, Pellucid Data",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f088",
   "company_id": "c066",
   "role": "COO",
   "display_name": "COO, Pellucid Data",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f089",
   "company_id": "c067",
   "role": "CEO",
   "display_name": "CEO, Wrenfield",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f090",
   "company_id": "c067",
   "role": "CTO",
   "display_name": "CTO, Wrenfield",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f091",
   "company_id": "c068",
   "role": "CEO",
   "display_name": "CEO, Lumenfold",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f092",
   "company_id": "c068",
   "role": "CTO",
   "display_name": "CTO, Lumenfold",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f093",
   "company_id": "c069",
   "role": "CEO",
   "display_name": "CEO, Tidewater Credit",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f094",
   "company_id": "c069",
   "role": "CTO",
   "display_name": "CTO, Tidewater Credit",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f095",
   "company_id": "c070",
   "role": "CEO",
   "display_name": "CEO, Ashgrove Risk",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f096",
   "company_id": "c071",
   "role": "CEO",
   "display_name": "CEO, Bramblewick",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f097",
   "company_id": "c072",
   "role": "CEO",
   "display_name": "CEO, Corvid Insight",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Sold into it",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f098",
   "company_id": "c073",
   "role": "CEO",
   "display_name": "CEO, Glasswing Pay",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Outsider with insight",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f099",
   "company_id": "c074",
   "role": "CEO",
   "display_name": "CEO, Harrowgate Capital",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f100",
   "company_id": "c075",
   "role": "CEO",
   "display_name": "CEO, Palisade Treasury",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f101",
   "company_id": "c076",
   "role": "CEO",
   "display_name": "CEO, Quarterdeck Finance",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f102",
   "company_id": "c076",
   "role": "COO",
   "display_name": "COO, Quarterdeck Finance",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f103",
   "company_id": "c077",
   "role": "CEO",
   "display_name": "CEO, Rookery",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f104",
   "company_id": "c078",
   "role": "CEO",
   "display_name": "CEO, Thistledown Ledger",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f105",
   "company_id": "c079",
   "role": "CEO",
   "display_name": "CEO, Umbra Compliance",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f106",
   "company_id": "c080",
   "role": "CEO",
   "display_name": "CEO, Verdant Yield",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Outsider with insight",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f107",
   "company_id": "c081",
   "role": "CEO",
   "display_name": "CEO, Windrow Capital",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f108",
   "company_id": "c081",
   "role": "CTO",
   "display_name": "CTO, Windrow Capital",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f109",
   "company_id": "c082",
   "role": "CEO",
   "display_name": "CEO, Yardarm Markets",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f110",
   "company_id": "c082",
   "role": "COO",
   "display_name": "COO, Yardarm Markets",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f111",
   "company_id": "c083",
   "role": "CEO",
   "display_name": "CEO, Alderbrook",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f112",
   "company_id": "c084",
   "role": "CEO",
   "display_name": "CEO, Cinderpath",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f113",
   "company_id": "c085",
   "role": "CEO",
   "display_name": "CEO, Driftline Cover",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f114",
   "company_id": "c086",
   "role": "CEO",
   "display_name": "CEO, Emberly",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Sold into it",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f115",
   "company_id": "c087",
   "role": "CEO",
   "display_name": "CEO, Foxglove Pay",
   "archetype": {
    "background": "Other",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f116",
   "company_id": "c088",
   "role": "CEO",
   "display_name": "CEO, Granary Credit",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f117",
   "company_id": "c089",
   "role": "CEO",
   "display_name": "CEO, Hollowell",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f118",
   "company_id": "c090",
   "role": "CEO",
   "display_name": "CEO, Inkwell Books",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f119",
   "company_id": "c091",
   "role": "CEO",
   "display_name": "CEO, Lanternfish",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f120",
   "company_id": "c092",
   "role": "CEO",
   "display_name": "CEO, Mossbank",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Sold into it",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f121",
   "company_id": "c093",
   "role": "CEO",
   "display_name": "CEO, Nettlebed Insurance",
   "archetype": {
    "background": "Other",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f122",
   "company_id": "c093",
   "role": "CTO",
   "display_name": "CTO, Nettlebed Insurance",
   "archetype": {
    "background": "Other",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f123",
   "company_id": "c094",
   "role": "CEO",
   "display_name": "CEO, Pinecrest Wealth",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f124",
   "company_id": "c095",
   "role": "CEO",
   "display_name": "CEO, Quillon Data",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f125",
   "company_id": "c095",
   "role": "CTO",
   "display_name": "CTO, Quillon Data",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f126",
   "company_id": "c096",
   "role": "CEO",
   "display_name": "CEO, Ridgeback Lending",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f127",
   "company_id": "c097",
   "role": "CEO",
   "display_name": "CEO, Slatewater",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f128",
   "company_id": "c097",
   "role": "CTO",
   "display_name": "CTO, Slatewater",
   "archetype": {
    "background": "Other",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f129",
   "company_id": "c098",
   "role": "CEO",
   "display_name": "CEO, Tallowtine",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f130",
   "company_id": "c098",
   "role": "CTO",
   "display_name": "CTO, Tallowtine",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f131",
   "company_id": "c099",
   "role": "CEO",
   "display_name": "CEO, Umberline Pay",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f132",
   "company_id": "c099",
   "role": "CTO",
   "display_name": "CTO, Umberline Pay",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f133",
   "company_id": "c100",
   "role": "CEO",
   "display_name": "CEO, Wickerfield",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f134",
   "company_id": "c101",
   "role": "CEO",
   "display_name": "CEO, Ambergris Capital",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f135",
   "company_id": "c102",
   "role": "CEO",
   "display_name": "CEO, Birchwater",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f136",
   "company_id": "c102",
   "role": "CTO",
   "display_name": "CTO, Birchwater",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f137",
   "company_id": "c103",
   "role": "CEO",
   "display_name": "CEO, Dunmore Ledger",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f138",
   "company_id": "c103",
   "role": "CTO",
   "display_name": "CTO, Dunmore Ledger",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f139",
   "company_id": "c104",
   "role": "CEO",
   "display_name": "CEO, Elmstead Risk",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f140",
   "company_id": "c105",
   "role": "CEO",
   "display_name": "CEO, Fernbrook Wealth",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f141",
   "company_id": "c105",
   "role": "COO",
   "display_name": "COO, Fernbrook Wealth",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f142",
   "company_id": "c106",
   "role": "CEO",
   "display_name": "CEO, Oxbow Settlements",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f143",
   "company_id": "c106",
   "role": "COO",
   "display_name": "COO, Oxbow Settlements",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f144",
   "company_id": "c107",
   "role": "CEO",
   "display_name": "CEO, Hearthline Pay",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f145",
   "company_id": "c107",
   "role": "COO",
   "display_name": "COO, Hearthline Pay",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f146",
   "company_id": "c108",
   "role": "CEO",
   "display_name": "CEO, Sextant Markets",
   "archetype": {
    "background": "Other",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f147",
   "company_id": "c109",
   "role": "CEO",
   "display_name": "CEO, Gallowglass",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f148",
   "company_id": "c109",
   "role": "CTO",
   "display_name": "CTO, Gallowglass",
   "archetype": {
    "background": "Other",
    "fmf_type": "Built it before",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f149",
   "company_id": "c110",
   "role": "CEO",
   "display_name": "CEO, Peatland Capital",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Outsider with insight",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "Small"
   }
  },
  {
   "id": "f150",
   "company_id": "c111",
   "role": "CEO",
   "display_name": "CEO, Larkspur Treasury",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f151",
   "company_id": "c111",
   "role": "CTO",
   "display_name": "CTO, Larkspur Treasury",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Outsider with insight",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f152",
   "company_id": "c112",
   "role": "CEO",
   "display_name": "CEO, Brindle Credit",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f153",
   "company_id": "c113",
   "role": "CEO",
   "display_name": "CEO, Coppice Insurance",
   "archetype": {
    "background": "Banking or finance",
    "fmf_type": "Outsider with insight",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f154",
   "company_id": "c114",
   "role": "CEO",
   "display_name": "CEO, Skerry Data",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f155",
   "company_id": "c115",
   "role": "CEO",
   "display_name": "CEO, Tarnwater",
   "archetype": {
    "background": "Domain insider",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f156",
   "company_id": "c115",
   "role": "CTO",
   "display_name": "CTO, Tarnwater",
   "archetype": {
    "background": "Repeat founder",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": true,
    "repeat_founder": true,
    "prior_exit": "Meaningful"
   }
  },
  {
   "id": "f157",
   "company_id": "c116",
   "role": "CEO",
   "display_name": "CEO, Millrace Finance",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Built it before",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f158",
   "company_id": "c116",
   "role": "CTO",
   "display_name": "CTO, Millrace Finance",
   "archetype": {
    "background": "Technical or academic",
    "fmf_type": "Lived the problem",
    "team_shape": "Three or more",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f159",
   "company_id": "c117",
   "role": "CEO",
   "display_name": "CEO, Stonecrop Ledger",
   "archetype": {
    "background": "Consulting",
    "fmf_type": "Lived the problem",
    "team_shape": "Solo",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f160",
   "company_id": "c118",
   "role": "CEO",
   "display_name": "CEO, Vesperline",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": true,
    "prior_exit": "None"
   }
  },
  {
   "id": "f161",
   "company_id": "c118",
   "role": "COO",
   "display_name": "COO, Vesperline",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": false,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  },
  {
   "id": "f162",
   "company_id": "c119",
   "role": "CEO",
   "display_name": "CEO, Fallowfield Lending",
   "archetype": {
    "background": "High-velocity operator",
    "fmf_type": "Sold into it",
    "team_shape": "Two complementary",
    "prior_shared_history": true,
    "repeat_founder": false,
    "prior_exit": "None"
   }
  }
 ],
 "assessments": [
  {
   "id": "a0001",
   "founder_id": "f001",
   "stage": "stage1",
   "date": "2024-10-17",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "hustle",
     "deliberate"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0002",
   "founder_id": "f001",
   "stage": "stage2",
   "date": "2024-11-05",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "polished",
     "salesy"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0003",
   "founder_id": "f001",
   "stage": "qpr",
   "date": "2025-04-17",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "sharp",
     "smooth"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "References raised the same conflict story independently, the founder was defensive about all of it.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0004",
   "founder_id": "f001",
   "stage": "qpr",
   "date": "2025-10-17",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "ambitious",
     "calm"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Runway is under six months, no lead investor, and the board has never met.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0005",
   "founder_id": "f001",
   "stage": "qpr",
   "date": "2026-04-17",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "pedigree",
     "confident"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 1,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0006",
   "founder_id": "f002",
   "stage": "stage1",
   "date": "2026-01-05",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "fast",
     "likeable",
     "hustle"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Speed",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0007",
   "founder_id": "f002",
   "stage": "stage2",
   "date": "2026-01-21",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "ambitious",
     "smooth"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0008",
   "founder_id": "f002",
   "stage": "qpr",
   "date": "2026-07-05",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "smooth",
     "articulate"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0009",
   "founder_id": "f004",
   "stage": "stage1",
   "date": "2026-01-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "credible",
     "salesy"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0010",
   "founder_id": "f004",
   "stage": "stage2",
   "date": "2026-01-28",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "network",
     "charming"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "References raised the same conflict story independently, the founder was defensive about all of it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0011",
   "founder_id": "f004",
   "stage": "qpr",
   "date": "2026-07-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "polished",
     "insight"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0012",
   "founder_id": "f005",
   "stage": "stage1",
   "date": "2023-04-26",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "insight",
     "network"
    ],
    "lean_in": "Converted 4 of 7 pilots into paid contracts within a quarter.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0013",
   "founder_id": "f005",
   "stage": "stage2",
   "date": "2023-05-21",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "honest",
     "insight",
     "deliberate"
    ],
    "lean_in": "Hired 3 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0014",
   "founder_id": "f005",
   "stage": "qpr",
   "date": "2023-10-26",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "articulate",
     "deliberate"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 6 months of founding.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0015",
   "founder_id": "f005",
   "stage": "qpr",
   "date": "2024-04-26",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "hungry",
     "pedigree"
    ],
    "lean_in": "Hired 7 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0016",
   "founder_id": "f005",
   "stage": "qpr",
   "date": "2024-10-26",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "pedigree",
     "hustle"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0017",
   "founder_id": "f005",
   "stage": "qpr",
   "date": "2025-04-26",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "articulate",
     "credible"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0018",
   "founder_id": "f005",
   "stage": "qpr",
   "date": "2025-10-26",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "clarity",
     "obsessed"
    ],
    "lean_in": "Shipped the first version in 10 weeks and signed 5 pilot customers off the back of it.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0019",
   "founder_id": "f005",
   "stage": "qpr",
   "date": "2026-04-26",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "calm",
     "charming"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0020",
   "founder_id": "f006",
   "stage": "stage1",
   "date": "2022-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "polished",
     "precise"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0021",
   "founder_id": "f006",
   "stage": "stage2",
   "date": "2023-01-01",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "fast",
     "magnetic",
     "salesy"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Speed",
     "Magnetism",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0022",
   "founder_id": "f006",
   "stage": "qpr",
   "date": "2023-05-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "calm",
     "honest"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Calm under pressure",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0023",
   "founder_id": "f006",
   "stage": "qpr",
   "date": "2023-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "sharp",
     "scrappy"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0024",
   "founder_id": "f006",
   "stage": "qpr",
   "date": "2024-05-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "magnetism",
     "hustle"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0025",
   "founder_id": "f006",
   "stage": "qpr",
   "date": "2024-11-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "optimistic",
     "precise"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0026",
   "founder_id": "f006",
   "stage": "qpr",
   "date": "2025-05-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "sharp",
     "calm"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0027",
   "founder_id": "f006",
   "stage": "qpr",
   "date": "2025-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "insight",
     "magnetism"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0028",
   "founder_id": "f007",
   "stage": "stage1",
   "date": "2025-03-12",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "optimistic",
     "grit"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0029",
   "founder_id": "f007",
   "stage": "stage2",
   "date": "2025-03-27",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "relentless",
     "sharp"
    ],
    "lean_in": "Ran 126 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0030",
   "founder_id": "f007",
   "stage": "qpr",
   "date": "2025-09-12",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "calm",
     "clarity"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0031",
   "founder_id": "f007",
   "stage": "qpr",
   "date": "2026-03-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "fast",
     "obsessed"
    ],
    "lean_in": "Converted 4 of 8 pilots into paid contracts within a quarter.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0032",
   "founder_id": "f007",
   "stage": "qpr",
   "date": "2026-09-12",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "obsessed",
     "polished"
    ],
    "lean_in": "Churn in the pilot cohort was under 6 percent after 7 months.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0033",
   "founder_id": "f008",
   "stage": "stage1",
   "date": "2021-07-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "articulate",
     "scrappy"
    ],
    "lean_in": "Converted 4 of 8 pilots into paid contracts within a quarter.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0034",
   "founder_id": "f008",
   "stage": "stage2",
   "date": "2021-09-04",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "salesy",
     "obsessed"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0035",
   "founder_id": "f008",
   "stage": "qpr",
   "date": "2022-01-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "scrappy",
     "pedigree"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0036",
   "founder_id": "f008",
   "stage": "qpr",
   "date": "2022-07-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "clarity",
     "unusual",
     "salesy"
    ],
    "lean_in": "Churn in the pilot cohort was under 6 percent after 9 months.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Clarity",
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0037",
   "founder_id": "f008",
   "stage": "qpr",
   "date": "2023-01-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "precise",
     "hustle"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0038",
   "founder_id": "f008",
   "stage": "qpr",
   "date": "2023-07-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "magnetism",
     "scrappy"
    ],
    "lean_in": "Shipped the first version in 5 weeks and signed 3 pilot customers off the back of it.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 2,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Magnetism",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0039",
   "founder_id": "f008",
   "stage": "qpr",
   "date": "2024-01-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "smooth",
     "optimistic"
    ],
    "lean_in": "Hired 8 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0040",
   "founder_id": "f008",
   "stage": "qpr",
   "date": "2024-07-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "network",
     "likeable"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0041",
   "founder_id": "f009",
   "stage": "stage1",
   "date": "2021-10-07",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "charming",
     "honest"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0042",
   "founder_id": "f009",
   "stage": "stage2",
   "date": "2021-10-31",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "credible",
     "precise"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0043",
   "founder_id": "f009",
   "stage": "qpr",
   "date": "2022-04-07",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "likeable",
     "salesy"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0044",
   "founder_id": "f009",
   "stage": "qpr",
   "date": "2022-10-07",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "relentless",
     "magnetic"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0045",
   "founder_id": "f009",
   "stage": "qpr",
   "date": "2023-04-07",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "likeable",
     "energetic"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0046",
   "founder_id": "f009",
   "stage": "qpr",
   "date": "2023-10-07",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "hungry",
     "deliberate"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0047",
   "founder_id": "f009",
   "stage": "qpr",
   "date": "2024-04-07",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "calm",
     "smooth"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Calm under pressure",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0048",
   "founder_id": "f009",
   "stage": "qpr",
   "date": "2024-10-07",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "insight",
     "optimistic"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0049",
   "founder_id": "f010",
   "stage": "stage1",
   "date": "2022-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "salesy",
     "likeable"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0050",
   "founder_id": "f010",
   "stage": "stage2",
   "date": "2022-12-26",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "clarity",
     "network",
     "salesy"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Clarity",
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0051",
   "founder_id": "f010",
   "stage": "qpr",
   "date": "2023-05-22",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "network",
     "scrappy"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0052",
   "founder_id": "f010",
   "stage": "qpr",
   "date": "2023-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "scrappy",
     "fast"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "R",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0053",
   "founder_id": "f010",
   "stage": "qpr",
   "date": "2024-05-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "unusual",
     "grit"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Non-obvious insight",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0054",
   "founder_id": "f010",
   "stage": "qpr",
   "date": "2024-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "hungry",
     "likeable"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Runway is under six months, no lead investor, and the board has never met.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0055",
   "founder_id": "f010",
   "stage": "qpr",
   "date": "2025-05-22",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "honest",
     "deliberate"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "R",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0056",
   "founder_id": "f010",
   "stage": "qpr",
   "date": "2025-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "charming",
     "articulate"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0057",
   "founder_id": "f012",
   "stage": "stage1",
   "date": "2022-11-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "sharp",
     "unusual"
    ],
    "lean_in": "Closed 6 design partners before the seed round, all of them paying.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0058",
   "founder_id": "f012",
   "stage": "stage2",
   "date": "2022-12-16",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "hustle",
     "unusual"
    ],
    "lean_in": "Cut onboarding time from 36 days to 3 with a single product change.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0059",
   "founder_id": "f012",
   "stage": "qpr",
   "date": "2023-05-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "fast",
     "magnetism",
     "smooth"
    ],
    "lean_in": "Churn in the pilot cohort was under 4 percent after 11 months.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Speed",
     "Magnetism",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0060",
   "founder_id": "f012",
   "stage": "qpr",
   "date": "2023-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "pedigree",
     "polished"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 3 months of founding.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0061",
   "founder_id": "f012",
   "stage": "qpr",
   "date": "2024-05-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "relentless",
     "magnetic"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0062",
   "founder_id": "f012",
   "stage": "qpr",
   "date": "2024-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "precise",
     "ambitious"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0063",
   "founder_id": "f012",
   "stage": "qpr",
   "date": "2025-05-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "sharp",
     "fast"
    ],
    "lean_in": "Cut onboarding time from 26 days to 6 with a single product change.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0064",
   "founder_id": "f012",
   "stage": "qpr",
   "date": "2025-11-22",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "polished",
     "likeable"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Chip on the shoulder"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0065",
   "founder_id": "f014",
   "stage": "stage1",
   "date": "2023-09-19",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "obsessed",
     "deliberate",
     "clarity"
    ],
    "lean_in": "Closed 3 design partners before the seed round, all of them paying.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0066",
   "founder_id": "f014",
   "stage": "stage2",
   "date": "2023-10-10",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "obsessed",
     "fast",
     "smooth"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Speed",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0067",
   "founder_id": "f014",
   "stage": "qpr",
   "date": "2024-03-19",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "smooth",
     "deliberate"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 5,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0068",
   "founder_id": "f014",
   "stage": "qpr",
   "date": "2024-09-19",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "clarity",
     "honest",
     "calm"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Clarity",
     "Intellectual honesty",
     "Calm under pressure"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0069",
   "founder_id": "f014",
   "stage": "qpr",
   "date": "2025-03-19",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "precise",
     "fast"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0070",
   "founder_id": "f014",
   "stage": "qpr",
   "date": "2025-09-19",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "precise",
     "calm"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 5 customers along.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0071",
   "founder_id": "f014",
   "stage": "qpr",
   "date": "2026-03-19",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "credible",
     "magnetic"
    ],
    "lean_in": "Churn in the pilot cohort was under 3 percent after 10 months.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0072",
   "founder_id": "f014",
   "stage": "qpr",
   "date": "2026-09-19",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "deliberate",
     "honest"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0073",
   "founder_id": "f015",
   "stage": "stage1",
   "date": "2024-07-12",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "insight",
     "precise"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0074",
   "founder_id": "f015",
   "stage": "stage2",
   "date": "2024-08-21",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "articulate",
     "magnetism"
    ],
    "lean_in": "Cut onboarding time from 25 days to 2 with a single product change.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Storytelling",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0075",
   "founder_id": "f015",
   "stage": "qpr",
   "date": "2025-01-12",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "magnetism",
     "ambitious"
    ],
    "lean_in": "Closed 3 design partners before the seed round, all of them paying.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0076",
   "founder_id": "f015",
   "stage": "qpr",
   "date": "2025-07-12",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "fast",
     "optimistic"
    ],
    "lean_in": "Converted 2 of 8 pilots into paid contracts within a quarter.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0077",
   "founder_id": "f015",
   "stage": "qpr",
   "date": "2026-01-12",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "hungry",
     "relentless"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0078",
   "founder_id": "f015",
   "stage": "qpr",
   "date": "2026-07-12",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "relentless",
     "network"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0079",
   "founder_id": "f016",
   "stage": "stage1",
   "date": "2023-04-24",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "obsessed",
     "clarity",
     "network"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Clarity",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0080",
   "founder_id": "f016",
   "stage": "stage2",
   "date": "2023-05-28",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "sharp",
     "magnetism"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0081",
   "founder_id": "f016",
   "stage": "qpr",
   "date": "2023-10-24",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "smooth",
     "pedigree"
    ],
    "lean_in": "Signed a 2 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0082",
   "founder_id": "f016",
   "stage": "qpr",
   "date": "2024-04-24",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "deliberate",
     "calm"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0083",
   "founder_id": "f016",
   "stage": "qpr",
   "date": "2024-10-24",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "deliberate",
     "precise"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0084",
   "founder_id": "f016",
   "stage": "qpr",
   "date": "2025-04-24",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "relentless",
     "fast"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0085",
   "founder_id": "f016",
   "stage": "qpr",
   "date": "2025-10-24",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "calm",
     "pedigree"
    ],
    "lean_in": "Converted 4 of 5 pilots into paid contracts within a quarter.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0086",
   "founder_id": "f016",
   "stage": "qpr",
   "date": "2026-04-24",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "pedigree",
     "smooth"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0087",
   "founder_id": "f018",
   "stage": "stage1",
   "date": "2022-03-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 1,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "ambitious",
     "hungry"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0088",
   "founder_id": "f018",
   "stage": "stage2",
   "date": "2022-04-19",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "likeable",
     "hungry"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Magnetism",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0089",
   "founder_id": "f018",
   "stage": "qpr",
   "date": "2022-09-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "hustle",
     "network"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0090",
   "founder_id": "f018",
   "stage": "qpr",
   "date": "2023-03-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "energetic",
     "network"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 9 months of founding.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0091",
   "founder_id": "f018",
   "stage": "qpr",
   "date": "2023-09-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "smooth",
     "network"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Storytelling",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0092",
   "founder_id": "f018",
   "stage": "qpr",
   "date": "2024-03-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "obsessed",
     "credible"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0093",
   "founder_id": "f018",
   "stage": "qpr",
   "date": "2024-09-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "salesy",
     "clarity"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Storytelling",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0094",
   "founder_id": "f018",
   "stage": "qpr",
   "date": "2025-03-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "charming",
     "pedigree"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0095",
   "founder_id": "f019",
   "stage": "stage1",
   "date": "2023-04-06",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "smooth",
     "salesy"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 7 months of founding.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0096",
   "founder_id": "f019",
   "stage": "stage2",
   "date": "2023-04-29",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "relentless",
     "sharp"
    ],
    "lean_in": "Won a competitive pilot against 4 incumbents with a two person team.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0097",
   "founder_id": "f019",
   "stage": "qpr",
   "date": "2023-10-06",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "precise",
     "grit"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0098",
   "founder_id": "f019",
   "stage": "qpr",
   "date": "2024-04-06",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "precise",
     "deliberate",
     "polished"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0099",
   "founder_id": "f019",
   "stage": "qpr",
   "date": "2024-10-06",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "precise",
     "clarity"
    ],
    "lean_in": "Shipped the first version in 6 weeks and signed 6 pilot customers off the back of it.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0100",
   "founder_id": "f019",
   "stage": "qpr",
   "date": "2025-04-06",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "likeable",
     "precise"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0101",
   "founder_id": "f019",
   "stage": "qpr",
   "date": "2025-10-06",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "precise",
     "sharp"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0102",
   "founder_id": "f019",
   "stage": "qpr",
   "date": "2026-04-06",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "sharp",
     "obsessed"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0103",
   "founder_id": "f020",
   "stage": "stage1",
   "date": "2022-01-25",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "charming",
     "relentless"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0104",
   "founder_id": "f020",
   "stage": "stage2",
   "date": "2022-02-14",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "magnetism",
     "polished"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0105",
   "founder_id": "f020",
   "stage": "qpr",
   "date": "2022-07-25",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "ambitious",
     "network"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0106",
   "founder_id": "f020",
   "stage": "qpr",
   "date": "2023-01-25",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "articulate",
     "confident"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0107",
   "founder_id": "f020",
   "stage": "qpr",
   "date": "2023-07-25",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "network",
     "smooth"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0108",
   "founder_id": "f020",
   "stage": "qpr",
   "date": "2024-01-25",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "calm",
     "charming"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0109",
   "founder_id": "f020",
   "stage": "qpr",
   "date": "2024-07-25",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "network",
     "hustle"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0110",
   "founder_id": "f020",
   "stage": "qpr",
   "date": "2025-01-25",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "sharp",
     "articulate"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0111",
   "founder_id": "f021",
   "stage": "stage1",
   "date": "2022-01-18",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "obsessed",
     "clarity",
     "magnetism"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Clarity",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0112",
   "founder_id": "f021",
   "stage": "stage2",
   "date": "2022-02-02",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "insight",
     "precise"
    ],
    "lean_in": "Converted 2 of 5 pilots into paid contracts within a quarter.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0113",
   "founder_id": "f021",
   "stage": "qpr",
   "date": "2022-07-18",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "energetic",
     "deliberate"
    ],
    "lean_in": "Closed 4 design partners before the seed round, all of them paying.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0114",
   "founder_id": "f021",
   "stage": "qpr",
   "date": "2023-01-18",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "sharp",
     "credible"
    ],
    "lean_in": "Converted 3 of 8 pilots into paid contracts within a quarter.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0115",
   "founder_id": "f021",
   "stage": "qpr",
   "date": "2023-07-18",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "honest",
     "credible"
    ],
    "lean_in": "Ran 52 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0116",
   "founder_id": "f021",
   "stage": "qpr",
   "date": "2024-01-18",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "charming",
     "deliberate"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0117",
   "founder_id": "f021",
   "stage": "qpr",
   "date": "2024-07-18",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "relentless",
     "clarity"
    ],
    "lean_in": "Closed 4 design partners before the seed round, all of them paying.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0118",
   "founder_id": "f021",
   "stage": "qpr",
   "date": "2025-01-18",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "sharp",
     "honest"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0119",
   "founder_id": "f022",
   "stage": "stage1",
   "date": "2022-02-28",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "precise",
     "deliberate",
     "scrappy"
    ],
    "lean_in": "Shipped the first version in 8 weeks and signed 6 pilot customers off the back of it.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0120",
   "founder_id": "f022",
   "stage": "stage2",
   "date": "2022-03-15",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "hustle",
     "unusual"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Hustle",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0121",
   "founder_id": "f022",
   "stage": "qpr",
   "date": "2022-08-28",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "insight",
     "network"
    ],
    "lean_in": "Converted 4 of 5 pilots into paid contracts within a quarter.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0122",
   "founder_id": "f022",
   "stage": "qpr",
   "date": "2023-02-28",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "ambitious",
     "confident"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0123",
   "founder_id": "f022",
   "stage": "qpr",
   "date": "2023-08-28",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "unusual",
     "network"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0124",
   "founder_id": "f022",
   "stage": "qpr",
   "date": "2024-02-28",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "fast",
     "pedigree"
    ],
    "lean_in": "Ran 144 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Speed",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0125",
   "founder_id": "f022",
   "stage": "qpr",
   "date": "2024-08-28",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "obsessed",
     "credible"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0126",
   "founder_id": "f022",
   "stage": "qpr",
   "date": "2025-02-28",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "unusual",
     "polished"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0127",
   "founder_id": "f023",
   "stage": "stage1",
   "date": "2021-06-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "calm",
     "magnetic"
    ],
    "lean_in": "Cut onboarding time from 42 days to 3 with a single product change.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Calm under pressure",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0128",
   "founder_id": "f023",
   "stage": "stage2",
   "date": "2021-08-05",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "precise",
     "grit"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0129",
   "founder_id": "f023",
   "stage": "qpr",
   "date": "2021-12-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "grit",
     "scrappy"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0130",
   "founder_id": "f023",
   "stage": "qpr",
   "date": "2022-06-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "magnetism",
     "fast"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0131",
   "founder_id": "f023",
   "stage": "qpr",
   "date": "2022-12-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "calm",
     "confident"
    ],
    "lean_in": "Converted 2 of 7 pilots into paid contracts within a quarter.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0132",
   "founder_id": "f023",
   "stage": "qpr",
   "date": "2023-06-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "magnetic",
     "scrappy"
    ],
    "lean_in": "Closed 5 design partners before the seed round, all of them paying.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Hustle"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0133",
   "founder_id": "f023",
   "stage": "qpr",
   "date": "2023-12-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "smooth",
     "relentless"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0134",
   "founder_id": "f023",
   "stage": "qpr",
   "date": "2024-06-22",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "fast",
     "unusual",
     "network"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Speed",
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0135",
   "founder_id": "f025",
   "stage": "stage1",
   "date": "2023-11-16",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "ambitious",
     "honest"
    ],
    "lean_in": "Shipped the first version in 10 weeks and signed 2 pilot customers off the back of it.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0136",
   "founder_id": "f025",
   "stage": "stage2",
   "date": "2023-11-30",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "hustle",
     "network"
    ],
    "lean_in": "Cut onboarding time from 37 days to 4 with a single product change.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0137",
   "founder_id": "f025",
   "stage": "qpr",
   "date": "2024-05-16",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "polished",
     "fast"
    ],
    "lean_in": "Churn in the pilot cohort was under 4 percent after 7 months.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0138",
   "founder_id": "f025",
   "stage": "qpr",
   "date": "2024-11-16",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "magnetism",
     "unusual"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0139",
   "founder_id": "f025",
   "stage": "qpr",
   "date": "2025-05-16",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "calm",
     "clarity"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "R",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0140",
   "founder_id": "f025",
   "stage": "qpr",
   "date": "2025-11-16",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "grit",
     "insight"
    ],
    "lean_in": "Converted 4 of 7 pilots into paid contracts within a quarter.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Grit",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0141",
   "founder_id": "f025",
   "stage": "qpr",
   "date": "2026-05-16",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "likeable",
     "hustle"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 2 customers along.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0142",
   "founder_id": "f026",
   "stage": "stage1",
   "date": "2024-06-13",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "scrappy",
     "clarity"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0143",
   "founder_id": "f026",
   "stage": "stage2",
   "date": "2024-07-09",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "obsessed",
     "confident"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0144",
   "founder_id": "f026",
   "stage": "qpr",
   "date": "2024-12-13",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "unusual",
     "grit"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0145",
   "founder_id": "f026",
   "stage": "qpr",
   "date": "2025-06-13",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "fast",
     "magnetism"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Speed",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0146",
   "founder_id": "f026",
   "stage": "qpr",
   "date": "2025-12-13",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "obsessed",
     "magnetism",
     "energetic"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0147",
   "founder_id": "f026",
   "stage": "qpr",
   "date": "2026-06-13",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "calm",
     "likeable"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Grit",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0148",
   "founder_id": "f028",
   "stage": "stage1",
   "date": "2023-01-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "salesy",
     "precise"
    ],
    "lean_in": "Ran 101 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0149",
   "founder_id": "f028",
   "stage": "stage2",
   "date": "2023-02-02",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "obsessed",
     "articulate"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0150",
   "founder_id": "f028",
   "stage": "qpr",
   "date": "2023-07-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "magnetic",
     "credible"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Magnetism"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0151",
   "founder_id": "f028",
   "stage": "qpr",
   "date": "2024-01-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "deliberate",
     "obsessed"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0152",
   "founder_id": "f028",
   "stage": "qpr",
   "date": "2024-07-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "calm",
     "honest",
     "network"
    ],
    "lean_in": "Grew from zero to 27 accounts in 9 months with a team of 6.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure",
     "Intellectual honesty",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0153",
   "founder_id": "f028",
   "stage": "qpr",
   "date": "2025-01-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "obsessed",
     "magnetism"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 7 months of founding.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0154",
   "founder_id": "f028",
   "stage": "qpr",
   "date": "2025-07-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "honest",
     "scrappy",
     "precise"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0155",
   "founder_id": "f028",
   "stage": "qpr",
   "date": "2026-01-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "optimistic",
     "salesy",
     "calm"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0156",
   "founder_id": "f029",
   "stage": "stage1",
   "date": "2021-10-05",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "charming",
     "likeable"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0157",
   "founder_id": "f029",
   "stage": "stage2",
   "date": "2021-11-09",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "hungry",
     "articulate"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "References raised the same conflict story independently, the founder was defensive about all of it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0158",
   "founder_id": "f029",
   "stage": "qpr",
   "date": "2022-04-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "articulate",
     "scrappy"
    ],
    "lean_in": "Signed a 3 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "R",
    "self_awareness": "A",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0159",
   "founder_id": "f029",
   "stage": "qpr",
   "date": "2022-10-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "sharp",
     "network"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0160",
   "founder_id": "f029",
   "stage": "qpr",
   "date": "2023-04-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "pedigree",
     "charming"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "no",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0161",
   "founder_id": "f029",
   "stage": "qpr",
   "date": "2023-10-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "polished",
     "hungry"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "R",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0162",
   "founder_id": "f029",
   "stage": "qpr",
   "date": "2024-04-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "clarity",
     "hungry"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Clarity",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "R",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0163",
   "founder_id": "f029",
   "stage": "qpr",
   "date": "2024-10-05",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "clarity",
     "scrappy"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 3,
    "would_back_again": "no",
    "themes": [
     "Clarity",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0164",
   "founder_id": "f031",
   "stage": "stage1",
   "date": "2024-03-15",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "fast",
     "salesy"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 4 months of founding.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Speed",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0165",
   "founder_id": "f031",
   "stage": "stage2",
   "date": "2024-04-28",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "grit",
     "honest"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 4 months of founding.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0166",
   "founder_id": "f031",
   "stage": "qpr",
   "date": "2024-09-15",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "credible",
     "clarity"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0167",
   "founder_id": "f031",
   "stage": "qpr",
   "date": "2025-03-15",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "likeable",
     "hustle"
    ],
    "lean_in": "Won a competitive pilot against 4 incumbents with a two person team.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0168",
   "founder_id": "f031",
   "stage": "qpr",
   "date": "2025-09-15",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "unusual",
     "polished"
    ],
    "lean_in": "Closed 5 design partners before the seed round, all of them paying.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0169",
   "founder_id": "f031",
   "stage": "qpr",
   "date": "2026-03-15",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "polished",
     "energetic"
    ],
    "lean_in": "Shipped the first version in 6 weeks and signed 3 pilot customers off the back of it.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0170",
   "founder_id": "f031",
   "stage": "qpr",
   "date": "2026-09-15",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "honest",
     "charming"
    ],
    "lean_in": "Grew from zero to 32 accounts in 12 months with a team of 3.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0171",
   "founder_id": "f032",
   "stage": "stage1",
   "date": "2021-10-14",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "sharp",
     "network"
    ],
    "lean_in": "Won a competitive pilot against 3 incumbents with a two person team.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0172",
   "founder_id": "f032",
   "stage": "stage2",
   "date": "2021-11-10",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "clarity",
     "precise"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0173",
   "founder_id": "f032",
   "stage": "qpr",
   "date": "2022-04-14",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "unusual",
     "hungry"
    ],
    "lean_in": "Closed 2 design partners before the seed round, all of them paying.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0174",
   "founder_id": "f032",
   "stage": "qpr",
   "date": "2022-10-14",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "clarity",
     "calm"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Clarity",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0175",
   "founder_id": "f032",
   "stage": "qpr",
   "date": "2023-04-14",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "articulate",
     "calm"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Storytelling",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0176",
   "founder_id": "f032",
   "stage": "qpr",
   "date": "2023-10-14",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "ambitious",
     "calm"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0177",
   "founder_id": "f032",
   "stage": "qpr",
   "date": "2024-04-14",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "relentless",
     "confident"
    ],
    "lean_in": "Cut onboarding time from 27 days to 7 with a single product change.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0178",
   "founder_id": "f032",
   "stage": "qpr",
   "date": "2024-10-14",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "fast",
     "confident"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0179",
   "founder_id": "f033",
   "stage": "stage1",
   "date": "2022-11-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "obsessed",
     "fast"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0180",
   "founder_id": "f033",
   "stage": "stage2",
   "date": "2022-12-14",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "confident",
     "honest"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0181",
   "founder_id": "f033",
   "stage": "qpr",
   "date": "2023-05-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "insight",
     "optimistic"
    ],
    "lean_in": "Converted 2 of 8 pilots into paid contracts within a quarter.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0182",
   "founder_id": "f033",
   "stage": "qpr",
   "date": "2023-11-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "unusual",
     "clarity"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Non-obvious insight",
     "Clarity"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0183",
   "founder_id": "f033",
   "stage": "qpr",
   "date": "2024-05-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "fast",
     "credible"
    ],
    "lean_in": "Converted 3 of 7 pilots into paid contracts within a quarter.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0184",
   "founder_id": "f033",
   "stage": "qpr",
   "date": "2024-11-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "unusual",
     "precise"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 2 customers along.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0185",
   "founder_id": "f033",
   "stage": "qpr",
   "date": "2025-05-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "grit",
     "obsessed"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0186",
   "founder_id": "f033",
   "stage": "qpr",
   "date": "2025-11-22",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "credible",
     "network"
    ],
    "lean_in": "Signed a 3 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0187",
   "founder_id": "f034",
   "stage": "stage1",
   "date": "2024-05-23",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "magnetism",
     "grit"
    ],
    "lean_in": "Won a competitive pilot against 2 incumbents with a two person team.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0188",
   "founder_id": "f034",
   "stage": "stage2",
   "date": "2024-06-06",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "magnetism",
     "ambitious"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0189",
   "founder_id": "f034",
   "stage": "qpr",
   "date": "2024-11-23",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "grit",
     "insight"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Grit",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0190",
   "founder_id": "f034",
   "stage": "qpr",
   "date": "2025-05-23",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "deliberate",
     "clarity"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Grit",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0191",
   "founder_id": "f034",
   "stage": "qpr",
   "date": "2025-11-23",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "magnetism",
     "honest"
    ],
    "lean_in": "Hired 3 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 5,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Magnetism",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0192",
   "founder_id": "f034",
   "stage": "qpr",
   "date": "2026-05-23",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "likeable",
     "energetic"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0193",
   "founder_id": "f036",
   "stage": "stage1",
   "date": "2023-02-12",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "sharp",
     "clarity"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0194",
   "founder_id": "f036",
   "stage": "stage2",
   "date": "2023-03-01",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "smooth",
     "insight"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0195",
   "founder_id": "f036",
   "stage": "qpr",
   "date": "2023-08-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "credible",
     "deliberate"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0196",
   "founder_id": "f036",
   "stage": "qpr",
   "date": "2024-02-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "insight",
     "precise"
    ],
    "lean_in": "Hired 5 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0197",
   "founder_id": "f036",
   "stage": "qpr",
   "date": "2024-08-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "relentless",
     "obsessed"
    ],
    "lean_in": "Churn in the pilot cohort was under 6 percent after 10 months.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0198",
   "founder_id": "f036",
   "stage": "qpr",
   "date": "2025-02-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "fast",
     "charming"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0199",
   "founder_id": "f036",
   "stage": "qpr",
   "date": "2025-08-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "clarity",
     "unusual"
    ],
    "lean_in": "Shipped the first version in 10 weeks and signed 6 pilot customers off the back of it.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Clarity",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0200",
   "founder_id": "f036",
   "stage": "qpr",
   "date": "2026-02-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "precise",
     "deliberate"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0201",
   "founder_id": "f037",
   "stage": "stage1",
   "date": "2025-03-24",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "network",
     "hungry"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0202",
   "founder_id": "f037",
   "stage": "stage2",
   "date": "2025-04-23",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "smooth",
     "articulate"
    ],
    "lean_in": "Converted 3 of 5 pilots into paid contracts within a quarter.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0203",
   "founder_id": "f037",
   "stage": "qpr",
   "date": "2025-09-24",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "honest",
     "relentless"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0204",
   "founder_id": "f037",
   "stage": "qpr",
   "date": "2026-03-24",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "precise",
     "scrappy"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0205",
   "founder_id": "f039",
   "stage": "stage1",
   "date": "2022-11-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "energetic",
     "network"
    ],
    "lean_in": "Grew from zero to 65 accounts in 14 months with a team of 5.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0206",
   "founder_id": "f039",
   "stage": "stage2",
   "date": "2022-12-25",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "sharp",
     "fast"
    ],
    "lean_in": "Signed a 4 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0207",
   "founder_id": "f039",
   "stage": "qpr",
   "date": "2023-05-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "sharp",
     "magnetism"
    ],
    "lean_in": "Cut onboarding time from 28 days to 6 with a single product change.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0208",
   "founder_id": "f039",
   "stage": "qpr",
   "date": "2023-11-22",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "obsessed",
     "network"
    ],
    "lean_in": "Churn in the pilot cohort was under 5 percent after 6 months.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0209",
   "founder_id": "f039",
   "stage": "qpr",
   "date": "2024-05-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "unusual",
     "magnetism"
    ],
    "lean_in": "Won a competitive pilot against 2 incumbents with a two person team.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0210",
   "founder_id": "f039",
   "stage": "qpr",
   "date": "2024-11-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "scrappy",
     "optimistic"
    ],
    "lean_in": "Ran 50 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0211",
   "founder_id": "f039",
   "stage": "qpr",
   "date": "2025-05-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "hungry",
     "calm"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0212",
   "founder_id": "f039",
   "stage": "qpr",
   "date": "2025-11-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "likeable",
     "polished"
    ],
    "lean_in": "Ran 110 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0213",
   "founder_id": "f040",
   "stage": "stage1",
   "date": "2023-03-13",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "polished",
     "ambitious"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0214",
   "founder_id": "f040",
   "stage": "stage2",
   "date": "2023-03-31",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "ambitious",
     "energetic"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0215",
   "founder_id": "f040",
   "stage": "qpr",
   "date": "2023-09-13",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "honest",
     "calm"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Intellectual honesty",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0216",
   "founder_id": "f040",
   "stage": "qpr",
   "date": "2024-03-13",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "confident",
     "pedigree"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Grit",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0217",
   "founder_id": "f040",
   "stage": "qpr",
   "date": "2024-09-13",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "calm",
     "polished"
    ],
    "lean_in": "Churn in the pilot cohort was under 5 percent after 10 months.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 1,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0218",
   "founder_id": "f040",
   "stage": "qpr",
   "date": "2025-03-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "optimistic",
     "hustle"
    ],
    "lean_in": "Grew from zero to 15 accounts in 13 months with a team of 4.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0219",
   "founder_id": "f040",
   "stage": "qpr",
   "date": "2025-09-13",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "likeable",
     "pedigree"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0220",
   "founder_id": "f040",
   "stage": "qpr",
   "date": "2026-03-13",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "precise",
     "confident"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0221",
   "founder_id": "f042",
   "stage": "stage1",
   "date": "2024-01-24",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "precise",
     "charming"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0222",
   "founder_id": "f042",
   "stage": "stage2",
   "date": "2024-02-23",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "grit",
     "scrappy"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Grit",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0223",
   "founder_id": "f042",
   "stage": "qpr",
   "date": "2024-07-24",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "optimistic",
     "ambitious"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 3,
    "would_back_again": "no",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "R",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0224",
   "founder_id": "f042",
   "stage": "qpr",
   "date": "2025-01-24",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "articulate",
     "unusual"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "References raised the same conflict story independently, the founder was defensive about all of it.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Hustle",
     "Storytelling",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "R",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0225",
   "founder_id": "f042",
   "stage": "qpr",
   "date": "2025-07-24",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 1,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "sharp",
     "scrappy"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "A",
    "resilience": "R",
    "relationship": "R",
    "milestones": "Missed",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0226",
   "founder_id": "f042",
   "stage": "qpr",
   "date": "2026-01-24",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "network",
     "charming"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0227",
   "founder_id": "f042",
   "stage": "qpr",
   "date": "2026-07-24",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "hungry",
     "network"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "no",
    "themes": [
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0228",
   "founder_id": "f043",
   "stage": "stage1",
   "date": "2023-05-02",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "grit",
     "scrappy"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Runway is under six months, no lead investor, and the board has never met.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Grit",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0229",
   "founder_id": "f043",
   "stage": "stage2",
   "date": "2023-05-28",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "obsessed",
     "hungry",
     "scrappy"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0230",
   "founder_id": "f043",
   "stage": "qpr",
   "date": "2023-11-02",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "smooth",
     "ambitious"
    ],
    "lean_in": "Hired 6 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0231",
   "founder_id": "f043",
   "stage": "qpr",
   "date": "2024-05-02",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "polished",
     "salesy"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 9 months of founding.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0232",
   "founder_id": "f043",
   "stage": "qpr",
   "date": "2024-11-02",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "calm",
     "scrappy",
     "articulate"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure",
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0233",
   "founder_id": "f043",
   "stage": "qpr",
   "date": "2025-05-02",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "magnetism",
     "hungry"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Magnetism",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0234",
   "founder_id": "f043",
   "stage": "qpr",
   "date": "2025-11-02",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "sharp",
     "articulate"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "References raised the same conflict story independently, the founder was defensive about all of it.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Grit",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0235",
   "founder_id": "f043",
   "stage": "qpr",
   "date": "2026-05-02",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "obsessed",
     "pedigree"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0236",
   "founder_id": "f044",
   "stage": "stage1",
   "date": "2024-11-29",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "obsessed",
     "energetic"
    ],
    "lean_in": "Signed a 2 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0237",
   "founder_id": "f044",
   "stage": "stage2",
   "date": "2025-01-09",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "precise",
     "grit"
    ],
    "lean_in": "Churn in the pilot cohort was under 6 percent after 6 months.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0238",
   "founder_id": "f044",
   "stage": "qpr",
   "date": "2025-05-29",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "ambitious",
     "optimistic"
    ],
    "lean_in": "Closed 3 design partners before the seed round, all of them paying.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0239",
   "founder_id": "f044",
   "stage": "qpr",
   "date": "2025-11-29",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "calm",
     "fast"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0240",
   "founder_id": "f044",
   "stage": "qpr",
   "date": "2026-05-29",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "pedigree",
     "unusual"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0241",
   "founder_id": "f046",
   "stage": "stage1",
   "date": "2023-05-03",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "credible",
     "polished"
    ],
    "lean_in": "Ran 45 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0242",
   "founder_id": "f046",
   "stage": "stage2",
   "date": "2023-05-21",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "relentless",
     "obsessed"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 4 customers along.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0243",
   "founder_id": "f046",
   "stage": "qpr",
   "date": "2023-11-03",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "credible",
     "unusual"
    ],
    "lean_in": "Closed 3 design partners before the seed round, all of them paying.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0244",
   "founder_id": "f046",
   "stage": "qpr",
   "date": "2024-05-03",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "ambitious",
     "hungry"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Progress slowed against the plan that gates the next raise and morale is visibly lower."
   }
  },
  {
   "id": "a0245",
   "founder_id": "f046",
   "stage": "qpr",
   "date": "2024-11-03",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "relentless",
     "hungry"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 5 customers along.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0246",
   "founder_id": "f046",
   "stage": "qpr",
   "date": "2025-05-03",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "hustle",
     "energetic"
    ],
    "lean_in": "Closed 5 design partners before the seed round, all of them paying.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0247",
   "founder_id": "f046",
   "stage": "qpr",
   "date": "2025-11-03",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "calm",
     "insight"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0248",
   "founder_id": "f046",
   "stage": "qpr",
   "date": "2026-05-03",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "articulate",
     "magnetic"
    ],
    "lean_in": "Grew from zero to 70 accounts in 6 months with a team of 7.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0249",
   "founder_id": "f047",
   "stage": "stage1",
   "date": "2024-04-23",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "sharp",
     "optimistic"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0250",
   "founder_id": "f047",
   "stage": "stage2",
   "date": "2024-05-18",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "optimistic",
     "clarity",
     "honest"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Clarity",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0251",
   "founder_id": "f047",
   "stage": "qpr",
   "date": "2024-10-23",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "sharp",
     "grit"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0252",
   "founder_id": "f047",
   "stage": "qpr",
   "date": "2025-04-23",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "charming",
     "fast"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0253",
   "founder_id": "f047",
   "stage": "qpr",
   "date": "2025-10-23",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "hustle",
     "magnetism"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Hustle",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0254",
   "founder_id": "f047",
   "stage": "qpr",
   "date": "2026-04-23",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "pedigree",
     "credible"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Two senior departures and the founder is back to running sales alone."
   }
  },
  {
   "id": "a0255",
   "founder_id": "f048",
   "stage": "stage1",
   "date": "2025-08-03",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "precise",
     "optimistic",
     "pedigree"
    ],
    "lean_in": "Cut onboarding time from 29 days to 5 with a single product change.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0256",
   "founder_id": "f048",
   "stage": "stage2",
   "date": "2025-09-05",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "network",
     "optimistic"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0257",
   "founder_id": "f048",
   "stage": "qpr",
   "date": "2026-02-03",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "ambitious",
     "articulate"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 5 customers along.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0258",
   "founder_id": "f048",
   "stage": "qpr",
   "date": "2026-08-03",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "articulate",
     "likeable"
    ],
    "lean_in": "Hired 8 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0259",
   "founder_id": "f049",
   "stage": "stage1",
   "date": "2026-01-28",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "polished",
     "hustle"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0260",
   "founder_id": "f049",
   "stage": "stage2",
   "date": "2026-03-14",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "network",
     "magnetism"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0261",
   "founder_id": "f049",
   "stage": "qpr",
   "date": "2026-07-28",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "energetic",
     "credible"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Chip on the shoulder"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0262",
   "founder_id": "f050",
   "stage": "stage1",
   "date": "2025-10-17",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "fast",
     "hustle"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Speed",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0263",
   "founder_id": "f050",
   "stage": "stage2",
   "date": "2025-11-04",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "clarity",
     "confident"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0264",
   "founder_id": "f050",
   "stage": "qpr",
   "date": "2026-04-17",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "clarity",
     "ambitious"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0265",
   "founder_id": "f051",
   "stage": "stage1",
   "date": "2026-01-20",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "clarity",
     "sharp"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0266",
   "founder_id": "f051",
   "stage": "stage2",
   "date": "2026-02-23",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "sharp",
     "obsessed"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0267",
   "founder_id": "f051",
   "stage": "qpr",
   "date": "2026-07-20",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "network",
     "obsessed"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 4 customers along.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Missed",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0268",
   "founder_id": "f053",
   "stage": "stage1",
   "date": "2025-10-14",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "precise",
     "unusual"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0269",
   "founder_id": "f053",
   "stage": "stage2",
   "date": "2025-10-30",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "calm",
     "grit"
    ],
    "lean_in": "Converted 4 of 7 pilots into paid contracts within a quarter.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Calm under pressure",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0270",
   "founder_id": "f053",
   "stage": "qpr",
   "date": "2026-04-14",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "charming",
     "obsessed"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "unsure",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Missed",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0271",
   "founder_id": "f054",
   "stage": "stage1",
   "date": "2025-10-01",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "optimistic",
     "hungry"
    ],
    "lean_in": "Ran 96 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0272",
   "founder_id": "f054",
   "stage": "stage2",
   "date": "2025-10-27",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "charming",
     "polished"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0273",
   "founder_id": "f054",
   "stage": "qpr",
   "date": "2026-04-01",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "hungry",
     "smooth"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "R",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0274",
   "founder_id": "f055",
   "stage": "stage1",
   "date": "2024-12-20",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "optimistic",
     "grit",
     "deliberate"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0275",
   "founder_id": "f055",
   "stage": "stage2",
   "date": "2025-01-31",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "credible",
     "deliberate"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0276",
   "founder_id": "f055",
   "stage": "qpr",
   "date": "2025-06-20",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "sharp",
     "deliberate"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0277",
   "founder_id": "f055",
   "stage": "qpr",
   "date": "2025-12-20",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "scrappy",
     "precise"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0278",
   "founder_id": "f055",
   "stage": "qpr",
   "date": "2026-06-20",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "unusual",
     "insight"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0279",
   "founder_id": "f057",
   "stage": "stage1",
   "date": "2025-03-21",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "smooth",
     "scrappy"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0280",
   "founder_id": "f057",
   "stage": "stage2",
   "date": "2025-04-09",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "confident",
     "hustle"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0281",
   "founder_id": "f057",
   "stage": "qpr",
   "date": "2025-09-21",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "relentless",
     "likeable"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0282",
   "founder_id": "f057",
   "stage": "qpr",
   "date": "2026-03-21",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "smooth",
     "hustle"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0283",
   "founder_id": "f057",
   "stage": "qpr",
   "date": "2026-09-21",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "clarity",
     "network"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Clarity",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "R",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0284",
   "founder_id": "f058",
   "stage": "stage1",
   "date": "2026-06-25",
   "rater": "Rater C",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "likeable",
     "grit"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0285",
   "founder_id": "f058",
   "stage": "stage2",
   "date": "2026-07-25",
   "rater": "Rater E",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "fast",
     "charming"
    ],
    "lean_in": "Cut onboarding time from 45 days to 5 with a single product change.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Speed"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0286",
   "founder_id": "f059",
   "stage": "stage1",
   "date": "2025-06-26",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "magnetism",
     "hungry"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0287",
   "founder_id": "f059",
   "stage": "stage2",
   "date": "2025-07-28",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "magnetic",
     "confident"
    ],
    "lean_in": "Hired 6 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0288",
   "founder_id": "f059",
   "stage": "qpr",
   "date": "2025-12-26",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "calm",
     "insight"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Calm under pressure",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "R",
    "self_awareness": "A",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0289",
   "founder_id": "f059",
   "stage": "qpr",
   "date": "2026-06-26",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "insight",
     "magnetic"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "A",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0290",
   "founder_id": "f061",
   "stage": "stage1",
   "date": "2025-07-31",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "precise",
     "articulate",
     "sharp"
    ],
    "lean_in": "Churn in the pilot cohort was under 5 percent after 11 months.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0291",
   "founder_id": "f061",
   "stage": "stage2",
   "date": "2025-08-29",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "articulate",
     "honest"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Storytelling",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0292",
   "founder_id": "f061",
   "stage": "qpr",
   "date": "2026-01-31",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "optimistic",
     "grit",
     "magnetic"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0293",
   "founder_id": "f061",
   "stage": "qpr",
   "date": "2026-07-31",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "clarity",
     "insight"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Clarity",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0294",
   "founder_id": "f062",
   "stage": "stage1",
   "date": "2023-01-09",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "scrappy",
     "pedigree"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0295",
   "founder_id": "f062",
   "stage": "stage2",
   "date": "2023-02-22",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "deliberate",
     "smooth"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Pricing is still being worked out and the sales cycle is longer than pitched.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0296",
   "founder_id": "f062",
   "stage": "qpr",
   "date": "2023-07-09",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "precise",
     "insight"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0297",
   "founder_id": "f062",
   "stage": "qpr",
   "date": "2024-01-09",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "scrappy",
     "pedigree"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "A",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0298",
   "founder_id": "f062",
   "stage": "qpr",
   "date": "2024-07-09",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "smooth",
     "energetic"
    ],
    "lean_in": "Ran 63 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0299",
   "founder_id": "f062",
   "stage": "qpr",
   "date": "2025-01-09",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "sharp",
     "energetic"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0300",
   "founder_id": "f062",
   "stage": "qpr",
   "date": "2025-07-09",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "articulate",
     "likeable"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 2,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "R",
    "relationship": "R",
    "milestones": "Partial",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0301",
   "founder_id": "f062",
   "stage": "qpr",
   "date": "2026-01-09",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "honest",
     "salesy",
     "hustle"
    ],
    "lean_in": "Hired 4 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Intellectual honesty",
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Founder remains hands on across functions, no change in team shape this period."
   }
  },
  {
   "id": "a0302",
   "founder_id": "f064",
   "stage": "stage1",
   "date": "2023-05-11",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "credible",
     "honest"
    ],
    "lean_in": "Hired 8 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0303",
   "founder_id": "f064",
   "stage": "stage2",
   "date": "2023-06-04",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "unusual",
     "magnetic"
    ],
    "lean_in": "Won a competitive pilot against 2 incumbents with a two person team.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0304",
   "founder_id": "f064",
   "stage": "qpr",
   "date": "2023-11-11",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "precise",
     "fast"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 3,
    "would_back_again": "yes",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0305",
   "founder_id": "f064",
   "stage": "qpr",
   "date": "2024-05-11",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "hustle",
     "fast"
    ],
    "lean_in": "Ran 83 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Hustle",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Little change since the last review, execution steady against plan."
   }
  },
  {
   "id": "a0306",
   "founder_id": "f064",
   "stage": "qpr",
   "date": "2024-11-11",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "precise",
     "network"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 6 months of founding.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0307",
   "founder_id": "f064",
   "stage": "qpr",
   "date": "2025-05-11",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "grit",
     "insight"
    ],
    "lean_in": "Signed a 4 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Grit",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "A",
    "self_awareness": "A",
    "resilience": "A",
    "relationship": "A",
    "milestones": "Partial",
    "what_changed": "Burn stayed high while the pipeline slipped a quarter."
   }
  },
  {
   "id": "a0308",
   "founder_id": "f064",
   "stage": "qpr",
   "date": "2025-11-11",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "honest",
     "relentless",
     "magnetism"
    ],
    "lean_in": "Churn in the pilot cohort was under 3 percent after 11 months.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "R",
    "relationship": "A",
    "milestones": "Met",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0309",
   "founder_id": "f064",
   "stage": "qpr",
   "date": "2026-05-11",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "likeable",
     "magnetic"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Hiring caught up with plan and the founder handed the sales motion to a new commercial lead."
   }
  },
  {
   "id": "a0310",
   "founder_id": "f065",
   "stage": "stage1",
   "date": "2022-08-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "honest",
     "calm"
    ],
    "lean_in": "Grew from zero to 24 accounts in 12 months with a team of 5.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0311",
   "founder_id": "f065",
   "stage": "stage2",
   "date": "2022-09-04",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "insight",
     "clarity"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0312",
   "founder_id": "f065",
   "stage": "qpr",
   "date": "2023-02-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "clarity",
     "articulate"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Clarity",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "R",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0313",
   "founder_id": "f065",
   "stage": "qpr",
   "date": "2023-08-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "scrappy",
     "magnetic"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Hustle",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Founder is delegating more and the team below is visibly stronger than last review."
   }
  },
  {
   "id": "a0314",
   "founder_id": "f065",
   "stage": "qpr",
   "date": "2024-02-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "magnetism",
     "relentless"
    ],
    "lean_in": "Closed 6 design partners before the seed round, all of them paying.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Board relationship stable, product shipping on the expected cadence."
   }
  },
  {
   "id": "a0315",
   "founder_id": "f065",
   "stage": "qpr",
   "date": "2024-08-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "grit",
     "deliberate"
    ],
    "lean_in": "Grew from zero to 58 accounts in 12 months with a team of 6.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Same team, same plan, progress broadly in line with the last update."
   }
  },
  {
   "id": "a0316",
   "founder_id": "f065",
   "stage": "qpr",
   "date": "2025-02-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "ambitious",
     "hungry"
    ],
    "lean_in": "Cut onboarding time from 27 days to 2 with a single product change.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "R",
    "self_awareness": "G",
    "resilience": "A",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Key customer churned and the replacement pipeline is thin."
   }
  },
  {
   "id": "a0317",
   "founder_id": "f065",
   "stage": "qpr",
   "date": "2025-08-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "honest",
     "unusual"
    ],
    "lean_in": "Cut onboarding time from 45 days to 7 with a single product change.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0318",
   "founder_id": "f066",
   "stage": "stage1",
   "date": "2024-02-26",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "relentless",
     "fast"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 3 customers along.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0319",
   "founder_id": "f066",
   "stage": "stage2",
   "date": "2024-03-11",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "honest",
     "scrappy"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": null
  },
  {
   "id": "a0320",
   "founder_id": "f066",
   "stage": "qpr",
   "date": "2024-08-26",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "salesy",
     "honest"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "R",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Landed the senior hire that was missing and the product roadmap tightened as a result."
   }
  },
  {
   "id": "a0321",
   "founder_id": "f066",
   "stage": "qpr",
   "date": "2025-02-26",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "optimistic",
     "fast"
    ],
    "lean_in": "Ran 150 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Partial",
    "what_changed": "Pipeline conversion improved and the board cadence is now steady."
   }
  },
  {
   "id": "a0322",
   "founder_id": "f066",
   "stage": "qpr",
   "date": "2025-08-26",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "clarity",
     "hungry"
    ],
    "lean_in": "Shipped the first version in 9 weeks and signed 4 pilot customers off the back of it.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Clarity",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "R",
    "milestones": "Met",
    "what_changed": "Founder has become defensive in board sessions and is slow to share bad news."
   }
  },
  {
   "id": "a0323",
   "founder_id": "f066",
   "stage": "qpr",
   "date": "2026-02-26",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "fast",
     "network",
     "deliberate"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Speed",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Momentum picked up across the board and the next raise is being prepared from a position of strength."
   }
  },
  {
   "id": "a0324",
   "founder_id": "f066",
   "stage": "qpr",
   "date": "2026-08-26",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "salesy",
     "obsessed"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Grit",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "invest",
   "health_check": {
    "execution": "G",
    "talent": "G",
    "self_awareness": "G",
    "resilience": "G",
    "relationship": "G",
    "milestones": "Met",
    "what_changed": "Revenue tracked to plan, hiring slightly behind, nothing structural moved."
   }
  },
  {
   "id": "a0325",
   "founder_id": "f067",
   "stage": "stage1",
   "date": "2026-06-11",
   "rater": "Rater C",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "hungry",
     "pedigree"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Hustle",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0326",
   "founder_id": "f069",
   "stage": "stage1",
   "date": "2024-04-16",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "magnetism",
     "honest"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Magnetism",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0327",
   "founder_id": "f070",
   "stage": "stage1",
   "date": "2023-08-17",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "pedigree",
     "fast"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Hustle",
     "Domain depth",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0328",
   "founder_id": "f072",
   "stage": "stage1",
   "date": "2025-08-09",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "honest",
     "magnetic"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Intellectual honesty",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0329",
   "founder_id": "f072",
   "stage": "stage2",
   "date": "2025-09-16",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "fast",
     "credible",
     "sharp"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0330",
   "founder_id": "f074",
   "stage": "stage1",
   "date": "2025-12-12",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "clarity",
     "honest",
     "network"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Clarity",
     "Intellectual honesty",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0331",
   "founder_id": "f075",
   "stage": "stage1",
   "date": "2025-03-18",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "polished",
     "scrappy"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0332",
   "founder_id": "f075",
   "stage": "stage2",
   "date": "2025-04-25",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "fast",
     "polished"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0333",
   "founder_id": "f076",
   "stage": "stage1",
   "date": "2024-06-08",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "fast",
     "precise"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0334",
   "founder_id": "f076",
   "stage": "stage2",
   "date": "2024-07-03",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "credible",
     "precise"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0335",
   "founder_id": "f078",
   "stage": "stage1",
   "date": "2023-07-18",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "credible",
     "magnetism"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0336",
   "founder_id": "f079",
   "stage": "stage1",
   "date": "2021-07-01",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "scrappy",
     "energetic"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0337",
   "founder_id": "f079",
   "stage": "stage2",
   "date": "2021-08-10",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "calm",
     "likeable",
     "energetic"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0338",
   "founder_id": "f080",
   "stage": "stage1",
   "date": "2026-04-03",
   "rater": "Rater B",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "precise",
     "ambitious"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "References raised the same conflict story independently, the founder was defensive about all of it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0339",
   "founder_id": "f081",
   "stage": "stage1",
   "date": "2021-11-27",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "grit",
     "ambitious"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0340",
   "founder_id": "f081",
   "stage": "stage2",
   "date": "2021-12-22",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "precise",
     "optimistic"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0341",
   "founder_id": "f082",
   "stage": "stage1",
   "date": "2024-04-04",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "network",
     "articulate"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Runway is under six months, no lead investor, and the board has never met.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0342",
   "founder_id": "f084",
   "stage": "stage1",
   "date": "2023-08-04",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "charming",
     "smooth"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0343",
   "founder_id": "f085",
   "stage": "stage1",
   "date": "2026-07-18",
   "rater": "Rater E",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "magnetism",
     "articulate"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Domain depth",
     "Magnetism",
     "Storytelling"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0344",
   "founder_id": "f085",
   "stage": "stage2",
   "date": "2026-08-11",
   "rater": "Rater E",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetism",
     "optimistic",
     "polished"
    ],
    "lean_in": "Churn in the pilot cohort was under 3 percent after 9 months.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0345",
   "founder_id": "f087",
   "stage": "stage1",
   "date": "2025-09-05",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "likeable",
     "magnetic"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0346",
   "founder_id": "f087",
   "stage": "stage2",
   "date": "2025-10-15",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "pedigree",
     "hungry"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0347",
   "founder_id": "f089",
   "stage": "stage1",
   "date": "2026-08-09",
   "rater": "Rater F",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 1,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "fast",
     "articulate"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Non-obvious insight",
     "Speed",
     "Storytelling"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0348",
   "founder_id": "f089",
   "stage": "stage2",
   "date": "2026-09-21",
   "rater": "Rater D",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "insight",
     "energetic"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Runway is under six months, no lead investor, and the board has never met.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0349",
   "founder_id": "f091",
   "stage": "stage1",
   "date": "2026-03-08",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "unusual",
     "confident"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0350",
   "founder_id": "f091",
   "stage": "stage2",
   "date": "2026-04-20",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "magnetic",
     "fast"
    ],
    "lean_in": "Ran 60 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0351",
   "founder_id": "f093",
   "stage": "stage1",
   "date": "2025-11-19",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "optimistic",
     "credible"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0352",
   "founder_id": "f095",
   "stage": "stage1",
   "date": "2022-07-13",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "relentless",
     "precise"
    ],
    "lean_in": "Ran 52 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0353",
   "founder_id": "f095",
   "stage": "stage2",
   "date": "2022-08-18",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "calm",
     "hustle",
     "ambitious"
    ],
    "lean_in": "Hired 3 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Calm under pressure",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0354",
   "founder_id": "f096",
   "stage": "stage1",
   "date": "2025-09-29",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "fast",
     "optimistic"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0355",
   "founder_id": "f097",
   "stage": "stage1",
   "date": "2026-03-25",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "polished",
     "scrappy"
    ],
    "lean_in": "Hired 7 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0356",
   "founder_id": "f097",
   "stage": "stage2",
   "date": "2026-04-21",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "fast",
     "network"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Speed",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0357",
   "founder_id": "f098",
   "stage": "stage1",
   "date": "2023-12-23",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "relentless",
     "hustle"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0358",
   "founder_id": "f099",
   "stage": "stage1",
   "date": "2022-09-10",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "grit",
     "polished"
    ],
    "lean_in": "Signed a 4 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0359",
   "founder_id": "f099",
   "stage": "stage2",
   "date": "2022-10-11",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "smooth",
     "sharp"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0360",
   "founder_id": "f100",
   "stage": "stage1",
   "date": "2024-03-19",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 1,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "charming",
     "fast"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Non-obvious insight",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0361",
   "founder_id": "f100",
   "stage": "stage2",
   "date": "2024-04-18",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "charming",
     "ambitious",
     "polished"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0362",
   "founder_id": "f101",
   "stage": "stage1",
   "date": "2025-12-06",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "clarity",
     "insight"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Clarity",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0363",
   "founder_id": "f103",
   "stage": "stage1",
   "date": "2022-02-18",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "honest",
     "credible",
     "relentless"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0364",
   "founder_id": "f103",
   "stage": "stage2",
   "date": "2022-03-05",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "hungry",
     "relentless"
    ],
    "lean_in": "Signed a 3 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0365",
   "founder_id": "f104",
   "stage": "stage1",
   "date": "2022-12-08",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "articulate",
     "energetic",
     "network"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0366",
   "founder_id": "f105",
   "stage": "stage1",
   "date": "2021-12-23",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "smooth",
     "insight"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0367",
   "founder_id": "f106",
   "stage": "stage1",
   "date": "2024-01-06",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "calm",
     "magnetism"
    ],
    "lean_in": "Every reference call came back with the same unprompted story about follow through.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0368",
   "founder_id": "f106",
   "stage": "stage2",
   "date": "2024-01-26",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "unusual",
     "sharp"
    ],
    "lean_in": "Ran 57 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0369",
   "founder_id": "f107",
   "stage": "stage1",
   "date": "2021-11-09",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "hungry",
     "fast"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Visible conflict between the cofounders on strategy, surfaced twice in diligence.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0370",
   "founder_id": "f109",
   "stage": "stage1",
   "date": "2024-11-10",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "magnetism",
     "ambitious"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0371",
   "founder_id": "f109",
   "stage": "stage2",
   "date": "2024-12-15",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "likeable",
     "magnetism"
    ],
    "lean_in": "Ran 60 customer interviews before writing code and can quote most of them from memory.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0372",
   "founder_id": "f111",
   "stage": "stage1",
   "date": "2022-12-30",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "obsessed",
     "clarity"
    ],
    "lean_in": "Won a competitive pilot against 3 incumbents with a two person team.",
    "worry": "Hard to find a real concern, the main risk is market timing rather than the founder.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0373",
   "founder_id": "f111",
   "stage": "stage2",
   "date": "2023-02-03",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "charming",
     "network"
    ],
    "lean_in": "Closed 4 design partners before the seed round, all of them paying.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0374",
   "founder_id": "f112",
   "stage": "stage1",
   "date": "2023-01-07",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "fast",
     "magnetic",
     "honest"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Speed",
     "Magnetism",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0375",
   "founder_id": "f113",
   "stage": "stage1",
   "date": "2025-01-11",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "charming",
     "honest"
    ],
    "lean_in": "Churn in the pilot cohort was under 2 percent after 10 months.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0376",
   "founder_id": "f113",
   "stage": "stage2",
   "date": "2025-02-07",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "confident",
     "clarity"
    ],
    "lean_in": "Cut onboarding time from 26 days to 2 with a single product change.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0377",
   "founder_id": "f114",
   "stage": "stage1",
   "date": "2026-03-12",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "optimistic",
     "unusual",
     "articulate"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0378",
   "founder_id": "f115",
   "stage": "stage1",
   "date": "2024-11-14",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "sharp",
     "hungry"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0379",
   "founder_id": "f115",
   "stage": "stage2",
   "date": "2024-12-03",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "polished",
     "optimistic"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0380",
   "founder_id": "f116",
   "stage": "stage1",
   "date": "2026-04-24",
   "rater": "Rater B",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "obsessed",
     "unusual",
     "clarity"
    ],
    "lean_in": "Grew from zero to 39 accounts in 13 months with a team of 6.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Clarity"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0381",
   "founder_id": "f116",
   "stage": "stage2",
   "date": "2026-05-17",
   "rater": "Rater B",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "network",
     "credible"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0382",
   "founder_id": "f117",
   "stage": "stage1",
   "date": "2023-07-28",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "confident",
     "scrappy"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0383",
   "founder_id": "f117",
   "stage": "stage2",
   "date": "2023-08-28",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "smooth",
     "charming"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0384",
   "founder_id": "f118",
   "stage": "stage1",
   "date": "2023-07-16",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "charming",
     "likeable"
    ],
    "lean_in": "Poached the head of risk from a scaled lender within 8 months of founding.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0385",
   "founder_id": "f118",
   "stage": "stage2",
   "date": "2023-08-01",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "grit",
     "hungry",
     "calm"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Grit",
     "Hustle",
     "Calm under pressure"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0386",
   "founder_id": "f119",
   "stage": "stage1",
   "date": "2025-09-21",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "polished",
     "articulate"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0387",
   "founder_id": "f120",
   "stage": "stage1",
   "date": "2023-07-26",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "relentless",
     "charming",
     "hustle"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0388",
   "founder_id": "f121",
   "stage": "stage1",
   "date": "2021-12-16",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "precise",
     "charming",
     "grit"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0389",
   "founder_id": "f121",
   "stage": "stage2",
   "date": "2022-01-18",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "magnetic",
     "grit"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Magnetism",
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0390",
   "founder_id": "f123",
   "stage": "stage1",
   "date": "2024-03-22",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "precise",
     "sharp"
    ],
    "lean_in": "Cut onboarding time from 21 days to 2 with a single product change.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0391",
   "founder_id": "f124",
   "stage": "stage1",
   "date": "2023-11-23",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "hungry",
     "sharp"
    ],
    "lean_in": "Great presence in the room, the whole team leaned forward.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0392",
   "founder_id": "f126",
   "stage": "stage1",
   "date": "2024-03-07",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 2,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "sharp",
     "ambitious"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Non-obvious insight"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0393",
   "founder_id": "f127",
   "stage": "stage1",
   "date": "2023-11-04",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "magnetic",
     "pedigree"
    ],
    "lean_in": "Strong pedigree and an obvious passion for the space.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Magnetism",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0394",
   "founder_id": "f129",
   "stage": "stage1",
   "date": "2021-06-29",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 5,
     "confidence": "H"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "sharp",
     "obsessed"
    ],
    "lean_in": "High energy, fast talker, seemed to have an answer for everything.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0395",
   "founder_id": "f131",
   "stage": "stage1",
   "date": "2026-08-16",
   "rater": "Rater B",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 2,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "salesy",
     "scrappy"
    ],
    "lean_in": "Ambitious vision and genuine enthusiasm for the customer.",
    "worry": "Cofounder conflict has already cost the company its first two senior hires, and the founder does not see it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0396",
   "founder_id": "f133",
   "stage": "stage1",
   "date": "2021-08-20",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "obsessed",
     "salesy"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0397",
   "founder_id": "f133",
   "stage": "stage2",
   "date": "2021-09-07",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "magnetic",
     "clarity",
     "precise"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Gets defensive when challenged on unit economics, though recovers quickly.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Magnetism",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0398",
   "founder_id": "f134",
   "stage": "stage1",
   "date": "2026-08-25",
   "rater": "Rater D",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 1,
     "confidence": "H"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "confident",
     "salesy"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0399",
   "founder_id": "f135",
   "stage": "stage1",
   "date": "2022-10-10",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "pedigree",
     "network",
     "clarity"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Has not yet shown the ability to hire senior people, the two attempts so far did not stick.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Domain depth",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0400",
   "founder_id": "f135",
   "stage": "stage2",
   "date": "2022-11-03",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": null,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 2,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "charming",
     "scrappy"
    ],
    "lean_in": "Impressive network and a real sense of momentum around the company.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Non-obvious insight",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0401",
   "founder_id": "f137",
   "stage": "stage1",
   "date": "2023-04-04",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "hustle",
     "optimistic",
     "deliberate"
    ],
    "lean_in": "A former manager on the reference list said this founder hired above their own level twice.",
    "worry": "Slightly under-sells the story, could be more ambitious in how the vision is framed.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0402",
   "founder_id": "f137",
   "stage": "stage2",
   "date": "2023-05-12",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "network",
     "fast",
     "relentless"
    ],
    "lean_in": "Signed a 2 year contract with a tier one bank before hiring a single salesperson.",
    "worry": "Board management is untested, though early investors speak highly of the cadence.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Speed"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0403",
   "founder_id": "f139",
   "stage": "stage1",
   "date": "2022-06-11",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 5,
     "confidence": "H"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "unusual",
     "credible",
     "clarity"
    ],
    "lean_in": "Churn in the pilot cohort was under 6 percent after 9 months.",
    "worry": "Talks quickly and can lose the room at times, a style point more than a substance issue.",
    "conviction": 5,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Clarity"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0404",
   "founder_id": "f139",
   "stage": "stage2",
   "date": "2022-06-25",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 5,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 5,
     "confidence": "H"
    },
    "ceiling": {
     "score": 5,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "fast",
     "sharp"
    ],
    "lean_in": "Shipped the first version in 11 weeks and signed 3 pilot customers off the back of it.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Speed"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0405",
   "founder_id": "f140",
   "stage": "stage1",
   "date": "2021-10-06",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "confident",
     "likeable",
     "hungry"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Solo founder with no technical cofounder and no clear plan to fix it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0406",
   "founder_id": "f140",
   "stage": "stage2",
   "date": "2021-11-20",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "L"
    },
    "market": {
     "score": 2,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "credible",
     "scrappy",
     "likeable"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0407",
   "founder_id": "f142",
   "stage": "stage1",
   "date": "2026-02-02",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "charming",
     "scrappy"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "References raised the same conflict story independently, the founder was defensive about all of it.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0408",
   "founder_id": "f142",
   "stage": "stage2",
   "date": "2026-03-03",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "pedigree",
     "hungry"
    ],
    "lean_in": "Smart, ambitious and clearly hungry to build something big.",
    "worry": "Runway is under twelve months and the pipeline is not yet converting.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0409",
   "founder_id": "f144",
   "stage": "stage1",
   "date": "2024-10-03",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "energetic",
     "pedigree",
     "hustle"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0410",
   "founder_id": "f146",
   "stage": "stage1",
   "date": "2022-11-13",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 2,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "obsessed",
     "calm"
    ],
    "lean_in": "Won a competitive pilot against 4 incumbents with a two person team.",
    "worry": "Relies heavily on one large customer for most of the revenue today.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Calm under pressure"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0411",
   "founder_id": "f147",
   "stage": "stage1",
   "date": "2025-06-17",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": 4,
     "confidence": "M"
    },
    "self_awareness": {
     "score": null,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "clarity",
     "credible",
     "pedigree"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Solo founder, no cofounder, thin team, and burn that outpaces any plausible revenue plan.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Clarity",
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0412",
   "founder_id": "f149",
   "stage": "stage1",
   "date": "2022-05-29",
   "rater": "Rater E",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "salesy",
     "ambitious",
     "honest"
    ],
    "lean_in": "Hired 6 engineers from a prior team, all of whom took pay cuts to join.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling",
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0413",
   "founder_id": "f149",
   "stage": "stage2",
   "date": "2022-07-03",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "ambitious",
     "grit",
     "charming"
    ],
    "lean_in": "Shipped the first version in 9 weeks and signed 2 pilot customers off the back of it.",
    "worry": "Would like to see a stronger finance hire before the next raise, a small gap.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Grit"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0414",
   "founder_id": "f150",
   "stage": "stage1",
   "date": "2023-01-09",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "relentless",
     "scrappy"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0415",
   "founder_id": "f152",
   "stage": "stage1",
   "date": "2023-09-29",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "optimistic",
     "likeable",
     "polished"
    ],
    "lean_in": "Likeable and articulate, would be easy to work with.",
    "worry": "Never shipped a product to production and churn in the beta has been near total.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0416",
   "founder_id": "f152",
   "stage": "stage2",
   "date": "2023-11-03",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 2,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "calm",
     "hustle",
     "confident"
    ],
    "lean_in": "Polished storyteller who made the market feel inevitable.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Calm under pressure",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0417",
   "founder_id": "f153",
   "stage": "stage1",
   "date": "2026-08-14",
   "rater": "Rater C",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "L"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 4,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "unusual",
     "hungry"
    ],
    "lean_in": "Closed 3 design partners before the seed round, all of them paying.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0418",
   "founder_id": "f153",
   "stage": "stage2",
   "date": "2026-08-31",
   "rater": "Rater F",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "M"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "L"
    },
    "talent": {
     "score": 4,
     "confidence": "L"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "smooth",
     "deliberate",
     "articulate"
    ],
    "lean_in": "Closed 2 design partners before the seed round, all of them paying.",
    "worry": "Team is thin below the founder, every key function still runs through one person.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0419",
   "founder_id": "f154",
   "stage": "stage1",
   "date": "2026-04-13",
   "rater": "Rater F",
   "cohort": "forward",
   "scores": {
    "execution": {
     "score": 5,
     "confidence": "H"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 5,
     "confidence": "H"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "hungry",
     "clarity",
     "sharp"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Strong on product, lighter on distribution, will need a commercial cofounder or hire.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Hustle",
     "Clarity"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0420",
   "founder_id": "f155",
   "stage": "stage1",
   "date": "2024-12-31",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "M"
    },
    "customer": {
     "score": 3,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "M"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "deliberate",
     "network",
     "articulate"
    ],
    "lean_in": "Very impressive founder with strong energy and a clear sense of purpose.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Domain depth",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0421",
   "founder_id": "f155",
   "stage": "stage2",
   "date": "2025-02-02",
   "rater": "Rater B",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 4,
     "confidence": "L"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 3,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "polished",
     "deliberate",
     "sharp"
    ],
    "lean_in": "Thoughtful and calm, took feedback well in the meeting.",
    "worry": "Burn is running ahead of plan and the next raise will need a step change in traction.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Intellectual honesty"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0422",
   "founder_id": "f157",
   "stage": "stage1",
   "date": "2022-04-21",
   "rater": "Rater F",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 5,
     "confidence": "H"
    },
    "resilience": {
     "score": 2,
     "confidence": "M"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": null,
     "confidence": "L"
    },
    "ceiling": {
     "score": null,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "sharp",
     "calm",
     "unusual"
    ],
    "lean_in": "Left a senior role at a large payments firm and brought 5 customers along.",
    "worry": "Hiring pace has lagged plan by a quarter, still early to call it a pattern.",
    "conviction": 2,
    "would_back_again": "no",
    "themes": [
     "Calm under pressure",
     "Non-obvious insight"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0423",
   "founder_id": "f159",
   "stage": "stage1",
   "date": "2023-05-12",
   "rater": "Rater D",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "L"
    },
    "market": {
     "score": 4,
     "confidence": "M"
    },
    "customer": {
     "score": 4,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": null,
     "confidence": "L"
    },
    "talent": {
     "score": 3,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 2,
     "confidence": "L"
    },
    "ceiling": {
     "score": 4,
     "confidence": "M"
    }
   },
   "intangibles": {
    "words": [
     "insight",
     "salesy",
     "confident"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Second time founder energy but first time in a regulated market, learning curve ahead.",
    "conviction": 4,
    "would_back_again": "yes",
    "themes": [
     "Non-obvious insight",
     "Storytelling"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0424",
   "founder_id": "f160",
   "stage": "stage1",
   "date": "2022-01-16",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 2,
     "confidence": "M"
    },
    "market": {
     "score": null,
     "confidence": "L"
    },
    "customer": {
     "score": 2,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 4,
     "confidence": "M"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": 2,
     "confidence": "M"
    },
    "decisiveness": {
     "score": 4,
     "confidence": "L"
    },
    "ceiling": {
     "score": 2,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "scrappy",
     "charming",
     "energetic"
    ],
    "lean_in": "Grew from zero to 35 accounts in 12 months with a team of 5.",
    "worry": "Burn is high relative to progress and runway is under nine months with no term sheet in sight.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Hustle"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "advance",
   "health_check": null
  },
  {
   "id": "a0425",
   "founder_id": "f160",
   "stage": "stage2",
   "date": "2022-02-27",
   "rater": "Rater A",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 3,
     "confidence": "M"
    },
    "market": {
     "score": 3,
     "confidence": "L"
    },
    "customer": {
     "score": 3,
     "confidence": "M"
    },
    "self_awareness": {
     "score": 3,
     "confidence": "L"
    },
    "resilience": {
     "score": 4,
     "confidence": "M"
    },
    "talent": {
     "score": null,
     "confidence": "L"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 3,
     "confidence": "L"
    }
   },
   "intangibles": {
    "words": [
     "precise",
     "charming",
     "pedigree"
    ],
    "lean_in": "Deep conviction about the problem and a compelling personal story.",
    "worry": "Never worked in the vertical and has been defensive about that gap in every conversation.",
    "conviction": 3,
    "would_back_again": "unsure",
    "themes": [
     "Domain depth"
    ]
   },
   "integrity": "passed",
   "decision_at_stage": "pass",
   "health_check": null
  },
  {
   "id": "a0426",
   "founder_id": "f162",
   "stage": "stage1",
   "date": "2025-02-26",
   "rater": "Rater C",
   "cohort": "backfilled",
   "scores": {
    "execution": {
     "score": 1,
     "confidence": "H"
    },
    "market": {
     "score": 1,
     "confidence": "H"
    },
    "customer": {
     "score": null,
     "confidence": "L"
    },
    "self_awareness": {
     "score": 1,
     "confidence": "H"
    },
    "resilience": {
     "score": 1,
     "confidence": "H"
    },
    "talent": {
     "score": 1,
     "confidence": "H"
    },
    "decisiveness": {
     "score": 3,
     "confidence": "M"
    },
    "ceiling": {
     "score": 1,
     "confidence": "H"
    }
   },
   "intangibles": {
    "words": [
     "likeable",
     "smooth",
     "grit"
    ],
    "lean_in": "Charismatic and confident, the kind of person people want to follow.",
    "worry": "Early churn in the first cohort is high and the founder has no explanation for it.",
    "conviction": 1,
    "would_back_again": "no",
    "themes": [
     "Storytelling",
     "Grit"
    ]
   },
   "integrity": "pending",
   "decision_at_stage": "pass",
   "health_check": null
  }
 ],
 "outcomes": [
  {
   "company_id": "c001",
   "as_of": "2026-09-22",
   "entry_pre_money": 45600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 29,
   "headcount_now": 18,
   "headcount_growth_yoy": -0.22,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c002",
   "as_of": "2026-09-22",
   "entry_pre_money": 105100000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 31,
   "headcount_now": 37,
   "headcount_growth_yoy": 0.304,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c003",
   "as_of": "2026-09-22",
   "entry_pre_money": 47300000,
   "next_round_date": "2026-09-05",
   "next_round_pre_money": 83527724,
   "up_round": true,
   "graduated": true,
   "graduation_months": 8,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 24,
   "headcount_now": 51,
   "headcount_growth_yoy": 2.098,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c004",
   "as_of": "2026-09-22",
   "entry_pre_money": 21700000,
   "next_round_date": "2025-01-26",
   "next_round_pre_money": 49282624,
   "up_round": true,
   "graduated": true,
   "graduation_months": 21,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 20,
   "headcount_now": 46,
   "headcount_growth_yoy": 0.284,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c005",
   "as_of": "2026-09-22",
   "entry_pre_money": 77400000,
   "next_round_date": "2023-09-22",
   "next_round_pre_money": 178014781,
   "up_round": true,
   "graduated": true,
   "graduation_months": 10,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 56,
   "headcount_now": 127,
   "headcount_growth_yoy": 0.238,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c006",
   "as_of": "2026-09-22",
   "entry_pre_money": 8000000,
   "next_round_date": "2026-09-12",
   "next_round_pre_money": 16401823,
   "up_round": true,
   "graduated": true,
   "graduation_months": 18,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 13,
   "headcount_growth_yoy": 0.511,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c007",
   "as_of": "2026-09-22",
   "entry_pre_money": 54400000,
   "next_round_date": "2023-08-22",
   "next_round_pre_money": 160027471,
   "up_round": true,
   "graduated": true,
   "graduation_months": 25,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 33,
   "headcount_now": 67,
   "headcount_growth_yoy": 0.147,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c008",
   "as_of": "2026-09-22",
   "entry_pre_money": 128400000,
   "next_round_date": "2024-02-07",
   "next_round_pre_money": 313195343,
   "up_round": true,
   "graduated": true,
   "graduation_months": 28,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 53,
   "headcount_now": 76,
   "headcount_growth_yoy": 0.076,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c009",
   "as_of": "2026-09-22",
   "entry_pre_money": 17900000,
   "next_round_date": "2024-05-22",
   "next_round_pre_money": 47654246,
   "up_round": true,
   "graduated": true,
   "graduation_months": 18,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": true,
   "headcount_entry": 16,
   "headcount_now": 20,
   "headcount_growth_yoy": 0.06,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c010",
   "as_of": "2026-09-22",
   "entry_pre_money": 67000000,
   "next_round_date": "2024-11-22",
   "next_round_pre_money": 126011023,
   "up_round": true,
   "graduated": true,
   "graduation_months": 24,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 48,
   "headcount_now": 108,
   "headcount_growth_yoy": 0.236,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c011",
   "as_of": "2026-09-22",
   "entry_pre_money": 30100000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 22,
   "headcount_now": 29,
   "headcount_growth_yoy": 0.096,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c012",
   "as_of": "2026-09-22",
   "entry_pre_money": 8800000,
   "next_round_date": "2025-10-12",
   "next_round_pre_money": 38741014,
   "up_round": true,
   "graduated": true,
   "graduation_months": 15,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 22,
   "headcount_growth_yoy": 0.595,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c013",
   "as_of": "2026-09-22",
   "entry_pre_money": 51700000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 32,
   "headcount_now": 35,
   "headcount_growth_yoy": 0.027,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c014",
   "as_of": "2026-09-22",
   "entry_pre_money": 18300000,
   "next_round_date": "2023-01-22",
   "next_round_pre_money": 53145507,
   "up_round": true,
   "graduated": true,
   "graduation_months": 10,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 15,
   "headcount_growth_yoy": 0.12,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c015",
   "as_of": "2026-09-22",
   "entry_pre_money": 18500000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 24,
   "headcount_now": 28,
   "headcount_growth_yoy": 0.046,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c016",
   "as_of": "2026-09-22",
   "entry_pre_money": 36900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 15,
   "headcount_now": 16,
   "headcount_growth_yoy": 0.014,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c017",
   "as_of": "2026-09-22",
   "entry_pre_money": 140500000,
   "next_round_date": "2024-06-18",
   "next_round_pre_money": 244290508,
   "up_round": true,
   "graduated": true,
   "graduation_months": 29,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": true,
   "headcount_entry": 54,
   "headcount_now": 157,
   "headcount_growth_yoy": 0.257,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c018",
   "as_of": "2026-09-22",
   "entry_pre_money": 57100000,
   "next_round_date": "2024-04-28",
   "next_round_pre_money": 221795176,
   "up_round": true,
   "graduated": true,
   "graduation_months": 26,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 56,
   "headcount_now": 110,
   "headcount_growth_yoy": 0.162,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c019",
   "as_of": "2026-09-22",
   "entry_pre_money": 118200000,
   "next_round_date": "2022-12-22",
   "next_round_pre_money": 206962246,
   "up_round": true,
   "graduated": true,
   "graduation_months": 18,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 33,
   "headcount_now": 59,
   "headcount_growth_yoy": 0.117,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c020",
   "as_of": "2026-09-22",
   "entry_pre_money": 80600000,
   "next_round_date": "2024-09-16",
   "next_round_pre_money": 158972399,
   "up_round": true,
   "graduated": true,
   "graduation_months": 10,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 53,
   "headcount_now": 131,
   "headcount_growth_yoy": 0.376,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c021",
   "as_of": "2026-09-22",
   "entry_pre_money": 32000000,
   "next_round_date": "2026-05-13",
   "next_round_pre_money": 38333701,
   "up_round": false,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 12,
   "headcount_now": 13,
   "headcount_growth_yoy": 0.036,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c022",
   "as_of": "2026-09-22",
   "entry_pre_money": 19400000,
   "next_round_date": "2024-10-13",
   "next_round_pre_money": 33358606,
   "up_round": true,
   "graduated": true,
   "graduation_months": 21,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 15,
   "headcount_now": 27,
   "headcount_growth_yoy": 0.174,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c023",
   "as_of": "2026-09-22",
   "entry_pre_money": 15400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 15,
   "headcount_now": 7,
   "headcount_growth_yoy": -0.144,
   "status": "written_off",
   "hypothetical_moic": null
  },
  {
   "company_id": "c024",
   "as_of": "2026-09-22",
   "entry_pre_money": 12600000,
   "next_round_date": "2025-04-15",
   "next_round_pre_money": 29911553,
   "up_round": true,
   "graduated": true,
   "graduation_months": 13,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 11,
   "headcount_growth_yoy": 0.371,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c025",
   "as_of": "2026-09-22",
   "entry_pre_money": 58400000,
   "next_round_date": "2023-08-14",
   "next_round_pre_money": 136749863,
   "up_round": true,
   "graduated": true,
   "graduation_months": 22,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": true,
   "headcount_entry": 57,
   "headcount_now": 143,
   "headcount_growth_yoy": 0.206,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c026",
   "as_of": "2026-09-22",
   "entry_pre_money": 7200000,
   "next_round_date": "2024-05-22",
   "next_round_pre_money": 19477296,
   "up_round": true,
   "graduated": true,
   "graduation_months": 18,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 11,
   "headcount_growth_yoy": 0.228,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c027",
   "as_of": "2026-09-22",
   "entry_pre_money": 4900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 11,
   "headcount_growth_yoy": 0.152,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c028",
   "as_of": "2026-09-22",
   "entry_pre_money": 22300000,
   "next_round_date": "2023-10-12",
   "next_round_pre_money": 54844318,
   "up_round": true,
   "graduated": true,
   "graduation_months": 8,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 22,
   "headcount_now": 38,
   "headcount_growth_yoy": 0.165,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c029",
   "as_of": "2026-09-22",
   "entry_pre_money": 6500000,
   "next_round_date": "2025-12-24",
   "next_round_pre_money": 16651616,
   "up_round": true,
   "graduated": true,
   "graduation_months": 9,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 4,
   "headcount_now": 8,
   "headcount_growth_yoy": 0.631,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c030",
   "as_of": "2026-09-22",
   "entry_pre_money": 50000000,
   "next_round_date": "2024-04-22",
   "next_round_pre_money": 102487150,
   "up_round": true,
   "graduated": true,
   "graduation_months": 17,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 28,
   "headcount_now": 95,
   "headcount_growth_yoy": 0.375,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c031",
   "as_of": "2026-09-22",
   "entry_pre_money": 19400000,
   "next_round_date": "2023-11-13",
   "next_round_pre_money": 51972684,
   "up_round": true,
   "graduated": true,
   "graduation_months": 8,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": true,
   "headcount_entry": 22,
   "headcount_now": 35,
   "headcount_growth_yoy": 0.142,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c032",
   "as_of": "2026-09-22",
   "entry_pre_money": 55400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 23,
   "headcount_now": 8,
   "headcount_growth_yoy": -0.336,
   "status": "written_off",
   "hypothetical_moic": null
  },
  {
   "company_id": "c033",
   "as_of": "2026-09-22",
   "entry_pre_money": 66500000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 38,
   "headcount_now": 32,
   "headcount_growth_yoy": -0.05,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c034",
   "as_of": "2026-09-22",
   "entry_pre_money": 19800000,
   "next_round_date": "2025-12-29",
   "next_round_pre_money": 33569816,
   "up_round": true,
   "graduated": true,
   "graduation_months": 13,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": true,
   "headcount_entry": 10,
   "headcount_now": 21,
   "headcount_growth_yoy": 0.528,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c035",
   "as_of": "2026-09-22",
   "entry_pre_money": 26100000,
   "next_round_date": "2024-10-03",
   "next_round_pre_money": 98487156,
   "up_round": true,
   "graduated": true,
   "graduation_months": 17,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 19,
   "headcount_now": 64,
   "headcount_growth_yoy": 0.44,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c036",
   "as_of": "2026-09-22",
   "entry_pre_money": 46000000,
   "next_round_date": "2024-12-23",
   "next_round_pre_money": 74824864,
   "up_round": true,
   "graduated": true,
   "graduation_months": 8,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 37,
   "headcount_now": 69,
   "headcount_growth_yoy": 0.306,
   "status": "acquired",
   "hypothetical_moic": null
  },
  {
   "company_id": "c037",
   "as_of": "2026-09-22",
   "entry_pre_money": 29200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 21,
   "headcount_now": 29,
   "headcount_growth_yoy": 0.347,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c038",
   "as_of": "2026-09-22",
   "entry_pre_money": 8900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 6,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c039",
   "as_of": "2026-09-22",
   "entry_pre_money": 7300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 15,
   "headcount_growth_yoy": 0.746,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c040",
   "as_of": "2026-09-22",
   "entry_pre_money": 8900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 7,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c041",
   "as_of": "2026-09-22",
   "entry_pre_money": 19000000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 18,
   "headcount_now": 24,
   "headcount_growth_yoy": 0.369,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c042",
   "as_of": "2026-09-22",
   "entry_pre_money": 14300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 9,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c043",
   "as_of": "2026-09-22",
   "entry_pre_money": 81900000,
   "next_round_date": "2026-04-20",
   "next_round_pre_money": 170633188,
   "up_round": true,
   "graduated": true,
   "graduation_months": 16,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 59,
   "headcount_now": 132,
   "headcount_growth_yoy": 0.584,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c044",
   "as_of": "2026-09-22",
   "entry_pre_money": 7800000,
   "next_round_date": "2026-08-21",
   "next_round_pre_money": 14918958,
   "up_round": true,
   "graduated": true,
   "graduation_months": 17,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 13,
   "headcount_growth_yoy": 0.511,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c045",
   "as_of": "2026-09-22",
   "entry_pre_money": 5100000,
   "next_round_date": "2026-08-25",
   "next_round_pre_money": 11589933,
   "up_round": true,
   "graduated": true,
   "graduation_months": 2,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 11,
   "headcount_growth_yoy": 2.361,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c046",
   "as_of": "2026-09-22",
   "entry_pre_money": 5700000,
   "next_round_date": "2026-08-26",
   "next_round_pre_money": 11052465,
   "up_round": true,
   "graduated": true,
   "graduation_months": 14,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 12,
   "headcount_growth_yoy": 0.811,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c047",
   "as_of": "2026-09-22",
   "entry_pre_money": 53800000,
   "next_round_date": "2026-03-31",
   "next_round_pre_money": 91287814,
   "up_round": true,
   "graduated": true,
   "graduation_months": 8,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 28,
   "headcount_now": 55,
   "headcount_growth_yoy": 0.865,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c048",
   "as_of": "2026-09-22",
   "entry_pre_money": 139700000,
   "next_round_date": "2024-05-09",
   "next_round_pre_money": 226798870,
   "up_round": true,
   "graduated": true,
   "graduation_months": 16,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 59,
   "headcount_now": 83,
   "headcount_growth_yoy": 0.098,
   "status": "realised",
   "hypothetical_moic": null
  },
  {
   "company_id": "c049",
   "as_of": "2026-09-22",
   "entry_pre_money": 8400000,
   "next_round_date": "2024-01-11",
   "next_round_pre_money": 16890199,
   "up_round": true,
   "graduated": true,
   "graduation_months": 8,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": true,
   "headcount_entry": 7,
   "headcount_now": 14,
   "headcount_growth_yoy": 0.231,
   "status": "realised",
   "hypothetical_moic": null
  },
  {
   "company_id": "c050",
   "as_of": "2026-09-22",
   "entry_pre_money": 6200000,
   "next_round_date": "2024-02-05",
   "next_round_pre_money": 10000782,
   "up_round": true,
   "graduated": true,
   "graduation_months": 18,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 23,
   "headcount_growth_yoy": 0.258,
   "status": "realised",
   "hypothetical_moic": null
  },
  {
   "company_id": "c051",
   "as_of": "2026-09-22",
   "entry_pre_money": 27500000,
   "next_round_date": "2025-09-26",
   "next_round_pre_money": 66174543,
   "up_round": true,
   "graduated": true,
   "graduation_months": 19,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 18,
   "headcount_now": 40,
   "headcount_growth_yoy": 0.376,
   "status": "realised",
   "hypothetical_moic": null
  },
  {
   "company_id": "c052",
   "as_of": "2026-09-22",
   "entry_pre_money": 9300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 4,
   "headcount_now": 5,
   "headcount_growth_yoy": 0.562,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c053",
   "as_of": "2026-09-22",
   "entry_pre_money": 33500000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 17,
   "headcount_now": 11,
   "headcount_growth_yoy": -0.165,
   "status": "unknown",
   "hypothetical_moic": null
  },
  {
   "company_id": "c054",
   "as_of": "2026-09-22",
   "entry_pre_money": 17300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 17,
   "headcount_now": 6,
   "headcount_growth_yoy": -0.287,
   "status": "shut_down",
   "hypothetical_moic": null
  },
  {
   "company_id": "c055",
   "as_of": "2026-09-22",
   "entry_pre_money": 4600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 9,
   "headcount_growth_yoy": 0.115,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c056",
   "as_of": "2026-09-22",
   "entry_pre_money": 11600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 5,
   "headcount_growth_yoy": -0.466,
   "status": "unknown",
   "hypothetical_moic": null
  },
  {
   "company_id": "c057",
   "as_of": "2026-09-22",
   "entry_pre_money": 26600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 8,
   "headcount_growth_yoy": -0.076,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c058",
   "as_of": "2026-09-22",
   "entry_pre_money": 7600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 12,
   "headcount_growth_yoy": 0.136,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c059",
   "as_of": "2026-09-22",
   "entry_pre_money": 22200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 15,
   "headcount_now": 23,
   "headcount_growth_yoy": 0.145,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c060",
   "as_of": "2026-09-22",
   "entry_pre_money": 7300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 6,
   "headcount_growth_yoy": -0.029,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c061",
   "as_of": "2026-09-22",
   "entry_pre_money": 48200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 11,
   "headcount_now": 5,
   "headcount_growth_yoy": -0.793,
   "status": "unknown",
   "hypothetical_moic": null
  },
  {
   "company_id": "c062",
   "as_of": "2026-09-22",
   "entry_pre_money": 35700000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 9,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c063",
   "as_of": "2026-09-22",
   "entry_pre_money": 66700000,
   "next_round_date": "2026-04-04",
   "next_round_pre_money": 138069568,
   "up_round": true,
   "graduated": true,
   "graduation_months": 24,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 48,
   "headcount_now": 85,
   "headcount_growth_yoy": 0.267,
   "status": "active",
   "hypothetical_moic": 2.07
  },
  {
   "company_id": "c064",
   "as_of": "2026-09-22",
   "entry_pre_money": 4400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 3,
   "headcount_growth_yoy": -0.153,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c065",
   "as_of": "2026-09-22",
   "entry_pre_money": 40600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 25,
   "headcount_now": 28,
   "headcount_growth_yoy": 0.254,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c066",
   "as_of": "2026-09-22",
   "entry_pre_money": 51900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 25,
   "headcount_now": 17,
   "headcount_growth_yoy": -0.32,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c067",
   "as_of": "2026-09-22",
   "entry_pre_money": 18600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 10,
   "headcount_now": 9,
   "headcount_growth_yoy": -0.19,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c068",
   "as_of": "2026-09-22",
   "entry_pre_money": 13100000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 7,
   "headcount_growth_yoy": 0.361,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c069",
   "as_of": "2026-09-22",
   "entry_pre_money": 6200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 9,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c070",
   "as_of": "2026-09-22",
   "entry_pre_money": 7100000,
   "next_round_date": "2023-12-13",
   "next_round_pre_money": 25470889,
   "up_round": true,
   "graduated": true,
   "graduation_months": 17,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 14,
   "headcount_growth_yoy": 0.181,
   "status": "active",
   "hypothetical_moic": 3.59
  },
  {
   "company_id": "c071",
   "as_of": "2026-09-22",
   "entry_pre_money": 41100000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 15,
   "headcount_now": 19,
   "headcount_growth_yoy": 0.294,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c072",
   "as_of": "2026-09-22",
   "entry_pre_money": 72000000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 21,
   "headcount_now": 22,
   "headcount_growth_yoy": 0.098,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c073",
   "as_of": "2026-09-22",
   "entry_pre_money": 6400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 6,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c074",
   "as_of": "2026-09-22",
   "entry_pre_money": 23800000,
   "next_round_date": "2024-01-10",
   "next_round_pre_money": 41494521,
   "up_round": true,
   "graduated": true,
   "graduation_months": 16,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 17,
   "headcount_now": 40,
   "headcount_growth_yoy": 0.239,
   "status": "active",
   "hypothetical_moic": 1.74
  },
  {
   "company_id": "c075",
   "as_of": "2026-09-22",
   "entry_pre_money": 30200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 24,
   "headcount_now": 8,
   "headcount_growth_yoy": -0.356,
   "status": "shut_down",
   "hypothetical_moic": null
  },
  {
   "company_id": "c076",
   "as_of": "2026-09-22",
   "entry_pre_money": 7900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 9,
   "headcount_growth_yoy": 0.398,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c077",
   "as_of": "2026-09-22",
   "entry_pre_money": 28700000,
   "next_round_date": "2023-07-18",
   "next_round_pre_money": 46166001,
   "up_round": true,
   "graduated": true,
   "graduation_months": 17,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 23,
   "headcount_growth_yoy": 0.227,
   "status": "active",
   "hypothetical_moic": 1.61
  },
  {
   "company_id": "c078",
   "as_of": "2026-09-22",
   "entry_pre_money": 61400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 43,
   "headcount_now": 15,
   "headcount_growth_yoy": -0.245,
   "status": "unknown",
   "hypothetical_moic": null
  },
  {
   "company_id": "c079",
   "as_of": "2026-09-22",
   "entry_pre_money": 45700000,
   "next_round_date": "2023-05-23",
   "next_round_pre_money": 73217000,
   "up_round": true,
   "graduated": true,
   "graduation_months": 17,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 20,
   "headcount_now": 39,
   "headcount_growth_yoy": 0.154,
   "status": "active",
   "hypothetical_moic": 1.6
  },
  {
   "company_id": "c080",
   "as_of": "2026-09-22",
   "entry_pre_money": 8900000,
   "next_round_date": "2024-08-06",
   "next_round_pre_money": 21802984,
   "up_round": true,
   "graduated": true,
   "graduation_months": 7,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 9,
   "headcount_growth_yoy": 0.247,
   "status": "active",
   "hypothetical_moic": 2.45
  },
  {
   "company_id": "c081",
   "as_of": "2026-09-22",
   "entry_pre_money": 9700000,
   "next_round_date": "2022-12-09",
   "next_round_pre_money": 9246595,
   "up_round": false,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 4,
   "headcount_now": 5,
   "headcount_growth_yoy": 0.047,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c082",
   "as_of": "2026-09-22",
   "entry_pre_money": 32000000,
   "next_round_date": "2026-08-10",
   "next_round_pre_money": 71294919,
   "up_round": true,
   "graduated": true,
   "graduation_months": 21,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 22,
   "headcount_now": 44,
   "headcount_growth_yoy": 0.459,
   "status": "active",
   "hypothetical_moic": 2.23
  },
  {
   "company_id": "c083",
   "as_of": "2026-09-22",
   "entry_pre_money": 6800000,
   "next_round_date": "2024-01-30",
   "next_round_pre_money": 17513385,
   "up_round": true,
   "graduated": true,
   "graduation_months": 13,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 15,
   "headcount_growth_yoy": 0.284,
   "status": "active",
   "hypothetical_moic": 2.58
  },
  {
   "company_id": "c084",
   "as_of": "2026-09-22",
   "entry_pre_money": 10200000,
   "next_round_date": "2024-05-07",
   "next_round_pre_money": 16331150,
   "up_round": true,
   "graduated": true,
   "graduation_months": 16,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 10,
   "headcount_growth_yoy": 0.149,
   "status": "acquired",
   "hypothetical_moic": 1.6
  },
  {
   "company_id": "c085",
   "as_of": "2026-09-22",
   "entry_pre_money": 43200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 22,
   "headcount_now": 25,
   "headcount_growth_yoy": 0.08,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c086",
   "as_of": "2026-09-22",
   "entry_pre_money": 14500000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 8,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c087",
   "as_of": "2026-09-22",
   "entry_pre_money": 23700000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 22,
   "headcount_now": 23,
   "headcount_growth_yoy": 0.025,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c088",
   "as_of": "2026-09-22",
   "entry_pre_money": 10700000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 9,
   "headcount_growth_yoy": 0.653,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c089",
   "as_of": "2026-09-22",
   "entry_pre_money": 16400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 25,
   "headcount_now": 30,
   "headcount_growth_yoy": 0.061,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c090",
   "as_of": "2026-09-22",
   "entry_pre_money": 51900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 35,
   "headcount_now": 24,
   "headcount_growth_yoy": -0.112,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c091",
   "as_of": "2026-09-22",
   "entry_pre_money": 9800000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 8,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c092",
   "as_of": "2026-09-22",
   "entry_pre_money": 4200000,
   "next_round_date": "2024-05-26",
   "next_round_pre_money": 4074990,
   "up_round": false,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 6,
   "headcount_growth_yoy": -0.049,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c093",
   "as_of": "2026-09-22",
   "entry_pre_money": 81000000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 24,
   "headcount_now": 27,
   "headcount_growth_yoy": 0.025,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c094",
   "as_of": "2026-09-22",
   "entry_pre_money": 73700000,
   "next_round_date": "2025-01-22",
   "next_round_pre_money": 210562238,
   "up_round": true,
   "graduated": true,
   "graduation_months": 10,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 57,
   "headcount_now": 125,
   "headcount_growth_yoy": 0.369,
   "status": "active",
   "hypothetical_moic": 2.86
  },
  {
   "company_id": "c095",
   "as_of": "2026-09-22",
   "entry_pre_money": 95600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 58,
   "headcount_now": 56,
   "headcount_growth_yoy": -0.013,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c096",
   "as_of": "2026-09-22",
   "entry_pre_money": 14300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 14,
   "headcount_now": 6,
   "headcount_growth_yoy": -0.287,
   "status": "unknown",
   "hypothetical_moic": null
  },
  {
   "company_id": "c097",
   "as_of": "2026-09-22",
   "entry_pre_money": 11800000,
   "next_round_date": "2024-11-04",
   "next_round_pre_money": 27949986,
   "up_round": true,
   "graduated": true,
   "graduation_months": 12,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 14,
   "headcount_growth_yoy": 0.349,
   "status": "active",
   "hypothetical_moic": 2.37
  },
  {
   "company_id": "c098",
   "as_of": "2026-09-22",
   "entry_pre_money": 103800000,
   "next_round_date": "2022-07-29",
   "next_round_pre_money": 342583682,
   "up_round": true,
   "graduated": true,
   "graduation_months": 13,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 59,
   "headcount_now": 135,
   "headcount_growth_yoy": 0.174,
   "status": "active",
   "hypothetical_moic": 3.3
  },
  {
   "company_id": "c099",
   "as_of": "2026-09-22",
   "entry_pre_money": 12600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 6,
   "headcount_now": 2,
   "headcount_growth_yoy": -0.889,
   "status": "unknown",
   "hypothetical_moic": null
  },
  {
   "company_id": "c100",
   "as_of": "2026-09-22",
   "entry_pre_money": 27900000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 14,
   "headcount_now": 14,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c101",
   "as_of": "2026-09-22",
   "entry_pre_money": 6500000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 3,
   "headcount_growth_yoy": -0.64,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c102",
   "as_of": "2026-09-22",
   "entry_pre_money": 19500000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 17,
   "headcount_now": 12,
   "headcount_growth_yoy": -0.085,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c103",
   "as_of": "2026-09-22",
   "entry_pre_money": 5800000,
   "next_round_date": "2023-12-04",
   "next_round_pre_money": 11193496,
   "up_round": true,
   "graduated": true,
   "graduation_months": 8,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 19,
   "headcount_growth_yoy": 0.244,
   "status": "active",
   "hypothetical_moic": 1.93
  },
  {
   "company_id": "c104",
   "as_of": "2026-09-22",
   "entry_pre_money": 51700000,
   "next_round_date": "2024-04-11",
   "next_round_pre_money": 96298350,
   "up_round": true,
   "graduated": true,
   "graduation_months": 22,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 51,
   "headcount_now": 123,
   "headcount_growth_yoy": 0.23,
   "status": "active",
   "hypothetical_moic": 1.86
  },
  {
   "company_id": "c105",
   "as_of": "2026-09-22",
   "entry_pre_money": 47400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 23,
   "headcount_now": 20,
   "headcount_growth_yoy": -0.028,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c106",
   "as_of": "2026-09-22",
   "entry_pre_money": 29500000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 20,
   "headcount_now": 19,
   "headcount_growth_yoy": -0.084,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c107",
   "as_of": "2026-09-22",
   "entry_pre_money": 97200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 37,
   "headcount_now": 34,
   "headcount_growth_yoy": -0.043,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c108",
   "as_of": "2026-09-22",
   "entry_pre_money": 37900000,
   "next_round_date": "2023-09-13",
   "next_round_pre_money": 41751642,
   "up_round": false,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 18,
   "headcount_now": 22,
   "headcount_growth_yoy": 0.054,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c109",
   "as_of": "2026-09-22",
   "entry_pre_money": 4200000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 7,
   "headcount_now": 6,
   "headcount_growth_yoy": -0.116,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c110",
   "as_of": "2026-09-22",
   "entry_pre_money": 11100000,
   "next_round_date": "2023-08-29",
   "next_round_pre_money": 21691792,
   "up_round": true,
   "graduated": true,
   "graduation_months": 15,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 11,
   "headcount_growth_yoy": 0.204,
   "status": "active",
   "hypothetical_moic": 1.95
  },
  {
   "company_id": "c111",
   "as_of": "2026-09-22",
   "entry_pre_money": 8700000,
   "next_round_date": "2024-04-09",
   "next_round_pre_money": 18125031,
   "up_round": true,
   "graduated": true,
   "graduation_months": 15,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 10,
   "headcount_growth_yoy": 0.208,
   "status": "active",
   "hypothetical_moic": 2.08
  },
  {
   "company_id": "c112",
   "as_of": "2026-09-22",
   "entry_pre_money": 7800000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 6,
   "headcount_growth_yoy": -0.094,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c113",
   "as_of": "2026-09-22",
   "entry_pre_money": 5600000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 9,
   "headcount_now": 12,
   "headcount_growth_yoy": 0.778,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c114",
   "as_of": "2026-09-22",
   "entry_pre_money": 50000000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 30,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 45,
   "headcount_now": 27,
   "headcount_growth_yoy": -0.64,
   "status": "unknown",
   "hypothetical_moic": null
  },
  {
   "company_id": "c115",
   "as_of": "2026-09-22",
   "entry_pre_money": 33400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 23,
   "headcount_now": 30,
   "headcount_growth_yoy": 0.173,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c116",
   "as_of": "2026-09-22",
   "entry_pre_money": 10300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 18,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 5,
   "headcount_now": 5,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c117",
   "as_of": "2026-09-22",
   "entry_pre_money": 37400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 14,
   "headcount_now": 14,
   "headcount_growth_yoy": 0.0,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c118",
   "as_of": "2026-09-22",
   "entry_pre_money": 71400000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": false,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": true,
   "motive_led_followon": false,
   "headcount_entry": 17,
   "headcount_now": 20,
   "headcount_growth_yoy": 0.035,
   "status": "active",
   "hypothetical_moic": null
  },
  {
   "company_id": "c119",
   "as_of": "2026-09-22",
   "entry_pre_money": 19300000,
   "next_round_date": null,
   "next_round_pre_money": null,
   "up_round": null,
   "graduated": null,
   "graduation_months": null,
   "window_months": 24,
   "window_closed": false,
   "motive_led_followon": false,
   "headcount_entry": 8,
   "headcount_now": 6,
   "headcount_growth_yoy": -0.175,
   "status": "active",
   "hypothetical_moic": null
  }
 ],
 "moic_panel": [
  {
   "company_id": "c001",
   "quarter": "2024Q4",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c001",
   "quarter": "2025Q1",
   "invested_cost": 4930000,
   "unrealized_value": 4732800,
   "realized_value": 0,
   "gross_moic": 0.96,
   "method": "Calibration"
  },
  {
   "company_id": "c001",
   "quarter": "2025Q2",
   "invested_cost": 4930000,
   "unrealized_value": 4732800,
   "realized_value": 0,
   "gross_moic": 0.96,
   "method": "Latest priced round"
  },
  {
   "company_id": "c001",
   "quarter": "2025Q3",
   "invested_cost": 4930000,
   "unrealized_value": 4732800,
   "realized_value": 0,
   "gross_moic": 0.96,
   "method": "Latest priced round"
  },
  {
   "company_id": "c001",
   "quarter": "2025Q4",
   "invested_cost": 4930000,
   "unrealized_value": 4732800,
   "realized_value": 0,
   "gross_moic": 0.96,
   "method": "Latest priced round"
  },
  {
   "company_id": "c001",
   "quarter": "2026Q1",
   "invested_cost": 4930000,
   "unrealized_value": 4732800,
   "realized_value": 0,
   "gross_moic": 0.96,
   "method": "Latest priced round"
  },
  {
   "company_id": "c001",
   "quarter": "2026Q2",
   "invested_cost": 4930000,
   "unrealized_value": 4732800,
   "realized_value": 0,
   "gross_moic": 0.96,
   "method": "Latest priced round"
  },
  {
   "company_id": "c002",
   "quarter": "2026Q1",
   "invested_cost": 6600000,
   "unrealized_value": 6600000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c002",
   "quarter": "2026Q2",
   "invested_cost": 6600000,
   "unrealized_value": 6600000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c003",
   "quarter": "2026Q1",
   "invested_cost": 4200000,
   "unrealized_value": 4200000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c003",
   "quarter": "2026Q2",
   "invested_cost": 4200000,
   "unrealized_value": 4200000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2023Q2",
   "invested_cost": 2010000,
   "unrealized_value": 2010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2023Q3",
   "invested_cost": 2010000,
   "unrealized_value": 2090400,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Calibration"
  },
  {
   "company_id": "c004",
   "quarter": "2023Q4",
   "invested_cost": 2010000,
   "unrealized_value": 2090400,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2024Q1",
   "invested_cost": 2010000,
   "unrealized_value": 2090400,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2024Q2",
   "invested_cost": 2010000,
   "unrealized_value": 2090400,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2024Q3",
   "invested_cost": 2010000,
   "unrealized_value": 2090400,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2024Q4",
   "invested_cost": 2010000,
   "unrealized_value": 2090400,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2025Q1",
   "invested_cost": 2010000,
   "unrealized_value": 4562700,
   "realized_value": 0,
   "gross_moic": 2.27,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2025Q2",
   "invested_cost": 2010000,
   "unrealized_value": 4562700,
   "realized_value": 0,
   "gross_moic": 2.27,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2025Q3",
   "invested_cost": 2010000,
   "unrealized_value": 4562700,
   "realized_value": 0,
   "gross_moic": 2.27,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2025Q4",
   "invested_cost": 2010000,
   "unrealized_value": 4562700,
   "realized_value": 0,
   "gross_moic": 2.27,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2026Q1",
   "invested_cost": 2010000,
   "unrealized_value": 4562700,
   "realized_value": 0,
   "gross_moic": 2.27,
   "method": "Latest priced round"
  },
  {
   "company_id": "c004",
   "quarter": "2026Q2",
   "invested_cost": 2010000,
   "unrealized_value": 5025000,
   "realized_value": 0,
   "gross_moic": 2.5,
   "method": "Calibration"
  },
  {
   "company_id": "c005",
   "quarter": "2022Q4",
   "invested_cost": 3180000,
   "unrealized_value": 3180000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c005",
   "quarter": "2023Q1",
   "invested_cost": 3180000,
   "unrealized_value": 3180000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c005",
   "quarter": "2023Q2",
   "invested_cost": 3180000,
   "unrealized_value": 3180000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c005",
   "quarter": "2023Q3",
   "invested_cost": 3180000,
   "unrealized_value": 7314000,
   "realized_value": 0,
   "gross_moic": 2.3,
   "method": "Latest priced round"
  },
  {
   "company_id": "c005",
   "quarter": "2023Q4",
   "invested_cost": 3180000,
   "unrealized_value": 7314000,
   "realized_value": 0,
   "gross_moic": 2.3,
   "method": "Latest priced round"
  },
  {
   "company_id": "c005",
   "quarter": "2024Q1",
   "invested_cost": 3180000,
   "unrealized_value": 7314000,
   "realized_value": 0,
   "gross_moic": 2.3,
   "method": "Latest priced round"
  },
  {
   "company_id": "c005",
   "quarter": "2024Q2",
   "invested_cost": 3180000,
   "unrealized_value": 7123200,
   "realized_value": 0,
   "gross_moic": 2.24,
   "method": "Calibration"
  },
  {
   "company_id": "c005",
   "quarter": "2024Q3",
   "invested_cost": 3180000,
   "unrealized_value": 7123200,
   "realized_value": 0,
   "gross_moic": 2.24,
   "method": "Latest priced round"
  },
  {
   "company_id": "c005",
   "quarter": "2024Q4",
   "invested_cost": 3180000,
   "unrealized_value": 6805200,
   "realized_value": 0,
   "gross_moic": 2.14,
   "method": "Calibration"
  },
  {
   "company_id": "c005",
   "quarter": "2025Q1",
   "invested_cost": 3180000,
   "unrealized_value": 6805200,
   "realized_value": 0,
   "gross_moic": 2.14,
   "method": "Market multiples"
  },
  {
   "company_id": "c005",
   "quarter": "2025Q2",
   "invested_cost": 3180000,
   "unrealized_value": 6805200,
   "realized_value": 0,
   "gross_moic": 2.14,
   "method": "Market multiples"
  },
  {
   "company_id": "c005",
   "quarter": "2025Q3",
   "invested_cost": 3180000,
   "unrealized_value": 6805200,
   "realized_value": 0,
   "gross_moic": 2.14,
   "method": "Market multiples"
  },
  {
   "company_id": "c005",
   "quarter": "2025Q4",
   "invested_cost": 3180000,
   "unrealized_value": 6805200,
   "realized_value": 0,
   "gross_moic": 2.14,
   "method": "Market multiples"
  },
  {
   "company_id": "c005",
   "quarter": "2026Q1",
   "invested_cost": 3180000,
   "unrealized_value": 6805200,
   "realized_value": 0,
   "gross_moic": 2.14,
   "method": "Market multiples"
  },
  {
   "company_id": "c005",
   "quarter": "2026Q2",
   "invested_cost": 3180000,
   "unrealized_value": 6805200,
   "realized_value": 0,
   "gross_moic": 2.14,
   "method": "Market multiples"
  },
  {
   "company_id": "c006",
   "quarter": "2025Q1",
   "invested_cost": 990000,
   "unrealized_value": 990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c006",
   "quarter": "2025Q2",
   "invested_cost": 990000,
   "unrealized_value": 990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c006",
   "quarter": "2025Q3",
   "invested_cost": 990000,
   "unrealized_value": 990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c006",
   "quarter": "2025Q4",
   "invested_cost": 990000,
   "unrealized_value": 990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c006",
   "quarter": "2026Q1",
   "invested_cost": 990000,
   "unrealized_value": 990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c006",
   "quarter": "2026Q2",
   "invested_cost": 990000,
   "unrealized_value": 990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2021Q3",
   "invested_cost": 4430000,
   "unrealized_value": 4430000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2021Q4",
   "invested_cost": 4430000,
   "unrealized_value": 4430000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2022Q1",
   "invested_cost": 4430000,
   "unrealized_value": 4430000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2022Q2",
   "invested_cost": 4430000,
   "unrealized_value": 4430000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2022Q3",
   "invested_cost": 4430000,
   "unrealized_value": 4607200,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Calibration"
  },
  {
   "company_id": "c007",
   "quarter": "2022Q4",
   "invested_cost": 4430000,
   "unrealized_value": 4607200,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2023Q1",
   "invested_cost": 4430000,
   "unrealized_value": 4607200,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2023Q2",
   "invested_cost": 4430000,
   "unrealized_value": 4607200,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2023Q3",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2023Q4",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2024Q1",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2024Q2",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2024Q3",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2024Q4",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Latest priced round"
  },
  {
   "company_id": "c007",
   "quarter": "2025Q1",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Market multiples"
  },
  {
   "company_id": "c007",
   "quarter": "2025Q2",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Market multiples"
  },
  {
   "company_id": "c007",
   "quarter": "2025Q3",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Market multiples"
  },
  {
   "company_id": "c007",
   "quarter": "2025Q4",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Market multiples"
  },
  {
   "company_id": "c007",
   "quarter": "2026Q1",
   "invested_cost": 4430000,
   "unrealized_value": 13024200,
   "realized_value": 0,
   "gross_moic": 2.94,
   "method": "Market multiples"
  },
  {
   "company_id": "c007",
   "quarter": "2026Q2",
   "invested_cost": 4430000,
   "unrealized_value": 12714100,
   "realized_value": 0,
   "gross_moic": 2.87,
   "method": "Calibration"
  },
  {
   "company_id": "c008",
   "quarter": "2021Q4",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2022Q1",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2022Q2",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2022Q3",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2022Q4",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2023Q1",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2023Q2",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2023Q3",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2023Q4",
   "invested_cost": 5500000,
   "unrealized_value": 5500000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2024Q1",
   "invested_cost": 5500000,
   "unrealized_value": 13420000,
   "realized_value": 0,
   "gross_moic": 2.44,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2024Q2",
   "invested_cost": 5500000,
   "unrealized_value": 13200000,
   "realized_value": 0,
   "gross_moic": 2.4,
   "method": "Calibration"
  },
  {
   "company_id": "c008",
   "quarter": "2024Q3",
   "invested_cost": 5500000,
   "unrealized_value": 13200000,
   "realized_value": 0,
   "gross_moic": 2.4,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2024Q4",
   "invested_cost": 5500000,
   "unrealized_value": 13200000,
   "realized_value": 0,
   "gross_moic": 2.4,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2025Q1",
   "invested_cost": 5500000,
   "unrealized_value": 13200000,
   "realized_value": 0,
   "gross_moic": 2.4,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2025Q2",
   "invested_cost": 5500000,
   "unrealized_value": 13200000,
   "realized_value": 0,
   "gross_moic": 2.4,
   "method": "Latest priced round"
  },
  {
   "company_id": "c008",
   "quarter": "2025Q3",
   "invested_cost": 5500000,
   "unrealized_value": 12320000,
   "realized_value": 0,
   "gross_moic": 2.24,
   "method": "Calibration"
  },
  {
   "company_id": "c008",
   "quarter": "2025Q4",
   "invested_cost": 5500000,
   "unrealized_value": 12320000,
   "realized_value": 0,
   "gross_moic": 2.24,
   "method": "Market multiples"
  },
  {
   "company_id": "c008",
   "quarter": "2026Q1",
   "invested_cost": 5500000,
   "unrealized_value": 11715000,
   "realized_value": 0,
   "gross_moic": 2.13,
   "method": "Calibration"
  },
  {
   "company_id": "c008",
   "quarter": "2026Q2",
   "invested_cost": 5500000,
   "unrealized_value": 11715000,
   "realized_value": 0,
   "gross_moic": 2.13,
   "method": "Market multiples"
  },
  {
   "company_id": "c009",
   "quarter": "2022Q4",
   "invested_cost": 2810000,
   "unrealized_value": 2810000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2023Q1",
   "invested_cost": 2810000,
   "unrealized_value": 2810000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2023Q2",
   "invested_cost": 2810000,
   "unrealized_value": 2810000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2023Q3",
   "invested_cost": 2810000,
   "unrealized_value": 2810000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2023Q4",
   "invested_cost": 2810000,
   "unrealized_value": 2810000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2024Q1",
   "invested_cost": 2810000,
   "unrealized_value": 2810000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2024Q2",
   "invested_cost": 2810000,
   "unrealized_value": 7474600,
   "realized_value": 0,
   "gross_moic": 2.66,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2024Q3",
   "invested_cost": 2810000,
   "unrealized_value": 7474600,
   "realized_value": 0,
   "gross_moic": 2.66,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2024Q4",
   "invested_cost": 2810000,
   "unrealized_value": 7474600,
   "realized_value": 0,
   "gross_moic": 2.66,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2025Q1",
   "invested_cost": 2810000,
   "unrealized_value": 8064700,
   "realized_value": 0,
   "gross_moic": 2.87,
   "method": "Calibration"
  },
  {
   "company_id": "c009",
   "quarter": "2025Q2",
   "invested_cost": 2810000,
   "unrealized_value": 8064700,
   "realized_value": 0,
   "gross_moic": 2.87,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2025Q3",
   "invested_cost": 2810000,
   "unrealized_value": 8064700,
   "realized_value": 0,
   "gross_moic": 2.87,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2025Q4",
   "invested_cost": 2810000,
   "unrealized_value": 8064700,
   "realized_value": 0,
   "gross_moic": 2.87,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2026Q1",
   "invested_cost": 2810000,
   "unrealized_value": 8064700,
   "realized_value": 0,
   "gross_moic": 2.87,
   "method": "Latest priced round"
  },
  {
   "company_id": "c009",
   "quarter": "2026Q2",
   "invested_cost": 2810000,
   "unrealized_value": 8064700,
   "realized_value": 0,
   "gross_moic": 2.87,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2022Q4",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2023Q1",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2023Q2",
   "invested_cost": 4930000,
   "unrealized_value": 5077900,
   "realized_value": 0,
   "gross_moic": 1.03,
   "method": "Calibration"
  },
  {
   "company_id": "c010",
   "quarter": "2023Q3",
   "invested_cost": 4930000,
   "unrealized_value": 5077900,
   "realized_value": 0,
   "gross_moic": 1.03,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2023Q4",
   "invested_cost": 4930000,
   "unrealized_value": 4683500,
   "realized_value": 0,
   "gross_moic": 0.95,
   "method": "Calibration"
  },
  {
   "company_id": "c010",
   "quarter": "2024Q1",
   "invested_cost": 4930000,
   "unrealized_value": 4683500,
   "realized_value": 0,
   "gross_moic": 0.95,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2024Q2",
   "invested_cost": 4930000,
   "unrealized_value": 4683500,
   "realized_value": 0,
   "gross_moic": 0.95,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2024Q3",
   "invested_cost": 4930000,
   "unrealized_value": 4683500,
   "realized_value": 0,
   "gross_moic": 0.95,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2024Q4",
   "invested_cost": 4930000,
   "unrealized_value": 9268400,
   "realized_value": 0,
   "gross_moic": 1.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2025Q1",
   "invested_cost": 4930000,
   "unrealized_value": 9268400,
   "realized_value": 0,
   "gross_moic": 1.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2025Q2",
   "invested_cost": 4930000,
   "unrealized_value": 9268400,
   "realized_value": 0,
   "gross_moic": 1.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2025Q3",
   "invested_cost": 4930000,
   "unrealized_value": 9268400,
   "realized_value": 0,
   "gross_moic": 1.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2025Q4",
   "invested_cost": 4930000,
   "unrealized_value": 9662800,
   "realized_value": 0,
   "gross_moic": 1.96,
   "method": "Calibration"
  },
  {
   "company_id": "c010",
   "quarter": "2026Q1",
   "invested_cost": 4930000,
   "unrealized_value": 9662800,
   "realized_value": 0,
   "gross_moic": 1.96,
   "method": "Latest priced round"
  },
  {
   "company_id": "c010",
   "quarter": "2026Q2",
   "invested_cost": 4930000,
   "unrealized_value": 9662800,
   "realized_value": 0,
   "gross_moic": 1.96,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2023Q3",
   "invested_cost": 1470000,
   "unrealized_value": 1470000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2023Q4",
   "invested_cost": 1470000,
   "unrealized_value": 1470000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2024Q1",
   "invested_cost": 1470000,
   "unrealized_value": 1470000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2024Q2",
   "invested_cost": 1470000,
   "unrealized_value": 1470000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2024Q3",
   "invested_cost": 1470000,
   "unrealized_value": 1470000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2024Q4",
   "invested_cost": 1470000,
   "unrealized_value": 1470000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2025Q1",
   "invested_cost": 1470000,
   "unrealized_value": 1587600,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Calibration"
  },
  {
   "company_id": "c011",
   "quarter": "2025Q2",
   "invested_cost": 1470000,
   "unrealized_value": 1587600,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2025Q3",
   "invested_cost": 1470000,
   "unrealized_value": 1587600,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2025Q4",
   "invested_cost": 1470000,
   "unrealized_value": 1587600,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2026Q1",
   "invested_cost": 1470000,
   "unrealized_value": 1587600,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c011",
   "quarter": "2026Q2",
   "invested_cost": 1470000,
   "unrealized_value": 1587600,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2024Q3",
   "invested_cost": 970000,
   "unrealized_value": 970000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2024Q4",
   "invested_cost": 970000,
   "unrealized_value": 970000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2025Q1",
   "invested_cost": 970000,
   "unrealized_value": 970000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2025Q2",
   "invested_cost": 970000,
   "unrealized_value": 970000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2025Q3",
   "invested_cost": 970000,
   "unrealized_value": 970000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2025Q4",
   "invested_cost": 970000,
   "unrealized_value": 4268000,
   "realized_value": 0,
   "gross_moic": 4.4,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2026Q1",
   "invested_cost": 970000,
   "unrealized_value": 4268000,
   "realized_value": 0,
   "gross_moic": 4.4,
   "method": "Latest priced round"
  },
  {
   "company_id": "c012",
   "quarter": "2026Q2",
   "invested_cost": 970000,
   "unrealized_value": 4151600,
   "realized_value": 0,
   "gross_moic": 4.28,
   "method": "Calibration"
  },
  {
   "company_id": "c013",
   "quarter": "2023Q2",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2023Q3",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2023Q4",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2024Q1",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2024Q2",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2024Q3",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2024Q4",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2025Q1",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2025Q2",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2025Q3",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2025Q4",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2026Q1",
   "invested_cost": 5740000,
   "unrealized_value": 5740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c013",
   "quarter": "2026Q2",
   "invested_cost": 5740000,
   "unrealized_value": 5854800,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Calibration"
  },
  {
   "company_id": "c014",
   "quarter": "2022Q1",
   "invested_cost": 1350000,
   "unrealized_value": 1350000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2022Q2",
   "invested_cost": 1350000,
   "unrealized_value": 1350000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2022Q3",
   "invested_cost": 1350000,
   "unrealized_value": 1350000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2022Q4",
   "invested_cost": 1350000,
   "unrealized_value": 1350000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2023Q1",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2023Q2",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2023Q3",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2023Q4",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2024Q1",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2024Q2",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2024Q3",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2024Q4",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2025Q1",
   "invested_cost": 1350000,
   "unrealized_value": 3915000,
   "realized_value": 0,
   "gross_moic": 2.9,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2025Q2",
   "invested_cost": 1350000,
   "unrealized_value": 3780000,
   "realized_value": 0,
   "gross_moic": 2.8,
   "method": "Calibration"
  },
  {
   "company_id": "c014",
   "quarter": "2025Q3",
   "invested_cost": 1350000,
   "unrealized_value": 3780000,
   "realized_value": 0,
   "gross_moic": 2.8,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2025Q4",
   "invested_cost": 1350000,
   "unrealized_value": 3780000,
   "realized_value": 0,
   "gross_moic": 2.8,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2026Q1",
   "invested_cost": 1350000,
   "unrealized_value": 3780000,
   "realized_value": 0,
   "gross_moic": 2.8,
   "method": "Latest priced round"
  },
  {
   "company_id": "c014",
   "quarter": "2026Q2",
   "invested_cost": 1350000,
   "unrealized_value": 3780000,
   "realized_value": 0,
   "gross_moic": 2.8,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2023Q2",
   "invested_cost": 2920000,
   "unrealized_value": 2920000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2023Q3",
   "invested_cost": 2920000,
   "unrealized_value": 2920000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2023Q4",
   "invested_cost": 2920000,
   "unrealized_value": 2920000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2024Q1",
   "invested_cost": 2920000,
   "unrealized_value": 2920000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2024Q2",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Calibration"
  },
  {
   "company_id": "c015",
   "quarter": "2024Q3",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2024Q4",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2025Q1",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2025Q2",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2025Q3",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2025Q4",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2026Q1",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c015",
   "quarter": "2026Q2",
   "invested_cost": 2920000,
   "unrealized_value": 3095200,
   "realized_value": 0,
   "gross_moic": 1.06,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2022Q1",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Calibration"
  },
  {
   "company_id": "c016",
   "quarter": "2022Q2",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2022Q3",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2022Q4",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2023Q1",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2023Q2",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2023Q3",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2023Q4",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2024Q1",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2024Q2",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2024Q3",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2024Q4",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2025Q1",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2025Q2",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2025Q3",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2025Q4",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2026Q1",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c016",
   "quarter": "2026Q2",
   "invested_cost": 1430000,
   "unrealized_value": 1558700,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2022Q1",
   "invested_cost": 3550000,
   "unrealized_value": 3621000,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Calibration"
  },
  {
   "company_id": "c017",
   "quarter": "2022Q2",
   "invested_cost": 3550000,
   "unrealized_value": 3621000,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2022Q3",
   "invested_cost": 3550000,
   "unrealized_value": 3621000,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2022Q4",
   "invested_cost": 3550000,
   "unrealized_value": 3621000,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2023Q1",
   "invested_cost": 3550000,
   "unrealized_value": 3621000,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2023Q2",
   "invested_cost": 3550000,
   "unrealized_value": 3301500,
   "realized_value": 0,
   "gross_moic": 0.93,
   "method": "Calibration"
  },
  {
   "company_id": "c017",
   "quarter": "2023Q3",
   "invested_cost": 3550000,
   "unrealized_value": 3301500,
   "realized_value": 0,
   "gross_moic": 0.93,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2023Q4",
   "invested_cost": 3550000,
   "unrealized_value": 3301500,
   "realized_value": 0,
   "gross_moic": 0.93,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2024Q1",
   "invested_cost": 3550000,
   "unrealized_value": 3301500,
   "realized_value": 0,
   "gross_moic": 0.93,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2024Q2",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2024Q3",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2024Q4",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2025Q1",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2025Q2",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2025Q3",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2025Q4",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2026Q1",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c017",
   "quarter": "2026Q2",
   "invested_cost": 3550000,
   "unrealized_value": 6177000,
   "realized_value": 0,
   "gross_moic": 1.74,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2022Q1",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2022Q2",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2022Q3",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2022Q4",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2023Q1",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2023Q2",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2023Q3",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2023Q4",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2024Q1",
   "invested_cost": 4990000,
   "unrealized_value": 4990000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2024Q2",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2024Q3",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2024Q4",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2025Q1",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2025Q2",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2025Q3",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2025Q4",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2026Q1",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c018",
   "quarter": "2026Q2",
   "invested_cost": 4990000,
   "unrealized_value": 19361200,
   "realized_value": 0,
   "gross_moic": 3.88,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2021Q2",
   "invested_cost": 4080000,
   "unrealized_value": 4080000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2021Q3",
   "invested_cost": 4080000,
   "unrealized_value": 4080000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2021Q4",
   "invested_cost": 4080000,
   "unrealized_value": 4080000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2022Q1",
   "invested_cost": 4080000,
   "unrealized_value": 4080000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2022Q2",
   "invested_cost": 4080000,
   "unrealized_value": 4080000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2022Q3",
   "invested_cost": 4080000,
   "unrealized_value": 4080000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2022Q4",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2023Q1",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2023Q2",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2023Q3",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2023Q4",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2024Q1",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Latest priced round"
  },
  {
   "company_id": "c019",
   "quarter": "2024Q2",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Market multiples"
  },
  {
   "company_id": "c019",
   "quarter": "2024Q3",
   "invested_cost": 4080000,
   "unrealized_value": 7140000,
   "realized_value": 0,
   "gross_moic": 1.75,
   "method": "Market multiples"
  },
  {
   "company_id": "c019",
   "quarter": "2024Q4",
   "invested_cost": 4080000,
   "unrealized_value": 6446400,
   "realized_value": 0,
   "gross_moic": 1.58,
   "method": "Calibration"
  },
  {
   "company_id": "c019",
   "quarter": "2025Q1",
   "invested_cost": 4080000,
   "unrealized_value": 6446400,
   "realized_value": 0,
   "gross_moic": 1.58,
   "method": "Market multiples"
  },
  {
   "company_id": "c019",
   "quarter": "2025Q2",
   "invested_cost": 4080000,
   "unrealized_value": 6446400,
   "realized_value": 0,
   "gross_moic": 1.58,
   "method": "Market multiples"
  },
  {
   "company_id": "c019",
   "quarter": "2025Q3",
   "invested_cost": 4080000,
   "unrealized_value": 6609600,
   "realized_value": 0,
   "gross_moic": 1.62,
   "method": "Calibration"
  },
  {
   "company_id": "c019",
   "quarter": "2025Q4",
   "invested_cost": 4080000,
   "unrealized_value": 6609600,
   "realized_value": 0,
   "gross_moic": 1.62,
   "method": "Market multiples"
  },
  {
   "company_id": "c019",
   "quarter": "2026Q1",
   "invested_cost": 4080000,
   "unrealized_value": 6609600,
   "realized_value": 0,
   "gross_moic": 1.62,
   "method": "Market multiples"
  },
  {
   "company_id": "c019",
   "quarter": "2026Q2",
   "invested_cost": 4080000,
   "unrealized_value": 6609600,
   "realized_value": 0,
   "gross_moic": 1.62,
   "method": "Market multiples"
  },
  {
   "company_id": "c020",
   "quarter": "2023Q4",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2024Q1",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2024Q2",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2024Q3",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2024Q4",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2025Q1",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2025Q2",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2025Q3",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2025Q4",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Latest priced round"
  },
  {
   "company_id": "c020",
   "quarter": "2026Q1",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Market multiples"
  },
  {
   "company_id": "c020",
   "quarter": "2026Q2",
   "invested_cost": 5120000,
   "unrealized_value": 10086400,
   "realized_value": 0,
   "gross_moic": 1.97,
   "method": "Market multiples"
  },
  {
   "company_id": "c021",
   "quarter": "2024Q2",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c021",
   "quarter": "2024Q3",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c021",
   "quarter": "2024Q4",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c021",
   "quarter": "2025Q1",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c021",
   "quarter": "2025Q2",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Calibration"
  },
  {
   "company_id": "c021",
   "quarter": "2025Q3",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c021",
   "quarter": "2025Q4",
   "invested_cost": 1010000,
   "unrealized_value": 1030200,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Calibration"
  },
  {
   "company_id": "c021",
   "quarter": "2026Q1",
   "invested_cost": 1010000,
   "unrealized_value": 1030200,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c021",
   "quarter": "2026Q2",
   "invested_cost": 1010000,
   "unrealized_value": 1212000,
   "realized_value": 0,
   "gross_moic": 1.2,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2023Q1",
   "invested_cost": 2250000,
   "unrealized_value": 2250000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2023Q2",
   "invested_cost": 2250000,
   "unrealized_value": 2250000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2023Q3",
   "invested_cost": 2250000,
   "unrealized_value": 2250000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2023Q4",
   "invested_cost": 2250000,
   "unrealized_value": 2250000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2024Q1",
   "invested_cost": 2250000,
   "unrealized_value": 2250000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2024Q2",
   "invested_cost": 2250000,
   "unrealized_value": 2205000,
   "realized_value": 0,
   "gross_moic": 0.98,
   "method": "Calibration"
  },
  {
   "company_id": "c022",
   "quarter": "2024Q3",
   "invested_cost": 2250000,
   "unrealized_value": 2205000,
   "realized_value": 0,
   "gross_moic": 0.98,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2024Q4",
   "invested_cost": 2250000,
   "unrealized_value": 3870000,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2025Q1",
   "invested_cost": 2250000,
   "unrealized_value": 3870000,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2025Q2",
   "invested_cost": 2250000,
   "unrealized_value": 3870000,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2025Q3",
   "invested_cost": 2250000,
   "unrealized_value": 3870000,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2025Q4",
   "invested_cost": 2250000,
   "unrealized_value": 3870000,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2026Q1",
   "invested_cost": 2250000,
   "unrealized_value": 3870000,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Latest priced round"
  },
  {
   "company_id": "c022",
   "quarter": "2026Q2",
   "invested_cost": 2250000,
   "unrealized_value": 3870000,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Latest priced round"
  },
  {
   "company_id": "c023",
   "quarter": "2021Q4",
   "invested_cost": 2260000,
   "unrealized_value": 2260000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c023",
   "quarter": "2022Q1",
   "invested_cost": 2260000,
   "unrealized_value": 2260000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c023",
   "quarter": "2022Q2",
   "invested_cost": 2260000,
   "unrealized_value": 2260000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c023",
   "quarter": "2022Q3",
   "invested_cost": 2260000,
   "unrealized_value": 2260000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c023",
   "quarter": "2022Q4",
   "invested_cost": 2260000,
   "unrealized_value": 2260000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c023",
   "quarter": "2023Q1",
   "invested_cost": 2260000,
   "unrealized_value": 2260000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c023",
   "quarter": "2023Q2",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2023Q3",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2023Q4",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2024Q1",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2024Q2",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2024Q3",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2024Q4",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2025Q1",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2025Q2",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2025Q3",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2025Q4",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2026Q1",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c023",
   "quarter": "2026Q2",
   "invested_cost": 2260000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c024",
   "quarter": "2024Q1",
   "invested_cost": 1240000,
   "unrealized_value": 1240000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2024Q2",
   "invested_cost": 1240000,
   "unrealized_value": 1240000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2024Q3",
   "invested_cost": 1240000,
   "unrealized_value": 1240000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2024Q4",
   "invested_cost": 1240000,
   "unrealized_value": 1240000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2025Q1",
   "invested_cost": 1240000,
   "unrealized_value": 1240000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2025Q2",
   "invested_cost": 1240000,
   "unrealized_value": 2938800,
   "realized_value": 0,
   "gross_moic": 2.37,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2025Q3",
   "invested_cost": 1240000,
   "unrealized_value": 3013200,
   "realized_value": 0,
   "gross_moic": 2.43,
   "method": "Calibration"
  },
  {
   "company_id": "c024",
   "quarter": "2025Q4",
   "invested_cost": 1240000,
   "unrealized_value": 3013200,
   "realized_value": 0,
   "gross_moic": 2.43,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2026Q1",
   "invested_cost": 1240000,
   "unrealized_value": 3013200,
   "realized_value": 0,
   "gross_moic": 2.43,
   "method": "Latest priced round"
  },
  {
   "company_id": "c024",
   "quarter": "2026Q2",
   "invested_cost": 1240000,
   "unrealized_value": 3298400,
   "realized_value": 0,
   "gross_moic": 2.66,
   "method": "Calibration"
  },
  {
   "company_id": "c025",
   "quarter": "2021Q4",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2022Q1",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2022Q2",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2022Q3",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2022Q4",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2023Q1",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2023Q2",
   "invested_cost": 4930000,
   "unrealized_value": 4930000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2023Q3",
   "invested_cost": 4930000,
   "unrealized_value": 11536200,
   "realized_value": 0,
   "gross_moic": 2.34,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2023Q4",
   "invested_cost": 4930000,
   "unrealized_value": 11536200,
   "realized_value": 0,
   "gross_moic": 2.34,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2024Q1",
   "invested_cost": 4930000,
   "unrealized_value": 11536200,
   "realized_value": 0,
   "gross_moic": 2.34,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2024Q2",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Calibration"
  },
  {
   "company_id": "c025",
   "quarter": "2024Q3",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2024Q4",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2025Q1",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2025Q2",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2025Q3",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2025Q4",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2026Q1",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c025",
   "quarter": "2026Q2",
   "invested_cost": 4930000,
   "unrealized_value": 10895300,
   "realized_value": 0,
   "gross_moic": 2.21,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2022Q4",
   "invested_cost": 1320000,
   "unrealized_value": 1320000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2023Q1",
   "invested_cost": 1320000,
   "unrealized_value": 1346400,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Calibration"
  },
  {
   "company_id": "c026",
   "quarter": "2023Q2",
   "invested_cost": 1320000,
   "unrealized_value": 1346400,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2023Q3",
   "invested_cost": 1320000,
   "unrealized_value": 1346400,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2023Q4",
   "invested_cost": 1320000,
   "unrealized_value": 1346400,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2024Q1",
   "invested_cost": 1320000,
   "unrealized_value": 1346400,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2024Q2",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2024Q3",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2024Q4",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2025Q1",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2025Q2",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2025Q3",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2025Q4",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2026Q1",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c026",
   "quarter": "2026Q2",
   "invested_cost": 1320000,
   "unrealized_value": 3577200,
   "realized_value": 0,
   "gross_moic": 2.71,
   "method": "Latest priced round"
  },
  {
   "company_id": "c027",
   "quarter": "2024Q2",
   "invested_cost": 1060000,
   "unrealized_value": 1060000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c027",
   "quarter": "2024Q3",
   "invested_cost": 1060000,
   "unrealized_value": 1060000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c027",
   "quarter": "2024Q4",
   "invested_cost": 1060000,
   "unrealized_value": 1060000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c027",
   "quarter": "2025Q1",
   "invested_cost": 1060000,
   "unrealized_value": 1060000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c027",
   "quarter": "2025Q2",
   "invested_cost": 1060000,
   "unrealized_value": 1038800,
   "realized_value": 0,
   "gross_moic": 0.98,
   "method": "Calibration"
  },
  {
   "company_id": "c027",
   "quarter": "2025Q3",
   "invested_cost": 1060000,
   "unrealized_value": 1038800,
   "realized_value": 0,
   "gross_moic": 0.98,
   "method": "Latest priced round"
  },
  {
   "company_id": "c027",
   "quarter": "2025Q4",
   "invested_cost": 1060000,
   "unrealized_value": 1070600,
   "realized_value": 0,
   "gross_moic": 1.01,
   "method": "Calibration"
  },
  {
   "company_id": "c027",
   "quarter": "2026Q1",
   "invested_cost": 1060000,
   "unrealized_value": 1155400,
   "realized_value": 0,
   "gross_moic": 1.09,
   "method": "Calibration"
  },
  {
   "company_id": "c027",
   "quarter": "2026Q2",
   "invested_cost": 1060000,
   "unrealized_value": 1091800,
   "realized_value": 0,
   "gross_moic": 1.03,
   "method": "Calibration"
  },
  {
   "company_id": "c028",
   "quarter": "2023Q1",
   "invested_cost": 2740000,
   "unrealized_value": 2740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2023Q2",
   "invested_cost": 2740000,
   "unrealized_value": 2740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2023Q3",
   "invested_cost": 2740000,
   "unrealized_value": 2740000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2023Q4",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2024Q1",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2024Q2",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2024Q3",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2024Q4",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2025Q1",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2025Q2",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2025Q3",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2025Q4",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2026Q1",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c028",
   "quarter": "2026Q2",
   "invested_cost": 2740000,
   "unrealized_value": 6740400,
   "realized_value": 0,
   "gross_moic": 2.46,
   "method": "Latest priced round"
  },
  {
   "company_id": "c029",
   "quarter": "2025Q1",
   "invested_cost": 770000,
   "unrealized_value": 847000,
   "realized_value": 0,
   "gross_moic": 1.1,
   "method": "Calibration"
  },
  {
   "company_id": "c029",
   "quarter": "2025Q2",
   "invested_cost": 770000,
   "unrealized_value": 847000,
   "realized_value": 0,
   "gross_moic": 1.1,
   "method": "Latest priced round"
  },
  {
   "company_id": "c029",
   "quarter": "2025Q3",
   "invested_cost": 770000,
   "unrealized_value": 847000,
   "realized_value": 0,
   "gross_moic": 1.1,
   "method": "Latest priced round"
  },
  {
   "company_id": "c029",
   "quarter": "2025Q4",
   "invested_cost": 770000,
   "unrealized_value": 1971200,
   "realized_value": 0,
   "gross_moic": 2.56,
   "method": "Latest priced round"
  },
  {
   "company_id": "c029",
   "quarter": "2026Q1",
   "invested_cost": 770000,
   "unrealized_value": 1971200,
   "realized_value": 0,
   "gross_moic": 2.56,
   "method": "Latest priced round"
  },
  {
   "company_id": "c029",
   "quarter": "2026Q2",
   "invested_cost": 770000,
   "unrealized_value": 1971200,
   "realized_value": 0,
   "gross_moic": 2.56,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2022Q4",
   "invested_cost": 3770000,
   "unrealized_value": 3770000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2023Q1",
   "invested_cost": 3770000,
   "unrealized_value": 3770000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2023Q2",
   "invested_cost": 3770000,
   "unrealized_value": 3770000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2023Q3",
   "invested_cost": 3770000,
   "unrealized_value": 3770000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2023Q4",
   "invested_cost": 3770000,
   "unrealized_value": 3770000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2024Q1",
   "invested_cost": 3770000,
   "unrealized_value": 3770000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2024Q2",
   "invested_cost": 3770000,
   "unrealized_value": 7728500,
   "realized_value": 0,
   "gross_moic": 2.05,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2024Q3",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Calibration"
  },
  {
   "company_id": "c030",
   "quarter": "2024Q4",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2025Q1",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2025Q2",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2025Q3",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2025Q4",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2026Q1",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Latest priced round"
  },
  {
   "company_id": "c030",
   "quarter": "2026Q2",
   "invested_cost": 3770000,
   "unrealized_value": 8256300,
   "realized_value": 0,
   "gross_moic": 2.19,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2023Q1",
   "invested_cost": 1670000,
   "unrealized_value": 1670000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2023Q2",
   "invested_cost": 1670000,
   "unrealized_value": 1670000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2023Q3",
   "invested_cost": 1670000,
   "unrealized_value": 1670000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2023Q4",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2024Q1",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2024Q2",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2024Q3",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2024Q4",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2025Q1",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2025Q2",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2025Q3",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2025Q4",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2026Q1",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c031",
   "quarter": "2026Q2",
   "invested_cost": 1670000,
   "unrealized_value": 4475600,
   "realized_value": 0,
   "gross_moic": 2.68,
   "method": "Latest priced round"
  },
  {
   "company_id": "c032",
   "quarter": "2024Q1",
   "invested_cost": 7170000,
   "unrealized_value": 7170000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c032",
   "quarter": "2024Q2",
   "invested_cost": 7170000,
   "unrealized_value": 7170000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c032",
   "quarter": "2024Q3",
   "invested_cost": 7170000,
   "unrealized_value": 7170000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c032",
   "quarter": "2024Q4",
   "invested_cost": 7170000,
   "unrealized_value": 7170000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c032",
   "quarter": "2025Q1",
   "invested_cost": 7170000,
   "unrealized_value": 7170000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c032",
   "quarter": "2025Q2",
   "invested_cost": 7170000,
   "unrealized_value": 7170000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c032",
   "quarter": "2025Q3",
   "invested_cost": 7170000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c032",
   "quarter": "2025Q4",
   "invested_cost": 7170000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c032",
   "quarter": "2026Q1",
   "invested_cost": 7170000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c032",
   "quarter": "2026Q2",
   "invested_cost": 7170000,
   "unrealized_value": 0,
   "realized_value": 0,
   "gross_moic": 0.0,
   "method": "Written off"
  },
  {
   "company_id": "c033",
   "quarter": "2023Q2",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2023Q3",
   "invested_cost": 4140000,
   "unrealized_value": 4471200,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Calibration"
  },
  {
   "company_id": "c033",
   "quarter": "2023Q4",
   "invested_cost": 4140000,
   "unrealized_value": 4471200,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2024Q1",
   "invested_cost": 4140000,
   "unrealized_value": 4471200,
   "realized_value": 0,
   "gross_moic": 1.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2024Q2",
   "invested_cost": 4140000,
   "unrealized_value": 4595400,
   "realized_value": 0,
   "gross_moic": 1.11,
   "method": "Calibration"
  },
  {
   "company_id": "c033",
   "quarter": "2024Q3",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Calibration"
  },
  {
   "company_id": "c033",
   "quarter": "2024Q4",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2025Q1",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2025Q2",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2025Q3",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2025Q4",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2026Q1",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c033",
   "quarter": "2026Q2",
   "invested_cost": 4140000,
   "unrealized_value": 4140000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c034",
   "quarter": "2024Q4",
   "invested_cost": 2340000,
   "unrealized_value": 2340000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c034",
   "quarter": "2025Q1",
   "invested_cost": 2340000,
   "unrealized_value": 2340000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c034",
   "quarter": "2025Q2",
   "invested_cost": 2340000,
   "unrealized_value": 2340000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c034",
   "quarter": "2025Q3",
   "invested_cost": 2340000,
   "unrealized_value": 2340000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c034",
   "quarter": "2025Q4",
   "invested_cost": 2340000,
   "unrealized_value": 3978000,
   "realized_value": 0,
   "gross_moic": 1.7,
   "method": "Latest priced round"
  },
  {
   "company_id": "c034",
   "quarter": "2026Q1",
   "invested_cost": 2340000,
   "unrealized_value": 3978000,
   "realized_value": 0,
   "gross_moic": 1.7,
   "method": "Latest priced round"
  },
  {
   "company_id": "c034",
   "quarter": "2026Q2",
   "invested_cost": 2340000,
   "unrealized_value": 4024800,
   "realized_value": 0,
   "gross_moic": 1.72,
   "method": "Calibration"
  },
  {
   "company_id": "c035",
   "quarter": "2023Q2",
   "invested_cost": 1420000,
   "unrealized_value": 1476800,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Calibration"
  },
  {
   "company_id": "c035",
   "quarter": "2023Q3",
   "invested_cost": 1420000,
   "unrealized_value": 1476800,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2023Q4",
   "invested_cost": 1420000,
   "unrealized_value": 1476800,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2024Q1",
   "invested_cost": 1420000,
   "unrealized_value": 1476800,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2024Q2",
   "invested_cost": 1420000,
   "unrealized_value": 1476800,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2024Q3",
   "invested_cost": 1420000,
   "unrealized_value": 1476800,
   "realized_value": 0,
   "gross_moic": 1.04,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2024Q4",
   "invested_cost": 1420000,
   "unrealized_value": 5353400,
   "realized_value": 0,
   "gross_moic": 3.77,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2025Q1",
   "invested_cost": 1420000,
   "unrealized_value": 5353400,
   "realized_value": 0,
   "gross_moic": 3.77,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2025Q2",
   "invested_cost": 1420000,
   "unrealized_value": 5353400,
   "realized_value": 0,
   "gross_moic": 3.77,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2025Q3",
   "invested_cost": 1420000,
   "unrealized_value": 5353400,
   "realized_value": 0,
   "gross_moic": 3.77,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2025Q4",
   "invested_cost": 1420000,
   "unrealized_value": 5353400,
   "realized_value": 0,
   "gross_moic": 3.77,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2026Q1",
   "invested_cost": 1420000,
   "unrealized_value": 5353400,
   "realized_value": 0,
   "gross_moic": 3.77,
   "method": "Latest priced round"
  },
  {
   "company_id": "c035",
   "quarter": "2026Q2",
   "invested_cost": 1420000,
   "unrealized_value": 5353400,
   "realized_value": 0,
   "gross_moic": 3.77,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2024Q2",
   "invested_cost": 3780000,
   "unrealized_value": 3780000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2024Q3",
   "invested_cost": 3780000,
   "unrealized_value": 3780000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2024Q4",
   "invested_cost": 3780000,
   "unrealized_value": 6161400,
   "realized_value": 0,
   "gross_moic": 1.63,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2025Q1",
   "invested_cost": 3780000,
   "unrealized_value": 6161400,
   "realized_value": 0,
   "gross_moic": 1.63,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2025Q2",
   "invested_cost": 3780000,
   "unrealized_value": 6161400,
   "realized_value": 0,
   "gross_moic": 1.63,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2025Q3",
   "invested_cost": 3780000,
   "unrealized_value": 6161400,
   "realized_value": 0,
   "gross_moic": 1.63,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2025Q4",
   "invested_cost": 3780000,
   "unrealized_value": 5821200,
   "realized_value": 0,
   "gross_moic": 1.54,
   "method": "Calibration"
  },
  {
   "company_id": "c036",
   "quarter": "2026Q1",
   "invested_cost": 3780000,
   "unrealized_value": 5821200,
   "realized_value": 0,
   "gross_moic": 1.54,
   "method": "Latest priced round"
  },
  {
   "company_id": "c036",
   "quarter": "2026Q2",
   "invested_cost": 3780000,
   "unrealized_value": 5821200,
   "realized_value": 0,
   "gross_moic": 1.54,
   "method": "Market multiples"
  },
  {
   "company_id": "c037",
   "quarter": "2025Q3",
   "invested_cost": 2230000,
   "unrealized_value": 2230000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c037",
   "quarter": "2025Q4",
   "invested_cost": 2230000,
   "unrealized_value": 2230000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c037",
   "quarter": "2026Q1",
   "invested_cost": 2230000,
   "unrealized_value": 2230000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c037",
   "quarter": "2026Q2",
   "invested_cost": 2230000,
   "unrealized_value": 2274600,
   "realized_value": 0,
   "gross_moic": 1.02,
   "method": "Calibration"
  },
  {
   "company_id": "c038",
   "quarter": "2026Q1",
   "invested_cost": 830000,
   "unrealized_value": 830000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c038",
   "quarter": "2026Q2",
   "invested_cost": 830000,
   "unrealized_value": 830000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c039",
   "quarter": "2025Q4",
   "invested_cost": 1210000,
   "unrealized_value": 1210000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c039",
   "quarter": "2026Q1",
   "invested_cost": 1210000,
   "unrealized_value": 1210000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c039",
   "quarter": "2026Q2",
   "invested_cost": 1210000,
   "unrealized_value": 1210000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c040",
   "quarter": "2026Q1",
   "invested_cost": 790000,
   "unrealized_value": 790000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c040",
   "quarter": "2026Q2",
   "invested_cost": 790000,
   "unrealized_value": 790000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c041",
   "quarter": "2025Q4",
   "invested_cost": 2960000,
   "unrealized_value": 2960000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c041",
   "quarter": "2026Q1",
   "invested_cost": 2960000,
   "unrealized_value": 2960000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c041",
   "quarter": "2026Q2",
   "invested_cost": 2960000,
   "unrealized_value": 2960000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c042",
   "quarter": "2025Q4",
   "invested_cost": 940000,
   "unrealized_value": 940000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c042",
   "quarter": "2026Q1",
   "invested_cost": 940000,
   "unrealized_value": 940000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c042",
   "quarter": "2026Q2",
   "invested_cost": 940000,
   "unrealized_value": 940000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c043",
   "quarter": "2024Q4",
   "invested_cost": 5570000,
   "unrealized_value": 5570000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c043",
   "quarter": "2025Q1",
   "invested_cost": 5570000,
   "unrealized_value": 5570000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c043",
   "quarter": "2025Q2",
   "invested_cost": 5570000,
   "unrealized_value": 5570000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c043",
   "quarter": "2025Q3",
   "invested_cost": 5570000,
   "unrealized_value": 5570000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c043",
   "quarter": "2025Q4",
   "invested_cost": 5570000,
   "unrealized_value": 5570000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c043",
   "quarter": "2026Q1",
   "invested_cost": 5570000,
   "unrealized_value": 5570000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c043",
   "quarter": "2026Q2",
   "invested_cost": 5570000,
   "unrealized_value": 11585600,
   "realized_value": 0,
   "gross_moic": 2.08,
   "method": "Latest priced round"
  },
  {
   "company_id": "c044",
   "quarter": "2025Q1",
   "invested_cost": 1290000,
   "unrealized_value": 1290000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c044",
   "quarter": "2025Q2",
   "invested_cost": 1290000,
   "unrealized_value": 1290000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c044",
   "quarter": "2025Q3",
   "invested_cost": 1290000,
   "unrealized_value": 1419000,
   "realized_value": 0,
   "gross_moic": 1.1,
   "method": "Calibration"
  },
  {
   "company_id": "c044",
   "quarter": "2025Q4",
   "invested_cost": 1290000,
   "unrealized_value": 1419000,
   "realized_value": 0,
   "gross_moic": 1.1,
   "method": "Latest priced round"
  },
  {
   "company_id": "c044",
   "quarter": "2026Q1",
   "invested_cost": 1290000,
   "unrealized_value": 1419000,
   "realized_value": 0,
   "gross_moic": 1.1,
   "method": "Latest priced round"
  },
  {
   "company_id": "c044",
   "quarter": "2026Q2",
   "invested_cost": 1290000,
   "unrealized_value": 1419000,
   "realized_value": 0,
   "gross_moic": 1.1,
   "method": "Latest priced round"
  },
  {
   "company_id": "c045",
   "quarter": "2026Q2",
   "invested_cost": 1110000,
   "unrealized_value": 1110000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c046",
   "quarter": "2025Q2",
   "invested_cost": 1390000,
   "unrealized_value": 1390000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c046",
   "quarter": "2025Q3",
   "invested_cost": 1390000,
   "unrealized_value": 1390000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c046",
   "quarter": "2025Q4",
   "invested_cost": 1390000,
   "unrealized_value": 1390000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c046",
   "quarter": "2026Q1",
   "invested_cost": 1390000,
   "unrealized_value": 1390000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c046",
   "quarter": "2026Q2",
   "invested_cost": 1390000,
   "unrealized_value": 1390000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c047",
   "quarter": "2025Q3",
   "invested_cost": 3160000,
   "unrealized_value": 3160000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c047",
   "quarter": "2025Q4",
   "invested_cost": 3160000,
   "unrealized_value": 3160000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c047",
   "quarter": "2026Q1",
   "invested_cost": 3160000,
   "unrealized_value": 5372000,
   "realized_value": 0,
   "gross_moic": 1.7,
   "method": "Latest priced round"
  },
  {
   "company_id": "c047",
   "quarter": "2026Q2",
   "invested_cost": 3160000,
   "unrealized_value": 5372000,
   "realized_value": 0,
   "gross_moic": 1.7,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2023Q1",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2023Q2",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2023Q3",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2023Q4",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2024Q1",
   "invested_cost": 5120000,
   "unrealized_value": 5120000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2024Q2",
   "invested_cost": 5120000,
   "unrealized_value": 8294400,
   "realized_value": 0,
   "gross_moic": 1.62,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2024Q3",
   "invested_cost": 5120000,
   "unrealized_value": 8294400,
   "realized_value": 0,
   "gross_moic": 1.62,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2024Q4",
   "invested_cost": 5120000,
   "unrealized_value": 8294400,
   "realized_value": 0,
   "gross_moic": 1.62,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2025Q1",
   "invested_cost": 5120000,
   "unrealized_value": 8140800,
   "realized_value": 0,
   "gross_moic": 1.59,
   "method": "Calibration"
  },
  {
   "company_id": "c048",
   "quarter": "2025Q2",
   "invested_cost": 5120000,
   "unrealized_value": 8140800,
   "realized_value": 0,
   "gross_moic": 1.59,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2025Q3",
   "invested_cost": 5120000,
   "unrealized_value": 0,
   "realized_value": 9830400,
   "gross_moic": 1.92,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2025Q4",
   "invested_cost": 5120000,
   "unrealized_value": 0,
   "realized_value": 9830400,
   "gross_moic": 1.92,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2026Q1",
   "invested_cost": 5120000,
   "unrealized_value": 0,
   "realized_value": 9830400,
   "gross_moic": 1.92,
   "method": "Latest priced round"
  },
  {
   "company_id": "c048",
   "quarter": "2026Q2",
   "invested_cost": 5120000,
   "unrealized_value": 0,
   "realized_value": 9830400,
   "gross_moic": 1.92,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2023Q2",
   "invested_cost": 1170000,
   "unrealized_value": 1170000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2023Q3",
   "invested_cost": 1170000,
   "unrealized_value": 1228500,
   "realized_value": 0,
   "gross_moic": 1.05,
   "method": "Calibration"
  },
  {
   "company_id": "c049",
   "quarter": "2023Q4",
   "invested_cost": 1170000,
   "unrealized_value": 1228500,
   "realized_value": 0,
   "gross_moic": 1.05,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2024Q1",
   "invested_cost": 1170000,
   "unrealized_value": 2351700,
   "realized_value": 0,
   "gross_moic": 2.01,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2024Q2",
   "invested_cost": 1170000,
   "unrealized_value": 2351700,
   "realized_value": 0,
   "gross_moic": 2.01,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2024Q3",
   "invested_cost": 1170000,
   "unrealized_value": 2351700,
   "realized_value": 0,
   "gross_moic": 2.01,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2024Q4",
   "invested_cost": 1170000,
   "unrealized_value": 2351700,
   "realized_value": 0,
   "gross_moic": 2.01,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2025Q1",
   "invested_cost": 1170000,
   "unrealized_value": 2351700,
   "realized_value": 0,
   "gross_moic": 2.01,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2025Q2",
   "invested_cost": 1170000,
   "unrealized_value": 0,
   "realized_value": 2796300,
   "gross_moic": 2.39,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2025Q3",
   "invested_cost": 1170000,
   "unrealized_value": 0,
   "realized_value": 2796300,
   "gross_moic": 2.39,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2025Q4",
   "invested_cost": 1170000,
   "unrealized_value": 0,
   "realized_value": 2796300,
   "gross_moic": 2.39,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2026Q1",
   "invested_cost": 1170000,
   "unrealized_value": 0,
   "realized_value": 2796300,
   "gross_moic": 2.39,
   "method": "Latest priced round"
  },
  {
   "company_id": "c049",
   "quarter": "2026Q2",
   "invested_cost": 1170000,
   "unrealized_value": 0,
   "realized_value": 2796300,
   "gross_moic": 2.39,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2022Q3",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2022Q4",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2023Q1",
   "invested_cost": 1010000,
   "unrealized_value": 1010000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2023Q2",
   "invested_cost": 1010000,
   "unrealized_value": 919100,
   "realized_value": 0,
   "gross_moic": 0.91,
   "method": "Calibration"
  },
  {
   "company_id": "c050",
   "quarter": "2023Q3",
   "invested_cost": 1010000,
   "unrealized_value": 919100,
   "realized_value": 0,
   "gross_moic": 0.91,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2023Q4",
   "invested_cost": 1010000,
   "unrealized_value": 919100,
   "realized_value": 0,
   "gross_moic": 0.91,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2024Q1",
   "invested_cost": 1010000,
   "unrealized_value": 1626100,
   "realized_value": 0,
   "gross_moic": 1.61,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2024Q2",
   "invested_cost": 1010000,
   "unrealized_value": 1626100,
   "realized_value": 0,
   "gross_moic": 1.61,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2024Q3",
   "invested_cost": 1010000,
   "unrealized_value": 1626100,
   "realized_value": 0,
   "gross_moic": 1.61,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2024Q4",
   "invested_cost": 1010000,
   "unrealized_value": 0,
   "realized_value": 1181700,
   "gross_moic": 1.17,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2025Q1",
   "invested_cost": 1010000,
   "unrealized_value": 0,
   "realized_value": 1181700,
   "gross_moic": 1.17,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2025Q2",
   "invested_cost": 1010000,
   "unrealized_value": 0,
   "realized_value": 1181700,
   "gross_moic": 1.17,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2025Q3",
   "invested_cost": 1010000,
   "unrealized_value": 0,
   "realized_value": 1181700,
   "gross_moic": 1.17,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2025Q4",
   "invested_cost": 1010000,
   "unrealized_value": 0,
   "realized_value": 1181700,
   "gross_moic": 1.17,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2026Q1",
   "invested_cost": 1010000,
   "unrealized_value": 0,
   "realized_value": 1181700,
   "gross_moic": 1.17,
   "method": "Latest priced round"
  },
  {
   "company_id": "c050",
   "quarter": "2026Q2",
   "invested_cost": 1010000,
   "unrealized_value": 0,
   "realized_value": 1181700,
   "gross_moic": 1.17,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2024Q1",
   "invested_cost": 1540000,
   "unrealized_value": 1540000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2024Q2",
   "invested_cost": 1540000,
   "unrealized_value": 1540000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2024Q3",
   "invested_cost": 1540000,
   "unrealized_value": 1540000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2024Q4",
   "invested_cost": 1540000,
   "unrealized_value": 1540000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2025Q1",
   "invested_cost": 1540000,
   "unrealized_value": 1540000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2025Q2",
   "invested_cost": 1540000,
   "unrealized_value": 1540000,
   "realized_value": 0,
   "gross_moic": 1.0,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2025Q3",
   "invested_cost": 1540000,
   "unrealized_value": 3711400,
   "realized_value": 0,
   "gross_moic": 2.41,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2025Q4",
   "invested_cost": 1540000,
   "unrealized_value": 3711400,
   "realized_value": 0,
   "gross_moic": 2.41,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2026Q1",
   "invested_cost": 1540000,
   "unrealized_value": 0,
   "realized_value": 3280200,
   "gross_moic": 2.13,
   "method": "Latest priced round"
  },
  {
   "company_id": "c051",
   "quarter": "2026Q2",
   "invested_cost": 1540000,
   "unrealized_value": 0,
   "realized_value": 3280200,
   "gross_moic": 2.13,
   "method": "Latest priced round"
  }
 ]
};

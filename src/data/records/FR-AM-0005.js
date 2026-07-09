/**
 * FR-AM-0005 — Room-Temperature Superconductivity — Reproducibility Under Laboratory Conditions
 * Programme: PROG-AM
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AM_0005 = {
  id: "FR-AM-0005",
  programme: "PROG-AM",

  claim: {
    statement: "A room-temperature superconductor can be produced under reproducible laboratory conditions.",
    shortLabel: "Room-Temperature Superconductivity — Reproducibility Under Laboratory Conditions",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Ranga Dias / University of Rochester — carbonaceous sulfur hydride and lutetium hydride claims",
      description: "Ranga Dias and collaborators publish a series of high-profile papers in Nature claiming near-room-temperature superconductivity: carbonaceous sulfur hydride (CSH) at 288K under high pressure (2020), and lutetium hydride (LuH) at 294K under moderate pressure (2023). Both papers generate immediate community interest as the highest reported superconducting transition temperatures. Both papers are subsequently retracted by Nature following investigations into data manipulation — baseline subtraction irregularities in the 2020 paper and fabricated resistance curves in the 2023 paper. The retractions are not merely non-reproductions; they are findings of research misconduct. For the reproducibility claim, this is the most directly relevant evidence: the two most prominent recent room-temperature superconductivity claims were not reproducible because the underlying data was falsified.",
      vectors: ["contesting--data-manipulation-both-papers-retracted"],
      date: "2020–23",
    },
    {
      id: "IN-002",
      qualifiedEvent: "LK-99 — rapid global replication attempt and failure",
      description: "A South Korean team (Lee et al.) posts a preprint claiming LK-99 (a lead-apatite copper-substituted material) is a room-temperature, ambient-pressure superconductor. The claim generates extraordinary attention: within weeks, over forty independent research groups worldwide attempt replication. Initial videos showing apparent levitation (Meissner effect) circulate widely. Systematic replication results emerge rapidly and uniformly: no group confirms superconductivity. The apparent levitation is explained by ferromagnetic impurities producing partial levitation without superconductivity. Resistance measurements show no zero-resistance state. Multiple groups including Sinéad Griffin (Lawrence Berkeley) and teams in China, Germany, and the US publish detailed analyses showing LK-99 is not a superconductor. The LK-99 episode is the most thoroughly and rapidly refuted room-temperature superconductivity claim in history. The speed and completeness of the refutation demonstrates that reproducibility testing can work effectively when the community mobilises — and in this case, it produced a decisive negative result within weeks.",
      vectors: ["contesting--global-replication-attempt-definitive-null"],
      date: "Jul–Aug 2023",
    },
    {
      id: "IN-003",
      qualifiedEvent: "High-pressure hydride superconductors — confirmed reproducibility below room temperature",
      description: "A class of hydrogen-rich materials under extreme pressure (200–300 GPa) has produced confirmed, reproduced superconductivity at progressively higher temperatures: hydrogen sulfide (H₃S) at 203K (Drozdov et al. 2015, reproduced by multiple groups), lanthanum hydride (LaH₁₀) at 250–260K (Drozdov et al. 2019, reproduced by Somayazulu et al. 2019 independently). These results are the only confirmed reproduced superconductors above 200K. They are relevant to the claim as evidence of the near-approach: superconductivity has been reproducibly achieved at temperatures approaching but not reaching room temperature (294K at ambient pressure, or 273K as a practical threshold). The record notes these as partial supportive evidence: reproducibility has been demonstrated in the approach to room temperature, but not at room temperature under any conditions, and not at ambient pressure.",
      vectors: ["partial--reproducible-but-below-threshold"],
      date: "1968–2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Community methodological response — reproducibility standards tighten",
      description: "Following the Dias retractions and the LK-99 episode, the superconductivity research community explicitly strengthens reproducibility standards. Nature and Physical Review Letters issue editorial guidance on data requirements for superconductivity claims. The community consensus crystallises around a minimum evidence threshold: zero resistance measurement, Meissner effect (magnetic flux expulsion), and specific heat anomaly — all three required, and all three subject to independent reproduction. This is institutionally significant for the reproducibility claim: the community is actively raising its own bar, which makes future false positives harder but also makes genuine reproducibility, if achieved, more credible. This is an anticipatory institutional act (third occurrence of this evidence type in the corpus) — the community acts to change the conditions for future evidence before that evidence exists.",
      vectors: ["neutral--standard-tightening-anticipatory"],
      date: "2023",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Post-LK-99 landscape — no credible room-temperature superconductivity claim survives",
      description: "As of 2024, no room-temperature superconductivity claim has survived independent replication under the community's current evidence standards. The highest confirmed reproduced superconducting temperature remains in the high-pressure hydride family, substantially below room temperature. Multiple claims that circulated in 2023–24 as potential candidates (various hydride and organic systems) have not produced confirmed independent reproductions. The absence of a surviving claim is not merely absence of evidence — it is the result of active, systematic replication efforts that have returned null results across a broad range of materials and conditions. The field is not waiting for someone to try; it has tried repeatedly and found nothing.",
      vectors: ["contesting--systematic-null-after-active-search"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "2025–26 activity — nickelate stabilisation, a new high-pressure record claim, and a field-wide roadmap",
      description: "The claim's bottom line is unchanged. The activity itself is the evidence worth logging: the field has not gone quiet since the 2024 null result, and the Observatory's record had not reflected that. Activity in the field continues without producing a surviving claim. In February 2025, researchers at SLAC and Stanford report stabilising a nickelate superconductor at ambient pressure for the first time — a materials-science result of genuine interest, but at a transition temperature far below room temperature; it bears on the broader programme of finding ambient-pressure superconductors, not on this claim's threshold. In November 2025, a Chinese group reports a new high-pressure record of 298K (just above the conventional room-temperature threshold) in a lanthanum-scandium hydride compressed to 250–260 GPa — pressures comparable to Earth's core, with no path to device-relevant conditions, and not yet independently replicated at time of writing. In March 2026, a multi-institutional team publishes a coordinated research roadmap in PNAS arguing the barrier to room-temperature superconductivity is engineering and materials science, not physics. None of this constitutes a surviving claim under the tightened standard (INST-004): no result reports zero resistance, Meissner effect, and specific-heat anomaly together, confirmed independently, at conditions resembling laboratory practicality.",
      vectors: ["neutral--field-activity-continues-no-surviving-claim"],
      date: "2025–26",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "The claim has not been satisfied. No room-temperature superconductor has been reproduced under independent laboratory conditions to the community's current evidence standards. The two most prominent recent claims (Dias, LK-99) both failed replication — one through misconduct findings, one through rapid systematic null results from over forty independent groups. The confirmed high-pressure hydride results (INST-003) demonstrate that reproducible superconductivity approaching room temperature is achievable under extreme pressure, but not at room temperature or ambient pressure, and no material has met the community's evidence standard — zero resistance, Meissner effect, and specific heat anomaly, all independently confirmed — at conditions resembling laboratory practicality. The pressure state is COLLAPSED: the claim has been tested repeatedly, most recently and most rapidly in the LK-99 episode (INST-002), and no candidate has survived independent replication. The record remains open to reopening under AT-001 should a future material meet the tightened standard.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "The claim remains unsatisfied and the pressure state remains COLLAPSED. IN-006 documents that the field did not go quiet after the 2024 null result — a nickelate stabilisation at ambient pressure (Feb 2025), a new 298K high-pressure record (Nov 2025, unreplicated), and a March 2026 field-wide research roadmap all represent real activity — but none meets AT-001's reopening condition: zero resistance, Meissner effect, and specific-heat anomaly, confirmed independently, under the community's tightened standard. The November 2025 result is the closest superficial match to a 'room-temperature' headline since LK-99, and is explicitly logged here so that the record does not appear to have missed it; on examination it fails the same threshold IN-001 through IN-003 already established — high pressure, no independent confirmation, no full evidentiary set. This assessment exists to confirm the COLLAPSED state remains correct under current evidence, not to revise it. The record's status remains CLOSED.",
      assessorNote: "Sourced from: SLAC/Stanford nickelate result via Physics World and ScienceDaily coverage (Feb 2025, reported through 2025–26); La-Sc-H 298K claim via Physics World coverage of an arXiv preprint (Nov 2025) — not independently replicated, and the arXiv preprint itself not directly read; PNAS roadmap referenced via secondary summary (March 2026), primary paper not directly read. Given this record's COLLAPSED/CLOSED status and the high public-interest sensitivity of room-temperature superconductivity claims, primary-source verification of the 298K claim in particular is recommended before this assessment is cited as authoritative.",
    }
  ],

  mechanisms: [
    {
      id: "CM-001",
      type: "COLLAPSE MECHANISM",
      description: "Incentive-driven premature announcement. The Dias retractions and the LK-99 episode share a structural feature: both were announced before rigorous independent replication had been attempted, under conditions of high reputational and commercial incentive. Dias was competing for priority in a high-prestige field; the LK-99 team posted a preprint without peer review. In both cases, the incentive str",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Sample sensitivity and synthesis irreproducibility. Superconducting properties in complex materials are highly sensitive to synthesis conditions: stoichiometry, impurity levels, grain boundaries, and thermal history all affect whether a material exhibits superconductivity and at what temperature. This creates a structural resistance to reproducibility independent of any intent to deceive: even a g",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "A result surviving the tightened community standard. The community has now established a higher and more explicit reproducibility standard (INST-004). If a future material produces zero resistance, Meissner effect, and specific heat anomaly — all three confirmed by independent groups following published protocols — the claim would reopen. The tightened standard makes future false positives harder ",
    }
  ],

  lineage: {
    items: [
    { year: "1986–2010s", text: "High-temperature superconductor discovery and mechanism debate. Cuprate superconductors are discovered and reproduced; the mechanism remains unresolved (FR-AM-0003). The community establishes that superconductivity above 77K is achievable and reproducible. Room temperature remains a theoretical goal" },
    { year: "2015–19", text: "High-pressure hydrides — confirmed reproducibility approaching room temperature. Hydrogen sulfide at 203K and lanthanum hydride at 250–260K are reproduced independently. Room-temperature superconductivity under extreme pressure becomes a credible near-term target." },
    { year: "2020–23", text: "Dias claims and retractions. Two high-profile Nature papers report near-room-temperature and room-temperature superconductivity. Both are retracted following misconduct investigations. The field's credibility is damaged; reproducibility standards tighten." },
    { year: "Jul–Aug 2023", text: "LK-99 — rapid global null result. The most systematic replication attempt in the history of superconductivity research produces definitive negative results within weeks. The claim collapses through reproducibility failure, not misconduct." },
    { year: "2024", text: "No surviving claim. No room-temperature superconductor has survived the community's tightened reproducibility standard. The claim is in COLLAPSED state. The theoretical possibility remains open." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "INST-004 represents the third occurrence of anticipatory institutional evidence in the corpus (community standard tightening in advance of future results). The watchlist item from FR-AM-0004 and FR-QE-0005 now has a third instance. Has this evidence type reached the threshold for a Review Note?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "CM-001 (pre-announcement collapse mechanism) appears independently in FR-AM-0001 and FR-AM-0005 across different eras and phenomena. Two occurrences of the same collapse mechanism within one programme is a new corpus observation. Does this constitute a programme-level mechanism pattern?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-AM-0004 (commercial fusion) is the one escalating record in PROG-AM. The programme diagnosis suggests it may eventually follow the same collapse dynamic as FR-AM-0001 and FR-AM-0005. Is there evidence bearing on whether FR-AM-0004 is structurally different from the collapsed records — and if so, what protects it from the same dynamic?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "IN-006 logs continued field activity (nickelate stabilisation, a new high-pressure record, a field-wide roadmap) without any of it meeting AT-001's reopening bar. Is logging activity that doesn't change the verdict itself worth doing on a recurring basis for a COLLAPSED/CLOSED record, or does it risk turning this record into a running log of every superconductivity headline regardless of relevance? A future assessor should decide whether AS-002's approach sets a precedent worth repeating or an instance of over-logging worth correcting.",
      raisedDate: "2026-06-29",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-012", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-006 description reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-011", date: "2026-07-08", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): the lineage entry and OQ-001, OQ-002, and OQ-003 referred to the stale identifiers FR-MF-0001, FR-MF-0003, and FR-MF-0004 (four occurrences total). Corrected to FR-AM-0001, FR-AM-0003, and FR-AM-0004 following the FR-MF-* → FR-AM-* programme identifier migration. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-010", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: whether logging non-threshold-crossing activity on a CLOSED record is a precedent or an over-logging risk." },
    { id: "M-009", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records. Pressure state confirmed unchanged: COLLAPSED. Status confirmed unchanged: CLOSED. New evidence (IN-006) does not meet AT-001's reopening condition." },
    { id: "M-008", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-006 added: nickelate ambient-pressure stabilisation (Feb 2025), 298K high-pressure claim (Nov 2025, unreplicated), PNAS field roadmap (Mar 2026)." },
    { id: "M-007", date: "2026-06-18", field: "record_id_migrated", from: "FR-MF-0005", to: "FR-AM-0005", note: "Programme identity changed. Record identifier migrated to preserve constitutional consistency. FR-MF-* → FR-AM-*. 2026-06-18." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_failed", from: "—", to: "NULL-CONDITION-FAILED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "closed",
};
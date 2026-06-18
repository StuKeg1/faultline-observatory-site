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
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "The claim has not been satisfied. No room-temperature superconductor has been reproduced under independent laboratory conditions to the community's current evidence standards. The two most prominent recent claims (Dias, LK-99) both failed replication — one through misconduct findings, one through rapid systematic null results from over forty independent groups. The confirmed high-pressure hydride results (INST-003) demonstrate that reproducible superconductivity approaching room temperature is a",
      assessorNote: null,
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
    { year: "1986–2010s", text: "High-temperature superconductor discovery and mechanism debate. Cuprate superconductors are discovered and reproduced; the mechanism remains unresolved (FR-MF-0003). The community establishes that superconductivity above 77K is achievable and reproducible. Room temperature remains a theoretical goal" },
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
      question: "INST-004 represents the third occurrence of anticipatory institutional evidence in the corpus (community standard tightening in advance of future results). The watchlist item from FR-MF-0004 and FR-QE-0005 now has a third instance. Has this evidence type reached the threshold for a Review Note?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "CM-001 (pre-announcement collapse mechanism) appears independently in FR-MF-0001 and FR-AM-0005 across different eras and phenomena. Two occurrences of the same collapse mechanism within one programme is a new corpus observation. Does this constitute a programme-level mechanism pattern?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-MF-0004 (commercial fusion) is the one escalating record in PROG-AM. The programme diagnosis suggests it may eventually follow the same collapse dynamic as FR-MF-0001 and FR-AM-0005. Is there evidence bearing on whether FR-MF-0004 is structurally different from the collapsed records — and if so, what protects it from the same dynamic?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
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

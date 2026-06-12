/**
 * FR-MF-0002 — Anomalous Excess Heat — Electrochemical Cells Beyond Conventional Chemistry
 * Programme: PROG-MF
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_MF_0002 = {
  id: "FR-MF-0002",
  programme: "PROG-MF",

  claim: {
    statement: "Electrochemical cells can produce anomalous excess heat that is not fully explained by conventional chemical processes.",
    shortLabel: "Anomalous Excess Heat — Electrochemical Cells Beyond Conventional Chemistry",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Early excess heat observations — multiple laboratories",
      description: "Following the Pons-Fleischmann announcement, a subset of replication attempts reports anomalous heat even when failing to observe nuclear products. Texas A&M (McKubre group) and several European electrochemistry laboratories report calorimetric anomalies in palladium-deuterium cells that exceed estimated chemical energy budgets. These observations are made during the same period as the fusion claim's collapse; they are not separated from it in the contemporary literature. Retrospectively, they constitute the earliest evidence specifically relevant to this record's claim. Methodological concerns are significant: calorimetry in electrochemical cells is technically demanding, and systematic errors in heat accounting are documented in this period.",
      vectors: ["partial--methodology-contested"],
      date: "1989–92",
    },
    {
      id: "IN-002",
      qualifiedEvent: "SRI International systematic calorimetry programme",
      description: "Michael McKubre and colleagues at SRI International conduct a decade-long programme of palladium-deuterium calorimetry using flow calorimetry methods specifically designed to minimise systematic errors. The programme, partly funded by EPRI (Electric Power Research Institute), produces a series of reports claiming reproducible excess heat correlated with deuterium loading above a threshold fraction. The correlation with loading fraction is the most specific quantitative claim in the anomalous heat literature: heat appears only when deuterium occupancy exceeds approximately 0.9 atoms per palladium atom. This correlation, if real, would constitute evidence for a genuine physical phenomenon rather than random calorimetric error. Independent replication of the loading-fraction correlation has not been achieved under fully controlled conditions.",
      vectors: ["supportive--loading-correlation"],
      date: "1993–2002",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Storms — systematic review and palladium preparation protocol",
      description: "Edmund Storms, formerly of Los Alamos National Laboratory, publishes a systematic review of the anomalous heat literature and develops specific palladium preparation protocols claimed to increase reproducibility. Storms argues that the irreproducibility characterising most replication attempts is attributable to material variability in palladium samples rather than absence of a real effect. His protocols specify grain size, surface preparation, and loading conditions. Results using these protocols show higher positive rates than random replication attempts. Critics note that the comparison group (uncontrolled replication) is a weak baseline; and that the protocols themselves introduce selection effects that may explain higher positive rates without requiring a real underlying phenomenon.",
      vectors: ["partial--protocol-dependency"],
      date: "2002–10",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Berliner et al. (Google) — anomalous electrochemical behaviour acknowledged",
      description: "The Google-funded systematic replication study (Berliner et al. 2019, Nature) returns a null result for nuclear fusion products but explicitly documents anomalous electrochemical behaviour in palladium-deuterium systems that was not fully explained by the study's conventional models. The authors characterise this as a finding of independent scientific interest. Specifically, the calorimetric behaviour of highly loaded palladium-deuterium cells deviates from predictions in ways that warrant further investigation. This is the strongest independent institutional acknowledgement of the anomalous heat phenomenon from a source with no prior investment in the LENR community. The acknowledgement is careful and hedged; it does not assert that the anomaly is real or physically significant. It is, however, a qualified event from a credible source that bears directly on this record's claim.",
      vectors: ["partial--independent-institutional-acknowledgement"],
      date: "2019",
    },
    {
      id: "IN-005",
      qualifiedEvent: "NASA LENR programme and US Navy revisitation",
      description: "NASA's Glenn Research Center and elements of the US Navy research community revisit anomalous heat phenomena in palladium and nickel-hydrogen systems, publishing preliminary findings and funding exploratory research. The institutional engagement is notable: these are mainstream scientific organisations with no prior LENR affiliation choosing to allocate resources to the phenomenon. Published outputs are preliminary and do not constitute replication of specific prior results. The engagement itself is evidence that the phenomenon has not been definitively closed by the scientific community, and that the Berliner et al. (2019) null result for fusion did not terminate interest in the underlying calorimetric observations. No peer-reviewed confirmation of anomalous heat under controlled conditions has emerged from these programmes to date.",
      vectors: ["neutral--institutional-engagement-no-result"],
      date: "2021–24",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim occupies an unusual position in the corpus. The anomalous heat observations have been made by credentialled researchers using dedicated calorimetric equipment over thirty-five years. They have not been definitively refuted — no study has demonstrated that the reported observations are entirely attributable to measurement error, and the Berliner et al. (2019) study explicitly declined to make that claim. At the same time, the observations have not been reproduced on demand by independen",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Calorimetric systematic error in electrochemical cells. Heat measurement in electrochemical cells is technically demanding. Joule heating from resistance, recombination of evolved gases, and calibration drift can each produce apparent excess heat at levels comparable to those reported. This mechanism does not assert that all reported observations are artefact — it asserts that the measurement meth",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Community closure and confirmation bias. The anomalous heat research community has operated in isolation from mainstream electrochemistry and materials science for over thirty years. Shared protocols, shared beliefs, and shared publication venues create conditions for confirmation bias: researchers who obtain positive results publish; those who obtain negative results are less likely to report. Th",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "No agreed controlled protocol. The claim cannot be evaluated without a controlled experimental protocol that specifies palladium preparation, loading conditions, calorimetric method, and baseline chemical accounting precisely enough that a null result would be accepted as meaningful by the proponent community. No such protocol currently exists. The Storms protocols (INST-003) are the closest appro",
    },
    {
      id: "IN-001",
      type: "INHERITED CONDITION",
      description: "Parent record contamination. The entire evidence trail for this record was accumulated by researchers operating under the belief that they were observing nuclear fusion (FR-MF-0001). This belief shaped experimental design, measurement priorities, and reporting choices at every stage. The claim tracked here — anomalous heat — was never the primary object of investigation; it was a secondary observa",
    }
  ],

  lineage: {
    items: [
    { year: "1989", text: "Anomalous heat observed, attributed to fusion. Pons and Fleischmann report excess heat and interpret it as nuclear in origin. The heat observation and the fusion interpretation are conflated from the outset. All subsequent research in this area operates under the same conflation until FR-MF-0001 for" },
    { year: "1989–91", text: "Heat observations survive fusion collapse. When major laboratories fail to replicate nuclear products, some continue to report anomalous heat in the absence of nuclear signatures. These reports are dismissed along with the fusion claim by the mainstream community, despite addressing a different ques" },
    { year: "1993–2019", text: "Heat observations persist in marginalised community. The LENR community continues to report excess heat. The loading-fraction correlation (SRI International) is the most specific quantitative result. Mainstream science does not engage; the observations accumulate without independent evaluation." },
    { year: "2019", text: "Berliner et al. separates heat from fusion implicitly. The Google study does not confirm excess heat but acknowledges anomalous calorimetric behaviour. This is the first mainstream acknowledgement that treats the heat observation as a distinct object from the fusion claim." },
    { year: "2024", text: "FR-MF-0001 formally separates the claims. The Observatory issues an assessment that explicitly distinguishes the collapsed fusion claim from the unresolved heat observation. FR-MF-0002 is discovered as a consequence. This is the first time in the claim's history that the heat phenomenon has been tra" }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can a controlled experimental protocol be agreed between independent evaluators and proponent researchers that would make a null result accepted as meaningful? Without this, BN-001 cannot be closed regardless of experimental activity.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The loading-fraction correlation (INST-002) is the most specific quantitative claim in the record. Has it been independently tested under conditions that would falsify it if it were a selection artefact? If not, this is the highest-priority experimental gap in the record.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "IN-001 is the first Inherited Condition in the corpus. Does this mechanism type recur in other records, or is it a property of parent-child record relationships specifically? The answer requires further record lineage development before it is observable.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "The claim is FRAGMENTING rather than COLLAPSED. What would constitute sufficient evidence to move it toward RESOLVING in the positive direction? An agreed protocol (OQ-1) plus independent replication of the loading-fraction correlation under that protocol would be the minimum. Is that achievable with current materials science tools, or has the relevant experimental expertise dispersed beyond recovery?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

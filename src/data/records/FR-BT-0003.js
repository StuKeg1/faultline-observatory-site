/**
 * FR-BT-0003 — Biological Age Biomarker Panels — Predictive Validity for Age-Related Decline
 * Programme: PROG-BT
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_BT_0003 = {
  id: "FR-BT-0003",
  programme: "PROG-BT",

  claim: {
    statement: "A blood-based biomarker panel can reliably predict biological age-related decline before clinical symptoms appear.",
    shortLabel: "Biological Age Biomarker Panels — Predictive Validity for Age-Related Decline",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Epigenetic clock development — Horvath, Hannum, GrimAge",
      description: "Steve Horvath (2013, Genome Biology) publishes the first multi-tissue epigenetic clock, demonstrating that DNA methylation patterns predict chronological age with high accuracy (r ≈ 0.96 across tissues). Subsequent clocks — Hannum (2013), PhenoAge (2018), GrimAge (2019) — improve predictive performance for biological outcomes including mortality, disease incidence, and functional decline. GrimAge in particular demonstrates that accelerated epigenetic age (epigenetic age exceeding chronological age) predicts mortality risk independently of other known risk factors. These results establish that blood-based methylation measurements have predictive validity for biological outcomes — epigenetic age acceleration predicts who will decline faster. The clocks are not purely blood-based in all cases, but blood methylation profiles drive the most practically deployable versions. This is the strongest positive evidence in the record: longitudinal cohort data demonstrating that the measurement predicts subsequent clinical outcomes.",
      vectors: ["supportive--predictive-validity-demonstrated-in-longitudinal-cohorts"],
      date: "2013–19",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Proteomics-based aging clocks — SomaScan and multi-omic panels",
      description: "Lehallier et al. (2019, Nature Medicine) and subsequent work demonstrate that plasma proteomics (measuring thousands of proteins in blood) can produce aging clocks competitive with or superior to epigenetic clocks for predicting biological age and clinical outcomes. The SomaScan platform enables measurement of ~5,000 proteins from small blood volumes. These multi-protein panels capture biological processes not reflected in methylation — inflammation, metabolic state, organ function markers — and predict age-related outcomes across multiple organ systems. The predictive validity evidence is strong: protein panels predict mortality, frailty, and disease incidence in prospective cohort studies. The panels are more complex and expensive than simple blood tests, limiting clinical deployability, but the predictive signal is real and well-documented.",
      vectors: ["supportive--multi-organ-predictive-validity-in-cohorts"],
      date: "2019–22",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Clock disagreement and the organ-specific aging problem",
      description: "Snyder lab (Stanford) and Ferrucci lab (NIA) publish work demonstrating that different biological age clocks give substantially different biological age estimates for the same individual, and that organ systems age at different rates within a single person. The Stanford Human Ageing Project finds that individuals can be \"metabolically old\" while being \"immunologically young\" — organ-specific aging trajectories diverge. This creates a measurement validity problem directly relevant to the claim: a blood-based panel captures circulating signals from multiple organs but may not reflect the aging state of the organ most at risk for a specific individual. The claim requires predicting biological age-related decline — but which organ's decline? The blood panel is a population-level signal that may miss individual-level divergence. The claim transitions from ESCALATING to FRAGMENTING: population-level predictive validity is established; individual-level predictive validity for specific decline pathways is contested.",
      vectors: ["contesting--organ-specific-aging-challenges-blood-panel-generality"],
      date: "2022–23",
    },
    {
      id: "IN-004",
      qualifiedEvent: "DunedinPACE and pace-of-aging measures — actionability gap",
      description: "Belsky et al. (2022, eLife) publish DunedinPACE, a methylation-based measure of the pace of aging that tracks longitudinal change rather than cross-sectional biological age. DunedinPACE demonstrates higher predictive validity for subsequent health outcomes than static biological age clocks in several prospective analyses. However, a new challenge emerges: the gap between predictive accuracy and clinical actionability. A panel can predict that someone will experience accelerated decline without identifying which intervention would slow that decline. The clinical actionability gap — what do you do with a high biological age reading? — is not a measurement validity question but a clinical utility question. For this record, DunedinPACE is partial evidence: it demonstrates improved predictive validity for the claim while simultaneously revealing that predictive validity without actionability may limit the claim's practical significance.",
      vectors: ["partial--improved-predictive-validity-actionability-gap-identified"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Commercial deployment — Elysium Health, InsideTracker, Tally Health",
      description: "Multiple direct-to-consumer companies deploy blood-based biological age panels commercially: Elysium Health (Index test), InsideTracker (blood biomarker panel), Tally Health (methylation-based testing). These deployments are anticipatory institutional acts in the sense of RN-004: companies are commercialising the measurement capability in advance of clinical validation establishing the panel's predictive validity for individual patients. The commercial deployment is not evidence that the panels reliably predict decline — it is evidence that institutions believe the claim will eventually be satisfiable and are positioning accordingly. This is the seventh occurrence of anticipatory institutional evidence in the corpus. Notably, the commercial deployment creates an incentive structure that may complicate future validation: companies have financial interest in positive predictive validity results.",
      vectors: ["partial--anticipatory-commercial-deployment-seventh-occurrence"],
      date: "2023–24",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim is partially supported and fragmenting. Blood-based biomarker panels demonstrate population-level predictive validity for biological aging outcomes — at the population level, high biological age scores predict faster subsequent decline, higher mortality risk, and earlier disease onset. This is well-established across multiple panel types (epigenetic, proteomic, metabolomic) and multiple longitudinal cohorts. The population-level claim is supported. The claim fragments at the individual",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK — MEASUREMENT VALIDITY",
      description: "Blood panel as proxy for organ-specific decline. A blood-based panel captures circulating signals from multiple organ systems simultaneously. Whether this composite signal reliably predicts the specific organ system or biological process that will decline in a specific individual is contested. Blood panels demonstrate population-level predictive validity (on average, higher scores predict faster d",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Validation requires longitudinal follow-up at scale. Demonstrating predictive validity requires measuring the panel at baseline and following participants until decline occurs — which for pre-symptomatic prediction may take years to decades. The biological-time validation lag identified as a PROG-BT structural tension is directly operative here: the primary evidence required to fully validate the ",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Organ-specific panel integration with individual trajectory modelling. The resolution path requires developing panels that either measure organ-specific signals in blood with sufficient specificity to predict organ-level decline pathways, or integrating multi-omic measurements (methylation + proteomics + metabolomics + imaging) with individual trajectory modelling. Several groups are pursuing this",
    }
  ],

  lineage: {
    items: [
    { year: "2013", text: "First epigenetic clocks demonstrate predictive validity. Horvath and Hannum clocks show methylation patterns predict chronological age; early mortality prediction signals emerge. Population-level predictive validity is established as a realistic goal." },
    { year: "2018–19", text: "Second-generation clocks optimise for biological outcomes. PhenoAge and GrimAge improve prediction of mortality and disease incidence; proteomic panels emerge as complementary approaches. The population-level claim is substantially supported." },
    { year: "2022–23", text: "Organ-specific aging reveals individual heterogeneity. Stanford and NIA work demonstrates organs age at different rates within individuals. The individual-level prediction gap opens as the primary frontier. Claim enters FRAGMENTING." },
    { year: "2023–24", text: "Commercial deployment and DunedinPACE. Direct-to-consumer panels deploy before clinical validation; DunedinPACE improves population-level predictive validity. The actionability gap and proxy validity question remain primary obstacles." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can organ-specific aging signals be captured in blood with sufficient specificity to enable individual-level decline pathway prediction? The UK Biobank and similar longitudinal biobanks will eventually provide the data; the question is whether blood-accessible markers exist for organ-specific aging processes.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "INST-005 is the seventh occurrence of anticipatory institutional evidence. The commercial deployment of unvalidated biological age panels creates an incentive structure that may complicate future validation — companies have financial interest in positive predictive validity results. Does the anticipatory commercial act, in this case, potentially undermine the claim's future validation rather than merely anticipate it? This would be a new relationship between anticipatory institutional evidence and claim trajectories.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-BT-0003 is the third record in PROG-BT, and measurement validity pressure has now appeared in all three. Is this the diagnostic signal that transforms the PROG-BT tendency into a full programme diagnosis? Or does the Observatory require more records before naming the diagnosis?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "rn_005_condition_confirmed", from: "—", to: "RN-005-CONDITION-CONFIRMED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

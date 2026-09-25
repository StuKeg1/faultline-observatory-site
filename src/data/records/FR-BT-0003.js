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
  lastProvenanceReview: "2026-09-25",
  provenanceReviewId: "LPR-001-D27",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

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
      description: "Lehallier et al. (2019, Nature Medicine) measured 2,925 plasma proteins in 4,263 people aged 18–95 and identified nonlinear, age-associated waves of protein change. The analysis linked these patterns to biological pathways and age-related disease traits, establishing that blood proteomics carries substantial age-related information. This study did not show that its protein panel prospectively predicted mortality, frailty or disease incidence, nor that it outperformed epigenetic clocks. Such outcome-prediction claims require separate longitudinal validation. Oh et al.'s later organ-specific analysis is recorded separately in IN-003.",
      vectors: ["supportive--plasma-proteome-age-associations-not-prospective-outcome-validation"],
      date: "2019",
      sources: [
        { citation: "Lehallier et al., Undulating changes in human plasma proteome profiles across the lifespan, Nature Medicine 25, 1843–1850 (2019)", doi: "10.1038/s41591-019-0673-2", locator: "Abstract — 2,925 proteins, 4,263 people, nonlinear age-related proteome changes and disease-trait associations" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Individual ageotypes and organ-specific plasma-protein aging signatures",
      description: "Ahadi et al. (2020) followed 106 people with deep longitudinal multiomics measurements and identified differing molecular ageotypes involving metabolic, immune, liver and kidney pathways. This is evidence of individual pathway heterogeneity, not a direct measure of each organ's biological age. Oh et al. (2023) then used organ-enriched plasma proteins to build age models for 11 organs across five cohorts; accelerated age in one organ was common, and organ-age estimates related to organ-specific disease and mortality risk. That result demonstrates that blood can carry organ-specific signals. The remaining question is how reliably a particular panel forecasts an asymptomatic individual's later, specific decline beyond existing clinical risk information. Heterogeneity alone does not establish that blood panels fail.",
      vectors: ["partial--organ-specific-blood-signals-with-individual-validation-gap"],
      date: "2020–23",
      sources: [
        { citation: "Ahadi et al., Personal aging markers and ageotypes revealed by deep longitudinal profiling, Nature Medicine 26, 83–90 (2020)", doi: "10.1038/s41591-019-0719-5", locator: "Abstract — longitudinal multiomics of 106 people and individualized molecular ageotypes" },
        { citation: "Oh et al., Organ aging signatures in the plasma proteome track health and disease, Nature 624, 164–172 (2023)", doi: "10.1038/s41586-023-06802-1", locator: "Abstract — organ-enriched plasma-protein models across 11 organs, cohort replication and associations with organ disease and mortality" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "DunedinPACE and pace-of-aging measures — actionability gap",
      description: "Belsky et al. (2022, eLife) derived DunedinPACE, a single-sample blood DNA-methylation measure trained on two decades of longitudinal change in multiple organ-system indicators. Across validation analyses it was associated with morbidity, disability and mortality; its effect sizes were similar to GrimAge and it added incremental prediction beyond GrimAge in analyses of incident outcomes. These are group-level validation results, not proof of an individually effective treatment selected from the score. The separate clinical-utility question is whether acting on a result improves a person's health outcome. That interpretation should not be attributed to the paper as a newly discovered empirical failure.",
      vectors: ["supportive--pace-of-aging-outcome-associations-with-clinical-utility-open"],
      date: "2022",
      sources: [
        { citation: "Belsky et al., DunedinPACE, a DNA methylation biomarker of the pace of aging, eLife 11:e73420 (2022)", doi: "10.7554/eLife.73420", locator: "Abstract and cohort analyses — morbidity, disability, mortality, comparison with GrimAge and incremental prediction" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Commercial deployment — Elysium Health, InsideTracker, Tally Health",
      description: "The named consumer products use different specimens and measurements: InsideTracker InnerAge uses blood biomarkers, Elysium Index profiles DNA methylation from saliva, and TallyAge profiles DNA methylation from a cheek swab. Their availability establishes commercial interest in biological-age testing, but the saliva and cheek-swab offerings are not blood-based panels and cannot be counted as deployments satisfying this record's blood-panel claim. Product marketing does not validate prospective, individual-level prediction of decline. The former seventh-occurrence classification as claim-specific anticipatory evidence is therefore withdrawn pending a stricter comparison of the actual assays and claims.",
      vectors: ["neutral--mixed-specimen-commercial-context-not-blood-panel-validation"],
      date: "2023–24",
      sources: [
        { citation: "InsideTracker, InnerAge 2.0 blood-biomarker test", url: "https://info.insidetracker.com/innerage2.0", locator: "Product method — blood biomarkers" },
        { citation: "Elysium Health, Index epigenetic biological age test", url: "https://www.elysiumhealth.com/products/index", locator: "Product FAQ — saliva-derived DNA methylation" },
        { citation: "Tally Health, TallyAge test method", url: "https://support.tallyhealth.com/en-US/how-does-the-tallyage-test-work-186211", locator: "Product method — cheek-cell swab DNA methylation" },
      ],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim is partially supported and fragmenting. Blood-based biomarker panels demonstrate population-level predictive validity for biological aging outcomes — at the population level, high biological age scores predict faster subsequent decline, higher mortality risk, and earlier disease onset. This is well-established across multiple panel types (epigenetic, proteomic, metabolomic) and multiple longitudinal cohorts. The population-level claim is supported. The claim fragments at the individual level. Different biological age clocks give substantially different estimates for the same individual, and organ systems within one person age at markedly different rates (INST-003): a blood panel captures a composite population-level signal that may not reflect which specific organ or process is declining fastest in any given person. The pressure state is FRAGMENTING: population-level predictive validity is well established, but individual-level predictive validity — the form the claim requires for clinical use — has not been demonstrated, and the actionability gap identified in DunedinPACE (INST-004) means that even a valid individual-level signal may not yet translate into a clear intervention (BN-001).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-09-25",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "LPR-001-D27 corrects the legacy warrant without reversing the record. Horvath, PhenoAge and GrimAge remain the strongest retained longitudinal evidence for blood methylation measures and later health outcomes. Lehallier (2019) establishes age-associated plasma-protein patterns but not the prospective mortality, frailty and disease predictions formerly attributed to it. Ahadi's molecular ageotypes and Oh's organ-specific blood-protein models are distinct results: the latter demonstrates that organ-specific signals can be recovered from blood and related to disease and mortality risks. DunedinPACE (2022) supports group-level associations with morbidity, disability and mortality, with incremental prediction beyond GrimAge; whether a score guides an effective intervention remains a separate clinical-utility question. The named consumer products use blood, saliva and cheek-swab samples respectively, so their collective deployment does not establish this blood-panel claim. FRAGMENTING / VS-03 remains warranted on the narrower distinction between cohort-level predictive associations and validated prospective, individual-specific, pre-symptomatic decisions. This is an unresolved validation question, not proof that blood cannot contain organ-specific information.",
      assessorNote: "Corrective assessment appended after LPR-001-D27. AS-001 remains historical. No 2025 or later scientific result admitted through this provenance correction.",
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK — MEASUREMENT VALIDITY",
      description: "Blood panel as proxy for future individual decline. Oh et al. show that organ-enriched plasma proteins can yield organ-specific age estimates associated with organ disease and mortality risk; the premise that blood necessarily misses organ-specific signals is withdrawn. The unresolved measurement question is whether a defined baseline panel reliably forecasts an asymptomatic individual's particular later decline, with adequate calibration and incremental value beyond established clinical risk factors. Cohort associations and organ-specific models are meaningful evidence, but their validation does not automatically make an individual result a dependable pre-symptomatic prediction. This remains a proxy-measurement bottleneck in the sense of RN-005.",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Validation requires longitudinal follow-up at scale. Demonstrating predictive validity requires measuring the panel at baseline and following participants until decline occurs — which for pre-symptomatic prediction may take years to decades. The biological-time validation lag identified as a PROG-BT structural tension is directly operative here: the primary evidence required to fully validate the panel's predictive accuracy cannot be obtained on timescales shorter than years to decades. This resistance mechanism compounds with BN-001: not only is the proxy relationship contested, it can only be validated through long-horizon cohort studies.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Validated prospective organ-specific prediction and individual trajectory modelling. Organ-enriched plasma-protein models have already shown that blood carries organ-specific information. The next resolution step is prospective validation that a pre-symptomatic panel predicts a specified later decline pathway for an individual with useful calibration and added value over established clinical predictors. Multi-omic and repeated-measure designs may help, but the attractor is a demonstrated prospective prediction and its appropriate decision boundary, not merely another organ-age estimate.",
    }
  ],

  lineage: {
    items: [
    { year: "2013", text: "First epigenetic clocks demonstrate predictive validity. Horvath and Hannum clocks show methylation patterns predict chronological age; early mortality prediction signals emerge. Population-level predictive validity is established as a realistic goal." },
    { year: "2018–19", text: "PhenoAge and GrimAge link methylation measures to health outcomes. Lehallier et al. identify nonlinear age-associated plasma-protein patterns; that study does not establish prospective mortality, frailty or disease-incidence prediction by its panel." },
    { year: "2020–23", text: "Ahadi et al. describe individual molecular ageotypes; Oh et al. use plasma proteins to estimate age across 11 organs and associate organ-age signals with disease and mortality risk. Blood can contain organ-specific information, while individual prospective calibration remains open." },
    { year: "2022–24", text: "DunedinPACE (2022) reports morbidity, disability and mortality associations and incremental prediction beyond GrimAge. Consumer biological-age tests use differing specimen types; commercial availability does not validate the blood-panel claim or establish clinical utility." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Given Oh et al.'s organ-specific plasma-protein signals, can a defined baseline blood panel predict a particular asymptomatic individual's future decline pathway with reliable calibration and incremental value over clinical risk factors?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Which commercial assay deployments, if any, are sufficiently specific to the blood-panel claim to count as anticipatory institutional evidence? The former seventh-occurrence count included saliva and cheek-swab products and is withdrawn; company-funded validation still warrants independent scrutiny.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-BT-0003 is the third record in PROG-BT, and measurement validity pressure has now appeared in all three. Is this the diagnostic signal that transforms the PROG-BT tendency into a full programme diagnosis? Or does the Observatory require more records before naming the diagnosis?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    { id: "M-007", date: "2026-09-25", field: "provenance_correction", from: "LPR-001-D27 discrepancies_found / pending", to: "LPR-001-D27 discrepancies_corrected / completed", note: "Approved bounded correction of IN-002 through IN-005. Lehallier's cross-sectional age-associated plasma proteome was separated from prospective outcome claims; Ahadi ageotypes distinguished from Oh's organ-specific plasma-protein models; DunedinPACE dated to 2022 with group-level outcome associations distinguished from clinical utility; InnerAge blood, Index saliva and TallyAge cheek-swab specimens corrected. IN-001 remained as audited. AS-001 preserved and AS-002 appended. BN-001, AT-001, lineage and OQ-001/OQ-002 aligned where they repeated withdrawn premises. FRAGMENTING / VS-03 retained on the narrower individual prospective-validation question. No 2025+ scientific evidence admitted." },
    {"id":"M-006","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:BN-001, mechanisms:RM-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored BN-001, RM-001, AT-001 from FR_BT_0003_biological_age_biomarker_prediction.html (Drive file 1JK_i4ftSrQ5UtZWm2Ncv8sd8wykgIaC0). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "rn_005_condition_confirmed", from: "—", to: "RN-005-CONDITION-CONFIRMED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

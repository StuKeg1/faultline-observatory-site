/**
 * FR-AM-0002 — Anomalous Excess Heat — Electrochemical Cells Beyond Conventional Chemistry
 * Programme: PROG-AM
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AM_0002 = {
  id: "FR-AM-0002",
  programme: "PROG-AM",
  lastProvenanceReview: "2026-09-09",
  provenanceReviewId: "LPR-001-D11",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Electrochemical cells can produce anomalous excess heat that is not fully explained by conventional chemical processes.",
    shortLabel: "Anomalous Excess Heat — Electrochemical Cells Beyond Conventional Chemistry",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Early excess-heat reports — mixed 1989 replication record",
      description: "Following the Pons-Fleischmann announcement, several groups reported calorimetric excess heat in palladium-deuterium cells while other laboratories reported null results. The 1989 DOE chronology records an April 11 Texas A&M report by C. R. Martin, B. E. Gammon and K. N. Marsh of 20–80% excess energy, later retracted during the DOE panel's June visit, alongside other positive and negative calorimetry reports during the same period. These early reports establish that anomalous heat was a distinct experimental observation under active investigation, but they do not establish a reproducible phenomenon beyond conventional chemistry. The legacy attribution of the Texas A&M result to Michael McKubre is withdrawn; McKubre's work was at SRI International.",
      vectors: ["partial--early-heat-reports-mixed-and-methodologically-contested"],
      date: "1989",
      sources: [
        {
          citation: "U.S. Department of Energy, Energy Research Advisory Board (1989), Cold Fusion Research — Appendix 2.A: Early Chronology of Heat Production.",
          url: "https://files.ncas.org/erab/apx2a.htm",
          locator: "April 11 Texas A&M excess-heat report and later retraction; April–May positive and negative calorimetry chronology",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "SRI International — reported loading dependence in D/Pd calorimetry",
      description: "McKubre and colleagues at SRI International carried out palladium-deuterium calorimetry and reported excess-power observations as a function of electrochemical current and deuterium loading. Their 1992/93 conference paper identifies attainment of average D/Pd loading of approximately 0.9 or greater as one criterion associated with reported anomalous power generation, and later SRI summaries continued to emphasise high loading as part of the proposed operating parameter space. This is a specific, falsifiable correlation reported by the SRI programme. It is not treated here as an independently established threshold law: the legacy wording that a decade-long programme demonstrated reproducible excess heat above a definitive 0.9 threshold and that the correlation had never been independently replicated under fully controlled conditions was broader than the verified source chain.",
      vectors: ["supportive--reported-sri-loading-correlation-not-independently-established-law"],
      date: "1992–2009",
      sources: [
        {
          citation: "McKubre, M. C. H. et al. (1992/1993), Excess Power Observations in Electrochemical Studies of the D/Pd System; the Influence of Loading, Proceedings of the Third International Conference on Cold Fusion.",
          url: "https://citeseerx.ist.psu.edu/document?doi=b2ab364ef13574f30b41ef87cf8fa69e2c25dcff&repid=rep1&type=pdf",
          locator: "Abstract; introduction; loading criterion of approximately D/Pd 0.9 or greater",
        },
        {
          citation: "McKubre, M. C. H. (2009), Excess Power Observations in Electrochemical Studies of the D/Pd System; the Operating Parameter Space, ICCF-15 proceedings.",
          url: "https://www.afs.enea.it/project/webenea/Volumi/V2012-CondensMatter.pdf",
          locator: "Operating-parameter-space discussion; high deuterium loading and reported excess-power correlation",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Storms review — material-dependent interpretation of reproducibility",
      description: "Edmund Storms' 2010 review surveys the cold-fusion/LENR literature and argues that supporting evidence accumulated in particular materials and under particular preparation and loading conditions. The review presents material dependence and difficult reproducibility as central features of the reported phenomenon and discusses multiple claimed heat-producing systems. It is evidence for a proponent-side synthesis in which materials state is offered as an explanation for inconsistent results; it is not independent validation of a specific Storms preparation protocol. The legacy claims that his protocol specified a verified grain-size/surface-preparation recipe, produced higher positive rates than random replication attempts, and was shown to introduce selection effects are withdrawn because they were not established by the reviewed source as written.",
      vectors: ["partial--proponent-review-attributes-variability-to-material-state"],
      date: "2010",
      sources: [
        {
          citation: "Storms, E. (2010), Status of cold fusion (2010), Naturwissenschaften 97, 861–881.",
          url: "https://doi.org/10.1007/s00114-010-0711-x",
          locator: "Review abstract and discussion of material-dependent reproducibility and reported heat-producing systems",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Google-funded re-evaluation — no cold-fusion effect observed",
      description: "Berlinguette et al. (2019) describe a Google-funded multi-institution programme established to re-evaluate cold fusion using modern materials characterisation, calorimetry and nuclear measurements. The programme had not yielded evidence of a cold-fusion effect. Its scientifically useful outputs concerned highly hydrided metals and low-energy nuclear-reaction parameter space, not an independently verified unexplained calorimetric excess in palladium-deuterium cells. The paper therefore bears on this record mainly as a high-quality null/constraint: it shows that a substantial modern programme did not confirm the claimed effect while still finding adjacent materials questions worth studying. The legacy attribution to 'Berliner et al.' and the claim that the study acknowledged unexplained anomalous heat are withdrawn.",
      vectors: ["contesting--modern-re-evaluation-did-not-confirm-anomalous-heat-effect"],
      date: "2019",
      sources: [
        {
          citation: "Berlinguette, C. P. et al. (2019), Revisiting the cold case of cold fusion, Nature 570, 45–51.",
          url: "https://doi.org/10.1038/s41586-019-1256-6",
          locator: "Abstract; multi-institution programme; no evidence of cold-fusion effect; adjacent materials insights",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Legacy NASA/Navy institutional-engagement bundle — not evidence for electrochemical excess heat",
      description: "The legacy instance treated later NASA Glenn and U.S. Navy activity as a single evidential event for anomalous electrochemical heat. That representation is not source-faithful. NASA Glenn's prominent 2020 lattice-confinement-fusion work used deuterated metals and an externally generated energetic trigger; NASA describes fusion-level kinetic energies being created inside an ambient-temperature lattice. This is adjacent condensed-matter fusion research, not a controlled replication of unexplained excess heat from an electrochemical cell. NASA also had historical involvement in LENR-related work well before 2021, so the claim that it entered the subject with no prior affiliation is withdrawn. The Navy component of the legacy bundle is not retained as substantive evidence here without a specific source chain tied directly to this record's heat claim.",
      vectors: ["neutral--adjacent-institutional-research-not-direct-excess-heat-evidence"],
      date: "2020–24",
      sources: [
        {
          citation: "NASA Glenn Research Center, Lattice Confinement Fusion.",
          url: "https://www.nasa.gov/glenn/glenn-expertise-space-exploration/lattice-confinement-fusion/",
          locator: "2020 Physical Review C work; deuterated-metal lattice; externally created energetic conditions for fusion",
        },
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
      summary: "The claim occupies an unusual position in the corpus. The anomalous heat observations have been made by credentialled researchers using dedicated calorimetric equipment over thirty-five years. They have not been definitively refuted — no study has demonstrated that the reported observations are entirely attributable to measurement error, and the Berliner et al. (2019) study explicitly declined to make that claim. At the same time, the observations have not been reproduced on demand by independent laboratories following a shared, agreed protocol. The strongest quantitative claim in the record — SRI International's loading-fraction correlation (INST-002) — has not been independently confirmed under fully controlled conditions, and the Storms preparation protocols (INST-003) that claim to improve reproducibility have not been validated against a rigorous baseline. The pressure state is FRAGMENTING: the phenomenon has neither been confirmed as real nor definitively attributed to measurement artefact, and no agreed controlled protocol yet exists that would let a null result be accepted as meaningful (BN-001).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-09-09",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "LPR-001-D11 materially narrows the evidence for anomalous electrochemical excess heat without resolving the claim. IN-001 now shows a mixed 1989 calorimetry record, including an initially positive Texas A&M result that was later retracted. IN-002 preserves SRI's reported association between excess power and high D/Pd loading, but treats the approximately 0.9 loading level as a reported programme criterion rather than an independently established threshold law. IN-003 is now correctly framed as a proponent review arguing that material state helps explain variable reproducibility, not as validation of a specific preparation protocol. IN-004 removes the strongest legacy overstatement: Berlinguette et al. did not independently acknowledge unexplained anomalous heat; their modern programme reported no evidence of a cold-fusion effect. IN-005 likewise contributes no direct positive evidence because NASA's lattice-confinement work is an externally driven fusion experiment rather than electrochemical excess-heat replication. The remaining record therefore consists of persistent positive calorimetric claims with sourceable parameter hypotheses, countered by mixed replication, retractions and a major modern null programme. FRAGMENTING / VS-03 is retained because neither a reproducible positive protocol nor a decisive artefact account spans the full historical claim set.",
      assessorNote: "Append-only correction following the operator-approved LPR-001-D11 repair. AS-001 is preserved as historical assessment. The correction removes reliance on the misattributed Texas A&M/McKubre claim, the overstated Storms protocol claim, the false Berlinguette anomalous-calorimetry attribution and the conflated NASA/Navy institutional-engagement premise.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Calorimetric systematic error and baseline uncertainty. Electrochemical calorimetry requires accurate accounting for electrical input, recombination, gas handling, calibration stability and changing cell conditions. The historical record contains both positive and null measurements, including retracted results, so measurement artefact remains a live alternative explanation for at least some reported excess heat. Berlinguette et al. (2019) should not be cited as having found unexplained anomalous calorimetry; its relevance is that a modern high-rigour programme did not confirm the claimed cold-fusion effect.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Limited independent replication across heterogeneous protocols. Positive excess-heat claims have been produced under differing materials, loading procedures, calorimeters and analysis choices, while null results have also been reported. This heterogeneity makes comparison difficult and weakens inference from any single programme. The earlier wording that attributed the problem to a structurally isolated community and publication-selection bias is not retained as an established causal finding because LPR-001-D11 did not establish that sociological mechanism directly.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "A discriminating shared protocol is still missing from the evidential record. Resolution requires a protocol that specifies material preparation, deuterium loading measurement, calorimetric calibration, chemical-energy accounting, controls and prespecified analysis closely enough that independent laboratories can test the same proposition and interpret both positive and null outcomes consistently. SRI's loading correlation and Storms' materials interpretation provide hypotheses about necessary conditions, but neither is treated here as an already validated universal protocol.",
    },
    {
      id: "IN-001",
      type: "INHERITED CONDITION",
      description: "Parent record contamination. The evidence trail for this record largely arose inside attempts to test the nuclear-fusion claim tracked in FR-AM-0001, so heat observations and nuclear interpretation were historically entangled. That inheritance complicates retrospective evaluation of the narrower heat claim. A clean resolution would benefit from experiments designed specifically to test excess heat and its chemical accounting without presupposing a nuclear mechanism.",
    }
  ],

  lineage: {
    items: [
      { year: "1989", text: "Excess heat is reported within the cold-fusion replication wave. Texas A&M and other groups report positive calorimetry, while other laboratories report null results; the Texas A&M April result is later retracted. Heat and nuclear interpretation are initially entangled." },
      { year: "1992–2009", text: "SRI develops a parameter-based account of reported excess power. McKubre and colleagues emphasise high deuterium loading, including an approximately 0.9 D/Pd criterion, as associated with positive observations. The correlation remains a programme-reported hypothesis rather than an independently established threshold law." },
      { year: "2010", text: "Storms publishes a proponent review arguing that material state and preparation help explain difficult reproducibility. The review documents continued positive claims but does not independently validate a universal preparation protocol." },
      { year: "2019", text: "Google-funded multi-institution re-evaluation. Berlinguette et al. report no evidence of a cold-fusion effect while identifying adjacent questions in highly hydrided metals and low-energy nuclear-reaction parameter space. The paper does not confirm unexplained anomalous calorimetric heat." },
      { year: "2020–24", text: "Adjacent institutional work continues, including NASA Glenn lattice-confinement fusion, but this research uses externally generated energetic conditions and is not a replication of electrochemical excess heat. Institutional interest is therefore not treated as positive evidence for this claim." },
      { year: "2026", text: "LPR-001-D11 separates sourceable calorimetric claims from legacy attribution and interpretation errors. The record remains open and fragmented around reproducibility, measurement control and the absence of a shared discriminating protocol." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can independent evaluators and proponents agree a controlled protocol with prespecified material, loading, calorimetric, control and analysis criteria such that both positive and null results are interpretable against the same hypothesis?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Does the SRI-reported association between high D/Pd loading and excess power survive a preregistered independent test that measures loading directly, includes hydrogen and blank controls, and prespecifies the calorimetric error model? This is the clearest bounded test of IN-002 without assuming that the approximately 0.9 value is already an established threshold law.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "IN-001 is the first Inherited Condition in the corpus. Does this mechanism type recur in other records, or is it a property of parent-child record relationships specifically? The answer requires further record lineage development before it is observable.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "What evidence would move the claim toward RESOLVING? At minimum, a shared discriminating protocol plus independent replication of a prespecified excess-heat result with complete chemical-energy accounting would provide positive convergence; repeated high-powered null results under the same agreed conditions would provide negative convergence. Current institutional activity outside that protocol, including adjacent fusion research, is not sufficient by itself.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    { id: "M-010", date: "2026-09-09", field: "assessment_and_dependencies_corrected", from: "AS-001 / legacy RM-BN-lineage-OQ wording", to: "AS-002 / corrected dependencies", note: "Append-only AS-002 issued after the operator-approved LPR-001-D11 repair. FRAGMENTING / VS-03 retained on a narrower evidential basis. RM-001, RM-002, BN-001, the inherited-condition wording, lineage and OQ-001/OQ-002/OQ-004 were aligned to corrected source boundaries. Historical AS-001 preserved." },
    { id: "M-009", date: "2026-09-09", field: "provenance_correction", from: "LPR-001-D11 discrepancies_found", to: "LPR-001-D11 discrepancies_corrected", note: "Operator-approved correction of IN-001 through IN-005. Texas A&M attribution corrected; SRI loading correlation bounded to the programme's reported criterion; Storms reframed as a proponent review rather than validated protocol evidence; Berlinguette et al. corrected and the unsupported anomalous-calorimetry acknowledgement withdrawn; NASA/Navy bundle separated, with NASA lattice-confinement work treated as adjacent rather than direct excess-heat evidence. Structured provenance added where confidently established." },
    { id: "M-008", date: "2026-09-09", field: "provenance_review", from: "—", to: "LPR-001-D11", note: "Legacy provenance review completed. All five evidence instances examined. Material source-fidelity or attribution discrepancies identified in IN-001 through IN-005, so no structured provenance was silently attached to those instances. IN-001 misattributes the Texas A&M 1989 excess-heat work to McKubre; IN-002's SRI loading-threshold core is sourceable but its decade-long/reproducibility and independent-replication framing requires bounding; IN-003's Storms protocol and comparative-success claims are more specific than the verified review evidence; IN-004 misattributes Berlinguette et al. and overstates the 2019 Google programme as acknowledging unexplained anomalous calorimetry; IN-005 conflates NASA/Navy programmes and incorrectly describes them as institutions with no prior LENR affiliation. No factual, interpretive, assessment, pressure-state or verification-stage wording changed. No sufficiently direct new scientific evidence was admitted; review marked pending governed correction." },
    {"id":"M-007","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:RM-002, mechanisms:BN-001, mechanisms:IN-001, lineage:1989, lineage:1989–91, lineage:2024","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, RM-002, BN-001, IN-001; lineage 1989, 1989–91, 2024 from FR_MF_0002_anomalous_excess_heat.html (Drive file 1qB9Wsdf9b3Trw32dcQHEPPLsrZIH6z14). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2026-06-18", field: "record_id_migrated", from: "FR-MF-0002", to: "FR-AM-0002", note: "Programme identity changed. Record identifier migrated to preserve constitutional consistency. FR-MF-* → FR-AM-*. 2026-06-18." },
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

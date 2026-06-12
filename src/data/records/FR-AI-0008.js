/**
 * FR-AI-0008 — AI Medical Imaging Diagnosis — Specialist-Level Accuracy on Defined Tasks
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0008 = {
  id: "FR-AI-0008",
  programme: "PROG-AI",

  claim: {
    statement: "AI-assisted medical diagnosis achieves specialist-level accuracy on defined imaging tasks.",
    shortLabel: "AI Medical Imaging Diagnosis — Specialist-Level Accuracy on Defined Tasks",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Landmark studies — dermatology, diabetic retinopathy, chest X-ray",
      description: "Esteva et al. (2017, Nature) demonstrate dermatology AI matching board-certified dermatologist performance on skin lesion classification. Gulshan et al. (2016, JAMA) demonstrate diabetic retinopathy screening AI exceeding specialist sensitivity at high specificity. Rajpurkar et al. (CheXNet, 2017) report chest X-ray pneumonia detection exceeding radiologist performance on a defined benchmark. These studies are the canonical positive evidence for the claim: on defined imaging tasks using curated research datasets, AI systems achieve or exceed specialist-level accuracy. The claim's surface assertion — specialist-level accuracy on defined tasks — is confirmed in multiple imaging domains simultaneously. All three studies use retrospective single-site datasets; the deployment question is explicitly not addressed.",
      vectors: ["supportive--specialist-level-accuracy-on-research-datasets-confirmed"],
      date: "2017–19",
    },
    {
      id: "IN-002",
      qualifiedEvent: "FDA clearances and real-world deployment — regulatory validation",
      description: "The FDA clears multiple AI imaging devices: IDx-DR for autonomous diabetic retinopathy screening (2018, first autonomous AI diagnostic device cleared), Viz.ai for large vessel occlusion detection (2018), Aidoc and similar tools for triage prioritisation. By 2023, over 500 AI/ML-based medical devices have received FDA 510(k) clearance or De Novo authorisation in the imaging space. These clearances require demonstration of performance meeting specified accuracy thresholds, providing regulatory-validated evidence that the claim's accuracy standard is achievable in prospective settings. The clearances represent a significant evidential upgrade from research datasets: FDA requires prospective or analytically validated performance data. The claim's surface assertion is confirmed by regulatory authority in multiple imaging domains.",
      vectors: ["supportive--regulatory-validation-in-prospective-settings"],
      date: "2019–21",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Deployment gap studies — research accuracy fails to generalise",
      description: "A body of research emerges documenting systematic performance gaps between research-dataset accuracy and real-world clinical deployment. Zech et al. (2018) demonstrate that chest X-ray AI models trained on one hospital's data perform poorly on another hospital's data due to spurious correlations (e.g. metal tokens placed on patients for site identification). Pooch et al. (2020) and subsequent work demonstrate consistent performance degradation across scanner manufacturers, acquisition protocols, and patient demographics. Nagendran et al. (2020, BMJ) publish a systematic review finding that most published AI imaging studies have methodological limitations and few demonstrate improved patient outcomes. The deployment gap is not a research quality problem — it is a structural feature of deep learning systems that learn dataset-specific features rather than task-relevant features. This is the transition event: accuracy on defined tasks is confirmed; whether \"defined tasks\" in research settings corresponds to \"defined tasks\" in deployment is contested.",
      vectors: ["contesting--deployment-gap-research-accuracy-does-not-generalise"],
      date: "2021–23",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Prospective deployment studies — mixed real-world performance",
      description: "Prospective studies of deployed AI imaging systems show mixed results. The STHLM3 trial (prostate cancer MRI) and MASAI trial (mammography AI triage) in Sweden demonstrate genuine clinical utility — AI-assisted screening detects more cancers with fewer false positives in prospective clinical settings. The NHS mammography AI trial shows AI performance matching radiologist consensus in a prospective setting. However, multiple deployed systems perform substantially below their research benchmarks in independent validation: AI-assisted chest X-ray triage shows variable performance across sites; skin lesion AI shows significant performance drop in diverse skin-tone populations. The picture is heterogeneous: some systems generalise successfully, others do not. The claim's \"defined tasks\" qualifier is doing significant work — whether the task is sufficiently defined to make accuracy reproducible varies by system and clinical context.",
      vectors: ["partial--some-prospective-success-systematic-generalisation-gaps-persist"],
      date: "2022–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "GPT-4V and foundation models — generalisation capability shift",
      description: "Large vision-language foundation models (GPT-4V, Med-PaLM 2, BioMedCLIP) demonstrate substantially better cross-domain generalisation than task-specific imaging AI. Singhal et al. (2023, Nature Medicine) show Med-PaLM 2 achieving expert-level performance on medical question answering including radiology. Foundation model-based medical imaging AI shows reduced distribution shift sensitivity and better performance on out-of-distribution cases than task-specific predecessors. This is a partial supportive update: the deployment gap documented in INST-003 may be a property of task-specific AI rather than of AI medical imaging in general. Foundation models appear to address some generalisation limitations. Whether this represents a qualitative shift in the claim's evidential status or merely an incremental improvement is contested — foundation model medical imaging AI is still undergoing prospective clinical validation.",
      vectors: ["partial--foundation-models-reduce-deployment-gap-prospective-validation-ongoing"],
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
      summary: "The claim's surface assertion — specialist-level accuracy on defined imaging tasks — is confirmed on curated research datasets across multiple imaging domains and by regulatory validation in prospective settings for specific cleared devices. The surface layer is advancing: AI medical imaging achieves specialist-level performance on well-defined tasks under controlled conditions. The surface claim is in ESCALATING territory. The claim fragments at the depth layer — specifically, at the boundary b",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK — MEASUREMENT VALIDITY (RN-005)",
      description: "Research dataset AUC as proxy for clinical deployment accuracy. The primary measurement tool for the claim — AUC on curated research datasets — is a proxy for the asserted object: specialist-level accuracy on imaging tasks as encountered in clinical practice. The proxy gap is the deployment generalisation problem: research datasets are curated, single-site, controlled acquisitions; clinical deploy",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Distribution shift from spurious correlations. Deep learning imaging systems learn features that correlate with the target label in training data, including features that are spurious artefacts of data collection (acquisition site markers, demographic patterns, equipment signatures). When deployed in new clinical environments, these spurious correlations break, producing accuracy degradation. The ",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Foundation model generalisation at clinical scale. The INST-005 evidence suggests foundation model-based medical imaging AI substantially reduces distribution shift sensitivity. If prospective multi-site trials demonstrate that foundation model-based systems maintain specialist-level accuracy across diverse clinical environments — without the performance degradation documented for task-specific AI",
    }
  ],

  lineage: {
    items: [
    { year: "2016–17", text: "Landmark accuracy studies. Dermatology, diabetic retinopathy, chest X-ray studies establish specialist-level accuracy on research datasets. The surface claim is confirmed in the literature." },
    { year: "2018–21", text: "FDA clearances and early deployment. First autonomous AI diagnostic devices cleared. Regulatory validation provides prospective evidence. The claim escalates." },
    { year: "2021–23", text: "Deployment gap systematically documented. Research accuracy fails to generalise across sites, demographics, equipment. The claim fragments at the benchmark-to-deployment boundary." },
    { year: "2023–24", text: "Foundation models partially address generalisation. Vision-language foundation models show reduced distribution shift. Prospective validation ongoing. The attractor shifts toward foundation model multi-site trials." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "BN-001 is the first measurement validity bottleneck in PROG-AI. RN-005 was developed from PROG-BT and PROG-AI (FR-AI-0007) evidence. Does its appearance here in an applied deployment claim — rather than a frontier capability claim — suggest that measurement validity is a broader AI phenomenon than previously established, or does it reflect a property specific to the benchmark-deployment gap in applied AI?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The deployment generalisation gap is a depth question structurally different from foundational uncertainty. Is this a new depth-layer category within PROG-AI, or is it the same surface/depth inversion described differently? If AI systems cannot reliably generalise their demonstrated capabilities to deployment environments, that is a depth failure even for surface claims.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "INST-005 (foundation model generalisation) is potentially an attractor that also bears on the measurement validity bottleneck: if foundation models generalise across clinical environments, research dataset AUC becomes a more reliable proxy for clinical deployment accuracy. Does resolving the deployment gap simultaneously resolve BN-001?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "diagnosis_held", from: "—", to: "DIAGNOSIS-HELD", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

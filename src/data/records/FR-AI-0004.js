/**
 * FR-AI-0004 — Scaling Laws — Emergent Performance on Unseen Tasks
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0004 = {
  id: "FR-AI-0004",
  programme: "PROG-AI",
  lastProvenanceReview: "2026-09-02",
  provenanceReviewId: "LPR-001-D04",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Scaling language model training increases performance on previously unseen tasks without task-specific optimisation.",
    shortLabel: "Scaling Laws — Emergent Performance on Unseen Tasks",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Kaplan et al. — Neural scaling laws for language models",
      description: "Kaplan et al. (OpenAI, 2020) establish empirical power-law relationships between language-model cross-entropy loss and model size, dataset size, and training compute, with some trends spanning more than seven orders of magnitude. The measurements are on held-out text prediction and therefore demonstrate predictable improvements in language-modelling loss as scale increases. They do not directly test performance on previously unseen tasks, nor do they establish that the observed held-out-loss improvements reflect task generalisation rather than memorisation. This is foundational evidence for the scaling mechanism that later task-level studies build on, but only indirect evidence for this record's task-generalisation claim.",
      vectors: ["partial--foundational-scaling-evidence"],
      date: "2020",
      sources: [
        {
          citation: "Kaplan, J. et al. (2020), Scaling Laws for Neural Language Models, arXiv:2001.08361.",
          url: "https://arxiv.org/abs/2001.08361",
          locator: "Abstract; cross-entropy-loss scaling with model size, dataset size and training compute",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "GPT-3 few-shot performance and emergent task generalisation",
      description: "Brown et al. (2020) demonstrate that GPT-3 (175B parameters) performs a wide range of tasks from few examples without gradient updates — in-context learning. Crucially, many of these tasks were not represented in training as explicit tasks. Performance on translation, arithmetic, and commonsense reasoning emerges without task-specific training at a scale where smaller models show near-zero performance. This is direct evidence for the claim: scaling produced performance on previously unseen tasks. The mechanism is debated — whether in-context learning constitutes task performance or sophisticated pattern matching is contested — but the performance itself is documented across diverse task types.",
      vectors: ["supportive--emergent-task-performance"],
      date: "2020–22",
      sources: [
        {
          citation: "Brown, T. B. et al. (2020), Language Models are Few-Shot Learners, NeurIPS 2020, arXiv:2005.14165.",
          url: "https://arxiv.org/abs/2005.14165",
          locator: "Abstract; few-shot evaluation without gradient updates; translation, arithmetic and reasoning tasks",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Wei et al. — Emergent abilities of large language models",
      description: "Wei et al. (2022, TMLR) document that certain capabilities appear discontinuously as model scale increases — absent below a threshold, present above it. Examples include multi-step arithmetic, word unscrambling, and chain-of-thought reasoning. These emergent abilities are not predictable from the smooth scaling curves documented by Kaplan et al.; they appear as sharp transitions. The paper strengthens the claim that scaling produces performance on unseen tasks, but introduces a complication: if emergence is discontinuous, scaling law extrapolation cannot reliably predict when new task performance will appear. This is an interior mechanism question — it does not threaten the claim's truth, but it constrains the predictive power of scaling as a mechanism.",
      vectors: ["partial--supportive-but-mechanism-complicates"],
      date: "2022",
      sources: [
        {
          citation: "Wei, J. et al. (2022), Emergent Abilities of Large Language Models, Transactions on Machine Learning Research, arXiv:2206.07682.",
          url: "https://arxiv.org/abs/2206.07682",
          locator: "Definition of emergent abilities; examples and scaling discussion",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Schaeffer et al. — Are emergent abilities a mirage?",
      description: "Schaeffer, Miranda, and Koyejo (2023, NeurIPS) present an alternative explanation for apparent emergent abilities. For particular tasks and model families, holding model outputs fixed, they show that nonlinear or discontinuous evaluation metrics can produce apparently sharp emergence while linear or continuous metrics yield smoother, more predictable changes with scale. Their experiments include the InstructGPT/GPT-3 family and BIG-Bench tasks. This is contesting evidence against treating every apparent emergence threshold as a fundamental discontinuity in capability. It does not establish that all scaling improvements are continuous and predictable, nor does it deny that larger models can achieve better task performance.",
      vectors: ["contesting--emergence-as-measurement-artefact"],
      date: "2023",
      sources: [
        {
          citation: "Schaeffer, R., Miranda, B. and Koyejo, S. (2023), Are Emergent Abilities of Large Language Models a Mirage?, NeurIPS 2023, arXiv:2304.15004.",
          url: "https://arxiv.org/abs/2304.15004",
          locator: "Abstract; metric-choice hypothesis; InstructGPT/GPT-3 and BIG-Bench analyses",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Benchmark contamination — evidence-quality constraint",
      description: "Golchin and Surdeanu (2023) develop black-box methods for detecting training-data contamination and report evidence that GPT-4 is contaminated with AG News, WNLI, and XSum. This establishes contamination as a material threat to the evidential value of benchmark results when training corpora are undisclosed. It does not establish the legacy claim that scaling gains on MMLU, HellaSwag, and ARC were partially caused by test-set overlap, nor does this source establish a general benchmark-saturation trend. The instance therefore contests the strength of benchmark-based generalisation evidence, rather than demonstrating that scaling-driven performance gains are themselves contamination-driven.",
      vectors: ["contesting--benchmark-contamination-risk"],
      date: "2023",
      sources: [
        {
          citation: "Golchin, S. and Surdeanu, M. (2023), Time Travel in LLMs: Tracing Data Contamination in Large Language Models, arXiv:2308.08493.",
          url: "https://arxiv.org/abs/2308.08493",
          locator: "Abstract; contamination-detection method; GPT-4 findings for AG News, WNLI and XSum",
        },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Chinchilla — compute-optimal training",
      description: "Hoffmann et al. (DeepMind, 2022) study compute-optimal language-model training and find that model size and training-token count should be scaled together under a fixed compute budget. Their 70B-parameter Chinchilla model, trained on substantially more data, outperforms much larger models including Gopher and GPT-3 across a broad range of downstream evaluations. The result refines the allocation of training scale between parameters and data and shows that additional data can materially improve downstream performance at fixed training compute. It does not independently establish that those gains are on genuinely previously unseen tasks or resolve contamination and task-novelty questions central to this record.",
      vectors: ["partial--scaling-confirmed-axis-refined"],
      date: "2022",
      sources: [
        {
          citation: "Hoffmann, J. et al. (2022), Training Compute-Optimal Large Language Models, arXiv:2203.15556.",
          url: "https://arxiv.org/abs/2203.15556",
          locator: "Abstract; compute-optimal scaling; Chinchilla downstream evaluations",
        },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Test-time compute scaling — Snell et al.",
      description: "Snell et al. (2024) study inference-time computation as a distinct scaling axis. They evaluate search with process-based verifier reward models and adaptive modification of a model's response distribution, finding that the effectiveness of test-time compute depends on prompt difficulty. A compute-optimal strategy improves test-time scaling efficiency by more than fourfold relative to a best-of-N baseline, and in FLOPs-matched evaluations a smaller model with additional test-time compute can outperform a model 14 times larger on problems where the smaller model already has non-trivial success. This establishes test-time compute as a real capability-scaling mechanism. It does not establish the broader legacy bundle about o1/o3, DeepSeek-R1, an industry consensus shift, training-scale saturation, or performance specifically on uncontaminated previously unseen tasks. Because this record's claim is explicitly about scaling language-model training, the result also sits partly outside the claim's present scope rather than directly supporting it.",
      vectors: ["partial--inference-scaling-outside-claim-scope"],
      date: "2024",
      sources: [
        {
          citation: "Snell, C. et al. (2024), Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters, arXiv:2408.03314.",
          url: "https://arxiv.org/abs/2408.03314",
          locator: "Abstract; compute-optimal test-time scaling; FLOPs-matched comparison with a 14x larger model",
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
      summary: "The claim is supported in its core assertion: scaling language model training does increase performance on previously unseen tasks without task-specific optimisation. This is documented across multiple model families, task types, and evaluation methodologies. The few-shot performance documented in INST-002, the smooth scaling curves in INST-001 and INST-006, and the emergent task capabilities in INST-003 all constitute positive evidence for the claim as stated. The evidence trail is nonetheless complicated by two interior disputes that do not threaten the claim's truth but substantially complicate its mechanism: whether apparent emergent abilities (INST-003) are genuine discontinuities or artefacts of metric choice (INST-004), and whether benchmark performance gains reflect genuine generalisation or training-data contamination (INST-005). The pressure state is FRAGMENTING: the claim's core assertion holds, but the evidence quality disputes over how and why it holds have not converged, and no agreed definition of 'previously unseen' yet exists to resolve them (BN-001).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim's core assertion remains supported, and the pressure state remains FRAGMENTING — IN-007 adds to the fragmentation rather than resolving it. Test-time compute and reasoning-model architectures (o1/o3, DeepSeek-R1) demonstrate that scaling inference-time computation, not only training-time parameters and data, improves performance on previously unseen reasoning tasks. This is a genuinely new mechanism for the claim's core phenomenon, not merely a third data point alongside Kaplan et al. and Chinchilla: the original claim statement (\"scaling language model training\") describes training-time scaling specifically, and IN-007's mechanism operates at inference time. By early 2026, field commentary describes a broader shift in where capability gains are expected to come from — inference and tooling rather than raw training-scale increases — which bears directly on BN-001 (no agreed definition of \"previously unseen\") and on the record's account of what \"scaling\" means well past the boundary AS-001 anticipated. This assessment does not propose a reclassification; it records that the claim's mechanism account is now materially incomplete without IN-007, two years into the record's life, in a field moving fast enough that the gap itself is notable.",
      assessorNote: "Sourced from: Medium, \"The State of Large Language Models: Latest Updates & Trends (2025–2026)\" (Feb 2026) for the inference/tooling consensus-shift framing; general field knowledge of o1 (Sept 2024), o3 (Dec 2024), and DeepSeek-R1 (Jan 2025) release timing and capability framing. The Medium source is a secondary roundup, not a primary research paper — adequate for establishing that a shift occurred, not for citing specific benchmark figures. Primary literature (e.g. the test-time-compute scaling papers referenced in FR-AI-0005's evidence trail) should be consulted before this assessment is extended with specific numbers.",
    },
    {
      id: "AS-003",
      date: "2026-09-02",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "LPR-001-D04 corrects the source interpretation underlying parts of AS-001 and AS-002 without rewriting those historical assessments. The task-level core remains supported, principally by GPT-3 few-shot evaluations (IN-002) and the documented emergence literature (IN-003), but the evidence is narrower than AS-001 stated: Kaplan et al. (IN-001) establish predictable scaling of held-out language-model loss rather than unseen-task performance; Chinchilla (IN-006) establishes compute-optimal training and broad downstream gains rather than independently proving task novelty; and the contamination evidence (IN-005) establishes a serious measurement risk without showing that the record's cited benchmark gains were themselves contamination-driven. Schaeffer et al. (IN-004) narrow the emergence dispute to metric-dependent apparent discontinuities in particular evaluated settings, not a universal proof that scaling is continuous. Test-time compute (IN-007) is now anchored to primary evidence from Snell et al.; it is a genuine scaling mechanism but operates at inference time and therefore sits partly outside the claim's explicit training-scaling scope. The corrected evidence still does not converge on a clean account of what counts as a previously unseen task, how much benchmark evidence is contamination-free, or whether inference scaling belongs inside this claim. FRAGMENTING / VS-03 is therefore retained, with lower confidence in the stronger historical formulations but no basis for a state or stage change.",
      assessorNote: "Governed assessment correction following LPR-001-D04. AS-001 and AS-002 are preserved append-only as historical judgements; AS-003 supersedes only the source-fidelity claims identified by the provenance review. No new evidence instance was admitted through LPR-001.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Training data contamination. For closed models, training data content is not fully disclosed. When a model performs well on a benchmark, the possibility that benchmark instances appeared in training data cannot be fully excluded. This mechanism creates a structural limitation on the evidential value of benchmark performance gains: positive results are always partially contestable on contamination ",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Metric-dependence of apparent emergence. As documented by Schaeffer et al. (INST-004), apparent discontinuities in scaling curves are sensitive to metric choice. What appears as an emergent ability under one evaluation metric may appear as a smooth continuous improvement under another. This creates a resistance mechanism specific to the claim's language: \"increases performance\" can be measured in ",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "No agreed definition of \"previously unseen.\" The claim requires that performance improvements occur on tasks the model has not been specifically trained on. But \"previously unseen\" is ambiguous across several dimensions: whether a task type appeared in training data, whether specific instances appeared, whether structural analogues appeared, and whether the model's in-context learning constitutes ",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Open-weights models with disclosed training data. The contamination resistance mechanism (RM-001) and the \"previously unseen\" bottleneck (BN-001) both weaken substantially for models where training data is fully disclosed and verifiable. Open-weights models with documented training sets — LLaMA, Mistral, and similar — permit principled contamination analysis. As the open-weights ecosystem matures ",
    }
  ],

  lineage: {
    items: [
    { year: "2017–19", text: "Transformer scaling begins. GPT-1 and GPT-2 demonstrate that language model performance improves with scale. Task generalisation is observed informally but not systematically measured against scaling curves." },
    { year: "2020", text: "Scaling laws quantified; GPT-3 demonstrates emergent few-shot performance. Kaplan et al. establish the power-law relationship. Brown et al. demonstrate that scale produces in-context task performance across diverse previously unseen tasks. The claim enters ESCALATING." },
    { year: "2022", text: "Emergent abilities documented and immediately contested. Wei et al. document discontinuous emergence. Schaeffer et al. challenge the discontinuity interpretation. The mechanism debate opens as an interior question." },
    { year: "2022–23", text: "Chinchilla refines scaling; contamination becomes systematic concern. Hoffmann et al. correct the parameter-data balance. Contamination literature matures. The claim enters FRAGMENTING as evidence quality disputes compound." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can an agreed operational definition of \"previously unseen task\" be established — one that resolves the contamination question and the structural-analogue question simultaneously? Without this, BN-001 cannot be closed regardless of experimental output. This is the primary interior bottleneck.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Are apparent emergent abilities genuine discontinuities in capability, or continuous improvements made visible by nonlinear metrics? The Schaeffer et al. result is significant but contested. The answer matters for whether scaling law extrapolation can predict future task performance.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "PROG-AI now contains a substrate inversion: the foundational mechanism record (FR-AI-0004) is FRAGMENTING while downstream consequence records are ESCALATING. Does this inversion resolve as the scaling mechanism clarifies, or does the programme continue to build capability evidence on a contested mechanistic foundation?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "IN-007 introduces test-time/inference-time compute as a scaling axis the claim's original statement did not anticipate. Should the claim statement itself be revised to cover this — \"scaling language model training and inference\" — or does the Canonical Reality Principle's discipline (claims are stated as narrowly as the evidence warrants, scope changes go through the mutation log, not silent rewording) mean this is better tracked as an open question indefinitely, or spun into a related but distinct record? This is the same kind of structural question OQ-001 raises for \"previously unseen,\" now recurring for \"scaling.\"",
      raisedDate: "2026-06-29",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-013", date: "2026-09-02", field: "assessment_issued", from: "AS-002", to: "AS-003", note: "AS-003 issued as the governed append-only assessment correction after LPR-001-D04. It narrows historical source interpretations while retaining FRAGMENTING / VS-03. AS-001 and AS-002 remain unchanged as historical judgements; no new evidence admitted." },
    { id: "M-012", date: "2026-09-02", field: "provenance_correction", from: "LPR-001-D04 discrepancies_found", to: "DISCREPANCIES-CORRECTED", note: "Governed bounded correction applied to IN-001, IN-004, IN-005, IN-006, and IN-007. Structured primary-source provenance added; unsupported claims about unseen-task proof, universal continuity, benchmark-specific contamination/saturation, 2024 dating of Chinchilla, and bundled test-time-compute consensus/saturation claims were removed or bounded. IN-002 and IN-003 remain as verified during the original provenance pass." },
    { id: "M-011", date: "2026-09-02", field: "provenance_review", from: "—", to: "LPR-001-D04", note: "Legacy provenance review completed. Structured provenance added to IN-002 and IN-003. Material source-fidelity discrepancies identified in IN-001, IN-004, IN-005, IN-006, and IN-007 and left unchanged pending governed correction approval. No new scientific evidence admitted; assessments, pressure state, and verification stage unchanged." },
    { id: "M-010", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-007 description reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-009", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: whether the claim statement's scope should be revisited now that a second scaling axis (test-time compute) has emerged." },
    { id: "M-008", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records. Pressure state unchanged: FRAGMENTING. New evidence (IN-007) adds a genuinely new mechanism (test-time compute) not anticipated by the original claim statement." },
    { id: "M-007", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-007 added: test-time compute / reasoning models (o1/o3, DeepSeek-R1) as a second scaling axis, plus 2025–26 field consensus on inference-driven progress." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_boundary_condition_met", from: "—", to: "NULL-BOUNDARY-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
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

  claim: {
    statement: "Scaling language model training increases performance on previously unseen tasks without task-specific optimisation.",
    shortLabel: "Scaling Laws — Emergent Performance on Unseen Tasks",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Kaplan et al. — Neural scaling laws for language models",
      description: "Kaplan et al. (OpenAI, 2020) publish the foundational scaling law paper establishing that language model performance on held-out text prediction improves as a smooth power law with model size, dataset size, and compute. The relationship holds across six orders of magnitude. Critically, the paper establishes that performance improvements on held-out data — tasks the model has not been specifically trained on — follow predictable scaling curves. This is the first systematic quantitative evidence that scaling produces generalisation rather than merely memorisation. The paper does not address task-specific performance directly, but the held-out prediction improvement is the mechanism from which downstream task performance improvements are subsequently attributed.",
      vectors: ["supportive--foundational-scaling-evidence"],
      date: "2020",
    },
    {
      id: "IN-002",
      qualifiedEvent: "GPT-3 few-shot performance and emergent task generalisation",
      description: "Brown et al. (2020) demonstrate that GPT-3 (175B parameters) performs a wide range of tasks from few examples without gradient updates — in-context learning. Crucially, many of these tasks were not represented in training as explicit tasks. Performance on translation, arithmetic, and commonsense reasoning emerges without task-specific training at a scale where smaller models show near-zero performance. This is direct evidence for the claim: scaling produced performance on previously unseen tasks. The mechanism is debated — whether in-context learning constitutes task performance or sophisticated pattern matching is contested — but the performance itself is documented across diverse task types.",
      vectors: ["supportive--emergent-task-performance"],
      date: "2020–22",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Wei et al. — Emergent abilities of large language models",
      description: "Wei et al. (2022, TMLR) document that certain capabilities appear discontinuously as model scale increases — absent below a threshold, present above it. Examples include multi-step arithmetic, word unscrambling, and chain-of-thought reasoning. These emergent abilities are not predictable from the smooth scaling curves documented by Kaplan et al.; they appear as sharp transitions. The paper strengthens the claim that scaling produces performance on unseen tasks, but introduces a complication: if emergence is discontinuous, scaling law extrapolation cannot reliably predict when new task performance will appear. This is an interior mechanism question — it does not threaten the claim's truth, but it constrains the predictive power of scaling as a mechanism.",
      vectors: ["partial--supportive-but-mechanism-complicates"],
      date: "2022",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Schaeffer et al. — Are emergent abilities a mirage?",
      description: "Schaeffer, Miranda, and Koyejo (2023, NeurIPS) argue that emergent abilities documented by Wei et al. are artefacts of metric choice rather than genuine discontinuities in model capability. When nonlinear metrics (accuracy on multi-step tasks) are replaced by linear metrics (token-level prediction probability), apparent discontinuities smooth out into continuous scaling curves. The paper contends that emergence is a property of measurement, not capability. If correct, this is a significant interior contesting result: it does not deny that scaling improves performance on unseen tasks, but it challenges the discontinuous mechanism and suggests that all scaling improvements are continuous and predictable. The claim's truth is not threatened; its mechanism interpretation is substantially complicated.",
      vectors: ["contesting--emergence-as-measurement-artefact"],
      date: "2023",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Scaling law limitations — benchmark saturation and contamination",
      description: "Multiple papers document that scaling improvements on standard benchmarks (MMLU, HellaSwag, ARC) slow substantially as models approach human-level performance on those benchmarks, and that some apparent improvements may reflect training data contamination rather than genuine generalisation. Golchin and Surdeanu (2023) and related work develop data contamination detection methods, finding evidence that high-profile benchmark performance gains are partially attributable to test-set overlap with training data. This is the strongest interior contesting evidence in the record: if benchmark improvements are contamination-driven, the claim that scaling produces performance on previously unseen tasks is directly challenged. The contamination question is a measurement and evidence quality issue — an interior question — not a claim identity or closure question.",
      vectors: ["contesting--contamination-and-saturation"],
      date: "2023",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Chinchilla scaling laws and compute-optimal training",
      description: "Hoffmann et al. (DeepMind, 2022/published impact 2023–24) demonstrate that Kaplan et al.'s scaling laws systematically underweighted data relative to parameters. Chinchilla (70B parameters, trained on 1.4T tokens) outperforms GPT-3 (175B parameters, trained on 300B tokens) across most benchmarks, suggesting that prior large models were substantially undertrained. The result refines rather than refutes scaling: scaling laws hold, but the optimal allocation between parameters and data differs from prior assumptions. For the claim, this is partial-supportive: it strengthens confidence that scaling produces genuine performance improvements, but it complicates which scaling axis is primary. The Chinchilla result is an interior mechanism finding — it updates how scaling should be implemented without challenging whether it works.",
      vectors: ["partial--scaling-confirmed-axis-refined"],
      date: "2024",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim is supported in its core assertion: scaling language model training does increase performance on previously unseen tasks without task-specific optimisation. This is documented across multiple model families, task types, and evaluation methodologies. The few-shot performance documented in INST-002, the smooth scaling curves in INST-001 and INST-006, and the emergent task capabilities in INST-003 all constitute positive evidence for the claim as stated. The evidence trail is nonetheless ",
      assessorNote: null,
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
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_boundary_condition_met", from: "—", to: "NULL-BOUNDARY-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

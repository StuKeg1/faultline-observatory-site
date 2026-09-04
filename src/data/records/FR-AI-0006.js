/**
 * FR-AI-0006 — Scaling Mechanism Coherence — Continuity Across Model Sizes
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0006 = {
  id: "FR-AI-0006",
  programme: "PROG-AI",
  lastProvenanceReview: "2026-09-04",
  provenanceReviewId: "LPR-001-D06",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Capabilities that emerge through scaling language models are explained by the same underlying mechanism across model sizes.",
    shortLabel: "Scaling Mechanism Coherence — Continuity Across Model Sizes",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Anthropic mechanistic interpretability — induction heads and in-context learning",
      description: "Olsson et al. (Anthropic, 2022) identify \"induction heads\" — attention-head circuits that implement a form of pattern completion — as a candidate mechanism for in-context learning across transformer sizes. The paper provides strong causal evidence in small attention-only models, including ablation and mechanistic reverse engineering, while evidence in larger models with MLPs is mainly correlational and partly extrapolative. Induction heads recur across the model sweep and are associated with the onset of in-context learning, supporting mechanistic continuity, but the paper does not causally establish that induction heads explain in-context learning across the full model-size range. This remains important supportive evidence for the claim, with the strength of causal attribution decreasing at larger scale.",
      vectors: ["supportive--mechanistic-continuity-demonstrated"],
      date: "2022",
      sources: [
        {
          citation: "Olsson, C. et al. (2022), In-context Learning and Induction Heads, Transformer Circuits Thread.",
          url: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html",
          locator: "Summary of Evidence for Sub-Claims; Arguments 1–6; Model Analysis Table",
        },
        {
          citation: "Olsson, C. et al. (2022), In-context Learning and Induction Heads, arXiv:2209.11895.",
          url: "https://arxiv.org/abs/2209.11895",
          locator: "Abstract",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Emergent abilities and the quantization hypothesis — mechanism identity remains underdetermined",
      description: "Wei et al. (2022) define emergent abilities as abilities absent in smaller models but present in larger models and document behavioural transitions that are not predictable by straightforward extrapolation from smaller-model performance. That result concerns observed capability, not the identity of the underlying mechanism, so behavioural discontinuity does not by itself establish that a new mechanism has appeared. Michaud et al. (2023) propose the Quantization Model, in which knowledge and skills are learned as discrete quanta; the model is intended to reconcile power-law scaling with sudden capability emergence and is supported by toy-data tests plus tentative language-model analyses. It is a mechanistic hypothesis rather than a demonstration that the same mechanism operates across model sizes. Together these sources show that emergence can be modelled without assuming a wholly new mechanism, while leaving the record's cross-scale mechanism-identity claim unresolved.",
      vectors: ["partial--emergence-mechanism-underdetermined"],
      date: "2022–23",
      sources: [
        {
          citation: "Wei, J. et al. (2022), Emergent Abilities of Large Language Models, Transactions on Machine Learning Research, arXiv:2206.07682.",
          url: "https://arxiv.org/abs/2206.07682",
          locator: "Definition of emergent abilities; scaling discussion",
        },
        {
          citation: "Michaud, E. J. et al. (2023), The Quantization Model of Neural Scaling, NeurIPS 2023, arXiv:2303.13506.",
          url: "https://arxiv.org/abs/2303.13506",
          locator: "Abstract; Quantization Hypothesis; toy-data validation and language-model decomposition",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Toy models of superposition — representational compression mechanism",
      description: "Elhage et al. (2022) use deliberately simplified toy neural networks to show how sparse features can be represented in superposition, allowing a model to encode more features than it has available dimensions and producing polysemantic neurons. The work demonstrates a concrete representational mechanism and phase changes within the toy setting. It does not compare language models across scale and therefore does not establish the legacy claim that larger language models encode more concepts per neuron while smaller models exhibit less superposition. The result is relevant background for how representation can change as capacity pressure changes, but it provides no direct positive or negative evidence about cross-scale mechanism identity in deployed language models.",
      vectors: ["partial--representational-mechanism-not-cross-scale"],
      date: "2022",
      sources: [
        {
          citation: "Elhage, N. et al. (2022), Toy Models of Superposition, Transformer Circuits Thread, arXiv:2209.10652.",
          url: "https://arxiv.org/abs/2209.10652",
          locator: "Abstract; toy-model superposition and polysemanticity results",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Grokking — gradual circuit formation behind delayed generalisation",
      description: "Power et al. (2022) document grokking on small algorithmic datasets: networks can reach near-perfect training performance and only much later transition from chance-level to strong generalisation. Nanda et al. (2023) then reverse-engineer grokking in small transformers trained on modular addition, identifying a Fourier-based algorithm and three continuous training phases — memorisation, circuit formation, and cleanup. This is strong mechanistic evidence that an apparently sudden behavioural transition can arise from gradual internal circuit development in the studied small-model setting. Neither paper performs the cross-model-size comparison needed to support the legacy claim that larger models form the same circuits earlier or more reliably. The evidence therefore informs how emergence can occur without demonstrating continuity across model sizes.",
      vectors: ["partial--mechanistic-emergence-not-cross-scale"],
      date: "2022–23",
      sources: [
        {
          citation: "Power, A. et al. (2022), Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets, arXiv:2201.02177.",
          url: "https://arxiv.org/abs/2201.02177",
          locator: "Abstract; delayed generalisation after overfitting",
        },
        {
          citation: "Nanda, N. et al. (2023), Progress Measures for Grokking via Mechanistic Interpretability, ICLR 2023, arXiv:2301.05217.",
          url: "https://arxiv.org/abs/2301.05217",
          locator: "Abstract; reverse-engineered modular-addition circuit; memorisation, circuit formation and cleanup phases",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Legacy representation-geometry attribution — provenance unresolved",
      description: "The legacy instance attributed a specific bundle of cross-scale representation-geometry findings — greater linear separability, more distinct concept subspaces, and more structured attention in larger models — to unspecified 2023–24 mechanistic-interpretability work. LPR-001-D06 could not confidently reconstruct a source set supporting that exact historical representation. Those claims are therefore withdrawn from the current evidential basis rather than retrofitted to a substitute source. IN-005 remains visible as explicit legacy provenance debt and contributes no substantive evidence for or against cross-scale mechanism continuity pending a normal governed Record Review.",
      vectors: ["partial--legacy-provenance-unresolved"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Emergent symbolic mechanisms for abstract reasoning — cross-scale circuit evidence",
      description: "Yang et al. (ICML 2025) identify a three-stage symbolic architecture for abstract rule induction: symbol-abstraction heads, symbolic-induction heads, and retrieval heads. Their experiments span 13 models from four model families and report that the specialized mechanisms become more evident with model capability and scale, while smaller models that perform poorly on the tasks show little evidence of the same specialized mechanism. This is material contesting evidence for a simple continuity claim: for at least one reasoning capability, the evidence is consistent with a structured mechanism becoming established with sufficient scale rather than an unchanged circuit merely strengthening continuously. The result does not settle the record because mechanism identity remains abstraction-dependent and the study covers specific reasoning tasks rather than capabilities generally.",
      vectors: ["contesting--specialized-symbolic-mechanism-emerges-with-scale"],
      date: "2025-07-17",
      sources: [
        {
          citation: "Yang, Y. et al. (2025), Emergent Symbolic Mechanisms Support Abstract Reasoning in Large Language Models, Proceedings of Machine Learning Research 267, ICML 2025.",
          url: "https://proceedings.mlr.press/v267/yang25c.html",
          locator: "Abstract and model-scale analyses",
        },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Scale-dependent predictive representation geometry — Xu preprint",
      description: "Xu (2026) introduces Subspace PGA to test whether the geometry of intermediate hidden representations is organised around the unembedding readout subspace used for next-token prediction. Across seven Pythia models from 70M to 6.9B, trained on the same data and tokenizer, the study reports a scale-dependent regime: smaller models (hidden dimension at or below 1024) progressively lose predictive alignment in late layers during training, while larger models (dimension at or above 2048) preserve it across intermediate layers. Cross-family checks on Phi-1.5, OLMo-1B, and Gemma-2-2B broadly support the capacity interpretation while also showing architecture-specific variation. The paper attributes the small-model effect to a capacity trade-off in which dominant directions move away from the readout subspace; importantly, removing those directions restores alignment, so the predictive structure is described as masked rather than destroyed. This is direct cross-scale evidence that models of different sizes can organise internal geometry differently while retaining related underlying predictive structure. It therefore pressures a simple 'same mechanism means same organisation' reading, but does not establish a wholly different computational mechanism at larger scale. The result is a 2026 preprint under review and the proposed metric has not yet received independent replication.",
      vectors: ["partial--scale-dependent-predictive-geometry"],
      date: "2026-05-16",
      sources: [
        {
          citation: "Xu, W. (2026), Scale Determines Whether Language Models Organize Representation Geometry for Prediction, arXiv:2605.17084v1.",
          url: "https://arxiv.org/abs/2605.17084",
          locator: "Abstract; §§4–5; seven-model Pythia scale sweep; cross-architecture validation; limitations",
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
      summary: "The evidence trail is genuinely mixed and the mixing is interior — it concerns what the mechanisms actually are, not what the claim means or whether it can be assessed. INST-001 provides the strongest positive evidence: induction heads demonstrate that a specific mechanism (pattern-completion circuits) is present and causally responsible for the same capability across a wide range of model sizes. This is mechanistic continuity directly observed. The grokking evidence (INST-004) is consistent with mechanistic continuity — the same type of algorithmic circuit forms across model sizes, though its timing differs with scale. Superposition (INST-003) and representation-geometry research (INST-005) complicate the picture further: larger models appear to organise their internal representations differently, which is consistent with either the same mechanism operating differently at scale or a qualitatively different computational strategy. The pressure state is FRAGMENTING: the dispute is interior and definitional rather than a lack of evidence — what counts as 'the same mechanism' has not been agreed (BN-001), and until it is, further mechanistic interpretability findings will continue to be read differently by researchers with different priors.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-08-29",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "IN-006 adds direct mechanistic evidence from abstract reasoning that specialized symbolic-processing circuitry is substantially associated with capable larger models and is weak or absent in smaller models that do not perform the task. This increases pressure on a simple cross-scale continuity reading, while not resolving the claim: the result is task-specific, and BN-001 remains decisive because whether an emergent specialized circuit counts as a new mechanism depends on the level of abstraction used for mechanism identity. FRAGMENTING is therefore retained. VS-03 is retained provisionally because the new evidence uses causal mediation and ablation-style mechanistic scrutiny; PA-005 does not reopen the historical stage classification beyond the evidence reviewed here.",
      assessorNote: "PA-005 provenance-in-review replication trial. New evidence provenance captured at admission. Attempted opportunistic enrichment of IN-001 exposed a material wording/provenance discrepancy and was stopped for separate bounded correction review.",
    },
    {
      id: "AS-003",
      date: "2026-09-04",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "LPR-001-D06 narrows the historical evidence underlying AS-001 without rewriting that assessment. Olsson et al. (IN-001) remain the strongest continuity evidence, but causal support is strongest in small attention-only models and becomes mainly correlational in larger models; the record therefore cannot describe cross-scale causal continuity as directly established. Wei and Michaud (IN-002) address behavioural emergence and a proposed quantized scaling model without determining mechanism identity across model sizes. Elhage et al. (IN-003) establish superposition in toy networks, and the grokking literature (IN-004) reverse-engineers gradual circuit formation in small transformers; neither supplies the cross-scale comparisons AS-001 previously inferred. The legacy representation-geometry bundle in IN-005 is withdrawn from the current evidential basis because its provenance could not be reconstructed. IN-006 remains direct cross-model evidence that specialized symbolic circuitry becomes more evident in capable larger models, increasing pressure on a simple continuity reading. FRAGMENTING / VS-03 is retained on this narrower basis: some continuity evidence exists, some task-specific evidence points toward scale-associated mechanistic specialization, and the governing definition of 'same mechanism' remains unresolved.",
      assessorNote: "Governed assessment correction following LPR-001-D06. AS-001 and AS-002 remain visible append-only as historical judgements. No new evidence instance was admitted through LPR-001; the separately identified 2026 representation-geometry preprint remains a normal Record Review candidate.",
    },
    {
      id: "AS-004",
      date: "2026-09-04",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "Normal Record Review admits IN-007 as genuinely new cross-scale representation evidence. Xu's scale sweep supplies the type of direct small-versus-large comparison that the corrected legacy IN-003 through IN-005 lacked: predictive representation geometry follows different late-layer regimes in smaller and larger models. That result increases pressure on a strong continuity reading if mechanism identity is defined at the level of internal organisation. At the same time, the paper's own masking result cuts against treating the regime shift as proof of a wholly new mechanism: predictive structure remains recoverable beneath the dominant off-readout directions. IN-007 therefore deepens rather than resolves the record's central ambiguity. Together with IN-001 and IN-006, the evidence now contains meaningful support for both recurring structure and scale-associated specialisation, while BN-001 still prevents a stable answer to whether those observations count as the 'same underlying mechanism.' FRAGMENTING / VS-03 is retained. The evidential weight is moderated because IN-007 is a single-author preprint, introduces a new metric, and is not yet independently replicated.",
      assessorNote: "Bounded Record Review of Xu (2026), arXiv:2605.17084v1, originally surfaced as an LPR-001-D06 Record Review candidate. IN-007 is admitted as new evidence with primary provenance. It does not retroactively repair or replace unresolved legacy IN-005.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Mechanistic interpretability does not yet scale to large models. The strongest positive evidence in this record (INST-001, induction heads) comes from mechanistic interpretability work conducted primarily on small to medium models (up to a few billion parameters). The techniques that identify and verify specific circuits — activation patching, attention head ablation, causal intervention — become ",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Same mechanism\" lacks an agreed operational definition. The claim requires that capabilities are explained by \"the same underlying mechanism\" across model sizes. Whether two mechanisms are \"the same\" depends on the level of abstraction at which identity is assessed. At the architectural level, all transformer models use the same mechanism (attention and MLP layers). At the circuit level, similar ",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Scalable mechanistic interpretability. The resolution path for this record is the development of mechanistic interpretability techniques that can operate at frontier model scale — identifying and verifying specific circuits in models with hundreds of billions of parameters. If such techniques are developed and applied to frontier models, they would either confirm that the same circuit types are ca",
    }
  ],

  lineage: {
    items: [
    { year: "2020–21", text: "Scaling laws assume mechanistic continuity implicitly. Kaplan et al. scaling laws treat capability as a smooth function of scale, implicitly assuming continuous underlying mechanisms. The mechanistic question is not asked." },
    { year: "2022", text: "Mechanistic interpretability makes parts of the continuity question empirically tractable. Olsson et al. identify induction heads with strong causal evidence in small attention-only models and mainly correlational evidence in larger models. Elhage et al. provide a toy-model account of superposition, relevant to representational mechanism but not a cross-scale language-model comparison." },
    { year: "2022–23", text: "Emergent abilities and mechanistic explanations separate. Wei et al. document behavioural emergence with scale; Michaud et al. propose quantized skill acquisition as one explanation; grokking work shows apparently sudden behavioural transitions can arise from gradual circuit formation in small transformers. None of these results alone determines whether the same mechanism persists across model sizes." },
    { year: "2024–25", text: "The legacy 2024 representation-geometry attribution cannot be confidently reconstructed and is withdrawn from the current evidential basis. In 2025, Yang et al. provide direct cross-model evidence that specialized symbolic mechanisms are associated with capable larger models, sharpening rather than resolving the continuity question." },
    { year: "2026", text: "Xu introduces Subspace PGA and reports a scale-dependent regime in predictive representation geometry across seven Pythia models, with cross-family checks. Smaller models lose late-layer predictive alignment while larger models preserve it, yet the underlying predictive structure can be recovered after removing dominant off-readout directions. The result supplies direct cross-scale representation evidence while preserving the mechanism-identity ambiguity." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What level of mechanistic abstraction is required for \"same mechanism\" to be satisfied? Architectural (all transformers), circuit-type (induction heads appear at all scales), or computational strategy (circuits used similarly)? Until this is agreed, BN-001 cannot close regardless of experimental output.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "PROG-AI now contains three records with lexical bottlenecks of the same type (FR-AI-0004, FR-AI-0005, FR-AI-0006). This is a programme-level pattern. Does it suggest that AI claims are particularly susceptible to lexical bottlenecks, or that the field is in an early stage where key terms have not yet been operationalised? Either interpretation has consequences for how the programme develops.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "If scalable mechanistic interpretability is achieved (AT-001), would it resolve the claim? Or would the definitional bottleneck (BN-001) mean that even direct circuit evidence is interpreted differently by researchers with different priors about what \"same mechanism\" requires?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-015", date: "2026-09-04", field: "assessment_issued", from: "AS-003", to: "AS-004", note: "Normal Record Review reassessed FR-AI-0006 after admission of IN-007. Xu's 2026 cross-scale representation-geometry result deepens the continuity/discontinuity ambiguity but does not resolve mechanism identity. FRAGMENTING / VS-03 retained; preprint and replication limitations recorded." },
    { id: "M-014", date: "2026-09-04", field: "instance_added", from: "—", to: "IN-007", note: "Normal Record Review admitted Xu (2026), arXiv:2605.17084v1: Subspace PGA evidence of scale-dependent predictive representation geometry across seven Pythia models with three cross-family checks. Admitted as new evidence with primary provenance; not used to retrofit unresolved legacy IN-005." },
    { id: "M-013", date: "2026-09-04", field: "assessment_correction", from: "AS-002", to: "AS-003", note: "AS-003 appended after the approved LPR-001-D06 bounded correction. Historical AS-001/AS-002 preserved. Current judgement retains FRAGMENTING / VS-03 on the narrower source-faithful basis established by corrected IN-001 through IN-006. Affected lineage wording was aligned to the corrected historical evidence; no new evidence instance admitted." },
    { id: "M-012", date: "2026-09-04", field: "provenance_correction", from: "LPR-001-D06 discrepancies_found", to: "LEGACY-INSTANCES-CORRECTED", note: "Governed bounded correction applied to IN-002 through IN-005. IN-002 aligned to Wei et al. and Michaud et al.; IN-003 bounded to Elhage et al.'s toy-model superposition evidence; IN-004 bounded to Power et al. and Nanda et al.'s small-model grokking evidence; unsupported IN-005 cross-scale geometry claims withdrawn and retained as explicit provenance debt without retrofitted source. No new evidence admitted." },
    { id: "M-011", date: "2026-09-04", field: "provenance_review", from: "—", to: "LPR-001-D06", note: "Legacy provenance review completed. All six evidence instances examined. IN-001 and IN-006 structured provenance verified. Material source-fidelity discrepancies identified in IN-002, IN-003, and IN-004; IN-005 legacy attribution could not be confidently reconstructed and was left unchanged. No new scientific evidence admitted and no assessment, pressure-state, or verification-stage changes made. Review marked pending governed correction." },
    { id: "M-010", date: "2026-08-29", field: "provenance_enriched", from: "IN-001 without structured provenance", to: "IN-001 sources[] added", note: "Added primary Transformer Circuits and arXiv provenance for Olsson et al. (2022) after bounded source review." },
    { id: "M-009", date: "2026-08-29", field: "editorial_correction", from: "IN-001 described causal responsibility across the full model-size range", to: "IN-001 distinguishes causal small-model evidence from mainly correlational larger-model evidence", note: "Editorial Correction: aligned IN-001 and matching 2022 lineage wording with Olsson et al.'s stated evidence strength. No new evidence instance and no reassessment; FRAGMENTING / VS-03 remains current under AS-002." },
    { id: "M-008", date: "2026-08-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "PA-005 review: FRAGMENTING / VS-03 retained after admission of IN-006." },
    { id: "M-007", date: "2026-08-29", field: "instance_added", from: "—", to: "IN-006", note: "PA-005: Yang et al. ICML 2025 cross-scale symbolic-mechanism evidence admitted with structured provenance." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
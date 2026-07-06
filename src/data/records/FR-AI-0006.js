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

  claim: {
    statement: "Capabilities that emerge through scaling language models are explained by the same underlying mechanism across model sizes.",
    shortLabel: "Scaling Mechanism Coherence — Continuity Across Model Sizes",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Anthropic mechanistic interpretability — induction heads and in-context learning",
      description: "Olsson et al. (Anthropic, 2022) identify \"induction heads\" — specific attention head circuits that implement a form of pattern completion — as a mechanistic explanation for in-context learning across model sizes from small (tens of millions of parameters) to large (billions). The paper demonstrates that the same circuit type, performing the same computational operation, is present and causally responsible for in-context learning across a range of model sizes. This is direct supportive evidence for the claim: a specific capability (in-context learning) is explained by the same mechanism (induction head circuits) across model sizes. The paper is the strongest single piece of mechanistic continuity evidence in the record.",
      vectors: ["supportive--mechanistic-continuity-demonstrated"],
      date: "2022",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Emergent abilities as phase transitions — discontinuity evidence",
      description: "Wei et al. (2022) document emergent abilities appearing discontinuously at scale — absent below a threshold, present above it. If emergence is genuinely discontinuous, it is difficult to explain by a mechanism that is simply amplified across scale; a new mechanism would be implied. Michaud et al. (2023) propose that emergent abilities reflect the learning of discrete \"quanta\" of knowledge during training, consistent with a continuous underlying learning mechanism producing discontinuous-appearing outputs. The dispute remains unresolved: genuine discontinuity (new mechanism) versus continuous mechanism producing threshold-crossing outputs. The Schaeffer et al. (2023) metric-artefact argument (documented in FR-AI-0004) is relevant here — if apparent discontinuities are metric artefacts, the continuity case is stronger; if they are real, the case for mechanistic discontinuity strengthens.",
      vectors: ["contesting--discontinuity-implies-mechanism-change"],
      date: "2022–23",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Superposition and polysemanticity — mechanism complexity increases with scale",
      description: "Elhage et al. (Anthropic, 2022/2023) document that larger models encode more concepts per neuron through superposition — a single neuron activates for multiple unrelated features simultaneously. Smaller models exhibit less superposition. This is a mechanistic difference between model sizes: larger models use their representational capacity differently, not just more of the same. The finding is partial rather than directly contesting: superposition may be a quantitative difference in how the same underlying attention and MLP mechanisms are used, rather than a qualitatively different mechanism. Whether the difference in superposition degree constitutes a mechanistic change depends on how \"same mechanism\" is defined — which points toward the boundary of the Scope Note.",
      vectors: ["partial--mechanistic-complexity-increases-with-scale"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Grokking and delayed generalisation — mechanism timing differs across scales",
      description: "Power et al. (2022) document \"grokking\" — models that memorise training data initially and then, after extended training, suddenly generalise. The phenomenon is more pronounced at smaller model sizes. Nanda et al. (2023) provide a mechanistic explanation: grokking represents the formation of a compact algorithmic circuit that replaces memorisation. Larger models appear to form similar circuits earlier and more reliably, suggesting the mechanism is the same but its dynamics differ with scale. This is partial supportive evidence: the same type of mechanism (algorithmic circuit formation) appears across scales, but the conditions and timing under which it activates differ. The finding is consistent with mechanistic continuity while noting that scale changes the dynamics of the same mechanism.",
      vectors: ["partial--same-mechanism-type-different-dynamics"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Scaling and representation geometry — qualitative changes in internal structure",
      description: "Multiple mechanistic interpretability papers in 2023–24 (including work from Anthropic's interpretability team and academic groups) find that the geometric structure of internal representations changes qualitatively with scale — not just in size but in organisation. Larger models develop more linearly separable representations, more distinct concept subspaces, and more structured attention patterns than smaller models trained on the same data. These structural changes are consistent with the same architectural mechanisms (attention, MLP layers) operating differently at scale, which could be interpreted as either mechanistic continuity (same type of mechanism) or discontinuity (different computational strategy). The evidence is genuinely ambiguous: the mechanisms are recognisably the same type, but whether they constitute \"the same mechanism\" in the sense the claim requires depends on a definition the field has not settled.",
      vectors: ["partial--ambiguous-at-definitional-boundary"],
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
      summary: "The evidence trail is genuinely mixed and the mixing is interior — it concerns what the mechanisms actually are, not what the claim means or whether it can be assessed. INST-001 provides the strongest positive evidence: induction heads demonstrate that a specific mechanism (pattern-completion circuits) is present and causally responsible for the same capability across a wide range of model sizes. This is mechanistic continuity directly observed. The grokking evidence (INST-004) is consistent with mechanistic continuity — the same type of algorithmic circuit forms across model sizes, though its timing differs with scale. Superposition (INST-003) and representation-geometry research (INST-005) complicate the picture further: larger models appear to organise their internal representations differently, which is consistent with either the same mechanism operating differently at scale or a qualitatively different computational strategy. The pressure state is FRAGMENTING: the dispute is interior and definitional rather than a lack of evidence — what counts as 'the same mechanism' has not been agreed (BN-001), and until it is, further mechanistic interpretability findings will continue to be read differently by researchers with different priors.",
      assessorNote: null,
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
    { year: "2022", text: "Mechanistic interpretability identifies specific circuits. Elhage et al. and Olsson et al. establish that specific circuit types are causally responsible for specific capabilities. The mechanistic continuity question becomes empirically tractable for the first time." },
    { year: "2022–23", text: "Emergent abilities and superposition raise discontinuity concerns. Wei et al. and Elhage et al. superposition work suggest mechanisms may differ qualitatively with scale. The claim enters ESCALATING then transitions to FRAGMENTING as the definitional question sharpens." },
    { year: "2023–24", text: "Representation geometry research deepens the question. Evidence accumulates that large models organise representations differently than small models. Whether this is mechanistic continuity or discontinuity remains contested at the definitional level." }
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
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

/**
 * FR-AI-0001 — LLM Multi-Step Reasoning — Generalisation Beyond Training
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0001 = {
  id: "FR-AI-0001",
  programme: "PROG-AI",

  claim: {
    statement: "Large language models can perform multi-step reasoning that generalises beyond memorised training examples.",
    shortLabel: "LLM Multi-Step Reasoning — Generalisation Beyond Training",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Chain-of-thought prompting — Wei et al. (Google Brain)",
      description: "Wei et al. (2022, NeurIPS) demonstrate that prompting large language models with intermediate reasoning steps (\"chain-of-thought\") substantially improves performance on arithmetic, commonsense, and symbolic reasoning benchmarks. Performance on GSM8K (grade school math) improves from near-zero to over 50% with chain-of-thought prompting on PaLM 540B. The paper argues this constitutes emergent multi-step reasoning. Contested framing: critics note that GSM8K problems are widely distributed online, raising the possibility that performance reflects retrieval of near-identical training instances rather than generalised reasoning.",
      vectors: ["partial--memorisation-dispute"],
      date: "2022",
    },
    {
      id: "IN-002",
      qualifiedEvent: "GSM8K-symbolic and novel benchmark evaluations",
      description: "Multiple research groups construct variants of standard reasoning benchmarks with novel surface forms: modified variable names, unfamiliar number ranges, reversed problem structures. Shi et al. (2023, \"Large Language Models Can Be Easily Distracted by Irrelevant Information\") and Patel et al. (2021) find significant performance degradation on structurally identical problems with modified surface presentation. Interpretation: degradation under surface modification is evidence of sensitivity to training distribution rather than abstract generalisation. Counter-interpretation: human performance also degrades under novel surface presentation; the comparison class for \"generalisation\" is underspecified.",
      vectors: ["contesting"],
      date: "2022–23",
    },
    {
      id: "IN-003",
      qualifiedEvent: "GPT-4 on novel mathematical competition problems — early evaluation",
      description: "Independent evaluators test GPT-4 on competition mathematics problems published after its training cutoff (IMO 2023, AIME 2023). GPT-4 solves a non-trivial fraction of problems not plausibly present in training data in solved form. Researchers at MIT and elsewhere publish informal and formal evaluations finding GPT-4 demonstrates multi-step mathematical reasoning on genuinely novel instances. Limitation: competition problems share structural families with training data even when specific instances are new; the degree of true novelty is contested. The contamination problem — determining what was and was not in training data — remains unresolved for closed models.",
      vectors: ["supportive"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Counterfactual and compositional generalisation studies",
      description: "Srivastava et al. (BIG-Bench, 2023) and Dziri et al. (\"Faith and Fate\", 2023, NeurIPS) find that LLM performance degrades sharply on compositional reasoning tasks requiring combination of learned skills in configurations not seen during training. Dziri et al. specifically show that on multi-step graph traversal and multi-digit multiplication, models appear to retrieve pattern-matched sub-solutions rather than execute a generalised algorithm. Performance falls to near-chance on inputs at lengths or depths slightly beyond the training distribution. Authors conclude that current LLMs are fundamentally limited in compositional generalisation.",
      vectors: ["contesting"],
      date: "2023",
    },
    {
      id: "IN-005",
      qualifiedEvent: "OpenAI o1 / o3 — chain-of-thought reasoning models",
      description: "OpenAI releases o1 (September 2024) and o3 (December 2024), models trained explicitly to produce extended internal reasoning chains prior to output. o3 achieves 87.5% on ARC-AGI (a benchmark specifically designed to test novel generalisation resistant to training contamination), surpassing prior LLM performance and approaching human-level. o3 also achieves frontier-level performance on the FrontierMath benchmark (novel research-level mathematics). The ARC-AGI score is particularly significant because the benchmark was constructed specifically to prevent memorisation. Dispute: o3's reasoning process is not publicly documented; whether the extended chain-of-thought constitutes generalised reasoning or a learned meta-pattern for benchmark problem classes remains an open research question.",
      vectors: ["supportive--strongest-instance-to-date"],
      date: "2024",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The evidence trail shows a claim under genuine escalating pressure. Early evidence (INST-001 through INST-004) produced a contested picture: demonstrations of multi-step performance on established benchmarks were met with systematic evidence that performance degraded under surface modification and compositional novelty, suggesting distribution-matching rather than generalised reasoning. That picture was the dominant assessment context through 2023. INST-005 materially shifts the evidentiary stat",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Benchmark contamination. For closed models, the content of training data is not publicly disclosed. Every benchmark performance result for a closed model carries an unresolvable uncertainty about whether the model encountered near-identical instances during training. This is a structural resistance mechanism: positive evidence on any established benchmark is always partially contestable on contami",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Distribution shift sensitivity. Performance on reasoning benchmarks consistently degrades under surface-level modifications that preserve logical structure. This is evidence that model performance tracks training distribution proximity rather than abstract reasoning rules. The mechanism has been robustly documented across multiple models and benchmark families (INST-002, INST-004). Its significanc",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Generalisation threshold is undefined. The claim requires that reasoning \"generalises beyond memorised training examples\" but no agreed standard specifies what degree of generalisation is sufficient, what comparison class defines memorisation, or what problem distribution constitutes \"beyond training.\" Different researchers apply different implicit thresholds, producing genuine disagreement from s",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Extended chain-of-thought as mechanism candidate. The o1/o3 architecture (INST-005) introduces explicit extended internal reasoning as a trained behaviour. If this mechanism produces genuine generalisation, it represents a qualitative shift in the kind of evidence available for this claim — not just better benchmark scores but a different computational process. Whether the mechanism produces true ",
    }
  ],

  lineage: {
    items: [
    { year: "2017–20", text: "Transformer architecture and scaling. Attention Is All You Need (Vaswani et al. 2017) and subsequent GPT series establish that language models trained at scale exhibit surprising task performance without task-specific training. The implicit precursor claim — that scaling produces generalisation — ci" },
    { year: "2020", text: "GPT-3 few-shot performance. Brown et al. demonstrate GPT-3 performing tasks from few examples with no weight updates. \"In-context learning\" emerges as a candidate mechanism. The claim that this constitutes reasoning rather than pattern completion begins to be formally debated." },
    { year: "2022", text: "Emergent abilities and chain-of-thought. Wei et al. (2022a, 2022b) publish simultaneously on emergent abilities at scale and chain-of-thought prompting. Both papers assert capability thresholds crossed at sufficient scale. \"Reasoning\" enters the technical literature as a claimed capability. Immediat" },
    { year: "2023", text: "Systematic challenge to generalisation claims. Multiple groups publish evidence that LLM reasoning performance is brittle under distribution shift. Dziri et al. \"Faith and Fate\" argues that transformers are fundamentally limited in compositional generalisation by their computational structure. Claim" },
    { year: "2024", text: "ARC-AGI and o3. OpenAI o3 achieves 87.5% on ARC-AGI. The benchmark was designed by François Chollet specifically to test generalisation resistant to memorisation. Result is widely cited as the strongest evidence to date that the capability claim has substance. The claim's pressure state moves to act" }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Does ARC-AGI performance at 87.5% constitute sufficient evidence to confirm the claim, or does confirmation require performance across a wider distribution of anti-contamination benchmarks, including those not yet constructed?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Is the extended chain-of-thought mechanism in o1/o3 a qualitatively different computation from prior LLM inference, or a scaled version of the same pattern-matching behaviour documented in INST-002 and INST-004? This is the operative scientific question for the next assessment cycle.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "Does the distribution shift sensitivity documented in INST-002 persist in o1/o3-class models? If it does, the claim must be scoped to specific problem classes rather than stated at the class level.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "Can an agreed operational definition of \"generalisation\" be established that is acceptable to both the capability-affirming and capability-contesting research communities? Without this, BN-001 cannot be closed regardless of further evidence.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-005",
      question: "Is this a class-level claim or a system-level claim? The record tracks LLMs as a category, but the strongest positive evidence is from a specific architecture (o1/o3). If the generalisation mechanism is specific to the extended chain-of-thought training regime, the claim as stated may be too broad.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "RM-001, RM-002 (Resistance); BN-001 (Bottleneck); AT-001 (Attractor) added." },
    { id: "M-004", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "ASSESSMENT-001 issued. Pressure state: ESCALATING. Triggering instance: INST-005." },
    { id: "M-003", date: "2024-01-15", field: "scope_note_added", from: "—", to: "SCOPE-NOTE-ADDED", note: "Class-level claim notice added. Definitional dispute recorded as property of frontier." },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-001 through INST-005 added." },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-AI-0001 opened. Programme: PROG-AI. First record in AI series." }
  ],

  status: "open",
};

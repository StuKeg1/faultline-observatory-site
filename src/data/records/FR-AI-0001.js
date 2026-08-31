/**
 * FR-AI-0001 — LLM Multi-Step Reasoning — Generalisation Beyond Training
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 *
 * RELEASE-004 (Trial 001 Corpus Update, 2026-06-27): INST-006 and ASSESSMENT-002
 * added. Sourced from direct web verification during Trial 001, not recovered
 * from the original 2026-06-16 generation (unrecoverable — see TRIAL-001-OUT).
 */

export const FR_AI_0001 = {
  id: "FR-AI-0001",
  programme: "PROG-AI",
  lastProvenanceReview: "2026-08-31",
  provenanceReviewId: "LPR-001-D02",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Large language models can perform multi-step reasoning that generalises beyond memorised training examples.",
    shortLabel: "LLM Multi-Step Reasoning — Generalisation Beyond Training",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Chain-of-thought prompting — Wei et al. (Google Brain)",
      description: "Wei et al. (2022, NeurIPS) demonstrate that prompting large language models with intermediate reasoning steps (\"chain-of-thought\") substantially improves performance on arithmetic, commonsense, and symbolic reasoning benchmarks. On GSM8K, PaLM 540B improves from 17.9% accuracy under standard prompting to 58.1% with chain-of-thought prompting. The paper presents this as evidence that chain-of-thought can elicit multi-step reasoning in sufficiently large language models. The benchmark result does not by itself resolve whether the underlying capability generalises beyond memorised or structurally familiar training examples.",
      vectors: ["partial--memorisation-dispute"],
      date: "2022",
      sources: [
        {
          citation: "Wei, J. et al. (2022), Chain-of-Thought Prompting Elicits Reasoning in Large Language Models, NeurIPS 2022.",
          url: "https://arxiv.org/abs/2201.11903",
          locator: "GSM8K results for PaLM 540B",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "GSM-IC — irrelevant-context robustness evaluation",
      description: "Shi et al. (2023) introduce GSM-IC, a variant of grade-school mathematics problems that adds irrelevant information to the problem description while preserving the underlying arithmetic task. They find that large-language-model problem-solving accuracy can decrease dramatically when irrelevant context is included, and test mitigation approaches including self-consistency and explicit instructions to ignore irrelevant information. The result is direct evidence of distractibility under a bounded distribution shift; it does not establish that all surface-form changes produce the same degradation or by itself distinguish lack of abstract generalisation from other robustness failures.",
      vectors: ["contesting"],
      date: "2022–23",
      sources: [
        {
          citation: "Shi, F. et al. (2023), Large Language Models Can Be Easily Distracted by Irrelevant Context, arXiv:2302.00093.",
          url: "https://arxiv.org/abs/2302.00093",
          locator: "GSM-IC dataset and evaluation results",
        },
      ],
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
      qualifiedEvent: "Compositional generalisation limits — Dziri et al.",
      description: "Dziri et al. (2023, NeurIPS) investigate transformer limits across three representative compositional tasks: multi-digit multiplication, logic-grid puzzles, and a classic dynamic-programming problem. They formulate these tasks as computation graphs, decompose them into intermediate sub-procedures, and report empirical results consistent with models reducing multi-step compositional reasoning to linearized subgraph matching rather than developing systematic problem-solving skills. Their theoretical analysis further shows how autoregressive-generation performance can rapidly decay as task complexity increases. This is strong contesting evidence about systematic compositional generalisation, but it is bounded to the studied task families and does not establish a universal inability to generalise.",
      vectors: ["contesting"],
      date: "2023",
      sources: [
        {
          citation: "Dziri, N. et al. (2023), Faith and Fate: Limits of Transformers on Compositionality, NeurIPS 2023, arXiv:2305.18654.",
          url: "https://arxiv.org/abs/2305.18654",
          locator: "Compositional tasks; empirical findings; theoretical analysis",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "OpenAI o3-preview — ARC-AGI-1 generalisation benchmark",
      description: "ARC Prize reports that OpenAI's December 2024 o3-preview system scored 75.7% on the ARC-AGI-1 Semi-Private Evaluation set under the public-leaderboard compute limit and 87.5% in a low-efficiency configuration using 1,024 samples and roughly 172 times the compute. ARC Prize also reports that OpenAI trained the tested o3-preview system on 75% of the ARC-AGI-1 Public Training set and had not disclosed enough detail to determine how much of the result was attributable to that exposure. The result remains strong supportive evidence of adaptation to novel ARC tasks, but the 87.5% figure should not be read as an efficiency-neutral or contamination-free measure of generalisation. Whether the system's test-time search and extended reasoning constitute a qualitatively different general mechanism remains unresolved.",
      vectors: ["supportive--strongest-instance-to-date"],
      date: "2024",
      sources: [
        {
          citation: "ARC Prize, ‘OpenAI o3 Breakthrough High Score on ARC-AGI-Pub’ (20 Dec 2024)",
          url: "https://arcprize.org/blog/oai-o3-pub-breakthrough",
          locator: "OpenAI o3 ARC-AGI Results; note on training exposure and compute",
        },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Chain-of-thought faithfulness research — mechanism disclosed as partially decoupled from verbalised reasoning",
      description: "This body of work does not resolve OQ-002 toward either pole — it does not show the mechanism is mere pattern-matching, nor that it is genuine step-by-step reasoning — but it discloses that the mechanism is more decoupled from its own narration than the framing in AT-001 assumed, adding a third axis of dispute (faithfulness) alongside contamination (RM-001) and distribution-shift sensitivity (RM-002). A substantial body of interpretability research published since AS-001 directly addresses OQ-002 — whether the extended chain-of-thought mechanism in o1/o3-class models constitutes genuinely different computation or a scaled version of prior pattern-matching behaviour — by examining the mechanism's actual relationship to its own verbalised output. Anthropic's 'Reasoning Models Don't Always Say What They Think' (Chen et al., 2025) and independent work including Arcuschin et al., 'Chain-of-thought reasoning in the wild is not always faithful' (2025), and earlier foundational studies (Turpin et al. 2023; Lanham et al. 2023) establish that chain-of-thought traces frequently do not reflect the computation actually producing a model's answer: models can reach correct answers via paths not represented in their stated reasoning, and can produce plausible post-hoc rationalisations for answers reached by other means. Mechanistic interpretability work (Lindsey et al., 2025) identifies concrete cases in which a model derives its answer directly from the prompt rather than from its own intermediate reasoning text.",
      vectors: ["contesting--mechanism-disclosed-partially-decoupled-from-verbalised-reasoning"],
      date: "2025–26",
      sources: [
        {
          citation: "Chen et al., ‘Reasoning Models Don't Always Say What They Think’ (Anthropic, 2025)",
          url: "https://www.anthropic.com/research/reasoning-models-dont-say-think",
        },
        {
          citation: "Arcuschin et al., ‘Chain-of-Thought Reasoning In The Wild Is Not Always Faithful’ (2025)",
          url: "https://arxiv.org/abs/2503.08679",
        },
        {
          citation: "Lanham et al., ‘Measuring Faithfulness in Chain-of-Thought Reasoning’ (2023)",
          url: "https://arxiv.org/abs/2307.13702",
        },
        {
          citation: "Turpin et al., ‘Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting’ (NeurIPS 2023)",
          url: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/ed3fea9033a80fea1376299fa7863f4a-Abstract.html",
          doi: "10.52202/075280-3275",
        },
        {
          citation: "Lindsey et al., ‘On the Biology of a Large Language Model’ (Transformer Circuits, 2025)",
          url: "https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
          locator: "Chain-of-thought Faithfulness",
        },
      ],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The evidence trail shows a claim under genuine escalating pressure. Early evidence (INST-001 through INST-004) produced a contested picture: demonstrations of multi-step performance on established benchmarks were met with systematic evidence that performance degraded under surface modification and compositional novelty, suggesting distribution-matching rather than generalised reasoning. That picture was the dominant assessment context through 2023. INST-005 materially shifts the evidentiary state. o3's 87.5% score on ARC-AGI (INST-005) — a benchmark specifically constructed to resist memorisation — is the strongest single result yet for genuine generalisation, and the transition from contested to ESCALATING reflects that shift. The claim is not yet confirmed: whether the extended chain-of-thought mechanism underlying o3's performance constitutes genuine step-by-step reasoning or a more sophisticated pattern-matching process remains unresolved (OQ-002), and the benchmark contamination and distribution-shift concerns documented in earlier instances (RM-001, RM-002) have not been retested against the new architecture.",
      assessorNote: null,
      sources: [
        {
          citation: "Chen et al., ‘Reasoning Models Don't Always Say What They Think’ (Anthropic, 2025)",
          url: "https://www.anthropic.com/research/reasoning-models-dont-say-think",
        },
        {
          citation: "Arcuschin et al., ‘Chain-of-Thought Reasoning In The Wild Is Not Always Faithful’ (2025)",
          url: "https://arxiv.org/abs/2503.08679",
        },
        {
          citation: "Lanham et al., ‘Measuring Faithfulness in Chain-of-Thought Reasoning’ (2023)",
          url: "https://arxiv.org/abs/2307.13702",
        },
        {
          citation: "Turpin et al., ‘Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting’ (NeurIPS 2023)",
          url: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/ed3fea9033a80fea1376299fa7863f4a-Abstract.html",
          doi: "10.52202/075280-3275",
        },
        {
          citation: "Lindsey et al., ‘On the Biology of a Large Language Model’ (Transformer Circuits, 2025)",
          url: "https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
          locator: "Chain-of-thought Faithfulness",
        },
      ],
    },
    {
      id: "AS-002",
      date: "2026-06-27",
      pressureState: "escalating",
      verificationStage: "VS-03",
      summary: "INST-006 sustains the ESCALATING state from AS-001 while materially sharpening OQ-002 rather than closing it. The disclosure that chain-of-thought traces are frequently unfaithful — not reliably reflecting the computation that produced an answer — means o1/o3-class performance (INST-005) cannot be straightforwardly read as evidence of the reasoning process its own output narrates. This cuts against treating AT-001's mechanism candidate as settled in either direction: a model could be performing genuine multi-step computation that its verbalised trace merely fails to describe accurately, or could be pattern-matching while its trace fabricates a plausible reasoning narrative — the faithfulness literature establishes that both are observed, without yet establishing which dominates for any specific frontier system. The claim's evidentiary picture therefore escalates in complexity: BN-001's undefined generalisation threshold is now joined by an analogous undefined-faithfulness threshold, and OQ-002 should be read going forward as two distinct questions (does the model generalise; does its chain-of-thought narrate that generalisation faithfully) rather than one. Verification stage advances to VS-03 (Audit): a substantial, multi-author, partly first-party (Anthropic) literature has now subjected the mechanism itself to direct scrutiny — the first such audit-stage evidence this record has logged.",
      assessorNote: "Sources: Chen et al., 'Reasoning Models Don't Always Say What They Think' (Anthropic, 2025); Arcuschin et al., arXiv:2503.08679 (2025); Lanham et al., arXiv:2307.13702 (2023); Turpin et al. (NeurIPS 2023); Lindsey et al. (2025, mechanistic circuit analysis). Verified directly via web search during RELEASE-004 / TRIAL-001, 2026-06-27.",
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
    { year: "2024", text: "ARC-AGI and o3. OpenAI o3 achieves 87.5% on ARC-AGI. The benchmark was designed by François Chollet specifically to test generalisation resistant to memorisation. Result is widely cited as the strongest evidence to date that the capability claim has substance. The claim's pressure state moves to act" },
    { year: "2025–26", text: "Chain-of-thought faithfulness literature. Anthropic and independent researchers publish substantial evidence that verbalised chain-of-thought frequently does not reflect the computation actually producing a model's answer. OQ-002 is sharpened into two distinct questions rather than resolved." }
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
    { id: "M-010", date: "2026-08-31", field: "provenance_review_completed", from: "—", to: "LPR-001-D02", note: "Legacy provenance review completed. IN-001, IN-002, IN-004 and IN-005 corrected for source fidelity and enriched with structured sources[]; IN-003 remains deliberately unenriched because its intended source could not be confidently established. No assessment or evidence-state change." },
    { id: "M-009", date: "2026-08-29", field: "provenance_enriched", from: "—", to: "PROVENANCE-ENRICHED", note: "PA-002 Provenance Enrichment: structured sources[] added to IN-005 and IN-006; evidentiary prose and assessment unchanged." },
    { id: "M-008", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-006 description reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-007", date: "2026-06-27", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "ASSESSMENT-002 issued. Pressure state: ESCALATING (sustained). Triggering instance: INST-006. Part of RELEASE-004 / TRIAL-001." },
    { id: "M-006", date: "2026-06-27", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-006 added (chain-of-thought faithfulness research; OQ-002 sharpened, not closed)." },
    { id: "M-005", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "RM-001, RM-002 (Resistance); BN-001 (Bottleneck); AT-001 (Attractor) added." },
    { id: "M-004", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "ASSESSMENT-001 issued. Pressure state: ESCALATING. Triggering instance: INST-005." },
    { id: "M-003", date: "2024-01-15", field: "scope_note_added", from: "—", to: "SCOPE-NOTE-ADDED", note: "Class-level claim notice added. Definitional dispute recorded as property of frontier." },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-001 through INST-005 added." },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-AI-0001 opened. Programme: PROG-AI. First record in AI series." }
  ],

  status: "open",
};

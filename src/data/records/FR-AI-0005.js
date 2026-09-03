/**
 * FR-AI-0005 — AGI Through Scaling — LLM Architecture as the Path to General Intelligence
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0005 = {
  id: "FR-AI-0005",
  programme: "PROG-AI",
  lastProvenanceReview: "2026-09-03",
  provenanceReviewId: "LPR-001-D05",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Artificial General Intelligence will be achieved through scaling current large-language-model architectures.",
    shortLabel: "AGI Through Scaling — LLM Architecture as the Path to General Intelligence",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "GPT-3 — scaling produces broad few-shot capability gains",
      description: "Brown et al. (2020) show that increasing language-model scale can substantially improve task-agnostic few-shot and zero-shot performance without gradient updates, with GPT-3 evaluated across translation, question answering, cloze tasks, reasoning-style benchmarks, and other domains. This is supportive evidence that scaling a Transformer language model can broaden usable capability. The paper does not claim or establish that sufficiently scaling the existing architecture will produce AGI, and it does not establish the stronger legacy attribution that this was already the dominant AGI path hypothesis across OpenAI, Anthropic founders, and DeepMind researchers. It therefore supports the capability premise underlying the path claim, not the AGI-path prediction itself.",
      vectors: ["partial--scaling-capability-premise"],
      date: "2020",
      sources: [
        {
          citation: "Brown, T. B. et al. (2020), Language Models are Few-Shot Learners, NeurIPS 2020, arXiv:2005.14165.",
          url: "https://arxiv.org/abs/2005.14165",
          locator: "Abstract; few-shot and zero-shot evaluations without gradient updates",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "GPT-4 — large capability gains with stated real-world limitations",
      description: "OpenAI's GPT-4 Technical Report (2023) documents a major capability advance over earlier models, including human-level performance on a range of professional and academic benchmarks, while explicitly stating that GPT-4 remains less capable than humans in many real-world scenarios. The report also shows that some aspects of GPT-4 performance could be predicted from much smaller training runs. This supports continued capability gains from large-scale language-model development while preserving a substantial gap between benchmark performance and general real-world competence. The report does not establish the legacy claims that GPT-4 delivered a smaller relative gain than GPT-3 over GPT-2, that MMLU/HellaSwag saturation was accelerating, or that scaling was already producing diminishing returns on the capabilities most relevant to AGI.",
      vectors: ["partial--capability-gains-with-stated-limits"],
      date: "2023",
      sources: [
        {
          citation: "OpenAI (2023), GPT-4 Technical Report, arXiv:2303.08774.",
          url: "https://arxiv.org/abs/2303.08774",
          locator: "Abstract; benchmark performance; real-world limitations; predictable scaling discussion",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Sutskever post-OpenAI position — scaling formula expected to change",
      description: "Ilya Sutskever left OpenAI in 2024 and co-founded Safe Superintelligence Inc. Reuters' reporting of his December 2024 NeurIPS remarks records his view that pre-training as practised through ever more data is approaching a limit because the stock of human-generated data is finite, and that future systems will rely on different strategies including reasoning. This is institutional and conceptual evidence that one influential architect of the modern scaling era expects the development formula to change. It does not establish that Sutskever has rejected scaling itself, that he believes current LLMs cannot contribute to AGI, or that his departure in 2024 was evidence of a 2023 internal rejection of the scaling path.",
      vectors: ["partial--scaling-formula-revision-by-leading-researcher"],
      date: "2024",
      sources: [
        {
          citation: "Reuters (14 Dec 2024), AI with reasoning power will be less predictable, Ilya Sutskever says.",
          url: "https://www.reuters.com/technology/artificial-intelligence/ai-with-reasoning-power-will-be-less-predictable-ilya-sutskever-says-2024-12-14/",
          locator: "NeurIPS 2024 remarks on pre-training limits, finite data and future reasoning systems",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "OpenAI o1 — reasoning performance scales with train-time and test-time compute",
      description: "OpenAI's September 2024 o1 release introduces a reasoning-focused model trained with reinforcement learning to produce extended internal chains of thought. OpenAI reports that o1 performance improves with both additional reinforcement-learning compute during training and additional time spent thinking at test time, alongside strong results on reasoning-heavy evaluations. This is evidence that capability progress is being obtained through a broader compute-and-post-training recipe than simply enlarging a base pretrained model. It does not by itself establish that o1 is a fundamentally different architecture, that process reward models are the operative mechanism, or that continued progress toward AGI requires departure from next-token-prediction language models. It therefore pressures the meaning of 'scaling current LLM architectures' without settling it.",
      vectors: ["partial--path-broadens-beyond-pretraining-scale"],
      date: "2024",
      sources: [
        {
          citation: "OpenAI (12 Sep 2024), Learning to reason with LLMs.",
          url: "https://openai.com/index/learning-to-reason-with-llms/",
          locator: "Training approach; chain of thought; scaling with reinforcement-learning and test-time compute; evaluations",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Human-generated training-data constraint",
      description: "Villalobos et al. estimate the stock of public human-generated text and project that, if then-current LLM development trends continue, training datasets would become comparable in size to the available public human-text stock between roughly 2026 and 2032. They discuss synthetic data, transfer learning, and improved data efficiency as possible ways to extend progress. This is a real structural constraint on one input to continued pre-training scale, but not a demonstrated hard ceiling on LLM scaling. The source does not establish the legacy bundle that compute costs are growing faster than performance, that energy regulation will impose a binding infrastructure limit, or that the 2020–23 compute trajectory cannot continue through 2030.",
      vectors: ["contesting--human-data-scaling-constraint"],
      date: "2022",
      sources: [
        {
          citation: "Villalobos, P. et al. (2022), Will we run out of data? Limits of LLM scaling based on human-generated data, arXiv:2211.04325.",
          url: "https://arxiv.org/abs/2211.04325",
          locator: "Abstract; public human-text stock forecast; 2026–2032 range; mitigation discussion",
        },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "OpenAI AGI definition — longstanding economically valuable work formulation",
      description: "OpenAI's public Charter defines AGI as highly autonomous systems that outperform humans at most economically valuable work. This wording predates the late-2024 period attributed by the legacy instance and therefore does not constitute evidence that OpenAI migrated the AGI target in 2024–25. The source is relevant because it demonstrates one influential operational definition of AGI and illustrates the broader definitional problem surrounding the term, but it cannot support the record's earlier claim that institutional pressure caused a late-stage goalpost shift. The specific target-migration event previously attributed to IN-006 is withdrawn as unsupported by the cited evidence.",
      vectors: ["partial--definition-boundary-not-target-migration"],
      date: "pre-2024",
      sources: [
        {
          citation: "OpenAI, OpenAI Charter.",
          url: "https://openai.com/charter/",
          locator: "Mission statement defining AGI as highly autonomous systems outperforming humans at most economically valuable work",
        },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Test-time compute — a second compute-scaling axis",
      description: "Snell et al. (2024) systematically study inference-time computation as a scaling axis. They evaluate search with process-based verifier reward models and adaptive modification of a model's response distribution, finding that the effectiveness of additional test-time compute depends strongly on prompt difficulty. Their compute-optimal strategy improves test-time scaling efficiency by more than fourfold relative to a best-of-N baseline, and in FLOPs-matched evaluations a smaller model using additional test-time compute can outperform a model 14 times larger on problems where the smaller model already has non-trivial success. This establishes that capability can be scaled through inference-time computation as well as pre-training scale. It does not establish the legacy 2025–26 field-wide claims about a consensus shift, a general latent saturation trend in training scaling, or specific frontier-lab capital commitments. For this record it is partial evidence that the operative path is broadening beyond the narrowest reading of 'scaling current LLM architectures,' not evidence that scaling has been abandoned.",
      vectors: ["partial--additional-compute-scaling-axis"],
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
      summary: "The claim is fragmenting in a structurally unusual way. The evidence trail shows neither clean positive progression nor clean negative accumulation. Instead it shows a claim under three simultaneous pressures that are each individually partial: capability gains continue (supportive), but the path is bifurcating architecturally (INST-004); structural scaling constraints are accumulating (INST-005); and the target itself is migrating (INST-006). These pressures do not converge on a single conclusion. Capability continues to advance in ways that keep the claim alive, while the path departs from pure scaling and the destination itself is redefined in ways that make the claim progressively harder to evaluate as originally stated. The pressure state is FRAGMENTING: the claim is not resolving toward confirmation or collapse but splitting along three independent axes — capability, path, and target — each of which would need to be separately addressed before the claim could reach a stable assessment (OQ-001).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "FRAGMENTING remains the correct pressure state, and IN-007 is best read as confirmation rather than a new direction. The three simultaneous pressures AS-001 identified — capability gains continuing, the path bifurcating architecturally, the target migrating — have each continued through 2025–26 without converging. Field-wide commentary now describes 2026 progress as inference- and tooling-driven rather than training-scale-driven, and academic work documents diminishing (though not zero) returns on pure training-compute scaling. Simultaneously, frontier labs' continued tens-of-billions-dollar commitments to training-scale infrastructure through 2025 show the industry has not abandoned the original path either. No single development in IN-007 resolves OQ-001 (can a claim with a migrating target reach a stable assessment state) or OQ-002 (is this dissolution or collapse) — if anything, two more years of continued three-way fragmentation without resolution is itself mild evidence that this claim may be heading toward dissolution rather than either confirmation or collapse, which is exactly the distinction OQ-002 asks the Observatory to make a governance decision about.",
      assessorNote: "Sourced from: Medium, \"The State of Large Language Models: Latest Updates & Trends (2025–2026)\" (Feb 2026); aimultiple.com summary of 2026 RL post-training scaling-laws research describing a \"latent saturation trend\"; Metaintro coverage of continued frontier-lab capital expenditure commitments through 2025 (Dec 2025). All three are secondary roundups rather than primary papers — adequate for establishing the shape of the 2025–26 debate, not for citing specific benchmark or expenditure figures as precise.",
    },
    {
      id: "AS-003",
      date: "2026-09-03",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "LPR-001-D05 materially narrows the evidence underlying AS-001 and AS-002 without rewriting those historical assessments. The corrected record no longer supports their three-axis formulation of capability/path/target fragmentation: IN-006 does not document a 2024–25 migration of OpenAI's AGI definition, and the specific target-migration event is withdrawn. The evidence that remains is still non-convergent. GPT-3 and GPT-4 show substantial capability gains from large-scale language-model development (IN-001, IN-002), while Sutskever's later remarks, OpenAI o1, the finite-human-data analysis, and test-time-compute research indicate that the practical scaling recipe is changing and broadening beyond simply increasing pre-training scale (IN-003, IN-004, IN-005, IN-007). None of those results establishes that current LLM architectures will reach AGI, and none establishes a hard scaling ceiling or abandonment of LLM-based approaches. FRAGMENTING / VS-03 is therefore retained, but on a narrower basis: continuing capability gains coexist with unresolved path-definition and scaling-regime changes. The previous target-migration rationale should no longer be treated as evidential support for the current assessment.",
      assessorNote: "Governed assessment correction following LPR-001-D05. AS-001 and AS-002 remain visible as historical judgements. AS-003 supersedes the source-fidelity claims identified by the provenance review; no new evidence instance was admitted through LPR-001. Downstream mechanism, lineage, and open-question wording that independently relies on the withdrawn IN-006 target-migration premise requires a separate bounded consistency repair and is not silently changed here.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Capability-generality gap. LLM scaling produces measurable improvements on benchmarks and economically valuable tasks but has not demonstrated the open-ended generalisation, physical understanding, causal reasoning, or sustained autonomy that earlier AGI framings required. The gap between benchmark performance and general intelligence has not closed with scale — it has become better characterised.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "AGI definition is not stable. The claim requires that AGI be achieved, but AGI is not a stable object. Different researchers, institutions, and time periods use different definitions. The target has migrated at least once during this record's evidence trail (INST-006). A moving target creates a bottleneck that is not resolvable by experimental evidence: any positive result can be reframed as not y",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description: "Path and destination are disaggregating. The claim asserts a path to a destination. As the path evolves (toward hybrid architectures, test-time compute, embodiment, or novel approaches) while the destination also migrates, the original claim becomes progressively harder to evaluate. The path has bifurcated from pure LLM scaling; the destination has narrowed from general intelligence to economic pe",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Demonstrated AGI under a stable definition. The only clear resolution path for this record is a demonstration of AGI under a definition that the research community accepts as stable and meaningful — not the migrated economic performance definition, but a definition that captures the original intent of the claim. If such a demonstration occurred, the question of whether the path was pure LLM scalin",
    }
  ],

  lineage: {
    items: [
    { year: "2017–19", text: "Scaling hypothesis implicit. GPT-1 and GPT-2 establish that scale improves language model performance. The AGI-through-scaling claim is implicit in the research programme but not yet explicitly stated as a path prediction." },
    { year: "2020–22", text: "Path claim made explicit. GPT-3 and subsequent commentary formalise the claim. Leading researchers publicly assert that scaling LLMs is the path to AGI. The claim enters ESCALATING." },
    { year: "2023", text: "First internal fracture. OpenAI board crisis and Sutskever's eventual departure signal that the originator community is beginning to disaggregate path from destination. The claim enters FRAGMENTING." },
    { year: "2024", text: "Path bifurcation and definition migration. o1/o3 architectures depart from pure LLM scaling. OpenAI narrows the AGI definition to economic task performance. The claim's two components — path and destination — both migrate simultaneously." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can a claim whose target term is actively migrating reach any stable assessment state — RESOLVING, COLLAPSED, or confirmed — or does target migration structurally prevent closure? This is the collapse-criteria question this record generates. It is not the same as the resolution-criteria question in GQ-001, but it is related.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Is claim dissolution — a claim becoming unevaluable because its referents have migrated — the same governance problem as claim collapse? Cold fusion collapsed through a defined external event. This claim may dissolve through definitional drift. If these are different objects, the Observatory may need to distinguish them.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-AI-0005 is the first path prediction claim in the corpus. Path predictions age differently from capability claims: they can be overtaken by events, rendered moot by alternative paths succeeding, or abandoned by their proponents without formal falsification. Should path prediction claims be treated as a distinct record class, or does the current schema handle them adequately?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "Two years of continued three-way fragmentation (capability/path/target) without convergence is itself a data point. At what point — if any — should sustained non-convergence be treated as evidence toward dissolution (OQ-002's distinction) rather than simply more fragmentation? This record has no stated threshold for when 'still fragmenting' becomes 'has dissolved,' and OQ-002 already flagged that the Observatory lacks a governed answer to this question generally, not just for this record.",
      raisedDate: "2026-06-29",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-011", date: "2026-09-03", field: "assessment_correction", from: "AS-002", to: "AS-003", note: "AS-003 appended after the approved LPR-001-D05 bounded correction. Historical AS-001/AS-002 preserved. The unsupported IN-006 target-migration event is withdrawn from the current evidential basis; FRAGMENTING / VS-03 retained on the narrower basis of continued capability gains plus unresolved path-definition and scaling-regime change. Separate downstream consistency repair remains required for mechanism, lineage, and open-question wording that inherited the target-migration premise." },
    { id: "M-010", date: "2026-09-03", field: "provenance_correction", from: "LPR-001-D05 discrepancies_found", to: "LEGACY-INSTANCES-CORRECTED", note: "Governed bounded correction applied to IN-001 through IN-007. Source representations aligned to Brown et al., GPT-4 Technical Report, Sutskever's 2024 remarks, OpenAI o1, Villalobos et al., OpenAI Charter, and Snell et al. Structured sources[] added; unsupported bundled claims removed or bounded. No new evidence instance admitted." },
    { id: "M-009", date: "2026-09-03", field: "provenance_review", from: "—", to: "LPR-001-D05", note: "Legacy provenance review completed. All seven evidence instances examined. Material source-fidelity discrepancies identified across the legacy evidence trail; no factual or interpretive wording silently repaired and no new scientific evidence admitted. Review marked pending governed correction." },
    { id: "M-008", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: whether sustained multi-year fragmentation without convergence should itself be treated as evidence toward dissolution." },
    { id: "M-007", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records. Pressure state unchanged: FRAGMENTING. New evidence (IN-007) confirms continuation of the three-way fragmentation rather than resolving it in either direction." },
    { id: "M-006", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-007 added: 2025–26 maturation of the scaling-plateau debate and continued frontier-lab capital commitment to the original training-scale path." },
    { id: "M-005", date: "2024-01-15", field: "null_condition_failed", from: "—", to: "NULL-CONDITION-FAILED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
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

  claim: {
    statement: "Artificial General Intelligence will be achieved through scaling current large-language-model architectures.",
    shortLabel: "AGI Through Scaling — LLM Architecture as the Path to General Intelligence",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Scaling hypothesis formalised — GPT-3 and the emergence of the path claim",
      description: "The GPT-3 paper (Brown et al. 2020) and subsequent commentary by OpenAI, Anthropic founders, and DeepMind researchers formalise the hypothesis that sufficiently scaled LLMs will exhibit general intelligence. Sam Altman, Ilya Sutskever, and Demis Hassabis each make public statements consistent with this claim in 2020–22. The claim is not merely that scaling helps — it is that the LLM architecture, scaled sufficiently, is the path to AGI. This is the originating instance for the record: the claim is made explicitly and publicly by the leading figures in the field. It is not contested at this stage; it is the dominant hypothesis within the organisations most capable of pursuing it.",
      vectors: ["supportive--path-claim-stated-and-adopted"],
      date: "2020–22",
    },
    {
      id: "IN-002",
      qualifiedEvent: "GPT-4 and capability plateau — first ceiling evidence",
      description: "GPT-4 (2023) represents a major capability improvement over GPT-3 but a smaller relative gain than GPT-3 represented over GPT-2. Benchmark saturation on MMLU, HellaSwag, and similar evaluations accelerates. The model achieves near-human performance on many standardised tests while continuing to fail on tasks requiring genuine novel reasoning, physical understanding, and consistent long-horizon planning. Independent researchers including François Chollet, Gary Marcus, and Melanie Mitchell publish critiques arguing that benchmark performance is not evidence of general intelligence and that scaling is producing diminishing returns on the most important capabilities. The instance is partial: scaling continues to produce capability gains, but the gains are concentrated in domains far from the AGI target as understood by critics of the path claim.",
      vectors: ["partial--capability-gains-with-qualitative-limits"],
      date: "2022–23",
    },
    {
      id: "IN-003",
      qualifiedEvent: "OpenAI internal dispute and Sutskever departure — path claim fractures internally",
      description: "The November 2023 OpenAI board crisis, Ilya Sutskever's subsequent departure, and the founding of Safe Superintelligence Inc. by Sutskever reveals a fracture within the organisation most identified with the LLM-scaling path to AGI. Sutskever's public statements post-departure suggest he no longer believes pure LLM scaling is sufficient for AGI, pivoting toward what he describes as fundamentally new approaches. This is not experimental evidence against the claim but institutional evidence: the co-inventor of the scaling hypothesis publicly revises his view on the sufficiency of the path. The fracture does not falsify the claim — OpenAI and others continue pursuing it — but it is the first evidence that leading proponents are beginning to disaggregate the path from the destination.",
      vectors: ["contesting--path-claim-contested-by-originator"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "o1/o3 reasoning models — path bifurcation",
      description: "OpenAI releases o1 (September 2024) and o3 (December 2024), models that incorporate extended chain-of-thought reasoning as a trained behaviour distinct from simple next-token prediction. The models achieve significant capability gains on reasoning-heavy benchmarks. The architectural question this raises for the claim is sharp: o1/o3 represent a meaningful departure from pure scaling of the base LLM architecture — they incorporate test-time compute, extended internal reasoning, and process reward models. If this architectural augmentation is necessary for continued progress toward AGI, the claim as stated — \"through scaling current LLM architectures\" — requires reinterpretation. The path may be evolving away from pure scaling into something that requires the LLM as a component but not as a sufficient mechanism.",
      vectors: ["partial--capability-advance-requires-path-reinterpretation"],
      date: "2024",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Scaling wall evidence — compute efficiency, data constraints, and energy limits",
      description: "Multiple independent analyses in 2024 document constraints on continued LLM scaling: high-quality training data is approaching exhaustion (Villalobos et al. 2022, updated 2024), compute costs are growing faster than performance gains, and energy consumption is generating regulatory and infrastructure limits. Epoch AI and other research groups publish analyses suggesting that the compute scaling trajectory of 2020–23 cannot continue at the same rate through 2030. These are not hard ceilings — synthetic data, architectural improvements, and efficiency gains may extend the trajectory — but they constitute the first systematic evidence that the pure scaling path faces structural constraints beyond laboratory physics. The claim is not falsified; the path is becoming demonstrably harder.",
      vectors: ["contesting--structural-scaling-constraints"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "AGI definition migration — OpenAI redefines the target",
      description: "OpenAI publishes an internal framework in late 2024 defining AGI as a system that can \"outperform humans at most economically valuable work\" — a substantially narrower and more operational definition than the earlier framing of AGI as general human-level intelligence across all domains. The definition shift has a direct consequence for the claim: if AGI is now operationally defined as economic task performance, the claim becomes much closer to being satisfied by current LLM deployments, and the path claim becomes trivially supportable. Critics note that this definition migration constitutes a goalpost shift that allows the path claim to succeed by redefining the destination. For the Observatory, this is the most structurally significant instance in the record: it is the first case where the claim's target term is actively migrating under institutional pressure.",
      vectors: ["partial--target-migration-under-institutional-pressure"],
      date: "2024–25",
    },
    {
      id: "IN-007",
      qualifiedEvent: "Scaling-plateau debate matures and a second architectural path consolidates",
      description: "Through 2025–26, the bifurcation IN-004 first identified consolidates into a field-wide pattern rather than a single lab's pivot. By early 2026, mainstream technical commentary describes 2026 progress as driven \"less by raw training-scale breakthroughs and more by improvements in inference, tooling, and application design,\" with smaller, more efficient models closing capability gaps that previously required larger ones. Academic work on reinforcement-learning post-training scaling (2026) explicitly documents a \"latent saturation trend\" — larger models still gain from scale, but with diminishing returns on the original training-compute axis IN-001 and IN-006 both addressed. At the same time, frontier labs (Google, Microsoft, Meta, Amazon) continue committing tens of billions of dollars to training-scale infrastructure through 2025, indicating the industry has not converged on abandoning the original path even as the architectural mix diversifies. The claim is not resolved by this: capability continues to advance (supportive), the path continues to bifurcate beyond pure scaling (consistent with IN-004), and major capital continues to back the original path simultaneously (complicating any clean narrative of abandonment). This is best read as confirmation that the three-way fragmentation AS-001 identified — capability gains, path bifurcation, target migration — has continued rather than resolved in either direction.",
      vectors: ["partial--fragmentation-continues-no-resolution"],
      date: "2025–26",
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
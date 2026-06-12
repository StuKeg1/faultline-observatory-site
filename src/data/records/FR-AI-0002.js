/**
 * FR-AI-0002 — LLM Knowledge-Work Utility — Economically Valuable Task Performance
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0002 = {
  id: "FR-AI-0002",
  programme: "PROG-AI",

  claim: {
    statement: "Large language models can perform economically valuable knowledge-work tasks with limited human supervision.",
    shortLabel: "LLM Knowledge-Work Utility — Economically Valuable Task Performance",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "GitHub Copilot productivity study — Peng et al. (Microsoft Research)",
      description: "A controlled experiment published by Microsoft Research (Peng et al. 2023) finds that software developers using GitHub Copilot complete coding tasks 55% faster than a control group without AI assistance. The study involves 95 professional developers on a standardised task set. Code quality as measured by test passage rates is comparable between groups. The result is a direct productivity measurement in a commercial knowledge-work context — software development — under conditions approximating limited supervision: developers use Copilot output with review but without specialist AI intervention. This is the most methodologically rigorous early productivity study in the corpus; it is a randomised controlled experiment rather than a retrospective survey.",
      vectors: ["supportive"],
      date: "2023",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Noy and Zhang — Experimental evidence on productivity effects of generative AI in professional writing",
      description: "A randomised controlled trial (Noy and Zhang, 2023, Science) assigns mid-career professionals — including marketers, grant writers, consultants, and analysts — to write documents with or without ChatGPT access. The AI-assisted group completes tasks 37% faster; output quality as rated by blinded evaluators improves by 18%. Inequality effects are notable: lower-ability workers benefit more than higher-ability workers, partially compressing the quality distribution. The study directly tests the claim across multiple knowledge-work domains under limited supervision conditions. The task set is representative of white-collar professional work rather than a narrow technical domain.",
      vectors: ["supportive"],
      date: "2023",
    },
    {
      id: "IN-003",
      qualifiedEvent: "AI in legal practice — contract review and due diligence deployment",
      description: "Multiple large law firms and legal technology companies deploy LLM-based contract review systems in commercial practice. Harvey AI, CoCounsel (Thomson Reuters), and comparable tools are adopted by firms including Allen and Overy, Paul Weiss, and others for due diligence, contract comparison, and research summarisation tasks. Firms report material reductions in associate time on document review tasks. No peer-reviewed productivity study accompanies these deployments; evidence is commercial and self-reported. The deployments nonetheless represent real economic commitment under conditions of limited supervision — associates review AI output rather than producing documents from scratch. The legal sector is a high-value knowledge-work domain where deployment at this scale constitutes meaningful commercial validation.",
      vectors: ["supportive--commercial-deployment"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Hallucination and reliability failure documentation — legal and medical contexts",
      description: "Multiple documented cases emerge of LLMs producing confidently stated but fabricated outputs in high-stakes knowledge-work contexts. The Mata v. Avianca case (2023) involves attorneys submitting AI-generated legal briefs citing non-existent case law; the presiding judge imposes sanctions. Medical AI systems produce plausible but clinically incorrect recommendations in published evaluations. A systematic review of LLM performance in medical question-answering (Omiye et al. 2023) finds that all tested models produce harmful recommendations in a non-trivial fraction of cases. These events do not falsify the claim — which does not require error-free performance — but they constitute direct evidence that the \"limited human supervision\" condition is not yet safely achievable in all knowledge-work domains. The instances are contesting evidence against the universal scope of the claim.",
      vectors: ["contesting--supervision-requirement"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Brynjolfsson, Li, and Raymond — Generative AI at work (customer service study)",
      description: "A large-scale study of AI-assisted customer service agents (Brynjolfsson, Li, and Raymond, 2023/2024, QJE) tracks 5,000 agents at a technology company over 18 months. AI assistance increases average agent productivity by 14%, with largest gains concentrated among novice workers. Customer satisfaction scores improve. The study is notable for its scale, its use of a natural experiment rather than a controlled trial, and its measurement of actual commercial outcomes rather than laboratory task performance. It represents the strongest evidence to date that LLM utility is observable in deployed commercial settings at scale, not merely in experimental conditions. The knowledge-work domain — customer service and technical support — involves diagnosis, communication, and problem resolution: genuine cognitive tasks under limited supervision.",
      vectors: ["supportive--deployed-scale-evidence"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Agentic deployment failures — early autonomous task completion attempts",
      description: "Multiple reports emerge of LLM-based autonomous agents — systems operating with minimal human supervision over extended task sequences — producing failures not observed in single-turn interactions. Documented failure modes include task drift, compounding errors across multi-step workflows, inappropriate escalation of actions, and inability to recognise when a task exceeds model competence. Evaluations of autonomous coding agents (SWE-bench, 2024) show performance well below human developer capability on complex, multi-file software engineering tasks despite strong single-turn performance. The evidence is specifically relevant to the \"limited human supervision\" condition in the claim: it suggests the supervision threshold required for reliable performance is lower for extended autonomous tasks than for supervised single-turn assistance. This is a domain-boundary contesting instance rather than a general refutation.",
      vectors: ["partial--agentic-boundary"],
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
      summary: "The claim is supported by the current evidence in a qualified but meaningful sense. Three independent lines of evidence — controlled experiments (INST-001, INST-002), commercial deployment at scale (INST-003), and natural experiment in deployed settings (INST-005) — all find that LLMs produce measurable economic value in knowledge-work contexts under conditions approximating limited supervision. The effect sizes are not marginal: 14–55% productivity improvements in relevant task domains, with qu",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Hallucination under low supervision. LLMs produce confident, fluent, and factually incorrect output at non-trivial rates. In supervised settings, human review catches and corrects errors before they produce harm. As supervision decreases, uncorrected errors propagate. The mechanism creates a hard constraint on the supervision level at which the claim holds: the claim is true under adequate supervi",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Agentic error compounding. In single-turn assisted tasks, errors are local and recoverable. In multi-step agentic workflows, errors compound: a mistaken intermediate step propagates through subsequent steps, producing outputs that are difficult to audit and expensive to correct. The mechanism is evidenced by INST-006. It is structurally distinct from hallucination — it is not primarily about factu",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Knowledge-work task scope is undefined. The claim spans a range from low-stakes, single-turn drafting assistance to high-stakes, multi-step autonomous professional work. The evidence is positive at the low end and negative or qualified at the high end. The bottleneck is not evidential — more evidence will not resolve it — it is definitional. A scoped version of the claim (e.g. restricted to single",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Agentic capability threshold as resolution point. The primary open question for this record is whether LLMs can perform valuable knowledge-work autonomously over extended task sequences — the agentic frontier. Current evidence shows strong performance in supervised single-turn settings and weaker performance in autonomous multi-step settings. If agentic systems demonstrate reliable multi-step task",
    }
  ],

  lineage: {
    items: [
    { year: "2020–22", text: "GPT-3 and early commercial deployment. OpenAI API opens GPT-3 for commercial access. Early adopters deploy in copywriting, summarisation, and customer service contexts. Results are mixed; the capability exists but hallucination rates and inconsistency limit reliable deployment. The utility claim is " },
    { year: "2022–23", text: "ChatGPT release and mass adoption. ChatGPT reaches 100 million users in two months. Spontaneous mass deployment across knowledge-work contexts — drafting, coding, analysis, research — produces an enormous but methodologically uncontrolled evidence trail. Anecdotal reports of value are ubiquitous; sy" },
    { year: "2023", text: "Controlled studies and commercial deployments. The Peng et al. and Noy and Zhang studies provide the first rigorous experimental evidence. Simultaneously, major professional services firms (law, consulting, finance) begin commercial deployment. The claim transitions to ESCALATING." },
    { year: "2023–24", text: "Hallucination incidents and agentic frontier. High-profile hallucination failures in legal and medical contexts establish the supervision threshold as a genuine constraint. Agentic deployment attempts reveal the compounding error problem as a distinct resistance mechanism. The claim's boundary condi" },
    { year: "2024", text: "Natural experiment at deployment scale. Brynjolfsson et al. publish the first large-scale natural experiment confirming productivity gains in deployed commercial settings. The claim's evidential base shifts from experimental to observational — from controlled trials to real economic outcomes in oper" }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Where exactly is the supervision threshold boundary? The claim holds at supervised single-turn assistance and fails at autonomous multi-step high-stakes work. The boundary between these is not characterised. As agentic systems improve, does the boundary move, or is it a structural property of LLM architecture?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The productivity gains documented in INST-001, INST-002, and INST-005 are concentrated in tasks with clear outputs and measurable quality criteria (code, documents, customer service responses). Do the same gains hold for knowledge-work tasks with harder-to-measure outputs: strategic judgment, novel problem formulation, relationship management?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-AI-0001 (reasoning) and FR-AI-0002 (utility) are both ESCALATING. Is their co-escalation coincidental — both happen to be progressing simultaneously — or is there a causal relationship? If reasoning improvements (FR-AI-0001) drive utility improvements (FR-AI-0002), the two records are dependent. If utility advances independently of reasoning (through better prompting, deployment infrastructure, task design), they are not. This relationship is currently unobserved.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

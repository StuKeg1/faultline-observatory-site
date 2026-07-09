/**
 * FR-AI-0007 — Autonomous AI Scientific Discovery — Novel, Correct, Independent
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0007 = {
  id: "FR-AI-0007",
  programme: "PROG-AI",

  claim: {
    statement: "AI systems can autonomously conduct scientific research that produces novel, correct discoveries.",
    shortLabel: "Autonomous AI Scientific Discovery — Novel, Correct, Independent",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "AlphaFold2 — protein structure prediction at scale",
      description: "DeepMind's AlphaFold2 (Jumper et al. 2021, Nature) achieves near-experimental-accuracy protein structure prediction across the proteome, solving a fifty-year grand challenge in structural biology. The system is trained on known structures and predicts novel structures without human direction of individual predictions. Structures predicted by AlphaFold have been independently verified experimentally and have enabled downstream biological discoveries. The autonomy component is partially satisfied: the system is autonomous at the level of individual predictions, but the research framing (predict structures from sequences) is human-set. The novelty component is strongly supported for structures of previously uncharacterised proteins. The correctness component is well-evidenced by experimental validation. Characterisation: correct and novel at the prediction level; autonomy limited to execution rather than research direction.",
      vectors: ["partial--correct-and-novel-autonomy-at-execution-level-only"],
      date: "2020–22",
    },
    {
      id: "IN-002",
      qualifiedEvent: "GNoME — graph neural network materials discovery",
      description: "Merchant et al. (DeepMind, 2023, Nature) report GNoME, a graph neural network that predicts the stability of novel inorganic crystal structures, identifying approximately 2.2 million new stable materials — including 380,000 structures considered stable enough for experimental synthesis, of which 736 were subsequently synthesised in collaboration with a robotic laboratory. The system autonomously explores chemical space beyond human-curated hypotheses. Novel, stable materials were predicted and then confirmed experimentally. The autonomy component is stronger here than in AlphaFold: the system generates candidate structures rather than merely predicting properties of human-specified inputs. However, the research question (find stable inorganic crystals) was human-framed. Correctness is directly evidenced by successful synthesis. This is the strongest instance in the record: autonomous generation of novel, experimentally confirmed scientific results across a domain the humans did not individually direct.",
      vectors: ["supportive--autonomous-generation-novel-experimentally-confirmed"],
      date: "2023",
    },
    {
      id: "IN-003",
      qualifiedEvent: "AI Scientist (Sakana AI) and early autonomous research systems",
      description: "Sakana AI publishes \"The AI Scientist\" (Lu et al. 2024), a system that autonomously generates research ideas, writes code to test them, runs experiments, and writes papers reporting results — the full scientific loop without human direction at each stage. Evaluation shows the system produces papers that pass automated review at machine learning conferences. The system's outputs contain errors and the autonomy is within a narrow domain (machine learning experiments), but the structure of the claim is satisfied at small scale: autonomous hypothesis generation, experimental execution, and result reporting. Immediate critique: the results are not independently verified, many contain errors detectable by expert review, and the \"novelty\" is contested — the system recombines existing ideas rather than making genuinely unprecedented leaps. The transition to ESCALATING is triggered by the first systems demonstrating the full autonomous research loop, even if output quality is limited.",
      vectors: ["partial--full-loop-demonstrated-correctness-and-novelty-contested"],
      date: "2023–24",
    },
    {
      id: "IN-004",
      qualifiedEvent: "FunSearch and mathematical discovery — verified novel results in combinatorics",
      description: "Romera-Paredes et al. (DeepMind, 2023/2024, Nature) report FunSearch, a system combining large language models with evolutionary search that discovers new solutions to mathematical problems including the cap set problem and bin packing. The cap set result is a genuinely novel advance: it improves on the best known human construction and has been verified by the mathematics community. FunSearch operates with human-specified objectives but generates the actual mathematical content autonomously — the system discovers the solution, not merely validates a human hypothesis. The correctness of the mathematical result is absolute (mathematical proof). The novelty is established (it improves on a decades-long open problem). The autonomy is at the solution-finding level within a human-framed problem. This is arguably the clearest current demonstration of the claim: a verified novel correct result produced by autonomous AI process.",
      vectors: ["supportive--verified-novel-correct-mathematical-result"],
      date: "2024",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Major lab restructuring around AI researchers — anticipatory institutional evidence",
      description: "These are anticipatory institutional acts — serious institutions reorganising in advance of the claim being satisfied. The acts constitute the sixth occurrence of anticipatory institutional evidence in the corpus, this time within PROG-AI — the first occurrence inside the AI programme itself. Multiple major research institutions begin restructuring scientific workflows around AI tools: the Broad Institute, EMBL, and several pharmaceutical companies announce AI-first research programmes; Nature and Science publish editorials on AI's role in scientific discovery; multiple Nobel laureates comment on AI's emerging role in their fields. OpenAI, Anthropic, and Google DeepMind each announce internal research programmes treating AI-assisted discovery as a near-term capability.",
      vectors: ["partial--anticipatory-institutional-evidence-sixth-occurrence-first-in-prog-ai"],
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
      summary: "The evidence is fragmenting across the three component claims. The correctness and novelty components are most strongly evidenced: GNoME (INST-002) and FunSearch (INST-004) both demonstrate AI systems producing results that are verified correct and independently novel in their domains. The autonomy component is more contested: in both cases, the research question was human-framed; the AI system discovered answers within a human-specified problem space rather than identifying the problem itself. ",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Autonomously conduct\" lacks an agreed boundary. The claim requires autonomous research conduct, but the boundary between autonomous AI research and AI-assisted human research is contested. All current leading examples involve human-framed problems solved autonomously. Whether the claim requires only autonomous problem-solving (satisfied by GNoME and FunSearch) or also autonomous problem-identific",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description: "Novelty assessment is itself a research task. The claim requires that discoveries be novel, but establishing novelty requires surveying the accessible scientific literature — which is itself an incomplete and poorly indexed object. For fast-moving fields, a result that appears novel may have been anticipated in preprints, conference talks, or unpublished work. For large, old literatures, a result ",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Autonomous problem identification with verified novel correct results. The resolution path is a demonstration where an AI system identifies a previously unrecognised scientific problem, generates hypotheses about it, designs or conducts experiments, and produces results that are independently verified as correct and novel — without a human specifying the problem space. FunSearch and GNoME satisfy ",
    }
  ],

  lineage: {
    items: [
    { year: "1955–90", text: "Early AI discovery systems. DENDRAL (1965) and AM (1976) demonstrate early AI systems generating hypotheses in chemistry and mathematics. The claim's aspirational form is established; the capability is far from practical demonstration." },
    { year: "2020–22", text: "AlphaFold and domain-specific breakthroughs. AlphaFold demonstrates AI-enabled discovery at unprecedented scale in structural biology. The claim transitions from aspiration to active frontier. Autonomy remains limited to execution within human-framed problems." },
    { year: "2023", text: "GNoME, FunSearch, and generative discovery. Systems demonstrating autonomous generation of novel, experimentally verified results in materials science and mathematics. The correctness and novelty components are strongly evidenced in constrained domains. Autonomy at the problem-generation level remai" },
    { year: "2024", text: "End-to-end autonomous systems and institutional restructuring. AI Scientist demonstrates the full research loop; major institutions begin restructuring around AI-assisted discovery. The claim enters FRAGMENTING as component claims diverge in evidential strength." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Does \"autonomously conduct scientific research\" require autonomous problem identification, or is autonomous problem-solving within human-framed domains sufficient? BN-001 cannot close until this is resolved. The claim's satisfaction hangs on this distinction.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "INST-005 is the sixth occurrence of anticipatory institutional evidence and the first within PROG-AI. Does it fit the existing RN-004 taxonomy of act types (commercial commitment, regulatory preparation, community standards tightening), or does institutional reorganisation constitute a fourth act type? The Broad Institute and EMBL restructuring is neither a commercial contract nor a regulatory act — it is a scientific workflow redesign. This may be relevant to Option D in the updated RN-004.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "BN-002 (novelty assessment as a measurement validity bottleneck) is structurally similar to FR-BT-0002 BN-001 (biological age measurement validity). Both are cases where the measurement tool may not reliably track the thing it purports to measure. Two occurrences of this specific bottleneck structure across two programmes. Has measurement validity as a distinct resistance/bottleneck type now reached watchlist elevation?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-005 description reordered per EP-001 (closing synthesis moved to opening), and stale 'in the sense of RN-004' reference removed — RN-004 was retired 2026-07-07. No other wording changed." },
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

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
    },
    {
      id: "IN-006",
      qualifiedEvent: "Structured Concept Evolution — LLM-driven discovery of qLDPC code families",
      description: "A Structured Concept Evolution (SCE) framework pairing a large language model with an algebraic mutation grammar discovers competitive qLDPC code families, including non-abelian group constructions beyond standard bivariate-bicycle codes, using only lightweight models (arXiv:2606.24808, Max Planck Institute, primary preprint, submitted 23 June 2026). The result demonstrates constrained autonomous generation within a human-framed, human-prior-encoded search space: the problem (find high-performance qLDPC code families) is human-set and the mutation grammar itself encodes algebraic prior knowledge, so the system is not discovering code theory from scratch. It supplies no evidence on autonomous problem-identification, which remains the record's decisive unresolved boundary (BN-001, OQ-001, AT-001); competitive performance has not yet been independently established as superior — whether the discovered families outperform state-of-the-art codes under circuit-level (as opposed to code-capacity) noise is unestablished. In relation to the whole claim this is a third constrained-domain example of the same autonomous-generation pattern as IN-002 (materials) and IN-004 (mathematics), on the already-evidenced novelty/correctness side, and weaker than both on correctness. It is classified NEUTRAL because it neither advances nor contests the record's load-bearing boundary.",
      vectors: ["NEUTRAL"],
      date: "2026",
    },
    {
      id: "IN-007",
      qualifiedEvent: "Distributed Denial of Science — indirect data poisoning of autonomous research agents",
      description: "Gyevnár, Kasirzadeh, and Shah (arXiv:2607.10712v1, submitted 12 July 2026) test indirect data poisoning against autonomous scientific workflows using three frontier AI agent systems across five socially salient topics and 450 ethically contained runs. Poisoned datasets were retrieved in 84.22% of runs; 49.56% ended with a poisoned conclusion without detection or caveat, while poisoning was detected in 6.0%. In the mitigation evaluation, a structured five-check provenance audit reduced full attack success to 0.0% in the tested setting. This is a bounded contesting instance on the correctness component: it establishes that correctness in autonomous scientific workflows can be conditional on evidential provenance under adversarial retrieval. The canonical claim is existential, so this result does not negate the correct discoveries demonstrated by IN-002 and IN-004. It supplies no evidence on autonomous problem-identification and leaves BN-001, OQ-001, and AT-001 unchanged. The experiment used ethically contained private repositories made operationally indistinguishable from public repositories, five selected topics, and three specified agent configurations; generalisation beyond this controlled setting is unestablished.",
      vectors: ["CONTESTING"],
      date: "2026",
    },
    {
      id: "IN-008",
      qualifiedEvent: "Open-ended AI research case studies — engineering competence without successful scientific judgment",
      description: "A shadow evaluation of frontier research agents finds that substantial autonomous research engineering did not produce successful open-ended AI research in the tested cases (arXiv:2607.27191v1, submitted 29 July 2026). Agents were given the central question from each of two unpublished NeurIPS submissions, but not the authors' answer, and received multi-day access to compute, web search, coding tools, subagents, and review tools. The two principal outputs received overall expert scores of 2/6 and 1/6 and were judged unambiguous rejections. The agents completed literature review, coding, environment debugging, and extensive experimentation, but failed at evidential prioritisation, project-level backtracking, creative response to criticism, and recognition of publishable progress; a robustness run using a different model and scaffold reproduced most of these judgment failures. This is bounded CONTESTING evidence on the autonomy component. It shows that autonomous execution of research engineering can coexist with failure of scientific judgment even after humans specify the research problem, so the record's unresolved autonomy boundary is not exhausted by problem identification versus problem solving. It does not negate verified bounded discoveries in IN-002 and IN-004, test autonomous problem identification, or establish general failure across fields. Generalisation is limited by two research questions, five total runs, non-blind expert reviewers, scaffold defects, and the source's preprint status.",
      vectors: ["CONTESTING"],
      date: "2026",
    },
    {
      id: "IN-009",
      qualifiedEvent: "The Station — autonomous mathematical discovery in an open-world multi-agent environment",
      description: "Chung, Du, and Wesley (arXiv:2608.23691v1, submitted 24 August 2026) report the Station, an open-world multi-agent environment in which agents from different model families choose research directions, conduct experiments, collaborate, and build a shared scientific literature without a central coordinator or scripted pipeline. Across twelve construction problems from the AlphaEvolve catalogue and two additional case studies, the authors report results novel relative to prior literature on five problems, including a new infinite family of finite-field Kakeya sets, exact 604-point kissing configurations in dimension 11, new records for two optimisation problems, and an improved lower bound for Erdős's minimum-overlap problem; they also report novel infinite families for Book Ramsey numbers. Raw agent dialogues, proofs, source code, and verification artifacts were released. This is SUPPORTIVE instance evidence for autonomous research direction and scientific judgment within a human-defined shared goal, and it counterbalances IN-008's bounded failure cases without negating them. The source remains a primary preprint authored by the system's creators: independent expert validation of the claimed novelty, proofs, and reproducibility is incomplete. The system did not identify the overarching research domain or shared goal, so it does not satisfy the autonomous problem-identification boundary in BN-001, OQ-001, and AT-001. Instance only: AS-002, FRAGMENTING, VS-03, mechanisms, and open questions remain unchanged.",
      vectors: ["SUPPORTIVE"],
      date: "2026",
    },
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
    },
    {
      id: "AS-002",
      date: "2026-08-01",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "FRAGMENTING remains the correct pressure state, but the reason for fragmentation is now more precisely described. AS-001 treated autonomous problem identification as the decisive missing component because the strongest supportive examples — GNoME and FunSearch — solve human-framed problems. IN-008 shows that supplying the problem does not isolate the remaining difficulty: frontier agents can execute substantial literature review, coding, debugging, and experimentation while still failing at scientific judgment, including evidential prioritisation, abandonment of weak approaches, project-level backtracking, and recognition of publishable progress. The autonomy boundary therefore has at least two separable dimensions: who identifies the research problem, and whether the system can exercise adequate scientific judgment after the problem is specified. This new contesting evidence does not reverse the existential support supplied by IN-002 and IN-004, and its two-case preprint design is too bounded to justify a stronger negative state. It nevertheless changes the assessment's structure because autonomous research engineering can no longer be treated as evidence that only autonomous problem identification remains unresolved. IN-007 separately shows that correctness can fail through compromised evidential provenance. Together the 2026 evidence deepens fragmentation across autonomy and correctness while preserving the record's verified bounded discoveries. Pressure State and Verification Stage remain FRAGMENTING and VS-03.",
      assessorNote: "AS-002 was issued following the operator-approved Post-Scout review of flag 2026-08-01-01. It is triggered by IN-008 (arXiv:2607.27191v1) and updates the current autonomy-boundary rationale without modifying AS-001, BN-001, OQ-001, AT-001, or any prior instance. The source is a primary preprint with two principal case studies and five total runs; its limits are preserved in IN-008.",
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Autonomously conduct\" lacks an agreed boundary. The claim requires autonomous research conduct, but the boundary between autonomous AI research and AI-assisted human research is contested. All current leading examples involve human-framed problems solved autonomously. Whether the claim requires only autonomous problem-solving (satisfied by GNoME and FunSearch) or also autonomous problem-identification (not yet demonstrated) is the critical definitional gap. This is the fifth lexical bottleneck in the corpus — and notably the second in PROG-AI within two records, following the same pattern identified at FR-AI-0006.",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description: "Novelty assessment is itself a research task. The claim requires that discoveries be novel, but establishing novelty requires surveying the accessible scientific literature — which is itself an incomplete and poorly indexed object. For fast-moving fields, a result that appears novel may have been anticipated in preprints, conference talks, or unpublished work. For large, old literatures, a result that appears novel may rediscover forgotten work. Novelty is not directly measurable from the discovery alone; it requires a comparison to the state of knowledge, which is itself uncertain. This is a measurement validity bottleneck of the same type as FR-BT-0002 BN-001: the measurement tool (literature survey) may not reliably track the thing it purports to measure (genuine novelty).",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Autonomous problem identification with verified novel correct results. The resolution path is a demonstration where an AI system identifies a previously unrecognised scientific problem, generates hypotheses about it, designs or conducts experiments, and produces results that are independently verified as correct and novel — without a human specifying the problem space. FunSearch and GNoME satisfy part of this; the problem-identification component is the remaining gap. Several AI research systems in development are explicitly targeting this boundary. The attractor is clearly defined and closer than analogous attractors in other records — the current evidence is within one component of satisfaction.",
    }
  ],

  lineage: {
    items: [
    { year: "1955–90", text: "Early AI discovery systems. DENDRAL (1965) and AM (1976) demonstrate early AI systems generating hypotheses in chemistry and mathematics. The claim's aspirational form is established; the capability is far from practical demonstration." },
    { year: "2020–22", text: "AlphaFold and domain-specific breakthroughs. AlphaFold demonstrates AI-enabled discovery at unprecedented scale in structural biology. The claim transitions from aspiration to active frontier. Autonomy remains limited to execution within human-framed problems." },
    { year: "2023", text: "GNoME, FunSearch, and generative discovery. Systems demonstrating autonomous generation of novel, experimentally verified results in materials science and mathematics. The correctness and novelty components are strongly evidenced in constrained domains. Autonomy at the problem-generation level remains partial." },
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
      question: "INST-005 is the sixth occurrence of anticipatory institutional evidence and the first within PROG-AI. Does it fit the existing taxonomy of act types (commercial commitment, regulatory preparation, community standards tightening), or does institutional reorganisation constitute a fourth act type? The Broad Institute and EMBL restructuring is neither a commercial contract nor a regulatory act — it is a scientific workflow redesign. This may be relevant to a fourth act-type option within that developing taxonomy.",
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
    { id: "M-014", date: "2026-08-29", field: "instance_appended", from: "IN-008", to: "IN-009", note: "IN-009 appended — The Station autonomous mathematical discovery study (arXiv:2608.23691v1), authorised through Post-Scout flag RR-2026-08-29-01. SUPPORTIVE instance evidence for autonomous research direction and scientific judgment within a human-defined shared goal. Independent validation remains incomplete; the autonomous problem-identification boundary (BN-001/OQ-001/AT-001) is unchanged. No assessment issued; pressureState FRAGMENTING, verificationStage VS-03, mechanisms, and openQuestions unchanged." },
    { id: "M-013", date: "2026-08-01", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following operator-approved Post-Scout flag 2026-08-01-01. Pressure State FRAGMENTING and Verification Stage VS-03 retained. The assessment now distinguishes autonomous problem identification from scientific judgment after a problem is supplied; IN-008 establishes bounded contesting evidence on the latter. No existing assessment, instance, mechanism, or open question modified." },
    { id: "M-012", date: "2026-08-01", field: "instance_appended", from: "IN-007", to: "IN-008", note: "IN-008 appended — open-ended AI research shadow evaluation (arXiv:2607.27191v1), authorised through Post-Scout flag 2026-08-01-01. Bounded CONTESTING evidence: agents completed substantial research engineering but failed the tested open-ended scientific-judgment task. Instance logged before AS-002; no prior corpus content modified." },
    { id: "M-011", date: "2026-07-17", field: "instance_appended", from: "—", to: "IN-007", note: "IN-007 appended — Distributed Denial of Science (arXiv:2607.10712v1). Bounded CONTESTING instance on the correctness component: under the tested adversarial retrieval setting, correctness in autonomous scientific workflows is conditional on evidential provenance. The existential claim and previously demonstrated correct discoveries are preserved; the autonomous problem-identification boundary (BN-001/OQ-001/AT-001) is unchanged. No assessment issued; pressureState FRAGMENTING, verificationStage VS-03, mechanisms, and openQuestions unchanged. The separately authorised NEW RECORD PATH component is not implemented by this mutation." },
    { id: "M-010", date: "2026-07-14", field: "vector_corrected", from: "neutral--constrained-autonomy-boundary-untouched", to: "NEUTRAL", note: "Operator correction: IN-006's vector must use the controlled vocabulary token NEUTRAL. The prior value encoded an explanatory phrase into the vector slot, introducing a non-vocabulary live shorthand; it is retracted. The constrained-autonomy nuance (constrained generation within a human-framed, human-prior-encoded space; problem-identification boundary untouched; competitive-not-superior) remains stated in IN-006's description, which is its correct location. Classification unchanged — NEUTRAL as recorded in M-009. No other field altered." },
    { id: "M-009", date: "2026-07-14", field: "instance_appended", from: "—", to: "IN-006", note: "IN-006 appended — Structured Concept Evolution (arXiv:2606.24808), surfaced from Frontline Scout report 2026-07-03 during evidence-gap review as non-duplicate evidence stranded in the Scout archive. Instance-level append only, classified NEUTRAL: constrained autonomous generation within a human-framed, human-prior-encoded space; the decisive problem-identification boundary (BN-001/OQ-001/AT-001) is untouched and competitive performance is not established as superior. No assessment issued; pressureState FRAGMENTING, verificationStage VS-03, mechanisms, and openQuestions unchanged. Recurrence observed but not institutionalised here: third constrained-domain instance of the IN-002/IN-004 autonomous-generation pattern, left for later cross-programme review." },
    { id: "M-008", date: "2026-07-09", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): OQ-002 incorrectly cited 'the existing RN-004 taxonomy of act types' and 'Option D in the updated RN-004.' Investigation (2026-07-09) established that the retired RN-004 (Trajectory Vocabulary — Endurance/Stagnation, retired 2026-07-07) is a different document from the act-type taxonomy (commercial commitment / regulatory preparation / community standards tightening) OQ-002 actually refers to; the latter was never filed as a numbered Review Note. OQ-002 reworded to refer to the taxonomy descriptively rather than by a document label that both never existed for this taxonomy and, independently, now names a retired document about an unrelated subject. Note for the record: M-006 (this same file) removed a parallel 'in the sense of RN-004' reference from IN-005 on the stated rationale that RN-004 was retired; that rationale conflated the two RN-004s, but M-006's action (removing the label) is unaffected — IN-005 is correct with no numbered-document reference, for the reason established here rather than the reason originally given." },
    { id: "M-007", date: "2026-07-09", field: "description_restored", from: "—", to: "DESCRIPTION-RESTORED", note: "Editorial Correction (GP-001): BN-001, BN-002, and AT-001 mechanism descriptions, and the 2023 lineage.items entry, were truncated (500-char convert-records.js defect — same defect class as RELEASE-033's AS-001 restorations, which did not cover mechanisms[] or lineage.items[]). Full text restored verbatim from the canonical source HTML (FR_AI_0007_autonomous_scientific_discovery.html, Drive). No wording added or altered beyond restoring the truncated remainder; no other field changed. Initiated ahead of RENDER-PILOT-001 (public rendering of mechanisms[] and lineage.items[] would otherwise have shipped mid-sentence truncation to the public page). OQ-002's separate stale-reference issue (flagged 2026-07-09) is NOT addressed by this entry — see flag to operator." },
    { id: "M-006", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-005 description reordered per EP-001 (closing synthesis moved to opening), and stale 'in the sense of RN-004' reference removed — RN-004 was retired 2026-07-07. No other wording changed." },
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

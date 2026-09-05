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
  lastProvenanceReview: "2026-09-05",
  provenanceReviewId: "LPR-001-D07",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "AI systems can autonomously conduct scientific research that produces novel, correct discoveries.",
    shortLabel: "Autonomous AI Scientific Discovery — Novel, Correct, Independent",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "AlphaFold2 — highly accurate blind protein-structure prediction",
      description: "Jumper et al. (2021) report AlphaFold2's performance in CASP14, a blind structure-prediction assessment using experimentally solved structures that had not yet been publicly released. AlphaFold achieved accuracy competitive with experimental structures in a majority of cases and substantially outperformed other methods. This is strong evidence that an AI system can autonomously execute highly accurate scientific prediction once the task and inputs are specified. The Nature paper does not by itself establish proteome-scale discovery, independent experimental confirmation of newly discovered structures, or autonomous selection of scientific questions. For this record it is therefore bounded background evidence on correctness and autonomous execution, not a demonstration of autonomous scientific discovery in the full sense of the claim.",
      vectors: ["partial--high-accuracy-prediction-not-autonomous-discovery"],
      date: "2021",
      sources: [
        {
          citation: "Jumper, J. et al. (2021), Highly accurate protein structure prediction with AlphaFold, Nature 596, 583–589.",
          url: "https://www.nature.com/articles/s41586-021-03819-2",
          locator: "Abstract; CASP14 blind assessment; accuracy results",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "GNoME and A-Lab — computational materials discovery and autonomous synthesis are distinct results",
      description: "Merchant et al. (2023) report GNoME, a graph-network materials-exploration system that identified more than 2.2 million crystal structures stable relative to prior work, with 381,000 new entries on the updated convex hull. The paper notes that 736 structures had been independently experimentally verified, but these were not 736 materials subsequently synthesised by a robotic laboratory. A separate Nature study by Szymanski et al. reports the A-Lab autonomous synthesis platform, which realised 36 of 57 human-selected target compounds over 17 days and used robotics, literature-derived synthesis models, machine-learning interpretation, and active learning. The two studies jointly provide substantial evidence for AI-enabled generation and autonomous experimental execution in materials science, but they do not constitute one end-to-end system that autonomously chose a scientific problem and then discovered and experimentally validated 736 materials. The research objective and A-Lab target set remained human-defined.",
      vectors: ["supportive--bounded-materials-generation-and-autonomous-synthesis"],
      date: "2023",
      sources: [
        {
          citation: "Merchant, A. et al. (2023), Scaling deep learning for materials discovery, Nature 624, 80–85.",
          url: "https://www.nature.com/articles/s41586-023-06735-9",
          locator: "Abstract; 2.2 million stable structures; 381,000 new convex-hull entries; 736 independently experimentally verified structures",
        },
        {
          citation: "Szymanski, N. J. et al. (2023), An autonomous laboratory for the accelerated synthesis of inorganic materials, Nature 624, 86–91.",
          url: "https://www.nature.com/articles/s41586-023-06734-w",
          locator: "Abstract; 36 of 57 targets realised; autonomous synthesis workflow; target-selection limitations",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "The AI Scientist — automated research loop with automated evaluation",
      description: "Lu et al. (2024) present The AI Scientist, a framework that generates research ideas, writes and executes code, runs experiments, visualises results, writes a paper, and then subjects that paper to a simulated review process. The authors apply it to three machine-learning subfields and report that some generated papers exceed a top-conference acceptance threshold as judged by their own validated automated reviewer. This is evidence that a substantial research loop can be automated inside a narrow, human-defined domain. It is not evidence that the papers were accepted by or passed review at an actual machine-learning conference, and the source does not independently establish the correctness or genuine novelty of the generated scientific claims. The instance therefore supports autonomy of process more strongly than correctness or novelty.",
      vectors: ["partial--automated-research-loop-independent-validation-limited"],
      date: "2024",
      sources: [
        {
          citation: "Lu, C. et al. (2024), The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery, arXiv:2408.06292.",
          url: "https://arxiv.org/abs/2408.06292",
          locator: "Abstract; automated idea-to-paper workflow; simulated review; automated-reviewer acceptance threshold",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "FunSearch — novel cap-set constructions and improved bin-packing heuristics",
      description: "Romera-Paredes et al. (2023) introduce FunSearch, which pairs a pretrained large language model with an evolutionary search procedure and a human-specified evaluator. Applied to the cap-set problem, FunSearch produced previously unknown constructions that improved the best-known results, including the largest improvement in 20 years to the asymptotic lower bound reported by the authors; it also discovered improved heuristics for online bin packing. This is meaningful evidence that an AI-centred search process can produce novel, verifiable mathematical or algorithmic content inside a human-framed problem. The system does not autonomously choose the problem: researchers supply the evaluator, program skeleton and problem specification, and domain experts analyse and interpret the resulting programs. The primary paper supports novel constructions and verifiable results, but not the stronger legacy description of an autonomous absolute proof independently certified by the mathematics community.",
      vectors: ["supportive--novel-verifiable-results-with-human-framed-search"],
      date: "2023",
      sources: [
        {
          citation: "Romera-Paredes, B. et al. (2023), Mathematical discoveries from program search with large language models, Nature 625, 468–475.",
          url: "https://www.nature.com/articles/s41586-023-06924-6",
          locator: "Abstract; cap-set constructions; bin-packing heuristics; FunSearch specification and evaluator",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Legacy institutional-restructuring attribution — provenance unresolved",
      description: "The legacy instance bundled the Broad Institute, EMBL, pharmaceutical companies, Nature and Science editorials, Nobel-laureate commentary, and internal programmes at OpenAI, Anthropic, and Google DeepMind into a single claim that major institutions were reorganising scientific workflows in anticipation of autonomous AI discovery. LPR-001-D07 could not confidently reconstruct a source chain supporting that exact historical bundle or its stronger institutional-restructuring interpretation. The bundled claim is therefore withdrawn from the current evidential basis rather than retrofitted to substitute sources. IN-005 remains visible as explicit legacy provenance debt and contributes no substantive evidence for the record's current assessment or for the anticipatory-institutional-evidence taxonomy pending a separately governed review.",
      vectors: ["partial--legacy-provenance-unresolved"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Structured Concept Evolution — LLM-driven discovery of qLDPC code families",
      description: "A Structured Concept Evolution (SCE) framework pairing a large language model with an algebraic mutation grammar discovers competitive qLDPC code families, including non-abelian group constructions beyond standard bivariate-bicycle codes, using only lightweight models (arXiv:2606.24808, Max Planck Institute, primary preprint, submitted 23 June 2026). The result demonstrates constrained autonomous generation within a human-framed, human-prior-encoded search space: the problem (find high-performance qLDPC code families) is human-set and the mutation grammar itself encodes algebraic prior knowledge, so the system is not discovering code theory from scratch. It supplies no evidence on autonomous problem-identification, which remains the record's decisive unresolved boundary (BN-001, OQ-001, AT-001); competitive performance has not yet been independently established as superior — whether the discovered families outperform state-of-the-art codes under circuit-level (as opposed to code-capacity) noise is unestablished. In relation to the whole claim this is a third constrained-domain example of the same autonomous-generation pattern as IN-002 (materials) and IN-004 (mathematics), on the already-evidenced novelty/correctness side, and weaker than both on correctness. It is classified NEUTRAL because it neither advances nor contests the record's load-bearing boundary.",
      vectors: ["NEUTRAL"],
      date: "2026",
      sources: [
        {
          citation: "Liu, Z. & Marquardt, F. (2026), Large-Language-Model Discovery of Quantum LDPC Codes through Structured Concept Evolution, arXiv:2606.24808v1.",
          url: "https://arxiv.org/abs/2606.24808",
          locator: "Abstract; structured concept evolution framework; code-capacity evaluation",
        },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Distributed Denial of Science — indirect data poisoning of autonomous research agents",
      description: "Gyevnár, Kasirzadeh, and Shah (arXiv:2607.10712v1, submitted 12 July 2026) test indirect data poisoning against autonomous scientific workflows using three frontier AI agent systems across five socially salient topics and 450 ethically contained runs. Poisoned datasets were retrieved in 84.22% of runs; 49.56% ended with a poisoned conclusion without detection or caveat, while poisoning was detected in 6.0%. In the mitigation evaluation, a structured five-check provenance audit reduced full attack success to 0.0% in the tested setting. This is a bounded contesting instance on the correctness component: it establishes that correctness in autonomous scientific workflows can be conditional on evidential provenance under adversarial retrieval. The canonical claim is existential, so this result does not negate the correct discoveries demonstrated by IN-002 and IN-004. It supplies no evidence on autonomous problem-identification and leaves BN-001, OQ-001, and AT-001 unchanged. The experiment used ethically contained private repositories made operationally indistinguishable from public repositories, five selected topics, and three specified agent configurations; generalisation beyond this controlled setting is unestablished.",
      vectors: ["CONTESTING"],
      date: "2026",
      sources: [
        {
          citation: "Gyevnár, B., Kasirzadeh, A. & Shah, N. B. (2026), Distributed Denial of Science: How Indirect Data Poisoning of AI Systems Can Industrialize Scientific Fraud, arXiv:2607.10712v1.",
          url: "https://arxiv.org/abs/2607.10712",
          locator: "Abstract; five topics, three frontier systems, 450 runs; poisoning and mitigation results",
        },
      ],
    },
    {
      id: "IN-008",
      qualifiedEvent: "Open-ended AI research case studies — engineering competence without successful scientific judgment",
      description: "A shadow evaluation of frontier research agents finds that substantial autonomous research engineering did not produce successful open-ended AI research in the tested cases (arXiv:2607.27191v1, submitted 29 July 2026). Agents were given the central question from each of two unpublished NeurIPS submissions, but not the authors' answer, and received multi-day access to compute, web search, coding tools, subagents, and review tools. The two principal outputs received overall expert scores of 2/6 and 1/6 and were judged unambiguous rejections. The agents completed literature review, coding, environment debugging, and extensive experimentation, but failed at evidential prioritisation, project-level backtracking, creative response to criticism, and recognition of publishable progress; a robustness run using a different model and scaffold reproduced most of these judgment failures. This is bounded CONTESTING evidence on the autonomy component. It shows that autonomous execution of research engineering can coexist with failure of scientific judgment even after humans specify the research problem, so the record's unresolved autonomy boundary is not exhausted by problem identification versus problem solving. It does not negate verified bounded discoveries in IN-002 and IN-004, test autonomous problem identification, or establish general failure across fields. Generalisation is limited by two research questions, five total runs, non-blind expert reviewers, scaffold defects, and the source's preprint status.",
      vectors: ["CONTESTING"],
      date: "2026",
      sources: [
        {
          citation: "Kirgis, P. et al. (2026), Can AI agents conduct open-ended AI research? Early evidence from two case studies, arXiv:2607.27191v1.",
          url: "https://arxiv.org/abs/2607.27191",
          locator: "Abstract; shadow-evaluation design; two unpublished NeurIPS 2026 research questions; robustness check",
        },
      ],
    },
    {
      id: "IN-009",
      qualifiedEvent: "The Station — autonomous mathematical discovery in an open-world multi-agent environment",
      description: "Chung, Du, and Wesley (arXiv:2608.23691v1, submitted 24 August 2026) report the Station, an open-world multi-agent environment in which agents from different model families choose research directions, conduct experiments, collaborate, and build a shared scientific literature without a central coordinator or scripted pipeline. Across twelve construction problems from the AlphaEvolve catalogue and two additional case studies, the authors report results novel relative to prior literature on five problems, including a new infinite family of finite-field Kakeya sets, exact 604-point kissing configurations in dimension 11, new records for two optimisation problems, and an improved lower bound for Erdős's minimum-overlap problem; they also report novel infinite families for Book Ramsey numbers. Raw agent dialogues, proofs, source code, and verification artifacts were released. This is SUPPORTIVE instance evidence for autonomous research direction and scientific judgment within a human-defined shared goal, and it counterbalances IN-008's bounded failure cases without negating them. The source remains a primary preprint authored by the system's creators: independent expert validation of the claimed novelty, proofs, and reproducibility is incomplete. The system did not identify the overarching research domain or shared goal, so it does not satisfy the autonomous problem-identification boundary in BN-001, OQ-001, and AT-001. Instance only: AS-002, FRAGMENTING, VS-03, mechanisms, and open questions remain unchanged.",
      vectors: ["SUPPORTIVE"],
      date: "2026",
      sources: [
        {
          citation: "Chung, S., Du, W. & Wesley, W. J. (2026), Autonomous Mathematical Discovery in an Open-World Multi-Agent Environment, arXiv:2608.23691v1.",
          url: "https://arxiv.org/abs/2608.23691",
          locator: "Abstract; open-world multi-agent environment; reported novel results; released dialogues, proofs and verification code",
        },
      ],
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
    },
    {
      id: "AS-003",
      date: "2026-09-05",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "LPR-001-D07 materially narrows the historical basis of AS-001 and the GNoME/FunSearch shorthand inherited by AS-002 without rewriting those assessments. Corrected IN-002 separates GNoME's large-scale computational materials discovery from the distinct A-Lab autonomous-synthesis experiment; together they support bounded generation and experimental autonomy, but not a single end-to-end system that autonomously selected a problem and experimentally confirmed 736 discoveries. Corrected IN-004 still supplies strong evidence of novel, verifiable mathematical and algorithmic results from an AI-centred search process, but within a human-specified evaluator, program skeleton and problem. IN-001 is now correctly bounded to blind high-accuracy prediction, and IN-003 demonstrates an automated research loop evaluated by an automated reviewer rather than external conference acceptance. IN-005 is withdrawn from the current evidential basis because its institutional-restructuring provenance could not be reconstructed. The later evidence remains mixed: IN-007 and IN-008 expose provenance and scientific-judgment failure modes, while IN-009 provides supportive preprint evidence for autonomous research direction within a human-defined shared goal. FRAGMENTING / VS-03 is retained. The current record supports meaningful autonomous scientific work in bounded human-framed settings, but it does not yet converge on autonomous problem identification, robust scientific judgment, and independently verified novelty/correctness as a single general capability.",
      assessorNote: "Governed assessment correction following LPR-001-D07. AS-001 and AS-002 remain visible append-only as historical judgements. IN-001 through IN-005 were corrected or bounded; no new evidence instance was admitted through LPR-001 and no verification-stage change was made.",
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Autonomously conduct\" lacks an agreed boundary. The claim requires autonomous research conduct, but the boundary between autonomous AI research and AI-assisted human research is contested. Current leading examples demonstrate substantial autonomous problem-solving, generation, experimentation, or research direction inside human-framed objectives. GNoME/A-Lab and FunSearch no longer support the stronger shorthand that the full autonomy component is satisfied; IN-009 extends autonomy toward research-direction choice while retaining a human-defined shared goal. Whether the claim requires only autonomous problem-solving within a supplied domain or also autonomous identification of the scientific problem remains a critical definitional gap. IN-008 further shows that scientific judgment after a problem is supplied is a separable autonomy constraint.",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description: "Novelty assessment is itself a research task. The claim requires that discoveries be novel, but establishing novelty requires surveying the accessible scientific literature — which is itself an incomplete and poorly indexed object. For fast-moving fields, a result that appears novel may have been anticipated in preprints, conference talks, or unpublished work. For large, old literatures, a result that appears novel may rediscover forgotten work. Novelty is not directly measurable from the discovery alone; it requires a comparison to the state of knowledge, which is itself uncertain. This is a measurement validity bottleneck of the same type as FR-BT-0002 BN-001: the measurement tool (literature survey) may not reliably track the thing it purports to measure (genuine novelty).",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Autonomous problem identification with verified novel correct results. The resolution path is a demonstration where an AI system identifies a previously unrecognised scientific problem, generates hypotheses about it, designs or conducts experiments, and produces results that are independently verified as correct and novel — without a human specifying the problem space. GNoME/A-Lab and FunSearch demonstrate important but bounded pieces of this path inside human-framed objectives; IN-009 adds evidence of research-direction choice within a human-defined shared goal. No current instance establishes the full attractor. The remaining gap includes both autonomous problem identification and sufficiently robust scientific judgment and validation once research is underway.",
    }
  ],

  lineage: {
    items: [
    { year: "1955–90", text: "Early AI discovery systems. DENDRAL (1965) and AM (1976) demonstrate early AI systems generating hypotheses in chemistry and mathematics. The claim's aspirational form is established; the capability is far from practical demonstration." },
    { year: "2020–22", text: "AlphaFold2 establishes blind, near-experimental-accuracy protein-structure prediction as a major AI-for-science capability. The source supports autonomous execution of a human-defined prediction task, not autonomous selection of scientific questions or a full discovery loop." },
    { year: "2023", text: "GNoME expands computational materials exploration while the distinct A-Lab platform demonstrates autonomous synthesis of human-selected targets; FunSearch produces novel cap-set constructions and improved bin-packing heuristics inside human-specified problem definitions. Novel generation and experimental or mathematical verification strengthen, but the evidence remains modular rather than one end-to-end autonomous scientist." },
    { year: "2024", text: "The AI Scientist demonstrates an automated idea-to-paper research loop in machine learning, with evaluation by an automated reviewer rather than independent conference acceptance. The legacy institutional-restructuring bundle cannot be confidently sourced and is withdrawn from the current evidential basis. The claim remains FRAGMENTING as autonomy, scientific judgment, novelty and correctness diverge in evidential strength." },
    { year: "2026", text: "New agent evidence deepens both sides of the record: data-poisoning and open-ended-research evaluations expose correctness and scientific-judgment failure modes, while the Station reports autonomous research-direction choice and novel mathematical results within a human-defined shared goal. The evidence moves beyond execution alone without yet demonstrating autonomous problem identification plus independently verified correctness and novelty as a general capability." }
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
      question: "The legacy IN-005 institutional-restructuring bundle could not be source-verified under LPR-001-D07 and is no longer part of the current evidential basis. The earlier question of whether institutional reorganisation constitutes a distinct anticipatory-act type therefore remains ungrounded for this record and should not be elevated from FR-AI-0007 unless a separately governed review establishes a source-faithful institutional evidence set.",
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
    { id: "M-017", date: "2026-09-05", field: "assessment_correction", from: "AS-002", to: "AS-003", note: "AS-003 appended after the approved LPR-001-D07 bounded correction. Historical AS-001/AS-002 preserved. Current judgement retains FRAGMENTING / VS-03 on the narrower source-faithful basis established by corrected IN-001 through IN-005 and verified IN-006 through IN-009. BN-001, AT-001, lineage, and OQ-002 were aligned to remove dependencies on superseded legacy interpretations." },
    { id: "M-016", date: "2026-09-05", field: "provenance_correction", from: "LPR-001-D07 discrepancies_found", to: "LEGACY-INSTANCES-CORRECTED", note: "Governed bounded correction applied to IN-001 through IN-005. AlphaFold2 bounded to CASP14 prediction evidence; GNoME separated from the distinct A-Lab synthesis study; AI Scientist conference-review overstatement removed; FunSearch bounded to human-framed program search and verifiable reported results; unsupported IN-005 institutional-restructuring bundle withdrawn and retained as explicit provenance debt. Structured primary sources added where attribution is secure. No new evidence admitted." },
    { id: "M-015", date: "2026-09-05", field: "provenance_review", from: "—", to: "LPR-001-D07", note: "Legacy provenance review completed. All nine evidence instances examined. Structured primary-source provenance added to source-faithful IN-006 through IN-009. Material source-fidelity discrepancies identified in IN-001 through IN-004; IN-005's bundled institutional attribution could not be confidently reconstructed as written. No factual or interpretive wording silently repaired, no new scientific evidence admitted, and no assessment, pressure-state, or verification-stage changes made. Review marked pending governed correction." },
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
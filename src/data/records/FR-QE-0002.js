/**
 * FR-QE-0002 — D-Wave Quantum Annealing — Practical Computational Advantage
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0002 = {
  id: "FR-QE-0002",
  programme: "PROG-QE",
  lastProvenanceReview: "2026-10-03",
  provenanceReviewId: "LPR-001-D39",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Quantum annealing systems have demonstrated practical computational advantage over classical methods on commercially or scientifically relevant optimisation tasks.",
    shortLabel: "D-Wave Quantum Annealing — Practical Computational Advantage",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "D-Wave One / Two — Initial commercial deployments",
      description: "D-Wave's early commercial deployment included the 2011 Lockheed Martin system. In 2013, NASA, USRA and Google announced a collaboration using a D-Wave Two installed at NASA Ames; contemporaneous NASA reporting states that USRA leased the computer from D-Wave, rather than describing a collective Google/NASA/USRA purchase. Rønnow et al. (2014) subsequently benchmarked a D-Wave Two on random spin-glass instances and found no evidence of quantum speedup across the full data set, with instance-level subset results inconclusive.",
      vectors: ["contesting"],
      date: "2011–2013",
      sources: [
        {
          citation: "NASA Advanced Supercomputing Division. Quantum Computing Collaboration Announced (17 May 2013).",
          url: "https://www.nas.nasa.gov/pubs/news/2013/05-17-13.html",
        },
        {
          citation: "Rønnow, T. F. et al. Defining and detecting quantum speedup. Science 345, 420–424 (2014).",
          url: "https://pubmed.ncbi.nlm.nih.gov/25061205/",
          doi: "10.1126/science.1252319",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Google / D-Wave 2X finite-range tunnelling benchmark",
      description: "Denchev et al. (2016, Physical Review X) report that the D-Wave 2X achieved runtime advantages of up to about 100 million times over single-core simulated annealing and an optimized single-core quantum Monte Carlo implementation on a crafted weak-strong-cluster benchmark, using instances up to 945 variables. The authors also note that heuristic classical algorithms can solve most Chimera-structured instances on timescales comparable to the D-Wave 2X, bounding the demonstrated advantage to the specified benchmark and comparator classes.",
      vectors: ["partial--benchmark-contested"],
      date: "2015–2016",
      sources: [
        {
          citation: "Denchev, V. S. et al. What is the Computational Value of Finite-Range Tunneling? Physical Review X 6, 031015 (2016).",
          url: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.6.031015",
          doi: "10.1103/PhysRevX.6.031015",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "D-Wave Advantage launch — 5000+ qubit system",
      description: "D-Wave releases the Advantage system with over 5,000 qubits and a new Pegasus topology. D-Wave publishes case studies concerning applications including routing, scheduling and financial optimisation. Yarkoni et al. (2022, Reports on Progress in Physics) is a review of quantum annealing for industry applications that surveys application methods, opportunities and limitations; it does not establish the categorical cross-instance performance conclusion previously attributed to it in this record.",
      vectors: ["partial--hybrid-dependency"],
      date: "2019–2020",
      sources: [
        {
          citation: "Yarkoni, S., Raponi, E., Bäck, T. & Schmitt, S. Quantum annealing for industry applications: introduction and review. Reports on Progress in Physics 85 (2022).",
          url: "https://pubmed.ncbi.nlm.nih.gov/36001953/",
          doi: "10.1088/1361-6633/ac8c54",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "King et al. — Coherent quantum annealing in a programmable 2,000-qubit Ising chain",
      description: "King et al. (2022, Nature Physics) demonstrate coherent evolution through a quantum phase transition in a one-dimensional transverse-field Ising chain using up to 2,000 superconducting flux qubits. The results agree quantitatively with analytical solutions of the closed-system quantum model and establish coherent large-scale annealing dynamics. The paper presents this capability as a path toward quantum optimisation, machine learning and simulation tasks; it does not itself establish practical computational advantage on optimisation tasks.",
      vectors: ["supportive--scientific-relevance"],
      date: "2022",
      sources: [
        {
          citation: "King, A. D. et al. Coherent quantum annealing in a programmable 2,000 qubit Ising chain. Nature Physics 18, 1324–1328 (2022).",
          url: "https://www.nature.com/articles/s41567-022-01741-6",
          doi: "10.1038/s41567-022-01741-6",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "King et al. — Computational advantage in quantum simulation of magnetic materials",
      description: "King et al. (2023, Nature) realize quantum-critical dynamics in three-dimensional spin glasses on thousands of qubits. The authors report critical exponents distinguishing quantum annealing from the slower stochastic dynamics of analogous Monte Carlo algorithms, supporting large-scale quantum simulation and a scaling advantage in energy optimization for the studied systems. The result is therefore bounded to the paper's spin-glass setting and analogous Monte Carlo comparators rather than establishing unrestricted advantage over classical methods.",
      vectors: ["partial--domain-scope-disputed"],
      date: "2023",
      sources: [
        {
          citation: "King, A. D. et al. Quantum critical dynamics in a 5,000-qubit programmable spin glass. Nature 617, 61–66 (2023).",
          url: "https://www.nature.com/articles/s41586-023-05867-2",
          doi: "10.1038/s41586-023-05867-2",
        },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Quinton et al. — D-Wave hybrid optimisation benchmarked against leading classical solvers",
      description: "Quinton et al. (2025) benchmarked D-Wave's LeapHybridCQMSolver against CPLEX, Gurobi and IPOPT across several optimisation classes. The hybrid solver was competitive with leading classical approaches only for a limited range of problems: it showed a computational advantage for the studied binary quadratic programming cases, while no computational advantage was found for the tested binary linear programming cases and it did not surpass Gurobi on the real-world mixed-integer unit-commitment case. The result therefore provides independently published, task-specific evidence of practical competitiveness and bounded advantage while directly constraining any broader optimisation-advantage interpretation.",
      vectors: ["partial--limited-optimisation-advantage"],
      date: "2025",
      sources: [
        {
          citation: "Quinton, F. A., Myhr, P. A. S., Barani, M., Crespo del Granado, P. & Zhang, H. Quantum annealing applications, challenges and limitations for optimisation problems compared to classical solvers. Scientific Reports 15, 12733 (2025).",
          url: "https://www.nature.com/articles/s41598-025-96220-2",
          doi: "10.1038/s41598-025-96220-2",
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
      summary: "The evidence trail for this claim is fragmented across distinct problem domains and claim interpretations. On commercially motivated optimisation tasks (scheduling, routing, combinatorial problems of practical scale), no published evidence has established durable advantage over state-of-the-art classical methods. The contested Denchev et al. (2016) result represents the strongest performance claim in this domain; it was substantially undermined by subsequent classical algorithm improvements and the benchmark's structural dependence on hardware-favourable problem instances (RM-002). In the separate domain of scientific simulation, the evidence is stronger: King et al. (2022, 2023) report computational advantage in simulating quantum magnetism, though critics dispute the comparison class used. The claim spans two domains accruing evidence asymmetrically and has not been decomposed into separate records (BN-001), and no agreed classical comparison class exists (BN-002). The pressure state is FRAGMENTING: the claim is not converging toward a single assessment but splitting along domain lines that may require separate evaluation.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-07-26",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The Pressure State is unchanged. Its governing rationale is not. The prior domain-split explanation (AS-001) is retired following the ratified Identity and Continuity Review, which found IDENTITY PRESERVED AS A COMPOUND CLAIM: a single recoverable kernel — quantum annealing, practical computational advantage, a classical comparator, optimisation-task class, commercial-or-scientific relevance — is engaged by evidence from both relevance routes. IN-004 is adjacent simulation evidence and does not bear on this claim. Among the remaining instances, IN-001 through IN-003 read negative-to-contested on the commercial route across eight years, and IN-005 provides a single, contemporaneously-grounded positive instance whose own comparator (quantum Monte Carlo) is disputed (BN-002). FRAGMENTING is warranted not because the claim splits along commercial or scientific lines, but because this same kernel-corrected evidence supports incompatible trajectory interpretations under unresolved competing meanings of 'practical advantage' — whether that standard requires real-world deployability or a rigorous demonstration of speedup on a well-posed instance (OQ-6, proposed). This is interpretive, not referential, non-convergence: no identity fracture, no decomposition, no admission-scope defect.",
      assessorNote: "Reissued per ratified Terminal Identity and Continuity Finding and Pressure State Reassessment Decision, 2026-07-26. Continuity of state (FRAGMENTING unchanged); replacement of warrant only.",
    },
    {
      id: "AS-003",
      date: "2026-09-12",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "Normal Record Review of two 2025 candidates adds one claim-bearing instance and rejects one adjacent item from admission. Quinton et al. (IN-006) independently benchmark D-Wave's hybrid quantum-annealing workflow against CPLEX, Gurobi and IPOPT and find bounded advantage for the studied binary quadratic programming cases, but no general advantage across the tested optimisation classes and no superiority over Gurobi on the real-world unit-commitment case. King et al. (Science 2025) report a strong beyond-classical quantum-simulation result, but the experiment concerns dynamical quantum simulation rather than an optimisation task and therefore does not satisfy the settled optimisation-task element of this record's claim kernel. The new evidence strengthens the case that practical performance is problem-class dependent without resolving the evaluative standard in OQ-006. FRAGMENTING / VS-03 remains warranted.",
      assessorNote: "Record Review executed 2026-09-12. King et al. 2025 retained outside the evidence-instance set because scientific relevance alone does not satisfy the settled optimisation-task kernel; Quinton et al. 2025 admitted as IN-006 with structured provenance.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Classical solver improvement rate. Each time a D-Wave performance claim is published, the classical computing community has produced improved algorithms (simulated annealing variants, Hamze-de Freitas-Selby, tensor network methods) that match or exceed the demonstrated quantum performance on the same problem instances. The mechanism is structural: a fixed quantum hardware architecture competes against a classical algorithm space that can be continuously optimised in software.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Benchmark structure dependency. Demonstrated performance advantages have been concentrated on problem instances structurally matched to the D-Wave hardware topology. Performance degrades significantly when problems must be embedded into the hardware graph, as most real-world optimisation problems require non-trivial embedding that introduces overhead and degrades solution quality relative to native classical formulations.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Optimisation-task scope and adjacent simulation evidence. The claim kernel is settled on commercially or scientifically relevant optimisation tasks; it does not span quantum simulation as a separate claim domain. IN-004 and IN-005 provide adjacent simulation context, while the 2025 Science simulation result is excluded from claim-bearing evidence in AS-003. The remaining bottleneck is whether bounded optimisation results meet the applicable standard of practical advantage, not a prerequisite to decompose optimisation and simulation before assessment. OQ-006 retains the unresolved evaluative-standard question.",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description: "Comparison class specification. No agreed standard exists for which classical methods constitute a valid comparison. D-Wave comparisons have used single-core classical solvers, simulated annealing, and in some cases deliberately excluded state-of-the-art methods. Without a settled comparison class, advantage claims are not independently verifiable against a stable baseline.",
    }
  ],

  lineage: {
    items: [
    { year: "2007", text: "D-Wave founded. Company formed to commercialise quantum annealing for combinatorial optimisation. Original claim framing: quantum tunnelling enables faster traversal of complex energy landscapes than classical thermal annealing." },
    { year: "2011", text: "First commercial sale (Lockheed Martin). D-Wave One sold commercially. Claim migrates from laboratory demonstration to commercial utility framing." },
    { year: "2013", text: "NASA / Google / USRA collaboration. USRA leases a D-Wave Two system installed at NASA Ames. This expands the institutional setting for quantum-annealing research; it does not expand the settled optimisation-task claim kernel to a separate simulation domain." },
    { year: "2014", text: "Rønnow et al. benchmark challenge. The 2014 study finds no evidence of quantum speedup for the full studied data set; selected subsets remain inconclusive. This is a bounded benchmark challenge rather than a universal finding about every optimisation problem." },
    { year: "2016", text: "Denchev et al. (Physical Review X) report a large speedup for studied weak-strong-cluster problems on D-Wave 2X, up to 945 variables, against the specified classical comparators. The result is benchmark- and comparator-dependent and does not establish general practical optimisation advantage." },
    { year: "2020", text: "D-Wave Advantage release. The hardware and industry-application setting expands to over 5000 qubits and hybrid workflows. Yarkoni et al. review quantum-annealing industry applications; that review does not establish a categorical cross-instance conclusion of classical parity or superiority." },
    { year: "2022–23", text: "King et al. report quantum-simulation results: the 2022 Nature Physics study concerns coherent dynamics in a one-dimensional transverse-field Ising chain; the 2023 Nature study concerns three-dimensional spin-glass dynamics with bounded analogous Monte Carlo comparisons. These are adjacent simulation results, not partial substantiation of the settled practical-optimisation claim." },
    { year: "2025", text: "Independent optimisation benchmarking by Quinton et al. finds D-Wave's hybrid solver competitive with leading classical approaches only for a limited range of problems, including an advantage in the studied binary quadratic cases but not the tested real-world unit-commitment problem. A separate King et al. Science result demonstrates strong beyond-classical quantum simulation but is not admitted as claim-bearing evidence because it does not engage the settled optimisation-task kernel." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "With the optimisation-task kernel already settled, how should adjacent scientific-simulation results be represented without treating them as proof of practical optimisation advantage? Would a separate simulation record clarify that distinction? This is a record-organisation question, not a prerequisite to assess the existing claim.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "What would constitute an agreed comparison class for classical methods? Without this, no future evidence can close the claim.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "Can the King et al. (2023) simulation result be independently replicated by parties without D-Wave affiliation?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "As D-Wave's Advantage2 and future systems increase qubit count and connectivity, does the benchmark structure dependency (RM-002) diminish, or does the classical algorithm improvement rate (RM-001) continue to track the hardware improvements?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-005",
      question: "Does the Fragmenting pressure state represent a temporary epistemic condition resolvable by further evidence, or a structural property of a claim whose scope is too broad to admit a unified assessment?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-006",
      question: "Does \"practical advantage\" require real-world deployability, or is a rigorous demonstration of speedup on a well-posed instance sufficient regardless of scale? The commercial and scientific-relevant routes may be operating under different implicit standards for the same word. This question concerns the evaluative standard applied to an already-settled kernel element, not the kernel's composition — see Terminal Identity and Continuity Finding, §C–D.",
      raisedDate: "2026-07-26",
    }
  ],

  mutationLog: [
    {
      "id": "M-014",
      "date": "2026-10-08",
      "field": "reference_corrected",
      "from": "Explanatory wording inconsistent with corrected admitted evidence and current assessment",
      "to": "Bounded explanatory wording aligned with existing source limits and settled claim scope",
      "note": "Editorial Correction (GP-001), priority consistency repair: mechanisms.2.description, openQuestions.0.question, lineage.items.2.text, lineage.items.3.text, lineage.items.4.text, lineage.items.5.text, lineage.items.6.text corrected against existing admitted evidence and current assessment. No evidence admitted and no reassessment; claim, instances, assessments, status, question IDs and raised dates, and prior mutation entries preserved. Previous values and field-level basis: docs/reviews/MCP-PRIORITY-CONSISTENCY-REPAIR-2026-10-08.json."
    },
    { id: "M-013", date: "2026-10-03", field: "provenance_correction", from: "LPR-001-D39 discrepancies_found / pending", to: "LPR-001-D39 discrepancies_corrected / completed", note: "Operator-approved bounded correction of the five legacy source-representation discrepancies carried from D14 and reconfirmed by D39. IN-001 corrects the 2013 transaction to USRA leasing the D-Wave system within the NASA/Google/USRA collaboration and bounds the 2014 benchmark conclusion. IN-002 replaces the erroneous 108-qubit framing with the D-Wave 2X weak-strong-cluster benchmark up to 945 variables and preserves the source's comparator limits. IN-003 removes the categorical performance conclusion not established by Yarkoni et al. and represents that work as an industry-applications review. IN-004 corrects Nature to Nature Physics, the model to a one-dimensional transverse-field Ising chain, and removes the unsupported classical-inaccessibility claim. IN-005 bounds the 2023 result to 3D spin-glass dynamics and analogous Monte Carlo comparators and removes the unsourced critics assertion. Structured sources added where attribution is established. IN-006, assessments, Pressure State and Verification Stage unchanged." },
    { id: "M-012", date: "2026-10-03", field: "provenance_review", from: "LPR-001-D14", to: "LPR-001-D39", note: "Second-cycle Legacy Provenance Review completed. Six current instances examined. IN-006 verified. Five previously identified D14 representation discrepancies remain pending governed correction; no discrepant wording was changed and no provenance was attached where that would endorse the current representation. No instance was provenance-unverifiable. No new scientific evidence was admitted or flagged for Normal Record Review. Outcome remains discrepancies_found / pending; Pressure State and Verification Stage unchanged." },
    { id: "M-011", date: "2026-09-12", field: "record_review", from: "Two 2025 Record Review candidates", to: "Quinton et al. admitted as IN-006; King et al. not admitted", note: "Governed normal Record Review completed for the two candidates surfaced by LPR-001-D14. Quinton et al., Scientific Reports 2025 (DOI 10.1038/s41598-025-96220-2), is admitted as IN-006 because it directly benchmarks a D-Wave hybrid quantum-annealing workflow against CPLEX, Gurobi and IPOPT on optimisation tasks. Its result is mixed and bounded: advantage for the studied BQP cases, but no general advantage across tested classes and no superiority over Gurobi on the unit-commitment case. King et al., Science 2025 (DOI 10.1126/science.ado6285), is not admitted as an evidence instance: despite strong beyond-classical quantum-simulation results, it studies dynamical quantum simulation rather than an optimisation task and therefore fails the settled optimisation-task element of this record's identity-bearing kernel. AS-003 appended; FRAGMENTING / VS-03 reaffirmed; lineage extended. LPR-001-D14 legacy discrepancies remain pending and were not altered by this Record Review." },
    { id: "M-010", date: "2026-09-12", field: "provenance_review", from: "—", to: "LPR-001-D14", note: "Legacy provenance review completed. All five evidence instances examined and each contains at least one source-fidelity, attribution, chronology, or interpretive issue requiring governed correction before structured sources[] can be attached without endorsing legacy wording. IN-001 inaccurately frames the 2013 D-Wave Two transaction as a sale to Google/NASA/USRA collectively; contemporaneous reporting identifies USRA as purchaser with Google and NASA collaborators. IN-002's qualified event incorrectly says 108-qubit while Denchev et al. studied D-Wave 2X instances up to 945 variables, and the legacy wording strengthens the source-supported claim that specialist classical heuristics are comparable into a broader match-or-exceed assertion. IN-003 attributes a categorical cross-instance performance conclusion to Yarkoni et al. 2022 that the review does not state in that form. IN-004 misidentifies the journal as Nature rather than Nature Physics, describes the system as a frustrated Ising spin glass rather than a one-dimensional transverse-field Ising chain, and attributes an inaccessibility claim not made by the paper. IN-005 overgeneralises the 2023 Nature result from scaling advantage against analogous Monte Carlo dynamics into a broader all-classical computational-advantage formulation and carries an unsourced critic-comparison assertion. No historical wording, assessment, pressure state, or verification stage was silently changed. Two post-baseline items were flagged for normal Record Review only: King et al., Science 2025, Beyond-classical computation in quantum simulation (DOI 10.1126/science.ado6285), and Quinton et al., Scientific Reports 2025, benchmarking D-Wave hybrid optimisation against CPLEX, Gurobi and IPOPT (DOI 10.1038/s41598-025-96220-2)." },
    {"id":"M-009","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:RM-002","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, RM-002 from FR_QE_0002_DWave_frontier_record.html (Drive file 1s9-MAnWoWMwt2ReSLdPtGSW6QRtOVgvM). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-008", date: "2026-07-28", field: "reference_corrected", from: "IN-003: \"Yarkoni et al. 2022, EPJ Quantum Technology\"", to: "IN-003: \"Yarkoni et al. 2022, Reports on Progress in Physics\"", note: "GP-001 Editorial Correction. Incorrect publication metadata — IN-003 cited the wrong journal for Yarkoni et al. 2022; correct journal is Reports on Progress in Physics. Surfaced during FR-QE-0002 Identity and Continuity Review, Revision 3 (Baseline Sufficiency Assessment), confirmed as an admission-era error present verbatim in the recovered pre-deployment source. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-007", date: "2026-07-28", field: "description_corrected", from: "IN-002: \"...on specific quantum simulation instances.\"", to: "IN-002: \"...on specific combinatorial optimisation instances.\"", note: "GP-001 Editorial Correction. IN-002's description mischaracterised the Denchev et al. 2016 benchmark as simulation-task evidence; the contemporaneous source frames it as a \"quantum enhanced optimization heuristic\" tested on a crafted combinatorial problem. Corrected to restore the contemporaneous framing. This wording error was cosmetic to the record's own task-class kernel analysis (Terminal Identity and Continuity Finding, §B), which already classified IN-002 as engaging the optimisation-task kernel using the correct framing — this correction does not alter that finding. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-006", date: "2026-07-26", field: "open_question_added", from: "—", to: "OQ-006", note: "OQ-006 formally entered per Terminal Identity and Continuity Finding §C precision requirement (whether \"practical\" is part of the identity-bearing kernel or only an evaluative standard applied to it). Resolved: element of the settled kernel (Terminal Finding §A.2), with the standard for operationalising it left open — an evaluative-standard question, not an identity question. Does not reopen or alter the ratified Terminal Identity and Continuity Finding or Pressure State Reassessment." },
    { id: "M-005", date: "2026-07-26", field: "assessment_reissued", from: "AS-001 (domain-split warrant)", to: "AS-002 (kernel-level warrant, OQ-6)", note: "AS-002 appended following ratified Identity and Continuity Finding (IDENTITY PRESERVED AS A COMPOUND CLAIM) and Pressure State Reassessment (FRAGMENTING REMAINS WARRANTED — RE-GROUNDED). AS-001 preserved unchanged." },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "RM-001, RM-002 (Resistance); BN-001, BN-002 (Bottleneck) added." },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "ASSESSMENT-001 issued. Pressure state: FRAGMENTING." },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-001 through INST-005 added." },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-QE-0002 opened. Claim ratified. Programme: PROG-QE." }
  ],

  status: "open",
};
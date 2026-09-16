/**
 * FR-QE-0006 — Fault-Tolerant Quantum Utility — Practically Useful Algorithms Beyond Classical Simulation
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0006 = {
  id: "FR-QE-0006",
  programme: "PROG-QE",
  lastProvenanceReview: "2026-09-16",
  provenanceReviewId: "LPR-001-D18",
  provenanceOutcome: "pass_after_correction",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "A fault-tolerant quantum computer can execute a practically useful quantum algorithm beyond classical simulation.",
    shortLabel: "Fault-Tolerant Quantum Utility — Practically Useful Algorithms Beyond Classical Simulation",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Quantum algorithm portfolio — theoretical speedups established",
      description: "Foundational quantum algorithms establish that sufficiently capable quantum computers can offer asymptotic speedups for specified computational problems. Shor's 1994 algorithm gives polynomial-time quantum algorithms for integer factorisation and discrete logarithms; Grover's 1996 algorithm gives a quadratic query-complexity improvement for unstructured search; and Harrow, Hassidim and Lloyd's 2009 algorithm gives an exponential improvement in system size for preparing a state proportional to the solution of a sparse, well-conditioned linear system under restrictive input, conditioning and output assumptions. These are theoretical algorithmic results, not demonstrations of practical utility on fault-tolerant hardware, and their real-world advantage depends on end-to-end resource and data-access costs.",
      vectors: ["neutral--theoretical-utility-established"],
      date: "1994–2009",
      sources: [
        { citation: "Shor, P. W. Algorithms for quantum computation: discrete logarithms and factoring. Proceedings of the 35th Annual Symposium on Foundations of Computer Science (1994).", url: "https://ieeexplore.ieee.org/document/365700", doi: "10.1109/SFCS.1994.365700", locator: "Algorithm and complexity result" },
        { citation: "Grover, L. K. A fast quantum mechanical algorithm for database search. Proceedings of STOC '96 (1996).", url: "https://dl.acm.org/doi/10.1145/237814.237866", doi: "10.1145/237814.237866", locator: "Search algorithm and query complexity" },
        { citation: "Harrow, A. W., Hassidim, A. & Lloyd, S. Quantum algorithm for linear systems of equations. Physical Review Letters 103, 150502 (2009).", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.103.150502", doi: "10.1103/PhysRevLett.103.150502", locator: "Abstract and stated assumptions" }
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "IBM quantum-utility experiment — classical boundary subsequently contested",
      description: "Kim et al. report accurate expectation values from a noisy 127-qubit superconducting processor at circuit volumes beyond brute-force classical computation and in regimes where the particular classical approximations tested in the paper break down. The result was presented as evidence for pre-fault-tolerant quantum utility, not as a general proof that classical simulation could not match the calculation. Subsequent tensor-network work, including Tindall et al., reproduced the relevant regime classically with greater accuracy, demonstrating that the classical comparison boundary was not settled by the original experiment. This evidence is contextual to the present fault-tolerant claim: it shows why 'beyond classical simulation' must be tested against evolving best classical methods.",
      vectors: ["partial--nisq-utility-contested-not-fault-tolerant"],
      date: "2023–24",
      sources: [
        { citation: "Kim, Y. et al. Evidence for the utility of quantum computing before fault tolerance. Nature 618, 500–505 (2023).", url: "https://www.nature.com/articles/s41586-023-06096-3", doi: "10.1038/s41586-023-06096-3", locator: "Abstract and classical-comparison discussion" },
        { citation: "Tindall, J. et al. Efficient tensor network simulation of IBM's kicked Ising experiment. arXiv:2306.14887 (2023).", url: "https://arxiv.org/abs/2306.14887", locator: "Abstract and simulation comparison" }
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Logical error suppression — fault-tolerant substrate advances without useful-algorithm demonstration",
      description: "Error-correction results tracked in FR-QE-0003 and FR-QE-0004 demonstrate material progress in the substrate required for fault-tolerant computation. Google's Willow work demonstrates below-threshold surface-code memories with logical error suppression as code distance increases, while Microsoft and Quantinuum reported four logical qubits with substantial circuit-level error suppression on trapped-ion hardware in 2024. These results do not establish a generic logical error rate below 10^-4 per gate, do not justify a general hundreds-to-thousands-of-gates executable-depth threshold, and do not demonstrate a practically useful fault-tolerant algorithm beyond classical simulation. They support the engineering path while leaving this record's application threshold unsatisfied.",
      vectors: ["supportive--fault-tolerant-substrate-advancing"],
      date: "2024–25",
      sources: [
        { citation: "Google Quantum AI and Collaborators. Quantum error correction below the surface code threshold. Nature 638, 920–926 (2025).", url: "https://www.nature.com/articles/s41586-024-08449-y", doi: "10.1038/s41586-024-08449-y", locator: "Published online 9 December 2024; increasing-distance surface-code result" },
        { citation: "Quantinuum and Microsoft. Breakthrough demonstration of reliable logical qubits. 3 April 2024.", url: "https://www.quantinuum.com/press-releases/quantinuum-and-microsoft-announce-new-era-in-quantum-computing-with-breakthrough-demonstration-of-reliable-qubits", locator: "Company announcement; four logical qubits and circuit-level error suppression" }
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "FeMoco resource estimate — application-scale fault tolerance remains demanding",
      description: "Lee et al. provide a concrete fault-tolerant resource estimate for quantum simulation of the FeMoco active space using tensor hypercontraction. Their 2020 preprint, published in 2021, estimates 2,142 logical qubits and approximately 5.3×10^9 Toffoli gates for a representative calculation; under a specified surface-code architecture and physical-error assumptions, the analysis gives a representative implementation using roughly four million physical qubits and a runtime of days. The result is an architecture- and algorithm-dependent resource estimate, not a generic 1,000–4,000-logical-qubit threshold, and 10^-3 is a physical-error assumption rather than a claimed logical-gate error requirement. It nevertheless quantifies the large gap between small-scale logical demonstrations and a prominent candidate application.",
      vectors: ["partial--application-resource-gap-quantified"],
      date: "2020–21",
      sources: [{ citation: "Lee, J. et al. Even more efficient quantum computations of chemistry through tensor hypercontraction. PRX Quantum 2, 030305 (2021).", url: "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.030305", doi: "10.1103/PRXQuantum.2.030305", locator: "FeMoco resource estimates and fault-tolerant implementation analysis" }],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Classical simulation improvement — comparison boundary moves",
      description: "The classical comparison boundary relevant to quantum utility can move materially after a quantum result is published. The 2023 IBM kicked-Ising experiment provides a directly documented example: the original work identified a regime beyond brute-force computation and beyond the classical approximations it tested, while subsequent tensor-network work reproduced the relevant calculations classically with improved accuracy. This does not establish that every proposed chemistry or materials target will become classically tractable, nor does it support the legacy attribution to an unspecified 'Chan et al.' result. It establishes the narrower resistance mechanism needed by this record: any future useful-quantum claim must be evaluated against the best classical method available at the time of comparison.",
      vectors: ["contesting--classical-comparison-boundary-moving"],
      date: "2023–24",
      sources: [
        { citation: "Kim, Y. et al. Evidence for the utility of quantum computing before fault tolerance. Nature 618, 500–505 (2023).", url: "https://www.nature.com/articles/s41586-023-06096-3", doi: "10.1038/s41586-023-06096-3", locator: "Original quantum experiment and tested classical approximations" },
        { citation: "Tindall, J. et al. Efficient tensor network simulation of IBM's kicked Ising experiment. arXiv:2306.14887 (2023).", url: "https://arxiv.org/abs/2306.14887", locator: "Classical tensor-network simulation result" }
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Composed logical Clifford operations via lattice surgery on a superconducting surface-code processor",
      description: "A 107-qubit superconducting surface-code processor demonstrates composed logical Clifford operations — lattice-surgery merge/split, patch expansion and shrinkage, and logical CNOT, Hadamard, and phase gates — with multi-round syndrome extraction and neural-network decoding, without post-selection (arXiv:2607.01473, large institutional collaboration, primary preprint, submitted 1 July 2026). This is a meaningful active-computation building block: it moves the fault-tolerant substrate from protected logical memory to logical gate operations actually demonstrated. It does not demonstrate a practically useful quantum algorithm beyond classical simulation: the demonstrated set is Clifford-only, the codes are distance-three, and the work supplies no target problem. It is classified NEUTRAL because it advances the substrate without bearing for or against the useful-algorithm claim itself. No independent replication yet; peer review pending.",
      vectors: ["NEUTRAL"],
      date: "2026",
      sources: [{ citation: "Lin, W. et al. Surface code logical operations on a superconducting quantum processor. arXiv:2607.01473 (2026).", url: "https://arxiv.org/abs/2607.01473", doi: "10.48550/arXiv.2607.01473", locator: "Abstract; submitted 1 July 2026" }],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    { id: "AS-001", date: "2024-01-15", pressureState: "escalating", verificationStage: "VS-02", summary: "The claim has not been satisfied. No fault-tolerant quantum computer has executed a practically useful quantum algorithm beyond classical simulation at the scale required for genuine practical advantage. The substrate progress (INST-003) establishes that fault-tolerant logical qubits capable of executing simple circuits now exist; the resource estimation (INST-004) establishes that practically useful chemistry simulation requires approximately two orders of magnitude more logical qubits than are currently available. The gap is smaller and more tractable than the equivalent gap for RSA factorisation (FR-QE-0005), but still represents years of further engineering. Classical simulation methods are simultaneously improving (INST-005), narrowing the space of problems that would unambiguously qualify as beyond classical reach by the time fault-tolerant hardware reaches the required scale. The pressure state is ESCALATING: the substrate is advancing on a credible path, but no agreed target problem yet exists (BN-001) on which the claim could be tested.", assessorNote: null },
    { id: "AS-002", date: "2026-08-17", pressureState: "escalating", verificationStage: "VS-02", summary: "The claim remains unsatisfied and ESCALATING. IN-006 advances the fault-tolerant substrate beyond protected logical memory by demonstrating composed logical Clifford operations through lattice surgery on a superconducting surface-code processor. That is a real engineering advance, but it does not cross this record's load-bearing boundary: the demonstration is Clifford-only, uses distance-three codes, supplies no practically useful target problem, and does not establish execution beyond the best classical simulation. The resource-scale gap and the moving classical comparison identified in AS-001 therefore remain decisive. IN-006 strengthens the credibility of the path toward useful fault-tolerant computation without constituting evidence that useful quantum advantage has occurred. Pressure State remains ESCALATING and Verification Stage remains VS-02; BN-001 and the open questions remain live.", assessorNote: "Issued during OHR-2026-09 catch-up review to close the unassessed-evidence gap created by IN-006. This assessment updates the evidential correspondence without modifying AS-001 or treating substrate progress as claim satisfaction." },
    { id: "AS-003", date: "2026-09-16", pressureState: "escalating", verificationStage: "VS-02", summary: "LPR-001-D18 corrected the provenance and representation of IN-001 through IN-005 without altering the underlying claim. The algorithmic portfolio establishes theoretical speedups under stated assumptions; the IBM utility episode demonstrates a moving classical-comparison boundary rather than settled classical intractability; small-scale QEC results demonstrate substrate progress without a generic 10^-4 logical-gate threshold; and the FeMoco evidence is a specific architecture-dependent resource estimate rather than a universal 1,000–4,000-logical-qubit requirement. IN-006 remains a verified Clifford-only substrate advance. The corrected evidence continues to support ESCALATING / VS-02: the engineering path is credible and advancing, but no fault-tolerant system has executed a practically useful algorithm beyond the best classical simulation.", assessorNote: "Corrective assessment issued after LPR-001-D18. It supersedes provenance-dependent historical characterisations in AS-001/AS-002 without rewriting their append-only text. The QUOPS paper surfaced during LPR-001-D18 remains outside this correction pending Normal Record Review." }
  ],

  mechanisms: [
    { id: "RM-001", type: "RESISTANCE MECHANISM", description: "Classical comparison methods improve alongside quantum hardware. The IBM kicked-Ising episode provides a directly sourced example: a regime initially beyond the classical approximations tested in the quantum paper was subsequently reproduced by stronger tensor-network methods. This does not imply every candidate application will follow the same path; it means a claim of utility must be tested against the best classical method available for the specific problem at the time." },
    { id: "BN-001", type: "BOTTLENECK", description: "No agreed quantum-advantage target problem and no demonstrated end-to-end fault-tolerant application at useful scale. Candidate chemistry problems such as FeMoco have concrete but architecture-dependent resource estimates, while the classical comparison can change. Claim satisfaction therefore requires a specific useful problem, a fault-tolerant implementation at the required scale and depth, and a contemporaneous best-classical comparator." },
    { id: "AT-001", type: "ATTRACTOR", description: "First end-to-end fault-tolerant computation on a practically useful problem that remains beyond the best classical method under a transparent contemporaneous comparison. FeMoco-class chemistry is one candidate, but no fixed logical-qubit count is itself sufficient: resource requirements are algorithm- and architecture-dependent. The decisive event is useful computation plus durable classical separation, not attainment of a legacy 1,000–4,000-logical-qubit threshold." }
  ],

  lineage: {
    items: [
      { year: "1994–2009", text: "Shor, Grover and HHL establish important theoretical quantum speedups under problem-specific assumptions; practical utility remains contingent on implementation and end-to-end resource costs." },
      { year: "2020–21", text: "Lee et al. quantify a representative FeMoco fault-tolerant workload at 2,142 logical qubits and billions of Toffoli gates, illustrating the application-scale resource gap without defining a universal threshold." },
      { year: "2023–24", text: "IBM's pre-fault-tolerant utility experiment is followed by stronger classical tensor-network simulation, demonstrating that the beyond-classical comparison boundary can move." },
      { year: "2024–25", text: "Small-scale logical error suppression strengthens the fault-tolerant substrate, but does not demonstrate a useful algorithm or a generic logical-gate error/depth threshold." },
      { year: "2026", text: "Composed logical Clifford operations via lattice surgery extend the demonstrated substrate to active logical computation, while the useful-algorithm threshold remains unsatisfied." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    { id: "OQ-001", question: "Which specific molecular or physical system will provide the first unambiguous fault-tolerant quantum advantage? The absence of an agreed target problem (BN-001) means the claim may be satisfied on a problem not currently anticipated. Whether the first advantage demonstration will be accepted as \"practically useful\" by the broader scientific community depends on which problem it solves.", raisedDate: "2024-01-15" },
    { id: "OQ-002", question: "Does the PROG-QE diagnosis — technically coherent but temporally displaced — create investment sustainability risk? The programme requires years to decades of continued investment before applications are reachable. If investment cycles shorten before the applications arrive, the substrate may stop advancing before the claim is satisfied. This is an institutional question rather than a technical one, but it is now the programme's structural tension.", raisedDate: "2024-01-15" },
    { id: "OQ-003", question: "All three programme diagnoses are now established. Is there a meta-observation available about what kinds of programmes generate which kinds of diagnoses? PROG-AI: surface/depth inversion (advancing capabilities, contested foundations). PROG-AM: collapse dynamic (competitive pressure, premature announcement). PROG-QE: temporal displacement (coherent foundations, distant applications). Are these diagnosis types a property of the domains, or of the specific claim configurations the Observatory selected?", raisedDate: "2024-01-15" }
  ],

  realizationNotes: [
    { id: "REN-001", note: "Realization currently depends on fault-tolerant hardware at application-relevant logical-qubit count and sustained circuit depth, distinct from the simple fault-tolerant circuits already demonstrated.", conflation: null, raisedDate: "2026-07-08", status: "open", closedDate: null, closedNote: null }
  ],

  mutationLog: [
    { id: "M-013", date: "2026-09-16", field: "provenance_corrected", from: "LPR-001-D18 discrepancies", to: "PASS-AFTER-CORRECTION", note: "LPR-001-D18 bounded correction: repaired IN-001 through IN-005, added confidently established structured provenance, corrected dependent mechanisms and lineage, and appended AS-003 rather than rewriting historical assessments. Removed unsupported quantum-phase-estimation attribution, overbroad IBM classical-intractability wording, generic 10^-4 logical-gate/depth claims, universalised chemistry resource thresholds and unspecified Chan attribution. IN-006 retained as verified. QUOPS remains a separate Normal Record Review candidate. Pressure State remains ESCALATING; Verification Stage remains VS-02." },
    { id: "M-012", date: "2026-09-16", field: "provenance_review", from: "—", to: "LPR-001-D18 REVIEW REQUIRED", note: "LPR-001-D18 audited all six evidence instances. IN-006 was source-verified and provenance-enriched. IN-001 through IN-005 contain factual, attribution, chronology, metric, or source-chain discrepancies requiring bounded correction and were left substantively untouched. One new normal Record Review candidate was surfaced: Proctor et al., arXiv:2609.12146 (QUOPS benchmark); it was not admitted through LPR-001." },
    {"id":"M-011","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:BN-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, BN-001, AT-001 from FR_QE_0006_fault_tolerant_quantum_utility.html (Drive file 1N-FOxZkIRwc5qmpce1erwAqD9rpqRpTF). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    { id: "M-010", date: "2026-08-17", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued during OHR-2026-09 catch-up review to close the evidence-assessment gap created by IN-006. Composed logical Clifford operations are recognised as meaningful substrate progress but do not demonstrate a practically useful algorithm beyond classical simulation. Pressure State remains ESCALATING; Verification Stage remains VS-02; mechanisms and open questions remain unchanged." },
    { id: "M-009", date: "2026-07-14", field: "instance_appended", from: "—", to: "IN-006", note: "IN-006 appended — composed logical Clifford operations via lattice surgery (arXiv:2607.01473), surfaced from Frontline Scout report 2026-07-03 during evidence-gap review as non-duplicate evidence stranded in the Scout archive. Instance-level append only, classified NEUTRAL: an active-computation building block advancing the fault-tolerant substrate beyond IN-003's application-ready-in-principle status, which does not demonstrate a practically useful algorithm beyond classical simulation (Clifford-only, distance-three, no target problem — BN-001 untouched). No assessment issued; pressureState ESCALATING, verificationStage VS-02, mechanisms, and openQuestions unchanged. The source retains its separate Scout FCIF-candidate status; this instance does not pre-decide that." },
    { id: "M-008", date: "2026-07-08", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): OQ-003 referred to the stale identifier PROG-MF. Corrected to PROG-AM following the FR-MF-* → FR-AM-* programme identifier migration. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-007", date: "2026-07-08", field: "realization_note_added", from: "—", to: "REN-001", note: "realizationNotes field added to schema. REN-001: application-relevant hardware scale/depth dependency distinguished from simple fault-tolerant circuits already demonstrated. Corpus Review — Realization Note Candidates (v2)." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_failed", from: "—", to: "NULL-CONDITION-FAILED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
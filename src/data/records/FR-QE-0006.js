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
  provenanceOutcome: "discrepancies_found",
  provenanceRepairStatus: "pending",

  claim: {
    statement: "A fault-tolerant quantum computer can execute a practically useful quantum algorithm beyond classical simulation.",
    shortLabel: "Fault-Tolerant Quantum Utility — Practically Useful Algorithms Beyond Classical Simulation",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Quantum algorithm portfolio — theoretical utility established",
      description: "The 1990s and early 2000s establish a portfolio of quantum algorithms with proven speedups over classical methods for practically relevant problems. Shor's algorithm (factorisation, 1994), Grover's search (1996), quantum phase estimation (Lloyd 1996), and the HHL algorithm for linear systems (Harrow, Hassidim, Lloyd 2009) demonstrate that fault-tolerant quantum computers could provide exponential or polynomial speedups on problems with scientific and commercial relevance. This establishes that the claim's \"practically useful\" condition is satisfiable in principle — the algorithmic targets exist. Whether hardware can implement these algorithms at relevant scale is the open practical question. This instance is neutral rather than supportive: it establishes theoretical possibility without bearing on the practical threshold.",
      vectors: ["neutral--theoretical-utility-established"],
      date: "1994–2005",
    },
    {
      id: "IN-002",
      qualifiedEvent: "NISQ-era quantum utility claims and classical simulation challenges",
      description: "IBM and others claim \"quantum utility\" with noisy intermediate-scale quantum (NISQ) devices — systems without full fault tolerance — on problems including Ising model simulation and certain chemistry calculations. IBM's 2023 Nature paper (Kim et al.) reports quantum utility on a 127-qubit Eagle processor for a kicked Ising model simulation that classical simulation cannot match in reasonable time. The claim is immediately contested: Tindall et al. and others demonstrate that tensor network methods can classically simulate the same circuits, contesting whether the specific problem genuinely exceeded classical simulation capability. This is not a fault-tolerant result — the claim in this record specifies fault-tolerant systems — but it establishes the evidence landscape: the boundary between quantum and classical simulation is contested and moving, and \"beyond classical simulation\" is a threshold that classical algorithm improvement can push back.",
      vectors: ["partial--nisq-utility-contested-not-fault-tolerant"],
      date: "2022–23",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Logical qubit fault-tolerant operations — substrate becomes application-ready in principle",
      description: "The results documented in FR-QE-0003, FR-QE-0004, and the Microsoft/Quantinuum logical qubit demonstrations establish that fault-tolerant logical qubits with error rates below 10⁻⁴ per gate are achievable. At this error rate, fault-tolerant circuits of modest depth (hundreds to low thousands of gates) can be executed with high fidelity. This is the substrate threshold at which the simplest practically useful fault-tolerant quantum algorithms become technically executable in principle — not yet at the scale required for chemistry or optimisation applications of practical value, but within the range of proof-of-principle demonstrations on small instances of relevant problems. The claim transitions from EMERGING to ESCALATING: fault-tolerant hardware capable of executing the first small useful algorithms now exists, even if the scale required for practical advantage does not.",
      vectors: ["supportive--fault-tolerant-substrate-now-application-ready-in-principle"],
      date: "2023–24",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Resource estimation studies — useful fault-tolerant algorithms require 1000+ logical qubits",
      description: "Detailed resource estimation work (Babbush et al., Google; Lee et al., various) establishes that the fault-tolerant algorithms most likely to provide practical advantage in chemistry and materials simulation (FeMoco, ruthenium catalyst calculations) require approximately 1000–4000 logical qubits with error rates at or below 10⁻³ per gate, operating for days. Current systems have tens of logical qubits. The gap between demonstrated fault-tolerant capability and the resource requirements for practically useful quantum chemistry simulation is approximately two orders of magnitude in logical qubit count. This is a more tractable gap than the RSA factorisation gap (FR-QE-0005, ~4000 logical qubits at higher fidelity) but still represents years of engineering development. The resource estimation makes the claim's satisfaction conditions precisely quantified and more achievable than the canonical cryptographic application.",
      vectors: ["partial--gap-quantified-tractable-but-not-near"],
      date: "2024",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Classical algorithm improvement — moving target on the simulation threshold",
      description: "Simultaneously with quantum hardware progress, classical simulation methods for quantum chemistry and materials continue to improve. Tensor network methods, density matrix renormalisation group (DMRG), and machine learning-augmented classical simulation are making problems tractable classically that were previously considered quantum-only territory. Chan et al. and others demonstrate that some molecular systems previously proposed as quantum advantage targets are now tractable classically with sufficient computational resources. The \"beyond classical simulation\" threshold is not fixed: for each quantum algorithm target, the relevant comparison is against the best current classical method, which is itself advancing. This creates the same resistance mechanism as FR-QE-0005 RM-002 — the claim is a race, and both sides are moving — but at a timescale and problem scale where the race is currently active rather than decades away.",
      vectors: ["contesting--classical-methods-advancing-on-quantum-target-problems"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Composed logical Clifford operations via lattice surgery on a superconducting surface-code processor",
      description: "A 107-qubit superconducting surface-code processor demonstrates composed logical Clifford operations — lattice-surgery merge/split, patch expansion and shrinkage, and logical CNOT, Hadamard, and phase gates — with multi-round syndrome extraction and neural-network decoding, without post-selection (arXiv:2607.01473, large institutional collaboration, primary preprint, submitted 1 July 2026). This is a meaningful active-computation building block: it moves the fault-tolerant substrate from protected logical memory, and from the application-ready-in-principle status recorded at IN-003, to logical gate operations actually demonstrated. It does not demonstrate a practically useful quantum algorithm beyond classical simulation, which is this record's claim: the demonstrated set is Clifford-only (universal computation still requires magic-state injection for non-Clifford gates), the codes are distance-three, and the work supplies no target problem, leaving BN-001 (no agreed target problem) untouched. It is classified NEUTRAL because it advances the substrate without bearing for or against the useful-algorithm claim itself. No independent replication yet; peer review pending.",
      vectors: ["NEUTRAL"],
      date: "2026",
      sources: [{ citation: "Lin, W. et al. Surface code logical operations on a superconducting quantum processor. arXiv:2607.01473 (2026).", url: "https://arxiv.org/abs/2607.01473", doi: "10.48550/arXiv.2607.01473", locator: "Abstract; submitted 1 July 2026" }],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim has not been satisfied. No fault-tolerant quantum computer has executed a practically useful quantum algorithm beyond classical simulation at the scale required for genuine practical advantage. The substrate progress (INST-003) establishes that fault-tolerant logical qubits capable of executing simple circuits now exist; the resource estimation (INST-004) establishes that practically useful chemistry simulation requires approximately two orders of magnitude more logical qubits than are currently available. The gap is smaller and more tractable than the equivalent gap for RSA factorisation (FR-QE-0005), but still represents years of further engineering. Classical simulation methods are simultaneously improving (INST-005), narrowing the space of problems that would unambiguously qualify as beyond classical reach by the time fault-tolerant hardware reaches the required scale. The pressure state is ESCALATING: the substrate is advancing on a credible path, but no agreed target problem yet exists (BN-001) on which the claim could be tested.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-08-17",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim remains unsatisfied and ESCALATING. IN-006 advances the fault-tolerant substrate beyond protected logical memory by demonstrating composed logical Clifford operations through lattice surgery on a superconducting surface-code processor. That is a real engineering advance, but it does not cross this record's load-bearing boundary: the demonstration is Clifford-only, uses distance-three codes, supplies no practically useful target problem, and does not establish execution beyond the best classical simulation. The resource-scale gap and the moving classical comparison identified in AS-001 therefore remain decisive. IN-006 strengthens the credibility of the path toward useful fault-tolerant computation without constituting evidence that useful quantum advantage has occurred. Pressure State remains ESCALATING and Verification Stage remains VS-02; BN-001 and the open questions remain live.",
      assessorNote: "Issued during OHR-2026-09 catch-up review to close the unassessed-evidence gap created by IN-006. This assessment updates the evidential correspondence without modifying AS-001 or treating substrate progress as claim satisfaction.",
    }
  ],

  mechanisms: [
    { id: "RM-001", type: "RESISTANCE MECHANISM", description: "Classical algorithm improvement rate. The claim requires execution beyond classical simulation. Classical quantum chemistry and simulation methods continue to improve. For each proposed quantum advantage problem, the relevant comparison is against the best current classical method — which is itself a moving target. Tensor network methods, DMRG, and ML-augmented classical simulation have already classically solved some problems previously proposed as quantum advantage targets. The resistance mechanism is the same race dynamic as FR-QE-0005 RM-002, but operating on a nearer timescale and on problem classes where the race is currently active. The quantum side must advance faster than the classical side on the specific problem instances where advantage is claimed." },
    { id: "BN-001", type: "BOTTLENECK", description: "No agreed quantum advantage target problem. The claim requires a practically useful algorithm beyond classical simulation, but no consensus exists on which specific problem instance will first satisfy both criteria simultaneously. The quantum chemistry community has proposed FeMoco (nitrogen fixation catalyst), ruthenium-based catalysts, and vibrational spectra of small molecules as candidate first-advantage problems — but as classical methods improve, each candidate may become classically tractable before quantum hardware reaches the required scale. The bottleneck is that the first claim satisfaction event requires landing on a specific problem instance where quantum hardware reaches the required scale before classical methods solve it. The problem instance cannot be identified in advance with certainty." },
    { id: "AT-001", type: "ATTRACTOR", description: "First 1000-logical-qubit fault-tolerant chemistry demonstration. Resource estimation identifies approximately 1000–4000 logical qubits as sufficient for the first practically useful fault-tolerant quantum chemistry calculations. If a system of this scale is demonstrated with below-threshold error rates and executes a quantum chemistry calculation on a problem instance not tractable classically, the claim would be satisfied. The attractor is more tightly defined and closer in engineering terms than FR-QE-0005's attractor, making this record the most near-term application claim in PROG-QE. Several hardware roadmaps (IBM, Google, Microsoft) project this scale within five to ten years under optimistic assumptions." }
  ],

  lineage: {
    items: [
      { year: "1994–2009", text: "Quantum algorithm portfolio established. Shor, Grover, HHL, and quantum phase estimation demonstrate that fault-tolerant quantum computers could provide speedups on relevant problems. The theoretical utility case is established; the practical case awaits hardware." },
      { year: "2010–20", text: "NISQ era begins; utility claims emerge and are contested. Noisy intermediate-scale devices are proposed as platforms for near-term quantum advantage. Claims are made and contested; classical simulation methods close many proposed advantage gaps." },
      { year: "2022–23", text: "Resource estimation matures; targets become quantified. Detailed studies establish that fault-tolerant quantum chemistry advantage requires approximately 1000–4000 logical qubits. The gap is quantified for the first time at useful precision." },
      { year: "2023–24", text: "Fault-tolerant substrate demonstrated; claim transitions to ESCALATING. Below-threshold error correction at small scale demonstrates that the substrate for executing simple useful circuits now exists in principle. The engineering path to claim satisfaction is credible." }
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
    { id: "M-012", date: "2026-09-16", field: "provenance_review", from: "—", to: "LPR-001-D18 REVIEW REQUIRED", note: "LPR-001-D18 audited all six evidence instances. IN-006 was source-verified and provenance-enriched. IN-001 through IN-005 contain factual, attribution, chronology, metric, or source-chain discrepancies requiring bounded correction and were left substantively untouched. One new normal Record Review candidate was surfaced: Proctor et al., arXiv:2609.12146 (QUOPS benchmark); it was not admitted through LPR-001." },
    {"id":"M-011","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:BN-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, BN-001, AT-001 from FR_QE_0006_fault_tolerant_quantum_utility.html (Drive file 1N-FOxZkIRwc5qmpce1erwAqD9rpqRpTF). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
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
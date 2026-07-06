/**
 * FR-QE-0003 — Fault-Tolerant Logical Qubits — Error Rate Scaling with Code Distance
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0003 = {
  id: "FR-QE-0003",
  programme: "PROG-QE",

  claim: {
    statement: "Fault-tolerant logical qubits can be demonstrated with logical error rates that improve as error-correcting code distance increases.",
    shortLabel: "Fault-Tolerant Logical Qubits — Error Rate Scaling with Code Distance",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Google — Exponential suppression of bit or phase errors with cyclic error correction",
      description: "Google Quantum AI publishes in Nature (2021) demonstrating exponential suppression of one error type (bit-flip or phase-flip) as code distance increases in a surface code implementation on their Sycamore processor. They observe that logical error rates decrease as distance increases from d=5 to d=21 for one error type. The result does not yet demonstrate simultaneous suppression of both error types — full fault tolerance requires suppression of both — but it is the first published demonstration of the error-rate-versus-distance relationship the claim describes for a relevant error basis. The paper explicitly frames this as a necessary step toward fault tolerance rather than its achievement.",
      vectors: ["supportive--partial-signature"],
      date: "2021",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Quantinuum — fault-tolerant logical qubit operations on trapped-ion hardware",
      description: "Quantinuum demonstrates high-fidelity logical qubit operations using a [[7,1,3]] Steane code on trapped-ion hardware, achieving logical error rates below physical error rates for specific gate operations. The result demonstrates that error correction overhead can be net-positive — that the logical qubit outperforms the physical qubits it is encoded across. The code distance tested is small; the experiment does not sweep code distance to demonstrate scaling behaviour. The result is supportive but does not directly measure the claim's specific empirical signature (improvement as distance increases). The hardware platform is distinct from Google's superconducting approach, indicating the phenomenon is not architecture-specific.",
      vectors: ["supportive--below-physical-error-rate"],
      date: "2022",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Google — Suppressing quantum errors by scaling a surface code logical qubit",
      description: "Google Quantum AI publishes in Nature (2023) the first demonstration of simultaneous suppression of both X and Z errors as surface code distance increases, from d=3 to d=5 to d=7, on a 72-qubit processor. Logical error rates decrease by approximately half with each increase in code distance. This is the specific empirical signature the claim describes: logical error rates improving as code distance increases, for a full surface code. The result is described by the authors as crossing the threshold from physical to logical error rate suppression. Independent commentary in Nature and Science acknowledges this as a qualitative milestone. The claim transitions from emerging to actively escalating pressure.",
      vectors: ["supportive--primary-signature-demonstrated"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Microsoft / Quantinuum — logical qubit error rates below 10⁻⁴ per gate",
      description: "Microsoft and Quantinuum publish results demonstrating logical error rates of approximately 10⁻⁴ per two-qubit logical gate, achieved by combining Quantinuum's trapped-ion hardware with Microsoft's error correction software. The result achieves logical error rates orders of magnitude below physical rates and below thresholds generally cited as necessary for useful fault-tolerant computation. The result does not use topological qubits — it uses conventional trapped-ion hardware with software error correction. This is relevant to Microsoft's topological qubit programme — discussed as contextual evidence within the Quantum Engineering corpus but without a dedicated Frontier Record — which represents one pathway to fault tolerance; INST-004 demonstrates that fault-tolerant logical operation is achievable without it. The hardware-path question and the capability-threshold question are separable.",
      vectors: ["supportive--error-rate-milestone"],
      date: "2024",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Google Willow — below-threshold quantum error correction at scale",
      description: "Google releases the Willow chip (105 qubits) and publishes results demonstrating below-threshold error correction: logical error rates decrease exponentially with code distance across d=3, d=5, and d=7 surface codes, with performance improving faster than the overhead of additional physical qubits. This is the first demonstration of below-threshold operation — the regime where adding more qubits to the code actively reduces logical error rates, making the system scalable in principle. Note: FR-QE-0001 logged the Willow chip's quantum simulation result as a separate instance relevant to the quantum advantage claim. The error correction result logged here is a distinct measurement from the same hardware, relevant to this record's specific claim.",
      vectors: ["supportive--below-threshold-operation"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Google Willow — peer-reviewed below-threshold result leaves d=11+ unresolved",
      description: "The Willow below-threshold result is independently verifiable as a Nature/arXiv publication and materially strengthens the record's core empirical signature: the larger distance-7 logical memory suppresses error relative to distance-5, reaches approximately 0.143% error per cycle, and exceeds break-even against the best physical-qubit lifetime. The same evidence also defines the remaining constraint. The reported surface-code memories are still distance-5 and distance-7, with real-time decoding demonstrated at distance-5; the record's own OQ-001 asks whether below-threshold scaling holds at d=11 and above. No verified d=11+ below-threshold surface-code result was found in this review. This instance therefore supports sustained escalation but does not close the resolution bottleneck.",
      vectors: ["supportive--peer-reviewed-below-threshold", "constraint--d11-plus-unresolved"],
      date: "2024-12-09",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim describes a specific empirical signature: logical error rates improving as code distance increases. This signature has now been demonstrated. INST-003 (Google, 2023) was the first result to show simultaneous X and Z error suppression with increasing code distance, directly satisfying the claim's measurement criterion. INST-005 (Google Willow, 2024) extends this to below-threshold operation, showing that the improvement rate exceeds the overhead rate — the condition required for the result to be considered scalable rather than merely demonstrated at fixed size. INST-001 (2021) and INST-002 (2022) provided earlier partial evidence — single-error-type suppression and below-physical-error-rate operation, respectively — establishing the trajectory that INST-003 and INST-005 confirm more directly. The pressure state is ESCALATING: the claim's core empirical signature is demonstrated and strengthening, but the demonstrated code distances (up to 7) remain well below the distances required to confirm the behaviour holds at practically relevant scale (OQ-001).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-28",
      pressureState: "escalating",
      verificationStage: "VS-03",
      summary: "The evidence gap is closed by IN-006. The Willow result is now treated as a verified, peer-reviewed below-threshold surface-code memory result rather than a general quantum-computing announcement. It materially strengthens the claim because logical error suppression improves with code distance and the larger memory exceeds break-even. The pressure state remains ESCALATING rather than RESOLVING because the record's own next decisive question — whether below-threshold scaling holds at d=11 and above — remains unanswered, and the demonstrated result is still a memory result rather than a full fault-tolerant computation pathway.",
      assessorNote: "Assessment filed after direct review of FR-QE-0003 and current external sources on 2026-06-28. The new assessment references only IN-006 evidence already logged in this record. No existing instance, mechanism, open question, or prior assessment was modified. No transition is forced: IN-006 strengthens the claim and advances verification, but it does not satisfy OQ-001 or define the governed RESOLVING criterion requested by OQ-003.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Physical qubit error floor. Surface code performance depends on physical qubit error rates remaining below the fault-tolerance threshold (approximately 1% for surface codes). Current superconducting qubit systems operate near this threshold; trapped-ion systems are below it. Any degradation in physical qubit performance with increased system size — due to crosstalk, control errors, or fabrication ",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Demonstrated distance versus required distance. The claim's empirical signature has been demonstrated at code distances d=3 to d=7. Practical fault-tolerant computation for useful algorithms requires code distances in the range d=20 to d=50, implying physical qubit counts of thousands to tens of thousands per logical qubit. The scaling behaviour observed at small distance must hold at large distan",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Below-threshold operation as resolution point. The below-threshold result in INST-005 (Google Willow) represents a qualitative threshold that, if confirmed at increasing code distances, would constitute resolution of the claim as stated. Below-threshold operation means the scaling behaviour is not merely demonstrated but is self-reinforcing: each additional qubit added to the code actively improve",
    }
  ],

  lineage: {
    items: [
    { year: "1995–96", text: "Fault tolerance theory established. Shor (1995) and Steane (1996) independently propose quantum error correcting codes. Aharonov and Ben-Or (1997) prove the threshold theorem: if physical error rates are below a threshold, arbitrarily long quantum computation is possible. The claim becomes theoretic" },
    { year: "1998–2012", text: "Small-scale demonstrations. Multiple groups demonstrate quantum error detection and correction in small systems (2–7 qubits) across NMR, trapped ion, and photonic platforms. Error rates are above threshold; demonstrations are proof-of-principle rather than performance milestones. The claim is in an " },
    { year: "2012–20", text: "Superconducting qubit scaling. Google, IBM, and others scale superconducting systems to tens of qubits. Physical error rates approach but do not consistently reach below-threshold operation. The engineering challenge shifts from demonstrating error correction to demonstrating that adding qubits help" },
    { year: "2021–23", text: "Distance scaling demonstrated. Google's 2021 and 2023 Nature papers establish the specific empirical signature. The transition from partial (one error type) to full (both error types) suppression with distance marks the transition from EMERGING to ESCALATING for this record." },
    { year: "2024", text: "Below-threshold operation and multi-platform confirmation. Google Willow and Microsoft/Quantinuum results establish below-threshold operation and demonstrate the phenomenon across multiple hardware platforms. The claim is in its strongest evidential state to date." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Does below-threshold scaling behaviour hold at code distances d=11 and above? This is the next decisive measurement. If it does, the claim approaches RESOLVING. If it does not, the claim requires reassessment of whether small-distance results generalise.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The claim is architecture-agnostic, but all current strong evidence comes from superconducting (Google) and trapped-ion (Quantinuum) systems. Microsoft's topological qubit programme is currently tracked as contextual evidence within the Quantum Engineering corpus rather than through a dedicated Frontier Record. How should future evidence relating to this programme be represented within the Observatory?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "The claim as stated is close to resolution. If RESOLVING is the next pressure state, what would constitute sufficient evidence to issue a RESOLVING assessment? The claim needs a resolution criterion that is as precise as the claim itself. No governed procedure currently specifies this.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-008", date: "2026-07-03", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): IN-004 and OQ-002 incorrectly cited FR-QE-0001 as containing evidence for Microsoft's topological qubit programme. FR-QE-0001 concerns Google Sycamore / random circuit sampling and contains no such content; the corpus currently has no dedicated Frontier Record for this programme. Corrected in both locations to state this accurately. IN-005's separate, correct reference to FR-QE-0001 (Willow's quantum-simulation instance) was reviewed and left unchanged. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-007", date: "2026-06-28", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "Evidence gap closed. IN-006 logged first; AS-002 issued second. Pressure state sustained as ESCALATING; verificationStage advanced VS-02 → VS-03. OQ-001 remains open because no d=11+ below-threshold result was verified." },
    { id: "M-006", date: "2026-06-28", field: "instance_logged", from: "IN-005", to: "IN-006", note: "Willow below-threshold evidence reviewed as peer-reviewed surface-code memory result; d=11+ resolution bottleneck remains open." },
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
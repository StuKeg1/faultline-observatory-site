/**
 * FR-QE-0004 — Below-Threshold Quantum Error Correction — Scalable Architecture
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0004 = {
  id: "FR-QE-0004",
  programme: "PROG-QE",

  claim: {
    statement: "Quantum error correction can reduce logical error rates below physical error rates in a scalable architecture.",
    shortLabel: "Below-Threshold Quantum Error Correction — Scalable Architecture",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Early surface code implementations — above-threshold operation",
      description: "Multiple groups implement surface code error correction on superconducting and trapped-ion hardware. Physical qubit error rates in superconducting systems hover near or above the fault-tolerance threshold (~1% for surface codes). Logical error rates in these implementations are higher than physical rates — error correction is a net cost rather than a net benefit. The results establish the experimental infrastructure for error correction without demonstrating the threshold crossing. They are not contesting evidence; they are pre-threshold evidence. The gap between demonstrated performance and required threshold is quantified, providing a measurable target for subsequent work.",
      vectors: ["neutral--pre-threshold-baseline"],
      date: "2014–19",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Quantinuum — logical error rates below physical rates, small code",
      description: "Quantinuum demonstrates logical qubit operations with error rates below the physical qubit error rate using a [[7,1,3]] Steane code on trapped-ion hardware. This is the first clear demonstration that error correction can be net-positive — that the logical qubit outperforms the physical qubits it is encoded across. The code distance is small; the result does not yet demonstrate scalability. It establishes the principle: below-physical-rate operation is achievable. The scalability question — whether this holds as code size increases — remains open at this instance.",
      vectors: ["supportive--threshold-crossed-small-scale"],
      date: "2022",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Microsoft / Quantinuum — logical error rates 10⁻⁴ per gate",
      description: "Microsoft and Quantinuum achieve logical error rates of approximately 10⁻⁴ per two-qubit logical gate on trapped-ion hardware with software error correction. This is orders of magnitude below physical qubit error rates and below thresholds generally cited as necessary for useful fault-tolerant computation. The result uses conventional hardware rather than topological qubits, demonstrating that below-physical-rate operation at practically useful error levels is achievable with current technology. The architecture is not yet at the qubit counts required for large-scale computation, but the per-gate error rate is in a regime where scaling would be tractable in principle.",
      vectors: ["supportive--practical-error-rate-milestone"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Google Willow — below-threshold operation confirmed at multiple code distances",
      description: "Google's Willow chip (105 qubits) demonstrates below-threshold quantum error correction: logical error rates decrease exponentially with code distance from d=3 to d=5 to d=7, with each step adding physical qubits and reducing logical error rates faster than overhead increases. This is the specific signature of scalable below-threshold operation — not merely that logical rates are below physical rates at one code size, but that adding more qubits to the code continues to improve performance. The result addresses both components of the claim simultaneously: below-physical-rate operation is demonstrated, and the architecture is scalable in the precise technical sense that performance improves with scale. Independent commentary in Nature confirms this as a qualitative milestone. The claim transitions to RESOLVING.",
      vectors: ["supportive--scalable-below-threshold-confirmed"],
      date: "2024",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Multi-platform confirmation — Microsoft topological qubit announcement",
      description: "Microsoft announces topological qubit results in early 2025, claiming measurement of a topological gap and qubit operations with error rates consistent with topological protection. If confirmed, this would represent a third distinct hardware architecture demonstrating below-physical-rate logical qubit operation, alongside superconducting (Google Willow) and trapped-ion (Quantinuum/Microsoft) approaches. The topological result is subject to ongoing independent verification. Its relevance to FR-QE-0004 is corroborating rather than foundational: the claim is already in RESOLVING state from INST-004; INST-005 would, if confirmed, strengthen the case that below-threshold operation is architecture-agnostic. Note: Microsoft's topological qubit programme is referenced as contextual evidence at multiple points across the Quantum Engineering corpus (see FR-QE-0003) but does not currently have a dedicated Frontier Record.",
      vectors: ["partial--pending-independent-verification"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Legg et al. — peer-reviewed critique of topological gap detection; Microsoft response",
      description: "This does not alter IN-005's original characterisation as corroborating rather than foundational to this record — RESOLVING was reached from IN-004 alone, and IN-006 bears on IN-005's own status, not on the pressure state this record has already reached. Legg et al. publish a peer-reviewed critique in Nature (24 June 2026), \"On the robustness of topological gap detection via transport,\" arguing that the transport-based measurements underlying Microsoft's early-2025 topological qubit announcement (IN-005) do not conclusively demonstrate the topological gap claimed, citing flawed tune-up procedures and selectively chosen data. Microsoft publishes a contesting reply in the same issue. This is the first substantive development against IN-005's logged pending-independent-verification status. The evidential posture progresses from pending independent verification to active scientific contest: the claim IN-005 described is now under formal, unresolved dispute rather than awaiting a first verification attempt.",
      vectors: ["contesting--pending-verification-now-actively-disputed"],
      date: "2026",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "resolving",
      verificationStage: "VS-04",
      summary: "The claim has two components: below-physical-rate operation, and scalability of that operation. Both have been demonstrated. INST-002 established that below-physical-rate logical qubits are achievable in principle. INST-003 established that practically useful error rates are achievable on current hardware. INST-004 established that performance improves as the architecture scales — the defining signature of scalable below-threshold operation. No contesting evidence has been published against either component of the claim. The pressure state is RESOLVING: both elements the claim requires have been independently demonstrated and corroborate each other, though confirmation at the code distances required for practical fault-tolerant computation (d=11 and above) remains outstanding (OQ-001), and the claim's architecture-agnosticism has not yet been confirmed across a third hardware platform (OQ-002).",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Physical qubit error floor at scale. Below-threshold operation at small code distances does not guarantee the behaviour continues as physical qubit count increases. Crosstalk, fabrication variability, and control complexity all tend to increase with system size. The resistance mechanism is not that below-threshold operation is unachievable — INST-004 demonstrates it is achievable — but that sustai",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Demonstration at d=11 and beyond. The next decisive evidence event for this record is demonstration of below-threshold scaling at code distances d=11 and higher. At d=7, the Willow result establishes the behaviour. At d=11 or d=15, the result would confirm that the scaling continues into regimes relevant for practical fault-tolerant computation. This is the specific experimental milestone that wou",
    }
  ],

  lineage: {
    items: [
    { year: "1995–97", text: "Threshold theorem established. Aharonov, Ben-Or, Shor, and others prove that below-threshold physical error rates permit arbitrarily long fault-tolerant computation. The theoretical possibility of the claim is established. The empirical question opens: can physical hardware reach and sustain below-t" },
    { year: "1998–2019", text: "Approach from above. Physical qubit error rates improve steadily across superconducting, trapped-ion, and photonic platforms. Surface code threshold (~1% two-qubit gate error) is approached but not consistently reached across full system operation. The claim remains in EMERGING state: the principle " },
    { year: "2022–23", text: "Threshold crossed at small scale. Quantinuum and the Microsoft/Quantinuum collaboration demonstrate below-physical-rate logical qubits and practically useful error rates. The claim enters ESCALATING. The scalability question becomes the active frontier." },
    { year: "2024", text: "Scalable below-threshold operation demonstrated. Google Willow confirms that adding physical qubits to the code continues to reduce logical error rates — the defining signature of scalable below-threshold operation. The claim enters RESOLVING." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Does below-threshold scaling behaviour hold at code distances d=11 and above? This is the remaining decisive measurement before the claim can transition from RESOLVING to a fully confirmed state. AT-001 names this as the attractor.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The claim is architecture-agnostic. Current evidence is concentrated in superconducting and trapped-ion systems. If topological qubit architectures — currently tracked only as contextual evidence within the corpus, without a dedicated Frontier Record — achieve confirmed below-threshold operation, this record gains a third platform confirmation. Does architecture-agnosticism require multi-platform demonstration, or is the current two-platform evidence sufficient for the claim as stated?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "What constitutes full confirmation of this claim — the transition from RESOLVING to a closed confirmed state? The corpus has no governed resolution criterion. The claim is precisely scoped and approaching resolution. Before another record reaches this point, the Observatory may need to address OQ-3 from FR-QE-0003: what does confirmation look like and who determines it?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-009", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-006 description reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-008", date: "2026-07-03", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): IN-005 and OQ-002 incorrectly cited FR-QE-0001 as containing evidence for Microsoft's topological qubit programme. FR-QE-0001 concerns Google Sycamore / random circuit sampling and contains no such content; the corpus currently has no dedicated Frontier Record for this programme. Corrected in both locations to state this accurately. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-007", date: "2026-07-03", field: "instance_appended", from: "—", to: "INSTANCE-APPENDED", note: "IN-006 added — Legg et al. Nature critique and Microsoft response, bearing on IN-005's pending-verification status. Initiation: Evidence Gap Scan Pilot 001 (Candidate 1). Scope: instance-level only; no Assessment issued; pressureState, verificationStage, and openQuestions unchanged." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

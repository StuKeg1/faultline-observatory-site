/**
 * FR-QE-0005 — Cryptographically Relevant Quantum Computing — RSA Factorisation
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0005 = {
  id: "FR-QE-0005",
  programme: "PROG-QE",

  claim: {
    statement: "A quantum computer can factor commercially relevant RSA cryptographic keys faster than any classical computer.",
    shortLabel: "Cryptographically Relevant Quantum Computing — RSA Factorisation",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Shor's algorithm — theoretical foundation established",
      description: "Peter Shor publishes a quantum algorithm for integer factorisation running in polynomial time — exponentially faster than any known classical algorithm. The algorithm requires a fault-tolerant quantum computer with a number of logical qubits proportional to the number of bits in the integer being factored. For 2048-bit RSA, the resource requirement is approximately 4000 logical qubits operating with error rates below the fault-tolerance threshold. The theoretical claim is immediately established and has never been contested: a sufficiently powerful quantum computer can factor RSA keys exponentially faster than classical methods. The practical question — whether such a computer can be built — opens simultaneously. This instance is not supportive or contesting evidence for the practical claim; it establishes the theoretical basis that makes the practical claim worth tracking.",
      vectors: ["neutral--theoretical-basis-established"],
      date: "1994",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Small-scale Shor demonstrations and resource estimate refinements",
      description: "Multiple groups demonstrate Shor's algorithm on small quantum computers factoring numbers of 15, 21, and 35 — trivially small by RSA standards. These demonstrations confirm the algorithm works but have no bearing on the practical claim; the challenge is entirely one of scale, not of algorithmic correctness. Simultaneously, the quantum computing community refines resource estimates for commercially relevant factorisation. Gidney and Ekerå (2021) publish the most detailed current analysis, estimating that factoring 2048-bit RSA requires approximately 20 million physical qubits running for 8 hours with current error correction overhead. This estimate substantially raises the bar from earlier optimistic projections. The resource estimate is the most important piece of evidence bearing on the claim's timeline: it quantifies the gap between current capability and the claim's satisfaction condition.",
      vectors: ["neutral--gap-quantified"],
      date: "2012–22",
    },
    {
      id: "IN-003",
      qualifiedEvent: "FR-QE-0003 and FR-QE-0004 substrate progress — engineering gap begins closing",
      description: "The results documented in FR-QE-0003 (logical error rates improving with code distance) and FR-QE-0004 (below-threshold operation in scalable architectures) represent the substrate advances that are prerequisites for this claim. Google Willow's below-threshold error correction across d=3 to d=7 and Microsoft/Quantinuum's 10⁻⁴ per-gate logical error rates demonstrate that the error correction engineering required for large-scale Shor's algorithm is progressing on a credible trajectory. The gap from current capability (~100 physical qubits, tens of logical qubits) to the Gidney-Ekerå requirement (~20 million physical qubits) remains enormous, but for the first time the engineering path is demonstrated rather than merely theoretical. The claim transitions from EMERGING to ESCALATING: the substrate is advancing; the application claim is on a credible if distant engineering trajectory.",
      vectors: ["supportive--substrate-demonstrates-credible-path"],
      date: "2023–24",
    },
    {
      id: "IN-004",
      qualifiedEvent: "NIST post-quantum cryptography standards — world prepares for the claim being satisfied",
      description: "NIST finalises post-quantum cryptographic standards (CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+) in 2024, providing standardised alternatives to RSA that are resistant to quantum attack. The US National Security Agency mandates migration timelines for classified systems. This is a structurally unusual evidence object for the claim: it is not evidence that a quantum computer can factor RSA keys, but it is evidence that serious institutions believe the claim will eventually be satisfied and are acting accordingly. The NIST standards constitute a form of institutional commitment evidence — the world's cryptographic infrastructure is being redesigned in anticipation of the claim's eventual satisfaction. Whether such anticipatory institutional acts constitute evidence for the claim is the same question raised by the Helion/Microsoft contract in FR-MF-0004, now appearing a second time.",
      vectors: ["partial--anticipatory-institutional-evidence"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Chinese research group factorisation claim — and rapid refutation",
      description: "A Chinese research group (Bao et al. 2023) publishes a preprint claiming to have factored a 2048-bit RSA integer using a quantum-classical hybrid approach on a small quantum computer. The claim generates significant security community attention. Within weeks, multiple independent analyses demonstrate that the factored number in the paper is not a full 2048-bit RSA modulus and that the method does not scale to commercially relevant key sizes. The claim is effectively refuted by the research community without formal retraction. This instance is the most directly relevant to the claim's satisfaction condition of any instance in the record — and it fails. It is notable as the first direct attempt to demonstrate the claim that has received serious analysis. The refutation is the evidence; the attempt itself is primarily evidence about the current state of the art and the gap remaining.",
      vectors: ["contesting--direct-attempt-failed"],
      date: "2023",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Gidney (2025) and successive resource-estimate reductions — RSA and elliptic-curve",
      description: "Craig Gidney (Google, May 2025) publishes a revised resource analysis reducing the estimated physical-qubit requirement for RSA-2048 factorisation from the Gidney-Ekerå (2021) figure of ~20 million to under 1 million, under broadly comparable fault-tolerance assumptions. The reduction is attributed to improved magic-state distillation and algorithmic refinements, not to any experimental result. A subsequent 2026 proposal applying quantum low-density parity-check (QLDPC) codes — an architecture distinct from the surface codes both prior estimates assumed — suggests the requirement could fall further, toward ~100,000 physical qubits, though this approach remains unvalidated at scale. In March 2026, a joint Google Quantum AI / Stanford / Ethereum Foundation whitepaper extends the same resource-reduction methodology to elliptic-curve cryptography, estimating fewer than 500,000 physical qubits for curves such as secp256k1. None of these are experimental results: no factorisation attempt accompanies any of them. They are successive theoretical revisions of the same estimate category as IN-002, arriving at a materially faster rate than the original record anticipated — three independent downward revisions within roughly eighteen months, where IN-002 itself represented the only major revision in the preceding decade.",
      vectors: ["neutral--gap-re-quantified-faster-than-prior-trend"],
      date: "2025–26",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim has not been satisfied. No quantum computer has factored a commercially relevant RSA key. The most credible direct attempt (INST-005) failed. The engineering gap between current capability and the Gidney-Ekerå resource estimate remains approximately three to four orders of magnitude in physical qubit count, with additional requirements for error rates, connectivity, and operational duration not yet demonstrated at any scale approaching relevance. The pressure state is ESCALATING. The s",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "No threshold has been crossed since AS-001 — no factorisation of a commercially relevant key has occurred, and none is closer to occurring in any demonstrated sense. What has moved is the resource-estimate trajectory underlying OQ-001. Gidney (Google, May 2025) reduced the estimated physical-qubit requirement for RSA-2048 factorisation from the Gidney-Ekerå (2021) figure of ~20 million to under 1 million, under comparable fault-tolerance assumptions — roughly a 20-fold reduction achieved through improved algorithmic and error-correction engineering rather than any experimental demonstration. A 2026 proposal using QLDPC codes (an architecture distinct from the surface codes assumed in both prior estimates) suggests a further reduction toward ~100,000 physical qubits, though this is unvalidated at scale. A March 2026 Google/Stanford/Ethereum Foundation whitepaper applies the same style of resource-reduction analysis to elliptic-curve cryptography, estimating under 500,000 physical qubits for widely used curves. All three results are theoretical resource estimates — the same evidence category as INST-002's original figure — not experimental progress toward the claim. The pressure state remains ESCALATING; no reclassification is warranted by an estimate revision alone. What is new is the rate: three independent downward revisions within roughly eighteen months is faster compression of the engineering-gap estimate than the original record anticipated, and OQ-001 now has materially fresher input than it did at AS-001.",
      assessorNote: "Sourced from: Gidney, \"How to factor 2048-bit RSA with less than a million noisy qubits\" (May 2025, arXiv); Iceberg Quantum QLDPC architecture proposal (early 2026, unvalidated at scale per secondary reporting); Google Quantum AI / Stanford / Ethereum Foundation whitepaper on elliptic-curve cryptography resource estimates (March 2026). All three accessed via secondary technical reporting (The Quantum Insider, postquantum.com) rather than primary papers in full; primary sourcing should be substituted before this assessment is treated as fully verified.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "The engineering gap — three to four orders of magnitude. The Gidney-Ekerå estimate requires approximately 20 million physical qubits for 2048-bit RSA factorisation. Current systems have hundreds to low thousands. The gap is not merely quantitative — scaling by three to four orders of magnitude in qubit count while maintaining below-threshold error rates and the necessary connectivity involves engi",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Classical algorithm improvement. The claim requires factoring RSA keys faster than any classical computer. Classical factorisation algorithms continue to improve. The general number field sieve has been optimised continuously since 1990. If classical algorithms improve substantially — through better mathematical insights, specialised hardware, or distributed computing advances — the bar for quantu",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Sequential substrate dependency. This claim cannot be satisfied until FR-QE-0003 (scaling behaviour) and FR-QE-0004 (below-threshold operation) are not merely demonstrated but extended to the scale required. The claim sits at the top of the PROG-QE capability stack; it is the last claim to be satisfiable, dependent on all substrate claims being satisfied first at sufficient scale. This is a sequen",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Demonstration of fault-tolerant logical qubit count at hundreds, then thousands. The specific milestones that would move this record from ESCALATING toward RESOLVING are stepwise: demonstration of 100 fault-tolerant logical qubits at below-threshold error rates, then 1000, then 10,000. Each milestone narrows the engineering gap by approximately one order of magnitude. No single experiment resolves",
    }
  ],

  lineage: {
    items: [
    { year: "1994", text: "Shor's algorithm. The theoretical claim is established immediately and completely. The practical question opens simultaneously. RSA key sizes considered secure against quantum attack are calculated from the algorithm's resource requirements." },
    { year: "1995–2015", text: "Hardware too small to matter. Quantum computers demonstrate Shor's algorithm on trivial inputs. The gap between demonstrated capability and commercially relevant key sizes is so large that no meaningful engineering progress toward the claim is visible. The claim is in EMERGING." },
    { year: "2021", text: "Gidney-Ekerå resource estimate. The most detailed published estimate quantifies the engineering gap: approximately 20 million physical qubits for 2048-bit RSA. This estimate is simultaneously sobering (the gap is enormous) and clarifying (the target is now precisely defined)." },
    { year: "2023–24", text: "Substrate progress makes the trajectory credible. FR-QE-0003 and FR-QE-0004 results demonstrate that the error correction engineering required for the claim's substrate is advancing on a credible path. The claim enters ESCALATING." },
    { year: "2024", text: "NIST PQC standards finalised. Global cryptographic infrastructure begins migration away from RSA in anticipation of the claim's eventual satisfaction. The world treats the claim as a future certainty even as the engineering gap remains enormous." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What is the realistic timeline for reaching the Gidney-Ekerå qubit count? Current hardware roadmaps from IBM, Google, and Microsoft project millions of physical qubits within 10–15 years, but roadmap projections have historically been optimistic. The engineering challenges at 20 million qubits are not simply extensions of current work.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "INST-004 (NIST PQC standards) is the second occurrence of anticipatory institutional evidence as an evidence object type (the first was FR-MF-0004 INST-003, the Helion/Microsoft contract). The corpus now has two instances. Whether anticipatory institutional acts constitute evidence for a claim — and at what weight — is a recurring question that may warrant attention before a third occurrence.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "This claim sits at the top of the PROG-QE capability stack and depends on all substrate claims being satisfied first. If FR-QE-0003 or FR-QE-0004 encounter unexpected obstacles at larger scales, this claim's trajectory changes without any direct evidence bearing on it. How should a record respond when its substrate records encounter setbacks? No governed procedure exists.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "IN-006 documents three independent downward revisions to the RSA/ECC resource estimate within roughly eighteen months, compared with one major revision in the preceding decade. Is this pace itself evidence of anything — a maturing theoretical toolkit converging on a real figure, or a sequence of estimates each exploiting a different unproven architectural assumption (surface codes, then QLDPC codes, then a third approach not yet proposed)? Until a fourth estimate either confirms or breaks the trend, this question cannot be answered from the evidence available at AS-002.",
      raisedDate: "2026-06-29",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-009", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: pace of resource-estimate revision as a possible evidence pattern in its own right." },
    { id: "M-008", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records (Homepage v2 scoping side-effect). Pressure state unchanged: ESCALATING. New evidence (IN-006) revises the resource-estimate trajectory but crosses no claim threshold." },
    { id: "M-007", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-006 added: Gidney (2025) and 2026 follow-on resource-estimate reductions for RSA-2048 and elliptic-curve cryptography." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
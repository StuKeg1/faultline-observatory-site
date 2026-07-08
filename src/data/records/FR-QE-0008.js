/**
 * FR-QE-0008 — Quantum Error Correction Scaling — Logical Rate Suppression Under Physical Overhead
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0008 = {
  id: "FR-QE-0008",
  programme: "PROG-QE",

  claim: {
    statement: "Quantum error correction can reduce logical error rates faster than physical error rates increase with system scale.",
    shortLabel: "Quantum Error Correction Scaling — Logical Rate Suppression Under Physical Overhead",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Threshold theorem — theoretical foundation established",
      description: "The quantum error correction threshold theorem is established by Aharonov and Ben-Or (1997), Knill, Laflamme, and Zurek (1996), and others. The theorem proves that arbitrarily long quantum computations can be performed reliably if the physical error rate per gate is below a threshold value. The surface code (Fowler et al. 2012) establishes a practical code with a threshold of approximately 1% per gate and polynomial overhead — making it the leading candidate for near-term fault-tolerant systems. The theoretical foundation is secure: the mathematics guarantees the scaling relationship exists if the physical assumptions hold. The empirical question is whether real hardware satisfies the physical assumptions well enough for the theorem's predictions to manifest in practice. This instance is neutral: theoretical confirmation of the claim's plausibility without empirical demonstration.",
      vectors: ["neutral--theoretical-foundation-secure"],
      date: "1995–2012",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Google — exponential suppression demonstrated in distance-3 to distance-5 surface codes",
      description: "Acharya et al. (Google, 2023, Nature) demonstrate that increasing surface code distance from 3 to 5 (adding physical qubits per logical qubit) produces exponential suppression of logical error rates — a factor of approximately 2.9× improvement per distance increase, consistent with theoretical predictions. This is the first experimental demonstration of the threshold theorem's scaling prediction operating as expected in a real system. The result is directly relevant to the claim: logical error rates are suppressing faster than physical qubit overhead is increasing. The result is at small code distances (3 and 5) — the question is whether the suppression continues at larger distances (7, 9, 11) where the polynomial overhead becomes more substantial and noise correlations may become more problematic.",
      vectors: ["supportive--exponential-suppression-demonstrated-at-small-scale"],
      date: "2022–23",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Google Willow — distance-3 to distance-7 scaling, below-threshold confirmed",
      description: "Acharya et al. (Google, 2024, Nature) extend the surface code scaling demonstration to distance 7 using the Willow chip. The result is significant: logical error rates continue to suppress exponentially from distance 3 through distance 7, with each unit increase in code distance reducing the logical error rate by a factor of approximately 2×. Below-threshold operation is confirmed across three code distances, and the scaling behaviour matches theoretical predictions within experimental uncertainties. The claim transitions from ESCALATING to RESOLVING: the core empirical question — does the threshold theorem hold in practice as systems scale? — is being answered affirmatively across the measured range. The remaining uncertainty is whether the suppression continues at distances 9, 11, and beyond, where noise correlations and crosstalk effects may become more significant. The trajectory is strongly supportive; the claim is not yet confirmed at the scales required for fault-tolerant computation.",
      vectors: ["supportive--exponential-suppression-confirmed-through-distance-7"],
      date: "2024",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Microsoft and Quantinuum — logical qubit operations at low error rates",
      description: "Microsoft (in collaboration with Quantinuum) demonstrates logical qubit operations using their topological qubit approach with error rates below 10⁻³ per operation in small systems. Quantinuum's H2 trapped-ion processor achieves logical error rates of approximately 10⁻⁴ per gate on small logical qubits using post-selected error detection. Multiple hardware platforms are now producing sub-threshold logical qubit operations, providing independent confirmation that the scaling relationship is not specific to Google's superconducting platform. Cross-platform confirmation is important: if the threshold theorem holds across superconducting, trapped-ion, and topological architectures, the result is more likely to reflect the underlying physics than a platform-specific artefact.",
      vectors: ["supportive--cross-platform-confirmation-of-sub-threshold-operation"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Correlated errors and noise model limitations at larger scales",
      description: "Theoretical and experimental work identifies limits on the threshold theorem's applicability at larger scales. Correlated errors — noise events that affect multiple qubits simultaneously — are not fully modelled by the independent error assumptions underlying the threshold theorem. At small code distances, correlated errors are a minor correction; at larger distances, they may produce logical error rate floors that resist further suppression. Fowler, Martinis, and others publish analyses suggesting that crosstalk, cosmic ray impacts, and two-level system defects in superconducting qubits produce correlated errors that will eventually limit scaling. The evidence is theoretical and partially experimental: no system has yet demonstrated a logical error rate floor, but the theoretical case for eventual limitations at larger scales is credible. This is contesting evidence against the claim's unlimited applicability while not contesting its near-term demonstrated validity.",
      vectors: ["partial--correlated-errors-may-limit-suppression-at-larger-scales"],
      date: "2024",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "resolving",
      verificationStage: "VS-04",
      summary: "The claim is substantially supported and on a trajectory toward confirmation. Google's Willow results (INST-003) demonstrate exponential logical error rate suppression through code distance 7, consistent with the threshold theorem's predictions. Cross-platform confirmation from Microsoft and Quantinuum (INST-004) strengthens the result beyond a single-platform observation. The core scaling relationship — logical error rates suppressing faster than physical overhead increases — is empirically confirmed at the code distances tested. The pressure state is RESOLVING: the theorem's central prediction has been consistently observed across the code distances measured so far (INST-002, INST-003) and across multiple hardware architectures, though correlated-error effects that may limit suppression at larger code distances (INST-005) have not yet been ruled out, and confirmation at the distances required for practical fault tolerance (d=9, d=11) remains the decisive open step (AT-001).",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Correlated error floors at large code distances. The threshold theorem assumes independent errors. Real systems contain correlated errors from crosstalk, cosmic ray impacts, and two-level system defects. At small code distances, these contribute minor corrections to the independent error model. At larger code distances, correlated errors may produce logical error rate floors — minimum achievable l",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Exponential suppression demonstrated through distance 11 or beyond. The claim would transition from RESOLVING to confirmed if exponential suppression is demonstrated at code distances 9 and 11 — the range required for early fault-tolerant applications. If suppression continues at these distances without evidence of correlated error floors, the claim's validity at practically relevant scales is est",
    }
  ],

  lineage: {
    items: [
    { year: "1995–2012", text: "Threshold theorem established; surface code identified. Theoretical foundation for scalable error correction is secure. The empirical question is whether physical systems satisfy the theorem's assumptions." },
    { year: "2022–23", text: "Google demonstrates exponential suppression at distance 3–5. First empirical confirmation that the scaling relationship holds in practice. The claim transitions from theoretical to empirical territory." },
    { year: "2024", text: "Willow extends demonstration to distance 7; cross-platform confirmation. The scaling trajectory is confirmed across a wider range and across hardware platforms. Claim enters RESOLVING." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Does the distinction between independent sub-populations (PROG-AM) and hierarchical layers (PROG-QE) constitute a new observational category, or is it a refinement within the existing sub-population concept? The corpus has one occurrence of each type.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "If the substrate layer in PROG-QE resolves completely — if error correction scaling is confirmed at all practically relevant code distances — does the temporal displacement diagnosis change? A programme whose substrate is fully confirmed but whose applications remain decades away is in a different structural state than one whose substrate is still advancing.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-QE-0004 and FR-QE-0008 are both RESOLVING substrate-layer records. If a third substrate-layer record enters RESOLVING, the substrate layer of PROG-QE would be functionally confirmed as a complete layer. Does that constitute a new kind of programme-level event — layer resolution — that the Observatory should track?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2026-07-08", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): OQ-001 referred to the stale identifier PROG-MF. Corrected to PROG-AM following the FR-MF-* → FR-AM-* programme identifier migration. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "sub_population_condition_partial", from: "—", to: "SUB-POPULATION-CONDITION-PARTIAL", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};

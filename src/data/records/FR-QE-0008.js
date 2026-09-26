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
  lastProvenanceReview: "2026-09-18",
  provenanceReviewId: "LPR-001-D20",
  provenanceOutcome: "pass_after_correction",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Quantum error correction can reduce logical error rates faster than physical error rates increase with system scale.",
    shortLabel: "Quantum Error Correction Scaling — Logical Rate Suppression Under Physical Overhead",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Threshold theorem and surface-code scaling — theoretical foundation",
      description: "Fault-tolerance threshold results establish that arbitrarily long quantum computation can in principle be made reliable when physical noise is below a constant threshold, with additional resource overhead determined by the code and noise model. Aharonov and Ben-Or provide a rigorous constant-threshold result with polylogarithmic time and space overhead for their construction. Surface-code work later established a practical two-dimensional nearest-neighbour architecture with comparatively high tolerable physical error rates; Fowler et al. describe surface-code fault tolerance and estimates for large-scale computation, while related surface-code analyses find thresholds approaching 1% under specified circuit-noise assumptions. These results establish the theoretical possibility of logical-error suppression with increasing encoding overhead, but they do not assign a universal 1% threshold to all hardware or noise models. The empirical question is whether real processors remain below their relevant threshold as code distance and runtime increase.",
      vectors: ["neutral--theoretical-foundation-secure"],
      date: "1995–2012",
      sourceReference: "Aharonov & Ben-Or, SIAM Journal on Computing 38 (2008), doi:10.1137/S0097539799359385; Fowler et al., Physical Review A 86 (2012), doi:10.1103/PhysRevA.86.032324",
      sources: [
        { citation: "Aharonov & Ben-Or, ‘Fault-Tolerant Quantum Computation with Constant Error Rate’, SIAM Journal on Computing 38 (2008)", url: "https://epubs.siam.org/doi/10.1137/S0097539799359385", doi: "10.1137/S0097539799359385", locator: "Abstract and threshold result" },
        { citation: "Fowler et al., ‘Surface codes: Towards practical large-scale quantum computation’, Physical Review A 86, 032324 (2012)", url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.86.032324", doi: "10.1103/PhysRevA.86.032324", locator: "Surface-code architecture and fault-tolerance estimates" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Google — distance-5 surface code modestly outperforms distance-3",
      description: "Acharya et al. (Google Quantum AI, Nature 2023) measure surface-code logical performance across code sizes and show that a distance-5 logical qubit modestly outperforms an ensemble of distance-3 logical qubits. The reported logical error per cycle is 2.914 ± 0.016% at distance 5 versus 3.028 ± 0.023% for the distance-3 ensemble, a relative reduction of about 4% (Λ3,5 ≈ 1.04), not a 2.9× suppression factor. This is an important experimental break-even scaling result: adding physical qubits improved average logical performance. The improvement is small and confined to distances 3 and 5, so it establishes the onset of below-threshold scaling rather than exponential suppression across a practically relevant distance range.",
      vectors: ["supportive--logical-performance-improves-from-distance-3-to-5"],
      date: "2022–23",
      sourceReference: "Google Quantum AI, Nature 614 (2023), doi:10.1038/s41586-022-05434-1",
      sources: [
        { citation: "Google Quantum AI, ‘Suppressing quantum errors by scaling a surface code logical qubit’, Nature 614, 676–681 (2023)", url: "https://www.nature.com/articles/s41586-022-05434-1", doi: "10.1038/s41586-022-05434-1", locator: "Abstract and logical error per cycle comparison" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Google Willow — below-threshold surface-code scaling through distance 7",
      description: "Google Quantum AI's Willow experiments demonstrate below-threshold surface-code memories at distances 5 and 7. The distance-7 code uses 101 qubits and reaches a logical error per cycle of 0.143 ± 0.003%, while logical error is suppressed by Λ = 2.14 ± 0.02 when code distance increases by two. The result therefore extends experimental below-threshold scaling beyond the earlier distance-3/5 break-even result and shows the characteristic faster reduction of logical error for higher-distance codes. It does not establish a factor-of-two improvement for each single unit of code distance, nor does it by itself demonstrate scaling at the distances and circuit depths required for useful fault-tolerant algorithms.",
      vectors: ["supportive--below-threshold-suppression-confirmed-through-distance-7"],
      date: "2024",
      sourceReference: "Google Quantum AI and Collaborators, Nature 638 (2025), doi:10.1038/s41586-024-08449-y",
      sources: [
        { citation: "Google Quantum AI and Collaborators, ‘Quantum error correction below the surface code threshold’, Nature 638, 920–926 (2025)", url: "https://www.nature.com/articles/s41586-024-08449-y", doi: "10.1038/s41586-024-08449-y", locator: "Abstract; distance-5 and distance-7 scaling results" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Microsoft and Quantinuum — logical error reduction on trapped-ion hardware",
      description: "Microsoft and Quantinuum report logical-qubit experiments that apply Microsoft's qubit-virtualization and error-correction protocols to Quantinuum's trapped-ion H-Series hardware. In the April 2024 demonstration, four logical qubits were created from 30 physical qubits; the strongest reported Bell-state circuit comparison showed an approximately 800× reduction in logical circuit error relative to the corresponding physical circuit baseline, alongside active syndrome extraction and more than 14,000 circuit instances without an observed error. Later work expanded to 12 logical qubits and reported a 22× circuit-error improvement for an entangled logical state. This is independent architectural evidence that encoding and error correction can improve logical reliability on trapped-ion hardware. It is not evidence from Microsoft's separate topological-qubit hardware programme, and the reported improvements should not be converted into generic 10⁻³ or 10⁻⁴ per-gate logical error rates.",
      vectors: ["supportive--trapped-ion-logical-error-reduction"],
      date: "2024",
      sourceReference: "Microsoft and Quantinuum logical-qubit demonstrations, 2024",
      sources: [
        { citation: "Microsoft, ‘Advancing science: Microsoft and Quantinuum demonstrate the most reliable logical qubits on record with an error rate 800x better than physical qubits’ (3 Apr 2024)", url: "https://blogs.microsoft.com/blog/2024/04/03/advancing-science-microsoft-and-quantinuum-demonstrate-the-most-reliable-logical-qubits-on-record-with-an-error-rate-800x-better-than-physical-qubits/", locator: "Four logical qubits; 800× comparison; active syndrome extraction" },
        { citation: "Microsoft, ‘Microsoft announces the best performing logical qubits on record…’ (10 Sep 2024)", url: "https://blogs.microsoft.com/blog/2024/09/10/microsoft-announces-the-best-performing-logical-qubits-on-record-and-will-provide-priority-access-to-reliable-quantum-hardware-in-azure-quantum/", locator: "Twelve logical qubits and 22× circuit-error improvement" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Correlated-error floors observed in high-distance repetition codes",
      description: "Google's surface-code experiments directly show that correlated errors are already relevant to QEC scaling rather than merely a theoretical future limitation. In the 2023 work, a distance-25 repetition code exhibited a logical-error-per-cycle floor of 1.7×10⁻⁶ set by a rare high-energy event (1.6×10⁻⁷ when that event was excluded). On Willow-generation hardware, high-distance repetition-code experiments pushed much lower but then deviated from exponential suppression at d≥15, producing an apparent logical-error floor around 10⁻¹⁰ caused by rare correlated bursts occurring roughly once an hour. The Willow surface-code error budget also identifies leakage and stray interactions as correlated contributions. These results do not show that surface-code suppression has already failed at distance 7; they show that correlated mechanisms can create measurable floors and must be mitigated for larger fault-tolerant circuits.",
      vectors: ["partial--correlated-error-floors-observed-in-repetition-codes"],
      date: "2023–25",
      sourceReference: "Google Quantum AI, Nature 614 (2023), doi:10.1038/s41586-022-05434-1; Google Quantum AI and Collaborators, Nature 638 (2025), doi:10.1038/s41586-024-08449-y",
      sources: [
        { citation: "Google Quantum AI, ‘Suppressing quantum errors by scaling a surface code logical qubit’, Nature 614, 676–681 (2023)", url: "https://www.nature.com/articles/s41586-022-05434-1", doi: "10.1038/s41586-022-05434-1", locator: "Distance-25 repetition-code logical error floor" },
        { citation: "Google Quantum AI and Collaborators, ‘Quantum error correction below the surface code threshold’, Nature 638, 920–926 (2025)", url: "https://www.nature.com/articles/s41586-024-08449-y", doi: "10.1038/s41586-024-08449-y", locator: "High-distance repetition-code error floor and correlated-error budget" },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Google — reinforcement-learning control stabilizes QEC against drift",
      description: "Sivak et al. (Nature 2026) integrate reinforcement learning with quantum error correction so that syndrome information is reused as a continuous control signal rather than requiring computation to stop for recalibration. On Google's Willow superconducting processor, the framework is demonstrated on distance-5 and distance-7 surface codes and a distance-5 colour code. Against injected drift, reinforcement-learning control improves surface-code logical-error-rate stability 2.4-fold, increasing to 3.5-fold when combined with decoder steering; fine-tuning an already calibrated processor provides an additional 20% logical-error suppression. The reported average logical error per cycle reaches 7.72(9)×10⁻⁴ for the surface code and 8.19(14)×10⁻³ for the colour code. Numerical simulations extend the control framework to distance-15 surface codes with tens of thousands of control parameters and report optimization speed independent of system size. This is supportive operational evidence that environmental drift can be actively controlled during QEC, addressing one scaling constraint relevant to long computations. It does not experimentally extend surface-code distance scaling beyond distance 7, demonstrate a fault-tolerant application, or show that the correlated-error floors recorded in IN-005 have been eliminated.",
      vectors: ["supportive--continuous-qec-control-mitigates-drift-without-extending-experimental-distance-scaling"],
      date: "Jul 2026",
      sourceReference: "Sivak et al., Nature 655 (2026), doi:10.1038/s41586-026-10759-2",
      sources: [
        { citation: "Sivak et al., ‘Reinforcement learning control of quantum error correction’, Nature 655, 879–884 (2026)", url: "https://www.nature.com/articles/s41586-026-10759-2", doi: "10.1038/s41586-026-10759-2", locator: "Abstract, main results and Methods" },
        { citation: "Google Quantum AI, data for ‘Reinforcement Learning Control of Quantum Error Correction’ (2026)", url: "https://zenodo.org/records/18896801", doi: "10.5281/zenodo.18896801", locator: "Experimental dataset; surface-code data collected 2026" },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Quantinuum Helios — C4-Helix repeated correction and logical-operation benchmarks",
      description: "Berthusen et al. (arXiv:2609.03194v1) report experimental validation of principal components of a compact trapped-ion fault-tolerant architecture on Quantinuum's 98-qubit Helios processor. Their [[20,2,6]] C4-Helix code reaches a reported logical error of 4.6 (+6.2/−2.6) × 10⁻⁵ per logical qubit per QEC cycle under repeated correction; the two-logical-qubit Clifford benchmark reports 2.8 (+1.0/−1.6) × 10⁻⁴ error per logical Clifford. A chain-map interface to a distance-5 surface code prepares a heterogeneous three-logical-qubit GHZ state with a reported fidelity lower bound of 99.925 (+0.068/−0.245)%. The encoded implementations outperform corresponding unencoded physical baselines without postselection. This adds integrated architecture and logical-operation evidence on trapped-ion hardware beyond IN-004's earlier demonstrations. It does not measure a suppression curve across increasing code distances, independently replicate the result, demonstrate a useful fault-tolerant workload, or establish resource overhead and economics at application scale. Simulated improvements from future physical fidelity are projections, not measured logical performance.",
      vectors: ["supportive--trapped-ion-integrated-qec-and-logical-operations-without-distance-scaling-closure"],
      date: "2026-09-02",
      sourceReference: "Berthusen et al., arXiv:2609.03194v1 (2026), primary preprint",
      sources: [
        { citation: "Berthusen et al., ‘Experimental validation of a compact fault-tolerant architecture for trapped ions’, arXiv:2609.03194v1 (2026)", url: "https://arxiv.org/abs/2609.03194v1", locator: "Abstract; repeated QEC, logical-Clifford benchmark and chain-map interface" },
      ],
    },
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
    },
    {
      id: "AS-002",
      date: "2026-09-18",
      pressureState: "resolving",
      verificationStage: "VS-04",
      summary: "LPR-001-D20 correction preserves the substantive RESOLVING / VS-04 assessment while narrowing its evidentiary basis. Google's 2023 result established a modest distance-5-over-distance-3 logical improvement, and Willow later demonstrated below-threshold surface-code memories through distance 7 with Λ = 2.14 ± 0.02 per distance increase of two. Microsoft and Quantinuum provide separate trapped-ion evidence that logical encoding and correction can outperform corresponding physical circuit baselines, but not topological-hardware confirmation. Correlated-error floors are no longer hypothetical: Google observed measurable floors in high-distance repetition codes, including an apparent ~10⁻¹⁰ floor on Willow-generation hardware. The record therefore remains RESOLVING because below-threshold scaling is experimentally established over a growing range, while durability across larger code distances, long runtimes and full fault-tolerant circuits remains unresolved.",
      assessorNote: "Corrective assessment following LPR-001-D20 bounded provenance repair. AS-001 is preserved append-only; IN-001 through IN-005 were source-bounded and representation errors corrected.",
    },
    {
      id: "AS-003",
      date: "2026-09-18",
      pressureState: "resolving",
      verificationStage: "VS-04",
      summary: "IN-006 strengthens the operational scaling case by demonstrating that QEC syndrome information can continuously steer more than 1,000 control parameters during computation and materially improve logical stability against drift on Willow. This reduces one practical threat to maintaining below-threshold operation over long runtimes, but it does not extend the experimentally demonstrated surface-code distance beyond 7 and does not remove the correlated-error-floor evidence in IN-005. Simulated distance-15 scalability is supportive engineering evidence rather than an experimental scaling result. The claim therefore remains RESOLVING / VS-04: experimental logical-error suppression and active stabilization are both advancing, while durable scaling at application-relevant distances and runtimes remains unconfirmed.",
      assessorNote: "Normal Record Review of Sivak et al., Nature 655 (2026), doi:10.1038/s41586-026-10759-2. Admitted as IN-006. No claim-resolution or verification-stage transition.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Correlated-error floors can limit logical-error suppression as code distance, physical overhead and runtime increase. Fault-tolerance threshold results depend on specified noise and decoding assumptions; they do not assert that all physical errors are independent. Real processors experience spatially or temporally correlated faults, including crosstalk, leakage and rare high-energy events. IN-005 documents measured floors in high-distance repetition codes: a distance-25 experiment exposed a 1.7×10⁻⁶-per-cycle floor set by a rare event, and Willow-generation tests reported an apparent floor around 10⁻¹⁰ at distance 15 and above from correlated bursts. Those are observed repetition-code effects, not evidence that Willow's distance-7 surface-code suppression has failed or that every architecture has the same floor. Whether such mechanisms can be mitigated over larger surface-code distances, longer runtimes and full fault-tolerant circuits remains unresolved.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Sustained logical-error suppression as physical overhead and runtime increase on real hardware. Surface-code measurements at distances 9 and 11 would extend the established distance-7 evidence and directly test whether suppression persists beyond the current range, but those distances are neither universal requirements for useful fault-tolerant applications nor automatic confirmation of the broad claim. A resolution review would require reproducible scaling across an informative range of code sizes, correlated-error and long-runtime behaviour, and logical-operation and resource-overhead evidence at a practically relevant workload. Other code families must be judged by their own comparable scaling and resource metrics rather than surface-code distance numbers. A larger-distance result may strengthen the case without resolving correlated floors, full-circuit reliability or economics.",
    }
  ],

  lineage: {
    items: [
    { year: "1995–2012", text: "Threshold theorem established; surface code identified. Theoretical foundation for scalable error correction is secure. The empirical question is whether physical systems satisfy the theorem's assumptions." },
    { year: "2022–23", text: "Google demonstrates the first surface-code scaling break-even: the distance-5 code modestly outperforms the distance-3 ensemble on average. High-distance repetition-code tests also expose rare correlated-error floors." },
    { year: "2024–25", text: "Willow demonstrates below-threshold surface-code memories through distance 7, with Λ≈2.14 per distance increase of two. Microsoft/Quantinuum provide separate trapped-ion logical-error reduction. Willow high-distance repetition codes reveal an apparent ~10⁻¹⁰ correlated-error floor. Claim remains RESOLVING." }
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
    { id: "M-013", date: "2026-09-26", field: "mechanism_attractor_consistency_corrected", from: "RM-001 / AT-001 inherited absolute wording", to: "Observed repetition-code floors and outcome-based scaling test", note: "Bounded consistency correction after the Helios Normal Record Review: RM-001 now distinguishes observed repetition-code floors in IN-005 from unresolved larger-distance surface-code and full-circuit behaviour, and states threshold assumptions accurately. AT-001 treats distance-9/11 experiments as informative tests, not an automatic or universal confirmation rule. No instance, assessment, pressure state, verification stage, open question, or claim was changed." },
    { id: "M-012", date: "2026-09-26", field: "instance_appended", from: "IN-006", to: "IN-007", note: "Normal Record Review of RR-2026-09-05-01 admitted Berthusen et al., arXiv:2609.03194v1, as distinct trapped-ion architecture evidence. The reported logical QEC cycle, Clifford benchmark and surface-code interface do not establish increasing-distance suppression, independent replication or useful fault-tolerant economics. AS-003 remains derived current assessment at RESOLVING / VS-04. The retrospectively incomplete Scout stated 4 September as first public date; arXiv v1 was submitted 2 September 2026, inside its review window." },
    { id: "M-011", date: "2026-09-21", field: "assessment_order_corrected", from: "AS-003 → AS-002 → AS-001", to: "AS-001 → AS-002 → AS-003", note: "Structural chronology repair: restored assessments[] to the canonical oldest-first order after AS-002 and AS-003 were mistakenly prepended on 2026-09-18. Existing assessment objects, dates, wording, pressure states, verification stages and evidentiary judgements are unchanged. This correction restores AS-003 as the derived current assessment and makes the repair explicit in the append-only mutation history." },
    { id: "M-010", date: "2026-09-18", field: "instance_appended", from: "IN-005", to: "IN-006", note: "Normal Record Review admitted Sivak et al., Nature 655 (2026), reinforcement-learning control of QEC. Experimental Willow results show continuous syndrome-driven control improves logical stability against injected drift and supports uninterrupted calibration; distance-15 evidence is simulation only. AS-003 appended; RESOLVING / VS-04 retained. RM-001 and AT-001 consistency wording completed from the authorised LPR-001-D20 correction and updated to reflect that drift mitigation does not remove correlated-error floors or satisfy the outcome-based attractor." },
    { id: "M-009", date: "2026-09-18", field: "provenance_repair", from: "LPR-001-D20 discrepancies_found / pending", to: "LPR-001-D20 pass_after_correction / completed", note: "Bounded correction executed for IN-001 through IN-005. Corrected the 2023 distance-3/5 numerical representation; corrected Willow suppression semantics to Λ per distance increase of two; separated Microsoft/Quantinuum trapped-ion evidence from Microsoft's topological programme; replaced unsupported generic logical-gate rates; and corrected the correlated-error-floor representation using observed repetition-code floors. Structured sources[] added to all repaired instances. AS-001 preserved append-only and corrective AS-002 appended; RM-001, AT-001 and lineage brought into consistency. Pressure State RESOLVING and Verification Stage VS-04 retained. The 2026 reinforcement-learning QEC candidate remains outside this repair for Normal Record Review." },
    { id: "M-008", date: "2026-09-18", field: "provenance_review", from: "—", to: "LPR-001-D20 REVIEW REQUIRED", note: "LPR-001-D20 audited all five evidence instances. Material representation or attribution discrepancies require bounded correction in IN-001 through IN-005; no evidentiary prose was silently repaired and no structured sources were added where the representation itself requires correction. New 2026 QEC work was screened separately and not admitted through LPR-001." },
    {"id":"M-007","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, AT-001 from FR_QE_0008_error_correction_scaling.html (Drive file 1b6n8s4qZ8FE08RIymo-4e-kpFvQ49Nyz). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
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

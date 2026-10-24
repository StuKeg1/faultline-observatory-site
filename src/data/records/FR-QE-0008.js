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
  lastProvenanceReview: "2026-10-20",
  provenanceReviewId: "LPR-001-D56",
  provenanceOutcome: "verified",
  provenanceRepairStatus: "not_required",

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
      relationship: {"type":"shared_publication","relatedInstanceId":"IN-005","sharedSourceDoi":"10.1038/s41586-022-05434-1","note":"Shares the 2023 Google publication with IN-005. This entry discusses surface-code scaling; IN-005 uses its repetition-code error-floor evidence. These are different aspects of one paper.","reverseNote":"Shares the 2023 Google publication with IN-002. That entry discusses surface-code scaling; this entry uses its repetition-code error-floor evidence. Sharing a paper does not make these the same measurement."},
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
      relationship: {"type":"shared_publication","relatedInstanceId":"IN-005","sharedSourceDoi":"10.1038/s41586-024-08449-y","note":"Shares the Willow publication with IN-005. This entry discusses surface-code scaling; IN-005 uses the paper’s repetition-code error-floor evidence. These are different aspects of one paper.","reverseNote":"Shares the Willow publication with IN-003. That entry discusses surface-code scaling; this entry uses its repetition-code error-floor evidence. Sharing a paper does not make these the same measurement."},
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
    {
      id: "IN-008",
      qualifiedEvent: "Distributed surface-code lattice surgery — loss-tolerant fusion-network protocols",
      description: "Burt et al. (arXiv:2610.01923v1) use ZX-calculus transformations to construct hybrid syndrome-extraction protocols for distributed rotated-surface-code lattice surgery over photonic links. Several protocols attain a 50% interface-erasure threshold when local noise is absent. Hybrid geometries increase the merge-observable interface distance from d+1 to 2d+1 and restore the perpendicular-observable interface distance from floor((d+1)/2) to d, relative to a straight Bell-pair interface. The study maps thresholds under resource-state errors, local circuit noise and fusion erasure; at circuit and resource-state error rates of 10^-3, local errors largely mask the interface-distance advantage, while improvements become clearer at local noise of 10^-4 and below. This is protocol-design and numerical threshold evidence for distributed QEC, not an experimental demonstration of logical-error suppression as processor scale increases. It does not change the governing scale-up evidence or resolve FR-QE-0008.",
      vectors: ["neutral--distributed-protocol-design-without-system-scale-validation"],
      date: "2026-10-01",
      sourceReference: "Burt et al., arXiv:2610.01923v1 (2026), primary preprint",
      sources: [
        { citation: "Burt et al., ‘Loss-tolerant distributed lattice surgery using fusion networks’, arXiv:2610.01923v1 (2026)", url: "https://arxiv.org/abs/2610.01923v1", locator: "Abstract; hybrid protocols, interface-erasure thresholds and local-noise simulations" },
      ],
    },
    {
      id: "IN-009",
      qualifiedEvent: "Quantinuum Helios — below-threshold colour-code scaling through distance 7",
      description: "Lavasani et al. (arXiv:2610.24077v1) experimentally demonstrate below-threshold triangular colour-code operation at distances 3, 5 and 7 on Quantinuum's Helios trapped-ion processor. Logical memory error falls to 5 (+4/−2) × 10⁻⁶ per syndrome-extraction round at distance 7, with an experimental suppression factor Λ = 12 (+3/−2) for each successive increase in code distance. The study also reports below-threshold scaling for two-qubit Clifford randomized-benchmarking circuits from distance 3 to 5, reaching 7 (+3/−3) × 10⁻⁵ error per logical two-qubit Clifford at distance 5 with Λ = 9 (+8/−3). This is direct increasing-distance hardware evidence on a trapped-ion architecture and materially strengthens the cross-platform scaling case beyond IN-007's fixed-code Helix benchmarks. It does not establish independent replication of the Quantinuum result, scaling beyond distance 7, below-threshold magic-state preparation, sustained universal fault-tolerant computation, or application-scale resource economics; extrapolations to larger processors remain projections.",
      vectors: ["supportive--trapped-ion-below-threshold-distance-scaling-through-d7"],
      date: "2026-10-16",
      sourceReference: "Lavasani et al., arXiv:2610.24077v1 (2026), primary preprint",
      sources: [
        { citation: "Lavasani et al., ‘Quantum error correction well below the color code threshold’, arXiv:2610.24077v1 (2026)", url: "https://arxiv.org/abs/2610.24077v1", locator: "Abstract; colour-code memory scaling at d=3,5,7 and logical two-qubit Clifford scaling at d=3,5" },
      ],
    },
    {
      "id": "IN-010",
      "qualifiedEvent": "NeST — simulated qLDPC error suppression with silicon spin-shuttling constraints",
      "description": "Siegel proposes Nested Shuttling Tracks (NeST), a silicon spin-qubit architecture that implements high-rate lifted-product qLDPC checks through coordinated electron-shuttling motions. A code search returns 20%-rate mitten codes up to [[1400,280,≤28]]; circuit-level simulations including shuttling dephasing report thresholds above 10⁻³ and stabiliser cycles below 50 microseconds under the stated timing and noise assumptions. The estimated 10⁻¹⁴ logical error probability per qubit per round for the largest code is an extrapolation that assumes tenfold better shuttling than early demonstrations and other physical errors of 0.1%. This is bounded architecture and simulation evidence about suppression versus physical overhead, not measured logical-qubit scale-up, demonstrated cycle time, or universal fault-tolerant computation. The primary preprint is authored by the architecture proposer at Quantum Motion. Physical transport, noise, decoding and larger full-circuit operation still require hardware validation. It adds a model-level pathway within the existing record without changing the current assessment or satisfying its outcome-based scaling attractor.",
      "vectors": [
        "NEUTRAL"
      ],
      "date": "2026-10-20",
      "sources": [
        {
          "citation": "Siegel, A. (2026), NeST: ultra-high-rate qLDPC codes with sub-50μs stabiliser cycles via spin shuttling, arXiv:2610.28538v1.",
          "url": "https://arxiv.org/abs/2610.28538v1",
          "doi": "10.48550/arXiv.2610.28538",
          "locator": "Sections III–VI; circuit-level noise simulations and extrapolation assumptions; submitted 20 October 2026. Primary preprint by architecture proposer, Quantum Motion."
        }
      ]
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
    },
    {
      "id": "AS-004",
      "date": "2026-10-12",
      "pressureState": "resolving",
      "verificationStage": "VS-04",
      "summary": "IN-007 strengthens the integrated trapped-ion architecture case through repeated correction, logical Clifford operations and a heterogeneous-code interface that outperform their unencoded baselines without postselection. Its source also reports a bounded logical-memory improvement under concatenation from the [[10,2,3]] code to [[20,2,6]] C4-Helix. That comparison is experimental evidence relevant to scaling, but does not establish reproducible suppression across a broad size range, a universal fault-tolerant workload, larger-distance durability or application-scale resource economics. IN-008 adds protocol-design and numerical evidence for distributed lattice surgery: the 50% interface-erasure threshold assumes absent local noise, and local errors can mask the interface-distance benefit. It supplies no experimental system-scale validation. These additions leave the governing balance RESOLVING / VS-04: measured below-threshold suppression and operational components support convergence, while correlated floors, long-runtime and full-circuit reliability and useful scale-up remain unresolved. Resolving is not resolved; neither instance satisfies AT-001 or closes the recorded questions.",
      "assessorNote": "Reassessment of IN-007 admitted 2026-09-26 and IN-008 admitted 2026-10-03 against the complete current record. Primary preprints arXiv:2609.03194v1 and arXiv:2610.01923v1 reviewed 2026-10-12. Helios is first-party Quantinuum evidence, not independent replication; simulated improvements and distributed thresholds remain distinguished from hardware measurements. Same-state reaffirmation; no evidence or prior assessment rewritten.",
      "sources": [
        {
          "citation": "Berthusen et al., Experimental validation of a compact fault-tolerant architecture for trapped ions, arXiv:2609.03194v1 (2026).",
          "url": "https://arxiv.org/abs/2609.03194v1",
          "locator": "Introduction; experimental memory/Clifford/interface results; Discussion and Outlook"
        },
        {
          "citation": "Burt et al., Loss-tolerant distributed lattice surgery using fusion networks, arXiv:2610.01923v1 (2026).",
          "url": "https://arxiv.org/abs/2610.01923v1",
          "locator": "Abstract; local-noise simulations and threshold assumptions"
        }
      ]
    },
    {
      id: "AS-005",
      date: "2026-10-20",
      pressureState: "resolving",
      verificationStage: "VS-04",
      summary: "IN-009 materially strengthens the central scaling evidence by demonstrating below-threshold colour-code operation on Quantinuum Helios across distances 3, 5 and 7, with logical-memory suppression Λ = 12 (+3/−2) per successive distance increase and a distance-7 logical error of 5 (+4/−2) × 10⁻⁶ per syndrome-extraction round. Two-qubit Clifford benchmarking also shows below-threshold scaling from distance 3 to 5. Unlike IN-007's integrated fixed-code Helix benchmarks, IN-009 directly measures an increasing-distance suppression curve on trapped-ion hardware, adding a second hardware modality and code family to the record's measured scaling evidence. The record remains RESOLVING / VS-04 rather than resolving completely: this is first-party Quantinuum evidence, reaches distance 7 rather than application-scale code sizes, and does not demonstrate below-threshold magic-state preparation, long-runtime universal computation, independent replication, or application-scale resource economics. The new result strengthens convergence without satisfying the full outcome-based AT-001.",
      assessorNote: "Normal Record Review of Lavasani et al., arXiv:2610.24077v1, submitted 16 October 2026 and publicly highlighted by Quantinuum on 19 October. Admitted as IN-009. Primary preprint controls the scientific representation; company resource projections are not admitted as measured scale-up evidence. Same-state reaffirmation; no verification-stage transition.",
      sources: [
        { citation: "Lavasani et al., ‘Quantum error correction well below the color code threshold’, arXiv:2610.24077v1 (2026)", url: "https://arxiv.org/abs/2610.24077v1", locator: "Abstract; experimental distance-scaling and logical-Clifford results" },
      ],
    },
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
    { year: "2024–25", text: "Willow demonstrates below-threshold surface-code memories through distance 7, with Λ≈2.14 per distance increase of two. Microsoft/Quantinuum provide separate trapped-ion logical-error reduction. Willow high-distance repetition codes reveal an apparent ~10⁻¹⁰ correlated-error floor. Claim remains RESOLVING." },
    { year: "2026", text: "Quantinuum Helios demonstrates below-threshold triangular colour-code memory scaling at distances 3, 5 and 7, with Λ≈12 per successive distance increase and 5×10⁻⁶ logical error per syndrome-extraction round at distance 7; two-qubit Clifford scaling is also measured from distance 3 to 5. This materially broadens measured scaling evidence across hardware modalities and code families while larger-scale, long-runtime universal fault tolerance remains open." }
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
    {
      "id": "M-020",
      "date": "2026-10-24",
      "field": "instance_appended",
      "from": "IN-009",
      "to": "IN-010",
      "note": "Approved Scout flag 2026-10-24-01 implemented after explicit all-approved-flags corpus authorisation. NeST is architecture/simulation evidence only; extrapolation and hardware-validation limits retained. FR-QE-0008 only; no separate FR-QE-0004 instance. AS-005, RESOLVING / VS-04, mechanisms and open questions unchanged. Receipt: docs/reviews/SCOUT-2026-10-24-APPROVED-INSTANCES.md."
    },
    { id: "M-019", date: "2026-10-20", field: "assessment_issued", from: "AS-004", to: "AS-005", note: "Normal Record Review of IN-009 reaffirms RESOLVING / VS-04. Helios colour-code distance scaling materially strengthens cross-platform evidence but does not satisfy the full outcome-based attractor. No Pressure State or Verification Stage transition." },
    { id: "M-018", date: "2026-10-20", field: "instance_appended", from: "IN-008", to: "IN-009", note: "Normal Record Review admitted Lavasani et al., arXiv:2610.24077v1, as direct trapped-ion below-threshold distance-scaling evidence. Experimental colour-code memory scaling spans d=3,5,7 and logical two-qubit Clifford scaling spans d=3,5. Larger-scale resource projections and unmeasured universal-computation claims are excluded." },
    { id: "M-017", date: "2026-10-20", field: "provenance_review", from: "LPR-001-D20", to: "LPR-001-D56", note: "Second-cycle Legacy Provenance Review completed as PASS across all eight existing evidence instances. Underlying sources and claim representation verified; existing structured provenance is sufficient and no unverifiable attribution was introduced. No factual, interpretive, attribution, or verification-stage discrepancy identified. The 19 October 2026 Quantinuum Helios colour-code result was identified as genuinely new evidence relevant to logical-error scaling and is held outside LPR-001 for Normal Record Review. Canonical outcome verified / not_required; Pressure State and Verification Stage unchanged." },
    {"id":"M-016","date":"2026-10-19","field":"reference_corrected","from":"Shared citations not explained in the evidence list","to":"Source-specific reciprocal notices on IN-002, IN-003","note":"Operator-authorised corpus reading audit Step 5A / R04. Label exact shared publications/reports after checking their evidential roles. Shared reporting does not by itself determine experimental independence. No sources, scientific wording, vectors, counts, assessments, states, stages, dates, review markers or prior mutations changed. Scope, primary-source ledger and exact field receipt: docs/reviews/SHARED-SOURCE-LABELS-STEP-5A-2026-10-19.md and companion .json."},
    {"id": "M-015", "date": "2026-10-12", "field": "assessment_issued", "from": "AS-003", "to": "AS-004", "note": "Operator-authorised evidence-gap reassessment considers IN-007 admitted 2026-09-26 and IN-008 admitted 2026-10-03. AS-004 appended at RESOLVING / VS-04; current posture reaffirmed. No prior assessment, claim, evidence, mechanism, lineage, open question or provenance-review metadata changed. Review receipt: docs/reviews/EVIDENCE-GAP-REASSESSMENT-2026-10-12.md."},
    { id: "M-014", date: "2026-10-03", field: "instance_appended", from: "IN-007", to: "IN-008", note: "Normal Record Review of RR-2026-10-03-01 admitted Burt et al., arXiv:2610.01923v1, as distinct protocol-design evidence for loss-tolerant distributed lattice surgery. The 50% interface-erasure result assumes absent local noise; local errors mask the interface-distance advantage at 10^-3 circuit/resource error and gains strengthen at lower noise. This is not an experimental system-scale suppression result. AS-003 remains current; FR-QE-0008 stays RESOLVING / VS-04. No open question or claim change." },
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

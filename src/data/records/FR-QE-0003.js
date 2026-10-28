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
  lastProvenanceReview: "2026-10-28",
  provenanceReviewId: "LPR-001-D64",
  provenanceOutcome: "discrepancies_found",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Fault-tolerant logical qubits can be demonstrated with logical error rates that improve as error-correcting code distance increases.",
    shortLabel: "Fault-Tolerant Logical Qubits — Error Rate Scaling with Code Distance",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      evidenceStatus: {"kind": "corrected", "reviewId": "LPR-001-D64", "mutationId": "M-018"},
      qualifiedEvent: "Google — Exponential suppression of bit or phase errors with cyclic error correction",
      description: "Google Quantum AI demonstrated exponential suppression of bit-flip or phase-flip logical errors using one-dimensional repetition codes on its Sycamore superconducting processor. Repetition-code distances ranged from d=3 to d=11, corresponding to 5–21 physical qubits, with more than 100-fold reduction in logical error per round and stability over 50 correction rounds. The same study separately demonstrated error detection using a distance-2 surface code, but did not demonstrate increasing-distance suppression of both error types simultaneously. The result established an important experimental prerequisite for scalable fault tolerance, not full fault-tolerant operation.",
      vectors: ["supportive--partial-signature"],
      date: "2021",
      sources: [{ citation: "Google Quantum AI and Collaborators. Exponential suppression of bit or phase errors with cyclic error correction. Nature 595, 383–387 (2021).", url: "https://www.nature.com/articles/s41586-021-03588-y", doi: "10.1038/s41586-021-03588-y" }],
    },
    {
      id: "IN-002",
      evidenceStatus: {"kind": "corrected", "reviewId": "LPR-001-D64", "mutationId": "M-019"},
      qualifiedEvent: "Quantinuum — fault-tolerant logical qubit operations on trapped-ion hardware",
      description: "Quantinuum demonstrated fault-tolerant logical entangling-gate implementations on trapped-ion hardware in 2022, including experiments using the [[7,1,3]] colour code. The study reported logical state-preparation-and-measurement (SPAM) fidelities exceeding corresponding average physical-qubit SPAM fidelities for specified preparations. These measurements do not establish that logical-gate error rates generally fell below physical-gate error rates. The experiment demonstrated important fault-tolerant circuit primitives at fixed, small code distance, but did not test whether logical error rates improve as code distance increases. It therefore provides indirect, architecture-diverse support for the broader fault-tolerance pathway rather than direct confirmation of this record\'s code-distance-scaling claim.",
      vectors: ["supportive--fault-tolerant-circuit-primitives"],
      date: "2022",
      sources: [{ citation: "Ryan-Anderson et al. Implementing Fault-tolerant Entangling Gates on the Five-qubit Code and the Color Code (2022), arXiv:2208.01863.", url: "https://arxiv.org/abs/2208.01863" }],
    },
    {
      id: "IN-003",
      evidenceStatus: {"kind": "corrected", "reviewId": "LPR-001-D64", "mutationId": "M-020"},
      qualifiedEvent: "Google — Suppressing quantum errors by scaling a surface code logical qubit",
      description: "Google Quantum AI published a Nature study in 2023 demonstrating that increasing the distance of a superconducting surface-code logical qubit from d=3 (17 physical qubits) to d=5 (49 physical qubits) produced a modest improvement in logical error performance on a 72-qubit processor. The measured logical error per correction cycle decreased from 3.028% ± 0.023% to 2.914% ± 0.016%, approximately a 4% relative reduction. Unlike repetition codes that protect against one error type, the surface-code experiment addressed both bit-flip and phase-flip errors. This provided direct experimental evidence that increasing surface-code distance could improve logical-qubit performance. However, the improvement was small, the system remained near the error-correction threshold, and sustained below-threshold scaling was not established. Distance-7 surface-code scaling and substantially stronger error suppression were demonstrated in later Willow research, not in this 2023 experiment.",
      vectors: ["supportive--primary-signature-demonstrated"],
      date: "2023",
      sources: [{ citation: "Google Quantum AI and Collaborators. Suppressing quantum errors by scaling a surface code logical qubit. Nature 614, 676–681 (2023).", url: "https://www.nature.com/articles/s41586-022-05434-1", doi: "10.1038/s41586-022-05434-1" }],
    },
    {
      id: "IN-004",
      evidenceStatus: {"kind": "corrected", "reviewId": "LPR-001-D64", "mutationId": "M-021"},
      qualifiedEvent: "Microsoft / Quantinuum — encoded logical circuits outperform physical circuits in selected tests",
      description: "Microsoft and Quantinuum reported a 2024 trapped-ion quantum error-correction experiment combining Quantinuum\'s H2 processor with Microsoft\'s logical-qubit encoding, error-detection and correction methods. The researchers encoded four logical qubits using 30 physical qubits and demonstrated substantial improvements in the reliability of selected logical circuits. For Bell-state preparation, the reported logical circuit error was approximately 10⁻⁵, compared with approximately 8 × 10⁻³ for the corresponding physical circuit, representing an approximately 800-fold improvement. This result relied in part on error detection and post-selection, and must not be interpreted as a generic per-two-qubit-logical-gate error rate. The experiment also demonstrated repeated error correction and active syndrome extraction. It provided important evidence that encoded logical circuits can outperform corresponding physical implementations, but did not establish increasing-code-distance scaling, universal fault-tolerant computation or a general error threshold sufficient for practical applications. The result used conventional trapped-ion hardware rather than Microsoft\'s proposed topological qubits.",
      vectors: ["supportive--selected-logical-circuit-improvement"],
      date: "2024",
      sources: [{ citation: "da Silva et al. Demonstration of logical qubits and repeated error correction with better-than-physical error rates (2024).", url: "https://s7d9.scene7.com/is/content/quantum/LQ_ErrorCorrectionpdf" }],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Google Willow — below-threshold quantum error correction at scale",
      description: "Google releases the Willow chip (105 qubits) and publishes results demonstrating below-threshold error correction: logical error rates decrease exponentially with code distance across d=3, d=5, and d=7 surface codes, with performance improving faster than the overhead of additional physical qubits. This is the first demonstration of below-threshold operation — the regime where adding more qubits to the code actively reduces logical error rates, making the system scalable in principle. Note: FR-QE-0001 logged the Willow chip's quantum simulation result as a separate instance relevant to the quantum advantage claim. The error correction result logged here is a distinct measurement from the same hardware, relevant to this record's specific claim.",
      vectors: ["supportive--below-threshold-operation"],
      date: "2024",
      sources: [
        {
          citation: "Google Quantum AI and Collaborators. Quantum error correction below the surface code threshold. Nature 638, 920–926 (2025); published online 9 December 2024.",
          url: "https://www.nature.com/articles/s41586-024-08449-y",
          doi: "10.1038/s41586-024-08449-y",
        },
      ],
    },
    {
      id: "IN-006",
      relationship: {"type":"shared_publication","relatedInstanceId":"IN-005","sharedSourceDoi":"10.1038/s41586-024-08449-y","note":"Shares the Willow publication with IN-005. These entries discuss the same published result at different review points, not an additional experiment.","reverseNote":"Shares the Willow publication with IN-006. Its later review entry does not establish an additional experiment."},
      qualifiedEvent: "Google Willow — peer-reviewed below-threshold result leaves d=11+ unresolved",
      description: "The Willow below-threshold result is independently verifiable as a Nature/arXiv publication and materially strengthens the record's core empirical signature: the larger distance-7 logical memory suppresses error relative to distance-5, reaches approximately 0.143% error per cycle, and exceeds break-even against the best physical-qubit lifetime. The same evidence also defines the remaining constraint. The reported surface-code memories are still distance-5 and distance-7, with real-time decoding demonstrated at distance-5; the record's own OQ-001 asks whether below-threshold scaling holds at d=11 and above. No verified d=11+ below-threshold surface-code result was found in this review. This instance therefore supports sustained escalation but does not close the resolution bottleneck.",
      vectors: ["supportive--peer-reviewed-below-threshold", "constraint--d11-plus-unresolved"],
      date: "2024-12-09",
      sources: [
        {
          citation: "Google Quantum AI and Collaborators. Quantum error correction below the surface code threshold. Nature 638, 920–926 (2025); published online 9 December 2024.",
          url: "https://www.nature.com/articles/s41586-024-08449-y",
          doi: "10.1038/s41586-024-08449-y",
        },
      ],
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
      description: "Physical qubit error floor. Surface code performance depends on physical qubit error rates remaining below the fault-tolerance threshold (approximately 1% for surface codes). Current superconducting qubit systems operate near this threshold; trapped-ion systems are below it. Any degradation in physical qubit performance with increased system size — due to crosstalk, control errors, or fabrication variability — could prevent the scaling behaviour from holding at larger code distances. This mechanism has not produced contesting evidence in the current evidence trail but is the primary physical constraint on extrapolation.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Demonstrated distance versus required distance. The claim's empirical signature has been demonstrated at code distances d=3 to d=7. Practical fault-tolerant computation for useful algorithms requires code distances in the range d=20 to d=50, implying physical qubit counts of thousands to tens of thousands per logical qubit. The scaling behaviour observed at small distance must hold at large distance for the claim to have full practical force. The claim as stated does not require large-distance demonstration — it requires demonstration of the behaviour — and that has been achieved. The bottleneck is between the claim as stated and its practical consequence, not within the claim itself.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Below-threshold operation as resolution point. The below-threshold result in INST-005 (Google Willow) represents a qualitative threshold that, if confirmed at increasing code distances, would provide material evidence for a governed assessment of whether the claim has reached resolution. Below-threshold operation means the scaling behaviour is not merely demonstrated but is self-reinforcing: each additional qubit added to the code actively improves logical error rates. If this holds at d=11 and d=15, the claim trajectory moves toward RESOLVING. The attractor is the below-threshold confirmation at larger distances, which is the next expected evidence event in this record.",
    }
  ],

  lineage: {
    items: [
    { year: "1995–96", text: "Fault tolerance theory established. Shor (1995) and Steane (1996) independently propose quantum error correcting codes. Aharonov and Ben-Or (1997) prove the threshold theorem: if physical error rates are below a threshold, arbitrarily long quantum computation is possible. The claim becomes theoretically well-founded; the empirical question becomes whether physical systems can reach and stay below threshold." },
    { year: "1998–2012", text: "Small-scale demonstrations. Multiple groups demonstrate quantum error detection and correction in small systems (2–7 qubits) across NMR, trapped ion, and photonic platforms. Error rates are above threshold; demonstrations are proof-of-principle rather than performance milestones. The claim is in an EMERGING state throughout this period." },
    { year: "2012–20", text: "Superconducting qubit scaling. Google, IBM, and others scale superconducting systems to tens of qubits. Physical error rates approach but do not consistently reach below-threshold operation. The engineering challenge shifts from demonstrating error correction to demonstrating that adding qubits helps rather than hurts." },
    { year: "2021–23", text: "Early distance-scaling evidence. Google's 2021 Nature paper demonstrated suppression of one error type using repetition codes at d=3–11, not surface-code distance scaling. The 2023 Nature surface-code study compared d=3 and d=5, showing a modest approximately 4% reduction in logical error per cycle while addressing both X and Z errors. Stronger sustained below-threshold surface-code scaling was established in later Willow research. Historical AS-001 retains its original 2024 interpretation; see M-022 for the explicit correction notice." },
    { year: "2024", text: "Below-threshold surface-code scaling and complementary circuit-level results. Google Willow demonstrated below-threshold surface-code memory scaling across d=3, d=5 and d=7. Separately, Microsoft/Quantinuum reported improved reliability in selected encoded trapped-ion circuits, including post-selected Bell-state preparation; that experiment did not measure scaling with increasing code distance or establish a generic per-gate error threshold. These are distinct experimental signatures." }
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

  realizationNotes: [
    {
      id: "REN-001",
      note: "Realization currently depends on large-code-distance operation with stable cryogenic control, real-time decoding, fabrication yield, and scalable packaging. These lie outside the current small-distance below-threshold evidence trajectory.",
      conflation: null,
      raisedDate: "2026-07-08",
      status: "open",
      closedDate: null,
      closedNote: null,
    }
  ],

  mutationLog: [
    { id: "M-022", date: "2026-10-28", field: "historical_assessment_consistency_correction", from: "AS-001 historical interpretation and 2021–24 lineage predate source-level corrections", to: "Historical AS-001 retained verbatim; corrected lineage and explicit qualification", note: "Editorial correction notice for AS-001 (2024-01-15), preserved verbatim as a historical decision, not a currently source-faithful account of every experiment: IN-002 below-physical error wording refers to selected SPAM/circuit performance, not general logical-gate error advantage; IN-003 2023 d=3/5 showed approximately 4% improvement, not d=7 scaling or sustained below-threshold operation. The latter was demonstrated by Willow (IN-005/IN-006). Corrected 2021–23 and 2024 lineage. AS-002 remains consistent; no reassessment, State or Stage change. Approved source-level repairs M-018–M-021 complete. D15/D64 provenance repair completed; historical provenanceOutcome discrepancies_found remains unchanged." },
    { id: "M-021", date: "2026-10-28", field: "evidence_correction", from: "IN-004 pending_correction", to: "IN-004 corrected", note: "Operator-approved D15/D64 bounded correction: replace unsupported generic per-two-qubit-logical-gate error and threshold claim with conditional selected-circuit Bell-state result; correct title and vector; attach da Silva et al. primary research. All four instance-level corrections now made; overall repair remains pending historical assessment consistency review. No historical assessments changed." },
    { id: "M-020", date: "2026-10-28", field: "evidence_correction", from: "IN-003 pending_correction", to: "IN-003 corrected", note: "Operator-approved D15/D64 correction: 2023 Google surface-code comparison d=3 versus d=5 with approximately 4% logical-error improvement, not d=7 or halving. Nature DOI added. Retained supportive vector; AS-001 historical interpretation preserved for separately governed consistency review. IN-004 and overall repair status remain pending." },
    { id: "M-019", date: "2026-10-28", field: "evidence_correction", from: "IN-002 pending_correction", to: "IN-002 corrected", note: "Operator-approved D15/D64 bounded correction: attribute 2022 Quantinuum entangling-gate experiment to Ryan-Anderson et al. arXiv:2208.01863; distinguish SPAM fidelity from generic gate-error claims and replace overstated evidence vector. IN-003 and IN-004 remain pending; historical assessments and overall provenance status unchanged." },
    { id: "M-018", date: "2026-10-28", field: "evidence_correction", from: "IN-001 pending_correction", to: "IN-001 corrected", note: "Operator-approved bounded D15/D64 correction: replace erroneous surface-code/distance representation with 2021 repetition-code d=3–11 (5–21 qubits) and separate d=2 surface-code test; add verified Nature DOI. IN-002 through IN-004 remain pending. Historical assessments and governed overall repair status unchanged." },
    { id: "M-017", date: "2026-10-28", field: "provenance_review", from: "LPR-001-D15", to: "LPR-001-D64", note: "Second-cycle Legacy Provenance Review completed as REVIEW REQUIRED. All six existing evidence instances checked against underlying research. IN-005 and IN-006 remain source-faithful with structured Nature provenance already attached; no enrichment or unverifiable attribution. Four unresolved material representation discrepancies on IN-001 through IN-004, originally recorded by D15/M-013 and explicitly pending under M-014, remain open: 2021 repetition-code versus surface-code/distance confusion; 2022 trapped-ion circuit/SPAM fidelity versus gate-error and study attribution; 2023 d=3/5 approximately 4% improvement versus asserted d=3/5/7 halving; 2024 Microsoft/Quantinuum circuit-level versus generic per-two-qubit-gate 10^-4 metric and threshold extrapolation. No historical instance, assessment, Pressure State, Verification Stage, source attribution, or evidence status changed. Cross-record Normal Record Review candidate: Quantinuum Helios colour-code scaling arXiv:2610.24077 (already logged in FR-QE-0008); not admitted here. Outcome discrepancies_found / pending; user approval required for bounded corrections." },
    {"id":"M-016","date":"2026-10-24","field":"editorial_correction","from":"ATTRACTOR wording assigned a governed institutional consequence directly to the future evidence event","to":"ATTRACTOR wording preserves the evidence route while reserving State, Stage, verdict or reopening consequences to governed assessment","note":"Operator-authorised A4 institutional-authority consistency repair. Correct AT-001 explanatory wording only; no new evidence, scientific threshold, evidence target, Pressure State, Verification Stage, assessment or ATTRACTOR identity changed. This repair is independent of the closed ATTRACTOR taxonomy v2 FAIL. Receipt: docs/reviews/A4-INSTITUTIONAL-AUTHORITY-CONSISTENCY-REPAIR-2026-10-24.json."},
    {"id":"M-015","date":"2026-10-19","field":"reference_corrected","from":"Shared citations not explained in the evidence list","to":"Source-specific reciprocal notices on IN-006","note":"Operator-authorised corpus reading audit Step 5A / R04. Label exact shared publications/reports after checking their evidential roles. Shared reporting does not by itself determine experimental independence. No sources, scientific wording, vectors, counts, assessments, states, stages, dates, review markers or prior mutations changed. Scope, primary-source ledger and exact field receipt: docs/reviews/SHARED-SOURCE-LABELS-STEP-5A-2026-10-19.md and companion .json."},
    {"id": "M-014", "date": "2026-10-19", "field": "reference_corrected", "from": "Existing source-review limitation not fully exposed in evidence-list status", "to": "Explicit reviewed evidence status on IN-001, IN-002, IN-003, IN-004", "note": "Operator-authorised corpus reading audit Batch 3 / R02. Render the existing entry-level review disposition from explicit status metadata linked to its retained review and mutation. A withdrawn attribution is not a retracted publication; missing sources and Partial polarity do not automatically determine status. Preserve all original titles, descriptions, citations, counts, assessments, review markers and prior mutations. No substitute source, new evidence or reassessment. Receipt: docs/reviews/EVIDENCE-STATUS-BATCH-3-2026-10-19.md."},
    { id: "M-013", date: "2026-09-13", field: "provenance_review", from: "—", to: "LPR-001-D15", note: "Legacy provenance review completed. All six evidence instances examined. IN-005 and IN-006 were cleanly provenance-enriched with the peer-reviewed Willow Nature source. Four material discrepancy candidates require governed correction before provenance can be attached without endorsing legacy wording. IN-001 incorrectly describes the 2021 repetition-code experiment as a surface-code implementation and confuses physical-qubit count with code distance: the experiment used repetition codes from d=3 to d=11, corresponding to 5 to 21 qubits, while the surface-code test was only d=2. IN-002 appears to conflate Quantinuum/Honeywell's 2021 real-time [[7,1,3]] colour-code QEC result with later fault-tolerant gate demonstrations; the 2021 experiment reported logical SPAM below physical SPAM but explicitly had not reached the overall error-correction threshold, so the present 2022 gate-level below-physical claim is not source-faithful as written. IN-003 overstates the 2023 Google Nature result: that experiment compared d=3 with d=5 on a 72-qubit device and achieved only a modest roughly 4% relative logical-error reduction, not d=3/d=5/d=7 with roughly halving at each step; d=7 and >2x suppression arrived with Willow. IN-004 misstates the Microsoft/Quantinuum 2024 result as approximately 10^-4 per two-qubit logical gate. The contemporaneous work reported circuit-level logical error reductions, including Bell-state preparation down to about 10^-5 with post-selection and repeated-error-correction comparisons, not a generic per-two-qubit-logical-gate 10^-4 metric; its broader claim that the result was below thresholds generally required for useful FTQC is also not directly established by that source. No historical wording, assessment, pressure state, verification stage, mechanism, lineage, or open question was silently changed. No verified experimental d=11+ below-threshold surface-code result was found. The 28 April 2026 Nature Author Correction to the Willow paper changes figure labelling only and does not alter the evidence interpretation." },
    {"id":"M-012","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:BN-001, mechanisms:AT-001, lineage:1995–96, lineage:1998–2012, lineage:2012–20","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, BN-001, AT-001; lineage 1995–96, 1998–2012, 2012–20 from FR_QE_0003_fault_tolerant_logical_qubits.html (Drive file 15wAwW5oDhl-eLUsK7g82KSR-0wJjufho). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-011", date: "2026-07-08", field: "experimental_annotations_retired", from: "EXPERIMENTAL-ANNOTATIONS-ADDED", to: "RETIRED", note: "Per Stuart's confirmation, the experimentalAnnotations[] pilot container (M-009) is retired and removed from this record. Its content is fully superseded by REN-001 (M-010), which formalises the same observation as a mature FCIF object. Removal carries zero migration cost, as documented in the pilot's own code comment (see FrontierRecord.jsx, record.experimentalAnnotations ?? []); no other record or component depends on this field. This is a deletion of pilot scaffolding, not an editorial correction under GP-001 and not a removal of assessments[] or other append-only evidentiary history." },
    { id: "M-010", date: "2026-07-08", field: "realization_note_added", from: "—", to: "REN-001", note: "realizationNotes field added to schema. REN-001 formalises, as a mature FCIF object, the same observation raised informally in the 2026-07-07 experimentalAnnotations pilot entry (M-009): evidentiary strengthening without corresponding realization progress. The experimentalAnnotations entry is left in place under append-only discipline and not deleted; its retirement, now that a mature schema field covers the same ground, is a decision for Stuart. Corpus Review — Realization Note Candidates (v2)." },
    { id: "M-009", date: "2026-07-07", field: "experimental_annotations_added", from: "—", to: "EXPERIMENTAL-ANNOTATIONS-ADDED", note: "Added experimentalAnnotations[] — a pilot, non-schema-permanent container for editorial observations distinct from assessments[] and assessorNote. Status: experimental, under institutional review. Does not assert a pressureState or verificationStage change; assessments[] and its append-only history are untouched. First entry records that the claim's evidentiary trajectory is strengthening while realization-relevant enabling capabilities (per this record's own BN-001/RM-001) show no corresponding progress. The container and its rendering may be removed in a future release without migration if the pilot does not prove useful." },
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
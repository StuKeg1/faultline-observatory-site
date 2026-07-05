/**
 * FR-QE-0001 — Quantum Advantage
 * Programme: PROG-QE (Quantum Engineering)
 *
 * Constitutional rules enforced by shape:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0001 = {
  id: "FR-QE-0001",
  programme: "PROG-QE",

  claim: {
    statement:
      "A quantum computing system has performed a defined computational task that is " +
      "classically intractable — demonstrating a measurable, reproducible advantage " +
      "over the best known classical algorithm under equivalent resource constraints.",
    shortLabel: "Quantum Advantage",
    openedDate: "2019-10-23",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Google Sycamore 53-qubit random circuit sampling, October 2019",
      vectors: ["scale-up", "replication", "classical-baseline"],
      date: "2019-10-23",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Revised Sycamore benchmark under updated classical simulation protocol, 2023",
      vectors: ["replication", "classical-baseline"],
      date: "2023-02-22",
    },
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2019-10-23",
      pressureState: "published",
      verificationStage: "VS-02",
      summary:
        "Claim published in Nature. Google AI reports 200-second computation on Sycamore " +
        "processor; equivalent classical task estimated at 10,000 years on Summit supercomputer. " +
        "Record opened at publication.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2020-03-10",
      pressureState: "audit",
      verificationStage: "VS-03",
      summary:
        "IBM Research challenge (November 2019) confirmed as technically substantive. " +
        "Classical simulation estimate actively contested. Record advanced to Audit. " +
        "Classical intractability assertion remains unresolved.",
      assessorNote:
        "Sufficient independent technical scrutiny logged to warrant state advance. " +
        "No replication of primary task under identical conditions achieved.",
    },
    {
      id: "AS-003",
      date: "2026-06-06",
      pressureState: "audit",
      verificationStage: "VS-03",
      summary:
        "ES-009 appended (Google/Hartree Centre, 2026). 56-qubit coherence time extension " +
        "reported. Classical simulation debate ongoing. Record remains in Audit. " +
        "No replication under original conditions achieved.",
      assessorNote:
        "New evidence extends coherence envelope but does not resolve classical-intractability " +
        "dispute. Claim scope note added to mutation log.",
    },
  ],

  mechanisms: [
    {
      id: "MEC-001",
      label: "Classical simulation challenge",
      description:
        "Classical algorithms have been progressively optimised since 2019, each reducing " +
        "the estimated simulation time. The original 10,000-year figure has been contested " +
        "but not definitively displaced under the revised 2023 protocol.",
    },
    {
      id: "MEC-002",
      label: "Replication barrier",
      description:
        "Independent groups have not replicated the original task under identical hardware " +
        "and protocol conditions. Claim definition has narrowed in response.",
    },
  ],

  lineage: {
    originatingAssertion: "Arute et al. (2019). Nature 574, 505–510.",
    claimScope: "Random circuit sampling (defined protocol v2.1)",
    priorClaimScope: "Random circuit sampling (unrestricted)",
    scopeNarrowedDate: "2022-11-14",
    relatedRecords: [
      {
        id: "FR-QE-0002",
        relationship: "dependent",
        note: "Fault-tolerant Quantum Computation — requires FR-QE-0001 replication",
      },
      {
        id: "FR-QE-0017",
        relationship: "parallel",
        note: "Photonic Quantum Advantage (Jiuzhang) — alternative physical platform",
      },
      {
        id: "FR-AI-0003",
        relationship: "derivative",
        note: "Quantum ML Advantage — cross-programme dependency",
      },
      {
        id: "FR-QE-0031",
        relationship: "counter",
        note: "Classical Simulation Upper Bound — directly contests primary claim",
      },
    ],
  },

  evidence: [
    {
      id: "ES-009",
      date: "2026-06-06",
      citation:
        "Google / Hartree Centre (2026). 56-qubit coherence extension study. Nature.",
      weight: "primary",
    },
    {
      id: "ES-008",
      date: "2024-01-01",
      citation:
        "Oh et al. (2024). Classical simulation upper bound revision using tensor network " +
        "contraction. Physical Review Letters.",
      weight: "secondary",
    },
    {
      id: "ES-007",
      date: "2023-02-22",
      citation:
        "Morvan et al. (2023). Phase transition in random circuit sampling. " +
        "Google Quantum AI. Nature 614.",
      weight: "primary",
    },
    {
      id: "ES-005",
      date: "2021-07-05",
      citation:
        "Pan & Zhang (2021). Simulating the Sycamore supremacy circuits. arXiv:2103.03074.",
      weight: "contested",
    },
    {
      id: "ES-002",
      date: "2019-11-07",
      citation:
        "Pednault et al. (IBM Research, 2019). Leveraging secondary storage to simulate " +
        "deep 54-qubit Sycamore circuits. arXiv:1910.09534.",
      weight: "counter",
    },
    {
      id: "ES-001",
      date: "2019-10-23",
      citation:
        "Arute et al. (2019). Quantum supremacy using a programmable superconducting " +
        "processor. Nature 574, 505–510.",
      weight: "primary",
    },
  ],

  openQuestions: [
    {
      id: "OQ-001",
      question:
        "Does the revised 2023 Sycamore protocol satisfy the classical-intractability " +
        "criterion under any current classical simulation method?",
      raisedDate: "2023-02-22",
    },
    {
      id: "OQ-002",
      question:
        "What is the minimum independent replication standard required to advance " +
        "this record from Audit to Replication?",
      raisedDate: "2020-03-10",
    },
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first for display; do not edit prior entries.
    //
    // ─── Row 5 Audit Migration (2026-07-05) ──────────────────
    // The 8 entries below (M-032–M-039) migrate this record's legacy
    // pre-schema mutation vocabulary (M-001–M-031, preserved verbatim below)
    // into current taxonomy field names, per Policy §7 row 5 / the Row 5
    // Audit decision to migrate the record rather than build classifier-side
    // translation rules for a single record's legacy shape.
    //
    // Each entry's `date` is the TRUE date of the underlying event (matching
    // the corresponding assessment or evidence date), not today's date —
    // the mutation log records when things happened, not when they were
    // logged. Each note discloses that the entry was authored during this
    // migration and states which legacy entry (if any) it restates. The
    // legacy entries are NOT edited, removed, or renumbered; this is a
    // pure addition.
    //
    // M-039 is the overarching migration marker, dated to the actual
    // migration action (today). M-032–M-038 restate specific legacy events.
    // M-037 is NOT a translation — AS-003 had no mutation-log entry at all
    // before this migration; it is a completeness fix, flagged as such.
    {
      id: "M-039",
      date: "2026-07-05",
      field: "legacy_vocabulary_migrated",
      from: "record_state / claim_scope / classical_baseline_note / evidence_count",
      to: "assessment_issued / claim_scope_narrowed / instance_appended",
      note:
        "Row 5 Audit (2026-07-05): this record's pre-schema mutation vocabulary " +
        "(M-001, M-004, M-009, M-021, M-030, M-031) has been restated below in current " +
        "taxonomy field names (M-032–M-038). Legacy entries are preserved unedited. " +
        "One entry (M-037) is a completeness fix, not a translation: AS-003 existed " +
        "with no corresponding mutation-log entry prior to this migration. Two questions " +
        "raised by this migration were checked against the corpus and resolved, not left " +
        "open: (1) this record's evidence[] citation array (ES-001..ES-009) was confirmed " +
        "unique to FR-QE-0001 — the only one of 26 live records with a separate " +
        "evidence[] array distinct from instances[]. A single-record legacy artefact of " +
        "schema evolution, not a corpus pattern; evidence[] additions map fully to " +
        "instance_appended, not merely as a stand-in. (2) Whether an instance addition " +
        "that also revises interpretation (Policy Rule 1) needs its own type distinct " +
        "from a plain evidence addition (Rule 2) was checked for recurrence: a second, " +
        "independent case exists (FR-AI-0005's IN-series instance, vectors tag " +
        "'partial--capability-advance-requires-path-reinterpretation'). Both cases " +
        "resolve the same way — the modern schema already carries interpretive weight " +
        "on the instances[] vectors field, within instance_added, not as a separate " +
        "Stage 1 type. M-034 is fully instance_added, not pending a future taxonomy " +
        "addition.",
    },
    {
      id: "M-038",
      date: "2026-06-06",
      field: "instance_appended",
      from: "—",
      to: "ES-009",
      note:
        "Migration entry (Row 5 Audit, 2026-07-05). Restates legacy M-031 " +
        "(field: evidence_count, '8 → 9', 'ES-009 appended'). evidence[] confirmed " +
        "unique to this record (see M-039) — maps fully to instance_appended.",
    },
    {
      id: "M-037",
      date: "2026-06-06",
      field: "assessment_issued",
      from: "—",
      to: "AS-003",
      note:
        "Migration entry (Row 5 Audit, 2026-07-05). Completeness fix, not a translation: " +
        "AS-003 exists in assessments[] with no prior mutation-log entry of any kind. " +
        "Diffing against AS-002 correctly finds no pressureState or verificationStage " +
        "change (both remain audit / VS-03) — resolves under Policy §3.5 as " +
        "assessment_reissued_no_state_change, non-qualifying for the homepage feed.",
    },
    {
      id: "M-036",
      date: "2023-02-22",
      field: "instance_appended",
      from: "—",
      to: "ES-007",
      note:
        "Migration entry (Row 5 Audit, 2026-07-05). Restates legacy M-030 " +
        "(field: evidence_count, '7 → 8', 'ES-007 appended'). evidence[] confirmed " +
        "unique to this record (see M-039) — maps fully to instance_appended.",
    },
    {
      id: "M-035",
      date: "2022-11-14",
      field: "claim_scope_narrowed",
      from: "Random circuit sampling (unrestricted)",
      to: "Random circuit sampling (defined protocol v2.1)",
      note:
        "Migration entry (Row 5 Audit, 2026-07-05). Restates legacy M-021 " +
        "(field: claim_scope) using the Class A taxonomy bullet 'Claim scope narrowed' " +
        "added by this audit (Policy v0.4). Scope narrowed in response to Pan & Zhang " +
        "simulation work — substance unchanged from the original entry.",
    },
    {
      id: "M-034",
      date: "2021-07-05",
      field: "instance_appended",
      from: "—",
      to: "ES-005",
      note:
        "Migration entry (Row 5 Audit, 2026-07-05). Restates legacy M-009 " +
        "(field: classical_baseline_note). ES-005 (Pan & Zhang, contested weight) is the " +
        "underlying evidence event. Resolved as instance_appended (see M-039): a second, " +
        "independent case (FR-AI-0005) confirmed that interpretation-revising evidence " +
        "is carried by the instances[] vectors field within instance_added, not by a " +
        "separate Stage 1 type — this is the correct classification, not a stand-in.",
    },
    {
      id: "M-033",
      date: "2020-03-10",
      field: "assessment_issued",
      from: "—",
      to: "AS-002",
      note:
        "Migration entry (Row 5 Audit, 2026-07-05). Restates legacy M-004 " +
        "(field: record_state, 'Published → Audit'). Diffing against AS-001 correctly " +
        "detects the pressureState (published → audit) and verificationStage " +
        "(VS-02 → VS-03) transitions.",
    },
    {
      id: "M-032",
      date: "2019-10-23",
      field: "assessment_issued",
      from: "—",
      to: "AS-001",
      note:
        "Migration entry (Row 5 Audit, 2026-07-05). Restates legacy M-001 " +
        "(field: record_state, '— → Assertion / Published'). AS-001 is this record's " +
        "first assessment; classifies as assessment_first_issued.",
    },
    // ─── Original legacy entries (2019–2026) — preserved verbatim ───
    // Do not edit. Restated in modern vocabulary above (M-032–M-039); this
    // block remains the authoritative historical record of what was
    // actually logged at the time, in the vocabulary of that era.
    {
      id: "M-031",
      date: "2026-06-06",
      field: "evidence_count",
      from: "8",
      to: "9",
      note: "ES-009 appended.",
    },
    {
      id: "M-030",
      date: "2023-02-22",
      field: "evidence_count",
      from: "7",
      to: "8",
      note: "ES-007 appended.",
    },
    {
      id: "M-021",
      date: "2022-11-14",
      field: "claim_scope",
      from: "Random circuit sampling (unrestricted)",
      to: "Random circuit sampling (defined protocol v2.1)",
      note: "Scope narrowed in response to Pan & Zhang simulation work.",
    },
    {
      id: "M-009",
      date: "2021-07-05",
      field: "classical_baseline_note",
      from: "Summit — 10,000 years (original assertion)",
      to: "Under active revision — see evidence log",
      note: "Pan & Zhang (2021) reduces classical simulation time estimate.",
    },
    {
      id: "M-004",
      date: "2020-03-10",
      field: "record_state",
      from: "Published",
      to: "Audit",
      note: "IBM classical simulation challenge confirmed as technically substantive.",
    },
    {
      id: "M-001",
      date: "2019-10-23",
      field: "record_state",
      from: "—",
      to: "Assertion / Published",
      note: "Record opened.",
    },
  ],

  status: "open",
};

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

/**
 * mutationClassifier.js — Latest Developments / Institutional Changelog
 *
 * Governance basis: Activity Taxonomy & Qualification Policy v0.3 (Piloted,
 * operational). Drive: institution/ — 1vhlnJYz5UBkOngaxs8nKLo_qJJNRJP1FAniXMuvFO4g
 *
 * Two stages, deliberately separate (Policy §5):
 *
 *   Stage 1 — detectMutationType(mutation, record)
 *     Objective. "What kind of mutation is this?" Implements the Activity
 *     Taxonomy (Policy §2). No knowledge of homepage policy.
 *
 *   Stage 2 — qualifiesForHomepage(mutationType)
 *     Interpretive. "Given that type, does it qualify?" Implements the
 *     Qualification Policy (Policy §3.1–§3.5). This is the only stage that
 *     changes if the policy itself is revised.
 *
 * Both stages are pure functions, consistent with the Observatory's existing
 * derivation principle (getCurrentAssessment(), getTransitionFeed() — never
 * stored, always computed from the live corpus).
 *
 * Status of open policy questions (Policy §7) at time of writing:
 *   - Class C "materially" threshold: UNRESOLVED. No live Class C case exists
 *     in the corpus to route through this classifier yet.
 *   - 28 mutation-log field names (across the wider corpus) are not yet
 *     recognised by Stage 1. These fail closed to "unclassified" — excluded
 *     from the homepage, fully visible in the Institutional Changelog with
 *     their raw field name shown. This is an intentional, visible gap, not
 *     a silent one. See Policy §7 row 5 for the audit this classifier is
 *     deliberately NOT attempting to resolve on its own.
 */

// ─── STAGE 1 — MUTATION TYPE DETECTION ──────────────────────

// Known field-name synonyms observed in the live QE-programme corpus.
// FR-QE-0003 uses "instance_logged", FR-QE-0004 uses "instance_appended",
// the creation batch uses "instances_logged" (plural). All three mean the
// same governance event. Recorded as an observation, not silently erased —
// worth a Review Note of its own at some point.
const INSTANCE_FIELD_SYNONYMS = new Set([
  "instance_logged",
  "instance_appended",
  "instances_logged",
]);

// Fields that appear only as part of the initial record-creation batch
// (same date as record_created, placeholder ALL-CAPS "to" values). Not
// independent public events — internal structure of the single "New
// Frontier Record published" event. Mirrors the creation-batch filter
// already used in derive.js:getRecentActivity().
//
// NOTE: this list reflects the QE-programme bootstrap vocabulary only.
// Other programmes use different bootstrap field names (e.g.
// "null_condition_failed", "diagnosis_held") that are not yet in this set —
// see Policy §7 row 5. They currently fall through to "unclassified" rather
// than being silently folded in here.
const CREATION_BATCH_ONLY_FIELDS = new Set([
  "instances_logged",
  "mechanisms_recorded",
  "programme_panel_added",
  "null_condition_met",
]);

function findCreationDate(record) {
  const created = record.mutationLog.find((m) => m.field === "record_created");
  return created ? created.date : null;
}

/**
 * Determines whether an assessment_issued mutation actually changed the
 * record's trajectory, and if so, which axis. This cannot be read off the
 * mutationLog entry alone — mutation.to is just an assessment ID (e.g.
 * "AS-002") for real assessments, or a placeholder ("ASSESSMENT-ISSUED")
 * for the creation-batch entry. The mutation log does not carry a separate
 * "pressureState_changed" field type; that only exists by diffing
 * consecutive assessments — the same comparison
 * derive.js:getTransitionFeed() already performs.
 */
function classifyAssessmentIssued(mutation, record) {
  const idx = record.assessments.findIndex((a) => a.id === mutation.to);

  if (idx === -1) {
    return "creation_batch_internal"; // placeholder "ASSESSMENT-ISSUED"
  }
  if (idx === 0) {
    return "assessment_first_issued";
  }

  const prev = record.assessments[idx - 1];
  const curr = record.assessments[idx];

  if (prev.pressureState !== curr.pressureState) {
    return "assessment_pressure_state_changed";
  }
  if (prev.verificationStage !== curr.verificationStage) {
    return "assessment_verification_stage_changed";
  }
  return "assessment_reissued_no_state_change";
}

export function detectMutationType(mutation, record) {
  const creationDate = findCreationDate(record);

  if (mutation.field === "record_created") {
    return "record_created";
  }
  if (mutation.date === creationDate && CREATION_BATCH_ONLY_FIELDS.has(mutation.field)) {
    return "creation_batch_internal";
  }
  if (INSTANCE_FIELD_SYNONYMS.has(mutation.field)) {
    return "instance_added";
  }
  if (mutation.field === "assessment_issued") {
    return classifyAssessmentIssued(mutation, record);
  }
  if (mutation.field === "open_question_raised") {
    return "open_question_added";
  }
  if (mutation.field === "reference_corrected") {
    return "editorial_correction";
  }

  // Deliberately not guessed at — Policy §7 row 5.
  return "unclassified";
}

// ─── STAGE 2 — QUALIFICATION POLICY ─────────────────────────
// Implements Policy §3.1–§3.5. Pure function of mutationType only.

const QUALIFICATION_TABLE = {
  record_created: [true, "A", "New Frontier Record published."],
  creation_batch_internal: [
    false,
    "A (subsumed)",
    "Internal structure of the record_created event. Retained in full in the Institutional Changelog.",
  ],
  instance_added: [
    true,
    "A",
    "Policy §3.1: significant if it materially sharpens, weakens, redirects, or operationalises the current assessment. Mechanical evaluation of significance is not yet implemented — every instance addition currently qualifies pending editorial confirmation or a structured significance tag (Policy §7 row 2).",
  ],
  assessment_pressure_state_changed: [true, "A", "Policy §3.1 Rule 3/4."],
  assessment_verification_stage_changed: [true, "A", "Policy §3.1 Rule 3/4."],
  assessment_first_issued: [
    true,
    "A",
    "Record's first assessment following creation; treated as an assessment change under Rule 3.",
  ],
  assessment_reissued_no_state_change: [
    false,
    "D (resolved 2026-07-05)",
    "Policy §3.5: a reassessment confirming the existing state is institutional review work, not a public development. Retained in full in the Institutional Changelog.",
  ],
  open_question_added: [
    true,
    "A",
    "Policy §3.1: major if resolving it would reasonably be expected to change the record's future assessment or trajectory. Mechanical evaluation not yet implemented — every open-question addition currently qualifies pending editorial confirmation (Policy §7 row 3).",
  ],
  editorial_correction: [false, "D", "Categorically excluded — Policy §2 Class D."],
  unclassified: [
    false,
    "UNKNOWN",
    "Mutation field not recognised by Stage 1. Fails closed: excluded from homepage, flagged for review (Policy §7 row 5).",
  ],
};

export function qualifiesForHomepage(mutationType) {
  const entry = QUALIFICATION_TABLE[mutationType];
  if (!entry) {
    return {
      qualifies: false,
      taxonomyClass: "UNKNOWN",
      note: `No qualification entry for mutationType "${mutationType}". Failing closed.`,
    };
  }
  const [qualifies, taxonomyClass, note] = entry;
  return { qualifies, taxonomyClass, note };
}

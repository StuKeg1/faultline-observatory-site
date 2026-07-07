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
 * ─── Row 5 Audit (2026-07-05) ────────────────────────────────
 *
 * This revision closes Policy §7 row 5's 28-mutation unclassified backlog,
 * verified against the live 26-record, 174-mutation corpus. Four decisions
 * were made, case by case, not as a single mechanical fix:
 *
 *   1. `record_id_migrated` (6 occurrences, FR-AM-0001..0006, all
 *      2026-06-18) — recognized as its own Stage 1 type,
 *      `record_identifier_migrated`. Classified Class C, non-qualifying
 *      (Policy §3.2/§3.5 precedent: institutional record-keeping, not a
 *      public development). This is recorded as the FIRST Observed-status
 *      evidence toward resolving Policy §3.3's "materially changes
 *      governance" threshold — one case, not yet sufficient for recurrence
 *      discipline to promote it further. Candidate framing: a Class C event
 *      materially changes governance when it IS an institutional-structure
 *      decision (CP adoption, Programme creation/rename/merge, Methodology
 *      change); a mutation-log entry that only records the downstream
 *      consequence of such a decision on an individual record inherits that
 *      decision's classification rather than independently re-triggering
 *      the qualification question. Needs at least one more independent case
 *      before it can move past Observed.
 *
 *   2. `assessments_issued` (plural, FR-AM-0001 M-003 only) — recognized as
 *      a Stage 1 synonym of `assessment_issued`. Same creation-batch slot,
 *      same date, same placeholder shape ("ASSESSMENTS-ISSUED" vs.
 *      "ASSESSMENT-ISSUED") — it just batches multiple notional assessments
 *      into one log line. Routes through the existing
 *      classifyAssessmentIssued(), which already resolves the
 *      placeholder-mismatch case correctly.
 *
 *   3. 15 one-off bootstrap fields across 12 distinct field names
 *      (null_condition_failed/partial/result, null_boundary_condition_met,
 *      diagnosis_held/bounded/confirmed, diagnostic_tendency_confirmed,
 *      rn_005_condition_confirmed, collapsed_state_notice_added,
 *      sub_population_condition_partial, scope_note_added) — this revision
 *      RETIRES the old CREATION_BATCH_ONLY_FIELDS name-list approach in
 *      favour of a structural rule (isBootstrapPlaceholder, below). The
 *      name-list approach had already proven incomplete once — this is why
 *      the backlog existed — and would recur with every new structural
 *      test record shipping a new one-off name. The structural rule
 *      classifies by SHAPE (creation-dated, `to` an ALL-CAPS placeholder
 *      mechanically derivable from the field name) rather than by an
 *      ever-growing enumeration. It runs only as a fallback, after every
 *      specific field check below, so a genuinely new semantic field type
 *      can never be silently absorbed into "just bootstrap noise" — it can
 *      only catch field names this file has no other opinion about.
 *
 *   4. FR-QE-0001's 6 legacy-schema mutations (record_state, claim_scope,
 *      classical_baseline_note, evidence_count — a pre-schema vocabulary,
 *      not a synonym gap) are DELIBERATELY NOT handled here. Decision was
 *      to migrate the record's own mutation log to modern field names
 *      (new, transparent, append-only entries — same pattern as the
 *      FR-MF-*→FR-AM-* migration) rather than build classifier-side
 *      translation rules for a single record's legacy vocabulary. See the
 *      FR-QE-0001.js migration (separate file change) for the resolution.
 *      Until that migration ships, these 6 will still surface as
 *      "unclassified" — this is expected, not a regression. Verified: this
 *      revision resolves 22 of the 28-mutation backlog; the remaining 6 are
 *      exactly FR-QE-0001's legacy entries.
 *
 *   Separately, Policy §2 Class A gained a new bullet ("Claim scope
 *   narrowed"), independent of FR-QE-0001's age — see Policy v0.4. No
 *   classifier change was needed for this; it's a taxonomy-document change
 *   only, since scope narrowing will be expressed through whatever field
 *   name FR-QE-0001's migration adopts.
 */

// ─── STAGE 1 — MUTATION TYPE DETECTION ──────────────────────

// Known field-name synonyms observed in the live QE-programme corpus.
// FR-QE-0003 uses "instance_logged", FR-QE-0004 uses "instance_appended",
// the creation batch uses "instances_logged" (plural). All three mean the
// same governance event. Recorded as an observation, not silently erased —
// worth a Review Note of its own at some point.
// Exported (2026-07-07, Metrics Engine build): metrics.js needs to know
// "did an instance get logged, and when" as a raw field-name question,
// independent of this file's homepage-worthiness classification (where a
// founding-batch instance entry is deliberately folded into
// creation_batch_internal). Same underlying field-name knowledge, two
// different questions asked of it — exporting avoids a second, drifting
// copy of this synonym set living in metrics.js.
export const INSTANCE_FIELD_SYNONYMS = new Set([
  "instance_logged",
  "instance_appended",
  "instances_logged",
]);

// Field-name synonyms for the assessment-issued event, singular and plural.
// FR-AM-0001 batches multiple notional assessments into a single log line
// under "assessments_issued" rather than one entry per assessment — same
// governance event, same creation-batch slot, same placeholder shape.
// Row 5 Audit, 2026-07-05.
// Exported (2026-07-07, Metrics Engine build) — same reasoning as
// INSTANCE_FIELD_SYNONYMS above.
export const ASSESSMENT_ISSUED_FIELD_SYNONYMS = new Set([
  "assessment_issued",
  "assessments_issued",
]);

function findCreationDate(record) {
  const created = record.mutationLog.find((m) => m.field === "record_created");
  return created ? created.date : null;
}

/**
 * Structural bootstrap-placeholder test (Row 5 Audit, 2026-07-05).
 *
 * Replaces the former CREATION_BATCH_ONLY_FIELDS name list as a FALLBACK
 * only — it runs after every specific field check in detectMutationType,
 * so it only ever catches field names this file has no other opinion
 * about. A mutation reaching this test is internal creation-batch
 * scaffolding — not an independent public event — if BOTH:
 *
 *   - it shares its date with the record's record_created entry, AND
 *   - its `to` value is exactly the ALL-CAPS, hyphenated placeholder
 *     mechanically derivable from its own field name (e.g.
 *     "null_condition_failed" → "NULL-CONDITION-FAILED")
 *
 * This is a shape test, not a name test: it recognises any future
 * structural test record's one-off bootstrap field without needing a code
 * change, provided that record follows the corpus's existing placeholder
 * convention. Verified against all 26 live records at time of writing.
 */
function isBootstrapPlaceholder(mutation, creationDate) {
  if (creationDate === null || mutation.date !== creationDate) {
    return false;
  }
  const derivedPlaceholder = mutation.field.toUpperCase().replace(/_/g, "-");
  return mutation.to === derivedPlaceholder;
}

/**
 * Determines whether an assessment_issued (or assessments_issued) mutation
 * actually changed the record's trajectory, and if so, which axis. This
 * cannot be read off the mutationLog entry alone — mutation.to is just an
 * assessment ID (e.g. "AS-002") for real assessments, or a placeholder
 * ("ASSESSMENT-ISSUED" / "ASSESSMENTS-ISSUED") for the creation-batch entry.
 * The mutation log does not carry a separate "pressureState_changed" field
 * type; that only exists by diffing consecutive assessments — the same
 * comparison derive.js:getTransitionFeed() already performs.
 */
function classifyAssessmentIssued(mutation, record) {
  const idx = record.assessments.findIndex((a) => a.id === mutation.to);

  if (idx === -1) {
    return "creation_batch_internal"; // placeholder, singular or plural form
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
  if (mutation.field === "record_id_migrated") {
    return "record_identifier_migrated";
  }
  if (INSTANCE_FIELD_SYNONYMS.has(mutation.field)) {
    return "instance_added";
  }
  if (ASSESSMENT_ISSUED_FIELD_SYNONYMS.has(mutation.field)) {
    return classifyAssessmentIssued(mutation, record);
  }
  if (mutation.field === "open_question_raised") {
    return "open_question_added";
  }
  if (mutation.field === "reference_corrected") {
    return "editorial_correction";
  }
  if (mutation.field === "claim_scope_narrowed") {
    return "claim_scope_narrowed";
  }
  if (mutation.field === "legacy_vocabulary_migrated") {
    return "legacy_vocabulary_migrated";
  }
  if (mutation.field === "experimental_annotations_added") {
    return "experimental_annotations_added";
  }
  if (isBootstrapPlaceholder(mutation, creationDate)) {
    return "creation_batch_internal";
  }

  // Deliberately not guessed at. As of the Row 5 Audit (2026-07-05), the
  // only mutations expected to still reach this line are FR-QE-0001's 6
  // legacy-schema entries (record_state, claim_scope, classical_baseline_note,
  // evidence_count), pending that record's mutation-log migration. Any other
  // field reaching "unclassified" after this revision is a genuinely new
  // gap, not a known, already-triaged one.
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
  claim_scope_narrowed: [
    true,
    "A",
    "Policy §2 Class A bullet added by the Row 5 Audit (2026-07-05), independent of the FR-QE-0001 migration that surfaced it. A scope narrowing indicates the claim was revised under evidential pressure (per the How-To-Read guide) — a genuine trajectory-relevant public development, qualifying under Rule 1.",
  ],
  legacy_vocabulary_migrated: [
    false,
    "D",
    "Row 5 Audit (2026-07-05). Housekeeping: restates a record's own historical mutation-log entries in current taxonomy vocabulary. No new evidence, interpretation, or institutional structure changed — analogous to an editorial correction. Retained in full in the Institutional Changelog.",
  ],
  experimental_annotations_added: [
    false,
    "D",
    "2026-07 pilot: records that a record gained an experimentalAnnotations[] container — internal pilot infrastructure, not itself a public development. Analogous to creation_batch_internal and legacy_vocabulary_migrated: the mutation documents a structural change to the record's shape, not a new evidentiary or assessment finding. The annotation content itself, if any, is surfaced separately on the record page — this entry governs only whether the mutation-log line qualifies for the activity feed. Retained in full in the Institutional Changelog.",
  ],
  record_identifier_migrated: [
    false,
    "C",
    "Row 5 Audit (2026-07-05), first Observed-status evidence toward Policy §3.3's unresolved 'materially changes governance' threshold. This mutation records the downstream consequence, on an individual record, of a single institutional decision (the PROG-MF-* → PROG-AM-* restructuring) — institutional record-keeping, not itself a public development. Retained in full in the Institutional Changelog. Does not resolve §3.3 generally; one case only.",
  ],
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

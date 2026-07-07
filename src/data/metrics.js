/**
 * metrics.js — Corpus-derived Institutional Health metrics
 *
 * Implements the "Corpus-derived" metrics from the Metric Source Register
 * v1.5 (institution/), computed directly from ALL_RECORDS. This exists so
 * future Observatory Health Reviews run this module rather than re-deriving
 * methodology by hand each cycle — OHR-2026-08's metrics were hand-computed
 * in bash/node this session, which is exactly the kind of one-off
 * reimplementation that let a mutation-log-vs-narrative-date inconsistency
 * slip through undetected until caught mid-review.
 *
 * Of the Register's 11 corpus-derived metrics, this file implements the 10
 * that a pure function of ALL_RECORDS can answer. Deletion events is
 * Manual in the Register (requires comparing against a previously known
 * record count from outside the corpus itself) and is out of scope here —
 * see getDeletionEventsNote() below for why it's stubbed rather than faked.
 *
 * Metrics the Register classifies as Manual, Operator-affirmed, or Retired
 * are NOT computed here at all: Capacity ratio and Records per active
 * programme custodian (Operator-affirmed, 2026-06-28); Assessment
 * publication lag, Review backlog, Time to publish (Retired, 2026-07-06).
 * These require human input or a standing operator declaration, not a
 * corpus computation — fabricating a number for them would be worse than
 * omitting them.
 *
 * All functions are pure: no side effects, no internal state — matching
 * derive.js's existing convention. Where a metric is defined relative to
 * a review period, callers pass { periodStart, periodEnd } as ISO date
 * strings (YYYY-MM-DD); omitting them treats the metric as "as of now."
 *
 * Built directly on detectMutationType() from mutationClassifier.js rather
 * than re-deriving field-name synonym handling — that file is already the
 * single qualified source for "what kind of mutation-log entry is this,"
 * including the assessment_issued/assessments_issued and
 * instance_logged/instances_logged/instance_appended synonym sets. This
 * module does not duplicate that logic.
 */

import {
  detectMutationType,
  INSTANCE_FIELD_SYNONYMS,
  ASSESSMENT_ISSUED_FIELD_SYNONYMS,
} from "./mutationClassifier.js";

// ─── SHARED HELPERS ─────────────────────────────────────────

/**
 * Most recent date any instance was logged, by the canonical method
 * (Metric Source Register v1.5, adopted 2026-07-07): mutation-log dates,
 * not each instance's own narrative event-date field. The narrative field
 * carries mixed granularity across the corpus ("Oct 2019," "2021–24," full
 * ISO dates) and produced false positives under naive comparison — see the
 * Register's Unclosed Evidence Gap row for the full rationale. Mutation-log
 * dates are recorded in clean ISO format (YYYY-MM-DD) throughout.
 *
 * Matches on the raw field name (via mutationClassifier.js's exported
 * synonym set), NOT on detectMutationType()'s classified output. That
 * classifier deliberately folds a record's founding-batch instance entry
 * into "creation_batch_internal" for homepage-worthiness purposes — correct
 * for that question, wrong for this one. A record's only instance-log
 * entry is still the date its evidence was logged, even if it isn't
 * homepage news.
 */
function mostRecentInstanceLogDate(record) {
  let latest = null;
  for (const m of record.mutationLog || []) {
    if (INSTANCE_FIELD_SYNONYMS.has(m.field) && (latest === null || m.date > latest)) {
      latest = m.date;
    }
  }
  return latest;
}

/**
 * Most recent date any assessment was issued, by the same raw-field-name
 * method and for the same reason: a record's founding-batch assessment
 * entry (field assessment_issued/assessments_issued, `to` a placeholder
 * like "ASSESSMENT-ISSUED" rather than a real assessment ID) is the only
 * assessment-dating information a single-assessment record has, and
 * detectMutationType() classifies it as creation_batch_internal — correct
 * for the homepage feed, wrong for "when was this record last assessed."
 */
function mostRecentAssessmentLogDate(record) {
  let latest = null;
  for (const m of record.mutationLog || []) {
    if (ASSESSMENT_ISSUED_FIELD_SYNONYMS.has(m.field) && (latest === null || m.date > latest)) {
      latest = m.date;
    }
  }
  return latest;
}

function daysBetween(earlierISO, laterISO) {
  return Math.round((new Date(laterISO) - new Date(earlierISO)) / 86400000);
}

/**
 * Whether a raw mutation-log entry represents an assessment being issued —
 * field-name test (via the shared synonym set), not detectMutationType()'s
 * classification. Used everywhere this file counts or dates assessment
 * events, so founding-batch entries are never silently excluded.
 */
function isAssessmentField(mutation) {
  return ASSESSMENT_ISSUED_FIELD_SYNONYMS.has(mutation.field);
}

/** Same reasoning as isAssessmentField(), for instance-log entries. */
function isInstanceField(mutation) {
  return INSTANCE_FIELD_SYNONYMS.has(mutation.field);
}

// ─── RECORD INTEGRITY ───────────────────────────────────────

/**
 * Silent mutation rate (Register: Layer 2, Record Integrity).
 * Zero-tolerance condition: any occurrence is a constitutional violation,
 * not a review trigger.
 *
 * LIMITATION, stated plainly: this function can only check what a
 * mutation-log-based diff against the CURRENT corpus snapshot can see —
 * whether the count of assessments[] matches the count of
 * assessment-type mutation-log entries. It cannot, by itself, catch a
 * change with literally zero log entry of any kind; that requires
 * comparing against a prior corpus snapshot (git history). The full
 * historical check was performed directly against git history in the
 * 2026-07-07 Full-Corpus Integrity Sweep (132 commits, all 26 records) and
 * found one historical instance (FR-QE-0001, AS-003), already remediated.
 * This function is the repeatable, corpus-only proxy that originally
 * surfaces that class of finding — it should be run every cycle; the full
 * git-history check is a heavier, periodic instrument, not a per-OHR one.
 */
export function getSilentMutationFindings(records) {
  return records
    .map((record) => {
      const assessmentLogCount = (record.mutationLog || []).filter(isAssessmentField).length;
      const assessmentCount = (record.assessments || []).length;
      if (assessmentLogCount === assessmentCount) return null;
      return { recordId: record.id, assessmentCount, assessmentLogEntries: assessmentLogCount };
    })
    .filter(Boolean);
}

/**
 * Mutation log completeness (Register: Layer 2, Record Integrity).
 *
 * A record counts as "complete" if every entry has both a date field and a
 * note field present (an empty-string note on a bootstrap entry still
 * counts — this matches OHR-2026-08's hand-computed 25/26 baseline, which
 * did not treat terse founding-batch notes as a completeness defect)
 * AND every entry is classifiable by detectMutationType() as something
 * other than "unclassified." That second condition is deliberate:
 * FR-QE-0001's legacy-vocabulary entries have dates and notes but are
 * schema-divergent, not missing — OHR-2026-08 (2026-07-06) found and
 * named this distinction explicitly, and this function keeps it visible
 * rather than collapsing it into a single completeness percentage.
 */
export function getMutationLogCompleteness(records) {
  const perRecord = records.map((record) => {
    const log = record.mutationLog || [];
    const hasAllFields =
      log.length > 0 && log.every((m) => m.date != null && m.note != null);
    const unclassifiedCount = log.filter(
      (m) => detectMutationType(m, record) === "unclassified"
    ).length;
    return {
      recordId: record.id,
      entryCount: log.length,
      complete: hasAllFields && unclassifiedCount === 0,
      schemaDivergent: unclassifiedCount > 0,
      unclassifiedCount,
    };
  });

  const completeCount = perRecord.filter((r) => r.complete).length;
  const schemaDivergentRecords = perRecord.filter((r) => r.schemaDivergent).map((r) => r.recordId);

  return {
    total: records.length,
    completeCount,
    completenessShare: records.length > 0 ? completeCount / records.length : null,
    schemaDivergentRecords,
    perRecord,
  };
}

/**
 * Deletion events (Register: Layer 2, Record Integrity). Manual per the
 * Register — requires comparing the live corpus against a previously
 * recorded record count from outside the corpus itself (a prior OHR, the
 * Outstanding Work Queue, etc.). A pure function of ALL_RECORDS cannot
 * detect a deletion; it can only report the current count for a human (or
 * an OHR) to compare against the last known figure. Returning a fabricated
 * "0 deletions" from a function that structurally cannot see history would
 * misrepresent an absolute-condition metric — worse than not computing it.
 */
export function getDeletionEventsNote(records) {
  return {
    method: "Manual",
    currentRecordCount: records.length,
    note: "Compare this count against the last known total from the prior OHR or the Outstanding Work Queue. This function cannot detect a deletion on its own.",
  };
}

// ─── TRAJECTORY PRESERVATION ────────────────────────────────

/** Assessment depth distribution (Register: Trajectory Preservation). */
export function getAssessmentDepthDistribution(records) {
  const buckets = { "1": 0, "2": 0, "3+": 0 };
  for (const record of records) {
    const n = (record.assessments || []).length;
    if (n <= 1) buckets["1"]++;
    else if (n === 2) buckets["2"]++;
    else buckets["3+"]++;
  }
  return { total: records.length, buckets };
}

/**
 * Open question persistence / silent-closure findings (Register:
 * Trajectory Preservation). "Most labour-intensive corpus-derived metric,"
 * per the Register — and for good reason.
 *
 * LIMITATION, stated plainly: this function operates on a SINGLE corpus
 * snapshot (ALL_RECORDS as currently live). It cannot detect an open
 * question that existed at some past commit and is silently absent
 * today — that requires comparing against a prior snapshot, a git-history
 * operation outside what a pure function of the current corpus can do.
 * The full historical check was performed directly against git history in
 * the 2026-07-07 Full-Corpus Integrity Sweep (132 commits, all 26 records)
 * and found zero occurrences across every record's complete lifecycle.
 *
 * What this function DOES do, on a single snapshot: flags any OQ-###
 * identifier referenced anywhere in the record's own text (claim,
 * instances, assessments, mechanisms) that is NOT present in the record's
 * current openQuestions[] array and is not explained by a mutationLog
 * entry naming that ID alongside closure language. This is the same
 * current-state proxy used by hand during the sweep. It should be re-run
 * every cycle; the full git-history re-verification is a heavier,
 * periodic instrument, not assumed permanently settled by one clean pass.
 */
export function getOpenQuestionSilentClosureFindings(records) {
  const findings = [];
  for (const record of records) {
    const liveIds = new Set((record.openQuestions || []).map((o) => o.id));
    const allText = JSON.stringify(record);
    const referencedIds = new Set(allText.match(/OQ-\d{3}/g) || []);
    const missing = [...referencedIds].filter((id) => !liveIds.has(id));
    const unexplained = missing.filter(
      (id) =>
        !(record.mutationLog || []).some(
          (m) => (m.note || "").includes(id) && /clos|resolv|drop/i.test(m.note || "")
        )
    );
    if (unexplained.length > 0) {
      findings.push({ recordId: record.id, unexplainedIds: unexplained });
    }
  }
  return findings;
}

// ─── EVIDENCE–ASSESSMENT CORRESPONDENCE ─────────────────────

/**
 * Unclosed evidence gap (Register: Evidence–Assessment Correspondence).
 * THE PRIMARY HEALTH METRIC. Canonical method adopted 2026-07-07:
 * mutation-log dates, not each instance's own narrative event-date field.
 * See Metric Source Register v1.5 for the full rationale; the operative
 * comparison is repeated here as code, not re-derived.
 *
 * A record has an unclosed gap when its most recent instance-log date is
 * strictly later than its most recent assessment-log date. Records
 * missing either date entirely are reported separately as structurally
 * incomplete rather than folded into either "open" or "closed."
 */
export function getUnclosedEvidenceGap(records) {
  const gaps = [];
  const structurallyIncomplete = [];

  for (const record of records) {
    const instanceDate = mostRecentInstanceLogDate(record);
    const assessmentDate = mostRecentAssessmentLogDate(record);

    if (!instanceDate || !assessmentDate) {
      structurallyIncomplete.push({ recordId: record.id, instanceDate, assessmentDate });
      continue;
    }
    if (instanceDate > assessmentDate) {
      gaps.push({
        recordId: record.id,
        instanceDate,
        assessmentDate,
        gapDays: daysBetween(assessmentDate, instanceDate),
      });
    }
  }

  return {
    total: records.length,
    openCount: gaps.length,
    status: gaps.length === 0 ? "HEALTHY" : "WATCH",
    gaps,
    structurallyIncomplete,
  };
}

/**
 * Evidence-to-assessment response rate (Register: Evidence–Assessment
 * Correspondence). Response window resolved 2026-07-07: 90 days
 * (operator decision — see Register v1.4/v1.5).
 *
 * Denominator: instance-log entries within [periodStart, periodEnd].
 * Numerator: of those, instances whose record received ANY assessment-log
 * entry within `responseWindowDays` days after that instance's log date.
 * This is a record-level proxy, not per-instance assessment attribution —
 * the corpus does not store which specific instance an assessment
 * responded to, and the Register frames this metric at record
 * granularity, consistent with that limitation.
 */
export function getEvidenceToAssessmentResponseRate(
  records,
  { periodStart = null, periodEnd = null, responseWindowDays = 90 } = {}
) {
  let denominator = 0;
  let numerator = 0;
  const details = [];

  for (const record of records) {
    for (const m of record.mutationLog || []) {
      if (!isInstanceField(m)) continue;
      if (periodStart && m.date < periodStart) continue;
      if (periodEnd && m.date > periodEnd) continue;

      denominator++;
      const respondedWithin = (record.mutationLog || []).some((am) => {
        if (!isAssessmentField(am)) return false;
        const gap = daysBetween(m.date, am.date);
        return gap >= 0 && gap <= responseWindowDays;
      });
      if (respondedWithin) numerator++;
      details.push({ recordId: record.id, instanceDate: m.date, respondedWithin });
    }
  }

  return {
    periodStart,
    periodEnd,
    responseWindowDays,
    denominator,
    numerator,
    rate: denominator > 0 ? numerator / denominator : null,
    details,
  };
}

// ─── PROGRAMME DISTRIBUTION ──────────────────────────────────

/** Programme record distribution (Register: Programme Distribution). */
export function getProgrammeRecordDistribution(records) {
  const counts = {};
  for (const r of records) counts[r.programme] = (counts[r.programme] || 0) + 1;
  return counts;
}

/**
 * Programme activity concentration (Register: Programme Distribution).
 * Share of assessment-log entries in [periodStart, periodEnd] contributed
 * by the single most active programme.
 */
export function getProgrammeActivityConcentration(
  records,
  { periodStart = null, periodEnd = null } = {}
) {
  const counts = {};
  let total = 0;

  for (const record of records) {
    for (const m of record.mutationLog || []) {
      if (!isAssessmentField(m)) continue;
      if (periodStart && m.date < periodStart) continue;
      if (periodEnd && m.date > periodEnd) continue;
      counts[record.programme] = (counts[record.programme] || 0) + 1;
      total++;
    }
  }

  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] ?? null;

  return {
    periodStart,
    periodEnd,
    total,
    counts,
    topProgramme: top ? top[0] : null,
    topShare: top && total > 0 ? top[1] / total : null,
  };
}

// ─── ENDURANCE VS. STAGNATION ────────────────────────────────

/**
 * Endurance / Stagnation indicators (Register: Endurance vs. Stagnation).
 *
 * RETIRED (2026-07-07, operator decision) — see RN-004 (institution/),
 * Institutional Health Framework v0.6, and Metric Source Register v1.6.
 * Two independent validation trials did not validate RN-004's candidate
 * vocabulary; Trial 002 found the corpus's batch-reassessment pattern
 * structurally unable to test the criterion, and the operator decided not
 * to pursue a further trial. This function is retained — it is tested,
 * correct, and reproduces the criterion RN-004 actually specifies — but is
 * NOT called by computeAllMetrics() below, since it is no longer a
 * standing review input. Call it directly if this question is ever
 * revisited, but that would be new work evaluated on its own evidence, not
 * a reopening of RN-004.
 *
 * Candidate vocabulary per RN-004, provisional pending further validation
 * (see TRIAL-002-OUT, 2026-07-07 — Trial 002's cohort was batch-reassessed
 * in a single sitting, which limited what that trial could conclude about
 * the vocabulary itself, though the criterion below is the one it tested).
 *
 * The discriminating criterion, per RN-004 and Institutional Health
 * Framework v0.5: recency of assessor engagement RELATIVE TO recency of
 * evidence, read record-by-record — not a fixed calendar-age threshold on
 * either date alone. `recentWindowDays` sets what counts as "recent"
 * relative to `asOfDate`.
 *
 * - Enduring: the assessment-log date is within `recentWindowDays` of the
 *   instance-log date (engagement is keeping pace with evidence) AND the
 *   assessment itself is recent relative to asOfDate (the institution is
 *   still actively watching, not just historically caught up once).
 * - Stagnating: BOTH the instance date and the assessment date are older
 *   than `recentWindowDays` relative to asOfDate — observation appears to
 *   have stopped on both sides.
 * - Records fitting neither definition are reported as unclassified
 *   rather than forced into one bucket; that ambiguity is itself
 *   informative and should not be silently resolved by the code.
 */
export function getEnduranceStagnationIndicators(
  records,
  { asOfDate = new Date().toISOString().slice(0, 10), recentWindowDays = 90 } = {}
) {
  const enduring = [];
  const stagnating = [];
  const unclassified = [];

  for (const record of records) {
    const instanceDate = mostRecentInstanceLogDate(record);
    const assessmentDate = mostRecentAssessmentLogDate(record);

    if (!instanceDate || !assessmentDate) {
      unclassified.push({ recordId: record.id, reason: "missing instance or assessment log date" });
      continue;
    }

    const engagementGapDays = daysBetween(instanceDate, assessmentDate);
    const instanceAgeDays = daysBetween(instanceDate, asOfDate);
    const assessmentAgeDays = daysBetween(assessmentDate, asOfDate);

    if (Math.abs(engagementGapDays) <= recentWindowDays && assessmentAgeDays <= recentWindowDays) {
      enduring.push({ recordId: record.id, engagementGapDays, assessmentAgeDays });
    } else if (instanceAgeDays > recentWindowDays && assessmentAgeDays > recentWindowDays) {
      stagnating.push({ recordId: record.id, instanceAgeDays, assessmentAgeDays });
    } else {
      unclassified.push({
        recordId: record.id,
        reason: "fits neither definition under the current window",
        engagementGapDays,
        instanceAgeDays,
        assessmentAgeDays,
      });
    }
  }

  return { asOfDate, recentWindowDays, enduring, stagnating, unclassified };
}

// ─── ORCHESTRATOR ────────────────────────────────────────────

/**
 * Computes every corpus-derived metric from the Metric Source Register
 * v1.5 in one call. This is the single entry point intended for future
 * OHRs — call this instead of re-deriving methodology by hand each cycle.
 *
 * `options` keys, all optional: responseRate, activityConcentration —
 * each forwarded to the corresponding function above (periodStart/
 * periodEnd/responseWindowDays as applicable).
 *
 * Does NOT include Endurance/Stagnation — retired 2026-07-07 (see
 * getEnduranceStagnationIndicators() above). Call that function directly
 * if this question is ever revisited.
 */
export function computeAllMetrics(records, options = {}) {
  return {
    generatedAt: new Date().toISOString(),
    sourceRegisterVersion: "1.6",
    recordIntegrity: {
      silentMutationFindings: getSilentMutationFindings(records),
      mutationLogCompleteness: getMutationLogCompleteness(records),
      deletionEvents: getDeletionEventsNote(records),
    },
    trajectoryPreservation: {
      assessmentDepthDistribution: getAssessmentDepthDistribution(records),
      openQuestionSilentClosureFindings: getOpenQuestionSilentClosureFindings(records),
    },
    evidenceAssessmentCorrespondence: {
      unclosedEvidenceGap: getUnclosedEvidenceGap(records),
      evidenceToAssessmentResponseRate: getEvidenceToAssessmentResponseRate(
        records,
        options.responseRate
      ),
    },
    programmeDistribution: {
      recordDistribution: getProgrammeRecordDistribution(records),
      activityConcentration: getProgrammeActivityConcentration(
        records,
        options.activityConcentration
      ),
    },
  };
}

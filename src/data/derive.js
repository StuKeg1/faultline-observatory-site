/**
 * derive.js — Pure derived accessors for The Frontier Record
 *
 * Constitutional rules enforced here:
 * - getCurrentAssessment: assessments[last] — never stored in record files
 * - getTransitionFeed: derived from state changes — never stored
 * - All summary statistics derived from the live corpus
 *
 * These functions have no side effects and no internal state.
 */

import { detectMutationType, qualifiesForHomepage } from "./mutationClassifier.js";

// ─── RECORD ACCESSORS ───────────────────────────────────────

/**
 * Returns the current assessment — always the last entry in assessments[].
 * Throws if the record has no assessments (structurally invalid).
 */
export function getCurrentAssessment(record) {
  if (!record.assessments || record.assessments.length === 0) {
    throw new Error(`Record ${record.id} has no assessments — structurally invalid.`);
  }
  return record.assessments[record.assessments.length - 1];
}

/**
 * Returns the transition feed — consecutive assessment pairs where pressureState changed.
 * This is the trajectory of the record; it is never stored.
 */
export function getTransitionFeed(record) {
  const transitions = [];
  for (let i = 1; i < record.assessments.length; i++) {
    const prev = record.assessments[i - 1];
    const curr = record.assessments[i];
    if (prev.pressureState !== curr.pressureState) {
      transitions.push({ from: prev, to: curr });
    }
  }
  return transitions;
}

/**
 * Returns the date the record's current pressureState was first reached —
 * walks backward from the current assessment through any reaffirming
 * assessments (same pressureState, no change) to find where the run
 * started. Distinct from getCurrentAssessment(record).date, which is the
 * date of the most recent assessment and can be much later than the date
 * the state was actually entered if the record has been reaffirmed since.
 */
export function getStateEnteredDate(record) {
  const history = getAssessmentHistory(record);
  const current = history[history.length - 1];
  for (let i = history.length - 1; i > 0; i--) {
    if (history[i - 1].pressureState !== current.pressureState) {
      return history[i].date;
    }
  }
  return history[0].date;
}

/**
 * Returns the canonical public URL for a record.
 */
export function getRecordUrl(record) {
  return `/the-record/${record.id.toLowerCase()}/`;
}

/**
 * Returns the record-specific summary used for social/meta descriptions —
 * shared by the client-side PageMeta tag (FrontierRecord.jsx) and the
 * crawler-facing Pages Function (functions/the-record/[[recordId]].js) so
 * both surfaces stay in sync rather than reimplementing this formatting.
 */
export function getRecordMetaDescription(record) {
  const current = getCurrentAssessment(record);
  return `${record.claim.statement.substring(0, 140)} Current state: ${current.pressureState}.`;
}

function collectSearchParts(value, parts = []) {
  if (value == null) return parts;

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    parts.push(String(value));
    return parts;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectSearchParts(item, parts));
    return parts;
  }

  if (typeof value === "object") {
    Object.values(value).forEach((item) => collectSearchParts(item, parts));
  }

  return parts;
}

/**
 * Returns a plain-text public search surface for a Frontier Record.
 *
 * This intentionally remains simple string search. It expands search beyond
 * the title fields without introducing a search index, dependency, or ranking
 * system at the current corpus scale.
 */
export function getSearchText(record, programmes = []) {
  const programme = programmes.find((p) => p.id === record.programme);
  const parts = [];

  collectSearchParts([
    record.id,
    record.status,
    record.programme,
    programme?.id,
    programme?.shortId,
    programme?.name,
    programme?.shortDescription,
    record.claim?.shortLabel,
    record.claim?.statement,
    record.claim?.openedDate,
    record.instances,
    record.assessments,
    record.mutationLog,
    record.openQuestions,
  ], parts);

  return parts.join(" ").toLowerCase();
}

/**
 * Returns the full assessment history in chronological order.
 * The single access point for any UI that iterates assessments[] —
 * insulates consumers from the raw array and the append-only ordering rule.
 */
export function getAssessmentHistory(record) {
  if (!record.assessments || record.assessments.length === 0) {
    throw new Error(`Record ${record.id} has no assessments — structurally invalid.`);
  }
  return [...record.assessments]; // chronological; assessments[] is already oldest-first
}

/**
 * Returns the verification stage progression for a record.
 * Each entry: { vsCode, label, date, status: "reached" | "current" | "pending" }
 * Derives from assessment history; never stored.
 */
export function getVerificationStages(record) {
  const ALL_STAGES = ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"];
  const current = getCurrentAssessment(record);

  // Build a map of vsCode → first date reached
  const reachedDates = {};
  for (const a of record.assessments) {
    if (a.verificationStage && !reachedDates[a.verificationStage]) {
      reachedDates[a.verificationStage] = a.date;
    }
  }

  return ALL_STAGES.map((vsCode) => {
    const isCurrent = vsCode === current.verificationStage;
    const isReached = vsCode in reachedDates;
    return {
      vsCode,
      label: getVerificationStageLabel(vsCode),
      date: reachedDates[vsCode] ?? null,
      status: isCurrent ? "current" : isReached ? "reached" : "pending",
    };
  });
}

/** Maps original FCIF pressureState to a VS code for display purposes */
export function getPressureStateVS(pressureState) {
  const map = {
    emerging:    "VS-01",
    escalating:  "VS-02",
    stabilising: "VS-03",
    fragmenting: "VS-03",
    resolving:   "VS-04",
    collapsed:   "VS-05",
    assertion:   "VS-01",
    published:   "VS-02",
    audit:       "VS-03",
    replication: "VS-04",
    operation:   "VS-04",
    validated:   "VS-05",
    contested:   "VS-03",
  };
  return map[pressureState] ?? "VS-01";
}

// ─── CORPUS ACCESSORS ───────────────────────────────────────

/**
 * Returns all records for a given programme ID.
 */
export function getProgrammeRecords(records, programmeId) {
  return records.filter((r) => r.programme === programmeId);
}

// Homepage Programme Badge V1
//
// Programme badges are homepage orientation labels, not record-level
// pressure states and not institutional verdicts.
//
// V1 deliberately excludes terminal / institutional states from programme
// posture derivation. collapsed and audit do not contribute.
const PROGRAMME_BADGE_TRANSLATION_V1 = {
  escalating: "Emerging",
  fragmenting: "Contested",
  resolving: "Resolving",
};

const PROGRAMME_BADGE_PRIORITY_V1 = {
  Emerging: 1,
  Contested: 2,
  Resolving: 3,
};

function getProgrammeBadgeFromCounts(badgeCounts) {
  const entries = Object.entries(badgeCounts);
  if (entries.length === 0) return null;

  entries.sort(([badgeA, countA], [badgeB, countB]) => {
    const countDiff = countB - countA;
    if (countDiff !== 0) return countDiff;
    return PROGRAMME_BADGE_PRIORITY_V1[badgeB] - PROGRAMME_BADGE_PRIORITY_V1[badgeA];
  });

  return entries[0][0];
}

/**
 * Translates a record pressure state into a homepage programme badge.
 * Returns null for states that do not participate in V1 derivation.
 */
export function getProgrammeBadgeForPressureState(pressureState) {
  return PROGRAMME_BADGE_TRANSLATION_V1[pressureState] ?? null;
}

/**
 * Returns corpus-level summary statistics — feeds the homepage Snapshot block.
 * The homepage cannot claim a state the corpus doesn't support.
 *
 * lastMutationDate is derived from getRecentActivity() rather than raw
 * mutationLog[0] — this keeps "most recent institutional activity" backed
 * by a single qualified source instead of a second implementation that can
 * silently drift out of sync with it.
 */
export function getCorpusSummary(records) {
  const byProgramme = {};
  let openCount = 0;
  let closedCount = 0;
  let totalAssessments = 0;

  for (const record of records) {
    // Programme counts
    byProgramme[record.programme] = (byProgramme[record.programme] || 0) + 1;

    // Open/closed
    if (record.status === "open") openCount++;
    else closedCount++;

    // Total assessments
    totalAssessments += record.assessments.length;
  }

  const mostRecent = getRecentActivity(records, 1)[0] ?? null;
  const lastMutationDate = mostRecent ? mostRecent.mutationLog[0].date : null;

  return {
    totalRecords: records.length,
    openRecords: openCount,
    closedRecords: closedCount,
    programmeCount: Object.keys(byProgramme).length,
    totalAssessments,
    lastMutationDate,
    byProgramme,
  };
}

/**
 * Returns per-programme statistics for a programme card.
 */
export function getProgrammeStats(records, programmeId) {
  const programmeRecords = getProgrammeRecords(records, programmeId);
  const stateCounts = {};
  const badgeCounts = {};

  for (const record of programmeRecords) {
    const state = getCurrentAssessment(record).pressureState;
    stateCounts[state] = (stateCounts[state] || 0) + 1;

    const badge = getProgrammeBadgeForPressureState(state);
    if (badge) badgeCounts[badge] = (badgeCounts[badge] || 0) + 1;
  }

  return {
    total: programmeRecords.length,
    open: programmeRecords.filter((r) => r.status === "open").length,
    stateCounts,
    badge: getProgrammeBadgeFromCounts(badgeCounts),
    badgeCounts,
  };
}

/**
 * Returns the most recently mutated records, sorted by latest mutation date.
 * Replaces the inline recentActivity() function in Home.jsx.
 * limit defaults to 5.
 *
 * Qualification rule: a record only qualifies if its newest mutation log
 * entry represents genuine post-creation activity. Records whose newest
 * entry is co-dated with their own record_created entry are excluded —
 * that date marks the original authoring/backfill batch, not institutional
 * activity, and showing it as "recent" would misrepresent the record's
 * actual trajectory. Records with no record_created entry (e.g. records
 * with a fully hand-authored historical log) are not subject to this check.
 *
 * This is the single qualified source for "most recent institutional
 * activity" — getCorpusSummary() and Home.jsx's snapshot both derive from
 * this rather than re-implementing the sort.
 */
export function getRecentActivity(records, limit = 5) {
  return [...records]
    .filter((r) => r.mutationLog && r.mutationLog.length > 0)
    .filter((r) => {
      const newest = r.mutationLog[0];
      const creationEntry = r.mutationLog.find((m) => m.field === "record_created");
      return !creationEntry || newest.date !== creationEntry.date;
    })
    .sort((a, b) => b.mutationLog[0].date.localeCompare(a.mutationLog[0].date))
    .slice(0, limit);
}

function flattenClassifiedMutations(records) {
  const rows = [];
  for (const record of records) {
    if (!record.mutationLog) continue;
    for (const mutation of record.mutationLog) {
      const mutationType = detectMutationType(mutation, record);
      const { qualifies, taxonomyClass, note } = qualifiesForHomepage(mutationType);
      rows.push({
        record,
        mutation,
        mutationType,
        qualifies,
        taxonomyClass,
        qualificationNote: note,
      });
    }
  }
  return rows;
}

/**
 * Returns the most recent QUALIFYING mutations across the whole corpus,
 * per Activity Taxonomy & Qualification Policy v0.3. This is the data
 * source for the homepage "Latest Developments" feed.
 *
 * Distinct from getRecentActivity(), which returns the most recently
 * mutated RECORDS regardless of mutation type (still used for the
 * institutional snapshot's "Last updated" stat, where "any activity, any
 * type" is the correct question). getLatestDevelopments() answers a
 * narrower, policy-governed question: what should a visitor be told
 * happened.
 *
 * limit defaults to 5, matching the prior Activity Log's page size.
 */
export function getLatestDevelopments(records, limit = 5) {
  return flattenClassifiedMutations(records)
    .filter((row) => row.qualifies)
    .sort((a, b) => b.mutation.date.localeCompare(a.mutation.date))
    .slice(0, limit);
}

/**
 * Returns EVERY mutation across the whole corpus, classified but
 * unfiltered, newest first. This is the data source for the Institutional
 * Changelog page — the complete audit trail. Nothing here is excluded;
 * qualifies/taxonomyClass are included per row so the page can visibly
 * label which entries also appear on the homepage, per Policy §3.4's
 * requirement that this remain a routing decision, not a suppression one.
 */
export function getInstitutionalChangelog(records) {
  return flattenClassifiedMutations(records)
    .sort((a, b) => b.mutation.date.localeCompare(a.mutation.date));
}

// ─── DISPLAY HELPERS ────────────────────────────────────────

/** Maps pressureState to the badge CSS class. Handles both vocabularies. */
export function getStateBadgeClass(pressureState) {
  const map = {
    // Current vocabulary
    assertion:   "sb-assertion",
    published:   "sb-published",
    audit:       "sb-audit",
    replication: "sb-replication",
    operation:   "sb-operation",
    validated:   "sb-validated",
    contested:   "sb-contested",
    // Original FCIF vocabulary
    emerging:    "sb-emerging",
    escalating:  "sb-escalating",
    stabilising: "sb-stabilising",
    fragmenting: "sb-fragmenting",
    resolving:   "sb-resolving",
    collapsed:   "sb-collapsed",
  };
  return map[pressureState] ?? "sb-assertion";
}

/** Returns a human-readable label for a pressureState. */
export function getPressureStateLabel(pressureState) {
  const map = {
    // Current vocabulary
    assertion:   "Assertion",
    published:   "Published",
    audit:       "Audit",
    replication: "Replication",
    operation:   "Operation",
    validated:   "Validated",
    contested:   "Contested",
    // Original FCIF vocabulary
    emerging:    "Emerging",
    escalating:  "Escalating",
    stabilising: "Stabilising",
    fragmenting: "Fragmenting",
    resolving:   "Resolving",
    collapsed:   "Collapsed",
  };
  return map[pressureState] ?? pressureState;
}

/** Maps verificationStage to a display label. */
export function getVerificationStageLabel(vsCode) {
  const map = {
    "VS-01": "Assertion",
    "VS-02": "Published",
    "VS-03": "Audit",
    "VS-04": "Replication",
    "VS-05": "Operation",
  };
  return map[vsCode] ?? vsCode;
}

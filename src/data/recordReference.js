/**
 * Shared display-only identity and version context for metadata and citations.
 * An M-ID identifies a mutation log entry, NOT a reconstructible page snapshot.
 */
import { getCurrentAssessment, getRecordUrl } from "./derive.js";
import { getRecordUpdateSummary } from "./recordReading.js";

export function getRecordReference(record) {
  const update = getRecordUpdateSummary(record);
  const datedEntries = (record.mutationLog ?? []).filter(
    (entry) => entry.date === update.date && /^M-\d+$/.test(entry.id ?? ""),
  );
  // Same-day changes have distinct monotonically allocated IDs. Select the
  // highest sequence on the latest dated day, not arbitrary array position.
  const latestMutation = datedEntries.reduce(
    (best, entry) => !best || Number(entry.id.slice(2)) > Number(best.id.slice(2)) ? entry : best,
    null,
  );
  const assessment = getCurrentAssessment(record);
  return {
    recordId: record.id,
    title: record.claim.shortLabel,
    canonicalUrl: `https://faultlinewatch.com${getRecordUrl(record)}`,
    assessmentId: assessment.id,
    assessedDate: assessment.date,
    updateDate: update.date,
    updateLabels: update.labels,
    mutationCount: record.mutationLog?.length ?? 0,
    latestMutationId: latestMutation?.id ?? null,
  };
}

export function getRecordVersionLabel(reference) {
  if (!reference.latestMutationId || !reference.updateDate) return "Version not established (see mutation log)";
  return `Record as of ${reference.latestMutationId} (${reference.updateDate})`;
}

/**
 * Deterministic LPR-001 queue selection.
 * Never-reviewed records are selected before reviewed records; ties are
 * resolved by record ID. Once every record has been reviewed, the record with
 * the oldest lastProvenanceReview date is selected first.
 */

export function sortProvenanceReviewQueue(records) {
  return [...records].sort((a, b) => {
    const aDate = a.lastProvenanceReview ?? null;
    const bDate = b.lastProvenanceReview ?? null;

    if (aDate === null && bDate !== null) return -1;
    if (aDate !== null && bDate === null) return 1;
    if (aDate !== bDate) return aDate.localeCompare(bDate);
    return a.id.localeCompare(b.id);
  });
}

export function getNextProvenanceReviewRecord(records) {
  return sortProvenanceReviewQueue(records)[0] ?? null;
}

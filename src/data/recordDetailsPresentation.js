/** Presentation-only projection of record lifecycle status. Never infer evidence outcomes. */
export const CLOSED_RECORD_NOTE = "Closed is an administrative status: evidence and assessments may still be added, and reopening requires a governed decision.";

export function getRecordStatusPresentation(record) {
  if (record.status === "open") return null;
  if (record.status === "closed") return { label: "Closed", note: CLOSED_RECORD_NOTE };
  return { label: String(record.status ?? "Unknown"), note: null };
}

/** Presentation of existing record semantics; never an evidence reassessment. */
export function questionDateText(question) {
  const original = question.raisedDateKind === "legacy"
    ? "Original date uncertain (legacy)"
    : `Question recorded ${question.raisedDate}`;
  return `${original}${question.revisedDate ? ` · wording revised ${question.revisedDate}` : ""}`;
}

export function evidencePolarity(instance) {
  const key = (instance.vectors?.[0]?.split("--")[0] || "neutral").toLowerCase();
  const labels = { supportive: "Supportive", contesting: "Contesting", partial: "Partial", neutral: "Neutral" };
  return { key, label: labels[key] ?? key };
}

export function evidenceRelationships(record, instance) {
  const rows = [];
  if (instance.relationship?.type === "same_recipient_followup") {
    rows.push({ targetId: instance.relationship.relatedInstanceId, text: instance.relationship.note });
  }
  for (const other of record.instances ?? []) {
    if (other.relationship?.type === "same_recipient_followup" && other.relationship.relatedInstanceId === instance.id) {
      rows.push({ targetId: other.id, text: `Same recipient as ${other.id}; that entry is a later report of this case, not an independent patient.` });
    }
  }
  return rows;
}

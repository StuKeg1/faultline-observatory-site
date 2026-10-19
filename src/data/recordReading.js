import { detectMutationType, resolveAssessmentMutation } from "./mutationClassifier.js";

/** All event types recorded on the latest dated day; no significance ranking. */
export function getRecordUpdateSummary(record) {
  const dates = (record.mutationLog ?? []).map((m) => m.date).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d));
  const date = dates.sort().at(-1) ?? null;
  if (!date) return { date: null, labels: ["No dated update recorded"] };
  const entries = record.mutationLog.filter((m) => m.date === date);
  const labels = new Set();
  const evidence = [];
  for (const mutation of entries) {
    const type = detectMutationType(mutation, record);
    if (type === "instance_added") { evidence.push(mutation); continue; }
    if (type.startsWith("assessment_")) {
      const assessment = resolveAssessmentMutation(mutation, record);
      labels.add(assessment?.changeKind === "verification_stage_correction"
        ? "Verification Stage correction recorded" : "Assessment updated");
      continue;
    }
    const wording = {
      record_created: "Record opened",
      provenance_review_completed: "Source review completed",
      editorial_correction: "Editorial correction recorded",
      record_annotation_updated: "Record annotation updated",
      open_question_added: "Question added",
      claim_scope_narrowed: "Claim scope narrowed",
      legacy_vocabulary_migrated: "Record terminology updated",
      record_identifier_migrated: "Record identifier updated",
      institutional_record_reconstruction: "Record reconstruction recorded",
    };
    if (type !== "creation_batch_internal") labels.add(wording[type] ?? "Record updated—see change log");
  }
  if (evidence.length) {
    const targets = evidence.map((m) => [...new Set(String(m.to).match(/\bIN-\d{3}\b/g) ?? [])]);
    const known = targets.every((ids) => ids.length === 1 && record.instances?.some((i) => i.id === ids[0]));
    const count = new Set(targets.flat()).size;
    labels.add(known && count > 1 ? `${count} evidence entries added` : "Evidence entry added");
  }
  return { date, labels: labels.size ? [...labels] : ["Record updated—see change log"] };
}

/** Presentation of existing record semantics; never an evidence reassessment. */
export function assessmentChangeLabel(previous, current) {
  if (!previous) return "Initial assessment";
  const stateChanged = previous.pressureState !== current.pressureState;
  const stageChanged = previous.verificationStage !== current.verificationStage;
  const stages = `${previous.verificationStage} → ${current.verificationStage}`;
  if (stateChanged && stageChanged) return `Pressure State and Verification Stage changed (${stages})`;
  if (stateChanged) return "Pressure State changed";
  if (stageChanged) {
    const action = current.changeKind === "verification_stage_correction" ? "correction recorded" : "changed";
    return `Verification Stage ${action} (${stages}); Pressure State unchanged`;
  }
  return "Assessment updated; Pressure State and Verification Stage unchanged";
}

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
  const types = ["same_recipient_followup", "same_trial_report"];
  const target = record.instances?.find(i => i.id === instance.relationship?.relatedInstanceId);
  if (target && target.id !== instance.id && types.includes(instance.relationship?.type)) {
    rows.push({ targetId: instance.relationship.relatedInstanceId, text: instance.relationship.note });
  }
  for (const other of record.instances ?? []) {
    if (other.id !== instance.id && types.includes(other.relationship?.type) && other.relationship.relatedInstanceId === instance.id) {
      rows.push({ targetId: other.id, text: other.relationship.type === "same_trial_report"
        ? `Same trial as ${other.id}; these are different reports from one trial, not independent replications.`
        : `Same recipient as ${other.id}; that entry is a later report of this case, not an independent patient.` });
    }
  }
  return rows;
}

/** Plain-language display only; the original field identifier is preserved. */
export function mutationFieldLabel(field) {
  const labels = {
    provenance_review: "Source review", provenance_correction: "Source or history correction",
    reference_corrected: "Reference correction", assessment_correction: "Assessment correction",
    verification_stage_challenge_opened: "Verification Stage challenge opened",
  };
  const words = String(field).replaceAll("_", " ");
  return labels[field] ?? words.charAt(0).toUpperCase() + words.slice(1);
}

export function recordCodeExplanations(text) {
  return [
    [/\bLPR-/, "LPR identifies an internal source-review record."],
    [/\bRN-/, "RN identifies an institutional note."],
    [/\bPROG-/, "PROG identifies a programme: AI (Artificial Intelligence), AM (Advanced Materials), BT (Biotechnology), or QE (Quantum Engineering)."],
  ].filter(([pattern]) => pattern.test(text)).map(([, explanation]) => explanation);
}

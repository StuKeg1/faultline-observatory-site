import { detectMutationType, resolveAssessmentMutation } from "./mutationClassifier.js";
import { getAssessmentHistory } from "./derive.js";

/** All event types recorded on the latest dated day; no significance ranking. */
export function getRecordUpdateSummary(record) {
  const dates = (record.mutationLog ?? []).map((m) => m.date).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d));
  const date = dates.sort().at(-1) ?? null;
  if (!date) return { date: null, labels: ["No dated update recorded"] };
  const entries = record.mutationLog.filter((m) => m.date === date);
  const assessments = record.assessments ?? [];
  const history = assessments.length
    ? getAssessmentHistory(record).map(a => chronologicalReadingAssessment(record, a))
    : [];
  const opened = entries.some(m => detectMutationType(m, record) === "record_created");
  const labels = new Set();
  const evidence = [];
  for (const mutation of entries) {
    const type = detectMutationType(mutation, record);
    if (type === "instance_added") { evidence.push(mutation); continue; }
    if (type.startsWith("assessment_")) {
      const assessment = resolveAssessmentMutation(mutation, record);
      // A dated assessment below supplies the specific label once, even when
      // several mutations reference it. Keep the fallback for legacy links.
      if (assessment?.date === date) continue;
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
  assessments.forEach((assessment, index) => {
    // Match the recorded date, not a reconstructed historical effective date.
    if (assessment.date !== date || (opened && index === 0)) return;
    labels.add(assessmentChangeLabel(history[index - 1], history[index]));
  });
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
  const types = ["same_recipient_followup", "same_recipient_analysis", "same_trial_report", "shared_publication"];
  const validOverlap = (entry, related) => (!entry.relationship?.sourceDoi ||
    entry.sources?.some(s => s.doi === entry.relationship.sourceDoi)) && (entry.relationship?.type !== "shared_publication" || (
    entry.relationship.sharedSourceDoi && [entry, related].every(i => i?.sources?.some(s => s.doi === entry.relationship.sharedSourceDoi))
  ));
  const target = record.instances?.find(i => i.id === instance.relationship?.relatedInstanceId);
  if (target && target.id !== instance.id && types.includes(instance.relationship?.type) && validOverlap(instance, target)) {
    rows.push({ targetId: instance.relationship.relatedInstanceId, text: instance.relationship.note });
  }
  for (const other of record.instances ?? []) {
    if (other.id !== instance.id && types.includes(other.relationship?.type) && other.relationship.relatedInstanceId === instance.id && validOverlap(other, instance)) {
      rows.push({ targetId: other.id, text: other.relationship.reverseNote ?? (other.relationship.type === "same_trial_report"
        ? `Same trial as ${other.id}; these are different reports from one trial, not independent replications.`
        : other.relationship.type === "shared_publication"
        ? (other.relationship.reverseNote ?? `Shares publication ${other.relationship.sharedSourceDoi} with ${other.id}; overlapping evidence is not independent replication.`)
        : other.relationship.type === "same_recipient_analysis"
        ? `Same recipient as ${other.id}; that entry reports immune profiling of this case, not an additional patient.`
        : `Same recipient as ${other.id}; that entry is a later report of this case, not an independent patient.`) });
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
    [/\bFCIF Admission Review\b/, "FCIF Admission Review is the Observatory’s process for deciding whether a claim enters the record; it is not external scientific peer review."],
    [/\bNormal Record Review\b/, "Normal Record Review is the Observatory’s assessment process for newly considered evidence, not external scientific peer review."],
    [/\bExpanded Access\b/, "Expanded Access permits investigational treatment outside a clinical trial; a case treated this way is not itself a clinical trial or independent replication."],
    [/\bLPR-/, "LPR identifies an internal source-review record."],
    [/\bVSC-/, "VSC identifies a verification-stage challenge and its review reference."],
    [/\bRN-/, "RN identifies an institutional note."],
    [/\bPROG-/, "PROG identifies a programme: AI (Artificial Intelligence), AM (Advanced Materials), BT (Biotechnology), or QE (Quantum Engineering)."],
  ].filter(([pattern]) => pattern.test(text)).map(([, explanation]) => explanation);
}

export function evidenceReadingStatus(record, instance) {
  const status = instance.evidenceStatus;
  if (!status?.reviewId || !record.instances?.some(i => i.id === instance.id) ||
    !record.mutationLog?.some(m => m.id === status.mutationId)) return null;
  const notices = {
    pending_correction: "Correction pending: source review found a material discrepancy in this entry. Its legacy wording is retained pending a governed correction.",
    withdrawn_attribution: "Legacy attribution withdrawn: the cited source does not substantiate the original claim. The entry is retained for history; this is not a notice that the cited paper was retracted.",
    excluded: "No verified source for this legacy attribution; excluded from the current evidence basis.",
    unverified: "Unverified legacy attribution: the source and reported result could not be traced. This entry does not establish the claimed finding.",
  };
  return Object.hasOwn(notices, status.kind) ? notices[status.kind] : null;
}

/** Only link receipts verified in the repository; do not invent paths. */
export function mutationReceiptLinks(mutation) {
  const path = "docs/reviews/MCP-CLARIFICATION-REPAIR-2026-10-08.json";
  return mutation.note?.includes(path) ? [{ path, href: `https://github.com/StuKeg1/faultline-observatory-site/blob/18c771128a8b85a3e62a65444f22c30ce8e7da1a/${path}` }] : [];
}

/** Narrow editorial rendering; original strings remain available beside it. */
export function assessmentReadingView(record, assessment) {
  let summary = assessment.summary;
  let assessorNote = assessment.assessorNote ?? "";
  if (record.id === "FR-AI-0009" && assessment.id === "AS-001") {
    summary = summary.replace("DreamerV3 (IN-001) independently shows", "A separate study, DreamerV3 (IN-001), shows");
    assessorNote = assessorNote.replace("recorded in Drive", "documented in the Observatory’s internal records");
  }
  if (record.id === "FR-AI-0008") assessorNote = assessorNote.replace("converter date", "date inherited from the original data import");
  if (record.id === "FR-BT-0005") assessorNote = assessorNote.replace("held outside LPR-001-D29", "reviewed separately from the earlier source check");
  return { summary, assessorNote, changed: summary !== assessment.summary || assessorNote !== (assessment.assessorNote ?? "") };
}

/** A retrospective annotation must not masquerade as an original stage event. */
export function chronologicalReadingAssessment(record, assessment) {
  if (record.id === "FR-AI-0008" && assessment.id === "AS-001" && assessment.verificationStageProvenance?.storedStage) {
    return { ...assessment, verificationStage: assessment.verificationStageProvenance.storedStage };
  }
  return assessment;
}

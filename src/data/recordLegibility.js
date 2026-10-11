/**
 * Record-legibility projection — a narrow, display-only view of the
 * current assessment, evidence admitted after it, and questions retained
 * on the record. It creates no assessment, trajectory class, or new record
 * field.
 */
import { getCurrentAssessment } from "./derive.js";
import { detectMutationType } from "./mutationClassifier.js";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function isValidDate(value) {
  if (typeof value !== "string" || !DATE_RE.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function elapsedSince(date, asOfDate) {
  if (!isValidDate(date) || !isValidDate(asOfDate)) return null;
  const [fromYear, fromMonth, fromDay] = date.split("-").map(Number);
  const [toYear, toMonth, toDay] = asOfDate.split("-").map(Number);
  let months = (toYear - fromYear) * 12 + toMonth - fromMonth;
  if (toDay < fromDay) months -= 1;
  if (months < 0) return null;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years && remainingMonths) return `${years}y ${remainingMonths}m`;
  if (years) return `${years}y`;
  return `${remainingMonths}m`;
}

/**
 * Evidence-gap rule: only an admitted evidence instance logged strictly
 * after the latest assessment is counted. Publication dates, editorial
 * repairs, provenance work, question updates, and same-day events are not
 * enough to claim that the assessment has unclosed evidence after it.
 */
export function getRecordLegibility(record, asOfDate = new Date().toISOString().slice(0, 10)) {
  const current = getCurrentAssessment(record);
  const evidenceSinceAssessment = (record.mutationLog ?? [])
    .filter((mutation) => mutation.date > current.date)
    .filter((mutation) => detectMutationType(mutation, record) === "instance_added")
    .sort((a, b) => a.date.localeCompare(b.date));

  const questions = (record.openQuestions ?? []).map((question) => ({
    ...question,
    elapsed: elapsedSince(question.raisedDate, asOfDate),
  }));

  return {
    current,
    evidenceSinceAssessment,
    questions,
  };
}

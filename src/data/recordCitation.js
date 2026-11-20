/**
 * Public citation projections (FIP-D02). Derived only; no canonical mutations.
 * Record URLs remain living pages, not immutable historical snapshots.
 */
import { getCurrentAssessment } from "./derive.js";
import { getRecordReference, getRecordVersionLabel } from "./recordReference.js";

const label = (record) => `Faultline Observatory. ${record.claim.shortLabel}. `;
const version = (record) => getRecordVersionLabel(getRecordReference(record));

export function getCitationDate(assessment) {
  if (assessment.historicalEffectiveDate?.precision === "unknown") {
    return `date uncertain (legacy; stored ${assessment.recordedDate}, not verified as issued)`;
  }
  if (assessment.historicalEffectiveDate) {
    return `${assessment.date} (historical chronology; original issuance date not independently established)`;
  }
  return assessment.date;
}

export function recordCitation(record) {
  return `${label(record)}Frontier Record ${record.id}. ${version(record)}. ${getRecordReference(record).canonicalUrl}`;
}

export function currentAssessmentCitation(record) {
  const assessment = getCurrentAssessment(record);
  const provenance = assessment.provenanceNote ? " [Assessment provenance: see record.]" : "";
  const stageReview = assessment.verificationStageProvenance?.disposition === "historically-unverified"
    ? " [Historical verification stage unverified.]" : "";
  return `${label(record)}Frontier Record ${record.id}, assessment ${assessment.id} (assessed ${getCitationDate(assessment)}). ${version(record)}.${provenance}${stageReview} ${getRecordReference(record).canonicalUrl}`;
}

export function evidenceInstanceCitation(record, instanceId) {
  const instance = record.instances?.find((entry) => entry.id === instanceId);
  if (!instance) return null;
  return `${label(record)}Frontier Record ${record.id}, evidence instance ${instance.id}. ${version(record)}. ${getRecordReference(record).canonicalUrl}#evidence-${instance.id}`;
}

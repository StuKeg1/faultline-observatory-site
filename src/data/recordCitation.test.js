import test from "node:test";
import assert from "node:assert/strict";
import { FR_QE_0001 } from "./records/FR-QE-0001.js";
import { FR_QE_0003 } from "./records/FR-QE-0003.js";
import { FR_BT_0004 } from "./records/FR-BT-0004.js";
import { FR_AI_0009 } from "./records/FR-AI-0009.js";
import { getCitationDate, recordCitation, currentAssessmentCitation, evidenceInstanceCitation } from "./recordCitation.js";
import { getAssessmentHistory } from "./derive.js";
import { getRecordReference, getRecordVersionLabel } from "./recordReference.js";

test("record citation preserves FR ID and canonical URL", () => {
  assert.match(recordCitation(FR_QE_0001), /Frontier Record FR-QE-0001/);
  assert.match(recordCitation(FR_QE_0001), /https:\/\/faultlinewatch\.com\/the-record\/fr-qe-0001\/$/);
  assert.match(recordCitation(FR_QE_0001), /Record as of M-012 \(2026-10-27\)/);
});
test("current assessment citation uses AS-ID and assessed date, not later mutation", () => {
  const citation = currentAssessmentCitation(FR_QE_0001);
  assert.match(citation, /assessment AS-002 \(assessed 2026-07-22\)/);
  assert.match(citation, /Record as of M-012 \(2026-10-27\)/);
});
test("same-date assessment identities remain distinct in canonical history", () => {
  const history = getAssessmentHistory(FR_BT_0004);
  assert.equal(history.at(-2).date, "2026-11-01");
  assert.equal(history.at(-1).date, "2026-11-01");
  assert.equal(history.at(-2).id, "AS-004");
  assert.equal(history.at(-1).id, "AS-005");
  assert.match(currentAssessmentCitation(FR_BT_0004), /assessment AS-005 \(assessed 2026-11-01\)/);
  assert.match(currentAssessmentCitation(FR_BT_0004), /Record as of M-020 \(2026-11-01\)/);
});
test("legacy date never becomes a false issued date", () => {
  const historical = getAssessmentHistory(FR_QE_0003).find((assessment) => assessment.id === "AS-001");
  assert.match(getCitationDate(historical), /date uncertain \(legacy/);
  assert.match(getCitationDate(historical), /stored 2024-01-15, not verified as issued/);
  assert.doesNotMatch(getCitationDate(historical), /^2024-01-15$/);
});
test("evidence citation identifies IN-ID and existing anchor without inventing DOI", () => {
  const citation = evidenceInstanceCitation(FR_AI_0009, "IN-001");
  assert.match(citation, /FR-AI-0009, evidence instance IN-001/);
  assert.match(citation, /#evidence-IN-001$/);
  assert.match(citation, /Record as of M-016 \(2026-11-10\)/);
  assert.doesNotMatch(citation, /doi:/i);
});
test("unknown evidence instance is not cited", () => assert.equal(evidenceInstanceCitation(FR_AI_0009, "IN-999"), null));
test("missing provenance does not fabricate stored issue dates", () => {
  assert.equal(getCitationDate({ date: "2026-11-01" }), "2026-11-01");
  assert.match(getCitationDate({ date: "Mar 1989", recordedDate: "2024-01-15", historicalEffectiveDate: { precision: "month" } }), /historical chronology/);
});


test("metadata and all citations derive their version from the same projection", () => {
  const reference = getRecordReference(FR_QE_0001);
  assert.equal(reference.latestMutationId, "M-012");
  assert.equal(reference.updateDate, "2026-10-27");
  assert.equal(reference.assessmentId, "AS-002");
  assert.equal(reference.mutationCount, 12);
  for (const text of [recordCitation(FR_QE_0001), currentAssessmentCitation(FR_QE_0001), evidenceInstanceCitation(FR_QE_0001, "IN-001")]) {
    assert.ok(text.includes(getRecordVersionLabel(reference)));
  }
});
test("version chooses last same-day mutation by ID, not array ordering", () => {
  const record = { id: "FR-QE-TEST", claim: { shortLabel: "Test" }, assessments: [{ id: "AS-001", date: "2026-01-01" }], mutationLog: [
    { id: "M-002", date: "2026-01-02" },
    { id: "M-010", date: "2026-01-02" },
    { id: "M-009", date: "2026-01-02" },
  ] };
  const ref = getRecordReference(record);
  assert.equal(ref.latestMutationId, "M-010");
  assert.equal(ref.updateDate, "2026-01-02");
});
test("no dated mutation cannot masquerade as immutable version", () => {
  const record = { id: "FR-QE-TEST", claim: { shortLabel: "Test" }, assessments: [{ id: "AS-001", date: "2026-01-01" }], mutationLog: [] };
  const ref = getRecordReference(record);
  assert.equal(ref.latestMutationId, null);
  assert.match(getRecordVersionLabel(ref), /not established/);
});

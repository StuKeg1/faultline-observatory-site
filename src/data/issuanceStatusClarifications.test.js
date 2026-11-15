import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { ALL_RECORDS } from "./corpus.js";
import { getCurrentAssessment } from "./derive.js";
import { ISSUANCE_STATUS_CLARIFICATIONS, getIssuanceStatusClarifications, assertIssuanceStatusClarifications } from "./issuanceStatusClarifications.js";
import { canonicalRecordView, recordSummary, searchRecords } from "./mcpProjection.js";

const cases = [
  { id: "FR-AM-0001", assessmentId: "AS-006", mutationId: "M-017", previousId: "AS-005", assessments: 6, mutations: 17 },
  { id: "FR-AM-0005", assessmentId: "AS-005", mutationId: "M-022", previousId: "AS-004", assessments: 5, mutations: 22 },
];
const getRecord = id => ALL_RECORDS.find(record => record.id === id);

test("FIP-A03 issuance annotations bind only to exact retained records, assessment IDs and mutation IDs", () => {
  assert.equal(ISSUANCE_STATUS_CLARIFICATIONS.length, 2);
  assert.deepEqual([...new Set(ISSUANCE_STATUS_CLARIFICATIONS.map(item => item.id))].length, 2);
  assert.doesNotThrow(() => assertIssuanceStatusClarifications(ALL_RECORDS));
  for (const item of cases) {
    const record = getRecord(item.id);
    const original = structuredClone(record);
    const annotations = getIssuanceStatusClarifications(record);
    assert.equal(annotations.length, 1);
    assert.equal(annotations[0].assessmentId, item.assessmentId);
    assert.equal(annotations[0].mutationId, item.mutationId);
    assert.equal(annotations[0].scope, "issuance_authority_status_only");
    assert.equal(annotations[0].reviewDate, "2026-11-15");
    assert.equal(annotations[0].mergeCommit, "2a4b2f7c2623fb66f800e45e60aabd94eff88456");
    assert.match(annotations[0].text, /not pending/);
    assert.deepEqual(record, original, "read-only annotation must leave canonical source untouched");
    assert.equal(getCurrentAssessment(record).verificationStage, "VS-04");
    assert.equal(getCurrentAssessment(record).pressureState, "collapsed");
    assert.equal(record.assessments.at(-1).id, item.assessmentId);
    assert.equal(record.mutationLog[0].id, item.mutationId);
    assert.equal(record.assessments.at(-2).id, item.previousId);
    assert.equal(record.assessments.at(-2).verificationStage, "VS-05");
    assert.equal(record.assessments.length, item.assessments);
    assert.equal(record.mutationLog.length, item.mutations);
  }
  for (const record of ALL_RECORDS.filter(item => !cases.some(c => c.id === item.id))) {
    assert.deepEqual(getIssuanceStatusClarifications(record), [], `${record.id} must not receive a clarification`);
  }
});

test("FIP-A03 issue note annotations fail closed under source drift, mismatched transitions and missing targets", () => {
  for (const item of cases) {
    const record = getRecord(item.id);
    const mutate = (fn) => {
      const clone = structuredClone(record);
      fn(clone);
      assert.deepEqual(getIssuanceStatusClarifications(clone), []);
      assert.throws(() => assertIssuanceStatusClarifications(ALL_RECORDS.map(r => r.id === item.id ? clone : r)), /source mismatch/);
    };
    mutate(r => { r.assessments.at(-1).assessorNote += " altered"; });
    mutate(r => { r.mutationLog[0].note += " altered"; });
    mutate(r => { r.mutationLog[0].to = "AS-OTHER / COLLAPSED / VS-04"; });
    mutate(r => { r.assessments.at(-1).verificationStage = "VS-05"; });
    mutate(r => { r.assessments.at(-1).date = "2026-11-16"; });
    mutate(r => { r.assessments.pop(); });
    mutate(r => { r.mutationLog.shift(); });
    mutate(r => { r.assessments.push(structuredClone(r.assessments.at(-1))); });
    mutate(r => { r.mutationLog.push(structuredClone(r.mutationLog[0])); });
  }
});

test("FIP-A03 full MCP views expose the same annotations without altering thin summaries", () => {
  for (const item of cases) {
    const record = getRecord(item.id);
    const full = canonicalRecordView(record);
    const annotation = getIssuanceStatusClarifications(record);
    assert.deepEqual(full.issuanceStatusClarifications, annotation);
    assert.deepEqual(full.mutationLog, record.mutationLog);
    assert.equal(full.assessments.length, record.assessments.length);
    assert.equal(full.currentAssessment.verificationStage, "VS-04");
    assert.equal(recordSummary(record).issuanceStatusClarifications, undefined);
    const found = searchRecords({ query: item.id, detail: "full" });
    const fullHit = found.records.find(r => r.id === item.id);
    assert.ok(fullHit, `full search must find ${item.id}`);
    assert.deepEqual(fullHit.issuanceStatusClarifications, annotation);
    const thin = searchRecords({ query: item.id, detail: "summary" });
    assert.equal(thin.records.find(r => r.id === item.id)?.issuanceStatusClarifications, undefined);
  }
  for (const other of ALL_RECORDS.filter(record => !cases.some(c => c.id === record.id))) {
    assert.equal(canonicalRecordView(other).issuanceStatusClarifications, undefined);
  }
});

test("FIP-A03 site annotations appear adjacent to original notes in all three intended render paths", () => {
  const source = readFileSync(new URL("../pages/FrontierRecord.jsx", import.meta.url), "utf8");
  assert.match(source, /function IssuanceStatusNote/);
  assert.match(source, /Post-issuance clarification/);
  assert.match(source, /<IssuanceStatusNote clarification={issuanceClarification} \/>/);
  assert.match(source, /<IssuanceStatusNote clarification={issuanceClarifications\.find\(item => item\.assessmentId === a\.id\)} \/>/);
  assert.match(source, /<IssuanceStatusNote clarification={issuanceClarifications\.find\(item => item\.mutationId === m\.id\)} \/>/);
  assert.match(source, /<p>{m.note}<\/p><IssuanceStatusNote/);
  assert.match(source, /<OriginalAssessmentWording assessment={a} reading={reading} \/>/);
});

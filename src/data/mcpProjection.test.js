import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import { getCurrentAssessment, getAssessmentHistory } from "./derive.js";
import { canonicalRecordView, recordSummary, searchRecords, mcpHttpExample } from "./mcpProjection.js";

test("shared MCP view preserves canonical fields and governed assessment projections", () => {
  for (const record of ALL_RECORDS) {
    const view = canonicalRecordView(record);
    for (const [key, value] of Object.entries(record)) assert.deepEqual(view[key], key === "assessments" ? getAssessmentHistory(record) : value);
    assert.deepEqual(view.currentAssessment, getCurrentAssessment(record));
    assert.equal(recordSummary(record).verificationStage, view.currentAssessment.verificationStage);
  }
});

test("HTTP documentation example uses the same live corpus projection as MCP search", () => {
  const sample = JSON.parse(mcpHttpExample());
  const body = JSON.parse(sample.result.content[0].text);
  assert.deepEqual(body, searchRecords({ query: "room-temperature superconductivity", limit: 1 }));
  const record = ALL_RECORDS.find(r => r.id === "FR-AM-0005");
  assert.equal(body.records[0].id, record.id);
  assert.equal(body.records[0].verificationStage, getCurrentAssessment(record).verificationStage);
  assert.equal(body.records[0].assessments, record.assessments.length);
  assert.equal(body.records[0].assessmentDate, getCurrentAssessment(record).date);
});

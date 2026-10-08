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

test("withdrawn AGI architecture wording is attributed to historical AS-001", () => {
  const result = searchRecords({ query: "the path is bifurcating architecturally" });
  assert.deepEqual(result.records.map(r => r.id), ["FR-AI-0005"]);
  const references = result.matches.find(m => m.recordId === "FR-AI-0005").references;
  assert.ok(references.some(r => r.field === "assessments.AS-001.summary" && r.assessmentStatus === "historical"));
  assert.ok(references.every(r => r.context === "historical_assessment"));
  assert.match(result.matchPolicy, /historical matches do not endorse superseded claims/);
});

test("search preserves record selection and response projections while adding attribution", () => {
  for (const query of ["scaling", "sources", '"pressureState": "fragmenting"', " ", "nonexistent-unique-string"]) {
    const expected = ALL_RECORDS.filter(record => JSON.stringify({ record,
      programmeMetadata: canonicalRecordView(record).programmeMetadata }, null, 2).toLowerCase().includes(query.trim().toLowerCase())).slice(0, 20);
    const result = searchRecords({ query });
    assert.deepEqual(result.records, expected.map(recordSummary));
    assert.equal(result.count, expected.length);
    assert.deepEqual(result.matches.map(m => m.recordId), expected.map(r => r.id));
    assert.ok(result.matches.every(m => m.references.length > 0));
  }
});

test("search attributes current assessment, evidence and mutation fields independently", () => {
  const current = searchRecords({ query: "unresolved path-definition and scaling-regime changes", detail: "full" });
  assert.ok(current.matches.find(m => m.recordId === "FR-AI-0005").references.some(r => r.assessmentStatus === "current" && r.assessmentId === "AS-003"));
  const evidence = searchRecords({ query: "The specific target-migration event previously attributed to IN-006 is withdrawn" });
  assert.ok(evidence.matches.find(m => m.recordId === "FR-AI-0005").references.some(r => r.context === "evidence_instance" && r.entryId === "IN-006"));
  const mutation = searchRecords({ query: "completed the bounded downstream consistency repair" });
  assert.ok(mutation.matches.find(m => m.recordId === "FR-AI-0005").references.some(r => r.context === "mutation_history" && r.entryId === "M-017"));
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

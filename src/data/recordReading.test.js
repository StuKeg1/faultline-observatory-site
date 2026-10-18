import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import { assessmentChangeLabel, evidencePolarity, evidenceRelationships, questionDateText } from "./recordReading.js";
import { getAssessmentHistory } from "./derive.js";

test("AI-0008 history distinguishes a recorded stage correction from unchanged axes", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  const before = JSON.stringify(record);
  const history = getAssessmentHistory(record);
  assert.equal(assessmentChangeLabel(null, history[0]), "Initial assessment");
  assert.equal(assessmentChangeLabel(history[0], history[1]), "Verification Stage changed (VS-05 → VS-03); Pressure State unchanged");
  assert.equal(assessmentChangeLabel(history[1], history[2]), "Assessment updated; Pressure State and Verification Stage unchanged");
  assert.equal(assessmentChangeLabel(history[2], history[3]), "Verification Stage correction recorded (VS-03 → VS-05); Pressure State unchanged");
  assert.equal(JSON.stringify(record), before);
});

test("history labels distinguish changes to either or both assessment axes", () => {
  const previous = { pressureState: "emerging", verificationStage: "VS-02" };
  assert.equal(assessmentChangeLabel(previous, { ...previous, pressureState: "escalating" }), "Pressure State changed");
  assert.equal(assessmentChangeLabel(previous, { pressureState: "escalating", verificationStage: "VS-03" }), "Pressure State and Verification Stage changed (VS-02 → VS-03)");
  assert.equal(assessmentChangeLabel(previous, { ...previous, verificationStage: "VS-03" }), "Verification Stage changed (VS-02 → VS-03); Pressure State unchanged");
});

test("same-recipient follow-up is explicit in both directions without merging entries", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-BT-0005");
  assert.equal(record.instances.length, 8);
  const original = record.instances.find(i => i.id === "IN-003");
  const followup = record.instances.find(i => i.id === "IN-008");
  assert.equal(evidenceRelationships(record, original)[0].targetId, "IN-008");
  assert.equal(evidenceRelationships(record, followup)[0].targetId, "IN-003");
  assert.match(evidenceRelationships(record, followup)[0].text, /not another patient/);
  for (const r of ALL_RECORDS) for (const i of r.instances) for (const relationship of evidenceRelationships(r, i)) {
    assert.ok(r.instances.some(target => target.id === relationship.targetId));
  }
});

test("partial remains an evidential relation, not a quality verdict or reassignment", () => {
  const instance = ALL_RECORDS.find(r => r.id === "FR-AI-0009").instances.find(i => i.id === "IN-009");
  const before = JSON.stringify(instance);
  assert.deepEqual(evidencePolarity(instance), { key: "partial", label: "Partial" });
  assert.equal(JSON.stringify(instance), before);
  assert.deepEqual(evidencePolarity({ vectors: ["SUPPORTIVE--bounded"] }), { key: "supportive", label: "Supportive" });
});

test("known wording revision does not inherit the elapsed age of a legacy question", () => {
  const q = ALL_RECORDS.find(r => r.id === "FR-AI-0008").openQuestions.find(q => q.id === "OQ-003");
  assert.equal(q.raisedDate, "2024-01-15");
  assert.equal(questionDateText(q), "Original date uncertain (legacy) · wording revised 2026-09-06");
  assert.equal(questionDateText({ raisedDate: "2026-09-28" }), "Question recorded 2026-09-28");
});

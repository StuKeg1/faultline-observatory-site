import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import { evidencePolarity, evidenceRelationships, questionDateText } from "./recordReading.js";

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

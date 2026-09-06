import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import {
  EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS,
  getEvidenceBrief,
} from "./evidenceBrief.js";
import { getCurrentAssessment } from "./derive.js";

test("Evidence Brief prototype is restricted to the five reviewed Compatible records", () => {
  assert.deepEqual(
    [...EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS].sort(),
    ["FR-AI-0007", "FR-AI-0008", "FR-AI-0009", "FR-AM-0007", "FR-BT-0005"],
  );

  for (const record of ALL_RECORDS) {
    const brief = getEvidenceBrief(record);
    assert.equal(Boolean(brief), EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(record.id), record.id);
  }
});

test("Evidence Brief fields are projections of canonical record fields", () => {
  for (const record of ALL_RECORDS.filter((item) => EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(item.id))) {
    const brief = getEvidenceBrief(record);
    assert.deepEqual(brief.current, getCurrentAssessment(record), `${record.id}: current assessment`);
    assert.equal(brief.evidenceCount, record.instances.length, `${record.id}: evidence count`);
    assert.deepEqual(brief.attractors, record.mechanisms.filter((item) => item.type === "ATTRACTOR"), `${record.id}: attractors`);
    assert.equal(brief.questions, record.openQuestions, `${record.id}: open questions`);
  }
});

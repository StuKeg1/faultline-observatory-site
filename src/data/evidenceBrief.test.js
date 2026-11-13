import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS } from "./corpus.js";
import {
  EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS,
  getEvidenceBrief,
} from "./evidenceBrief.js";
import { getCurrentAssessment } from "./derive.js";

test("Evidence Brief prototype is restricted to the six reviewed records", () => {
  assert.deepEqual(
    [...EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS].sort(),
    ["FR-AI-0007", "FR-AI-0008", "FR-AI-0009", "FR-AM-0007", "FR-BT-0005", "FR-QE-0004"],
  );

  for (const record of ALL_RECORDS) {
    const brief = getEvidenceBrief(record);
    assert.equal(Boolean(brief), EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(record.id), record.id);
  }
});

test("Evidence Brief fields are projections of canonical record fields", () => {
  for (const record of ALL_RECORDS.filter((item) => EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(item.id))) {
    const brief = getEvidenceBrief(record);
    const current = getCurrentAssessment(record);
    assert.deepEqual(brief.current, { pressureState: current.pressureState, date: current.date }, `${record.id}: current assessment metadata only`);
    assert.equal(brief.evidenceCount, record.instances.length, `${record.id}: evidence count`);
    assert.equal(brief.attractorCount, record.mechanisms.filter((item) => item.type === "ATTRACTOR").length, `${record.id}: attractors`);
    assert.equal(brief.questionCount, record.openQuestions.length, `${record.id}: questions`);
  }
});

test("The Helios lead is tied to the assessment that reviewed the finding", () => {
  const record = ALL_RECORDS.find(({ id }) => id === "FR-QE-0004");
  const brief = getEvidenceBrief(record);
  const current = getCurrentAssessment(record);
  if (current.id === "AS-005") {
    assert.equal(brief.whatChanged.evidenceId, "IN-011");
    assert.equal(brief.whatChanged.date, record.instances.find(({ id }) => id === "IN-011").date);
  }
  const superseded = { ...record, assessments: [...record.assessments, { ...current, id: "AS-TEST" }] };
  assert.equal(getEvidenceBrief(superseded).whatChanged, undefined);
});

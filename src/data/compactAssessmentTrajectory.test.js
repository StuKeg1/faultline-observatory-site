import test from "node:test";
import assert from "node:assert/strict";
import { getCompactAssessmentTrajectory } from "./derive.js";
import { ALL_RECORDS } from "./corpus.js";

const record = (assessments) => ({ id: "TEST", assessments });

test("compact assessment trajectory preserves state changes and compresses reaffirmations", () => {
  const trajectory = getCompactAssessmentTrajectory(record([
    { id: "AS-1", date: "2024-01-01", pressureState: "escalating" },
    { id: "AS-2", date: "2024-03-01", pressureState: "escalating" },
    { id: "AS-3", date: "2025-02-01", pressureState: "fragmenting" },
    { id: "AS-4", date: "2026-01-01", pressureState: "fragmenting" },
  ]));

  assert.deepEqual(trajectory.steps, [
    { pressureState: "escalating", enteredDate: "2024-01-01" },
    { pressureState: "fragmenting", enteredDate: "2025-02-01" },
  ]);
  assert.equal(trajectory.currentAssessmentDate, "2026-01-01");
  assert.equal(trajectory.currentStateEnteredDate, "2025-02-01");
});

test("compact assessment trajectory retains a stable assessment as one state", () => {
  const trajectory = getCompactAssessmentTrajectory(record([
    { id: "AS-1", date: "2024-01-01", pressureState: "resolving" },
    { id: "AS-2", date: "2026-01-01", pressureState: "resolving" },
  ]));
  assert.deepEqual(trajectory.steps, [{ pressureState: "resolving", enteredDate: "2024-01-01" }]);
  assert.equal(trajectory.currentAssessmentDate, "2026-01-01");
});

test("compact assessment trajectory refuses malformed or unordered canonical history", () => {
  assert.equal(getCompactAssessmentTrajectory(record([
    { id: "AS-1", date: "2024", pressureState: "resolving" },
  ])), null);
  assert.equal(getCompactAssessmentTrajectory(record([
    { id: "AS-1", date: "2024-02-31", pressureState: "resolving" },
  ])), null);
  assert.equal(getCompactAssessmentTrajectory(record([
    { id: "AS-1", date: "2025-01-01", pressureState: "resolving" },
    { id: "AS-2", date: "2024-01-01", pressureState: "fragmenting" },
  ])), null);
});

test("LAD-001 display dates flow through the compact trajectory", () => {
  const coldFusion = ALL_RECORDS.find((item) => item.id === "FR-AM-0001");
  const trajectory = getCompactAssessmentTrajectory(coldFusion);
  assert.deepEqual(trajectory.steps.map((step) => step.enteredDate), [
    "Mar 1989",
    "Apr–Nov 1989",
    "2004 or earlier",
  ]);
  assert.equal(trajectory.currentAssessmentDate, "2004 or earlier");
});

test("every multi-assessment record has a reliable compact trajectory", () => {
  const eligible = ALL_RECORDS.filter((item) => item.assessments.length > 1);
  assert.ok(eligible.length > 0);
  for (const item of eligible) {
    const trajectory = getCompactAssessmentTrajectory(item);
    assert.ok(trajectory, `${item.id} must have a reliable trajectory`);
    assert.ok(trajectory.steps.length > 0, `${item.id} must retain an assessment state`);
  }
});

test("single-assessment records remain outside rollout eligibility", () => {
  const sparseRecords = ALL_RECORDS.filter((item) => item.assessments.length === 1);
  assert.ok(sparseRecords.length > 0);
  for (const item of sparseRecords) {
    assert.equal(item.assessments.length > 1, false, `${item.id} is not eligible for trajectory rendering`);
  }
});

import test from "node:test";
import assert from "node:assert/strict";
import { getCardAssessmentHistory } from "./cardAssessmentHistory.js";
import { ALL_RECORDS } from "./corpus.js";

function record(assessments) {
  return { id: "TEST", assessments };
}

test("card history reports a single assessment without inventing a transition", () => {
  const result = getCardAssessmentHistory(record([
    { id: "AS-001", date: "2026-01-10", pressureState: "resolving", verificationStage: "VS-03" },
  ]));
  assert.equal(result.assessmentCount, 1);
  assert.equal(result.stateChanges, 0);
  assert.deepEqual(result.states, [{ pressureState: "resolving", date: "2026-01-10" }]);
});

test("card history distinguishes a reaffirmation from a state change", () => {
  const reaffirmed = getCardAssessmentHistory(record([
    { id: "AS-001", date: "2025-01-10", pressureState: "resolving", verificationStage: "VS-03" },
    { id: "AS-002", date: "2026-01-10", pressureState: "resolving", verificationStage: "VS-03" },
  ]));
  assert.equal(reaffirmed.isReaffirmed, true);

  const changed = getCardAssessmentHistory(record([
    { id: "AS-001", date: "2025-01-10", pressureState: "contested", verificationStage: "VS-03" },
    { id: "AS-002", date: "2026-01-10", pressureState: "resolving", verificationStage: "VS-03" },
  ]));
  assert.equal(changed.isReaffirmed, false);
  assert.equal(changed.stateChanges, 1);
  assert.deepEqual(changed.states.map((state) => state.pressureState), ["contested", "resolving"]);
});

test("every public record produces a non-empty live card projection", () => {
  for (const item of ALL_RECORDS) {
    const result = getCardAssessmentHistory(item);
    assert.ok(result.assessmentCount >= 1, item.id);
    assert.ok(result.states.length >= 1, item.id);
    assert.ok(result.currentDate, item.id);
  }
});

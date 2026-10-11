import test from "node:test";
import assert from "node:assert/strict";
import { getRecordLegibility } from "./recordLegibility.js";
import { ALL_RECORDS } from "./corpus.js";

const base = {
  id: "TEST",
  assessments: [{ id: "AS-001", date: "2026-01-10", pressureState: "contested", verificationStage: "VS-03" }],
  mutationLog: [
    { id: "M-004", date: "2026-02-01", field: "description_corrected", from: "x", to: "y" },
    { id: "M-003", date: "2026-01-20", field: "instance_added", from: "—", to: "IN-002" },
    { id: "M-002", date: "2026-01-10", field: "instance_added", from: "—", to: "IN-001" },
  ],
  openQuestions: [{ id: "OQ-001", question: "What remains unresolved?", raisedDate: "2025-04-10" }],
};

test("record legibility counts only admitted evidence after the current assessment", () => {
  const projection = getRecordLegibility(base, "2026-10-11");
  assert.deepEqual(projection.evidenceSinceAssessment.map((m) => m.id), ["M-003"]);
  assert.equal(projection.questions[0].elapsed, "1y 6m");
});

test("record legibility does not derive a gap from editorial changes or same-day mutations", () => {
  const projection = getRecordLegibility({ ...base, mutationLog: base.mutationLog.filter((m) => m.id !== "M-003") }, "2026-10-11");
  assert.equal(projection.evidenceSinceAssessment.length, 0);
});

test("every recorded question has a usable date for public age display", () => {
  for (const record of ALL_RECORDS) {
    const projection = getRecordLegibility(record, "2026-10-11");
    for (const question of projection.questions) {
      assert.match(question.raisedDate, /^\d{4}-\d{2}-\d{2}$/, `${record.id} ${question.id}`);
      assert.ok(question.elapsed !== null, `${record.id} ${question.id} requires a displayable age`);
    }
  }
});

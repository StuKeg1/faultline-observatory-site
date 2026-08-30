import test from "node:test";
import assert from "node:assert/strict";
import { getAssessmentRecency } from "./assessmentRecency.js";
import { ALL_RECORDS } from "./corpus.js";

test("initial assessment is reported as initial recency", () => {
  const recency = getAssessmentRecency({
    id: "FR-TEST-0001",
    assessments: [
      { id: "AS-001", date: "2024-01-15", pressureState: "fragmenting" },
    ],
  });

  assert.deepEqual(recency, {
    date: "2024-01-15",
    type: "initial",
    reaffirmation: false,
  });
});

test("same-state subsequent assessment is a reaffirming reassessment", () => {
  const recency = getAssessmentRecency({
    id: "FR-TEST-0002",
    assessments: [
      { id: "AS-001", date: "2024-01-15", pressureState: "fragmenting" },
      { id: "AS-002", date: "2026-07-20", pressureState: "fragmenting" },
    ],
  });

  assert.deepEqual(recency, {
    date: "2026-07-20",
    type: "reassessment",
    reaffirmation: true,
  });
});

test("state-changing subsequent assessment is a non-reaffirming reassessment", () => {
  const recency = getAssessmentRecency({
    id: "FR-TEST-0003",
    assessments: [
      { id: "AS-001", date: "2024-01-15", pressureState: "fragmenting" },
      { id: "AS-002", date: "2026-07-20", pressureState: "resolving" },
    ],
  });

  assert.deepEqual(recency, {
    date: "2026-07-20",
    type: "reassessment",
    reaffirmation: false,
  });
});

test("records without assessments remain structurally invalid", () => {
  assert.throws(
    () => getAssessmentRecency({ id: "FR-TEST-0004", assessments: [] }),
    /has no assessments — structurally invalid/,
  );
});

test("LAD-001 historical display dates are used by assessment recency", () => {
  const coldFusion = ALL_RECORDS.find((record) => record.id === "FR-AM-0001");
  const recency = getAssessmentRecency(coldFusion);
  assert.equal(recency.date, "2004 or earlier");
  assert.equal(coldFusion.assessments.at(-1).date, "2024-01-15");
});

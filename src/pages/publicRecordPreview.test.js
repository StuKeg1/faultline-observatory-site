import assert from "node:assert/strict";
import test from "node:test";
import {
  getValidTrajectoryEvents,
  selectProgrammePreview,
  selectRecordsPreview,
  selectTrajectoryPreview,
} from "./publicRecordPreview.js";

function record(id, updated, { status = "open", assessments } = {}) {
  return {
    id,
    status,
    claim: { shortLabel: `${id} title`, openedDate: "2025-01-01" },
    mutationLog: updated ? [{ date: updated }] : [],
    assessments: assessments ?? [
      { date: "2025-01-01", verificationStage: "VS-01" },
      { date: updated ?? "2025-02-01", verificationStage: "VS-02" },
    ],
  };
}

test("Programme selection preserves canonical order and excludes invalid entries", () => {
  const programmes = [
    { id: "PROG-QE", name: "Quantum" },
    { id: "not-public", name: "Invalid" },
    { id: "PROG-AI", name: "AI" },
    { id: "PROG-AM", name: "Materials" },
    { id: "PROG-BT", name: "Biotechnology" },
  ];
  assert.deepEqual(selectProgrammePreview(programmes).map(({ id }) => id), [
    "PROG-QE", "PROG-AI", "PROG-AM",
  ]);
});

test("trajectory selection chooses the newest eligible record", () => {
  const selected = selectTrajectoryPreview([
    record("FR-QE-0001", "2026-01-01"),
    record("FR-AI-0001", "2026-03-01"),
  ]);
  assert.equal(selected.record.id, "FR-AI-0001");
});

test("trajectory tie-breaking uses ascending record ID", () => {
  const selected = selectTrajectoryPreview([
    record("FR-QE-0002", "2026-03-01"),
    record("FR-QE-0001", "2026-03-01"),
  ]);
  assert.equal(selected.record.id, "FR-QE-0001");
});

test("trajectory events reject non-canonical stages and malformed optional data", () => {
  const malformed = record("FR-QE-0001", null, {
    assessments: [
      { date: "2025-01-01", verificationStage: "VS-01" },
      { date: "not-a-date", verificationStage: "VS-02" },
      { date: "2025-03-01", verificationStage: "VS-99" },
    ],
  });
  assert.equal(getValidTrajectoryEvents(malformed).length, 1);
  assert.equal(selectTrajectoryPreview([malformed]), null);
  assert.equal(selectTrajectoryPreview([{ id: "FR-QE-0002" }]), null);
});

test("records selection includes closed records", () => {
  const selected = selectRecordsPreview([
    record("FR-QE-0001", "2026-01-01"),
    record("FR-AM-0005", "2026-04-01", { status: "closed" }),
    record("FR-AI-0001", "2026-03-01"),
  ]);
  assert.ok(selected.some(({ id }) => id === "FR-AM-0005"));
});

test("records tie-breaking uses ascending record ID", () => {
  const selected = selectRecordsPreview([
    record("FR-QE-0002", "2026-03-01"),
    record("FR-QE-0001", "2026-03-01"),
  ]);
  assert.deepEqual(selected.map(({ id }) => id), ["FR-QE-0001", "FR-QE-0002"]);
});

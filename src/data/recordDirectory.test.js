import assert from "node:assert/strict";
import test from "node:test";
import { ALL_RECORDS } from "./corpus.js";
import { getCurrentAssessment } from "./derive.js";
import { assertValidFrontiers } from "./frontiers.js";
import { PRESSURE_STATE_FILTERS, assertSupportedPressureStates } from "./pressureStates.js";
import { applyRecordDirectoryView, getRecordUpdatedDate } from "./recordDirectory.js";

test("the default Directory view preserves the complete corpus", () => {
  const results = applyRecordDirectoryView(ALL_RECORDS);
  assert.equal(results.length, ALL_RECORDS.length);
  assert.ok(results.some(({ id }) => id === "FR-AM-0005"));
});

test("all current pressure states are supported and selectable", () => {
  assert.doesNotThrow(() => assertSupportedPressureStates(ALL_RECORDS, getCurrentAssessment));
  const offered = new Set(PRESSURE_STATE_FILTERS.map(({ value }) => value));
  for (const record of ALL_RECORDS) {
    assert.ok(offered.has(getCurrentAssessment(record).pressureState), record.id);
  }
  const currentStates = new Set(
    ALL_RECORDS.map((record) => getCurrentAssessment(record).pressureState),
  );
  for (const state of currentStates) {
    assert.ok(applyRecordDirectoryView(ALL_RECORDS, { state }).length > 0, state);
  }
  assert.ok(applyRecordDirectoryView(ALL_RECORDS, { state: "fragmenting" })
    .some(({ id }) => id === "FR-QE-0001"));
  assert.equal(PRESSURE_STATE_FILTERS.some(({ value }) => value === "contested"), false);
});

test("frontier taxonomy is valid and query filters the corpus", () => {
  assert.doesNotThrow(() => assertValidFrontiers(ALL_RECORDS));
  const results = applyRecordDirectoryView(ALL_RECORDS, { frontier: "energy-systems" });
  assert.deepEqual(results.map(({ id }) => id).sort(), [
    "FR-AM-0001", "FR-AM-0002", "FR-AM-0004", "FR-AM-0006",
  ]);
  assert.deepEqual(applyRecordDirectoryView(ALL_RECORDS, { frontier: "not-real" }), []);
});

test("updated sort is descending by the newest mutation date", () => {
  const results = applyRecordDirectoryView(ALL_RECORDS, { sort: "updated" });
  const dates = results.map(getRecordUpdatedDate);
  assert.deepEqual(dates, [...dates].sort().reverse());
});

test("FR-QE-0001 conforms to its governed S4 reconstruction baseline", () => {
  const record = ALL_RECORDS.find(({ id }) => id === "FR-QE-0001");
  assert.ok(record);
  assert.equal(
    record.claim.statement,
    "A programmable quantum processor has demonstrated computational supremacy — " +
      "performing a well-defined sampling task beyond the practical reach of any classical computer.",
  );
  assert.equal(
    record.claim.shortLabel,
    "Google Quantum Advantage (Sycamore) — Computational Supremacy via Random Circuit Sampling",
  );
  assert.equal(record.claim.openedDate, "2024-01-01");
  assert.equal(record.claim.subject, "Google Quantum AI (Sycamore processor)");
  assert.equal(record.claim.claimClass, "Supremacy / advantage claim");
  assert.equal(record.instances.length, 6);
  assert.deepEqual(record.instances.map(({ sourceId }) => sourceId), [
    "INST-001", "INST-002", "INST-003", "INST-004", "INST-005", "INST-006",
  ]);
  assert.equal(record.assessments.length, 1);
  assert.equal(record.assessments[0].sourceId, "ASSESSMENT-001");
  assert.equal(record.assessments[0].pressureState, "fragmenting");
  assert.match(record.assessments[0].provenanceNote, /does not newly review, reaffirm or ratify FRAGMENTING/);
  assert.deepEqual(record.mechanisms.map(({ id }) => id), [
    "RM-001", "RM-002", "RM-003", "BN-001", "BN-002", "AT-001",
  ]);
  assert.equal(record.lineage.items.length, 7);
  assert.deepEqual(record.lineage.relatedRecords.map(({ id }) => id), [
    "FR-QE-0002", "FR-QE-0003", "FR-QE-0007", "FR-QE-0008",
  ]);
  assert.deepEqual(record.openQuestions.map(({ sourceId }) => sourceId), [
    "OQ-1", "OQ-2", "OQ-3", "OQ-4", "OQ-5",
  ]);
  assert.equal(record.mutationLog[0].field, "canonical_baseline_realigned");

  const operativeText = JSON.stringify({
    claim: record.claim,
    instances: record.instances,
    assessments: record.assessments,
    mechanisms: record.mechanisms,
    lineage: record.lineage,
    openQuestions: record.openQuestions,
  });
  assert.doesNotMatch(operativeText, /best known classical algorithm/);
  assert.doesNotMatch(operativeText, /equivalent resource constraints/);
  assert.doesNotMatch(operativeText, /No replication under original conditions achieved/);
});

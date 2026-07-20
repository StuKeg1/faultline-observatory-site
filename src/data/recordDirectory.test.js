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
  assert.ok(applyRecordDirectoryView(ALL_RECORDS, { state: "fragmenting" }).length > 0);
  assert.ok(applyRecordDirectoryView(ALL_RECORDS, { state: "escalating" }).length > 0);
  assert.ok(applyRecordDirectoryView(ALL_RECORDS, { state: "audit" })
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

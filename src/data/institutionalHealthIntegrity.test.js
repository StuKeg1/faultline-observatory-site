import test from "node:test";
import assert from "node:assert/strict";

import { ALL_RECORDS } from "./corpus.js";
import {
  getSilentMutationFindings,
  getOpenQuestionSilentClosureFindings,
} from "./metrics.js";

function record(id) {
  const found = ALL_RECORDS.find((item) => item.id === id);
  assert.ok(found, `Missing record ${id}`);
  return found;
}

test("institutional health: silent-mutation proxy deviations are fully explained by explicit log variants", () => {
  // The current generic proxy counts assessment-log rows rather than the
  // assessments represented by each row. Two governed schema variants are
  // therefore expected and must remain explicitly evidenced here:
  // - FR-QE-0002 logs AS-002 as `assessment_reissued`.
  // - FR-AM-0001 batches its three founding assessments in one
  //   `assessments_issued` entry.
  // Any additional proxy deviation fails this standing control.
  assert.deepEqual(getSilentMutationFindings(ALL_RECORDS), [
    { recordId: "FR-QE-0002", assessmentCount: 2, assessmentLogEntries: 1 },
    { recordId: "FR-AM-0001", assessmentCount: 3, assessmentLogEntries: 1 },
  ]);

  const qe0002 = record("FR-QE-0002");
  assert.ok(
    qe0002.mutationLog.some(
      (m) =>
        m.field === "assessment_reissued" &&
        m.to.includes("AS-002") &&
        m.date === "2026-07-26"
    ),
    "FR-QE-0002 AS-002 must remain explicitly logged as an assessment reissue"
  );

  const am0001 = record("FR-AM-0001");
  const foundingBatch = am0001.mutationLog.find(
    (m) => m.field === "assessments_issued" && m.date === "2024-01-15"
  );
  assert.ok(foundingBatch, "FR-AM-0001 founding assessment batch log is missing");
  assert.match(foundingBatch.note, /ASSESSMENT-001/);
  assert.match(foundingBatch.note, /ASSESSMENT-002/);
  assert.match(foundingBatch.note, /ASSESSMENT-003/);
});

test("institutional health: no unexplained open-question silent closures", () => {
  assert.deepEqual(getOpenQuestionSilentClosureFindings(ALL_RECORDS), []);
});

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

test("institutional health: every assessment is represented by a mutation", () => {
  assert.deepEqual(getSilentMutationFindings(ALL_RECORDS), []);

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

  const qe0004 = record("FR-QE-0004");
  assert.ok(
    qe0004.mutationLog.some(
      (m) => m.field === "record_review" && m.date === "2026-09-14" && m.to.includes("AS-003"),
    ),
    "FR-QE-0004 AS-003 must remain explicitly represented by its combined Record Review mutation",
  );

  const qe0005 = record("FR-QE-0005");
  assert.ok(
    qe0005.mutationLog.some(
      (m) => m.date === "2026-09-15" && /Appended AS-004/.test(m.note),
    ),
    "FR-QE-0005 AS-004 must remain explicitly represented by its combined evidence mutation",
  );
});

test("institutional health: no unexplained open-question silent closures", () => {
  assert.deepEqual(getOpenQuestionSilentClosureFindings(ALL_RECORDS), []);
});

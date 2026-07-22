import test from "node:test";
import assert from "node:assert/strict";
import { VS_STAGES, VS_STAGE_LABELS } from "./trajectoryVisuals.js";

test("Verification Stage codes use the canonical Methodology labels", () => {
  assert.deepEqual(VS_STAGES, ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"]);
  assert.deepEqual(VS_STAGE_LABELS, {
    "VS-01": "Assertion",
    "VS-02": "Published",
    "VS-03": "Audit",
    "VS-04": "Replication",
    "VS-05": "Operation",
  });
});

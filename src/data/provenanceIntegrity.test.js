import test from "node:test";
import assert from "node:assert/strict";
import { FR_AI_0009 } from "./records/FR-AI-0009.js";
import { FR_QE_0007 } from "./records/FR-QE-0007.js";
import { FR_BT_0004 } from "./records/FR-BT-0004.js";
import { FR_AI_0002 } from "./records/FR-AI-0002.js";
import { getCurrentAssessment } from "./derive.js";

const AUDITED_RECORDS = [FR_AI_0009, FR_QE_0007, FR_BT_0004];

test("audited Frontier Records carry instance-level source provenance", () => {
  const instances = AUDITED_RECORDS.flatMap((record) =>
    record.instances.map((instance) => ({ recordId: record.id, instance }))
  );

  assert.equal(instances.length, 20);
  for (const { recordId, instance } of instances) {
    assert.ok(
      typeof instance.sourceReference === "string" && instance.sourceReference.trim().length > 0,
      `${recordId}/${instance.id} has no sourceReference`,
    );
  }
});

test("FR-AI-0002 retains the LPR-001 Day 1 correction without reassessment", () => {
  const copilot = FR_AI_0002.instances.find(({ id }) => id === "IN-001");
  const writing = FR_AI_0002.instances.find(({ id }) => id === "IN-002");
  const failures = FR_AI_0002.instances.find(({ id }) => id === "IN-004");
  const current = getCurrentAssessment(FR_AI_0002);

  assert.match(copilot.description, /did not examine code quality/i);
  assert.match(writing.description, /average completion time decreased by 40%/i);
  assert.match(failures.description, /not a systematic review/i);
  assert.equal(copilot.sources.length, 1);
  assert.equal(writing.sources[0].doi, "10.1126/science.adh2586");
  assert.equal(failures.sources[1].doi, "10.1038/s41746-023-00939-z");
  assert.equal(FR_AI_0002.provenanceReviewId, "LPR-001-D01");
  assert.equal(FR_AI_0002.provenanceRepairStatus, "completed");
  assert.equal(current.pressureState, "escalating");
  assert.equal(current.verificationStage, "VS-02");
  assert.equal(FR_AI_0002.assessments.length, 2);
});

test("FR-QE-0007 corrects the IN-005 source conflation without changing its verdict", () => {
  const instance = FR_QE_0007.instances.find(({ id }) => id === "IN-005");
  const current = getCurrentAssessment(FR_QE_0007);

  assert.doesNotMatch(instance.description, /superconducting material phase transition/i);
  assert.match(instance.description, /time-crystalline eigenstate order/i);
  assert.match(instance.sourceReference, /10\.1038\/s41586-021-04257-w/);
  assert.match(instance.sourceReference, /10\.1038\/nature23879/);
  assert.match(instance.sourceReference, /10\.1103\/PhysRevResearch\.4\.033110/);
  assert.equal(current.pressureState, "fragmenting");
  assert.equal(current.verificationStage, "VS-03");
});

test("FR-BT-0004 distinguishes late-stage incidence, mortality and publication class", () => {
  const design = FR_BT_0004.instances.find(({ id }) => id === "IN-003");
  const result = FR_BT_0004.instances.find(({ id }) => id === "IN-006");
  const current = getCurrentAssessment(FR_BT_0004);

  assert.match(design.description, /primary objective was a reduction in late-stage/i);
  assert.match(design.description, /mortality was not the primary endpoint/i);
  assert.match(result.description, /conference supplement, not as a full peer-reviewed results article/i);
  assert.match(result.sourceReference, /10\.1200\/JCO\.2026\.44\.17_suppl\.LBA100/);
  assert.equal(current.pressureState, "fragmenting");
  assert.equal(current.verificationStage, "VS-04");
});

test("each audited record retains the provenance repair as an editorial correction", () => {
  for (const record of AUDITED_RECORDS) {
    const repair = record.mutationLog.find(
      ({ date, field }) => date === "2026-08-28" && field === "reference_corrected",
    );
    assert.ok(repair, `${record.id} has lost its 2026-08-28 reference correction`);
  }
});

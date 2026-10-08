import test from "node:test";
import assert from "node:assert/strict";
import { FR_AI_0001 } from "./records/FR-AI-0001.js";
import { FR_AI_0009 } from "./records/FR-AI-0009.js";
import { FR_QE_0007 } from "./records/FR-QE-0007.js";
import { FR_BT_0004 } from "./records/FR-BT-0004.js";
import { FR_AI_0002 } from "./records/FR-AI-0002.js";
import { getCurrentAssessment } from "./derive.js";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { FR_AI_0005 } from "./records/FR-AI-0005.js";
import { detectMutationType, qualifiesForHomepage } from "./mutationClassifier.js";

test("AGI consistency repair preserves evidence, judgments and prior mutation history", () => {
  const hashes = {
    assessments: "9919ddc8a8e11734a70c9d3ce08b09e2f14eaafe90b02e9352cea7955b34d4e9",
    instances: "783c84303fab2ea39f4ae4d22500344b430451603153fb468ec29bf0b7feac41",
    claim: "a4aa834b2b956a37fb9cb65591d758bfc6351dd3947579c2b7de5377849f15ee",
  };
  const digest = (v) => createHash("sha256").update(JSON.stringify(v)).digest("hex");
  for (const [field, expected] of Object.entries(hashes)) {
    assert.equal(digest(FR_AI_0005[field]), expected, `${field} was rewritten`);
  }
  assert.equal(digest(FR_AI_0005.mutationLog.slice(1)),
    "d5a22a57b5abfc92e80359190be84104cab8bf9bfcfa74a2715e04104bbbd6ae");
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/FR-AI-0005-CONSISTENCY-REPAIR-2026-10-08.json", import.meta.url)));
  assert.deepEqual(FR_AI_0005.openQuestions.map(({ id, raisedDate }) => ({ id, raisedDate })),
    receipt.previous.openQuestions.map(({ id, raisedDate }) => ({ id, raisedDate })));
  assert.deepEqual(FR_AI_0005.openQuestions[2], receipt.previous.openQuestions[2]);
  const mutationType = detectMutationType(FR_AI_0005.mutationLog[0], FR_AI_0005);
  assert.equal(mutationType, "editorial_correction");
  assert.equal(qualifiesForHomepage(mutationType).qualifies, false);
});

test("current AGI explanatory fields do not reinstate withdrawn migration and architectural premises", () => {
  const active = JSON.stringify({ mechanisms: FR_AI_0005.mechanisms,
    lineage: FR_AI_0005.lineage, openQuestions: FR_AI_0005.openQuestions });
  assert.doesNotMatch(active, /target has migrated|target term is actively migrating|path has bifurcated|destination has narrowed|not the migrated economic performance definition|Two years of continued three-way fragmentation/);
  assert.match(active, /does not document a 2024–25 target migration/);
  assert.match(active, /different path would not by itself confirm this path prediction/);
  assert.equal(getCurrentAssessment(FR_AI_0005).id, "AS-003");
});

const AUDITED_RECORDS = [FR_AI_0009, FR_QE_0007, FR_BT_0004];

test("audited Frontier Records carry instance-level source provenance", () => {
  const instances = AUDITED_RECORDS.flatMap((record) =>
    record.instances.map((instance) => ({ recordId: record.id, instance }))
  );

  assert.ok(instances.length >= 22, "audited instance coverage unexpectedly decreased");
  for (const { recordId, instance } of instances) {
    assert.ok(
      typeof instance.sourceReference === "string" && instance.sourceReference.trim().length > 0,
      `${recordId}/${instance.id} has no sourceReference`,
    );
  }
});

test("FR-AI-0002 retains the Day 1 correction after D32 without reassessment", () => {
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
  assert.ok(FR_AI_0002.mutationLog.some(({ id, to }) => id === "M-010" && to.includes("LPR-001-D01")));
  assert.equal(FR_AI_0002.provenanceReviewId, "LPR-001-D32");
  assert.equal(FR_AI_0002.provenanceRepairStatus, "completed");
  assert.equal(current.pressureState, "escalating");
  assert.equal(current.verificationStage, "VS-02");
  assert.equal(FR_AI_0002.assessments.length, 2);
});

test("FR-AI-0001 closes D33 with bounded provenance corrections and no reassessment", () => {
  const math = FR_AI_0001.instances.find(({ id }) => id === "IN-003");
  const faithfulness = FR_AI_0001.instances.find(({ id }) => id === "IN-006");
  const current = getCurrentAssessment(FR_AI_0001);

  assert.match(math.description, /unverified legacy report/i);
  assert.doesNotMatch(math.description, /solves a non-trivial fraction/i);
  assert.equal(math.vectors[0], "partial--legacy-report-unverified");
  assert.equal("sources" in math, false);
  assert.match(faithfulness.description, /Only Lindsey et al\. is mechanistic-interpretability research/i);
  assert.match(faithfulness.description, /do not resolve whether o1\/o3-class models implement/i);
  assert.equal(faithfulness.sources.length, 5);
  assert.equal(faithfulness.date, "2023–25");
  assert.equal(FR_AI_0001.provenanceReviewId, "LPR-001-D33");
  assert.equal(FR_AI_0001.provenanceOutcome, "discrepancies_corrected");
  assert.equal(FR_AI_0001.provenanceRepairStatus, "completed");
  assert.equal(FR_AI_0001.assessments.length, 2);
  assert.deepEqual(FR_AI_0001.assessments.map(({ id }) => id), ["AS-001", "AS-002"]);
  assert.equal(current.pressureState, "escalating");
  assert.equal(current.verificationStage, "VS-03");
  assert.ok(FR_AI_0001.mutationLog.some(({ id, to }) => id === "M-012" && to.includes("LPR-001-D33 completed")));
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

test("priority consistency repairs preserve governed evidence, judgments and history", async () => {
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/MCP-PRIORITY-CONSISTENCY-REPAIR-2026-10-08.json", import.meta.url)));
  const digest = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex");
  for (const entry of receipt.records) {
    const record = Object.values(await import(`./records/${entry.id}.js`))[0];
    for (const [field, expected] of Object.entries(entry.frozen)) {
      const value = field === "mutationLog" ? record.mutationLog.slice(1) : record[field];
      assert.equal(digest(value), expected, `${entry.id}: ${field} changed`);
    }
    assert.deepEqual(record.openQuestions.map(({ id, raisedDate }) => ({ id, raisedDate })), entry.questionIdentity);
    assert.equal(record.mutationLog[0].id, entry.mutationId);
    assert.equal(detectMutationType(record.mutationLog[0], record), "editorial_correction");
    for (const change of entry.changes) {
      assert.equal(change.fieldPath.split(".").reduce((value, key) => value[key], record), change.current);
      assert.equal(change.fieldPath.split(".").reduce((value, key) => value[key], entry.previous), change.previous);
    }
    // Reconstruct the old explanatory sections to detect edits outside the receipt.
    const restored = structuredClone({ mechanisms: record.mechanisms, lineage: record.lineage, openQuestions: record.openQuestions });
    for (const change of entry.changes) {
      const keys = change.fieldPath.split(".");
      const parent = keys.slice(0, -1).reduce((value, key) => value[key], restored);
      parent[keys.at(-1)] = change.previous;
    }
    assert.deepEqual(restored, entry.previous, `${entry.id}: unreceipted explanatory edit`);
  }
});

test("priority explanatory repairs retain the corrected source limits", async () => {
  const { FR_QE_0002: qe } = await import("./records/FR-QE-0002.js");
  const { FR_AI_0003: alignment } = await import("./records/FR-AI-0003.js");
  const { FR_AI_0004: scaling } = await import("./records/FR-AI-0004.js");
  assert.match(qe.mechanisms.find(({ id }) => id === "BN-001").description, /kernel is settled/);
  assert.match(qe.lineage.items[2].text, /USRA leases/);
  assert.doesNotMatch(qe.lineage.items[6].text, /Claim partially substantiated/);
  assert.match(alignment.mechanisms.find(({ id }) => id === "AT-001").description, /did not work on ChatGPT preference data/);
  assert.match(alignment.openQuestions[0].question, /does not establish causal deterioration/);
  assert.match(alignment.openQuestions[2].question, /does not establish that these are independent/);
  assert.match(scaling.lineage.items[1].text, /do not establish/);
  assert.equal(scaling.lineage.items[2].year, "2022–23");
  assert.match(scaling.lineage.items[2].text, /Schaeffer et al\. \(2023\)/);
  assert.deepEqual([getCurrentAssessment(qe).id, getCurrentAssessment(alignment).id, getCurrentAssessment(scaling).id], ["AS-003", "AS-004", "AS-003"]);
});

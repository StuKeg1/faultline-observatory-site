import test from "node:test";
import assert from "node:assert/strict";
import { FR_AI_0001 } from "./records/FR-AI-0001.js";
import { FR_AI_0009 } from "./records/FR-AI-0009.js";
import { FR_QE_0007 } from "./records/FR-QE-0007.js";
import { FR_BT_0004 } from "./records/FR-BT-0004.js";
import { FR_AI_0002 } from "./records/FR-AI-0002.js";
import { getCurrentAssessment, getTransitionFeed } from "./derive.js";
import { getRecordLegibility } from "./recordLegibility.js";
import { FR_QE_0008 } from "./records/FR-QE-0008.js";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { FR_AI_0005 } from "./records/FR-AI-0005.js";
import { detectMutationType, qualifiesForHomepage } from "./mutationClassifier.js";

// Historical editorial receipts govern their original checkpoint, not later reassessments.
const sourceLinkReceipts = [1, 2].map(increment => JSON.parse(readFileSync(new URL(
  `../../docs/reviews/VERIFIED-SOURCE-REPAIRS-INCREMENT-${increment}-2026-10-19.json`, import.meta.url))));
const sharedSourceReceipt = JSON.parse(readFileSync(new URL("../../docs/reviews/SHARED-SOURCE-LABELS-STEP-5A-2026-10-19.json", import.meta.url)));
// Later whole-record changes, receipted with their previous values, so frozen
// checks at earlier checkpoints can restore the record rather than waive it.
// Add each new receipt to this list; they are undone newest first, so each
// one is checked against the record as it stood on its own date.
const laterRecordReceipts = ["FR-QE-0008-D56-HELIOS-2026-10-20", "FR-QE-0008-SCOUT-2026-10-24", "FR-AI-0007-SCOUT-2026-10-24", "FR-BT-0006-MUTATION-ID-2026-10-24", "FR-BT-0006-D58-2026-10-22", "FR-AI-0002-D60-2026-10-24"].map(id => JSON.parse(readFileSync(new URL(
  `../../docs/reviews/${id}.json`, import.meta.url)))).sort((a, b) => b.date.localeCompare(a.date));

function undoRecordReceipt(record, receipt) {
  const isAdded = (path, item) => receipt.changes.some(change => change.fieldPath.startsWith(path) && change.previous === null &&
    (typeof change.current === "string" ? change.current === item.id : JSON.stringify(change.current) === JSON.stringify(item)));
  const restored = { ...record };
  for (const change of receipt.changes.filter(change => !change.fieldPath.includes("."))) {
    assert.deepEqual(record[change.fieldPath], change.current, `${receipt.id}: ${change.fieldPath} no longer matches its receipt`);
    restored[change.fieldPath] = change.previous;
  }
  restored.instances = record.instances.filter(instance => !isAdded("instances.", instance));
  restored.assessments = record.assessments.filter(assessment => !isAdded("assessments.", assessment));
  restored.lineage = { ...record.lineage, items: record.lineage.items.filter(item => !isAdded("lineage.items.", item)) };
  if (!receipt.changes.some(change => change.fieldPath === "mutationLog")) {
    restored.mutationLog = record.mutationLog.filter(mutation => !(receipt.mutationIds.includes(mutation.id) && mutation.date === receipt.date));
  }
  return restored;
}

function restoreSourceFields(instance, change) {
  if (!change) return instance;
  const { sources: _laterSources, ...original } = instance;
  const restored = change.previousSources === null ? original : { ...instance, sources: change.previousSources };
  if (change.previousSourceReference) restored.sourceReference = change.previousSourceReference;
  return restored;
}

function undoSourceReceipt(record, receipt) {
  const entry = receipt.records.find(entry => entry.id === record.id);
  if (!entry) return record;
  assert.equal(record.mutationLog[0].id, entry.mutationId);
  for (const change of entry.changes) {
    const instance = record.instances.find(instance => instance.id === change.instanceId);
    assert.deepEqual(instance.sources, change.sources);
    if (change.sourceReference) assert.equal(instance.sourceReference, change.sourceReference);
  }
  return { ...record, mutationLog: record.mutationLog.slice(1), instances: record.instances.map(instance =>
    restoreSourceFields(instance, entry.changes.find(change => change.instanceId === instance.id))) };
}
function atCheckpoint(record, date) {
  for (const receipt of laterRecordReceipts) {
    if (receipt.recordId === record.id && receipt.date > date) record = undoRecordReceipt(record, receipt);
  }
  const statusAddedLater = record.mutationLog.some(mutation => mutation.date > date &&
    mutation.note?.includes("docs/reviews/EVIDENCE-STATUS-BATCH-3-2026-10-19.md"));
  return {
    ...record,
    // Status metadata was added after these frozen receipts; preserve their
    // scientific-content hashes instead of accepting new hashes or waiving them.
    instances: record.instances.map(instance => {
      const sharedChange = sharedSourceReceipt.date > date && sharedSourceReceipt.records
        .find(entry => entry.id === record.id)?.changes.find(change => change.instanceId === instance.id);
      if (sharedChange) {
        const { relationship: _laterRelationship, ...original } = instance;
        instance = sharedChange.previousRelationship === null ? original : { ...instance, relationship: sharedChange.previousRelationship };
      }
      for (const receipt of [...sourceLinkReceipts].reverse()) {
        const change = receipt.date > date && receipt.records
          .find(entry => entry.id === record.id)?.changes.find(entry => entry.instanceId === instance.id);
        instance = restoreSourceFields(instance, change);
      }
      if (!statusAddedLater) return instance;
      const { evidenceStatus: _laterStatus, ...original } = instance;
      return original;
    }),
    assessments: record.assessments.filter(assessment => assessment.date <= date),
    mutationLog: record.mutationLog.filter(mutation => mutation.date <= date),
  };
}

test("successive source increments preserve all scientific content and prior history", async () => {
  const digest = value => createHash("sha256").update(JSON.stringify(value)).digest("hex");
  assert.deepEqual(sourceLinkReceipts.map(receipt => receipt.records.reduce((n, entry) => n + entry.changes.length, 0)), [8, 2]);
  for (let index = 0; index < sourceLinkReceipts.length; index++) {
    const receipt = sourceLinkReceipts[index];
    for (const entry of receipt.records) {
      let record = Object.values(await import(`./records/${entry.id}.js`))[0];
      // Reverse only explicitly receipted later increments. Keep the original
      // whole-record hash checks valid instead of replacing or waiving them.
      for (const later of sourceLinkReceipts.slice(index + 1).reverse()) record = undoSourceReceipt(record, later);
      const type = detectMutationType(record.mutationLog[0], record);
      assert.equal(type, "editorial_correction");
      assert.equal(qualifiesForHomepage(type).qualifies, false);
      assert.equal(digest(undoSourceReceipt(record, receipt)), entry.originalRecordHash, `${entry.id}: unreceipted edit`);
    }
  }
});

test("each later-record receipt restores its record exactly as it stood before", async () => {
  const digest = value => createHash("sha256").update(JSON.stringify(value)).digest("hex");
  for (const receipt of laterRecordReceipts) {
    const record = Object.values(await import(`./records/${receipt.recordId}.js`))[0];
    // Checked at the receipt's own date, so later receipted updates don't break it.
    const atReceipt = atCheckpoint(record, receipt.date);
    assert.equal(digest(atReceipt), receipt.currentRecordHash, `${receipt.id}: record differs from its receipt`);
    assert.equal(digest(undoRecordReceipt(atReceipt, receipt)), receipt.originalRecordHash, `${receipt.id}: undo does not restore the original`);
  }
});

test("shared-source labels preserve whole records outside their receipted metadata", async () => {
  assert.equal(sharedSourceReceipt.records.length, 5);
  assert.equal(sharedSourceReceipt.records.reduce((sum, entry) => sum + entry.changes.length, 0), 8);
  for (const entry of sharedSourceReceipt.records) {
    const record = atCheckpoint(Object.values(await import(`./records/${entry.id}.js`))[0], sharedSourceReceipt.date);
    const restored = structuredClone(record);
    assert.equal(restored.mutationLog[0].id, entry.mutationId);
    assert.equal(detectMutationType(restored.mutationLog[0], record), "editorial_correction");
    restored.mutationLog.shift();
    for (const change of entry.changes) {
      const instance = restored.instances.find(instance => instance.id === change.instanceId);
      assert.deepEqual(instance.relationship, change.relationship);
      if (change.previousRelationship === null) delete instance.relationship;
      else instance.relationship = change.previousRelationship;
    }
    assert.equal(createHash("sha256").update(JSON.stringify(restored)).digest("hex"), entry.originalRecordHash, `${entry.id}: unreceipted edit`);
  }
});

test("AGI consistency repair preserves evidence, judgments and prior mutation history", () => {
  const record = atCheckpoint(FR_AI_0005, "2026-10-08");
  const hashes = {
    assessments: "9919ddc8a8e11734a70c9d3ce08b09e2f14eaafe90b02e9352cea7955b34d4e9",
    instances: "783c84303fab2ea39f4ae4d22500344b430451603153fb468ec29bf0b7feac41",
    claim: "a4aa834b2b956a37fb9cb65591d758bfc6351dd3947579c2b7de5377849f15ee",
  };
  const digest = (v) => createHash("sha256").update(JSON.stringify(v)).digest("hex");
  for (const [field, expected] of Object.entries(hashes)) {
    assert.equal(digest(record[field]), expected, `${field} was rewritten`);
  }
  assert.equal(digest(record.mutationLog.slice(1)),
    "d5a22a57b5abfc92e80359190be84104cab8bf9bfcfa74a2715e04104bbbd6ae");
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/FR-AI-0005-CONSISTENCY-REPAIR-2026-10-08.json", import.meta.url)));
  assert.deepEqual(record.openQuestions.map(({ id, raisedDate }) => ({ id, raisedDate })),
    receipt.previous.openQuestions.map(({ id, raisedDate }) => ({ id, raisedDate })));
  assert.deepEqual(record.openQuestions[2], receipt.previous.openQuestions[2]);
  const mutationType = detectMutationType(record.mutationLog[0], record);
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
  const afterD32 = atCheckpoint(FR_AI_0002, "2026-09-29");
  assert.equal(afterD32.provenanceReviewId, "LPR-001-D32");
  assert.equal(afterD32.provenanceRepairStatus, "completed");
  assert.equal(FR_AI_0002.provenanceReviewId, "LPR-001-D60");
  assert.equal(FR_AI_0002.provenanceRepairStatus, "not_required");
  assert.equal(current.pressureState, "escalating");
  assert.equal(current.verificationStage, "VS-02");
  assert.equal(atCheckpoint(FR_AI_0002, "2026-09-29").assessments.length, 2);
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
  assert.equal(atCheckpoint(FR_AI_0001, "2026-09-29").assessments.length, 2);
  assert.deepEqual(atCheckpoint(FR_AI_0001, "2026-09-29").assessments.map(({ id }) => id), ["AS-001", "AS-002"]);
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

test("practical-advantage context follows the closed Sycamore ruling without reopening it", async () => {
  const { FR_QE_0001: sycamore } = await import("./records/FR-QE-0001.js");
  const before = JSON.stringify(sycamore);
  const ruling = getCurrentAssessment(sycamore);
  const entry = FR_QE_0007.instances.find(i => i.id === "IN-001");
  assert.equal(ruling.id, "AS-002");
  assert.equal(ruling.date, "2026-07-22");
  assert.match(ruling.summary, /UNRESOLVED AT THE ORIGINAL COMPARISON POINT; LATER SUPERSEDED/);
  assert.doesNotMatch(entry.description, /genuine and was demonstrated at the time of publication/);
  assert.match(entry.description, /unresolved claim.*original 2019 comparison point/);
  assert.match(entry.description, /without automatically proving.*2019 claim was false/);
  assert.deepEqual(entry.vectors, ["partial--original-comparison-unresolved-practical-relevance-absent"]);
  assert.equal(getCurrentAssessment(FR_QE_0007).id, "AS-003");
  assert.equal(JSON.stringify(sycamore), before);
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

// Validate the earlier repair against its snapshot before the separately receipted clarification.
function beforeClarificationRepair(record) {
  record = atCheckpoint(record, "2026-10-08");
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/MCP-CLARIFICATION-REPAIR-2026-10-08.json", import.meta.url)));
  const entry = receipt.records.find(({ id }) => id === record.id);
  if (!entry) return record;
  const restored = structuredClone(record);
  assert.equal(restored.mutationLog[0].id, entry.mutationId);
  restored.mutationLog = restored.mutationLog.slice(1);
  for (const change of entry.changes) {
    const keys = change.fieldPath.split(".");
    assert.equal(keys.reduce((value, key) => value[key], record), change.current);
    keys.slice(0, -1).reduce((value, key) => value[key], restored)[keys.at(-1)] = change.previous;
  }
  assert.equal(createHash("sha256").update(JSON.stringify(restored)).digest("hex"), entry.originalRecordHash);
  return restored;
}

test("priority consistency repairs preserve governed evidence, judgments and history", async () => {
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/MCP-PRIORITY-CONSISTENCY-REPAIR-2026-10-08.json", import.meta.url)));
  const digest = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex");
  for (const entry of receipt.records) {
    const record = beforeClarificationRepair(Object.values(await import(`./records/${entry.id}.js`))[0]);
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

test("second consistency batch preserves evidence, judgments, metadata and bounded edit history", async () => {
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/MCP-SECONDARY-CONSISTENCY-REPAIR-2026-10-08.json", import.meta.url)));
  const digest = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex");
  for (const entry of receipt.records) {
    const currentRecord = Object.values(await import(`./records/${entry.id}.js`))[0];
    const record = atCheckpoint(currentRecord, receipt.date);
    for (const [field, expected] of Object.entries(entry.frozen)) {
      // Later authorised mutations can supersede fields frozen by this historical receipt.
      // Inspect the full current mutation history, while keeping historical assertions checkpointed.
      const postCheckpoint = currentRecord.mutationLog.filter(mutation => mutation.date > receipt.date);
      const supersededByLaterMutation =
        ["lastProvenanceReview", "provenanceReviewId", "provenanceOutcome", "provenanceRepairStatus"].includes(field)
        || (field === "instances" && postCheckpoint.some(mutation => ["provenance_repair", "provenance_corrected", "instance_appended", "instances_logged"].includes(mutation.field)));
      if (supersededByLaterMutation) continue;
      // Batch 2 adds only these continuity annotations after this receipt.
      // Keep hashing every historical scientific field rather than waiving instances.
      const laterRelationships = {
        "FR-BT-0002": ["IN-007"],
        "FR-BT-0004": ["IN-006", "IN-007", "IN-008"],
        "FR-BT-0007": ["IN-004", "IN-005"],
      };
      const historicalValue = field === "instances" && laterRelationships[entry.id]
        ? record.instances.map(instance => {
          if (!laterRelationships[entry.id].includes(instance.id)) return instance;
          const { relationship: _laterRelationship, ...original } = instance;
          return original;
        }) : record[field];
      assert.equal(digest(field === "mutationLog" ? record.mutationLog.slice(1) : historicalValue), expected, `${entry.id}: ${field} changed`);
    }
    assert.deepEqual(record.openQuestions.map(({ id, raisedDate }) => ({ id, raisedDate })), entry.questionIdentity);
    assert.equal(record.mutationLog[0].id, entry.mutationId);
    const type = detectMutationType(record.mutationLog[0], record);
    assert.equal(type, "editorial_correction");
    assert.equal(qualifiesForHomepage(type).qualifies, false);
    const restored = structuredClone({ mechanisms: record.mechanisms, lineage: record.lineage, openQuestions: record.openQuestions });
    for (const change of entry.changes) {
      const keys = change.fieldPath.split(".");
      assert.equal(keys.reduce((value, key) => value[key], record), change.current);
      assert.equal(keys.reduce((value, key) => value[key], entry.previous), change.previous);
      keys.slice(0, -1).reduce((value, key) => value[key], restored)[keys.at(-1)] = change.previous;
    }
    assert.deepEqual(restored, entry.previous, `${entry.id}: unreceipted explanatory edit`);
  }
});

test("second batch retains conditional event, regimen, recurrence and dated corpus boundaries", async () => {
  const { ALL_RECORDS } = await import("./corpus.js");
  const qe = ALL_RECORDS.find(({ id }) => id === "FR-QE-0007");
  const bt2 = ALL_RECORDS.find(({ id }) => id === "FR-BT-0002");
  const bt4 = ALL_RECORDS.find(({ id }) => id === "FR-BT-0004");
  const am = ALL_RECORDS.find(({ id }) => id === "FR-AM-0005");
  assert.match(qe.openQuestions[1].question, /not the definition of both attractors/);
  assert.match(qe.openQuestions[1].question, /not restricted to chemistry or fault-tolerant hardware/);
  assert.match(bt2.mechanisms.find(({ id }) => id === "AT-001").description, /partial OSK reprogramming, not the four-factor OSKM regimen/);
  assert.match(bt2.openQuestions[3].question, /does not directly test four-factor OSKM/);
  assert.match(bt2.mechanisms.find(({ id }) => id === "AT-001").description, /functional-biomarker requirement remains unresolved/);
  assert.match(bt4.openQuestions[2].question, /counts are withdrawn/);
  assert.match(bt4.openQuestions[2].question, /should not be attributed to RN-004/);
  assert.doesNotMatch(bt4.openQuestions[2].question, /is the eighth occurrence|pattern.*twice confirmed/);
  const escalatingAtCheckpoint = ALL_RECORDS.filter(({ programme }) => programme === "PROG-AM")
    .filter(record => getCurrentAssessment({ ...record, assessments: record.assessments.filter(({ date }) => date <= "2026-10-08") }).pressureState === "escalating")
    .map(({ id }) => id).sort();
  assert.deepEqual(escalatingAtCheckpoint, ["FR-AM-0004", "FR-AM-0006", "FR-AM-0007"]);
  for (const id of escalatingAtCheckpoint) assert.ok(am.openQuestions[2].question.includes(id));
  assert.match(am.openQuestions[2].question, /8 October 2026 consistency checkpoint/);
  assert.deepEqual([qe, bt2, bt4, am].map(record => getCurrentAssessment(record).id), ["AS-003", "AS-004", "AS-003", "AS-003"]);
});

test("D37 closure preserves assessments, reconstruction and all unreceipted record content", async () => {
  const { FR_QE_0001: record } = await import("./records/FR-QE-0001.js");
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/LPR-001-D37-FR-QE-0001-CORRECTION-2026-10-08.json", import.meta.url)));
  const digest = value => createHash("sha256").update(JSON.stringify(value)).digest("hex");
  for (const [field, hash] of Object.entries(receipt.immutableHashes)) assert.equal(digest(record[field]), hash, `${field} changed`);
  assert.equal(digest(record.mutationLog.slice(2)), receipt.previousMutationHash);
  assert.deepEqual(record.openQuestions.map(({ id, sourceId, raisedDate }) => ({ id, sourceId, raisedDate })), receipt.questionIdentity);
  assert.deepEqual(record.mutationLog.slice(0, 2).map(({ id }) => id), receipt.mutationIds);
  const restored = structuredClone(record);
  restored.mutationLog = restored.mutationLog.slice(2);
  for (const change of receipt.changes) {
    const keys = change.fieldPath.split(".");
    assert.equal(keys.reduce((value, key) => value[key], record), change.current);
    keys.slice(0, -1).reduce((value, key) => value[key], restored)[keys.at(-1)] = change.previous;
  }
  assert.equal(digest(restored), receipt.originalRecordHash, "unreceipted record edit");
  for (const mutation of record.mutationLog.slice(0, 2)) {
    const type = detectMutationType(mutation, record);
    assert.equal(type, "editorial_correction");
    assert.equal(qualifiesForHomepage(type).qualifies, false);
  }
});

test("D37 repair qualifies energy evidence and respects the existing time-indexed verdict", async () => {
  const { FR_QE_0001: record } = await import("./records/FR-QE-0001.js");
  const current = getCurrentAssessment(record);
  assert.deepEqual([current.id, current.pressureState, current.verificationStage], ["AS-002", "stabilising", "VS-04"]);
  assert.deepEqual([record.provenanceReviewId, record.lastProvenanceReview, record.provenanceOutcome, record.provenanceRepairStatus], ["LPR-001-D37", "2026-10-01", "discrepancies_corrected", "completed"]);
  const source = record.instances.find(({ id }) => id === "IN-004");
  assert.match(source.description, /13\.7 kWh/);
  assert.match(source.description, /4\.3 kWh attributed to Sycamore cooling water/);
  assert.match(source.description, /differently specified energy-accounting boundaries/);
  assert.match(source.description, /XEB.*not by itself proof/);
  assert.doesNotMatch(source.description, /substantially greater energy consumption and hardware footprint/);
  assert.match(source.sources[0].locator, /Section II/);
  assert.match(record.mechanisms.find(({ id }) => id === "BN-002").description, /already governs/);
  assert.match(record.mechanisms.find(({ id }) => id === "AT-001").description, /2019 classical comparator was already unsound/);
  assert.doesNotMatch(JSON.stringify(record.mechanisms), /cannot issue a settled verdict|eventually be unable to track quantum hardware/);
  assert.match(record.openQuestions[3].question, /assigns STABILISING \/ VS-04/);
  assert.doesNotMatch(record.lineage.items[6].text, /effectively closed|The claim migrates/);
});

test("clarification repairs preserve all content outside their field-level receipts", async () => {
  const receipt = JSON.parse(readFileSync(new URL("../../docs/reviews/MCP-CLARIFICATION-REPAIR-2026-10-08.json", import.meta.url)));
  const digest = value => createHash("sha256").update(JSON.stringify(value)).digest("hex");
  for (const entry of receipt.records) {
    const record = atCheckpoint(Object.values(await import(`./records/${entry.id}.js`))[0], receipt.date);
    for (const [field, hash] of Object.entries(entry.immutableHashes)) assert.equal(digest(record[field]), hash, `${entry.id}: ${field} changed`);
    assert.equal(digest(record.mutationLog.slice(1)), entry.previousMutationHash);
    assert.deepEqual(record.openQuestions.map(({ id, raisedDate }) => ({ id, raisedDate })), entry.questionIdentity);
    const restored = beforeClarificationRepair(record);
    assert.equal(digest(restored), entry.originalRecordHash);
    const type = detectMutationType(record.mutationLog[0], record);
    assert.equal(type, "editorial_correction");
    assert.equal(qualifiesForHomepage(type).qualifies, false);
  }
});

test("clarifications retain faithfulness, data-access, causal-coverage and simulation distinctions", async () => {
  const { ALL_RECORDS } = await import("./corpus.js");
  const record = id => ALL_RECORDS.find(item => item.id === id);
  const reasoning = record("FR-AI-0001");
  assert.match(reasoning.openQuestions[1].question, /Separately.*faithfully/);
  assert.match(reasoning.openQuestions[1].question, /unfaithful trace does not by itself establish failure to generalise/);
  assert.match(reasoning.instances.find(({ id }) => id === "IN-006").description, /Lindsey.*Claude 3\.5 Haiku/);
  assert.doesNotMatch(reasoning.instances.find(({ id }) => id === "IN-006").description, /Claude 3\.5 Sonnet/);
  const scaling = record("FR-AI-0004").mechanisms.find(({ id }) => id === "AT-001").description;
  assert.match(scaling, /Open weights alone do not provide that access/);
  assert.match(scaling, /absence of its task type or structural analogues/);
  const coherence = record("FR-AI-0006").mechanisms.find(({ id }) => id === "RM-001").description;
  assert.match(coherence, /larger-model evidence with MLPs is mainly correlational/);
  assert.doesNotMatch(coherence, /become computationally intractable|necessarily indirect|100B\+/);
  assert.equal(record("FR-AI-0006").instances[4].sources, undefined, "IN-005 debt must not receive invented provenance");
  const world = record("FR-AI-0009");
  assert.match(world.mechanisms.find(({ id }) => id === "RM-002").description, /simulation \/ real-to-sim environments/);
  assert.match(world.lineage.items[3].text, /not reported physical-robot execution outcomes/);
  assert.deepEqual([reasoning, record("FR-AI-0004"), record("FR-AI-0006"), world].map(item => getCurrentAssessment(atCheckpoint(item, "2026-10-08")).id), ["AS-002", "AS-003", "AS-005", "AS-002"]);
});


test("2026-10-12 reassessments account for admitted evidence without manufacturing transitions", () => {
  for (const [record, assessmentId, mutationId, state, stage, instanceIds] of [
    [FR_AI_0001, "AS-003", "M-015", "escalating", "VS-03", ["IN-007"]],
    [FR_AI_0002, "AS-003", "M-014", "escalating", "VS-02", ["IN-008"]],
    [FR_QE_0008, "AS-004", "M-015", "resolving", "VS-04", ["IN-007", "IN-008"]],
  ]) {
    const reviewed = atCheckpoint(record, "2026-10-12");
    const current = getCurrentAssessment(reviewed);
    const prior = { ...reviewed, assessments: reviewed.assessments.slice(0, -1) };
    assert.deepEqual([current.id, current.date, current.pressureState, current.verificationStage],
      [assessmentId, "2026-10-12", state, stage]);
    assert.ok(getRecordLegibility(prior).evidenceSinceAssessment.length > 0);
    assert.equal(getRecordLegibility(reviewed).evidenceSinceAssessment.length, 0);
    assert.deepEqual(getTransitionFeed(reviewed), getTransitionFeed(prior));
    for (const id of instanceIds) assert.ok(current.summary.includes(id), `${record.id}: ${id} unassessed`);
    const mutation = reviewed.mutationLog.find(({ id }) => id === mutationId);
    assert.equal(mutation.field, "assessment_issued");
    assert.equal(mutation.to, assessmentId);
    assert.ok(current.sources.every(({ url }) => /^https:\/\//.test(url)));
  }
});

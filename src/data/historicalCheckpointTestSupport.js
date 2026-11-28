// Test-only reconstruction. Current runtime records are never replaced.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const receipt=JSON.parse(readFileSync(new URL('../../docs/reviews/POST-24-OCTOBER-HISTORICAL-CHECKPOINTS.json',import.meta.url)));
const hash=o=>createHash('sha256').update(JSON.stringify(o)).digest('hex');
// FIP-A03 appends a prospective stage correction. Frozen 24-Oct receipts
// must continue to compare against their original snapshot, never a later AS.
function withoutFipA03StageCorrection(record) {
  if (record.id !== "FR-AM-0005" || record.assessments.at(-1)?.id !== "AS-005") return record;
  assert.equal(record.assessments.at(-1).changeKind, "verification_stage_correction");
  assert.equal(record.assessments.at(-1).verificationStage, "VS-04");
  assert.equal(record.assessments.at(-1).pressureState, "collapsed");
  assert.equal(record.mutationLog[0]?.id, "M-022");
  assert.equal(record.mutationLog[0]?.field, "assessment_correction");
  assert.equal(record.assessments.at(-2)?.id, "AS-004");
  assert.equal(record.mutationLog[1]?.id, "M-021");
  return { ...record, assessments: record.assessments.slice(0, -1), mutationLog: record.mutationLog.slice(1) };
}
// D91 is a later provenance-only PASS. Restore its D59 predecessor for
// frozen historical checkpoint tests; never modify the canonical record.
function withoutD91(record) {
  if (record.id !== "FR-BT-0007" || record.provenanceReviewId !== "LPR-001-D91") return record;
  assert.equal(record.mutationLog[0]?.id, "M-009");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D59");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D91");
  assert.equal(record.provenanceOutcome, "verified");
  assert.equal(record.provenanceRepairStatus, "not_required");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-23";
  restored.provenanceReviewId = "LPR-001-D59";
  restored.mutationLog.shift();
  return restored;
}
// D90 is a prospective provenance-only PASS. Frozen historical checkpoint
// assertions must see the exact D58 predecessor; canonical data is unchanged.
function withoutD90(record) {
  if (record.id !== "FR-BT-0006" || record.provenanceReviewId !== "LPR-001-D90") return record;
  assert.equal(record.mutationLog[0]?.id, "M-010");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D58");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D90");
  assert.equal(record.provenanceOutcome, "verified");
  assert.equal(record.provenanceRepairStatus, "not_required");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-22";
  restored.provenanceReviewId = "LPR-001-D58";
  restored.mutationLog.shift();
  return restored;
}
// D89 is a later provenance-only PASS; restore its exact D57 predecessor
// for frozen historical receipts without modifying the canonical record.
function withoutD89(record) {
  if (record.id !== "FR-BT-0005" || record.provenanceReviewId !== "LPR-001-D89") return record;
  assert.equal(record.mutationLog[0]?.id, "M-012");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D57");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D89");
  assert.equal(record.provenanceOutcome, "verified");
  assert.equal(record.provenanceRepairStatus, "not_required");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-21";
  restored.provenanceReviewId = "LPR-001-D57";
  restored.mutationLog.shift();
  return restored;
}
// D88 is a later provenance-only PASS. Reconstruct the D56 predecessor
// solely for frozen historical receipts; canonical content stays untouched.
function withoutD88(record) {
  if (record.id !== "FR-QE-0008" || record.provenanceReviewId !== "LPR-001-D88") return record;
  assert.equal(record.mutationLog[0]?.id, "M-023");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D56");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D88");
  assert.equal(record.provenanceOutcome, "verified");
  assert.equal(record.provenanceRepairStatus, "not_required");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-20";
  restored.provenanceReviewId = "LPR-001-D56";
  restored.mutationLog.shift();
  return restored;
}
// D87 provenance-only completion and IN-001 source enrichment postdate
// frozen historical checkpoint receipts. Restore exact predecessor in tests.
function withoutD87(record) {
  if (record.id !== "FR-BT-0003" || record.provenanceReviewId !== "LPR-001-D87") return record;
  assert.equal(record.mutationLog[0]?.id, "M-011");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D55");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D87");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-19";
  restored.provenanceReviewId = "LPR-001-D55";
  restored.mutationLog.shift();
  const instance = restored.instances.find(item => item.id === "IN-001");
  assert.equal(instance?.sources?.length, 2);
  delete instance.sources;
  return restored;
}
// D86 is a later provenance-only PASS; reconstruct its predecessor for
// frozen October checkpoint hashes without modifying the canonical record.
function withoutD86(record) {
  if (record.id !== "FR-BT-0002" || record.provenanceReviewId !== "LPR-001-D86") return record;
  assert.equal(record.mutationLog[0]?.id, "M-021");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D54");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D86");
  assert.equal(record.provenanceOutcome, "verified");
  assert.equal(record.provenanceRepairStatus, "not_required");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-18";
  restored.provenanceReviewId = "LPR-001-D54";
  restored.mutationLog.shift();
  return restored;
}
// D85 is a later provenance-only REVIEW REQUIRED completion. Reconstruct its
// predecessor for frozen October checkpoints; do not alter canonical metadata.
function withoutD85(record) {
  if (record.id !== "FR-BT-0001" || record.provenanceReviewId !== "LPR-001-D85") return record;
  assert.equal(record.mutationLog[0]?.id, "M-014");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D53");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D85 REVIEW REQUIRED");
  assert.equal(record.provenanceOutcome, "discrepancies_found");
  assert.equal(record.provenanceRepairStatus, "pending");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-17";
  restored.provenanceReviewId = "LPR-001-D53";
  restored.provenanceOutcome = "verified";
  restored.provenanceRepairStatus = "not_required";
  restored.mutationLog.shift();
  return restored;
}
// D83 is a later provenance-only review; reconstruct its exact predecessor for
// frozen October hashes. This helper affects tests only, not canonical records.
function withoutD83(record) {
  if (record.id !== "FR-AM-0006" || record.provenanceReviewId !== "LPR-001-D83") return record;
  assert.equal(record.mutationLog[0]?.id, "M-021");
  assert.equal(record.mutationLog[0]?.field, "provenance_review");
  assert.equal(record.mutationLog[0]?.from, "LPR-001-D51");
  assert.equal(record.mutationLog[0]?.to, "LPR-001-D83");
  const restored = structuredClone(record);
  restored.lastProvenanceReview = "2026-10-15";
  restored.provenanceReviewId = "LPR-001-D51";
  restored.mutationLog.shift();
  for (const id of ["IN-002", "IN-004", "IN-006"]) {
    const item = restored.instances.find(instance => instance.id === id);
    assert.ok(item?.sources?.length, `D83 sources missing for ${id}`);
    delete item.sources;
  }
  return restored;
}
const priorMutationOrder = {
  "FR-AI-0004": ["M-014", "M-015"],
  "FR-AI-0005": ["M-012", "M-013"],
  "FR-AI-0006": ["M-016", "M-020", "M-019", "M-018"],
};

// Restore the exact pre-cleanup sequence for frozen historical receipts.
function withoutMutationOrderCleanup(record) {
  const priorOrder = priorMutationOrder[record.id];
  if (!priorOrder) return record;

  const [restoration, ...laterMutations] = priorOrder;
  const log = record.mutationLog;
  const index = log.findIndex(entry => entry.id === laterMutations[0]);
  assert.ok(index > 0, `${record.id}: expected mutation block is missing`);
  if (log[index - 1].id === restoration) return record;

  const end = index + priorOrder.length;
  const block = log.slice(index, end);
  assert.deepEqual(block.map(entry => entry.id), [...laterMutations, restoration]);
  return {
    ...record,
    mutationLog: [...log.slice(0, index), block.at(-1), ...block.slice(0, -1), ...log.slice(end)],
  };
}

function atReceipt(record) {
  return withoutMutationOrderCleanup(
    withoutFipA03StageCorrection(withoutD83(withoutD85(withoutD86(withoutD87(withoutD88(withoutD89(withoutD90(withoutD91(record)))))))))
  );
}

export function historicalRecord(record){
  const checked = atReceipt(record);
  const entry=receipt.records.find(e=>e.recordId===record.id);
  if(!entry || hash(checked)===entry.previousHash)return checked;
  assert.equal(hash(checked),entry.currentHash,`${record.id}: current content differs from explicit checkpoint receipt`);
  const restored=structuredClone(checked);
  for(const change of entry.changes){assert.deepEqual(checked[change.field],change.current);if(change.previous===undefined)delete restored[change.field];else restored[change.field]=change.previous;}
  assert.equal(hash(restored),entry.previousHash,`${record.id}: reconstruction differs from pinned checkpoint`);
  return restored;
}
export async function verifyHistoricalCheckpoints(){
  assert.equal(receipt.checkpointCommit,'8d8968ef683118f00b43f05df7d646d3b7fb84dc');
  for(const e of receipt.records){const record=atReceipt(Object.values(await import(`./records/${e.recordId}.js`))[0]);assert.equal(hash(record),e.currentHash);assert.equal(hash(historicalRecord(record)),e.previousHash);}
}

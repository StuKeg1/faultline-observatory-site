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
export function historicalRecord(record){
  const checked = withoutFipA03StageCorrection(record);
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
  for(const e of receipt.records){const record=withoutFipA03StageCorrection(Object.values(await import(`./records/${e.recordId}.js`))[0]);assert.equal(hash(record),e.currentHash);assert.equal(hash(historicalRecord(record)),e.previousHash);}
}

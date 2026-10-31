// Test-only reconstruction. Current runtime records are never replaced.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const receipt=JSON.parse(readFileSync(new URL('../../docs/reviews/POST-24-OCTOBER-HISTORICAL-CHECKPOINTS.json',import.meta.url)));
const hash=o=>createHash('sha256').update(JSON.stringify(o)).digest('hex');
export function historicalRecord(record){
  const entry=receipt.records.find(e=>e.recordId===record.id);
  if(!entry || hash(record)===entry.previousHash)return record;
  assert.equal(hash(record),entry.currentHash,`${record.id}: current content differs from explicit checkpoint receipt`);
  const restored=structuredClone(record);
  for(const change of entry.changes){assert.deepEqual(record[change.field],change.current);if(change.previous===undefined)delete restored[change.field];else restored[change.field]=change.previous;}
  assert.equal(hash(restored),entry.previousHash,`${record.id}: reconstruction differs from pinned checkpoint`);
  return restored;
}
export async function verifyHistoricalCheckpoints(){
  assert.equal(receipt.checkpointCommit,'8d8968ef683118f00b43f05df7d646d3b7fb84dc');
  for(const e of receipt.records){const record=Object.values(await import(`./records/${e.recordId}.js`))[0];assert.equal(hash(record),e.currentHash);assert.equal(hash(historicalRecord(record)),e.previousHash);}
}

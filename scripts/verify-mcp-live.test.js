import test from "node:test";
import assert from "node:assert/strict";
import { ALL_RECORDS, PROGRAMMES } from "../src/data/corpus.js";
import { assertDeployment, assertRecordParity, assertProgrammeParity, expectedFullRecord } from "./verify-mcp-live.js";

test("live MCP gate rejects a stale fingerprint even when the corpus count matches", () => {
  const commit = "a".repeat(40);
  assertDeployment({ commit, canonical: true }, commit);
  assert.throws(() => assertDeployment({ commit: "b".repeat(40), canonical: true }, commit));
});

test("live MCP gate checks field parity, not only record counts", () => {
  const records = ALL_RECORDS.slice(0, 2);
  const response = { count: records.length, records: records.map(expectedFullRecord) };
  assertRecordParity(response, records);
  const changed = structuredClone(response);
  changed.records[0].instances[0].description = "stale evidence";
  assert.throws(() => assertRecordParity(changed, records));
  const missing = structuredClone(response);
  missing.records.pop();
  assert.throws(() => assertRecordParity(missing, records));
  const duplicate = structuredClone(response);
  duplicate.records[1] = duplicate.records[0];
  assert.throws(() => assertRecordParity(duplicate, records));
});

test("live MCP gate checks programme boundaries and metadata", () => {
  const programmes = PROGRAMMES.map(p => ({ ...p, recordCount: ALL_RECORDS.filter(r => r.programme === p.id).length }));
  assertProgrammeParity(programmes);
  programmes[0].recordCount++;
  assert.throws(() => assertProgrammeParity(programmes));
});

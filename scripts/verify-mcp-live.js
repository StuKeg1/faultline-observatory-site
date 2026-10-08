import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { ALL_RECORDS, PROGRAMMES } from "../src/data/corpus.js";
import { canonicalRecordView as expectedFullRecord, recordSummary as expectedSummary } from "../src/data/mcpProjection.js";
export { expectedFullRecord, expectedSummary };

export function assertDeployment(metadata, commit) {
  assert.match(commit, /^[a-f0-9]{40}$/, "expected commit must be a full Git SHA");
  assert.equal(metadata.commit, commit, "MCP deployment does not match the checked-out commit");
  assert.equal(metadata.canonical, true);
}

export function assertRecordParity(response, records = ALL_RECORDS, project = expectedFullRecord) {
  assert.equal(response.count, records.length, "MCP record count differs");
  assert.equal(response.records.length, records.length, "MCP record list is incomplete");
  assert.equal(new Set(response.records.map(r => r.id)).size, records.length, "duplicate MCP IDs");
  for (const record of records) {
    assert.deepEqual(response.records.find(r => r.id === record.id), project(record), `${record.id}: MCP differs from canonical content`);
  }
}

export function assertProgrammeParity(programmes) {
  assert.deepEqual(programmes, PROGRAMMES.map(p => ({ ...p,
    recordCount: ALL_RECORDS.filter(r => r.programme === p.id).length })), "MCP programme metadata differs");
}

export async function verifyMcpLive({ endpoint = "https://mcp.faultlinewatch.com/mcp", commit,
  attempts = 30, intervalMs = 2000 } = {}) {
  const fingerprint = new URL("/deployment.json", endpoint);
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      const response = await fetch(fingerprint, { signal: AbortSignal.timeout(10000), cache: "no-store" });
      assert.equal(response.status, 200);
      assertDeployment(await response.json(), commit);
      lastError = null;
      break;
    } catch (error) { lastError = error; }
    if (attempt + 1 < attempts) await new Promise(resolve => setTimeout(resolve, intervalMs));
  }
  if (lastError) throw lastError;
  const client = new Client({ name: "faultline-live-verifier", version: "1.0.0" });
  const call = async (name, args = {}) => {
    const result = await client.callTool({ name, arguments: args });
    assert.ok(!result.isError, `${name}: tool returned an error`);
    return JSON.parse(result.content.find(item => item.type === "text").text);
  };
  try {
    await client.connect(new StreamableHTTPClientTransport(new URL(endpoint), {
      requestInit: { signal: AbortSignal.timeout(120000) },
    }));
    const tools = await client.listTools();
    for (const name of ["faultline_about", "faultline_programmes", "faultline_list_records", "faultline_read_record", "faultline_search_records"]) {
      assert.ok(tools.tools.some(tool => tool.name === name), `missing tool ${name}`);
    }
    const about = await call("faultline_about");
    assert.equal(about.deploymentCommit, commit);
    assert.equal(about.recordCount, ALL_RECORDS.length);
    assert.equal(about.programmeCount, PROGRAMMES.length);
    assertProgrammeParity(await call("faultline_programmes"));
    assertRecordParity(await call("faultline_list_records", { detail: "full" }));
    assertRecordParity(await call("faultline_list_records"), ALL_RECORDS, expectedSummary);
    for (const programme of PROGRAMMES) {
      const record = ALL_RECORDS.find(r => r.programme === programme.id);
      assert.deepEqual(await call("faultline_read_record", { id: record.id }), expectedFullRecord(record));
    }
    const search = await call("faultline_search_records", { query: "FR-AI-0005", detail: "full", limit: 50 });
    assert.ok(search.records.some(r => r.id === "FR-AI-0005"));
    for (const record of search.records) assert.deepEqual(record, expectedFullRecord(ALL_RECORDS.find(r => r.id === record.id)));
    const historical = await call("faultline_search_records", { query: "the path is bifurcating architecturally" });
    assert.ok(historical.matches.find(match => match.recordId === "FR-AI-0005").references.some(reference =>
      reference.field === "assessments.AS-001.summary" && reference.assessmentStatus === "historical"));
    console.log(`MCP live parity passed: ${commit}, ${ALL_RECORDS.length} complete records, ${PROGRAMMES.length} programmes, five tools.`);
  } finally { await client.close(); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const commit = process.env.EXPECTED_MCP_COMMIT || process.env.GITHUB_SHA || execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  await verifyMcpLive({ commit, endpoint: process.env.MCP_ENDPOINT || "https://mcp.faultlinewatch.com/mcp" });
}

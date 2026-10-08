import assert from "node:assert/strict";
import test from "node:test";
import { createHash } from "node:crypto";
import fs from "node:fs";
import { PN_AI_001 } from "./notes/PN-AI-001.js";
import { PN_AI_001_V2 } from "./notes/history/PN-AI-001-v2.js";
import { ALL_RECORDS } from "./corpus.js";

test("AI note revision preserves the exact published June snapshot", () => {
  assert.equal(createHash("sha256").update(JSON.stringify(PN_AI_001_V2)).digest("hex"),
    "729197ec7533d776c47c4853a0312a724aca19d2824e9672ccd5a1c1f915edaa");
  assert.deepEqual(PN_AI_001.previousVersions, [PN_AI_001_V2]);
  assert.equal(PN_AI_001.id, PN_AI_001_V2.id);
  assert.ok(PN_AI_001.version > PN_AI_001_V2.version);
});

test("AI overview links every record covered by its October snapshot", () => {
  const blocks = PN_AI_001.body.filter(({ id }) => /^B-00[3-9]$|^B-01[01]$/.test(id));
  assert.equal(blocks.length, 9);
  const linkedIds = blocks.map(({ text }) => text.match(/href="\/the-record\/(fr-ai-\d{4})\//)?.[1].toUpperCase());
  assert.equal(new Set(linkedIds).size, 9);
  for (const id of linkedIds) assert.ok(ALL_RECORDS.some((r) => r.id === id), id);
  assert.equal(PN_AI_001.evidenceCutoff, "2026-10-08");
});

const notePath = new URL("../../dist/notes/pn-ai-001/index.html", import.meta.url);
test("built note exposes the refreshed text and expandable historical version", { skip: !fs.existsSync(notePath) }, () => {
  const html = fs.readFileSync(notePath, "utf8").replace(/<!--[\s\S]*?-->/g, "");
  assert.match(html, /Previous versions/);
  assert.match(html, /<details[^>]*class="note-previous-version"/);
  assert.match(html, /Version 2 · 2026-06-26 · Historical/);
  assert.match(html, /736 GNoME materials experimentally synthesised/);
  assert.match(html, /World Models\. ESCALATING \/ VS-02/);
  assert.match(html, /Superseded statements below do not form part of the current overview/);
});

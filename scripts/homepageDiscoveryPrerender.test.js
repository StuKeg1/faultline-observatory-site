import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HOME_QUESTIONS } from "../src/pages/homeQuestions.js";
import { ALL_RECORDS } from "../src/data/corpus.js";
import { getCurrentAssessment } from "../src/data/derive.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");
const INDEX = path.join(ROOT, "dist", "index.html");
const hasBuild = fs.existsSync(INDEX);
const skip = hasBuild ? false : "dist/index.html not built — run npm run build first";

function firstSentence(summary) {
  if (!summary) return "No current assessment summary available.";
  const match = summary.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  return match || summary;
}

function escapeHtmlText(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll(">", "&gt;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;");
}

test("homepage prerender preserves Refined A for every direct Frontier Record question", { skip }, () => {
  const html = fs.readFileSync(INDEX, "utf8");
  const recordEntries = HOME_QUESTIONS.filter((entry) => entry.target.type === "record");
  assert.ok(recordEntries.length >= 3, "expected at least three direct record questions");

  for (const entry of recordEntries) {
    const record = ALL_RECORDS.find((candidate) => candidate.id === entry.target.id);
    assert.ok(record, `missing canonical record ${entry.target.id}`);
    const current = getCurrentAssessment(record);

    assert.ok(html.includes(`home-question-card home-question-card--record`), "homepage omits record discovery-card class");
    assert.ok(html.includes(record.id), `${record.id} missing from homepage prerender`);
    assert.ok(html.includes(entry.question), `${record.id} question missing from homepage prerender`);
    assert.ok(html.includes(record.claim.shortLabel), `${record.id} canonical title missing from homepage prerender`);
    assert.ok(html.includes(escapeHtmlText(firstSentence(current.summary))), `${record.id} assessment excerpt missing from homepage prerender`);
    assert.ok(html.toLowerCase().includes(current.pressureState.toLowerCase()), `${record.id} Pressure State missing from homepage prerender`);
  }

  const openRecordCount = (html.match(/Open record/g) || []).length;
  assert.ok(openRecordCount >= recordEntries.length, "homepage prerender does not expose Open record for every direct record question");
});

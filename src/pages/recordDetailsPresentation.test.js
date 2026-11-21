import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { FR_QE_0001 } from "../data/records/FR-QE-0001.js";
import { FR_AI_0008 } from "../data/records/FR-AI-0008.js";
import { FR_AM_0001 } from "../data/records/FR-AM-0001.js";
import { FR_AM_0005 } from "../data/records/FR-AM-0005.js";
import { FR_BT_0004 } from "../data/records/FR-BT-0004.js";
import { getRecordStatusPresentation, CLOSED_RECORD_NOTE } from "../data/recordDetailsPresentation.js";

const page = readFileSync(new URL("./FrontierRecord.jsx", import.meta.url), "utf8");
const citation = readFileSync(new URL("../components/RecordCitation.jsx", import.meta.url), "utf8");
const metadata = page.slice(page.indexOf('<aside className="rp-meta-panel"'), page.indexOf("</aside>", page.indexOf('<aside className="rp-meta-panel"')));

test("ordinary open record shows no lifecycle-status row", () => {
  assert.equal(FR_AI_0008.status, "open");
  assert.equal(FR_BT_0004.status, "open");
  assert.equal(FR_BT_0004.reconstruction, undefined);
  assert.equal(getRecordStatusPresentation(FR_AI_0008), null);
  assert.equal(getRecordStatusPresentation(FR_BT_0004), null);
  assert.match(metadata, /recordStatusPresentation &&/);
  assert.match(metadata, /Record status/);
  assert.doesNotMatch(metadata, /Status<\/span>/);
});

test("closed records alone show a qualified administrative status", () => {
  assert.equal(FR_AM_0001.status, "closed");
  assert.equal(FR_AM_0005.status, "closed");
  assert.deepEqual(getRecordStatusPresentation(FR_AM_0001), {label:"Closed", note:CLOSED_RECORD_NOTE});
  assert.deepEqual(getRecordStatusPresentation(FR_AM_0005), {label:"Closed", note:CLOSED_RECORD_NOTE});
  assert.match(metadata, /recordStatusPresentation\.label/);
  assert.match(metadata, /recordStatusPresentation\.note/);
  assert.doesNotMatch(metadata, /Claim Class|Claim Subject|Effective Reconstruction/);
});

test("legacy reconstruction is shown only in header provenance, not panel", () => {
  assert.equal(FR_QE_0001.reconstruction.effectiveCreationDate, "2026-06-11");
  assert.match(page, /S4 reconstruction\{record\.reconstruction\?\.effectiveCreationDate/);
  assert.doesNotMatch(metadata, /record\.reconstruction|claim\.subject|claim\.claimClass/);
});

test("two clocks retained, one adjacent redundant assessed date removed", () => {
  assert.match(metadata, /Last Assessment/);
  assert.match(metadata, /Last updated/);
  assert.match(metadata, /recordReference\.latestMutationId/);
  const section = page.slice(page.indexOf("function WhereRecordStands"),page.indexOf("// ─── EXPERIMENTAL ANNOTATIONS"));
  assert.doesNotMatch(section, /record-stands-date|Assessed \{current.date\}/);
  assert.match(page, /rp-status-since">Assessed \{current.date\}/);
});

test("citation action expands the existing disclosure and focuses summary", () => {
  assert.match(metadata, /<button type="button" className="rp-cite-link" onClick=\{openCitation\}>Cite this record<\/button>/);
  assert.match(page, /citationDisclosureRef\.current\.open = true/);
  assert.match(page, /scrollIntoView\(\{ block: "start" \}\)/);
  assert.match(page, /querySelector\("summary"\)\?\.focus\(\{ preventScroll: true \}\)/);
  assert.match(page, /disclosureRef=\{citationDisclosureRef\}/);
  assert.match(citation, /<details ref=\{disclosureRef\} className="record-citation">/);
});


test("unexpected statuses fail visibly rather than disappearing as Open", () => {
  assert.deepEqual(getRecordStatusPresentation({status:"pending_review"}), {label:"pending_review", note:null});
  assert.deepEqual(getRecordStatusPresentation({}), {label:"Unknown", note:null});
});

test("citation disclosure is exactly once, below Evidence Sources and before Related Records", () => {
  const evidenceEnd = page.indexOf('id="s-evidence"');
  const citationSection = page.indexOf('className="record-section-inner record-citation-section"');
  const relatedSection = page.indexOf('id="s-related"');
  assert.ok(evidenceEnd > -1 && citationSection > evidenceEnd && relatedSection > citationSection);
  assert.equal((page.match(/<RecordCitation /g) ?? []).length, 1);
  const headingArea = page.slice(page.indexOf('<div className="record-passport">'), page.indexOf('<RecordTabs sections='));
  assert.doesNotMatch(headingArea, /<RecordCitation /);
});

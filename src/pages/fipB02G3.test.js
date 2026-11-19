/** FIP-B02 G3: route, content, and separation from document requests. */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const source = path => readFileSync(new URL(path, import.meta.url), "utf8");
const page = source("./CorrectionsAndResponses.jsx");
const about = source("./About.jsx");
const footer = source("../components/SiteFooter.jsx");
const app = source("../App.jsx");
const routes = source("../../scripts/route-manifest.js");
const docs = source("./DocumentationRequests.jsx");

test("FIP-B02: dedicated page has five sections and a bounded email intake", () => {
  for (const heading of ["How to contact us", "How submissions are reviewed", "Decisions and changes", "Responses and reconsideration", "Privacy and publication"]) {
    assert.ok(page.includes(heading), heading);
  }
  assert.match(page, /mailto:hello@faultlinewatch\.com\?subject=Comments%2C%20questions%20or%20suggestions/);
  assert.match(page, /Email your comments, questions or suggestions/);
  assert.match(page, /no fixed response time is promised/);
  assert.match(page, /does not guarantee publication or editorial agreement/);
  assert.match(page, /no independent appeals panel/);
  assert.match(page, /not automatically made public/);
});
test("FIP-B02: route, public indexing, and two navigation entries", () => {
  assert.match(app, /path="\/corrections-and-responses"/);
  assert.match(routes, /"\/corrections-and-responses\/"/);
  assert.match(about, /to="\/corrections-and-responses\/"/);
  assert.match(footer, /to="\/corrections-and-responses\/"/);
  assert.match(page, /path="\/corrections-and-responses\/"/);
});
test("FIP-B02: documentation requests remain a distinct procedure", () => {
  assert.match(docs, /subject=Documentation%20request/);
  assert.match(docs, /How to request an inspection copy/);
  assert.doesNotMatch(docs, /Frontier Record challenge/);
});
const html = new URL("../../dist/corrections-and-responses/index.html", import.meta.url);
test("FIP-B02: new public route is prerendered with policy content", {
  skip: existsSync(html) ? false : "dist absent: rerun after npm run build",
}, () => {
  const rendered = readFileSync(html, "utf8");
  assert.match(rendered, /Corrections and responses/);
  assert.match(rendered, /How submissions are reviewed/);
  assert.match(rendered, /Email your comments, questions or suggestions/);
});

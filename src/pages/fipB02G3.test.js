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
  for (const heading of ["Get in touch", "Corrections and responses", "How submissions are reviewed", "Decisions and changes", "Responses and reconsideration", "Privacy and publication"]) {
    assert.ok(page.includes(heading), heading);
  }
  assert.match(page, /mailto:hello@faultlinewatch\.com\?subject=Comments%2C%20questions%20or%20suggestions/);
  assert.match(page, /Email your comments, questions or suggestions/);
  assert.match(page, /no fixed response time is promised/);
  assert.match(page, /does not guarantee publication or editorial agreement/);
  assert.match(page, /no independent appeals panel/);
  assert.match(page, /not automatically made public/);
});
test("FIP-B02: Contact is sole footer entry; About links to contact", () => {
  assert.match(app, /path="\/contact"/);
  assert.match(routes, /"\/contact\/"/);
  assert.match(about, /to="\/contact\/"/);
  assert.match(footer, /to="\/contact\/"/);
  assert.doesNotMatch(footer, /to="\/corrections-and-responses\/"|mailto:hello@faultlinewatch\.com/);
  assert.match(page, /path="\/contact\/"/);
});
test("FIP-B02: documentation requests remain a distinct procedure", () => {
  assert.match(docs, /subject=Documentation%20request/);
  assert.match(docs, /How to request an inspection copy/);
  assert.doesNotMatch(docs, /Frontier Record challenge/);
});
const html = new URL("../../dist/contact/index.html", import.meta.url);
test("FIP-B02: new public route is prerendered with policy content", {
  skip: existsSync(html) ? false : "dist absent: rerun after npm run build",
}, () => {
  const rendered = readFileSync(html, "utf8");
  assert.match(rendered, /Contact the Observatory/);
  assert.match(rendered, /Corrections and responses/);
  assert.match(rendered, /How submissions are reviewed/);
  assert.match(rendered, /Email your comments, questions or suggestions/);
});

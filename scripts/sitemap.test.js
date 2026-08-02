/**
 * Structural and semantic tests for the generated sitemap index and children.
 */
import { test, before } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { getIndexableRouteGroups, getAllIndexableRoutes } from "./route-manifest.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");
const PUBLIC_DIR = path.join(ROOT, "public");
const BASE_URL = "https://faultlinewatch.com";
const CHILDREN = ["sitemap-records.xml", "sitemap-notes.xml", "sitemap-pages.xml"];

function read(filename) {
  return fs.readFileSync(path.join(PUBLIC_DIR, filename), "utf8");
}

function locs(contents) {
  return [...contents.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

before(() => {
  execFileSync("node", ["scripts/generate-sitemap.js"], { cwd: ROOT, stdio: "pipe" });
});

test("sitemap.xml is an index referencing exactly the three structured sitemaps", () => {
  const contents = read("sitemap.xml");
  assert.match(contents, /^<\?xml/);
  assert.match(contents, /<sitemapindex xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.deepEqual(locs(contents), CHILDREN.map((filename) => `${BASE_URL}/${filename}`));
});

test("every child is a duplicate-free XML urlset", () => {
  for (const filename of CHILDREN) {
    const contents = read(filename);
    assert.match(contents, /^<\?xml/, `${filename} is missing its XML declaration`);
    assert.match(contents, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
    const urls = locs(contents);
    assert.equal(new Set(urls).size, urls.length, `${filename} contains duplicate URLs`);
  }
});

test("sitemap-records.xml contains every FR record and lastmod is its latest evidence-entry date", async () => {
  const server = await createServer({
    root: ROOT,
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "silent",
  });
  try {
    const { ALL_RECORDS } = await server.ssrLoadModule("/src/data/corpus.js");
    const contents = read("sitemap-records.xml");
    const entries = [...contents.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>\s*<\/url>/g)];
    assert.equal(entries.length, ALL_RECORDS.length);

    for (const record of ALL_RECORDS) {
      const evidenceDates = record.mutationLog
        .filter((entry) => /^(?:instance|instances|evidence)_(?:logged|appended)$/i.test(entry.field))
        .map((entry) => entry.date)
        .sort();
      assert.ok(evidenceDates.length > 0, `${record.id} has no evidence-entry mutation`);
      const route = `${BASE_URL}/the-record/${record.id.toLowerCase()}/`;
      const match = entries.find((entry) => entry[1] === route);
      assert.ok(match, `${record.id} missing from sitemap-records.xml`);
      assert.equal(match[2], evidenceDates.at(-1), `${record.id} has the wrong lastmod`);
      assert.match(match[2], /^\d{4}-\d{2}-\d{2}$/);
    }
  } finally {
    await server.close();
  }
});

test("sitemap-notes.xml contains every indexable note", async () => {
  const { notes } = await getIndexableRouteGroups();
  assert.deepEqual(locs(read("sitemap-notes.xml")), notes.map((route) => `${BASE_URL}${route}`));
});

test("sitemap-pages.xml contains every other indexable public route", async () => {
  const { pages } = await getIndexableRouteGroups();
  assert.deepEqual(
    locs(read("sitemap-pages.xml")),
    pages.map((route) => `${BASE_URL}${route}`)
  );
});

test("the sitemap children together equal the indexable-route manifest", async () => {
  const sitemapRoutes = CHILDREN.flatMap((filename) =>
    locs(read(filename)).map((url) => url.replace(BASE_URL, ""))
  );
  assert.deepEqual(new Set(sitemapRoutes), new Set(await getAllIndexableRoutes()));
  assert.ok(!sitemapRoutes.includes("/tokens/"));
  assert.ok(!sitemapRoutes.includes("/guides/how-to-read/"));
});

test("robots.txt declares the sitemap index", () => {
  assert.match(read("robots.txt"), /^Sitemap: https:\/\/faultlinewatch\.com\/sitemap\.xml$/m);
});

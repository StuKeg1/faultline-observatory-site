/**
 * sitemap.test.js — structural tests for the generated public/sitemap.xml.
 * Same principle as redirects.test.js: run the real generator against the
 * real corpus/notes/events data and assert on what it writes.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getSitemapRoutes, SITEMAP_EXCLUDED_ROUTES } from "./route-manifest.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");
const SITEMAP_PATH = path.join(ROOT, "public", "sitemap.xml");

test("generator runs clean and regenerates public/sitemap.xml", () => {
  execFileSync("node", ["scripts/generate-sitemap.js"], { cwd: ROOT, stdio: "pipe" });
  assert.ok(fs.existsSync(SITEMAP_PATH), "public/sitemap.xml was not written");
});

test("sitemap is well-formed enough to parse: one <loc> per listed route, no duplicates", async () => {
  const contents = fs.readFileSync(SITEMAP_PATH, "utf8");
  assert.match(contents, /^<\?xml/, "missing XML declaration");
  assert.match(contents, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);

  const locs = [...contents.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const seen = new Set();
  for (const loc of locs) {
    assert.ok(!seen.has(loc), `duplicate <loc> in sitemap: ${loc}`);
    seen.add(loc);
  }
});

test("every sitemap-eligible manifest route appears in the sitemap", async () => {
  const contents = fs.readFileSync(SITEMAP_PATH, "utf8");
  const routes = await getSitemapRoutes();
  assert.ok(routes.length > 20, "suspiciously few sitemap routes resolved — manifest import likely failed");

  for (const route of routes) {
    assert.ok(
      contents.includes(`<loc>https://faultlinewatch.com${route}</loc>`),
      `sitemap is missing ${route}`
    );
  }
});

test("excluded routes never appear in the sitemap", () => {
  const contents = fs.readFileSync(SITEMAP_PATH, "utf8");
  for (const route of SITEMAP_EXCLUDED_ROUTES) {
    assert.ok(
      !contents.includes(`<loc>https://faultlinewatch.com${route}</loc>`),
      `excluded route ${route} leaked into the sitemap`
    );
  }
});

test("previously-missing routes (the reason this generator exists) are present", async () => {
  const routes = await getSitemapRoutes();
  assert.ok(routes.includes("/events/"), "/events/ missing — this was the original hand-maintained-sitemap gap");
  assert.ok(routes.includes("/institutional-changelog/"), "/institutional-changelog/ missing — same gap");
});

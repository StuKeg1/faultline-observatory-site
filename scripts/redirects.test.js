/**
 * redirects.test.js — structural tests for the generated public/_redirects.
 *
 * Runs the real generator against the real corpus/notes/events data (no
 * mocking — same principle as validate-events.js validating real event
 * files) and asserts on the file it writes. Run via `npm test`.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STATIC_ROUTES, LEGACY_REDIRECTS, getAllCanonicalRoutes } from "./route-manifest.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");
const REDIRECTS_PATH = path.join(ROOT, "public", "_redirects");
const NOT_FOUND_PATH = path.join(ROOT, "public", "404.html");

test("generator runs clean and regenerates public/_redirects", () => {
  execFileSync("node", ["scripts/generate-redirects.js"], { cwd: ROOT, stdio: "pipe" });
  assert.ok(fs.existsSync(REDIRECTS_PATH), "public/_redirects was not written");
});

test("public/404.html exists (disables Cloudflare Pages automatic SPA fallback)", () => {
  assert.ok(fs.existsSync(NOT_FOUND_PATH), "public/404.html is missing");
});

test("no blanket wildcard rewrite remains", async () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  assert.doesNotMatch(contents, /^\/\*\s/m, "found a `/*` catch-all rule — this is exactly the soft-404 producer being removed");
});

test("every canonical route (except /) has an exact 200 rewrite", async () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  const routes = await getAllCanonicalRoutes();
  assert.ok(routes.length > STATIC_ROUTES.length, "no dynamic routes resolved — corpus/notes/events import likely broken");

  for (const route of routes) {
    if (route === "/") continue;
    assert.ok(
      contents.includes(`${route} /index.html 200`),
      `missing exact 200 rewrite for canonical route ${route}`
    );
  }
});

test("every canonical route's non-canonical slash form redirects to it", async () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  const routes = await getAllCanonicalRoutes();

  for (const route of routes) {
    if (route === "/") continue;
    const nonCanonical = route.endsWith("/") ? route.slice(0, -1) : `${route}/`;
    assert.ok(
      contents.includes(`${nonCanonical} ${route} 301`),
      `missing slash-canonicalization redirect ${nonCanonical} -> ${route}`
    );
  }
});

test("legacy FR-MF-*/prog-mf redirects are present", () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  for (const r of LEGACY_REDIRECTS) {
    assert.ok(contents.includes(`${r.from} ${r.to} 301`), `missing legacy redirect ${r.from} -> ${r.to}`);
  }
});

test("manifest has no duplicate routes", async () => {
  const routes = await getAllCanonicalRoutes();
  const seen = new Set();
  for (const route of routes) {
    assert.ok(!seen.has(route), `duplicate canonical route: ${route}`);
    seen.add(route);
  }
});

test("known static routes are present in the manifest", async () => {
  const routes = await getAllCanonicalRoutes();
  for (const expected of [
    "/", "/the-record/", "/programmes/", "/notes/", "/events/",
    "/methodology/", "/welcome/", "/about/", "/about/origins/",
    "/institutional-health/", "/institutional-changelog/", "/evidence-trajectories/",
  ]) {
    assert.ok(routes.includes(expected), `expected static route missing from manifest: ${expected}`);
  }
});

test("known record and programme ids resolve to canonical routes", async () => {
  const routes = await getAllCanonicalRoutes();
  assert.ok(routes.includes("/the-record/fr-qe-0001/"), "FR-QE-0001 missing from manifest");
  assert.ok(routes.includes("/the-record/fr-am-0001/"), "FR-AM-0001 (post-migration id) missing from manifest");
  assert.ok(routes.includes("/the-record/fr-bt-0001/"), "FR-BT-0001 missing from manifest");
  assert.ok(routes.includes("/programmes/prog-qe/"), "PROG-QE missing from manifest");
  assert.ok(!routes.includes("/the-record/fr-mf-0001/"), "legacy FR-MF id should not appear as a canonical route — it's a redirect, not a destination");
});

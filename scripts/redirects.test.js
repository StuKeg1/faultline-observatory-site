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
import {
  STATIC_ROUTES,
  LEGACY_REDIRECTS,
  getAllCanonicalRoutes,
  getRedirectsManagedRoutes,
} from "./route-manifest.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");
const REDIRECTS_PATH = path.join(ROOT, "public", "_redirects");
const NOT_FOUND_PATH = path.join(ROOT, "public", "404.html");
const RECORD_FUNCTION_PATH = path.join(ROOT, "functions", "the-record", "[[recordId]].js");
const CATCH_ALL_FUNCTION_PATH = path.join(ROOT, "functions", "[[path]].js");
const FUNCTION_ROUTES_PATH = path.join(ROOT, "functions", "generated-routes.js");

test("generator runs clean and regenerates public/_redirects", () => {
  execFileSync("node", ["scripts/generate-redirects.js"], { cwd: ROOT, stdio: "pipe" });
  assert.ok(fs.existsSync(REDIRECTS_PATH), "public/_redirects was not written");
});

test("public/404.html exists (disables Cloudflare Pages automatic SPA fallback)", () => {
  assert.ok(fs.existsSync(NOT_FOUND_PATH), "public/404.html is missing");
});

test("functions/the-record/[[recordId]].js exists (owns /the-record/* routing)", () => {
  assert.ok(fs.existsSync(RECORD_FUNCTION_PATH), "the record-routing Function is missing");
});

test("catch-all Function and generated route table exist", () => {
  assert.ok(fs.existsSync(CATCH_ALL_FUNCTION_PATH), "catch-all route Function is missing");
  assert.ok(fs.existsSync(FUNCTION_ROUTES_PATH), "generated Function route table is missing");
});

test("generated Function route table matches the redirects-managed manifest", async () => {
  const expected = await getRedirectsManagedRoutes();
  const generatedUrl = `${new URL("../functions/generated-routes.js", import.meta.url).href}?t=${Date.now()}`;
  const generated = await import(generatedUrl);
  assert.deepEqual(generated.CANONICAL_ROUTES, expected);
  assert.deepEqual(generated.LEGACY_REDIRECTS, LEGACY_REDIRECTS);
});

test("catch-all Function serves known routes, canonicalises aliases, and preserves unknown 404s", async () => {
  const functionUrl = `${new URL("../functions/[[path]].js", import.meta.url).href}?t=${Date.now()}`;
  const { onRequest } = await import(functionUrl);
  const calls = [];
  const contextFor = (pathname) => ({
    request: new Request(`https://faultlinewatch.com${pathname}`),
    env: {
      ASSETS: {
        fetch: async (request) => {
          calls.push(new URL(request.url).pathname);
          return new Response(new URL(request.url).pathname === "/" ? "SPA" : "NOT FOUND", {
            status: new URL(request.url).pathname === "/" ? 200 : 404,
          });
        },
      },
    },
    next: async () => new Response("RECORD FUNCTION", { status: 299 }),
  });

  const known = await onRequest(contextFor("/public-record/"));
  assert.equal(known.status, 200);
  assert.equal(await known.text(), "SPA");
  assert.equal(calls.at(-1), "/");

  const alias = await onRequest(contextFor("/public-record?sort=updated"));
  assert.equal(alias.status, 301);
  assert.equal(alias.headers.get("location"), "https://faultlinewatch.com/public-record/?sort=updated");

  const unknown = await onRequest(contextFor("/not-a-real-route/"));
  assert.equal(unknown.status, 404);
  assert.equal(await unknown.text(), "NOT FOUND");

  const record = await onRequest(contextFor("/the-record/fr-qe-0001/"));
  assert.equal(record.status, 299);
});

test("no blanket wildcard rewrite remains", async () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  assert.doesNotMatch(contents, /^\/\*\s/m, "found a `/*` catch-all rule — this is exactly the soft-404 producer being removed");
});

test("/the-record/* never appears in public/_redirects — that subtree is Function-owned", () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  assert.doesNotMatch(
    contents,
    /\/the-record\//,
    "a /the-record/* rule leaked into _redirects — Cloudflare gives the [[recordId]] Function routing precedence over _redirects for this prefix, so such a rule would be silently unreliable (this was the fr-mf → fr-am → 404 chain bug)"
  );
});

test("every _redirects-managed route (except /) has an exact 200 rewrite", async () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  const routes = await getRedirectsManagedRoutes();
  const expectedStaticCount = STATIC_ROUTES.filter((r) => !r.startsWith("/the-record/")).length;
  assert.ok(routes.length > expectedStaticCount, "no dynamic routes resolved — corpus/notes/events import likely broken");

  for (const route of routes) {
    if (route === "/") continue;
    assert.ok(
      contents.includes(`${route} /index.html 200`),
      `missing exact 200 rewrite for canonical route ${route}`
    );
  }
});

test("every _redirects-managed route's non-canonical slash form redirects to it", async () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  const routes = await getRedirectsManagedRoutes();

  for (const route of routes) {
    if (route === "/") continue;
    const nonCanonical = route.endsWith("/") ? route.slice(0, -1) : `${route}/`;
    assert.ok(
      contents.includes(`${nonCanonical} ${route} 301`),
      `missing slash-canonicalization redirect ${nonCanonical} -> ${route}`
    );
  }
});

test("legacy redirects are present and resolve in one hop", () => {
  const contents = fs.readFileSync(REDIRECTS_PATH, "utf8");
  for (const r of LEGACY_REDIRECTS) {
    assert.ok(contents.includes(`${r.from} ${r.to} 301`), `missing legacy redirect ${r.from} -> ${r.to}`);
    // The target must already be the final canonical (trailing-slash) form —
    // never a path that itself needs a second redirect to resolve. This is
    // exactly the fr-mf-0001 -> fr-am-0001 -> fr-am-0001/ chain-hop bug.
    assert.ok(
      r.to.endsWith("/") || r.to === "/",
      `legacy redirect target "${r.to}" is not the canonical trailing-slash form — this would chain through a second redirect`
    );
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

test("known static routes are present in the full manifest", async () => {
  const routes = await getAllCanonicalRoutes();
  for (const expected of [
    "/", "/public-record/", "/reading-room/", "/the-record/", "/programmes/", "/notes/", "/events/",
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

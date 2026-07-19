/**
 * smoke-live.js — post-deploy live routing smoke test.
 *
 * The routing incident this follows shipped through a green build, green
 * tests, and clean lint, and was only visible over real HTTP against a
 * live deployment (Cloudflare gives functions/the-record/[[recordId]].js
 * routing precedence over public/_redirects in ways local tooling didn't
 * reproduce). This is the permanent version of the curl checks used to
 * find and confirm that fix. Routes are read live from route-manifest.js,
 * not hardcoded, so the record sample tracks the corpus as it grows.
 *
 * Usage:
 *   node scripts/smoke-live.js                                # production
 *   SMOKE_BASE_URL=http://127.0.0.1:8788 node scripts/smoke-live.js   # any deploy/preview
 *
 * Exits non-zero if any check fails.
 */
import { getAllCanonicalRoutes } from "./route-manifest.js";

const BASE_URL = (process.env.SMOKE_BASE_URL || "https://faultlinewatch.com").replace(/\/$/, "");
const SAMPLE_SIZE = 3;

const RECORD_ROUTE_RE = /^\/the-record\/([a-z0-9-]+)\/$/;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function fetchNoRedirect(pathname, init) {
  return fetch(`${BASE_URL}${pathname}`, { redirect: "manual", ...init });
}

function pickSampleRecordRoutes(routes) {
  const recordRoutes = routes.filter((r) => RECORD_ROUTE_RE.test(r));
  if (recordRoutes.length === 0) return [];
  const step = Math.max(1, Math.floor(recordRoutes.length / SAMPLE_SIZE));
  const sample = [];
  for (let i = 0; i < recordRoutes.length && sample.length < SAMPLE_SIZE; i += step) {
    sample.push(recordRoutes[i]);
  }
  return sample;
}

const results = [];

async function check(name, fn) {
  try {
    await fn();
    results.push({ name, ok: true });
    console.log(`  ok    ${name}`);
  } catch (error) {
    results.push({ name, ok: false, error: error.message });
    console.error(`  FAIL  ${name} — ${error.message}`);
  }
}

const routes = await getAllCanonicalRoutes();
const sampleRecordRoutes = pickSampleRecordRoutes(routes);
const sampleProgrammeRoute = routes.find((r) => /^\/programmes\/prog-[a-z]+\/$/.test(r));

console.log(`Live smoke test against ${BASE_URL}`);
console.log(`Sampling ${sampleRecordRoutes.length} record route(s): ${sampleRecordRoutes.join(", ") || "(none resolved)"}`);
console.log("");

await check("homepage returns 200", async () => {
  const res = await fetchNoRedirect("/");
  assert(res.status === 200, `expected 200, got ${res.status}`);
});

await check("robots.txt returns 200", async () => {
  const res = await fetchNoRedirect("/robots.txt");
  assert(res.status === 200, `expected 200, got ${res.status}`);
});

for (const route of sampleRecordRoutes) {
  await check(`known record ${route} returns 200`, async () => {
    const res = await fetchNoRedirect(route);
    assert(res.status === 200, `expected 200, got ${res.status}`);
  });
}

if (sampleProgrammeRoute) {
  await check(`known programme ${sampleProgrammeRoute} returns 200`, async () => {
    const res = await fetchNoRedirect(sampleProgrammeRoute);
    assert(res.status === 200, `expected 200, got ${res.status}`);
  });
}

if (sampleRecordRoutes.length > 0) {
  const canonical = sampleRecordRoutes[0];
  const nonSlash = canonical.slice(0, -1);
  await check(`non-slash record path (${nonSlash}) redirects to canonical in one hop`, async () => {
    const res = await fetchNoRedirect(nonSlash);
    assert(res.status === 301, `expected 301, got ${res.status}`);
    const location = res.headers.get("location") || "";
    assert(location.endsWith(canonical), `expected Location ending in ${canonical}, got "${location}"`);
  });
}

await check("legacy /the-record/fr-mf-0001 redirects in one hop to the final canonical URL", async () => {
  const res = await fetchNoRedirect("/the-record/fr-mf-0001");
  assert(res.status === 301, `expected 301, got ${res.status}`);
  const location = res.headers.get("location") || "";
  assert(
    location.endsWith("/the-record/fr-am-0001/"),
    `expected a one-hop redirect straight to /the-record/fr-am-0001/, got "${location}" (a two-hop chain would land on a non-slash intermediate here)`
  );
});

await check("unknown record id returns a real 404", async () => {
  const res = await fetchNoRedirect("/the-record/fr-zz-9999/");
  assert(res.status === 404, `expected 404, got ${res.status}`);
});

await check("garbage top-level path returns a real 404", async () => {
  const res = await fetchNoRedirect("/definitely-not-a-page-xyz");
  assert(res.status === 404, `expected 404, got ${res.status}`);
});

if (sampleRecordRoutes.length > 0) {
  const target = sampleRecordRoutes[0];
  const expectedId = target.match(RECORD_ROUTE_RE)[1].toUpperCase();
  await check(`Googlebot UA gets a record-specific og:title on ${target}`, async () => {
    const res = await fetch(`${BASE_URL}${target}`, { headers: { "user-agent": "Googlebot" } });
    assert(res.status === 200, `expected 200, got ${res.status}`);
    const body = await res.text();
    const match = body.match(/<meta property="og:title" content="([^"]*)"/i);
    assert(match, "no og:title meta tag found in response");
    assert(
      match[1].startsWith(expectedId),
      `expected og:title to start with "${expectedId}", got "${match[1]}" (this is the check that would have caught the routing bug — a broken response here still carried the generic homepage title)`
    );
  });
}

console.log("");
const failed = results.filter((r) => !r.ok);
console.log(`${results.length - failed.length}/${results.length} checks passed`);

if (failed.length > 0) {
  console.error(`\n${failed.length} check(s) failed:`);
  for (const f of failed) console.error(`  - ${f.name}: ${f.error}`);
  process.exit(1);
}

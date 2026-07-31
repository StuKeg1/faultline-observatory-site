/**
 * prerender.test.js — verifies the generated static HTML contract.
 *
 * These tests run against dist/, so they require a completed `npm run build`.
 * If dist/ is absent they skip rather than fail, so that `npm test` remains
 * runnable without a build; CI runs build before test.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractHeadTags, mergeHead, composePage } from "./prerender.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");
const DIST = path.join(ROOT, "dist");
const PUBLIC_DIR = path.join(ROOT, "public");
const BASE_URL = "https://faultlinewatch.com";

const hasBuild = fs.existsSync(path.join(DIST, "index.html"));
const skip = hasBuild ? false : "dist/ not built — run `npm run build` first";

function read(route) {
  return fs.readFileSync(path.join(DIST, route, "index.html"), "utf8");
}

function head(html) {
  const match = /<head>([\s\S]*?)<\/head>/i.exec(html);
  assert.ok(match, "document has a <head>");
  return match[1];
}

function body(html) {
  const open = html.indexOf('<div id="root">');
  const close = html.lastIndexOf("</div>");
  if (open === -1 || close <= open) return "";
  return html.slice(open + '<div id="root">'.length, close);
}

function sitemapRoutes(filename) {
  const xml = fs.readFileSync(path.join(PUBLIC_DIR, filename), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace(BASE_URL, "")
  );
}

// ─── PURE UNITS ──────────────────────────────────────────────
// These need no build and always run.

test("extractHeadTags lifts leading hoistable tags and leaves the body intact", () => {
  const fragment =
    '<title>T</title><meta name="description" content="D"/>' +
    '<link rel="canonical" href="https://x/"/><main>content</main>';
  const { tags, body: rendered } = extractHeadTags(fragment);
  assert.equal(tags.length, 3);
  assert.equal(rendered, "<main>content</main>");
});

test("extractHeadTags does not reach past the first non-hoistable tag", () => {
  // SVG <title> elements are used for accessible names on record pages and
  // must never be lifted into the document head.
  const fragment = '<title>Page</title><svg><title>Chart</title></svg>';
  const { tags, body: rendered } = extractHeadTags(fragment);
  assert.equal(tags.length, 1);
  assert.ok(rendered.includes("<title>Chart</title>"));
});

test("mergeHead replaces existing keys rather than appending duplicates", () => {
  const template =
    '<head><title>Default</title><meta property="og:title" content="Default"/></head>';
  const merged = mergeHead(template, [
    "<title>Page</title>",
    '<meta property="og:title" content="Page"/>',
  ]);
  assert.equal((merged.match(/<title>/g) || []).length, 1);
  assert.equal((merged.match(/og:title/g) || []).length, 1);
  assert.ok(merged.includes("<title>Page</title>"));
});

test("mergeHead appends keys the template does not already carry", () => {
  const merged = mergeHead("<head><title>D</title></head>", [
    '<link rel="canonical" href="https://x/"/>',
  ]);
  assert.ok(merged.includes('rel="canonical"'));
});

test("composePage mounts the rendered body inside the root element", () => {
  const page = composePage(
    '<html><head><title>D</title></head><body><div id="root"></div></body></html>',
    '<title>P</title><main>hello</main>'
  );
  assert.ok(page.includes('<div id="root"><main>hello</main></div>'));
  assert.ok(!/<div id="root">\s*<title>/.test(page));
});

// ─── GENERATED OUTPUT ────────────────────────────────────────

test("every sitemap record has a generated HTML page", { skip }, () => {
  for (const route of sitemapRoutes("sitemap-records.xml")) {
    assert.ok(
      fs.existsSync(path.join(DIST, route, "index.html")),
      `missing generated page for ${route}`
    );
  }
});

test("every sitemap Programme Note has a generated HTML page", { skip }, () => {
  for (const route of sitemapRoutes("sitemap-notes.xml")) {
    assert.ok(
      fs.existsSync(path.join(DIST, route, "index.html")),
      `missing generated page for ${route}`
    );
  }
});

test("record pages carry substantive content before JavaScript runs", { skip }, () => {
  for (const route of sitemapRoutes("sitemap-records.xml")) {
    const id = route.split("/").filter(Boolean).at(-1).toUpperCase();
    const rendered = body(read(route));

    assert.ok(rendered.length > 4000, `${id} body is only ${rendered.length} bytes`);
    assert.ok(rendered.includes(id), `${id} body omits its own identifier`);
    // Only the sections every record renders. Assessment History, Claim
    // Lineage and Open Questions are gated by RENDER_PILOT_001_RECORDS in
    // FrontierRecord.jsx and are absent from most records by design — static
    // rendering reproduces the page as it is, it does not add sections.
    for (const section of ["Verification Matrix", "State Warrant", "Mutation Log", "Evidence Sources"]) {
      assert.ok(rendered.includes(section), `${id} body omits ${section}`);
    }
  }
});

test("evidence entries are present without JavaScript", { skip }, () => {
  // The sources panel is collapsed by default via native <details>, so the
  // entries must still be in the markup.
  for (const route of sitemapRoutes("sitemap-records.xml")) {
    const rendered = body(read(route));
    assert.ok(rendered.includes('class="evidence-list"'), `${route} omits the evidence list`);
    assert.ok(/class="ev-code"/.test(rendered), `${route} omits evidence entry codes`);
  }
});

test("Programme Note pages carry their content before JavaScript runs", { skip }, () => {
  for (const route of sitemapRoutes("sitemap-notes.xml")) {
    const id = route.split("/").filter(Boolean).at(-1).toUpperCase();
    const rendered = body(read(route));
    assert.ok(rendered.length > 4000, `${id} body is only ${rendered.length} bytes`);
    assert.ok(rendered.includes(id), `${id} body omits its own identifier`);
  }
});

test("titles, descriptions and canonical links are page-specific", { skip }, () => {
  const routes = [...sitemapRoutes("sitemap-records.xml"), ...sitemapRoutes("sitemap-notes.xml")];
  const titles = new Set();

  for (const route of routes) {
    const h = head(read(route));

    assert.equal((h.match(/<title>/g) || []).length, 1, `${route} has more than one <title>`);
    assert.equal((h.match(/rel="canonical"/g) || []).length, 1, `${route} has more than one canonical link`);

    const canonical = /<link rel="canonical" href="([^"]+)"/.exec(h);
    assert.ok(canonical, `${route} has no canonical link`);
    assert.equal(canonical[1], `${BASE_URL}${route}`, `${route} canonical link points elsewhere`);

    const title = /<title>([\s\S]*?)<\/title>/.exec(h)[1];
    assert.notEqual(title, "Faultline Observatory", `${route} still carries the default title`);
    titles.add(title);

    for (const key of ["og:title", "og:description", "og:url", "twitter:title", "twitter:description", 'name="description"']) {
      const occurrences = h.split(key).length - 1;
      assert.equal(occurrences, 1, `${route} has ${occurrences} occurrences of ${key} in <head>`);
    }
  }

  assert.equal(titles.size, routes.length, "generated titles are not unique per page");
});

test("internal navigation is present as real anchors", { skip }, () => {
  const rendered = body(read("/the-record/fr-qe-0001/"));
  assert.ok(/<a [^>]*href="\/the-record\/fr-qe-\d{4}\/"/.test(rendered), "no related-record anchors");
  assert.ok(/<a [^>]*href="\/"/.test(rendered), "no institutional navigation anchors");
});

test("generated pages load the same hashed entry bundle as the shell", { skip }, () => {
  const shellScript = /<script type="module"[^>]*src="([^"]+)"/.exec(
    fs.readFileSync(path.join(DIST, "index.html"), "utf8")
  )[1];

  for (const route of sitemapRoutes("sitemap-records.xml")) {
    assert.ok(read(route).includes(shellScript), `${route} does not load ${shellScript}`);
  }
});

test("generation is deterministic for a fixed corpus", { skip }, () => {
  const first = read("/the-record/fr-qe-0001/");
  const second = read("/the-record/fr-qe-0001/");
  assert.equal(first, second);
});

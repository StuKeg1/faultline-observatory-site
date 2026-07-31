/**
 * prerender.js — build-time static HTML generation for every Frontier Record
 * and every Programme Note.
 *
 * Runs after `vite build`, against dist/index.html (which already carries the
 * hashed asset tags Vite emitted). For each canonical route it renders the
 * real application tree through src/entry-server.jsx, lifts the hoistable head
 * tags out of the rendered fragment, merges them over the template's static
 * defaults, and writes dist/<route>/index.html.
 *
 * Principles this script is built to honour:
 *
 *  - Route list is derived from the same registries the app and
 *    generate-sitemap.js read (ALL_RECORDS, PROGRAMME_NOTES). There is no
 *    second list of records anywhere.
 *  - Page content is rendered from the real components. There is no second
 *    representation of record content.
 *  - Output is deterministic: same corpus in, same bytes out.
 *  - A registered record or Programme Note that fails to produce a page fails
 *    the build. Silent omission is the failure mode this whole exercise exists
 *    to remove, so it is never tolerated.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";
import { createServer } from "vite";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");
const DIST = path.join(ROOT, "dist");
const TEMPLATE = path.join(DIST, "index.html");

function fail(message) {
  console.error(`\nPrerender failed: ${message}\n`);
  process.exit(1);
}

// ─── HEAD MERGING ────────────────────────────────────────────

/**
 * React 19 treats <title>, <meta> and <link> as hoistable and flushes them at
 * the front of the stream, ahead of all other markup. That gives an exact,
 * non-heuristic extraction rule: consume hoistable tags from the start of the
 * fragment until the first tag that is not one. SVG <title> elements — which
 * the record pages use for accessible names — appear later in the document and
 * inside an <svg> context, so they are never picked up by this.
 */
const LEADING_HOISTABLE = /^\s*(<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*?\/?>|<link\b[^>]*?\/?>)/i;

export function extractHeadTags(fragment) {
  const tags = [];
  let rest = fragment;

  for (;;) {
    const match = LEADING_HOISTABLE.exec(rest);
    if (!match) break;
    tags.push(match[1]);
    rest = rest.slice(match[0].length);
  }

  return { tags, body: rest };
}

/** Identity of a head tag, for replace-or-append against the template. */
function tagKey(tag) {
  if (/^<title/i.test(tag)) return "title";
  const name = /\bname=["']([^"']+)["']/i.exec(tag);
  if (name) return `meta:name:${name[1]}`;
  const property = /\bproperty=["']([^"']+)["']/i.exec(tag);
  if (property) return `meta:property:${property[1]}`;
  const rel = /\brel=["']([^"']+)["']/i.exec(tag);
  if (rel) return `link:rel:${rel[1]}`;
  return null;
}

function patternForKey(key) {
  if (key === "title") return /<title\b[^>]*>[\s\S]*?<\/title>/i;
  // Keys such as "meta:property:og:title" carry colons inside the value, so
  // the value is everything after the first two segments — not split[2].
  const [tag, attr, ...valueParts] = key.split(":");
  const escaped = valueParts.join(":").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`<${tag}\\b[^>]*\\b${attr}=["']${escaped}["'][^>]*?\\/?>`, "i");
}

export function mergeHead(template, tags) {
  let html = template;

  for (const tag of tags) {
    const key = tagKey(tag);
    if (!key) continue;

    const pattern = patternForKey(key);
    if (pattern.test(html)) {
      html = html.replace(pattern, () => tag);
    } else {
      html = html.replace("</head>", `    ${tag}\n  </head>`);
    }
  }

  return html;
}

export function composePage(template, fragment) {
  const { tags, body } = extractHeadTags(fragment);
  const html = mergeHead(template, tags);

  if (!html.includes('<div id="root"></div>')) {
    fail("dist/index.html no longer contains an empty <div id=\"root\"></div> mount point");
  }

  return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

// ─── ROUTE DISCOVERY ─────────────────────────────────────────

/**
 * Canonical routes that must receive a generated page, read live from the same
 * modules the application and generate-sitemap.js use. Loaded through Vite's
 * resolver rather than Node's, for the same reason route-manifest.js does:
 * some data modules use Vite-style extensionless imports.
 */
async function getPrerenderRoutes(server) {
  const { ALL_RECORDS } = await server.ssrLoadModule("/src/data/corpus.js");
  const { PROGRAMME_NOTES } = await server.ssrLoadModule("/src/data/programmeNotes.js");

  if (!ALL_RECORDS?.length) fail("resolved zero Frontier Records");
  if (!PROGRAMME_NOTES?.length) fail("resolved zero Programme Notes");

  return [
    ...ALL_RECORDS.map((record) => ({
      kind: "record",
      id: record.id,
      route: `/the-record/${record.id.toLowerCase()}/`,
    })),
    ...PROGRAMME_NOTES.map((note) => ({
      kind: "note",
      id: note.id,
      route: `/notes/${note.id.toLowerCase()}/`,
    })),
  ];
}

// ─── OUTPUT CONTRACT ─────────────────────────────────────────

/**
 * Minimum substantive content a generated page must contain. This is not a
 * style check — it is the guard that stops a silently-empty shell from being
 * published as though it were a record.
 */
const MIN_BODY_BYTES = 4000;

function assertSubstantive({ id, route }, fragment) {
  if (fragment.length < MIN_BODY_BYTES) {
    fail(`${id} (${route}) rendered only ${fragment.length} bytes — below the ${MIN_BODY_BYTES}-byte substantive-content floor`);
  }
  if (!fragment.includes(id)) {
    fail(`${id} (${route}) rendered without its own identifier in the body`);
  }
}

// ─── MAIN ────────────────────────────────────────────────────

async function main() {
  if (!fs.existsSync(TEMPLATE)) {
    fail("dist/index.html not found — run `vite build` before prerendering");
  }

  const template = fs.readFileSync(TEMPLATE, "utf8");

  const server = await createServer({
    root: ROOT,
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "silent",
  });

  let written = 0;

  try {
    const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
    const targets = await getPrerenderRoutes(server);

    for (const target of targets) {
      let fragment;
      try {
        ({ html: fragment } = await render(target.route));
      } catch (error) {
        fail(`${target.id} (${target.route}) threw during render — ${error?.message ?? error}`);
      }

      assertSubstantive(target, fragment);

      const outDir = path.join(DIST, target.route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), composePage(template, fragment), "utf8");
      written += 1;
    }

    console.log(
      `Prerendered ${written} pages ` +
        `(${targets.filter((t) => t.kind === "record").length} Frontier Records, ` +
        `${targets.filter((t) => t.kind === "note").length} Programme Notes) -> dist/`
    );
  } finally {
    await server.close();
  }

}

// Importable for tests; only runs the generation pass when invoked directly.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

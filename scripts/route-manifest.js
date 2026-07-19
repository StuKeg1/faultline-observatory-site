/**
 * route-manifest.js — canonical route manifest for Cloudflare Pages routing
 *
 * Single source of truth for "what real, servable URLs does this app have."
 * Consumed by generate-redirects.js (writes public/_redirects) and by
 * scripts/redirects.test.js (verifies the generated file against this list).
 *
 * Static routes mirror src/App.jsx's route table. Dynamic routes are read
 * live from the same corpus/notes/events modules the app renders from —
 * never a second copy of record data (same principle as
 * functions/the-record/[[recordId]].js).
 *
 * Canonical form: every route carries a trailing slash except "/" itself,
 * matching the convention already used by getRecordUrl()/getNoteUrl() and
 * public/sitemap.xml. The one deliberate exception is /events/:eventId,
 * which the app itself links and canonicalizes without a trailing slash
 * and in the event's own id casing (see src/pages/Events.jsx) — the
 * manifest mirrors that rather than imposing a different convention.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");

// Every route App.jsx serves that isn't parameterised. Canonical
// (trailing-slash) form only — non-slash forms are generated as redirects.
export const STATIC_ROUTES = [
  "/",
  "/the-record/",
  "/evidence-trajectories/",
  "/events/",
  "/programmes/",
  "/methodology/",
  "/welcome/",
  "/about/",
  "/about/origins/",
  "/notes/",
  "/how-to-read/",
  "/guides/",
  "/guides/how-to-read/",
  "/guides/mcp-access/",
  "/institutional-health/",
  "/institutional-changelog/",
  "/tokens/",
];

// Legacy id-migration redirects (Release 006 — FR-MF-* -> FR-AM-*,
// prog-mf -> prog-am). Kept as explicit rules rather than enumerated ids so
// future FR-MF-* references (if any surface) still resolve.
// Exact (non-placeholder) rules are listed first — Cloudflare's own
// _redirects linter flags placeholder rules placed ahead of exact ones as
// slower to match.
export const LEGACY_REDIRECTS = [
  { from: "/programmes/prog-mf", to: "/programmes/prog-am" },
  { from: "/programmes/prog-mf/", to: "/programmes/prog-am/" },
  { from: "/the-record/fr-mf-:id", to: "/the-record/fr-am-:id" },
  { from: "/the-record/fr-mf-:id/", to: "/the-record/fr-am-:id/" },
  { from: "/the-record/FR-MF-:id", to: "/the-record/fr-am-:id" },
  { from: "/the-record/FR-MF-:id/", to: "/the-record/fr-am-:id/" },
];

function walkJsonFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkJsonFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith(".json")) return [fullPath];
    return [];
  });
}

/**
 * Dynamic (data-derived) canonical routes. Loaded through Vite's own
 * resolver (ssrLoadModule) rather than native Node `import()` — some data
 * modules (programmeNotes.js, landscapeEssays.js) use Vite-style
 * extensionless imports that only Vite's resolver, not Node's, accepts.
 * Using the same resolution path as the built app avoids this script ever
 * silently diverging from what actually ships.
 */
export async function getDynamicRoutes() {
  const routes = [];
  const server = await createServer({
    root: ROOT,
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "silent",
  });

  try {
    const { ALL_RECORDS, PROGRAMMES } = await server.ssrLoadModule("/src/data/corpus.js");
    for (const record of ALL_RECORDS) {
      routes.push(`/the-record/${record.id.toLowerCase()}/`);
    }
    for (const prog of PROGRAMMES) {
      routes.push(`/programmes/${prog.id.toLowerCase()}/`);
    }

    const { ALL_NOTES } = await server.ssrLoadModule("/src/data/notes.js");
    const { PROGRAMME_NOTES } = await server.ssrLoadModule("/src/data/programmeNotes.js");
    const { LANDSCAPE_ESSAYS } = await server.ssrLoadModule("/src/data/landscapeEssays.js");
    for (const note of [...ALL_NOTES, ...PROGRAMME_NOTES, ...LANDSCAPE_ESSAYS]) {
      routes.push(`/notes/${note.id.toLowerCase()}/`);
    }
  } finally {
    await server.close();
  }

  const eventFiles = walkJsonFiles(path.join(ROOT, "events"));
  for (const filePath of eventFiles) {
    const event = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (event?.eventId) routes.push(`/events/${event.eventId}`);
  }

  return routes;
}

export async function getAllCanonicalRoutes() {
  const dynamic = await getDynamicRoutes();
  return [...STATIC_ROUTES, ...dynamic];
}

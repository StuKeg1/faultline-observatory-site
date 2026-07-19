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
 *
 * /the-record/* is NOT written into public/_redirects even though its
 * routes are part of this manifest. functions/the-record/[[recordId]].js
 * is a rest-segment Function match that claims every request under that
 * prefix — Cloudflare Pages gives Functions routing precedence, and a
 * _redirects rule for a path a Function also matches is not reliably
 * consulted. That subtree owns its own routing (SPA-shell serving, slash
 * canonicalization, legacy-id redirect, 404) internally instead. See
 * getRedirectsManagedRoutes() below for the subset _redirects actually
 * governs.
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

// Legacy id-migration redirects (Release 006 — prog-mf -> prog-am). Each
// target is the final canonical (trailing-slash) form directly — one hop,
// not a redirect into another redirect. FR-MF-* -> FR-AM-* is handled
// inside functions/the-record/[[recordId]].js instead (see the comment
// above STATIC_ROUTES); it is not a _redirects rule.
export const LEGACY_REDIRECTS = [
  { from: "/programmes/prog-mf", to: "/programmes/prog-am/" },
  { from: "/programmes/prog-mf/", to: "/programmes/prog-am/" },
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

/**
 * The subset of the manifest public/_redirects should actually generate
 * rules for — everything except /the-record/*, which the Pages Function
 * owns and self-serves (see comment above STATIC_ROUTES).
 */
export async function getRedirectsManagedRoutes() {
  const all = await getAllCanonicalRoutes();
  return all.filter((route) => !route.startsWith("/the-record/"));
}

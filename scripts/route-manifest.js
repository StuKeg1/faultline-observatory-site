/** Canonical route manifest for Cloudflare Pages routing. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const ROOT = path.dirname(fileURLToPath(import.meta.url)).replace(/scripts$/, "");

export const STATIC_ROUTES = [
  "/",
  "/public-record/",
  "/reading-room/",
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
  "/guides/mcp-access/",
  "/institutional-health/",
  "/institutional-changelog/",
  "/documentation-requests/",
  "/political-rumour-accuracy-pilot/",
  "/experiments/vd-001/",
  "/experiments/vd-002/",
  "/tokens/",
];

export const LEGACY_REDIRECTS = [
  { from: "/programmes/prog-mf", to: "/programmes/prog-am/" },
  { from: "/programmes/prog-mf/", to: "/programmes/prog-am/" },
  { from: "/guides/how-to-read", to: "/how-to-read/" },
  { from: "/guides/how-to-read/", to: "/how-to-read/" },
];

export const NON_INDEXABLE_ROUTES = new Set([
  "/experiments/vd-001/",
  "/experiments/vd-002/",
  "/tokens/",
]);
export const INDEXABLE_STATIC_ROUTES = STATIC_ROUTES.filter((route) => !NON_INDEXABLE_ROUTES.has(route));

function walkJsonFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkJsonFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith(".json")) return [fullPath];
    return [];
  });
}

export async function getDynamicRouteGroups() {
  const groups = { records: [], programmes: [], notes: [], events: [] };
  const server = await createServer({ root: ROOT, server: { middlewareMode: true }, appType: "custom", logLevel: "silent" });
  try {
    const { ALL_RECORDS, PROGRAMMES } = await server.ssrLoadModule("/src/data/corpus.js");
    for (const record of ALL_RECORDS) groups.records.push(`/the-record/${record.id.toLowerCase()}/`);
    for (const prog of PROGRAMMES) groups.programmes.push(`/programmes/${prog.id.toLowerCase()}/`);
    const { ALL_NOTES: INSTITUTIONAL_NOTES } = await server.ssrLoadModule("/src/data/notes.js");
    const { PROGRAMME_NOTES } = await server.ssrLoadModule("/src/data/programmeNotes.js");
    const { LANDSCAPE_ESSAYS } = await server.ssrLoadModule("/src/data/landscapeEssays.js");
    const INDEXABLE_PUBLICATIONS = [...INSTITUTIONAL_NOTES, ...PROGRAMME_NOTES, ...LANDSCAPE_ESSAYS];
    for (const publication of INDEXABLE_PUBLICATIONS) groups.notes.push(`/notes/${publication.id.toLowerCase()}/`);
  } finally {
    await server.close();
  }
  const eventFiles = walkJsonFiles(path.join(ROOT, "events"));
  for (const filePath of eventFiles) {
    const event = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (event?.eventId) groups.events.push(`/events/${event.eventId}`);
  }
  return groups;
}

export async function getDynamicRoutes() {
  const groups = await getDynamicRouteGroups();
  return Object.values(groups).flat();
}

export async function getAllCanonicalRoutes() {
  const dynamic = await getDynamicRoutes();
  return [...STATIC_ROUTES, ...dynamic];
}

export async function getIndexableRouteGroups() {
  const dynamic = await getDynamicRouteGroups();
  return { records: dynamic.records, notes: dynamic.notes, pages: [...INDEXABLE_STATIC_ROUTES, ...dynamic.programmes, ...dynamic.events] };
}

export async function getAllIndexableRoutes() {
  const groups = await getIndexableRouteGroups();
  return [...groups.records, ...groups.notes, ...groups.pages];
}

export async function getRedirectsManagedRoutes() {
  const all = await getAllCanonicalRoutes();
  return all.filter((route) => !route.startsWith("/the-record/"));
}

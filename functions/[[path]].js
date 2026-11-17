/**
 * Cloudflare Pages Function — authoritative routing for every public route
 * outside /the-record/*.
 *
 * Redundant 200 rewrites are omitted from public/_redirects because
 * Cloudflare rejects them as potential loops. A matched Function has a
 * reliable asset binding, so this boundary
 * resolves canonical routes explicitly while preserving genuine 404s for
 * unknown paths. /the-record/* remains owned by its more-specific Function.
 *
 * Where a canonical route has a build-time generated static page (Programme
 * Notes — see scripts/prerender.js), that page is served instead of the shell.
 */
import { CANONICAL_ROUTES, LEGACY_REDIRECTS, NON_INDEXABLE_ROUTES } from "./generated-routes.js";

const canonicalRoutes = new Set(CANONICAL_ROUTES);
const nonIndexableRoutes = new Set(NON_INDEXABLE_ROUTES);
const legacyRedirects = new Map(LEGACY_REDIRECTS.map(({ from, to }) => [from, to]));

function nonCanonicalForm(route) {
  if (route === "/") return null;
  return route.endsWith("/") ? route.slice(0, -1) : `${route}/`;
}

const canonicalByAlias = new Map(
  CANONICAL_ROUTES
    .map((route) => [nonCanonicalForm(route), route])
    .filter(([alias]) => alias)
);

function redirect(requestUrl, pathname) {
  const destination = new URL(pathname, requestUrl);
  destination.search = new URL(requestUrl).search;
  return Response.redirect(destination.toString(), 301);
}

function fetchAsset(context, pathname) {
  const assetUrl = new URL(pathname, context.request.url);
  return context.env.ASSETS.fetch(new Request(assetUrl.toString(), context.request));
}

function protectNonIndexableResponse(response) {
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex, nofollow");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const { pathname } = url;

  // Cloudflare should select functions/the-record/[[recordId]].js first.
  // Keep the ownership boundary explicit if routing precedence ever changes.
  if (pathname === "/the-record" || pathname.startsWith("/the-record/")) {
    return context.next();
  }

  const legacyTarget = legacyRedirects.get(pathname);
  if (legacyTarget) return redirect(context.request.url, legacyTarget);

  const canonicalTarget = canonicalByAlias.get(pathname);
  if (canonicalTarget) return redirect(context.request.url, canonicalTarget);

  if (canonicalRoutes.has(pathname)) {
    // Programme Note routes are prerendered to static HTML at build time
    // (scripts/prerender.js). Serve the generated page when one exists; every
    // other canonical route still resolves to the SPA shell as before.
    const prerendered = await fetchAsset(context, pathname);
    const response = prerendered.ok ? prerendered : await fetchAsset(context, "/");
    return nonIndexableRoutes.has(pathname)
      ? protectNonIndexableResponse(response)
      : response;
  }

  // Static assets and unknown paths both remain asset-server concerns. Known
  // assets are returned normally; unknown paths retain the real 404 response.
  return context.env.ASSETS.fetch(context.request);
}

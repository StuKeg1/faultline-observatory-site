/**
 * Cloudflare Pages Function — authoritative routing for every public route
 * outside /the-record/*.
 *
 * The project's exact 200 rules in public/_redirects are present and valid,
 * but live Pages deployments have repeatedly served 404.html for those known
 * routes. A matched Function has a reliable asset binding, so this boundary
 * resolves canonical routes explicitly while preserving genuine 404s for
 * unknown paths. /the-record/* remains owned by its more-specific Function.
 */
import { CANONICAL_ROUTES, LEGACY_REDIRECTS } from "./generated-routes.js";

const canonicalRoutes = new Set(CANONICAL_ROUTES);
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

  if (canonicalRoutes.has(pathname)) return fetchAsset(context, "/");

  // Static assets and unknown paths both remain asset-server concerns. Known
  // assets are returned normally; unknown paths retain the real 404 response.
  return context.env.ASSETS.fetch(context.request);
}

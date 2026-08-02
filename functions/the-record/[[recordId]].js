/**
 * Cloudflare Pages Function — owns all routing under /the-record/*.
 *
 * [[recordId]] is a rest-segment match, so this Function claims every
 * request under /the-record/* (the bare archive index, every record
 * detail page, and any garbage path). Cloudflare gives a matched Function
 * routing precedence over public/_redirects for the same path — calling
 * context.next() here is not guaranteed to run _redirects rules for this
 * prefix, so this subtree does NOT rely on public/_redirects at all
 * (scripts/route-manifest.js explicitly excludes /the-record/* from what
 * gets written there). Instead this Function resolves routing itself:
 *
 *   - no id segment (bare /the-record, /the-record/)      -> prerendered archive index, 200
 *   - fr-mf-* legacy id (Release 006)                     -> 301, one hop, straight to canonical
 *   - known record id, non-canonical path (case/slash)    -> 301 to canonical
 *   - known record id, canonical path                     -> generated static page, 200
 *   - unknown id                                          -> real 404
 *
 * Record pages are prerendered at build time by scripts/prerender.js, so the
 * response body is complete indexable HTML for every user agent alike. The
 * previous crawler-user-agent OG/Twitter rewriting is gone: it existed only to
 * compensate for an empty shell, and serving different substantive content by
 * user agent is not something this Function does.
 */
import { ALL_RECORDS } from "../../src/data/corpus.js";

const BASE_URL = "https://faultlinewatch.com";

function findRecord(segment) {
  const id = segment.toLowerCase();
  return ALL_RECORDS.find((r) => r.id.toLowerCase() === id) ?? null;
}

/** Fetches a literal static asset from the deployed build, regardless of the request's own path. */
async function fetchAsset(context, pathname) {
  const assetUrl = new URL(pathname, context.request.url);
  return context.env.ASSETS.fetch(new Request(assetUrl.toString(), context.request));
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const params = context.params.recordId;
  const segment = Array.isArray(params) ? params[0] : params;

  if (!segment) {
    // This Function owns the bare archive index as well as record detail
    // routes, so it must explicitly serve the generated index page. Fetching
    // "/" here would discard the index's page-specific HTML and metadata.
    return fetchAsset(context, "/the-record/");
  }

  if (/^fr-mf-/i.test(segment)) {
    // Release 006 migration. One hop, straight to the final canonical URL —
    // not a redirect into another redirect.
    const canonicalPath = `/the-record/${segment.replace(/^fr-mf-/i, "fr-am-").toLowerCase()}/`;
    return Response.redirect(`${BASE_URL}${canonicalPath}${url.search}`, 301);
  }

  const record = findRecord(segment);

  if (!record) {
    // Fetch "/404", not "/404.html" — same clean-URL aliasing as above.
    const notFound = await fetchAsset(context, "/404");
    return new Response(notFound.body, { status: 404, statusText: "Not Found", headers: notFound.headers });
  }

  const canonicalPath = `/the-record/${record.id.toLowerCase()}/`;
  if (url.pathname !== canonicalPath) {
    return Response.redirect(`${BASE_URL}${canonicalPath}${url.search}`, 301);
  }

  // Every record in the corpus has a generated static page (scripts/prerender.js
  // fails the build otherwise), so serve that page directly. The SPA shell is
  // kept only as a defensive fallback if an asset is somehow missing.
  const prerendered = await fetchAsset(context, canonicalPath);
  if (prerendered.ok) return prerendered;

  return fetchAsset(context, "/");
}

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
 *   - no id segment (bare /the-record, /the-record/)      -> SPA shell, 200
 *   - fr-mf-* legacy id (Release 006)                     -> 301, one hop, straight to canonical
 *   - known record id, non-canonical path (case/slash)    -> 301 to canonical
 *   - known record id, canonical path                     -> SPA shell, 200
 *     (crawler UAs additionally get server-rewritten OG/Twitter tags,
 *     sourced live from the same corpus/derive modules the app itself
 *     uses — never a second copy of record data)
 *   - unknown id                                          -> real 404
 */
import { ALL_RECORDS } from "../../src/data/corpus.js";
import { getRecordMetaDescription } from "../../src/data/derive.js";

const SITE_NAME = "Faultline Observatory";
const BASE_URL = "https://faultlinewatch.com";

const CRAWLER_UA = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|WhatsApp|TelegramBot|Discordbot|Googlebot|Google-InspectionTool|bingbot|Applebot|redditbot|Pinterest|SkypeUriPreview|vkShare|Embedly|Iframely/i;

function isCrawler(userAgent) {
  return CRAWLER_UA.test(userAgent || "");
}

function findRecord(segment) {
  const id = segment.toLowerCase();
  return ALL_RECORDS.find((r) => r.id.toLowerCase() === id) ?? null;
}

class AttrRewriter {
  constructor(attr, value) {
    this.attr = attr;
    this.value = value;
  }
  element(element) {
    element.setAttribute(this.attr, this.value);
  }
}

class TextRewriter {
  constructor(content) {
    this.content = content;
  }
  element(element) {
    element.setInnerContent(this.content);
  }
}

class HeadAppender {
  constructor(html) {
    this.html = html;
  }
  element(element) {
    element.append(this.html, { html: true });
  }
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
    // Bare /the-record or /the-record/ — always the SPA shell (archive index).
    // Fetch "/", not "/index.html" — Cloudflare's asset serving treats the
    // latter as a non-canonical alias of the former and 308s it back to "/",
    // which would recurse instead of returning content.
    return fetchAsset(context, "/");
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

  const response = await fetchAsset(context, "/");

  const userAgent = context.request.headers.get("user-agent") || "";
  if (!isCrawler(userAgent)) return response;

  const ogTitle = `${record.id} — ${record.claim.shortLabel}`;
  const pageTitle = `${ogTitle} | ${SITE_NAME}`;
  const description = getRecordMetaDescription(record);
  const canonicalHtml = `<link rel="canonical" href="${(`${BASE_URL}${canonicalPath}`).replace(/"/g, "&quot;")}">`;

  return new HTMLRewriter()
    .on("title", new TextRewriter(pageTitle))
    .on('meta[name="description"]', new AttrRewriter("content", description))
    .on('meta[property="og:title"]', new AttrRewriter("content", ogTitle))
    .on('meta[property="og:description"]', new AttrRewriter("content", description))
    .on('meta[property="og:url"]', new AttrRewriter("content", `${BASE_URL}${canonicalPath}`))
    .on('meta[name="twitter:title"]', new AttrRewriter("content", ogTitle))
    .on('meta[name="twitter:description"]', new AttrRewriter("content", description))
    .on("head", new HeadAppender(canonicalHtml))
    .transform(response);
}

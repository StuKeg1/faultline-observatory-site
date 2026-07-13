/**
 * Cloudflare Pages Function — crawler-visible metadata for Frontier Record
 * routes (/the-record/:recordId/).
 *
 * The SPA's static index.html only ever carries homepage-generic OG/Twitter
 * tags; per-record tags are otherwise set client-side (PageMeta.jsx via
 * react-helmet-async) after hydration, which social crawlers never execute.
 * This intercepts the response for known crawler user agents only and
 * rewrites the head in place with record-specific tags, sourced live from
 * the same corpus/derive modules the app itself uses — never a second copy
 * of record data. Human visitors get context.next()'s response untouched.
 *
 * [[recordId]] is a rest-segment match so it also catches the bare
 * /the-record and /the-record/ archive-index requests; findRecord() returns
 * null for those (no id segment) and the handler bails out to the
 * unmodified response, leaving that page's own metadata alone.
 */
import { ALL_RECORDS } from "../../src/data/corpus.js";
import { getRecordMetaDescription } from "../../src/data/derive.js";

const SITE_NAME = "Faultline Observatory";
const BASE_URL = "https://faultlinewatch.com";

const CRAWLER_UA = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|WhatsApp|TelegramBot|Discordbot|Googlebot|Google-InspectionTool|bingbot|Applebot|redditbot|Pinterest|SkypeUriPreview|vkShare|Embedly|Iframely/i;

function isCrawler(userAgent) {
  return CRAWLER_UA.test(userAgent || "");
}

function findRecord(recordIdParam) {
  const segment = Array.isArray(recordIdParam) ? recordIdParam[0] : recordIdParam;
  if (!segment) return null;
  const id = String(segment).toLowerCase();
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

export async function onRequest(context) {
  const response = await context.next();

  const userAgent = context.request.headers.get("user-agent") || "";
  if (!isCrawler(userAgent)) return response;

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return response;

  const record = findRecord(context.params.recordId);
  if (!record) return response;

  const canonicalUrl = `${BASE_URL}/the-record/${record.id.toLowerCase()}/`;
  const ogTitle = `${record.id} — ${record.claim.shortLabel}`;
  const pageTitle = `${ogTitle} | ${SITE_NAME}`;
  const description = getRecordMetaDescription(record);
  const canonicalHtml = `<link rel="canonical" href="${canonicalUrl.replace(/"/g, "&quot;")}">`;

  return new HTMLRewriter()
    .on("title", new TextRewriter(pageTitle))
    .on('meta[name="description"]', new AttrRewriter("content", description))
    .on('meta[property="og:title"]', new AttrRewriter("content", ogTitle))
    .on('meta[property="og:description"]', new AttrRewriter("content", description))
    .on('meta[property="og:url"]', new AttrRewriter("content", canonicalUrl))
    .on('meta[name="twitter:title"]', new AttrRewriter("content", ogTitle))
    .on('meta[name="twitter:description"]', new AttrRewriter("content", description))
    .on("head", new HeadAppender(canonicalHtml))
    .transform(response);
}

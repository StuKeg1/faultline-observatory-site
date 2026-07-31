/**
 * AD-001 — Architectural Debt: SPA SEO and Server-Side Rendering
 * Type: architectural-debt
 * Status: RESOLVED — closed by RENDER-STATIC-001, not published
 *
 * Recorded: 2026-06-12
 * Resolved: 2026-07-31
 */

export const AD_001 = {
  id: "AD-001",
  type: "architectural-debt",
  status: "resolved",
  date: "2026-06-12",
  resolvedDate: "2026-07-31",
  title: "SPA SEO and Server-Side Rendering",
  relation: "Deployment infrastructure / search indexing",
  summary:
    "Resolved by RENDER-STATIC-001. Every Frontier Record and Programme Note is now " +
    "prerendered as complete static HTML during the governed production build, while " +
    "the same React components hydrate to preserve interactive behaviour.",

  body: [
    {
      id: "B-001",
      heading: "The Problem",
      text:
        "The built dist/index.html contains zero body text. When Google's crawler " +
        "first visits any page, it sees an empty shell. JavaScript-rendered content " +
        "is indexed on a secondary pass — typically days to weeks after first crawl. " +
        "This means Frontier Records will not appear in search results immediately " +
        "after launch, even though the content is real and structured.",
    },
    {
      id: "B-002",
      heading: "Current Mitigations",
      text:
        "Dynamic page titles via react-helmet-async are in place — each route now " +
        "sets its own <title>, <meta description>, and <link rel=canonical>. The " +
        "sitemap lists all 14 public routes, helping Google discover them. The " +
        "robots.txt references the sitemap. These improve crawlability but do not " +
        "solve the core rendering problem.",
    },
    {
      id: "B-003",
      heading: "The Proper Fix",
      text:
        "Server-side rendering (SSR) or static site generation (SSG) would pre-render " +
        "each page to HTML, making content visible to crawlers on first visit. Two " +
        "viable paths exist: (1) Vike (formerly vite-plugin-ssr) — adds SSR/SSG to " +
        "the existing Vite/React stack with minimal architectural change; " +
        "(2) Astro — generates fully static HTML per page from the same data files, " +
        "with React components as interactive islands where needed.",
    },
    {
      id: "B-004",
      heading: "Why It Was Deferred",
      text:
        "SSR/SSG adds build complexity and deployment pipeline changes. At launch with " +
        "one Frontier Record, the SEO cost is low — there is little content for Google " +
        "to index regardless. The threshold for action is when the corpus reaches " +
        "10-15 records and organic search discoverability becomes meaningfully valuable.",
    },
    {
      id: "B-005",
      heading: "Resolution Condition",
      text:
        "Revisit when: corpus reaches 10+ records, or when organic search is a " +
        "meaningful acquisition channel, or when any record is cited externally and " +
        "the SEO gap becomes visible. At that point, evaluate Vike vs Astro against " +
        "the then-current corpus size and deployment infrastructure.",
    },
    {
      id: "B-006",
      heading: "What Not to Do",
      text:
        "Do not add a prerender step to the current Vite build as a short-term fix — " +
        "it adds complexity without solving the problem properly. Do not migrate to " +
        "Next.js — it would solve the SEO problem but adds significant framework " +
        "dependency and changes the deployment model.",
    },
    {
      id: "B-007",
      heading: "Resolution",
      text:
        "Closed on 2026-07-31 by RENDER-STATIC-001. Native Vite SSR prerendering was " +
        "selected after the corpus and organic-search thresholds were crossed. The build " +
        "now deterministically generates complete HTML for all 26 Frontier Records and " +
        "both Programme Notes, fails on route-generation gaps, and serves those assets " +
        "through the Cloudflare Pages Functions. The implementation preserved the existing " +
        "React Router route table and data model, so it did not create a parallel content " +
        "representation or require a framework migration.",
    },
    {
      id: "B-008",
      heading: "Resolution Reconciliation",
      text:
        "The architecture selected by RENDER-STATIC-001 is a reasoned departure from " +
        "the implementation guidance in B-003 and B-006. B-006 rejected adding " +
        "prerendering as a short-term mitigation; the shipped implementation instead " +
        "establishes corpus-wide, deterministic, build-gated prerendering as the permanent " +
        "rendering architecture. It satisfies the underlying outcome identified in B-003 " +
        "without Vike or Astro because it reuses the canonical corpus, React components, " +
        "and shared route table, fails on generation gaps, and is verified through both " +
        "substantive default-user-agent HTML checks and hydrated-browser checks. This " +
        "departure should have been stated before implementation: AD-001 was named by the " +
        "brief but was not read before architecture selection. The defensibility of the " +
        "result does not cure that governance failure. Named governing documents must be " +
        "read before selection, and any departure must be reasoned and recorded before " +
        "execution. This repository object is a non-operative historical mirror; the " +
        "canonical closure and correction record is the institutional Release Archive.",
    },
  ],
};

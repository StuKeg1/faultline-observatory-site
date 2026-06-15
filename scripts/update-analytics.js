#!/usr/bin/env node
/**
 * update-analytics.js
 * Faultline Observatory — Cloudflare Analytics Data Pipeline
 *
 * Fetches visitor and pageview counts from the Cloudflare Analytics GraphQL API
 * and writes a generated JSON file consumed by InstitutionalHealth.jsx.
 *
 * Runs weekly via GitHub Actions. No runtime API calls. No client-side secrets.
 *
 * Required environment variables:
 *   CF_API_TOKEN   — Cloudflare API token with Analytics:Read permission
 *   CF_ACCOUNT_ID  — Cloudflare account ID
 *   CF_ZONE_ID     — Zone ID for faultlinewatch.com
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Config ──────────────────────────────────────────────────────────────────

const CF_API_TOKEN = process.env.CF_API_TOKEN;
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CF_ZONE_ID = process.env.CF_ZONE_ID;
const OUTPUT_PATH = join(__dirname, "../src/data/generated/institutional-health-analytics.json");

// Fetch the last 28 days of data (4-week rolling window).
// The weekly generation cadence means this always reflects recent activity
// without being tied to a specific calendar month boundary.
const DAYS_WINDOW = 28;

// ─── Validate env ────────────────────────────────────────────────────────────

function validateEnv() {
  const missing = ["CF_API_TOKEN", "CF_ACCOUNT_ID", "CF_ZONE_ID"].filter(
    (k) => !process.env[k]
  );
  if (missing.length > 0) {
    console.error(`Missing required environment variables: ${missing.join(", ")}`);
    process.exit(1);
  }
}

// ─── Date helpers ────────────────────────────────────────────────────────────

function toDateString(date) {
  return date.toISOString().split("T")[0];
}

function getDateRange() {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - DAYS_WINDOW);
  return {
    since: toDateString(start),
    until: toDateString(end),
  };
}

// ─── Cloudflare GraphQL query ────────────────────────────────────────────────
//
// Uses the httpRequests1dGroups dataset, which provides daily aggregates.
// uniqueVisitors is the uniq count from Cloudflare's edge analytics.
// pageViews is total requests that returned a 2xx response to a non-asset path.
//
// Note: Cloudflare Analytics counts "visits" (sessions) and "unique visitors"
// (by IP+user-agent hash) rather than cookies. This is consistent with our
// privacy-preserving approach and requires no client-side tracking.

const ANALYTICS_QUERY = `
  query FaultlineAnalytics($zoneTag: String!, $since: String!, $until: String!) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        httpRequests1dGroups(
          limit: 31
          filter: { date_geq: $since, date_leq: $until }
          orderBy: [date_ASC]
        ) {
          sum {
            visits
            pageViews
          }
          uniq {
            uniques
          }
          dimensions {
            date
          }
        }
      }
    }
  }
`;

// ─── API call ────────────────────────────────────────────────────────────────

async function fetchAnalytics(since, until) {
  const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CF_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: ANALYTICS_QUERY,
      variables: {
        zoneTag: CF_ZONE_ID,
        since,
        until,
      },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Cloudflare API error ${response.status}: ${text}`);
  }

  const data = await response.json();

  if (data.errors && data.errors.length > 0) {
    const messages = data.errors.map((e) => e.message).join("; ");
    throw new Error(`Cloudflare GraphQL errors: ${messages}`);
  }

  return data;
}

// ─── Aggregate results ───────────────────────────────────────────────────────

function aggregateResults(data) {
  const zones = data?.data?.viewer?.zones;

  if (!zones || zones.length === 0) {
    throw new Error("No zone data returned from Cloudflare Analytics API");
  }

  const groups = zones[0]?.httpRequests1dGroups ?? [];

  if (groups.length === 0) {
    console.warn("No analytics data returned for the requested date range.");
    return { visitors: 0, pageViews: 0 };
  }

  // Sum across all days in the window.
  // uniq.uniques is a per-day unique count — summing it gives a rough total
  // that may overcount users who visit on multiple days. This is the standard
  // Cloudflare Analytics behaviour and is documented in the IHF as contextual,
  // not a precision metric.
  let visitors = 0;
  let pageViews = 0;

  for (const group of groups) {
    visitors += group.uniq?.uniques ?? 0;
    pageViews += group.sum?.pageViews ?? 0;
  }

  return { visitors, pageViews };
}

// ─── Write output ─────────────────────────────────────────────────────────────

function writeOutput(visitors, pageViews, since, until) {
  const output = {
    visitors,
    pageViews,
    windowDays: DAYS_WINDOW,
    periodStart: since,
    periodEnd: until,
    generatedAt: toDateString(new Date()),
  };

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf8");

  console.log(`Analytics written to ${OUTPUT_PATH}`);
  console.log(`  Visitors:  ${visitors}`);
  console.log(`  Page views: ${pageViews}`);
  console.log(`  Period:    ${since} → ${until}`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  validateEnv();

  const { since, until } = getDateRange();
  console.log(`Fetching Cloudflare Analytics: ${since} → ${until}`);

  const data = await fetchAnalytics(since, until);
  const { visitors, pageViews } = aggregateResults(data);

  writeOutput(visitors, pageViews, since, until);
}

main().catch((err) => {
  console.error("update-analytics.js failed:", err.message);
  process.exit(1);
});

/**
 * scripts/update-analytics.js
 *
 * Queries Cloudflare GraphQL Analytics API for faultlinewatch.com and writes
 * src/data/generated/institutional-health-analytics.json.
 *
 * Date window: last 7 completed days, excluding today, to avoid partial-day noise.
 *   periodStart = 8 days ago
 *   periodEnd   = yesterday
 *
 * Required environment variables (set as GitHub Actions secrets):
 *   CF_API_TOKEN  — Cloudflare API token with Analytics:Read permission
 *   CF_ACCOUNT_ID — Cloudflare account ID
 *   CF_ZONE_ID    — Zone ID for faultlinewatch.com
 *
 * Output schema (success):
 *   { source, periodLabel, periodStart, periodEnd, visitors, pageViews, generatedAt, status: "available" }
 *
 * Output schema (failure):
 *   { source, periodLabel, periodStart, periodEnd, visitors: null, pageViews: null, generatedAt, status: "unavailable" }
 */

import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CF_API_TOKEN = process.env.CF_API_TOKEN;
const CF_ZONE_ID = process.env.CF_ZONE_ID;

const OUTPUT_PATH = join(
  __dirname,
  "../src/data/generated/institutional-health-analytics.json"
);

// ─── Date helpers ─────────────────────────────────────────────────────────────

function isoDate(d) {
  return d.toISOString().split("T")[0];
}

function dateWindow() {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setUTCDate(yesterday.getUTCDate() - 1);

  const periodStart = new Date(today);
  periodStart.setUTCDate(periodStart.getUTCDate() - 8);

  return {
    periodStart: isoDate(periodStart),
    periodEnd: isoDate(yesterday),
    periodLabel: "Last 7 completed days",
  };
}

// ─── Cloudflare GraphQL query ─────────────────────────────────────────────────

async function queryCloudflare(periodStart, periodEnd) {
  const query = `
    query {
      viewer {
        zones(filter: { zoneTag: "${CF_ZONE_ID}" }) {
          httpRequests1dGroups(
            limit: 7
            filter: { date_geq: "${periodStart}", date_leq: "${periodEnd}" }
          ) {
            sum {
              pageViews
            }
            uniq {
              uniques
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CF_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`Cloudflare API returned ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (data.errors && data.errors.length > 0) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
  }

  return data;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!CF_API_TOKEN || !CF_ZONE_ID) {
    throw new Error("Missing required environment variables: CF_API_TOKEN, CF_ZONE_ID");
  }

  const { periodStart, periodEnd, periodLabel } = dateWindow();
  const generatedAt = new Date().toISOString();

  console.log(`Querying Cloudflare Analytics: ${periodStart} → ${periodEnd}`);

  let output;

  try {
    const data = await queryCloudflare(periodStart, periodEnd);
    const groups = data?.data?.viewer?.zones?.[0]?.httpRequests1dGroups ?? [];

    const visitors = groups.reduce((sum, g) => sum + (g.uniq?.uniques ?? 0), 0);
    const pageViews = groups.reduce((sum, g) => sum + (g.sum?.pageViews ?? 0), 0);

    console.log(`visitors=${visitors}  pageViews=${pageViews}  groups=${groups.length}`);

    output = {
      source: "cloudflare",
      periodLabel,
      periodStart,
      periodEnd,
      visitors,
      pageViews,
      generatedAt,
      status: "available",
    };
  } catch (err) {
    console.error("Query failed:", err.message);

    output = {
      source: "cloudflare",
      periodLabel,
      periodStart,
      periodEnd,
      visitors: null,
      pageViews: null,
      generatedAt,
      status: "unavailable",
    };
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf-8");
  console.log(`Written: ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});


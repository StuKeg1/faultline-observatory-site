/**
 * Captures a weekly, best-effort reader-facing traffic snapshot.
 *
 * This is not a people counter. It preserves contextual route, country,
 * device and browser signals before Cloudflare adaptive analytics expires.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../reports/generated/reader-traffic-history.json");
const MAX_SNAPSHOTS = 13;

const token = process.env.CF_API_TOKEN;
const zoneId = process.env.CF_ZONE_ID;

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function period() {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const end = new Date(today);
  end.setUTCDate(end.getUTCDate() - 1);
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - 7);
  return { start: isoDate(start), end: isoDate(end) };
}

async function graphql(query) {
  const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const body = await response.json();
  if (!response.ok || body.errors?.length) {
    throw new Error(JSON.stringify(body.errors ?? body));
  }
  return body.data;
}

function isReaderFacingPath(path) {
  return !(
    /^\/(?:deployment\.json|robots\.txt|sitemap(?:-[\w-]+)?\.xml|favicon\.ico|og-image\.png|apple-touch-icon|cdn-cgi\/|\.git\/|\.env$|wp-|wp\/|xmlrpc\.php)/.test(path) ||
    /\.(?:js|css|map|svg|png|jpe?g|gif|webp|ico|woff2?|txt|xml)$/.test(path)
  );
}

async function adaptive(field) {
  const { start, end } = period();
  const query = `query {
    viewer {
      zones(filter: { zoneTag: "${zoneId}" }) {
        rows: httpRequestsAdaptiveGroups(
          limit: 250
          orderBy: [count_DESC]
          filter: {
            datetime_geq: "${start}T00:00:00Z"
            datetime_lt: "${end}T23:59:59Z"
            requestSource: "eyeball"
          }
        ) {
          count
          avg { sampleInterval }
          sum { visits }
          dimensions { ${field} }
        }
      }
    }
  }`;
  return (await graphql(query)).viewer.zones[0].rows;
}

function readHistory() {
  if (!existsSync(OUTPUT_PATH)) return { schemaVersion: 1, snapshots: [] };
  return JSON.parse(readFileSync(OUTPUT_PATH, "utf8"));
}

async function main() {
  if (!token || !zoneId) throw new Error("Missing CF_API_TOKEN or CF_ZONE_ID.");

  const { start, end } = period();
  const capturedAt = new Date().toISOString();
  let snapshot;

  try {
    const [paths, countries, devices, browsers] = await Promise.all([
      adaptive("clientRequestPath"),
      adaptive("clientCountryName"),
      adaptive("clientDeviceType"),
      adaptive("userAgentBrowser"),
    ]);

    snapshot = {
      periodStart: start,
      periodEnd: end,
      capturedAt,
      status: "available",
      methodology: "Best-effort reader-facing traffic. Includes only Cloudflare's requestSource=eyeball data; this is not a people count and may include automation.",
      limitations: [
        "Referrer data is unavailable for this zone's current Cloudflare access level.",
        "Adaptive data can be sampled; each row retains Cloudflare's sample interval.",
        "Known operational, asset and hostile-probe paths are excluded from reader-facing routes."
      ],
      referrerSources: "unavailable",
      exclusions: ["deployment.json", "robots and sitemaps", "assets", "Cloudflare utility routes", "common hostile probes"],
      readerFacingRoutes: paths
        .filter(row => isReaderFacingPath(row.dimensions.clientRequestPath))
        .slice(0, 20)
        .map(row => ({
          path: row.dimensions.clientRequestPath,
          requests: row.count,
          visits: row.sum.visits,
          sampleInterval: row.avg.sampleInterval,
        })),
      countries: countries.slice(0, 20).map(row => ({
        country: row.dimensions.clientCountryName,
        requests: row.count,
        visits: row.sum.visits,
        sampleInterval: row.avg.sampleInterval,
      })),
      deviceTypes: devices.map(row => ({
        device: row.dimensions.clientDeviceType,
        requests: row.count,
        visits: row.sum.visits,
        sampleInterval: row.avg.sampleInterval,
      })),
      browsers: browsers.slice(0, 20).map(row => ({
        browser: row.dimensions.userAgentBrowser,
        requests: row.count,
        visits: row.sum.visits,
        sampleInterval: row.avg.sampleInterval,
      })),
    };
  } catch (error) {
    snapshot = {
      periodStart: start,
      periodEnd: end,
      capturedAt,
      status: "unavailable",
      reason: error.message,
      referrerSources: "unavailable",
    };
  }

  const history = readHistory();
  history.snapshots = [...history.snapshots.filter(item => item.periodEnd !== end), snapshot]
    .sort((a, b) => a.periodEnd.localeCompare(b.periodEnd))
    .slice(-MAX_SNAPSHOTS);
  history.updatedAt = capturedAt;

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(history, null, 2) + "\n");
  console.log(`Reader-facing traffic snapshot: ${snapshot.status} for ${start} to ${end}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});

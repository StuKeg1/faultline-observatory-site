import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const EVENTS_DIR = path.join(ROOT, "events");
const SCHEMA_PATH = path.join(ROOT, "schema", "event-schema.json");

const EVENT_ID_RE = /^OE-(\d{4})-(\d{4})$/;
const RECORD_ID_RE = /^FR-[A-Z]{2,4}-\d{4}$/;
const PROGRAMME_RE = /^[A-Z]{2,4}$/;
const TIMESTAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
const URL_RE = /^https:\/\/faultlinewatch\.com\/.+/;

const EVENT_TYPES = new Set([
  "record-created",
  "assessment-changed",
  "verification-stage-changed",
  "programme-created",
]);

const COMMON_FIELDS = [
  "eventId",
  "eventType",
  "recordId",
  "programme",
  "timestamp",
  "summary",
  "url",
];

const TYPE_FIELDS = {
  "record-created": ["claimTitle"],
  "assessment-changed": ["previousPressureState", "newPressureState"],
  "verification-stage-changed": ["previousVerificationStage", "newVerificationStage"],
  "programme-created": ["programmeName", "recordCount"],
};

const ALLOWED_FIELDS = new Set([
  ...COMMON_FIELDS,
  "claimTitle",
  "previousPressureState",
  "newPressureState",
  "previousVerificationStage",
  "newVerificationStage",
  "programmeName",
  "recordCount",
]);

function fail(message) {
  console.error(`Event validation failed: ${message}`);
  process.exitCode = 1;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    fail(`${path.relative(ROOT, filePath)} is not valid JSON (${error.message})`);
    return null;
  }
}

function walkJsonFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) return walkJsonFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith(".json")) return [fullPath];

    return [];
  });
}

function validateEvent(filePath, event) {
  const rel = path.relative(ROOT, filePath);
  const filename = path.basename(filePath, ".json");

  if (!event || typeof event !== "object" || Array.isArray(event)) {
    fail(`${rel} must contain one Event object`);
    return null;
  }

  for (const field of Object.keys(event)) {
    if (!ALLOWED_FIELDS.has(field)) fail(`${rel} contains unknown field "${field}"`);
  }

  for (const field of COMMON_FIELDS) {
    if (!(field in event)) fail(`${rel} is missing required common field "${field}"`);
  }

  if (event.eventId !== filename) {
    fail(`${rel} filename must match eventId (${filename} !== ${event.eventId})`);
  }

  const idMatch = typeof event.eventId === "string" ? event.eventId.match(EVENT_ID_RE) : null;
  if (!idMatch) fail(`${rel} eventId must follow OE-YYYY-NNNN`);

  if (!EVENT_TYPES.has(event.eventType)) {
    fail(`${rel} eventType must be one of: ${Array.from(EVENT_TYPES).join(", ")}`);
  }

  if (typeof event.programme !== "string" || !PROGRAMME_RE.test(event.programme)) {
    fail(`${rel} programme must be a short uppercase programme code, e.g. QE or AI`);
  }

  if (typeof event.timestamp !== "string" || !TIMESTAMP_RE.test(event.timestamp)) {
    fail(`${rel} timestamp must be valid ISO 8601 UTC in the form YYYY-MM-DDTHH:mm:ssZ`);
  } else if (Number.isNaN(Date.parse(event.timestamp))) {
    fail(`${rel} timestamp is not parseable as a date`);
  }

  if (typeof event.summary !== "string" || event.summary.trim() === "") {
    fail(`${rel} summary must be present and human-readable`);
  }

  if (typeof event.url !== "string" || !URL_RE.test(event.url)) {
    fail(`${rel} url must be an absolute faultlinewatch.com URL`);
  }

  if (event.eventType === "programme-created") {
    if (event.recordId !== null) fail(`${rel} recordId must be null for programme-created events`);
  } else if (typeof event.recordId !== "string" || !RECORD_ID_RE.test(event.recordId)) {
    fail(`${rel} recordId must be a Frontier Record ID for ${event.eventType}`);
  }

  const requiredTypedFields = TYPE_FIELDS[event.eventType] || [];
  for (const field of requiredTypedFields) {
    if (!(field in event)) fail(`${rel} is missing typed field "${field}"`);
  }

  if (event.eventType === "record-created") {
    if (typeof event.claimTitle !== "string" || event.claimTitle.trim() === "") {
      fail(`${rel} claimTitle must be present for record-created events`);
    }
  }

  if (event.eventType === "assessment-changed") {
    if (typeof event.previousPressureState !== "string" || event.previousPressureState.trim() === "") {
      fail(`${rel} previousPressureState must be present for assessment-changed events`);
    }
    if (typeof event.newPressureState !== "string" || event.newPressureState.trim() === "") {
      fail(`${rel} newPressureState must be present for assessment-changed events`);
    }
  }

  if (event.eventType === "verification-stage-changed") {
    if (typeof event.previousVerificationStage !== "string" || !/^VS-\d{2}$/.test(event.previousVerificationStage)) {
      fail(`${rel} previousVerificationStage must follow VS-NN`);
    }
    if (typeof event.newVerificationStage !== "string" || !/^VS-\d{2}$/.test(event.newVerificationStage)) {
      fail(`${rel} newVerificationStage must follow VS-NN`);
    }
  }

  if (event.eventType === "programme-created") {
    if (typeof event.programmeName !== "string" || event.programmeName.trim() === "") {
      fail(`${rel} programmeName must be present for programme-created events`);
    }
    if (!Number.isInteger(event.recordCount) || event.recordCount < 0) {
      fail(`${rel} recordCount must be a non-negative integer`);
    }
  }

  return idMatch ? { year: idMatch[1], sequence: Number(idMatch[2]), eventId: event.eventId, filePath } : null;
}

function validateContiguousSequence(indexEntries) {
  const byYear = new Map();

  for (const entry of indexEntries) {
    if (!entry) continue;
    const bucket = byYear.get(entry.year) || [];
    bucket.push(entry);
    byYear.set(entry.year, bucket);
  }

  for (const [year, entries] of byYear.entries()) {
    const seen = new Set();

    for (const entry of entries) {
      if (seen.has(entry.sequence)) {
        fail(`duplicate Event sequence in ${year}: ${String(entry.sequence).padStart(4, "0")}`);
      }
      seen.add(entry.sequence);
    }

    const sorted = [...seen].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i += 1) {
      const expected = i + 1;
      if (sorted[i] !== expected) {
        fail(`Event sequence for ${year} must be contiguous: expected ${String(expected).padStart(4, "0")}, found ${String(sorted[i]).padStart(4, "0")}`);
        break;
      }
    }
  }
}

if (!fs.existsSync(SCHEMA_PATH)) {
  fail("schema/event-schema.json is missing");
} else {
  readJson(SCHEMA_PATH);
}

const eventFiles = walkJsonFiles(EVENTS_DIR);
const indexEntries = eventFiles.map((filePath) => validateEvent(filePath, readJson(filePath)));

validateContiguousSequence(indexEntries);

if (process.exitCode) {
  process.exit();
}

console.log(`Event validation passed (${eventFiles.length} Event${eventFiles.length === 1 ? "" : "s"}).`);

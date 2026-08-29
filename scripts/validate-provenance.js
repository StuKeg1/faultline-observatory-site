import { ALL_RECORDS } from "../src/data/corpus.js";

const REQUIRED_PA_002 = new Set([
  "FR-AI-0001/IN-005",
  "FR-AI-0001/IN-006",
  "FR-QE-0007/IN-001",
  "FR-QE-0007/IN-002",
  "FR-QE-0004/IN-008",
]);

const DOI_RE = /^10\.\d{4,9}\/\S+$/;

function nonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateSourceObject(source, label = "source") {
  const errors = [];
  if (!source || typeof source !== "object" || Array.isArray(source)) return [`${label} must be an object`];
  if (!nonEmpty(source.citation)) errors.push(`${label}.citation must be non-empty`);
  for (const field of ["url", "doi", "locator", "quote"]) {
    if (field in source && !nonEmpty(source[field])) errors.push(`${label}.${field} must be non-empty when present`);
  }
  if (source.url) {
    try {
      const parsed = new URL(source.url);
      if (!/^https?:$/.test(parsed.protocol)) errors.push(`${label}.url must use http or https`);
    } catch {
      errors.push(`${label}.url must be a valid absolute URL`);
    }
  }
  if (source.doi && !DOI_RE.test(source.doi)) errors.push(`${label}.doi must be a canonical DOI identifier, not a resolver URL`);
  if (source.quote && source.quote.trim().split(/\s+/).length > 50) errors.push(`${label}.quote must not exceed 50 words`);
  const allowed = new Set(["citation", "url", "doi", "locator", "quote"]);
  for (const key of Object.keys(source)) if (!allowed.has(key)) errors.push(`${label}.${key} is not admitted by PA-002`);
  return errors;
}

export function validateRecordProvenance(record) {
  const errors = [];
  for (const instance of record.instances ?? []) {
    const label = `${record.id}/${instance.id}`;
    if (REQUIRED_PA_002.has(label) && !Array.isArray(instance.sources)) errors.push(`${label} must carry PA-002 structured provenance`);
    if (!("sources" in instance)) continue;
    if (!Array.isArray(instance.sources) || instance.sources.length === 0) {
      errors.push(`${label}.sources must be a non-empty array when present`);
      continue;
    }
    instance.sources.forEach((source, index) => errors.push(...validateSourceObject(source, `${label}.sources[${index}]`)));
  }
  return errors;
}

export function validateCorpusProvenance(records = ALL_RECORDS) {
  return records.flatMap(validateRecordProvenance);
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const errors = validateCorpusProvenance();
  if (errors.length) {
    console.error("Structured provenance validation failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
    process.exit(1);
  }
  console.log("Structured provenance validation passed.");
}

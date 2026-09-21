import { ALL_RECORDS } from "../src/data/corpus.js";

// Canonical assessment histories are append-only and oldest-first. Dates alone
// cannot order multiple assessments issued on the same day, so AS-NNN provides
// the stable append sequence for those ties.

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const ASSESSMENT_ID_RE = /^AS-(\d{3})$/;

let hasError = false;

function fail(message) {
  console.error(`Assessment validation failed: ${message}`);
  hasError = true;
}

function isValidCanonicalDate(value) {
  const match = typeof value === "string" ? value.match(DATE_RE) : null;
  if (!match) return false;

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  return parsed.getUTCFullYear() === year
    && parsed.getUTCMonth() === month - 1
    && parsed.getUTCDate() === day;
}

for (const record of ALL_RECORDS) {
  const assessments = record.assessments;

  if (!Array.isArray(assessments) || assessments.length === 0) {
    fail(`${record.id} must contain at least one canonical assessment`);
    continue;
  }

  const seenIds = new Set();
  let previous = null;

  assessments.forEach((assessment, index) => {
    const where = `${record.id} assessments[${index}]`;
    const id = assessment?.id;

    if (typeof id !== "string" || !ASSESSMENT_ID_RE.test(id)) {
      fail(`${where} must have an explicit AS-NNN id, got "${id}"`);
    } else if (seenIds.has(id)) {
      fail(`${where} duplicates assessment id ${id}`);
    } else {
      seenIds.add(id);
    }

    if (!isValidCanonicalDate(assessment?.date)) {
      fail(`${where} (${id ?? "no id"}) must have a valid YYYY-MM-DD date, got "${assessment?.date}"`);
    }

    if (previous && isValidCanonicalDate(previous.date) && isValidCanonicalDate(assessment?.date)) {
      if (assessment.date < previous.date) {
        fail(`${where} (${id}) is dated ${assessment.date}, before ${previous.id} (${previous.date}); assessments[] must be oldest-first`);
      } else if (assessment.date === previous.date) {
        const previousMatch = previous.id?.match(ASSESSMENT_ID_RE);
        const currentMatch = id?.match(ASSESSMENT_ID_RE);

        if (previousMatch && currentMatch && Number(currentMatch[1]) <= Number(previousMatch[1])) {
          fail(`${where} (${id}) must follow ${previous.id} on ${assessment.date}; same-day assessments require increasing AS-NNN append order`);
        }
      }
    }

    previous = assessment;
  });
}

if (hasError) {
  console.error("\nAssessment validation failed.");
  process.exit(1);
}

const totalAssessments = ALL_RECORDS.reduce(
  (sum, record) => sum + record.assessments.length,
  0,
);

console.log(
  `Assessment validation passed (${ALL_RECORDS.length} records, ${totalAssessments} assessments).`,
);

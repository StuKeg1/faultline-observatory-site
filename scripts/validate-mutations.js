import { ALL_RECORDS } from "../src/data/corpus.js";

// Structural gate for mutationLog[] across the corpus, mirroring
// validate-events.js's shape (zero-dependency, procedural — no ajv,
// matching this repo's existing precedent). field is checked against a
// naming CONVENTION (snake_case), not a closed whitelist: the corpus's
// own audit trail (see FR-QE-0001's Row 5 Audit migration) treats field
// vocabulary as coined per-situation and reviewed case-by-case, not
// pre-registered — a fixed enum would break the next legitimate
// mutation type. Newest-first ordering is a warning, not a hard fail:
// FR-QE-0001's legacy block (M-001–M-031, preserved verbatim from
// before this tooling existed) doesn't strictly honor it, and hard-
// failing the build on already-shipped, institutionally-reviewed data
// would be worse than the problem this script exists to catch.

const ID_RE = /^M-\d{3}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const FIELD_RE = /^[a-z][a-z0-9_]*$/;

let hasError = false;
let warningCount = 0;

function fail(message) {
  console.error(`Mutation validation failed: ${message}`);
  hasError = true;
}

function warn(message) {
  console.warn(`Mutation validation warning: ${message}`);
  warningCount += 1;
}

for (const record of ALL_RECORDS) {
  const log = record.mutationLog ?? [];
  const seenIds = new Set();
  let prevDate = null;

  log.forEach((m, index) => {
    const where = `${record.id} mutationLog[${index}] (${m.id ?? "no id"})`;

    if (typeof m.id !== "string" || !ID_RE.test(m.id)) {
      fail(`${where} — id must match M-NNN, got "${m.id}"`);
    } else if (seenIds.has(m.id)) {
      fail(`${where} — duplicate id within this record`);
    } else {
      seenIds.add(m.id);
    }

    const dateValid = typeof m.date === "string" && DATE_RE.test(m.date) && !Number.isNaN(Date.parse(m.date));
    if (!dateValid) {
      fail(`${where} — date must be a valid YYYY-MM-DD, got "${m.date}"`);
    }

    if (typeof m.field !== "string" || !FIELD_RE.test(m.field)) {
      fail(`${where} — field must be snake_case (^[a-z][a-z0-9_]*$), got "${m.field}"`);
    }

    if (m.from === undefined || m.from === null || m.to === undefined || m.to === null) {
      fail(`${where} — from/to must both be present and non-null`);
    } else if (m.from === m.to) {
      fail(`${where} — from and to are identical ("${m.from}") — ghost mutation`);
    }

    if (dateValid) {
      if (prevDate && m.date > prevDate) {
        warn(`${where} — date ${m.date} is newer than the previous entry (${prevDate}); mutationLog should read newest-first`);
      }
      prevDate = m.date;
    }
  });
}

if (hasError) {
  console.error("\nMutation validation failed.");
  process.exit(1);
}

const totalMutations = ALL_RECORDS.reduce((sum, r) => sum + (r.mutationLog?.length ?? 0), 0);
console.log(
  `Mutation validation passed (${ALL_RECORDS.length} records, ${totalMutations} mutations` +
    (warningCount ? `, ${warningCount} ordering warning${warningCount === 1 ? "" : "s"}` : "") +
    `).`
);

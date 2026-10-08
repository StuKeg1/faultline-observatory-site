/** Derived public MCP views. No independently authored record data. */
import { ALL_RECORDS, PROGRAMMES } from "./corpus.js";
import { getAssessmentHistory, getCurrentAssessment, getRecordUrl, getTransitionFeed } from "./derive.js";

export function programmeFor(record) {
  return PROGRAMMES.find(programme => programme.id === record.programme) ?? null;
}

export function canonicalUrl(record) {
  return `https://faultlinewatch.com${getRecordUrl(record)}`;
}

export function canonicalRecordView(record) {
  return { ...record, assessments: getAssessmentHistory(record),
    currentAssessment: getCurrentAssessment(record), transitionFeed: getTransitionFeed(record),
    programmeMetadata: programmeFor(record), canonicalUrl: canonicalUrl(record),
    canonicalSource: "src/data/corpus.js → src/data/records/FR-*.js" };
}

export function recordSummary(record) {
  const current = getCurrentAssessment(record);
  return { id: record.id, programme: record.programme, programmeName: programmeFor(record)?.name ?? null,
    claim: record.claim?.shortLabel ?? record.claim?.statement ?? null, status: record.status ?? null,
    pressureState: current.pressureState ?? null, verificationStage: current.verificationStage ?? null,
    assessmentDate: current.date ?? null, openedDate: record.claim?.openedDate ?? null,
    lastMutationDate: record.mutationLog?.[0]?.date ?? null, evidenceInstances: record.instances?.length ?? 0,
    assessments: record.assessments?.length ?? 0, openQuestions: record.openQuestions?.length ?? 0,
    canonicalUrl: canonicalUrl(record) };
}

function excerpt(value, needle) {
  const text = typeof value === "string" ? value : JSON.stringify(value);
  const index = text.toLowerCase().indexOf(needle);
  const start = Math.max(0, index - 60);
  return `${start ? "…" : ""}${text.slice(start, start + 180)}${text.length > start + 180 ? "…" : ""}`;
}

function walkMatches(value, field, needle, context) {
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) => {
      const path = `${field}.${key}`;
      const keyMatches = !Array.isArray(value) && JSON.stringify(key).toLowerCase().includes(needle)
        ? [{ ...context, field: path, matchType: "field_name", excerpt: key }] : [];
      return keyMatches.concat(walkMatches(child, path, needle, context));
    });
  }
  return JSON.stringify(value)?.toLowerCase().includes(needle)
    ? [{ ...context, field, matchType: "value", excerpt: excerpt(value, needle) }] : [];
}

/** References identify where a hit occurred; they do not endorse the matched text. */
export function recordSearchMatches(record, query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [{ field: "record", context: "serialized_structure", matchType: "empty_after_trimming" }];
  const current = getCurrentAssessment(record);
  const matches = Object.entries(record).flatMap(([field, value]) => {
    if (["assessments", "instances", "mutationLog", "openQuestions", "mechanisms"].includes(field)) {
      return value.flatMap(entry => {
        const context = field === "assessments"
          ? { context: entry.id === current.id ? "current_assessment" : "historical_assessment",
            assessmentId: entry.id, assessmentStatus: entry.id === current.id ? "current" : "historical", date: entry.date }
          : { context: field === "mutationLog" ? "mutation_history" : field === "instances" ? "evidence_instance" : "current_record",
            entryId: entry.id, date: entry.date ?? entry.raisedDate };
        return walkMatches(entry, `${field}.${entry.id}`, needle, context);
      });
    }
    return walkMatches(value, field, needle, { context: "current_record" });
  }).concat(walkMatches(programmeFor(record), "programmeMetadata", needle, { context: "programme_metadata" }));
  // JSON syntax or cross-field queries can match the legacy serialised search
  // without matching an individual value. Preserve the hit and name this case.
  return matches.length ? matches : [{ field: "record", context: "serialized_structure", matchType: "serialized_structure" }];
}

/** @param {{ query: string, programme?: string, limit?: number, detail?: "summary" | "full" }} options */
export function searchRecords({ query, programme, limit = 20, detail }) {
  const needle = query.trim().toLowerCase();
  const records = ALL_RECORDS.filter(record => !programme || record.programme.toLowerCase() === programme.toLowerCase())
    .filter(record => JSON.stringify({ record, programmeMetadata: programmeFor(record) }, null, 2).toLowerCase().includes(needle))
    .slice(0, limit);
  return { query, count: records.length, records: records.map(detail === "full" ? canonicalRecordView : recordSummary),
    matches: records.map(record => ({ recordId: record.id, references: recordSearchMatches(record, query) })),
    matchPolicy: "Search includes current fields, evidence and historical assessments/mutations. Match references locate text; historical matches do not endorse superseded claims. Read currentAssessment for the controlling judgment." };
}

export function mcpHttpExample() {
  return JSON.stringify({ jsonrpc: "2.0", id: 1, result: { content: [{ type: "text",
    text: JSON.stringify(searchRecords({ query: "room-temperature superconductivity", limit: 1 }), null, 2),
  }] } }, null, 2);
}

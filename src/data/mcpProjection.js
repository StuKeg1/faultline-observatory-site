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

/** @param {{ query: string, programme?: string, limit?: number, detail?: "summary" | "full" }} options */
export function searchRecords({ query, programme, limit = 20, detail }) {
  const needle = query.trim().toLowerCase();
  const records = ALL_RECORDS.filter(record => !programme || record.programme.toLowerCase() === programme.toLowerCase())
    .filter(record => JSON.stringify({ record, programmeMetadata: programmeFor(record) }, null, 2).toLowerCase().includes(needle))
    .slice(0, limit);
  return { query, count: records.length, records: records.map(detail === "full" ? canonicalRecordView : recordSummary) };
}

export function mcpHttpExample() {
  return JSON.stringify({ jsonrpc: "2.0", id: 1, result: { content: [{ type: "text",
    text: JSON.stringify(searchRecords({ query: "room-temperature superconductivity", limit: 1 }), null, 2),
  }] } }, null, 2);
}

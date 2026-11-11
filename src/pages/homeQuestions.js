/**
 * homeQuestions.js — Homepage "Start with a question" configuration
 *
 * Homepage vNext Architecture & Implementation Specification v1.0
 * (21 July 2026), Phase 4, §4.4.
 *
 * This is the one explicit, reviewable configuration for the six fixed
 * question cards on `/`. Selection is editorial and fixed — there is no
 * ranking algorithm, no rotation, no personalisation.
 *
 * Every destination is resolved through existing canonical data helpers.
 * No record, note, state or URL is duplicated here as an editorial
 * constant — only reader-facing navigation copy and a reference to the
 * canonical object it targets. Record introductions are reviewed, non-canonical
 * navigation copy pinned to the current assessment ID.
 *
 * Note-target correction (2026-07-21): the specification describes
 * resolving `note` targets through `ALL_NOTES` alone. That is not correct
 * against canonical reality — Programme Notes (PN-*) live in
 * `PROGRAMME_NOTES` (src/data/programmeNotes.js), not `ALL_NOTES`
 * (src/data/notes.js), per that file's own header and the RELEASE-014
 * fix already applied in Notes.jsx's NoteDetail lookup. The resolver
 * below checks both registries, mirroring that existing pattern, so
 * PN-AI-001 (a Reading Room object, not an Institutional Note) resolves
 * correctly instead of failing validation.
 */

import { ALL_RECORDS } from "../data/corpus.js";
import { ALL_NOTES, getNoteUrl } from "../data/notes.js";
import { PROGRAMME_NOTES } from "../data/programmeNotes.js";
import { getCurrentAssessment, getRecordUrl } from "../data/derive.js";
import { getRecordUpdatedDate } from "../data/recordDirectory.js";
import { isSupportedPressureState } from "../data/pressureStates.js";

// Directory query parameters admitted for a `directory-filter` target.
// Matches the parameter set accepted by applyRecordDirectoryView().
const SUPPORTED_DIRECTORY_PARAMS = new Set([
  "programme",
  "frontier",
  "state",
  "status",
  "sort",
  "query",
]);

/**
 * Question set v1.0 — order is fixed. See spec Phase 2, §2.3 Section 4.
 */
export const HOME_QUESTIONS = [
  {
    id: "practical-quantum-advantage",
    icon: "quantum",
    question: "Has a quantum computer achieved practical advantage yet?",
    target: { type: "record", id: "FR-QE-0007" },
    introduction: { assessmentId: "AS-003", text: "Quantum experiments show strong performance, but the evidence on record has not yet demonstrated a lasting advantage over classical computing on a practically useful problem at the same scale." },
  },
  {
    id: "liquid-biopsy-screening",
    icon: "biopsy",
    question: "Is liquid-biopsy cancer screening real yet?",
    target: { type: "record", id: "FR-BT-0004" },
    introduction: { assessmentId: "AS-005", text: "Blood tests can detect some cancers before conventional diagnosis, but missed cancers remain a limitation and the evidence on record has not established that screening improves survival or overall clinical outcomes." },
  },
  {
    id: "room-temperature-superconductors",
    icon: "superconductor",
    question: "Whatever happened to room-temperature superconductors?",
    target: { type: "record", id: "FR-AM-0005" },
    introduction: { assessmentId: "AS-004", text: "The candidates on record still lack independently reproduced room-temperature superconductivity; one unsuccessful reproduction used a different synthesis method, so it does not conclusively rule out the original result." },
  },
  {
    id: "ai-evidence-current-state",
    icon: "ai",
    question: "What patterns emerge across the AI evidence?",
    description: "An overview of evidence patterns across nine AI Frontier Records.",
    action: "Read programme overview",
    target: { type: "note", id: "PN-AI-001" },
  },
  {
    id: "claims-approaching-resolution",
    icon: "resolving",
    question: "Which claims are approaching resolution?",
    target: { type: "directory-filter", params: { state: "resolving" } },
  },
  {
    id: "something-else",
    icon: "explore",
    question: "Something else?",
    target: { type: "public-record" },
  },
];

function findRecord(id) {
  return ALL_RECORDS.find((record) => record.id === id) ?? null;
}

function findNote(id) {
  // Institutional Notes and Programme (Reading Room) Notes are two
  // distinct registries. See module header — this deliberately checks
  // both, the same way Notes.jsx's NoteDetail lookup already does.
  return (
    ALL_NOTES.find((note) => note.id === id) ??
    PROGRAMME_NOTES.find((note) => note.id === id) ??
    null
  );
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildDirectoryUrl(params) {
  const search = new URLSearchParams(params).toString();
  return `/the-record/?${search}`;
}

/**
 * Resolves one HOME_QUESTIONS entry into its render-ready shape:
 * { url, meta, destinationLabel }.
 *
 * Throws (fails loudly) if the entry's target does not resolve against
 * the live canonical corpus/notes/directory data — a missing record, a
 * missing note, or an unsupported directory filter is a configuration
 * error, not a runtime fallback case.
 */
export function resolveHomeQuestion(entry) {
  const { target } = entry;

  if (target.type === "record") {
    const record = findRecord(target.id);
    if (!record) {
      throw new Error(`homeQuestions: no record found for id "${target.id}" (entry "${entry.id}")`);
    }
    const url = getRecordUrl(record);
    if (!url) {
      throw new Error(`homeQuestions: could not derive a URL for record "${target.id}"`);
    }
    const date = getRecordUpdatedDate(record);
    const introduction = resolveHomeIntroduction(entry, record);
    return {
      url,
      introduction,
      meta: `${record.id} · Updated ${date}`,
      destinationLabel: "Frontier Record",
    };
  }

  if (target.type === "note") {
    const note = findNote(target.id);
    if (!note) {
      throw new Error(`homeQuestions: no note found for id "${target.id}" (entry "${entry.id}")`);
    }
    const noteType = PROGRAMME_NOTES.includes(note) ? "Programme Note" : "Institutional Note";
    return {
      url: getNoteUrl(note),
      meta: `${note.id} · ${noteType}`,
      destinationLabel: "Reading Room",
    };
  }

  if (target.type === "directory-filter") {
    const params = target.params ?? {};
    const keys = Object.keys(params);
    const hasUnsupportedParam = keys.some((key) => !SUPPORTED_DIRECTORY_PARAMS.has(key));

    if (keys.length === 0 || hasUnsupportedParam) {
      throw new Error(`homeQuestions: unsupported directory filter parameter(s) for "${entry.id}"`);
    }
    if (params.state !== undefined && !isSupportedPressureState(params.state)) {
      throw new Error(`homeQuestions: unsupported pressure state "${params.state}" for "${entry.id}"`);
    }

    const label = params.state ? capitalize(params.state) : "Filtered";
    return {
      url: buildDirectoryUrl(params),
      meta: `Records Directory · ${label}`,
      destinationLabel: "Records Directory",
    };
  }

  if (target.type === "public-record") {
    return {
      url: "/public-record/",
      meta: "Explore every programme, trajectory and record",
      destinationLabel: "Public Record",
    };
  }

  throw new Error(`homeQuestions: unrecognised target type "${target.type}" for entry "${entry.id}"`);
}

/**
 * Validates the full configuration: exactly six entries, no duplicate
 * ids, and every entry resolves against live canonical data. Intended
 * for use in tests and development — see homeQuestions.test.js.
 */
export function assertValidHomeQuestions(entries) {
  if (entries.length !== 6) {
    throw new Error(`homeQuestions: expected exactly 6 entries, found ${entries.length}`);
  }

  const seenIds = new Set();
  for (const entry of entries) {
    if (seenIds.has(entry.id)) {
      throw new Error(`homeQuestions: duplicate entry id "${entry.id}"`);
    }
    seenIds.add(entry.id);

    // Resolving throws on any broken/unsupported reference.
    resolveHomeQuestion(entry);
  }
}

/** Non-canonical navigation copy. A new assessment requires explicit copy review. */
export function resolveHomeIntroduction(entry, record) {
  const current = getCurrentAssessment(record);
  if (!entry.introduction?.text || entry.introduction.assessmentId !== current.id) {
    throw new Error(`Homepage introduction for ${record.id} requires review against ${current.id}`);
  }
  return entry.introduction.text;
}

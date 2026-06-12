/**
 * notes.js — Institutional Notes corpus
 *
 * Institutional Notes are documents the Observatory produces about itself.
 * They are never unwrapped prose — always presented as institutional artifacts.
 *
 * Required fields for every note:
 *   id, type, status, date, title, relation, summary, body
 *
 * Note types (controlled vocabulary):
 *   "founding-milestone"   FM-xxx  — Origin and institutional history
 *   "evidence-note"        EN-xxx  — Meta-observation / evidence register
 *   "consultation-note"    CN-xxx  — Governance notes, unresolved questions
 *   "constitutional-review" CR-xxx — Constitutional review records
 *   "programme-observation" PO-xxx — Cross-record pattern observations
 *
 * Status vocabulary: "published" | "draft" | "superseded"
 */

import { FM_001 } from "./notes/FM-001.js";
import { EN_001 } from "./notes/EN-001.js";
import { AUD_001 } from "./notes/AUD-001.js";

export const ALL_NOTES = [
  FM_001,
  EN_001,
  AUD_001,
];

/** Note type display labels */
export const NOTE_TYPE_LABELS = {
  "founding-milestone":    "Founding Milestone",
  "evidence-note":         "Evidence Note",
  "consultation-note":     "Consultation Note",
  "constitutional-review": "Constitutional Review",
  "programme-observation": "Programme Observation",
  "institutional-note":    "Institutional Note",
};

/** Returns the canonical public URL for a note */
export function getNoteUrl(note) {
  return `/notes/${note.id.toLowerCase()}/`;
}

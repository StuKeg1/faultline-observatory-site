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
 *
 * RELEASE-014 fix (2026-06-27): "programme-note" and "landscape-essay" were
 * added to NOTE_TYPE_LABELS below so PN-AI-001 and LE-AI-001 (Layer 3/4
 * objects, stored in src/data/programmeNotes.js and landscapeEssays.js —
 * NOT in ALL_NOTES below) can be displayed correctly by the shared
 * /notes/:noteId detail template (src/pages/Notes.jsx), which they reuse
 * for full-content rendering. This is a display-label addition only.
 * Programme Notes and Landscape Essays are NOT added to ALL_NOTES and are
 * NOT institutional notes — see Institutional Learning Register, IL-003,
 * for the still-open question of how the two systems relate. Reusing the
 * shared detail template for rendering is a separate decision from
 * merging the two systems' indexes or identity, and this fix does not
 * make that latter decision.
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
  "programme-note":        "Programme Note",
  "landscape-essay":       "Landscape Essay",
};

/** Returns the canonical public URL for a note */
export function getNoteUrl(note) {
  return `/notes/${note.id.toLowerCase()}/`;
}

/**
 * corpus.js — The Frontier Record corpus index
 *
 * All records imported here. The corpus is the source of truth.
 * Programme metadata is declared here; statistics are DERIVED via derive.js.
 *
 * Programme fields:
 *   shortDescription — homepage-facing visitor orientation (one sentence)
 *   scopeStatement   — constitutional programme definition (programme reading room)
 */

// ─── PROG-QE — Quantum Engineering ──────────────────────────
import { FR_QE_0001 } from "./records/FR-QE-0001.js";
import { FR_QE_0002 } from "./records/FR-QE-0002.js";
import { FR_QE_0003 } from "./records/FR-QE-0003.js";
import { FR_QE_0004 } from "./records/FR-QE-0004.js";
import { FR_QE_0005 } from "./records/FR-QE-0005.js";
import { FR_QE_0006 } from "./records/FR-QE-0006.js";
import { FR_QE_0007 } from "./records/FR-QE-0007.js";
import { FR_QE_0008 } from "./records/FR-QE-0008.js";

// ─── PROG-AI — Artificial Intelligence ──────────────────────
import { FR_AI_0001 } from "./records/FR-AI-0001.js";
import { FR_AI_0002 } from "./records/FR-AI-0002.js";
import { FR_AI_0003 } from "./records/FR-AI-0003.js";
import { FR_AI_0004 } from "./records/FR-AI-0004.js";
import { FR_AI_0005 } from "./records/FR-AI-0005.js";
import { FR_AI_0006 } from "./records/FR-AI-0006.js";
import { FR_AI_0007 } from "./records/FR-AI-0007.js";
import { FR_AI_0008 } from "./records/FR-AI-0008.js";

// ─── PROG-AM — Advanced Materials ────────────────────────────
import { FR_AM_0001 } from "./records/FR-AM-0001.js";
import { FR_AM_0002 } from "./records/FR-AM-0002.js";
import { FR_AM_0003 } from "./records/FR-AM-0003.js";
import { FR_AM_0004 } from "./records/FR-AM-0004.js";
import { FR_AM_0005 } from "./records/FR-AM-0005.js";
import { FR_AM_0006 } from "./records/FR-AM-0006.js";

// ─── PROG-BT — Biotechnology & Life Sciences ────────────────
import { FR_BT_0001 } from "./records/FR-BT-0001.js";
import { FR_BT_0002 } from "./records/FR-BT-0002.js";
import { FR_BT_0003 } from "./records/FR-BT-0003.js";
import { FR_BT_0004 } from "./records/FR-BT-0004.js";

// ─── ALL RECORDS ────────────────────────────────────────────
// Order: programme, then numeric.
export const ALL_RECORDS = [
  // PROG-QE
  FR_QE_0001,
  FR_QE_0002,
  FR_QE_0003,
  FR_QE_0004,
  FR_QE_0005,
  FR_QE_0006,
  FR_QE_0007,
  FR_QE_0008,
  // PROG-AI
  FR_AI_0001,
  FR_AI_0002,
  FR_AI_0003,
  FR_AI_0004,
  FR_AI_0005,
  FR_AI_0006,
  FR_AI_0007,
  FR_AI_0008,
  // PROG-AM
  FR_AM_0001,
  FR_AM_0002,
  FR_AM_0003,
  FR_AM_0004,
  FR_AM_0005,
  FR_AM_0006,
  // PROG-BT
  FR_BT_0001,
  FR_BT_0002,
  FR_BT_0003,
  FR_BT_0004,
];

// ─── PROGRAMME DECLARATIONS ─────────────────────────────────
export const PROGRAMMES = [
  {
    id: "PROG-QE",
    shortId: "QE",
    name: "Quantum Engineering",
    shortDescription:
      "Claims about quantum computation, quantum advantage, error correction, and quantum hardware progress.",
    scopeStatement:
      "Tracking engineering bottlenecks against claims of scalable quantum computation.",
  },
  {
    id: "PROG-AI",
    shortId: "AI",
    name: "Artificial Intelligence",
    shortDescription:
      "Claims about frontier AI capability, alignment, agents, evaluation, and institutional impact.",
    scopeStatement:
      "Tracking capability claims against independent replication and operational evidence.",
  },
  {
    id: "PROG-AM",
    shortId: "AM",
    name: "Advanced Materials, Physics & Energy",
    shortDescription:
      "Claims from physical science where evidence, scalability, or mechanism may reshape energy, materials, or frontier physics.",
    scopeStatement:
      "This programme tracks frontier claims whose central uncertainty concerns the behaviour, mechanism, scalability, or demonstrated viability of materials and physical systems. A claim belongs here when the contested frontier lies in the material or physical phenomenon itself — whether it exists, whether it scales, whether the proposed mechanism is correct. Claims are not excluded because they may later find application in computing, medicine, or energy; nor are they included for that reason. The allocation criterion is the location of the primary contested frontier, not the eventual application of the technology.",
  },
  {
    id: "PROG-BT",
    shortId: "BT",
    name: "Biotechnology & Life Sciences",
    shortDescription:
      "Claims about biological systems, therapeutics, biomedical sciences, genomics and life-science frontiers.",
    scopeStatement:
      "Tracking claims in biotechnology, genomics, and life-science frontiers.",
  },
];

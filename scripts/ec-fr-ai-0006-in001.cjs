const fs = require('fs');
const p = 'src/data/records/FR-AI-0006.js';
let s = fs.readFileSync(p, 'utf8');

const newDesc = 'Olsson et al. (Anthropic, 2022) identify \\"induction heads\\" — attention-head circuits that implement a form of pattern completion — as a candidate mechanism for in-context learning across transformer sizes. The paper provides strong causal evidence in small attention-only models, including ablation and mechanistic reverse engineering, while evidence in larger models with MLPs is mainly correlational and partly extrapolative. Induction heads recur across the model sweep and are associated with the onset of in-context learning, supporting mechanistic continuity, but the paper does not causally establish that induction heads explain in-context learning across the full model-size range. This remains important supportive evidence for the claim, with the strength of causal attribution decreasing at larger scale.';
const descRe = /      description: "Olsson et al\.[^\n]*",/;
if (!descRe.test(s)) throw new Error('IN-001 description anchor not found');
s = s.replace(descRe, `      description: "${newDesc}",`);

const in1TailRe = /(id: "IN-001"[\s\S]*?vectors: \["supportive--mechanistic-continuity-demonstrated"\],\n      date: "2022",)(\n    },)/;
if (!in1TailRe.test(s)) throw new Error('IN-001 provenance anchor not found');
s = s.replace(in1TailRe, `$1\n      sources: [\n        {\n          citation: "Olsson, C. et al. (2022), In-context Learning and Induction Heads, Transformer Circuits Thread.",\n          url: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html",\n          locator: "Summary of Evidence for Sub-Claims; Arguments 1–6; Model Analysis Table",\n        },\n        {\n          citation: "Olsson, C. et al. (2022), In-context Learning and Induction Heads, arXiv:2209.11895.",\n          url: "https://arxiv.org/abs/2209.11895",\n          locator: "Abstract",\n        },\n      ],$2`);

const lineageRe = /Mechanistic interpretability identifies specific circuits\. Elhage et al\. and Olsson et al\. establish that specific circuit types are causally responsible for specific capabilities\. The mechanistic continuity question becomes empirically tractable for the first time\./;
if (!lineageRe.test(s)) throw new Error('lineage anchor not found');
s = s.replace(lineageRe, 'Mechanistic interpretability identifies specific circuits. Elhage et al. and Olsson et al. provide causal circuit evidence in small models and cross-scale correlational evidence in larger models, making the mechanistic continuity question empirically tractable for the first time.');

const mutAnchor = '    // APPEND-ONLY. Newest first.\n    { id: "M-008"';
if (!s.includes(mutAnchor)) throw new Error('mutation anchor not found');
const mutations = `    // APPEND-ONLY. Newest first.\n    { id: "M-010", date: "2026-08-29", field: "provenance_enriched", from: "IN-001 without structured provenance", to: "IN-001 sources[] added", note: "Added primary Transformer Circuits and arXiv provenance for Olsson et al. (2022) after bounded source review." },\n    { id: "M-009", date: "2026-08-29", field: "editorial_correction", from: "IN-001 described causal responsibility across the full model-size range", to: "IN-001 distinguishes causal small-model evidence from mainly correlational larger-model evidence", note: "Editorial Correction: aligned IN-001 and matching 2022 lineage wording with Olsson et al.'s stated evidence strength. No new evidence instance and no reassessment; FRAGMENTING / VS-03 remains current under AS-002." },\n    { id: "M-008"`;
s = s.replace(mutAnchor, mutations);

if (!s.includes('id: "M-010"') || !s.includes('arXiv:2209.11895')) throw new Error('bounded correction failed');
fs.writeFileSync(p, s);

fs.writeFileSync('docs/provenance/FR-AI-0006-IN001-CORRECTION.md', `# FR-AI-0006 — IN-001 Provenance / Wording Correction\n\n**Date:** 2026-08-29  \n**Status:** EXECUTED — pending CI / deployment verification\n\n## Finding\nThe bounded correction investigation confirmed that legacy IN-001 overstated Olsson et al. (2022). The paper presents strong causal evidence for induction-head involvement in small attention-only models, but mainly correlational and extrapolative evidence for larger models with MLPs.\n\n## Correction\n- IN-001 now distinguishes causal small-model evidence from weaker larger-model evidence.\n- Canonical structured provenance is added to IN-001.\n- The matching 2022 lineage sentence is aligned to the same evidentiary boundary.\n- AS-001 remains immutable historical assessment text.\n- No new assessment is issued: AS-002 already governs the current state, and FRAGMENTING / VS-03 remains supported independently.\n\n## Boundary\nNo later induction-head literature is admitted in this correction. No systematic legacy backfill is authorised. This is a factual/provenance repair only.\n`);

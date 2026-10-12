# Evidence-gap reassessments — 2026-10-12

Status: implementation receipt; canonical judgements belong to the three record files.
Origin: operator-approved scope in the 2026-10-12 session. Release Archive and Institutional Learning Register reconciliation was filed before implementation. Queue item: “Approved work — 2026-10-12 evidence-gap reassessments”.
Record base: GitHub main `514f2e2fa17edfd4d2fb3165d7649a990d2f7060` (analytics-only successor to recovery `8cf5120`).

## Manifest

- `src/data/records/FR-AI-0001.js`: append AS-003 and M-015.
- `src/data/records/FR-AI-0002.js`: append AS-003 and M-014.
- `src/data/records/FR-QE-0008.js`: append AS-004 and M-015.
- `src/data/provenanceIntegrity.test.js`: preserve historical checkpoint assertions while permitting later documented reassessments; verify the three new assessment receipts and gap closure.
- This receipt.

No current-assessment field, new instance, stage review, derived-data change, classification change, routing change or question closure. Each historical assessment and mutation object is preserved. Source selection is bounded to the evidence already admitted and the complete current records; this is not an expanded Scout or new-evidence admission.

## Separate decisions

### FR-AI-0001 — AS-003

Evidence awaiting assessment: IN-007 admitted 2026-09-29; AS-002 dated 2026-06-27.
Decision: reaffirm ESCALATING / VS-03 on 2026-10-12.

The OpenAI retrospective statement reports 35/42; the official IMO 2025 page establishes the matching gold threshold, not independent validation of a model score. The admitted evidence supports competition-mathematics performance while leaving training exposure, model identity, inference and independent grading insufficiently specified to determine the class-level generalisation claim. Trace faithfulness remains distinct from generalisation. The assessment explicitly incorporates the corrected status of IN-003 and IN-006; earlier assessment wording is preserved as history. OQ-001–005 remain open. No First Proof results or later capability reports are admitted through this review.

Sources checked 2026-10-12:
- https://openai.com/index/first-proof-submissions/ — retrospective IMO statement.
- https://www.imo-official.org/editions/2025/ — official gold threshold.

### FR-AI-0002 — AS-003

Evidence awaiting assessment: IN-008 admitted 2026-09-26; AS-002 dated 2026-08-17.
Decision: reaffirm ESCALATING / VS-02 on 2026-10-12.

OSWorld-Pro makes sequential GUI-process failures observable but measures neither workplace productivity nor the amount/cost of human supervision. Its task completion metric is conditioned on subgoals judged feasible; its OSWorld comparison is not a like-for-like decline. This strengthens the contested autonomous-workflow boundary alongside IN-007 without reversing bounded human-reviewed utility. The assessment incorporates the latest provenance corrections rather than repeating the historical summary's broad numerical or commercial-deployment claims. Preprint/judge limitations, Linux task selection and interested author affiliation constrain transfer. All questions remain open.

Source checked 2026-10-12:
- https://arxiv.org/html/2609.24890v1 — complete paper, metric definitions, results, process failures and limitations.

### FR-QE-0008 — AS-004

Evidence awaiting assessment: IN-007 admitted 2026-09-26 and IN-008 admitted 2026-10-03; AS-003 dated 2026-09-18.
Decision: reaffirm RESOLVING / VS-04 on 2026-10-12.

Helios supports integrated correction, logical operations and a heterogeneous-code interface. The paper also reports a bounded memory-error improvement from [[10,2,3]] to [[20,2,6]] under concatenation; the new assessment acknowledges this experimental comparison rather than implying that no size-related measurement exists. It does not establish a reproducible broad scaling curve, universal fault-tolerant workload, larger-distance durability or application-scale economics. Higher-distance constructions and lower-error projections remain prospective. The work is first-party Quantinuum evidence, not independent replication.

Distributed lattice surgery adds protocol/numerical threshold evidence; its 50% erasure threshold assumes absent local noise, with interface-distance benefits masked at higher local error rates. It supplies no experimental system-scale closure. Neither instance satisfies AT-001 or closes the retained institutional questions; RESOLVING remains distinct from resolved.

Primary PDFs checked 2026-10-12 (HTML representations returned 404):
- https://arxiv.org/pdf/2609.03194v1 — introduction, experimental results and Discussion and Outlook.
- https://arxiv.org/pdf/2610.01923v1 — abstract, protocol construction and local-noise simulations.

## Verification and closure gates

Before publication: compare complete record objects with the pinned base, allowing only one appended assessment and one prepended mutation per record; assert unchanged prior histories, instances, questions, mechanisms, claim and metadata, unchanged transition feeds, expected current states/stages and zero evidence-since-assessment counts. Run canonical validators, full tests, production build, built-output tests and MCP typecheck with Node 22/npm 10. Report baseline lint failures separately.

Commit through GitHub connector against the pinned current main; compare committed bytes with the prepared files. Independently verify a fresh checkout of the committed revision. Do not close until production deployment.json matches that SHA, live routing smoke passes, the three pages expose the new dates and zero evidence gaps, register rows agree and the separately deployed MCP passes its exact-SHA/content gate. File final SHA/results in the Release Archive and remove the completed queue item only then.

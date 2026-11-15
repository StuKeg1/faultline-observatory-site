# FIP-A02 — Bounded implementation review receipt (UNMERGED)
Date: 2026-11-15
Status: IMPLEMENTED ON ISOLATED BRANCH / DECISION REQUIRED — not accepted, not merged, not deployed.
Authorisation: user approved four LAD-001 overlays and tests on a review branch, expressly excluding merge or deployment.
Branch: `fip-a02-lad001-four-legacy-dates`
Branch head after edits: `2c71f42716c9875dc7e4b7e863cca9f83fd995b2`
GitHub comparison: https://github.com/StuKeg1/faultline-observatory-site/compare/main...fip-a02-lad001-four-legacy-dates
Source plan: [prepared A02 proposal](../proposals/A02-LAD001-four-record-2026-11-15.md)

## Diff scope confirmed via GitHub compare
Three files changed; **no canonical record files changed**:
- `src/data/verificationStageReviews.js`: four additional LAD-001 overlays (+32 lines). Exact IDs: FR-QE-0003/AS-001, FR-QE-0008/AS-001, FR-AI-0001/AS-001, FR-QE-0005/AS-001. All `value: "date uncertain (legacy)"`, `precision: "unknown"` and original trigger instance basis. Existing seven overlays untouched.
- `src/data/verificationStageReviews.test.js`: total overlay expectation 7→11; key list updated; predecessor three-record pilot retains its historical hash assertions but recognises new records; new four-record checks preserve raw date, pressure state, reviewed VS semantics, state-transition sequence, current assessment and card/state-entry dates.
- `src/data/mcpProjection.test.js`: four-record assertions for full `assessments[0].date`, `recordedDate`, latest assessment, openedDate, assessment count, Pressure State and VS in summaries.

## Checks completed
- Branch readback confirms 11 unique overlay keys and four exact targeted AS-001 entries.
- GitHub compare reports exactly the three expected files and no changes to `src/data/records/`, `src/data/corpus.js`, or FCIF files.
- All four existing source instances referenced by `basis` were confirmed in the record modules during preparation.
- Every target retained raw AS-001 date 2024-01-15 on `main`; no record module edits performed.
- Direct source inspection shows all four records' assessments hold a stable pressure state, matching the state-entry/display assertions.
- Existing source-level test expectations with fixed overlay count or list have been updated.

## Executable validation NOT completed
The GitHub connector exposes file/commit/compare operations but no remote shell or workflow dispatch. Local container cannot resolve github.com, so it cannot fetch the repository to run Node tests; no CI run is claimed.
Mandatory before merge:
1. Checked-out branch Node 22/npm 10: `npm ci`, `npm run validate:all`, `npm test`, `npm run build`, optionally `npm run lint` and `npm run typecheck:mcp`.
2. Verify no stale `2024-01-15` as AS-001 issue/state-entry dates in prerendered record detail, Warrant, Matrix, cards, registers, trajectory surfaces; do not accidentally hide separate openedDate/question dates.
3. Check generated MCP full and search projection displays qualified chronology with retained `recordedDate`. Later validate deployed MCP exact-SHA parity if a separate deployment is approved.
4. Check distinct-date rendering, no NaN/Infinity, no counts/states/stages changed; compare canonical record module hashes pre/post.

## Decision gate
Do **not** merge or deploy until tests pass and user grants separate approval. If tests are inaccessible, report BLOCKED FOR MERGE rather than calling A02 ACCEPTED. Avoid opening an automatic preview deployment by creating a pull request without explicit approval.

Next single action: arrange or authorise executable CI validation of the isolated branch and inspect results; seek distinct merge/deployment approval only after successful validation.

## Executable isolated validation supplement — 15 November 2026

**Scope:** Executed actual branch module source fetched from GitHub inside a JavaScript isolate, with ES module export/import wrappers adapted for testing. This tests selected production derivation functions in executable JavaScript; it is **not** a Node/npm CI run, production build, or live MCP request.

- **40 assertions passed** across actual `verificationStageReviews.js` and four canonical record modules: unique overlay keys (11), target date qualification, unchanged stored issue dates, retained `recordedDate`, pressure state/stage consistency, valid `basis` references and immutable source objects. The two modified test files passed JavaScript syntax-compilation checks after import transformation.
- **32 additional assertions passed** using actual `derive.js`, `cardAssessmentHistory.js`, `verificationStageReviews.js` and the four record modules: historical date projections, state-entry dates, card dates, latest assessment continuity, transition counts, compact trajectory existence and non-mutation.
- **Notable nuance:** FR-QE-0005's derived Verification Matrix `getVerificationStages` dates for current VS-02 resolve to 2026-09-15, and VS-03 to 2026-06-29. The historical AS-001 date is correctly qualified in `getAssessmentHistory`, `getStateEnteredDate` and card history, but **does not appear in the stage matrix** because its current VS-02 run begins later. This is existing stage-run logic, not a failing LAD-001 overlay; do not assert every record's stage matrix must expose an unknown date.
- GitHub compare still lists precisely three changed files: sidecar and two test files, no canonical record files.

### Full CI blockage and merge disposition
`.github/workflows/ci.yml` triggers only for `pull_request` and pushes to `main`. No available GitHub connector action can dispatch a new workflow run on this feature branch. Opening a PR may also trigger Cloudflare preview deployment (repo documents Cloudflare checks on PRs), so that route is **not used under the instruction not to deploy**. The local execution container has Node 22/npm 10 but no network access to clone the repository or install dependencies. Thus the repository's `npm ci`, `validate:all`, lint, `npm test`, build, built-output tests and MCP typecheck remain unexecuted for this branch.

**Decision: HOLD MERGE / DO NOT DEPLOY.** Isolated executable checks passed but do not satisfy the formal CI/build acceptance gate. Do not mark A02 ACCEPTED. The next authorised action must specifically enable full CI without an unauthorised deployment (e.g., approve a PR/preview workflow, or provide a local checkout accessible to an executable runner). After CI results are reviewed, seek a separate merge decision.

## Official GitHub Actions CI — draft PR #254 (15 November 2026)

User explicitly authorised a **draft** PR solely for CI, with automatic Cloudflare preview permitted but **no merge or production deployment**. Draft PR: https://github.com/StuKeg1/faultline-observatory-site/pull/254. Head SHA: `2c71f42716c9875dc7e4b7e863cca9f83fd995b2`. Run: https://github.com/StuKeg1/faultline-observatory-site/actions/runs/43741124591 (CI #930), job `validate` (132894303506).

**GitHub Actions status: completed / success**. Logs independently inspected and confirm:
- Dependency coherence verification, root and MCP dependency installation: success
- `npm run validate:all` and LPR queue manifest: success
- `npm run lint`: success
- `npm test` before build: success
- `npm run build`: success; 63 pages prerendered
- `npm test` after build: **221 tests passed; 0 failures**
- `npm run typecheck:mcp`: success
- Non-blocking log notices: bundle-size warning, Node 20 action runtime deprecation, and punycode deprecation. No failing CI step.

GitHub's changed-file listing confirms precisely the proposed three files. PR was independently fetched and remains **OPEN / DRAFT / UNMERGED**. This CI run does **not** constitute public Cloudflare production verification or a live MCP parity check. Cloudflare preview check status is not independently confirmed via this connector; preview was permitted but was not manually initiated.

**Separate merge recommendation: APPROVE MERGE IN PRINCIPLE, SUBJECT TO EXPLICIT USER AUTHORISATION**. The bounded diff and full GitHub CI are green. On merge to main, the site and MCP Worker may auto-deploy due to `src/data/**` changes: these are production-side effects and must be explicitly approved in the merge decision. Until then no merge/deploy action.

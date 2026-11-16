# FIP-A04 — Postmerge production acceptance receipt

**Date:** 2026-11-16  
**Disposition:** **ACCEPTED** — P1–P4 source-bounded copy correction; assessment and record history preserved.  
**Programme:** FIP-001 / Package A / Wave 1; Claude finding F3-03.

## Authority and production lineage

The operator authorised four bounded copy changes and tests on an isolated branch, separately authorised a CI-only draft PR and then expressly authorised merging PR #257 with automatic Cloudflare Pages production deployment and a subsequent acceptance check.

- [PR #257](https://github.com/StuKeg1/faultline-observatory-site/pull/257) verified closed/merged, SHA `b89cdc3bc4b73b17be49364e34ecd7f3b8af6fc0`. Canonical `main` readback matched that SHA after merge.
- [CI #43944684725](https://github.com/StuKeg1/faultline-observatory-site/actions/runs/43944684725) passed **231/231 post-build tests**, zero skipped or failed; 63 prerendered pages, dependency verification, canonical validation, LPR manifest, lint and MCP Worker typecheck passed.
- Connected authenticated Cloudflare Pages deployment details, [deployment 2dafdafd-49ec-4037-bb25-4e6c7af19900](https://dash.cloudflare.com/145fa3f7c38e336aaa0b1713a658cf89/pages/view/faultline-observatory-site/2dafdafd-49ec-4037-bb25-4e6c7af19900), showed **Production / main**, commit `b89cdc3bc4b73b17be49364e34ecd7f3b8af6fc0`, status **success**, published 2026-11-16 at 20:00 GMT, duration 38 seconds; build log confirmed fingerprint and successful asset publication. This provides independent deployment-commit verification.

## Fresh live page verification — connected browser, 2026-11-16 ~20:03 GMT

The operator opened each page freshly after the production deployment. Readback was made directly from each separate connected browser tab, not cached search snippets. Text counts are within the rendered browser page content.

| Public surface | Exact observed checks | Result |
| --- | --- | --- |
| [Homepage](https://faultlinewatch.com/) | `Assessments are added without overwriting earlier judgements` once; `Evidence descriptions and other record details may be corrected` once; `with dated changes recorded in the Mutation Log` once; prior `only ever added to, never rewritten` absent | **PASS** |
| [Methodology](https://faultlinewatch.com/methodology/) | `Assessments are append-only; governed corrections to other record fields are logged` once; `They do not necessarily reproduce the complete earlier field wording` once; Assessment glossary `The current assessment is always the last entry` once; former `Nothing is deleted; changes are recorded and the prior state is preserved` absent | **PASS** |
| [Institutional Changelog](https://faultlinewatch.com/institutional-changelog/) | `Recorded mutation entries for Frontier Records, presented in chronological order` once; `An entry may summarise a correction rather than reproduce the complete earlier wording` once; filtered homepage feed explanation still present; former `Nothing here is deleted, hidden, or summarised away` absent | **PASS** |
| [About](https://faultlinewatch.com/about/) | `Each record has a permanent identifier and preserves its assessment history and dated mutation log` once; pre-existing `Records are never closed by editorial judgement` retained; former `Each record is citable, permanent, and append-only` absent | **PASS** |
| [Welcome — unchanged control](https://faultlinewatch.com/welcome/) | `Earlier assessments are never rewritten or removed` once; `Instead, the Record preserves the complete trajectory` once | **PASS** |

## Data integrity and scope

The merge diff contained 11 files: four page modules, regression test, package.json and five FIP administrative documents, with **no** canonical `src/data/records/`, FCIF, Worker or MCP projection changes. Postmerge readback confirmed Welcome Git blob `cddb24988f5242c14b92d6244c0d1fcf562cd683`, FR-AM-0001 `197bfdbfc978b38a007b58238ea1562320729164`, FR-AM-0005 `ab98c513e69a9f52e03b9a4deda99a1ce7053a98`, and `mcpProjection.js` `8896d04cfeb50e55a7cad4f00eddf8f69e38f45f`. The source/HTML regression tests cover the revised wording and retained Welcome assessment wording.

**A04 acceptance is strictly for correction-history and append-only *public copy*.** No retroactive assessment editing, methodological rule change, complete historical text-diff publication, or A02 historical MCP date parity is implied.

**Separate deferred work:** Complete prior-value diffs remain deferred to a future provenance design. FIP-A02 historical `date`/`recordedDate` MCP parity remains **DEFERRED, NOT ACCEPTED**. FIP-A03 remains ACCEPTED.

**Next single recommended FIP item:** FIP-A05, evidence-only severity-and-denominator recount of legacy audit corrections, no publication of unsupported correction percentages and no unapproved implementation.

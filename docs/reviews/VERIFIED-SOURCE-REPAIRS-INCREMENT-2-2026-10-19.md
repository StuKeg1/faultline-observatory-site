# Verified source repairs — increment 2: BT-0004

Date: 19 October 2026. Base: `26d0ca9b815f6362dc8afb21dcb7236af1a2aaed`. Scope authorised: exact remaining BT-0004 IN-005/IN-006 source links, with a separate AM-0005 attribution review.

## Result and source ledger

Six new links are attached to already named references across two entries. IN-005 receives four structured citations; IN-006 retains its existing three citations and adds the two missing URLs. SourceReference stays verbatim. M-017 appends an editorial source-metadata correction; it does not admit evidence or reassess the record.

| Entry | Verified document | Role and boundary |
| --- | --- | --- |
| IN-005 | [FTC case 201-0144, Illumina/GRAIL](https://www.ftc.gov/legal-library/browse/cases-proceedings/201-0144-illumina-inc-grail-inc-matter) | Official enforcement chronology starting in March 2021. Competition proceedings, not clinical efficacy evidence. |
| IN-005 | [FTC statement, 18 December 2023](https://www.ftc.gov/news-events/news/press-releases/2023/12/statement-regarding-illuminas-decision-divest-grail) | Decision to divest after the Fifth Circuit ruling. The statement also records that the court vacated the order and remanded on the treatment of rebuttal evidence; do not imply an unqualified judicial affirmation of the entire order. |
| IN-005 | [European Commission IP/23/4872, 12 October 2023](https://ec.europa.eu/commission/presscorner/api/files/document/print/en/ip_23_4872/IP_23_4872_EN.pdf) | Official PDF, pages 1–2: historical restorative/divestment and transitional measures. The HTML press-corner shell was empty; the official PDF supplied the document. This is a dated 2023 action, not a statement of current legal status. |
| IN-005 | [Illumina completion announcement, 24 June 2024](https://www.illumina.com/company/news-center/press-releases/2024/d2e2aec7-563a-4301-9d60-db56ea067bfb.html) | Confirms completed GRAIL spin-off and retained 14.5% stake. Company communication; no new clinical conclusion. |
| IN-006 | [GRAIL NHS-Galleri topline release, 19 February 2026](https://grail.com/press-releases/landmark-nhs-galleri-trial-demonstrates-a-substantial-reduction-in-stage-iv-cancer-diagnoses-increased-stage-i-and-ii-detection-of-deadly-cancers-and-four-fold-higher-cancer-detection-rate/) | Exact title/date and same-trial identity match the retained reference. Company release acknowledging the primary endpoint was not met. It predates the conference presentation, so it is not presented as its publication date. |
| IN-006 | [Science Media Centre expert reaction, 30 May 2026](https://www.sciencemediacentre.org/expert-reaction-to-press-release-from-grail-on-full-results-of-the-nhs-galleri-trial-being-presented-at-asco/) | Exact date, conference context and named ASCO abstract match. Commentary on unpublished conference results, including the distinction between stage shift and mortality benefit. Not another trial or an independent replication. |

These are source-identity and link repairs, not an audit certifying every historical commercial-price or regulatory statement in IN-005. No new claims from the linked documents are inserted into the scientific description. Existing trial-continuity notices and the ASCO abstract remain intact; the structured-source count is not an independent-study count.

## Preservation and validation

The JSON receipt stores both prior source arrays and the entire baseline record hash. Tests reverse this increment before checking increment 1, preserving its original hashes and enforcing both full-record boundaries. Earlier historical checkpoints reverse the explicit receipts in order; no assessment or scientific-field hash is waived.

All assessments, states, stages, dates, descriptions, vectors, counts, relationships, claim/question content, review markers and prior mutations remain unchanged. AM-0005, AM-0006, BT-0003, QE-0003 and the AI source-status notices are outside this repair.

Validation passed on Node 22.23.3 / npm 10.9.9: 201 tests; event, mutation, assessment, MCP and provenance validators; clean production build and prerender of 62 pages. Lint: zero errors, the existing MutationHighlightContext Fast Refresh warning only. HTML inspection confirms all seven source links in the two entries, including all six added URLs, and retains the same-trial/non-replication notice. No dependencies or rendering components change. This PR is prepared for review; no deployment is claimed.

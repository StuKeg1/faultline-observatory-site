# Verified source repairs — increment 1

Date: 19 October 2026. Base: `5194d6b90ed192eb9b931430e9f577cbee60fef2`. Operator authorised Batch 5 / R05, incrementally.

## Result

Eight existing evidence entries across four records receive structured provenance. Source identity is verified against publisher metadata or the named authors’ organisation, with access limits below. This is link enrichment of already admitted citations, not a fresh scientific validation of every sentence, a new evidence admission or an assessment. Full-record reconstruction against the companion JSON confirms the only changes are the listed sources arrays, the single first-author reference correction and one appended metadata mutation per record.

| Record / entries | Primary identity verification | Scope and access limits |
| --- | --- | --- |
| QE-0007 / IN-005 | [Mi, Nature 2022](https://www.nature.com/articles/s41586-021-04257-w); [Kandala, Nature 2017](https://www.nature.com/articles/nature23879); [Yamamoto, PR Research 2022](https://doi.org/10.1103/PhysRevResearch.4.033110) | All three named papers and DOIs match the existing reference. No practical-advantage verdict added. |
| AM-0004 / IN-007 | [Helical Fusion’s paper announcement](https://global.helicalfusion.com/post/helical-fusion-publishes-peer-reviewed-paper-on-hts-magnet-technology-validated-through-collaboratio) identifies Narushima’s title, journal, volume/article and [DOI](https://iopscience.iop.org/article/10.1088/1742-6596/3278/1/012031). | Publisher full text was inaccessible in this run. Exact identity corroborated by the authors’ organisation; component coil performance is not whole-reactor operation. |
| AM-0005 / IN-001 | Nature’s [2022 CSH retraction](https://www.nature.com/articles/s41586-022-05294-9) and [2023 lutetium-hydride retraction](https://www.nature.com/articles/s41586-023-06774-2) | Preserve both existing citation strings and locators; add exact notice URLs/DOIs, not links presented as validating the retracted claims. |
| BT-0004 / IN-001 | [Diehl 2008](https://www.nature.com/articles/nm.1789); [Wan 2017](https://www.nature.com/articles/nrc.2017.7) | Article and review identities match. |
| BT-0004 / IN-002 | Publisher pages for [PATHFINDER](https://www.sciencedirect.com/science/article/pii/S0140673623017002) and [SYMPLIFY](https://www.sciencedirect.com/science/article/pii/S1470204523002772) | Distinct populations remain described as before. |
| BT-0004 / IN-003 | [ASCO TPS6606](https://doi.org/10.1200/JCO.2022.40.16_suppl.TPS6606) | Clarify first author as Swanton, with Neal a coauthor, in structured citation. SourceReference is corrected to the same first author; its previous wording is preserved in the JSON receipt. Retain both registry identifiers as links, using the already verified NHS-Galleri identity in the Batch 2 receipt. Registry pages were JavaScript/cookie-limited in this run; no new registry outcome asserted. |
| BT-0004 / IN-004 | NEJM metadata for [PLCO 2009](https://doi.org/10.1056/NEJMoa0810696) and [NLST 2011](https://doi.org/10.1056/NEJMoa1102873) | Publisher indexing/abstracts verified; direct fetch was restricted. No change to screening interpretation. |
| BT-0004 / IN-006 | [ASCO LBA100](https://doi.org/10.1200/JCO.2026.44.17_suppl.LBA100) | Link the existing conference abstract. Preserve GRAIL and Science Media Centre references as unlinked structured text because exact URLs were not verified here. These are not counted as newly verified links. |

The existing component hides sourceReference when sources[] is present. Consequently, every named constituent of the BT-0004 IN-003/IN-006 bundles is retained in sources[] rather than disappearing from the public page. No rendering component is changed. Structured sources are citations, not counts of independent studies or participants.

## Explicit deferred queue

- AM-0005 IN-002/IN-004/IN-005: vague or mismatched LK-99/methodology bundles. IN-002 explicitly mentions a non-LK-99 Guo title; do not attach a plausible unrelated paper. Identify retained review sources and their evidential roles first.
- AM-0005 IN-006: nickelate announcement and LaSc₂H₂₄ preprint require exact retained attribution; no guessed links.
- BT-0004 IN-005: precise competition/company document discovery and role checks remain, separate from the clinical-paper increment.
- AM-0006 IN-001–IN-006: retained HTML and PA-004 were inspected. Original labels are broad literature/company bundles; PA-004 explicitly deferred legacy enrichment. Drive searches for D51/LPR-001-D51 returned no item. Canonical completion of D51 is not a substitute for access to its source ledger. Recover that retained review packet before filling these six gaps.
- BT-0003 IN-001: D27 says verified in substance but supplies no exact primary-source list and explicitly did not enrich this entry. The retained HTML does not supply linked primary citations. Recover the retained source list before enrichment; a plausible GrimAge paper alone would not cover the whole bundle.
- QE-0003 remains subject to its governed correction. Existing AI source-status notices remain; no substitute citations are guessed.

No assessment, stage, pressure state, date, description, vector, relationship, evidence count, provenance-review completion marker or prior mutation is changed. All sourceReference values are retained except the explicitly receipted BT-0004 IN-003 first-author correction from Neal to Swanton; no source identity or DOI changes.

## Validation

The companion JSON stores previous and new sources, the first-author reference correction, and baseline record hashes. A regression check reverts only these receipted citation fields and removes the explicitly appended mutation, then matches each entire record to its baseline hash. Earlier checkpoint tests restore precisely the receipted prior sources; no scientific-content hash is replaced or waived.

Validation passed on Node 22.23.3 / npm 10.9.9: all 201 tests; event, mutation, assessment, MCP and provenance validators; production build and prerender of 62 pages. Lint has zero errors and the existing MutationHighlightContext Fast Refresh warning. No dependency changes. The register-only date-classification PR is independent; production date behaviour does not change.

HTML inspection confirms all 16 source-link destinations occur inside the correct eight evidence entries, including the preserved unlinked GRAIL and Science Media Centre context. No live deployment is claimed at PR preparation.

# FR-AI-0008 — bounded Verification Stage challenge

18 October 2026. Review complete; proposed disposition awaits Stuart's decision. This is not a ratified stage assignment.

## Authority, scope and implementation boundary

Stuart authorised the amended bounded review and interim disclosure in this conversation. The review examines IN-001–IN-006 and sources already cited there after D08's withdrawals. No new scientific evidence is admitted. The claim remains existential and task-bounded: “AI-assisted medical diagnosis achieves specialist-level accuracy on defined imaging tasks.” Pressure State is not reassessed.

The July ruling on AS-001 remains intact. Its ratification is historical authority for that assessment, not a separate ratification of AS-004. AS-001–AS-004, their stored codes, all previous mutations and the July overlay are preserved. The current displayed VS-05 remains pending operator decision. VSC-001 and M-015 record the challenge separately; they do not implement the recommendation below.

Governing authorities read:

- [Semantic-Authority Ruling, ratified 22 July](https://docs.google.com/document/d/18TbpKvoNpmY4O9uvxxROilRjFyj5guwg8mknWaxlMSY/edit): Verification Stage is sequential evidence depth; Pressure State is a separate axis.
- [Legacy Assignment Review, ratified 23 July](https://docs.google.com/document/d/1aDpuzdV01cWV9ZOZ17r_R1UbrUDJqUPoKH6b359kJhA/edit), sections 3, 7, 9 and 11: Audit requires independent scrutiny; qualifying reproduction can be positive, null or adversarial; heterogeneous corroboration is insufficient. Operation concerns the claimed capability rather than merely the functioning of its research apparatus. Authorisation alone is insufficient.

The earlier repair receipt remains historical. Its substantive selection of VS-05 is challenged here, not silently rewritten.

## Amended method

1. Fix the target capability, task, comparator, setting and result for each admissible packet. Do not substitute device availability for demonstrated accuracy.
2. Test whether evidence establishes sustained **or applied** operation of that capability. Trial status neither automatically qualifies nor automatically excludes an instance. Distinguish actual clinical application from operation of a research apparatus. No new requirement for routine use, a minimum number of sites, duration or use outside a trial is invented.
3. Record the strongest dissent and any unresolved interpretation. July's individual case is not a general authority to bypass sequential evidence depth.
4. Independently test Replication by identifying the original result, reproducing team, reproduced method/target, differences and observed outcome. Multiple reports from one experiment are one linked packet.
5. A necessary-condition failure means a packet does not establish that stage; it is not necessary for every test to fail. Do not infer a successful replication merely from publication or a second paper.
6. Distinguish a supported floor, recommended stage and unresolved alternative. Indeterminacy does not automatically authorise VS-03. Any replacement requires a separately ratified append-only outcome.

## Evidence ledger

| Packet | What it establishes | Stage relevance and limit |
| --- | --- | --- |
| IN-001 | Defined research-task accuracy, including Rajpurkar's CheXNet comparator result | Supplies a concrete reproduction target; benchmark performance alone does not establish clinical Operation |
| IN-002 | Device-specific FDA authorisations | Does not restore the withdrawn inference from clearance to prospective specialist-level accuracy |
| IN-003 | External evaluation, reproduction and scrutiny of medical-imaging performance | Independent reproduction is examined below; the systematic review and varied domain-shift studies are not automatically separate replications of one result |
| IN-004 + IN-006 | Secondary and primary outcome reports from the same MASAI trial, NCT04838756 | Actual applied screening evidence; one linked trial, not two independent replications |
| IN-005 | Explicitly unsupported legacy attribution | No substantive weight in the current stage decision |

### Operation test: strongest case and strongest dissent

MASAI's primary analysis compares an AI-supported screening pathway with standard double reading. It reports favourable sensitivity and matched specificity, with interval-cancer non-inferiority. That is evidence of a functioning clinical capability, rather than merely an available device. The earlier outcome report concerns the same trial at four screening sites; four sites do not make four independent studies. Human radiologists remain part of the intervention. The bounded claim permits assistance and does not require autonomous replacement.

**Strongest case for VS-05:** actual screening decisions in a population programme constitute applied operation of the defined capability. The governing formulation allows applied operation, without a minimum duration or requirement for use outside research. On that reading MASAI can support Operation despite remaining a trial and despite wider transfer uncertainty.

**Strongest dissent:** the canonical exclusion of operation of a trial has not been explicitly reconciled with this trial-mediated application. The admitted packet evaluates the workflow; it does not document subsequent implementation. AS-004 asserts that the clinical application resolves the classification, without explaining this boundary. The historical July case relied on a broader deployment premise subsequently narrowed by D08.

**Finding:** clinical performance is established within MASAI. Whether that application satisfies the institution's Operation boundary remains a material interpretation requiring an explicit operator ruling. Neither trial status nor missing cross-domain generalisation alone defeats VS-05. Confidence is high in the factual distinction, medium in the classification objection. No new outside-trial threshold is adopted here.

### Replication test: IN-001 → IN-003

The original target is Rajpurkar et al.'s CheXNet pneumonia classifier, including its radiologist comparison. Zech's independent team explicitly reports reproducing that model, retraining a related DenseNet pipeline and testing internal versus external performance. Their methods change the output layer, datasets and evaluation; they do not repeat the four-reader F1 comparison. They observe poorer external performance in several comparisons and analyse site confounding.

This is a named, independent reproduction-and-extension of an admitted model/task, not heterogeneous cross-domain corroboration. Under July's rule allowing qualifying adversarial reproduction, it supports **VS-04 at medium confidence**. It does not establish an independently repeated specialist-superiority result.

**Strongest dissent:** if the required reproduction target is specifically the original human-comparator accuracy result rather than the model/task and its generalisation, Zech is Audit rather than Replication. The method and metric differences make this objection material. VS-03 is the uncontested floor; the operator must resolve this target interpretation when ratifying a stage. Pooch's abstract and the broader review are not used to fill that gap.

## Proposed disposition

**Recommend VS-04 Replication, medium confidence**, with FRAGMENTING unchanged. The reason is independent reproduction-and-challenge of a defined admitted imaging model, not independent confirmation of MASAI, universal medical accuracy, or a default downgrade from an uncertain VS-05.

The supported floor is VS-03 Audit. VS-05 remains a defensible competing interpretation of applied clinical operation. The stage is not settled by this report. An operator may retain VS-05 only with an explicit explanation of why MASAI is operation of the capability under section 3; or select VS-03 by explicitly rejecting the model/task reproduction target for VS-04. Neither decision may be presented as mechanically compelled by July.

Suggested decision for ratification:

> Ratify this bounded review's VS-04 recommendation on the independent model/task reproduction-and-challenge interpretation. Authorise a new AS-005 and mutation recording VS-05 → VS-04, with FRAGMENTING unchanged. Preserve AS-001–AS-004 and the July AS-001 overlay. Record the MASAI Operation dissent, the replication-target limitation and no-new-evidence basis. Resolve VSC-001 by appending a decision event and remove the interim notice only after validation.

This decision text is prepared, **not enacted**. If the operator instead leaves interpretation unresolved, retain the visible challenge pending decision; do not create an automatic AS-005/VS-03 fallback. Reaffirmation may use a new AS-005 or a separately dated ratified review object, never an edit to AS-004.

## Test and follow-up treatment

- Freeze the old comparison baseline ec156c4. Do not pool responses across revisions.
- Give both comparison layouts the identical stage-under-review disclosure. Scoring must distinguish the displayed VS-05 from an endorsed conclusion; credit recognition of the ambiguity. Participants are not asked to settle the institutional semantics.
- No five-newcomer outcome is claimed. One earlier reviewer report is not five participants; no recruited reader responses or referral outcomes are available in this run.
- The separate July-assignment screen is deferred and is not a blocker for this case.
- Source-quality candidate: IN-004's citation names Dembrower, while the DOI's primary bibliographic record identifies Hernström. This is the same already-cited study, not new evidence; log a bounded provenance correction separately. The stage reasoning uses the DOI-resolved study, not the mistaken author label. No source field was silently edited in this release.

## Primary-source checks and access limits

Checked 18 October 2026. Only existing cited works were used; DOI resolution via a bibliographic or institutional host does not add a new study.

- [Rajpurkar et al., CheXNet, arXiv:1711.05225](https://arxiv.org/abs/1711.05225): abstract and original result identity. The attempted HTML full text was unavailable; no claim of a line-by-line original implementation comparison is made.
- [Zech et al., PLOS Medicine, 2018](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683): full text, Introduction, CNNs, model training, testing and limitations; direct reproduction relationship checked.
- [Pooch et al., arXiv:1909.01940](https://arxiv.org/abs/1909.01940): abstract; not the decisive replication warrant.
- [Hernström et al., 2025, DOI 10.1016/S2589-7500(24)00267-X](https://pubmed.ncbi.nlm.nih.gov/39904652/): primary bibliographic record/abstract for design, sites, outcomes and trial identity.
- [Gommers et al., 2026, DOI 10.1016/S0140-6736(25)02464-X](https://pubmed.ncbi.nlm.nih.gov/41620232/): primary bibliographic record/abstract for comparator, clinical results and trial identity. Publisher full text was unavailable in this check; no uninspected supplementary material is relied on.
- The BMJ publisher page was unavailable in this check. Its broad review conclusion, already recorded in IN-003, is not used as the decisive VS-04 or VS-05 warrant. IN-002's device-authorisation ceiling and IN-005's withdrawal are retained from the corrected record; no new clinical-performance inference is drawn from them.

## Interim disclosure release manifest and local validation

Files: FR-AI-0008.js (separate VSC-001/M-015); derive.js (current challenge projection); mcpProjection.js (same notice in summaries and full views); mutationClassifier.js (record annotation, no scientific development); FrontierRecord.jsx (linked notice next to displayed stage and before the assessment); two focused test files; this receipt. No routing, CSS, historical overlay, source entry or assessment content changes.

Validation: production build and canonical validators passed; 174/174 built-output tests passed; lint passed; MCP typecheck passed. Object-level comparison against pre-release canonical data confirms every pre-existing record field, assessment, evidence instance and mutation entry remains identical. The disclosure is qualified against AS-004 only and cannot silently carry onto a subsequent assessment. Live deployment status is recorded in the Release Archive after release verification, not asserted by this local receipt.

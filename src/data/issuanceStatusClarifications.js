/** FIP-A03 issuance-status editorial annotations. Additive only: never rewrite AS/M source objects. */
export const ISSUANCE_STATUS_CLARIFICATIONS = [
  {
    "id": "FIP-A03-ISC-001",
    "recordId": "FR-AM-0001",
    "assessmentId": "AS-006",
    "mutationId": "M-017",
    "reviewDate": "2026-11-15",
    "scope": "issuance_authority_status_only",
    "expectedAssessmentNote": "Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation. Authority: ratified VS Semantic-Authority Ruling, 22 July 2026; ratified Legacy Verification Stage Assignment Review, 23 July 2026; bounded FIP-A03 warrant review docs/programmes/FIP-001/reviews/A03-BOUNDED-CURRENT-STAGE-WARRANT-2026-11-15.md. Source boundary: FR-AM-0001 IN-002/IN-003/IN-007 are independent tests of claimed electrochemical fusion; IN-008/IN-009 use externally accelerated deuterons and are not claimed-cell operation. Corrects later AS-004/AS-005 VS-05 reaffirmations transparently; retains AS-001 through AS-005, every prior mutation and the July AS-002/AS-003 interpreted-stage overlays. No evidence admission, source editing, pressure-state change or new scientific event.",
    "expectedMutationNote": "Operator-ratified FIP-A03 current-stage reconciliation, if separately authorised for implementation. Independent adversarial and null reproduction attempts support VS-04; neither external-ion-beam fusion study demonstrates operation of the canonical self-fusing electrochemical-cell capability. July historical AS-003 interpreted-stage overlay remains intact; later AS-004/AS-005 explicit VS-05 reaffirmations are preserved and now superseded for the current stage only. No new science, evidence instance, claim or Pressure State transition. Exact decision and scope: docs/programmes/FIP-001/proposals/A03-TWO-RECORD-APPEND-ONLY-STAGE-CORRECTIONS-2026-11-15.md.",
    "expectedAssessmentDate": "2026-11-15",
    "expectedMutationDate": "2026-11-15",
    "expectedFrom": "AS-005 / COLLAPSED / VS-05",
    "expectedTo": "AS-006 / COLLAPSED / VS-04",
    "mergeCommit": "2a4b2f7c2623fb66f800e45e60aabd94eff88456",
    "text": "The prospective wording above records the earlier preparation gate. Separate operator approvals authorised issuance on 2026-11-15 and merge through PR #255. This stage correction is not pending. This clarification concerns administrative status only; it does not change the recorded assessment, mutation, evidence, Pressure State or Verification Stage."
  },
  {
    "id": "FIP-A03-ISC-002",
    "recordId": "FR-AM-0005",
    "assessmentId": "AS-005",
    "mutationId": "M-022",
    "reviewDate": "2026-11-15",
    "scope": "issuance_authority_status_only",
    "expectedAssessmentNote": "Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation. Authority: July 2026 ratified semantic ruling and legacy assignment review; docs/programmes/FIP-001/reviews/A03-BOUNDED-CURRENT-STAGE-WARRANT-2026-11-15.md. Sources already admitted: IN-001 Dias retractions; IN-002 LK-99 replication campaign; IN-003 lower-than-room-temperature hydrides; IN-006 unreplicated Song et al. LaSc₂H₂₄ preprint; IN-007 Semenok et al. DPG 2026 and arXiv:2605.29985v2 with synthesis-equivalence limit. No independent replication count is inferred from seven experiments within one team or two related reports. Retain AS-001 through AS-004, all mutations and July AS-001/AS-002 interpreted-stage overlays. The September AS-003 and October AS-004 operator-approved reaffirmations are not erased; only their previously controlling current VS-05 stage is prospectively corrected.",
    "expectedMutationNote": "Operator-ratified FIP-A03 current-stage semantic correction, if separately authorised for implementation. LK-99's independent, including null, reproduction attempts support VS-04; no qualifying reproducibly functioning room-temperature material supports VS-05. IN-007's alloy precursor differs from Song et al., and the conference abstract/preprint are one linked research packet, not independent studies or exact-method falsification. Both the September AS-003 and October AS-004 VS-05 reaffirmations remain in the historical sequence, with July AS-001/AS-002 review overlays preserved. No claim-wide impossibility finding, new evidence, pressure-state change or alteration of the existing CLOSED status. Scope: docs/programmes/FIP-001/proposals/A03-TWO-RECORD-APPEND-ONLY-STAGE-CORRECTIONS-2026-11-15.md.",
    "expectedAssessmentDate": "2026-11-15",
    "expectedMutationDate": "2026-11-15",
    "expectedFrom": "AS-004 / COLLAPSED / VS-05",
    "expectedTo": "AS-005 / COLLAPSED / VS-04",
    "mergeCommit": "2a4b2f7c2623fb66f800e45e60aabd94eff88456",
    "text": "The prospective wording above records the earlier preparation gate. Separate operator approvals authorised issuance on 2026-11-15 and merge through PR #255. This stage correction is not pending. This clarification concerns administrative status only; it does not change the recorded assessment, mutation, evidence, Pressure State or Verification Stage."
  }
];

/** Fail closed on any source drift, duplicate IDs, or non-A03 target. */
export function getIssuanceStatusClarifications(record) {
  const matches = ISSUANCE_STATUS_CLARIFICATIONS.filter(entry => entry.recordId === record.id);
  return matches.flatMap(entry => {
    const as = record.assessments?.filter(item => item.id === entry.assessmentId) ?? [];
    const mutations = record.mutationLog?.filter(item => item.id === entry.mutationId) ?? [];
    const valid = as.length === 1 && mutations.length === 1 &&
      as[0].assessorNote === entry.expectedAssessmentNote &&
      mutations[0].note === entry.expectedMutationNote &&
      as[0].date === entry.expectedAssessmentDate &&
      mutations[0].date === entry.expectedMutationDate &&
      as[0].changeKind === "verification_stage_correction" &&
      as[0].pressureState === "collapsed" &&
      as[0].verificationStage === "VS-04" &&
      mutations[0].field === "assessment_correction" &&
      mutations[0].from === entry.expectedFrom &&
      mutations[0].to === entry.expectedTo &&
      ISSUANCE_STATUS_CLARIFICATIONS.filter(item => item.id === entry.id).length === 1 &&
      matches.filter(item => item.assessmentId === entry.assessmentId || item.mutationId === entry.mutationId).length === 1;
    if (!valid) return [];
    const { id, recordId, assessmentId, mutationId, reviewDate, scope, text, mergeCommit } = entry;
    return [{ id, recordId, assessmentId, mutationId, reviewDate, scope, text, mergeCommit }];
  });
}

export function assertIssuanceStatusClarifications(records) {
  for (const entry of ISSUANCE_STATUS_CLARIFICATIONS) {
    const record = records.find(item => item.id === entry.recordId);
    if (!record || !getIssuanceStatusClarifications(record).some(item => item.id === entry.id)) {
      throw new Error(`FIP-A03 issuance-status annotation source mismatch: ${entry.id}`);
    }
  }
}

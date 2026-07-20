import { applyRecordDirectoryView, getRecordUpdatedDate } from "../data/recordDirectory.js";
import { VS_STAGES } from "../data/trajectoryVisuals.js";

const PROGRAMME_ID = /^PROG-[A-Z0-9]+$/;
const RECORD_ID = /^FR-[A-Z0-9]+-\d{4}$/;

function isValidDate(value) {
  return typeof value === "string" && Number.isFinite(Date.parse(value));
}

function hasPublicRecordIdentity(record) {
  return RECORD_ID.test(record?.id ?? "") && Boolean(record?.claim?.shortLabel?.trim());
}

export function getProgrammeUrl(programme) {
  return `/programmes/${programme.id.toLowerCase()}/`;
}

export function selectProgrammePreview(programmes, limit = 3) {
  return programmes
    .filter((programme) =>
      PROGRAMME_ID.test(programme?.id ?? "") && Boolean(programme?.name?.trim())
    )
    .slice(0, limit);
}

export function getValidTrajectoryEvents(record) {
  if (!hasPublicRecordIdentity(record) || !Array.isArray(record.assessments)) return [];

  return record.assessments.filter((assessment) =>
    isValidDate(assessment?.date) && VS_STAGES.includes(assessment?.verificationStage)
  );
}

export function selectTrajectoryPreview(records) {
  return records
    .map((record) => ({ record, events: getValidTrajectoryEvents(record) }))
    .filter(({ events }) => events.length >= 2)
    .sort((a, b) => {
      const newestA = a.events.at(-1).date;
      const newestB = b.events.at(-1).date;
      return newestB.localeCompare(newestA) || a.record.id.localeCompare(b.record.id);
    })[0] ?? null;
}

export function selectRecordsPreview(records, limit = 3) {
  const eligible = records.filter((record) =>
    hasPublicRecordIdentity(record) && isValidDate(getRecordUpdatedDate(record))
  );
  return applyRecordDirectoryView(eligible, { sort: "updated" }).slice(0, limit);
}

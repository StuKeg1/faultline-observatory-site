/**
 * Display-only register projections for Evidence Trajectories.
 *
 * Registers are calculated from the published assessment history at render
 * time. They do not add a record field, classification, or authored summary.
 */
import { PROGRAMMES } from "./corpus.js";
import {
  getAssessmentHistory,
  getCurrentAssessment,
  getPressureStateLabel,
  getTransitionFeed,
} from "./derive.js";
import { CURRENT_PRESSURE_STATES } from "./pressureStates.js";
import { getRecordLegibility } from "./recordLegibility.js";

const STAGES = ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"];

function stageLabel(stage) {
  return stage;
}

function stateRegister(state) {
  return {
    id: `state-${state.value}`,
    group: "State",
    label: `Currently ${state.label}`,
    description: `Records whose latest assessment is ${state.label}.`,
    matches: (record) => getCurrentAssessment(record).pressureState === state.value,
  };
}

export const REGISTERS = [
  { id: "full", group: "Full archive", label: "Full archive", description: "All Frontier Records remain present.", matches: () => true },
  ...CURRENT_PRESSURE_STATES.map(stateRegister),
  {
    id: "state-audit",
    group: "State",
    label: "Currently Audit",
    description: "Records whose latest assessment is Audit.",
    matches: (record) => getCurrentAssessment(record).pressureState === "audit",
    legacy: true,
  },
  ...STAGES.map((stage) => ({
    id: `stage-${stage.toLowerCase()}`,
    group: "Stage",
    label: `Currently ${stageLabel(stage)}`,
    description: `Records whose latest assessment is at ${stageLabel(stage)}.`,
    matches: (record) => getCurrentAssessment(record).verificationStage === stage,
  })),
  {
    id: "changed",
    group: "Movement",
    label: "Changed state",
    description: "Records with at least one documented state change.",
    matches: (record) => getTransitionFeed(record).length > 0,
  },
  {
    id: "stage-changed",
    group: "Movement",
    label: "Stage changed",
    description: "Records with a documented verification-stage change.",
    matches: (record) => record.assessments.some((assessment, index, history) => index > 0 && assessment.verificationStage !== history[index - 1].verificationStage),
  },
  {
    id: "reaffirmed",
    group: "Movement",
    label: "Reaffirmed",
    description: "Records with repeated assessments and no documented state change.",
    matches: (record) => getAssessmentHistory(record).length >= 2 && getTransitionFeed(record).length === 0,
  },
  {
    id: "single",
    group: "Movement",
    label: "Single assessment",
    description: "Records with one published assessment.",
    matches: (record) => getAssessmentHistory(record).length === 1,
  },
  ...PROGRAMMES.map((programme) => ({
    id: programme.id,
    group: "Programme",
    label: programme.name,
    description: `${programme.shortId} records are brought forward within the full archive.`,
    matches: (record) => record.programme === programme.id,
  })),
];

export function resolveRegister(registerId) {
  const id = registerId === "audit" ? "state-audit" : registerId;
  return REGISTERS.find((register) => register.id === id) ?? REGISTERS[0];
}

function finalRun(history, key) {
  const current = history[history.length - 1];
  let index = history.length - 1;
  while (index > 0 && history[index - 1][key] === current[key]) index -= 1;
  return { assessment: history[index], current };
}

function latestStateChange(record) {
  for (let index = record.assessments.length - 1; index > 0; index -= 1) {
    if (record.assessments[index - 1].pressureState !== record.assessments[index].pressureState) {
      return { from: record.assessments[index - 1], to: record.assessments[index], index };
    }
  }
  return null;
}

function latestStageChange(record) {
  for (let index = record.assessments.length - 1; index > 0; index -= 1) {
    if (record.assessments[index - 1].verificationStage !== record.assessments[index].verificationStage) {
      return { from: record.assessments[index - 1], to: record.assessments[index], index };
    }
  }
  return null;
}

export function sortKey(date) {
  if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const parsed = new Date(`${date}T00:00:00Z`);
    if (Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date) return date;
  }
  const year = String(date).match(/\d{4}/)?.[0];
  return year ? `${year}-00-00` : "";
}

function stateReason(current, stateEnteredDate, history) {
  const state = getPressureStateLabel(current.pressureState);
  const reaffirmed = current.date !== stateEnteredDate ? ` · reaffirmed ${current.date}` : "";
  return `${state} since ${stateEnteredDate}${reaffirmed} · ${history.length} assessment${history.length === 1 ? "" : "s"}`;
}

export function getRegisterRow(record, registerId = "full") {
  const register = resolveRegister(registerId);
  const history = getAssessmentHistory(record);
  const current = history.at(-1);
  const stateRun = finalRun(history, "pressureState");
  const stageRun = finalRun(history, "verificationStage");
  const stateEnteredDate = stateRun.assessment.date;
  const stageReachedDate = stageRun.assessment.date;
  const latestTransition = latestStateChange(record);
  const latestStage = latestStageChange(record);
  let reason;
  let sortDate = stateEnteredDate;

  if (register.group === "Stage") {
    reason = current.changeKind === "verification_stage_correction"
      ? `Stage corrected to ${current.verificationStage} on ${current.date}; existing evidence`
      : `Reached ${current.verificationStage} on ${stageReachedDate}`;
    sortDate = stageReachedDate;
  } else if (register.id === "changed" && latestTransition) {
    const changeDate = history[latestTransition.index].date;
    reason = `${getPressureStateLabel(latestTransition.from.pressureState)} → ${getPressureStateLabel(latestTransition.to.pressureState)}, ${changeDate}`;
    sortDate = changeDate;
  } else if (register.id === "stage-changed" && latestStage) {
    const changeDate = history[latestStage.index].date;
    reason = `${latestStage.to.changeKind === "verification_stage_correction" ? "Stage correction: " : ""}${latestStage.from.verificationStage} → ${latestStage.to.verificationStage}, ${changeDate}`;
    sortDate = changeDate;
  } else if (register.id === "reaffirmed") {
    reason = `${getPressureStateLabel(current.pressureState)} held across ${history.length} assessments · last assessed ${current.date}`;
    sortDate = current.date;
  } else if (register.id === "single") {
    reason = `1 assessment · since ${current.date}`;
    sortDate = current.date;
  } else {
    reason = stateReason(current, stateEnteredDate, history);
  }

  return {
    record,
    current,
    stateEnteredDate,
    stageReachedDate,
    sortDate,
    reason,
    evidenceGapCount: getRecordLegibility(record).evidenceSinceAssessment.length,
  };
}

export function getRegisterRows(records, registerId = "full") {
  const register = resolveRegister(registerId);
  return records
    .filter((record) => register.matches(record))
    .map((record) => getRegisterRow(record, register.id))
    .sort((a, b) => sortKey(b.sortDate).localeCompare(sortKey(a.sortDate)) || a.record.id.localeCompare(b.record.id));
}

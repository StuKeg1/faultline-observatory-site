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

function latestStageChange(record) {
  for (let index = record.assessments.length - 1; index > 0; index -= 1) {
    if (record.assessments[index - 1].verificationStage !== record.assessments[index].verificationStage) {
      return { from: record.assessments[index - 1], to: record.assessments[index] };
    }
  }
  return null;
}

function isRecordedAtOpening(record, assessment) {
  const assessmentIndex = record.assessments.findIndex((item) => item.id === assessment.id);
  return assessmentIndex > 0 && record.assessments[assessmentIndex].date === record.claim.openedDate;
}

function stateReason(current, stateEnteredDate, history) {
  const state = getPressureStateLabel(current.pressureState);
  const reaffirmed = current.date !== stateEnteredDate ? ` · reaffirmed ${current.date}` : "";
  return `${state} since ${stateEnteredDate}${reaffirmed} · ${history.length} assessment${history.length === 1 ? "" : "s"}`;
}

export function getRegisterRow(record, registerId = "full") {
  const register = resolveRegister(registerId);
  const history = getAssessmentHistory(record);
  const current = getCurrentAssessment(record);
  const stateRun = finalRun(history, "pressureState");
  const stageRun = finalRun(history, "verificationStage");
  const stateEnteredDate = stateRun.assessment.date;
  const stageReachedDate = stageRun.assessment.date;
  const transitions = getTransitionFeed(record);
  const latestTransition = transitions.at(-1) ?? null;
  const latestStage = latestStageChange(record);
  let reason;
  let sourceAssessment = stateRun.assessment;

  if (register.group === "Stage") {
    reason = `Reached ${current.verificationStage} on ${stageReachedDate}`;
    sourceAssessment = stageRun.assessment;
  } else if (register.id === "changed" && latestTransition) {
    reason = `${getPressureStateLabel(latestTransition.from.pressureState)} → ${getPressureStateLabel(latestTransition.to.pressureState)}, ${latestTransition.to.date}`;
    sourceAssessment = latestTransition.to;
  } else if (register.id === "stage-changed" && latestStage) {
    reason = `${latestStage.from.verificationStage} → ${latestStage.to.verificationStage}, ${latestStage.to.date}`;
    sourceAssessment = latestStage.to;
  } else if (register.id === "reaffirmed") {
    reason = `${getPressureStateLabel(current.pressureState)} held across ${history.length} assessments · last assessed ${current.date}`;
    sourceAssessment = current;
  } else if (register.id === "single") {
    reason = `1 assessment · since ${current.date}`;
    sourceAssessment = current;
  } else {
    reason = stateReason(current, stateEnteredDate, history);
  }

  const recordedAtOpening = isRecordedAtOpening(record, sourceAssessment);
  if (recordedAtOpening) reason += " (recorded at opening)";
  return {
    record,
    current,
    stateEnteredDate,
    stageReachedDate,
    reason,
    evidenceGapCount: getRecordLegibility(record).evidenceSinceAssessment.length,
    recordedAtOpening,
  };
}

export function getRegisterRows(records, registerId = "full") {
  const register = resolveRegister(registerId);
  return records
    .filter((record) => register.matches(record))
    .map((record) => getRegisterRow(record, register.id))
    .sort((a, b) => b.stateEnteredDate.localeCompare(a.stateEnteredDate) || a.record.id.localeCompare(b.record.id));
}

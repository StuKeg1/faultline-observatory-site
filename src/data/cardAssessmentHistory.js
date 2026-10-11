import { getAssessmentHistory, getCurrentAssessment, getTransitionFeed } from "./derive.js";

/**
 * A compact, display-only assessment-history projection for summary cards.
 * It preserves assessed states and reassessments; it does not assign a
 * trajectory class or store a second history on the record.
 */
export function getCardAssessmentHistory(record) {
  const history = getAssessmentHistory(record);
  const current = getCurrentAssessment(record);
  const states = [];

  for (const assessment of history) {
    const previous = states[states.length - 1];
    if (!previous || previous.pressureState !== assessment.pressureState) {
      states.push({ pressureState: assessment.pressureState, date: assessment.date });
    }
  }

  return {
    assessmentCount: history.length,
    currentDate: current.date,
    states,
    stateChanges: getTransitionFeed(record).length,
    isReaffirmed: history.length > 1 && states.length === 1,
  };
}

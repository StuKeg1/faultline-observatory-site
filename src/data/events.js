/**
 * events.js — Observatory Event corpus index
 *
 * Event JSON files are the canonical source of truth.
 * This module derives the production Event Archive from the
 * events directory. Do not maintain an Event manifest or
 * Archive page by hand.
 */

const modules = import.meta.glob("../../events/**/*.json", { eager: true });

export const ALL_EVENTS = Object.values(modules)
  .map((module) => module.default ?? module)
  .sort((a, b) => {
    const byTimestamp = b.timestamp.localeCompare(a.timestamp);
    if (byTimestamp !== 0) return byTimestamp;
    return b.eventId.localeCompare(a.eventId);
  });

export const EVENT_COUNT = ALL_EVENTS.length;

export function getEventById(eventId) {
  return ALL_EVENTS.find((event) => event.eventId === eventId) ?? null;
}

export function getEventTypeLabel(eventType) {
  const labels = {
    "record-created": "Record Created",
    "assessment-changed": "Assessment Changed",
    "verification-stage-changed": "Verification Stage Changed",
    "programme-created": "Programme Created",
  };

  return labels[eventType] ?? eventType;
}

export function getEventPrimaryLine(event) {
  if (event.eventType === "record-created") return event.claimTitle;
  if (event.eventType === "assessment-changed") return `${event.previousPressureState} → ${event.newPressureState}`;
  if (event.eventType === "verification-stage-changed") return `${event.previousVerificationStage} → ${event.newVerificationStage}`;
  if (event.eventType === "programme-created") return event.programmeName;

  return event.summary;
}

import { getCurrentAssessment } from "./derive.js";
import { getFrontier, recordMatchesFrontier } from "./frontiers.js";
import { isSupportedPressureState } from "./pressureStates.js";

export function getRecordUpdatedDate(record) {
  return record.mutationLog?.[0]?.date ?? record.claim.openedDate;
}

export function applyRecordDirectoryView(records, {
  programme = "all",
  frontier = "all",
  state = "all",
  status = "all",
  sort = "opened-desc",
  query = "",
  getSearchText = () => "",
} = {}) {
  let results = records;

  if (programme !== "all") {
    results = results.filter((record) => record.programme === programme);
  }

  if (frontier !== "all") {
    results = getFrontier(frontier)
      ? results.filter((record) => recordMatchesFrontier(record, frontier))
      : [];
  }

  if (state !== "all") {
    results = isSupportedPressureState(state)
      ? results.filter((record) => getCurrentAssessment(record).pressureState === state)
      : [];
  }

  if (status !== "all") {
    results = results.filter((record) => record.status === status);
  }

  if (query.trim()) {
    const normalizedQuery = query.toLowerCase();
    results = results.filter((record) => getSearchText(record).includes(normalizedQuery));
  }

  return [...results].sort((a, b) => {
    if (sort === "updated") {
      return getRecordUpdatedDate(b).localeCompare(getRecordUpdatedDate(a)) ||
        a.id.localeCompare(b.id);
    }
    if (sort === "opened-asc") {
      return a.claim.openedDate.localeCompare(b.claim.openedDate) || a.id.localeCompare(b.id);
    }
    if (sort === "mutations-desc") {
      return b.mutationLog.length - a.mutationLog.length || a.id.localeCompare(b.id);
    }
    if (sort === "id-asc") return a.id.localeCompare(b.id);
    return b.claim.openedDate.localeCompare(a.claim.openedDate) || a.id.localeCompare(b.id);
  });
}

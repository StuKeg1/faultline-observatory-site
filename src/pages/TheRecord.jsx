import { useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import RecordCard from "../components/RecordCard.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS, PROGRAMMES } from "../data/corpus.js";
import { getCurrentAssessment, getCorpusSummary, getSearchText } from "../data/derive.js";
import "./TheRecord.css";

const PRESSURE_STATES = [
  "assertion", "published", "audit", "replication", "operation", "validated", "contested",
];

export default function TheRecord() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterProgramme = searchParams.get("programme") || "all";
  const filterState = searchParams.get("state") || "all";
  const filterStatus = searchParams.get("status") || "open";
  const sortBy = searchParams.get("sort") || "opened-desc";
  const query = searchParams.get("q") || "";

  // Filter/sort state lives in the URL (not component state) so it survives
  // browser back navigation from a record detail page instead of resetting.
  const updateParam = useCallback(
    (key, value, defaultValue) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (value === defaultValue) next.delete(key);
          else next.set(key, value);
          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  const setFilterProgramme = (v) => updateParam("programme", v, "all");
  const setFilterState = (v) => updateParam("state", v, "all");
  const setFilterStatus = (v) => updateParam("status", v, "open");
  const setSortBy = (v) => updateParam("sort", v, "opened-desc");
  const setQuery = (v) => updateParam("q", v, "");

  const summary = useMemo(() => getCorpusSummary(ALL_RECORDS), []);

  const hasActiveFilters =
    filterProgramme !== "all" || filterState !== "all" || query.trim().length > 0;

  const filtered = useMemo(() => {
    let results = ALL_RECORDS;

    if (filterProgramme !== "all")
      results = results.filter((r) => r.programme === filterProgramme);

    if (filterState !== "all")
      results = results.filter(
        (r) => getCurrentAssessment(r).pressureState === filterState
      );

    if (filterStatus !== "all")
      results = results.filter((r) => r.status === filterStatus);

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter((r) => getSearchText(r, PROGRAMMES).includes(q));
    }

    // Sort
    results = [...results].sort((a, b) => {
      if (sortBy === "opened-desc")
        return b.claim.openedDate.localeCompare(a.claim.openedDate);
      if (sortBy === "opened-asc")
        return a.claim.openedDate.localeCompare(b.claim.openedDate);
      if (sortBy === "mutations-desc")
        return b.mutationLog.length - a.mutationLog.length;
      if (sortBy === "id-asc") return a.id.localeCompare(b.id);
      return 0;
    });

    return results;
  }, [filterProgramme, filterState, filterStatus, sortBy, query]);

  const resultLabel = (() => {
    if (hasActiveFilters) {
      return `Showing ${filtered.length} matching records`;
    }

    if (filterStatus === "all") {
      return `Showing ${filtered.length} records`;
    }

    if (filterStatus === "open") {
      return `Showing ${filtered.length} open records`;
    }

    return `Showing ${filtered.length} closed records`;
  })();

  return (
    <>
      <PageMeta
        title="The Frontier Record"
        description="The complete archive of Frontier Records — structured assessments of scientific and technology claims tracked under evidence over time. Quantum computing, artificial intelligence, materials science, biotechnology."
        path="/the-record/"
      />
      <div className="the-record-page">
        {/* Page header */}
        <header className="tr-header">
          <div className="tr-header-inner">
            <div className="tr-title-block">
              <div className="tr-eyebrow">Faultline Observatory</div>
              <h1 className="tr-title">The Frontier Record</h1>
              <p className="tr-subtitle">
                A permanent public ledger of frontier claims and the evidence that has tested them.
              </p>
            </div>
            <div className="tr-summary-block" aria-label="Corpus statistics">
              <div className="tr-stat">
                <span className="tr-stat-n">{summary.totalRecords}</span>
                <span className="tr-stat-lbl">Records</span>
              </div>
              <div className="tr-stat">
                <span className="tr-stat-n">{summary.programmeCount}</span>
                <span className="tr-stat-lbl">Programmes</span>
              </div>
              <div className="tr-stat">
                <span className="tr-stat-n">{summary.totalAssessments}</span>
                <span className="tr-stat-lbl">Assessments</span>
              </div>
            </div>
          </div>
        </header>

        {/* Filter / sort bar */}
        <div className="tr-controls" role="search" aria-label="Filter and sort records">
          <div className="tr-controls-inner">
            <input
              className="tr-search"
              type="search"
              placeholder="Search by claim, record ID, instance, or programme…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search records"
            />
            <div className="tr-filters">
              <label className="tr-filter-label">
                Programme
                <select
                  value={filterProgramme}
                  onChange={(e) => setFilterProgramme(e.target.value)}
                  aria-label="Filter by programme"
                >
                  <option value="all">All programmes</option>
                  {PROGRAMMES.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </label>

              <label className="tr-filter-label">
                State
                <select
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                  aria-label="Filter by pressure state"
                >
                  <option value="all">All states</option>
                  {PRESSURE_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="tr-filter-label">
                Status
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  aria-label="Filter by record status"
                >
                  <option value="all">All records</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </label>

              <label className="tr-filter-label">
                Sort
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort records"
                >
                  <option value="opened-desc">Opened — newest first</option>
                  <option value="opened-asc">Opened — oldest first</option>
                  <option value="mutations-desc">Most mutations</option>
                  <option value="id-asc">Record ID</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="tr-results-bar">
          <div className="tr-results-inner">
            <span className="tr-results-count">{resultLabel}</span>
            {(filterProgramme !== "all" || filterState !== "all" || query) && (
              <button
                className="tr-clear-filters"
                onClick={() => setSearchParams(new URLSearchParams(), { replace: true })}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Record list */}
        <main className="tr-main" aria-label="Record archive">
          <div className="tr-main-inner">
            {filtered.length === 0 ? (
              <div className="tr-empty">
                No records match these filters.
              </div>
            ) : (
              <div className="tr-record-list">
                {filtered.map((record) => (
                  <RecordCard key={record.id} record={record} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

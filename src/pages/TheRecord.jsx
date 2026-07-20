import { useMemo, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import RecordCard from "../components/RecordCard.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS, PROGRAMMES } from "../data/corpus.js";
import { getCorpusSummary, getSearchText } from "../data/derive.js";
import { FRONTIERS } from "../data/frontiers.js";
import { PRESSURE_STATE_FILTERS } from "../data/pressureStates.js";
import { applyRecordDirectoryView } from "../data/recordDirectory.js";
import "./TheRecord.css";

export default function TheRecord() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterProgramme = searchParams.get("programme") || "all";
  const filterFrontier = searchParams.get("frontier") || "all";
  const filterState = searchParams.get("state") || "all";
  const filterStatus = searchParams.get("status") || "all";
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
  const setFilterFrontier = (v) => updateParam("frontier", v, "all");
  const setFilterState = (v) => updateParam("state", v, "all");
  const setFilterStatus = (v) => updateParam("status", v, "all");
  const setSortBy = (v) => updateParam("sort", v, "opened-desc");
  const setQuery = (v) => updateParam("q", v, "");

  const summary = useMemo(() => getCorpusSummary(ALL_RECORDS), []);

  const hasActiveFilters =
    filterProgramme !== "all" || filterFrontier !== "all" ||
    filterState !== "all" || filterStatus !== "all" || query.trim().length > 0;

  const filtered = useMemo(() => {
    return applyRecordDirectoryView(ALL_RECORDS, {
      programme: filterProgramme,
      frontier: filterFrontier,
      state: filterState,
      status: filterStatus,
      sort: sortBy,
      query,
      getSearchText: (record) => getSearchText(record, PROGRAMMES),
    });
  }, [filterProgramme, filterFrontier, filterState, filterStatus, sortBy, query]);

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
        title="Records Directory"
        description="The complete archive of Frontier Records — structured assessments of scientific and technology claims tracked under evidence over time. Quantum computing, artificial intelligence, materials science, biotechnology."
        path="/the-record/"
      />
      <div className="the-record-page">
        {/* Page header */}
        <header className="tr-header">
          <div className="tr-header-inner">
            <div className="tr-title-block">
              <div className="tr-eyebrow">Faultline Observatory</div>
              <h1 className="tr-title">Records Directory</h1>
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
                Frontier
                <select
                  value={filterFrontier}
                  onChange={(e) => setFilterFrontier(e.target.value)}
                  aria-label="Filter by frontier"
                >
                  <option value="all">All frontiers</option>
                  {FRONTIERS.map((frontier) => (
                    <option key={frontier.slug} value={frontier.slug}>{frontier.label}</option>
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
                  {PRESSURE_STATE_FILTERS.map(({ value, label, legacy }) => (
                    <option key={value} value={value}>
                      {label}{legacy ? " (legacy)" : ""}
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
                  <option value="updated">Updated — newest first</option>
                  <option value="opened-asc">Opened — oldest first</option>
                  <option value="mutations-desc">Most mutations</option>
                  <option value="id-asc">Record ID</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <section className="tr-trajectory-entry" aria-labelledby="tr-trajectory-entry-title">
          <div className="tr-trajectory-entry-inner">
            <div>
              <div className="tr-eyebrow">Evidence Trajectories</div>
              <h2 id="tr-trajectory-entry-title">Read the record over time</h2>
              <p>
                The Record shows what the Observatory holds. Evidence Trajectories shows how its judgement got there.
              </p>
            </div>
            <Link to="/evidence-trajectories/" className="tr-trajectory-link">
              Open Evidence Trajectories
            </Link>
          </div>
        </section>
        {/* Results count */}
        <div className="tr-results-bar">
          <div className="tr-results-inner">
            <span className="tr-results-count">{resultLabel}</span>
            {hasActiveFilters && (
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

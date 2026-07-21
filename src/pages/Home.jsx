import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS } from "../data/corpus.js";
import { getCorpusSummary } from "../data/derive.js";
import { HOME_QUESTIONS, resolveHomeQuestion } from "./homeQuestions.js";
import "./Home.css";

// ─── HOMEPAGE vNEXT ──────────────────────────────────────────
// Homepage vNext Architecture & Implementation Specification v1.0
// (21 July 2026). Route role: question-first routing layer.
// Home → Question → Record → Explore.
//
<<<<<<< HEAD
// This page intentionally does not reproduce institutional
// introduction, the Programme catalogue, full corpus statistics or
// Latest Developments — those now belong to /public-record/. See the
// spec's Phase 1 audit and §4.3 "Stop consuming on Home".
//
// Locked-copy exception (2026-07-21, operator decision): the hero's
// required copy is fixed by spec §2.3 Section 2 / §4.2 E-01 to the
// identity statement and CTA only, with no institutional explanation.
// The operator explicitly requested a single bridging sentence between
// them, declining to restore the full three-paragraph "Opening"
// narrative the Phase 1 audit identifies as superseded. This is
// the E-01 "explicit editorial review approves a replacement" case,
// not a reversal of the architecture decision — the long-form
// explanation stays off the homepage.
=======
// This page intentionally does not reproduce institutional
// introduction, the Programme catalogue, full corpus statistics or
// Latest Developments — those now belong to /public-record/. See the
// spec's Phase 1 audit and §4.3 "Stop consuming on Home".
//
// Locked-copy exception (2026-07-21, operator decision): the hero's
// required copy is fixed by spec §2.3 Section 2 / §4.2 E-01 to the
// identity statement and CTA only, with no institutional explanation.
// The operator explicitly requested a single bridging sentence between
// them, declining to restore the full three-paragraph "Opening"
// narrative the spec's Phase 1 audit identifies as superseded. This is
// the E-01 "explicit editorial review approves a replacement" case,
// not a reversal of the architecture decision — the long-form
// explanation stays off the homepage.
>>>>>>> 33e2bd2 (Homepage vNext: question-first architecture (spec v1.0, 21 Jul 2026))

// ─── LOCAL ICONS ─────────────────────────────────────────────
// Illustrative navigation aids only — controlled local SVGs, single
// neutral colour throughout. Icons never encode evidence quality,
// pressure state, programme status or institutional preference
// through colour; giving each card a different hue would imply a
// ranking this page does not make. All icons are aria-hidden.

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

function IconQuantum() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  );
}

function IconBiopsy() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9 3h6" />
      <path d="M9 3v10.5a3 3 0 0 0 6 0V3" />
      <path d="M9 12.5h6" />
    </svg>
  );
}

function IconSuperconductor() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12.5 2 5 14h5l-1.5 8 8-13h-5z" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="6" cy="7" r="1.6" />
      <circle cx="18" cy="7" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="6" cy="17" r="1.6" />
      <circle cx="18" cy="17" r="1.6" />
      <path d="M7.3 8.1 10.7 11" />
      <path d="M16.7 8.1 13.3 11" />
      <path d="M10.7 13 7.3 15.9" />
      <path d="M13.3 13 16.7 15.9" />
    </svg>
  );
}

function IconResolving() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M6 2h12" />
      <path d="M6 22h12" />
      <path d="M8 2c0 4.5 2 6.5 4 8 2-1.5 4-3.5 4-8" />
      <path d="M8 22c0-4.5 2-6.5 4-8 2 1.5 4 3.5 4 8" />
    </svg>
  );
}

function IconExplore() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-4.2 1.8L9 15l4.2-1.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M7 2h7l4 4v16H7Z" />
      <path d="M14 2v4h4" />
      <path d="M9.5 12.5h5" />
      <path d="M9.5 16h5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 2.5 19.5 5.5v6c0 5-3.2 8.3-7.5 10-4.3-1.7-7.5-5-7.5-10v-6Z" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg {...ICON_PROPS} width="16" height="16">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const QUESTION_ICONS = {
  quantum: IconQuantum,
  biopsy: IconBiopsy,
  superconductor: IconSuperconductor,
  ai: IconAI,
  resolving: IconResolving,
  explore: IconExplore,
};

// ─── HOME ────────────────────────────────────────────────────
export default function Home() {
  const totalRecords = useMemo(
    () => getCorpusSummary(ALL_RECORDS).totalRecords,
    []
  );

  const questions = useMemo(
    () =>
      HOME_QUESTIONS.map((entry) => ({
        ...entry,
        resolved: resolveHomeQuestion(entry),
      })),
    []
  );

  const headlineRef = useRef(null);
  const [headlineWidth, setHeadlineWidth] = useState(null);

  useLayoutEffect(() => {
    const node = headlineRef.current;
    if (!node) return undefined;

    function updateHeadlineWidth() {
      const width = Math.round(node.getBoundingClientRect().width);
      setHeadlineWidth(width);
    }

    updateHeadlineWidth();

    let observer;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateHeadlineWidth);
      observer.observe(node);
    }

    window.addEventListener("resize", updateHeadlineWidth);
    return () => {
      window.removeEventListener("resize", updateHeadlineWidth);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
            <PageMeta
        title={null}
        description="Explore the current evidence behind tracked technology claims. Start with a question, open the canonical Frontier Record, and follow how the evidence has changed."
        path="/"
            />
      <main className="home-page">

        {/* ── HERO ── */}
        <section className="home-hero" aria-label="The Public Record of Technology Claims">
          <div className="home-hero-inner">

            <div
              className="home-hero-identity"
              style={headlineWidth ? { "--home-hero-headline-width": `${headlineWidth}px` } : undefined}
            >
              <h1 ref={headlineRef} className="home-hero-headline">
                The Public Record of Technology Claims.{" "}
                <span className="home-hero-headline-accent">
                  Tracked until the evidence decides.
                </span>
              </h1>
              <p className="home-hero-bridge">
                Every week, researchers, laboratories and technology companies
                announce breakthroughs that promise to reshape the future.
                Some claims become enduring scientific milestones. Others
                evolve, fragment, or quietly disappear. Faultline Observatory
                preserves the public history of those claims — from
                announcement to resolution, with all evidence visible.
              </p>
            </div>

            <aside className="home-trust-card" aria-label="Evidence practice">
              <div className="htc-block">
                <span className="htc-icon"><IconShield /></span>
                <div className="htc-block-copy">
                  <div className="htc-block-title">Evidence first</div>
                  <p className="htc-block-text">We follow the evidence, wherever it leads.</p>
                </div>
              </div>
              <div className="htc-divider" aria-hidden="true" />
              <div className="htc-block htc-block--stat">
                <span className="htc-stat-value">{totalRecords}</span>
                <div className="htc-block-copy">
                  <div className="htc-block-title">Frontier Records tracked</div>
                  <p className="htc-block-text">
                    Append-only · Dated evidence
                    <br />
                    Transparent corrections
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </section>

        {/* ── START WITH A QUESTION ── */}
        {/* Section heading (2026-07-21, operator decision): carries the
            "Choose a question below..." CTA that previously lived in the
            hero, instead of the eyebrow label "Start with a question" —
            removes duplicated instruction copy between the two sections.
            Same locked sentence from spec §2.3 Section 2, relocated, not
            rewritten. */}
        <section className="home-questions" aria-labelledby="home-questions-heading">
          <div className="home-questions-inner">
            <h2 className="home-questions-heading" id="home-questions-heading">
              Choose a question below to explore the current evidence.
            </h2>

            <ul className="home-question-grid" role="list">
              {questions.map(({ id, icon, question, target, resolved }) => {
                const Icon = QUESTION_ICONS[icon];
                const isFallback = target.type === "public-record";
                return (
                  <li key={id} className="home-question-item">
                    <Link
                      to={resolved.url}
                      className={
                        isFallback
                          ? "home-question-card home-question-card--fallback"
                          : "home-question-card"
                      }
                      aria-label={question}
                    >
                      <span className="hqc-icon">{Icon ? <Icon /> : null}</span>
                      <h3 className="hqc-question">{question}</h3>
                      <div className="hqc-foot">
                        <span className="hqc-meta">{resolved.meta}</span>
                        <span className="hqc-arrow" aria-hidden="true">→</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ── NOT YET TRACKED? ── */}
        <section className="home-untracked" aria-labelledby="home-untracked-heading">
          <div className="home-untracked-inner">
            <span className="hu-icon"><IconDocument /></span>
            <div className="hu-copy">
              <div className="hu-title" id="home-untracked-heading">Not yet tracked?</div>
              <p className="hu-text">
                If you&apos;ve heard a technology claim that isn&apos;t here, see what
                qualifies for a Frontier Record and how claims enter the Observatory.
              </p>
            </div>
            <Link to="/welcome/" className="hu-cta">
              How claims become records →
            </Link>
          </div>
        </section>

        {/* ── TRANSPARENCY STATEMENT ── */}
        <div className="home-transparency">
          <div className="home-transparency-inner">
            <span className="ht-icon"><IconInfo /></span>
            <p className="ht-text">
              Every record is public. Sources, methods and changes remain visible.
            </p>
          </div>
        </div>

  </main>
      <SiteFooter />
    </>
  );
}

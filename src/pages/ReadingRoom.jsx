import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { ALL_NOTES, getNoteUrl } from "../data/notes.js";
import { PROGRAMME_NOTES } from "../data/programmeNotes.js";
import { LANDSCAPE_ESSAYS } from "../data/landscapeEssays.js";
import "./Institutional.css";

const SECTIONS = [
  {
    title: "Programme Notes",
    description: "Corpus-grounded accounts of what the records within a programme currently show.",
    items: PROGRAMME_NOTES,
  },
  {
    title: "Landscape Essays",
    description: "Interpretive essays that begin where the programme record ends, without introducing new evidence.",
    items: LANDSCAPE_ESSAYS,
  },
  {
    title: "Institutional Notes",
    description: "Published records about the Observatory's origins, evidence practice and institutional development.",
    items: ALL_NOTES.filter(({ status }) => status === "published"),
  },
];

export default function ReadingRoom() {
  return (
    <>
      <PageMeta
        title="Reading Room"
        description="Long-form editorial and institutional interpretation from Faultline Observatory."
        path="/reading-room/"
      />
      <div className="inst-page">
        <header className="inst-header">
          <div className="inst-header-inner">
            <div className="inst-eyebrow">Faultline Observatory</div>
            <h1 className="inst-title">Reading Room</h1>
          </div>
        </header>
        <main className="inst-body">
          <div className="inst-body-inner">
            <p className="inst-intro">Long-form editorial and institutional interpretation, kept distinct from the evidentiary record it reads.</p>
            <div className="inst-about-sections">
              {SECTIONS.map((section) => (
                <section className="inst-about-block" key={section.title}>
                  <h2 className="inst-about-heading">{section.title}</h2>
                  <p className="inst-about-body">{section.description}</p>
                  <div className="inst-prog-list">
                    {section.items.map((item) => (
                      <Link className="inst-prog-row inst-prog-row--filled" to={getNoteUrl(item)} key={item.id}>
                        <div className="inst-prog-row__id">{item.id} · {item.date}</div>
                        <div className="inst-prog-row__name">{item.title}</div>
                        <div className="inst-prog-row__desc">{item.summary}</div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

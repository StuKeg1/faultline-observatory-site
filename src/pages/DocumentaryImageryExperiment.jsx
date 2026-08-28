import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { LE_AI_001 } from "../data/notes/LE-AI-001.js";
import { LE_QE_001 } from "../data/notes/LE-QE-001.js";
import { PN_QE_001 } from "../data/notes/PN-QE-001.js";
import "./DocumentaryImageryExperiment.css";

const CASES = [
  {
    label: "Case A · documentary hardware",
    note: LE_QE_001,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IBM_Q_system_(Fraunhofer_2).jpg?width=1200",
    alt: "IBM Quantum System One installation at Fraunhofer",
    credit: "IBM Research · CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:IBM_Q_system_(Fraunhofer_2).jpg",
    rationale: "A physical engineering subject with an authentic, directly recognisable laboratory system.",
  },
  {
    label: "Case B · scientific object",
    note: PN_QE_001,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sycamore_Quantum_Chip.jpg?width=1200",
    alt: "Google Sycamore quantum processor chip",
    credit: "Google Quantum AI · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Sycamore_Quantum_Chip.jpg",
    rationale: "A close scientific object: visually specific, but more likely to be mistaken for evidence about the programme claim.",
  },
  {
    label: "Case C · abstract AI subject",
    note: LE_AI_001,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/CSIRO_ScienceImage_11313_The_CSIRO_GPU_cluster_at_the_data_centre.jpg?width=1200",
    alt: "CSIRO GPU cluster in a data centre",
    credit: "CSIRO · CC BY 3.0",
    source: "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_11313_The_CSIRO_GPU_cluster_at_the_data_centre.jpg",
    rationale: "Authentic compute infrastructure, deliberately testing whether a real photograph becomes generic when the intellectual subject is abstract.",
  },
];

function Copy({ note }) {
  return <>
    <div className="vd2-meta">{note.id} · {note.programme} · {note.date}</div>
    <h3>{note.title}</h3>
    <p>{note.summary}</p>
    <div className="vd2-action">Read publication →</div>
  </>;
}

function Current({ note }) {
  return <article className="vd2-current"><Copy note={note} /></article>;
}

function Attribution({ item }) {
  return <div className="vd2-credit">Image: <a href={item.source} target="_blank" rel="noreferrer">{item.credit}</a> · contextual only, not evidence</div>;
}

function VariantA({ item }) {
  return <article className="vd2-card vd2-card--a">
    <img src={item.image} alt={item.alt} loading="lazy" />
    <Attribution item={item} />
    <div className="vd2-copy"><Copy note={item.note} /></div>
  </article>;
}

function VariantB({ item }) {
  return <article className="vd2-card vd2-card--b">
    <div className="vd2-image-wrap">
      <img src={item.image} alt={item.alt} loading="lazy" />
      <div className="vd2-image-label">Reading Room · {item.note.programme}</div>
    </div>
    <div className="vd2-copy"><Copy note={item.note} /></div>
    <Attribution item={item} />
  </article>;
}

function Set({ item, mobile = false }) {
  return <div className={mobile ? "vd2-set vd2-set--mobile" : "vd2-set"}>
    <div><div className="vd2-variant-label">Current</div><Current note={item.note} /></div>
    <div><div className="vd2-variant-label">Variant A · documentary card</div><VariantA item={item} /></div>
    <div><div className="vd2-variant-label">Variant B · integrated editorial</div><VariantB item={item} /></div>
  </div>;
}

export default function DocumentaryImageryExperiment() {
  return <>
    <PageMeta title="VD-002 · Documentary Imagery" description="Bounded visual experiment testing authentic scientific imagery on Reading Room discovery cards." path="/experiments/vd-002/" noindex />
    <main className="vd2-page">
      <header className="vd2-header">
        <div className="vd2-eyebrow">VD-002 · bounded experiment · no production surface</div>
        <h1>Documentary imagery</h1>
        <p>Can authentic scientific imagery make the Reading Room easier to explore without weakening institutional character or being mistaken for evidence? The same publication copy is held constant across Current, Variant A and Variant B.</p>
        <div className="vd2-rule">REAL / ATTRIBUTED / REUSABLE · NO STOCK · NO GENERATED ART · CONTEXTUAL ONLY</div>
      </header>
      {CASES.map((item) => <section className="vd2-case" key={item.note.id}>
        <div className="vd2-case-head"><div><div className="vd2-eyebrow">{item.label}</div><h2>{item.note.title}</h2></div><p>{item.rationale}</p></div>
        <div className="vd2-breakpoint">Desktop comparison</div>
        <Set item={item} />
        <div className="vd2-breakpoint">390px mobile comparison</div>
        <Set item={item} mobile />
      </section>)}
      <section className="vd2-gates">
        <div className="vd2-eyebrow">VD-002 decision frame</div><h2>Acceptance gates</h2>
        <dl>
          <div><dt>G1 · Visual utility</dt><dd>Improves recognition or browsing, not merely decoration.</dd></div>
          <div><dt>G2 · Institutional character</dt><dd>Still reads as Faultline, not a science magazine.</dd></div>
          <div><dt>G3 · Evidentiary clarity</dt><dd>Image cannot reasonably be mistaken for supporting evidence.</dd></div>
          <div><dt>G4 · Provenance</dt><dd>Authentic, attributable and reusable source.</dd></div>
          <div><dt>G5 · Generalisability</dt><dd>Survives physical, scientific-object and abstract subjects.</dd></div>
          <div><dt>G6 · Mobile economy</dt><dd>Image earns the screen area it consumes at 390px.</dd></div>
          <div><dt>G7 · Sustainability</dt><dd>Sourcing and attribution remain operationally realistic.</dd></div>
        </dl>
      </section>
    </main>
    <SiteFooter />
  </>;
}
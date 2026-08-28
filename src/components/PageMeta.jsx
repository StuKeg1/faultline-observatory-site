import { Helmet } from "react-helmet-async";

const SITE_NAME = "Faultline Observatory";
const BASE_URL  = "https://faultlinewatch.com";
const DEFAULT_DESC =
  "Custodian of The Frontier Record. A permanent public record of frontier claims " +
  "and how evidence changes their assessment over time.";

/**
 * PageMeta — sets <title>, <meta description>, and <link rel="canonical">
 * per route. Wrap every page with this component.
 *
 * Usage:
 *   <PageMeta
 *     title="Quantum Advantage — FR-QE-0001"
 *     description="..."
 *     path="/the-record/fr-qe-0001/"
 *   />
 *
 * Set noindex for deliberately non-discoverable experiment/preview routes.
 */
export default function PageMeta({ title, description, path, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description || DEFAULT_DESC;
  const canonical = path ? `${BASE_URL}${path}` : BASE_URL;
  const usesStaticHomepageMeta = path === "/";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {!usesStaticHomepageMeta && <meta name="description" content={desc} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      {/* Flat children only. react-helmet-async's React 19 dispatcher maps
          Helmet's direct children into title/meta/link props; a nested
          Fragment is not traversed, so tags wrapped in <>...</> were being
          silently dropped from both the SSR output and the live DOM. */}
      {!usesStaticHomepageMeta && <meta property="og:title" content={fullTitle} />}
      {!usesStaticHomepageMeta && <meta property="og:description" content={desc} />}
      {!usesStaticHomepageMeta && <meta property="og:url" content={canonical} />}
      {!usesStaticHomepageMeta && <meta name="twitter:title" content={fullTitle} />}
      {!usesStaticHomepageMeta && <meta name="twitter:description" content={desc} />}
    </Helmet>
  );
}

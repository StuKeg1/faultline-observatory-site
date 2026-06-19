import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop — resets scroll position to top on every route change.
 *
 * React Router does not reset scroll position automatically. Without
 * this, navigating via footer links (or any in-app link) preserves the
 * scroll offset from the previous page, landing the visitor mid-page
 * on the new route instead of at the top.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

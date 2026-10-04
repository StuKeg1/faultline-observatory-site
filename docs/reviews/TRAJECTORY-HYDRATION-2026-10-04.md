# Evidence Trajectories hydration follow-up

Scope: the Outstanding Work Queue item raised during FR-AM-0008 admission. Direct record and lens URLs must apply selected attributes after hydration of the queryless prerender. Record data, assessment stages, routing and CSS are outside scope.

Manifest: complete replacement of `src/pages/EvidenceTrajectories.jsx`; this execution receipt. No dependency or infrastructure changes. After deployment, verify direct record/lens links, selection navigation and structural baseline records; remove only completed work from the Outstanding Work Queue and record shipped history in the Release Archive. Small-screen verification remains open unless an actual 375px viewport is available.

Implementation: use React's server/client snapshot contract so the first hydration render agrees with the queryless prerender, then apply the browser search parameters. React can then update selected classes and accessibility attributes rather than retaining mismatched server attributes.

Validation: lint passed with one pre-existing Fast Refresh warning; 127 tests passed before and after the production build; canonical validation and dependency coherence passed; 62 pages prerendered; MCP typecheck passed. Browser regression and exact-SHA live verification remain pending.

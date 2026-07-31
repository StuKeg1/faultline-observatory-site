/**
 * entry-server.jsx — server-side render entry for build-time static generation.
 *
 * Renders the SAME component tree the browser renders (AppShell from App.jsx),
 * differing only in the router: StaticRouter here, BrowserRouter in main.jsx.
 * There is no second route table and no second copy of record content.
 *
 * Streaming note: renderToPipeableStream is used with onAllReady, not
 * onShellReady. onAllReady waits for every Suspense boundary — which is how
 * the lazy() route chunks in App.jsx resolve — and emits complete, in-order
 * HTML with no <template>/inline-script boundary shuffling. That is what makes
 * the output readable with JavaScript disabled.
 */
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { AppShell } from "./App.jsx";

const RENDER_TIMEOUT_MS = 20000;

function collect() {
  const decoder = new TextDecoder("utf-8");
  let text = "";
  return {
    writable: new Writable({
      write(chunk, _encoding, callback) {
        text += decoder.decode(chunk, { stream: true });
        callback();
      },
      final(callback) {
        text += decoder.decode();
        callback();
      },
    }),
    text: () => text,
  };
}

/**
 * @param {string} url  canonical pathname, e.g. "/the-record/fr-qe-0001/"
 * @returns {Promise<{ html: string, helmet: object }>}
 */
export function render(url) {
  const helmetContext = {};
  const sink = collect();

  return new Promise((resolve, reject) => {
    let settled = false;
    const fail = (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    };

    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          sink.writable.on("finish", () => {
            if (settled) return;
            settled = true;
            resolve({ html: sink.text(), helmet: helmetContext.helmet });
          });
          pipe(sink.writable);
        },
        onError(error) {
          fail(error);
        },
      }
    );

    const timer = setTimeout(() => {
      abort();
      fail(new Error(`Render timed out after ${RENDER_TIMEOUT_MS}ms`));
    }, RENDER_TIMEOUT_MS);
    timer.unref?.();
  });
}

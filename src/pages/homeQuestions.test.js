import assert from "node:assert/strict";
import test from "node:test";
import { ALL_RECORDS } from "../data/corpus.js";
import { ALL_NOTES } from "../data/notes.js";
import { PROGRAMME_NOTES } from "../data/programmeNotes.js";
import {
  HOME_QUESTIONS,
  resolveHomeQuestion,
  assertValidHomeQuestions,
} from "./homeQuestions.js";

test("the configuration contains exactly six entries with unique ids", () => {
  assert.equal(HOME_QUESTIONS.length, 6);
  const ids = new Set(HOME_QUESTIONS.map((entry) => entry.id));
  assert.equal(ids.size, 6);
});

test("the full configuration validates against live canonical data", () => {
  assert.doesNotThrow(() => assertValidHomeQuestions(HOME_QUESTIONS));
});

test("record targets resolve to a real corpus record and a derived URL/date", () => {
  const recordEntries = HOME_QUESTIONS.filter((entry) => entry.target.type === "record");
  assert.ok(recordEntries.length >= 3);

  for (const entry of recordEntries) {
    const record = ALL_RECORDS.find((r) => r.id === entry.target.id);
    assert.ok(record, `expected ${entry.target.id} to exist in ALL_RECORDS`);

    const resolved = resolveHomeQuestion(entry);
    assert.equal(resolved.url, `/the-record/${entry.target.id.toLowerCase()}/`);
    assert.match(resolved.meta, new RegExp(`^${entry.target.id} · Updated `));
    assert.equal(resolved.destinationLabel, "Frontier Record");
  }
});

test("LK-99 is carried by FR-AM-0005, never FR-AM-0001", () => {
  const superconductorEntry = HOME_QUESTIONS.find(
    (entry) => entry.id === "room-temperature-superconductors"
  );
  assert.ok(superconductorEntry);
  assert.equal(superconductorEntry.target.id, "FR-AM-0005");
  assert.notEqual(superconductorEntry.target.id, "FR-AM-0001");
});

test("the AI question resolves through PROGRAMME_NOTES, not ALL_NOTES, and is labelled Reading Room", () => {
  const aiEntry = HOME_QUESTIONS.find((entry) => entry.id === "ai-evidence-current-state");
  assert.ok(aiEntry);
  assert.equal(aiEntry.target.type, "note");

  // PN-AI-001 must NOT live in ALL_NOTES — confirms the corrected lookup
  // path is actually necessary, not a defensive no-op.
  assert.equal(ALL_NOTES.some((note) => note.id === aiEntry.target.id), false);
  assert.ok(PROGRAMME_NOTES.some((note) => note.id === aiEntry.target.id));

  const resolved = resolveHomeQuestion(aiEntry);
  assert.equal(resolved.url, "/notes/pn-ai-001/");
  assert.equal(resolved.meta, "PN-AI-001 · Reading Room");
  assert.equal(resolved.destinationLabel, "Reading Room");
});

test("the resolving-claims question uses a supported pressure state and a real Directory filter", () => {
  const resolvingEntry = HOME_QUESTIONS.find(
    (entry) => entry.id === "claims-approaching-resolution"
  );
  assert.ok(resolvingEntry);
  assert.equal(resolvingEntry.target.type, "directory-filter");
  assert.deepEqual(resolvingEntry.target.params, { state: "resolving" });

  const resolved = resolveHomeQuestion(resolvingEntry);
  assert.equal(resolved.url, "/the-record/?state=resolving");
  assert.equal(resolved.meta, "Records Directory · Resolving");
});

test("an unrecognised directory filter parameter is rejected", () => {
  assert.throws(() =>
    resolveHomeQuestion({
      id: "bad-filter",
      target: { type: "directory-filter", params: { madeUpParam: "x" } },
    })
  );
});

test("an unsupported pressure state value is rejected", () => {
  assert.throws(() =>
    resolveHomeQuestion({
      id: "bad-state",
      target: { type: "directory-filter", params: { state: "not-a-real-state" } },
    })
  );
});

test("the fallback question routes to the Public Record hub", () => {
  const fallbackEntry = HOME_QUESTIONS.find((entry) => entry.id === "something-else");
  assert.ok(fallbackEntry);
  assert.equal(fallbackEntry.target.type, "public-record");
  assert.equal(resolveHomeQuestion(fallbackEntry).url, "/public-record/");
});

test("a missing record reference throws rather than silently falling through", () => {
  assert.throws(() =>
    resolveHomeQuestion({
      id: "not-real",
      target: { type: "record", id: "FR-ZZ-9999" },
    })
  );
});

test("a missing note reference throws rather than silently falling through", () => {
  assert.throws(() =>
    resolveHomeQuestion({
      id: "not-real",
      target: { type: "note", id: "PN-ZZ-9999" },
    })
  );
});

test("duplicate entry ids are rejected", () => {
  const duplicated = [...HOME_QUESTIONS.slice(0, 5), { ...HOME_QUESTIONS[0] }];
  assert.throws(() => assertValidHomeQuestions(duplicated));
});

test("a configuration without exactly six entries is rejected", () => {
  assert.throws(() => assertValidHomeQuestions(HOME_QUESTIONS.slice(0, 5)));
});

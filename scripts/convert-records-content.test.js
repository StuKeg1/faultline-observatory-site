import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

test('HTML ingestion preserves complete mechanism and lineage text beyond legacy cutoffs', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'faultline-content-'));
  try {
    const input = join(dir, 'input');
    const output = join(dir, 'output');
    mkdirSync(input);
    mkdirSync(output);
    writeFileSync(join(output, 'package.json'), '{"type":"module"}');
    const mechanism = 'A source-backed condition with an explicit boundary. '.repeat(14) +
      'The final condition requires independent replication & complete measurement.';
    const lineage = 'Historical evidence must retain its stated limitations. '.repeat(10) +
      'This event did not establish operational performance.';
    const html = `<div class="record-id">FR-AI-0999</div><span>PROG-AI</span>
      <div class="record-title">Ingestion fixture</div><div class="claim-text">A bounded test claim.</div>
      <div class="assessment-block"><div class="assess-meta">ASSESSMENT-001 ISSUED: 2026-09-06 VS-02</div>
      <div class="assess-text">Published evidence remains bounded.</div></div>
      <div class="mech-block"><div class="mech-id">AT-001</div>
      <div class="mech-type">ATTRACTOR</div><div class="mech-text">${mechanism.replace('&', '&amp;')}</div></div>
      <div class="lineage-item"><div class="lin-year">2026</div><div class="lin-text">${lineage}</div></div>`;
    writeFileSync(join(input, 'FR_AI_0999_fixture.html'), html);
    execFileSync(process.execPath, [resolve('convert-records.js'), input, output], { encoding: 'utf8' });
    const { FR_AI_0999: record } = await import(pathToFileURL(join(output, 'FR-AI-0999.js')).href);
    assert.equal(record.mechanisms[0].description, mechanism);
    assert.equal(record.lineage.items[0].text, lineage);
    assert.equal(record.mechanisms[0].id, 'AT-001');
    assert.equal(record.mechanisms[0].type, 'ATTRACTOR');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

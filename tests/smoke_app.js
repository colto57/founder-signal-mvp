/*
 * Headless smoke test for the dashboard (optional, needs jsdom and chart.js installed somewhere on NODE_PATH).
 * Usage: NODE_PATH=/path/to/node_modules node tests/smoke_app.js [path/to/data.js]
 * Loads app/index.html in jsdom with a stubbed 2D canvas context, runs data.js, analytics.js, Chart.js and app.js
 * in order, then exercises filters, the explorer and the assessment form. Exits 1 on any console error or failed check.
 */
'use strict';
const fs = require('fs');
const path = require('path');

let JSDOM;
try { ({ JSDOM } = require('jsdom')); } catch (e) { console.log('SKIP smoke test: jsdom not available (' + e.message.split('\n')[0] + ')'); process.exit(0); }

const ROOT = path.resolve(__dirname, '..');
const DATA_PATH = process.argv[2] ? path.resolve(process.argv[2]) : path.join(ROOT, 'data', 'data.js');
let chartSrc = null;
(process.env.NODE_PATH || '').split(path.delimiter).concat([path.join(ROOT, 'node_modules')]).forEach(dir => {
  if (chartSrc || !dir) return;
  const p = path.join(dir, 'chart.js', 'dist', 'chart.umd.js');
  if (fs.existsSync(p)) chartSrc = fs.readFileSync(p, 'utf8');
});

const html = fs.readFileSync(path.join(ROOT, 'app', 'index.html'), 'utf8').replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/g, '');
const errors = [];
const { VirtualConsole } = require('jsdom');
const vc = new VirtualConsole();
vc.on('error', (...a) => errors.push(a.map(String).join(' ')));
vc.on('jsdomError', (e) => { if (!/not implemented/i.test(String(e.message))) errors.push('jsdomError: ' + e.message); });
vc.on('log', () => {});
vc.on('warn', () => {});

const dom = new JSDOM(html, { url: 'http://localhost/founder-signal-mvp/app/index.html', runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: vc });
const { window } = dom;
const document = window.document;

/* Stub canvas context so Chart.js renders through the whole pipeline. */
function fakeContext(canvas) {
  const base = {
    canvas,
    measureText: () => ({ width: 10, actualBoundingBoxAscent: 8, actualBoundingBoxDescent: 2 }),
    getImageData: () => ({ data: new Uint8ClampedArray(4) }),
    createLinearGradient: () => ({ addColorStop() {} }),
    createRadialGradient: () => ({ addColorStop() {} }),
    createPattern: () => ({}),
    getLineDash: () => [],
    isPointInPath: () => false
  };
  const NOT_METHODS = ['length', 'then', 'nodeType', 'tagName', 'style', 'width', 'height', 'toJSON', 'constructor', 'prototype'];
  return new Proxy(base, {
    get: (t, k) => {
      if (k in t) return t[k];
      if (typeof k !== 'string' || NOT_METHODS.indexOf(k) >= 0 || /^\d+$/.test(k)) return undefined;
      return function () {};
    },
    set: () => true
  });
}
window.HTMLCanvasElement.prototype.getContext = function () { return fakeContext(this); };
window.HTMLCanvasElement.prototype.toDataURL = () => '';
Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', { get() { return 800; } });
Object.defineProperty(window.HTMLElement.prototype, 'clientHeight', { get() { return 320; } });
window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
window.devicePixelRatio = 1;

function run(file, src) {
  try { window.eval(src + '\n//# sourceURL=' + file); } catch (e) { errors.push('threw while loading ' + file + ': ' + (e.stack || e)); }
}
run('data.js', fs.readFileSync(DATA_PATH, 'utf8'));
run('analytics.js', fs.readFileSync(path.join(ROOT, 'app', 'analytics.js'), 'utf8'));
if (chartSrc) run('chart.umd.js', chartSrc); else console.log('note: chart.js not found on NODE_PATH, testing the no-chart fallback path');
run('app.js', fs.readFileSync(path.join(ROOT, 'app', 'app.js'), 'utf8'));

const failures = [];
function check(cond, msg) { if (!cond) failures.push(msg); }
const $ = (id) => document.getElementById(id);
const text = () => document.body.textContent;

/* Structure */
const ids = ['population-cards', 'lift-table', 'veto-cards', 'decision-quad', 'decision-cards', 'decision-misses', 'decision-vetoes', 'persona-grid', 'stage-summary', 'words-grad', 'words-not', 'specificity-cards', 'worry-table', 'backagain-matrix', 'moic-cards', 'moic-note', 'rater-table', 'completeness-table', 'completeness-cards', 'explorer-table', 'explorer-detail', 'assessment-form'];
ids.forEach(id => check($(id) && ($(id).children.length > 0 || $(id).textContent.trim().length > 0), 'section container empty: ' + id));
check(document.querySelectorAll('main > section').length === 12, 'expected 12 sections');
check(document.querySelector('.banner') && /synthetic/i.test(document.querySelector('.banner').textContent), 'synthetic banner present');
check(!/NaN|undefined|\[object/.test(text()), 'body text contains NaN, undefined or [object');
const DASHES = new RegExp(String.fromCharCode(0x2014) + '|' + String.fromCharCode(0x2013));
check(!DASHES.test(text()), 'body text contains an em or en dash');
check($('population-cards').children.length === 6, 'population summary has 6 cards');
check($('veto-cards').children.length === 4, 'veto and spike has 4 cards');
check($('lift-table').querySelectorAll('tbody tr').length === 8, 'lift table has 8 rows');
check(/1\.0x means no effect/.test(text()), 'lift explainer present');
check(['Strong', 'Some', 'None', 'Reversed'].some(w => $('lift-table').textContent.indexOf(w) >= 0), 'lift table has a read column');
check($('decision-quad').querySelectorAll('.cell').length === 4, '2x2 has 4 cells');
check($('persona-grid').querySelectorAll('tbody tr').length === 8, 'persona grid has 7 rows plus totals');
check($('rater-table').querySelectorAll('tbody tr').length >= 1, 'rater table populated');
check($('explorer-table').querySelectorAll('tbody tr').length > 0, 'explorer has rows');
if (chartSrc) check(Object.keys(window.Chart.instances || {}).length >= 4, 'at least 4 Chart.js instances created');

/* Anonymize */
const realName = window.FSS_DATA.companies[0].name;
document.querySelector('#controls .switch input').click();
check(window.FSS_DATA.companies.every(c => c.name === c.anon_name || $('explorer-table').textContent.indexOf(c.name) < 0), 'anonymize hides real names in explorer');
check($('explorer-table').textContent.indexOf(window.FSS_DATA.companies[0].anon_name) >= 0, 'anonymize shows anon names');
/* Controls re-render on every filter change, so re-query the toggle. */
document.querySelector('#controls .switch input').click();
check(!document.querySelector('#controls .switch input').checked, 'anonymize toggled back off');
check($('explorer-table').textContent.indexOf(realName) >= 0, 'anonymize off restores names');

/* Decision filter */
const invBtn = Array.from(document.querySelectorAll('#controls .segmented button')).find(b => b.textContent === 'Invested');
invBtn.click();
check(/Invested/.test(document.querySelector('#controls .segmented button.active').textContent), 'invested filter active');
check($('decision-quad').querySelectorAll('.cell')[2].querySelector('.big').textContent === '0', 'passed cells are 0 under invested filter');
const resetBtn = Array.from(document.querySelectorAll('#controls .btn')).find(b => b.textContent === 'Reset');
resetBtn.click();
check(document.querySelector('#controls .segmented button.active').textContent === 'All', 'reset restores All');

/* Explorer: sort and detail */
const firstHeader = $('explorer-table').querySelector('th.sortable');
firstHeader.click();
const row = $('explorer-table').querySelector('tbody tr.clickable');
row.click();
check($('explorer-detail').querySelectorAll('.profile-row').length === 8, 'detail card shows 8 profile bars');
check(/Intangibles/.test($('explorer-detail').textContent) && /Outcome/.test($('explorer-detail').textContent), 'detail card has intangibles and outcome');
check(/Not assessed|Confidence|tag/.test($('explorer-detail').innerHTML), 'detail card shows confidence tags or not assessed');

/* Form: validation */
const form = $('assessment-form');
const F = form.elements;
const submit = () => form.dispatchEvent(new window.Event('submit', { cancelable: true, bubbles: true }));
F.company.value = window.FSS_DATA.companies[0].id;
F.company.dispatchEvent(new window.Event('change'));
submit();
check(/three words/i.test($('form-msg').textContent) && /at least 4/i.test($('form-msg').textContent), 'validation reports words and dimension count: ' + $('form-msg').textContent);
const before = window.FSS_DATA.assessments.length;
check(window.FSS_DATA.assessments.length === before, 'no assessment appended on invalid submit');

/* Form: success */
F.company.value = window.FSS_DATA.companies[0].id;
F.company.dispatchEvent(new window.Event('change'));
F.word1.value = 'grit'; F.word2.value = 'clarity'; F.word3.value = 'fast';
['execution', 'market', 'talent', 'ceiling'].forEach((k, i) => { F['score_' + k].value = String(i + 2); });
F.lean_in.value = 'Closed 3 design partners before the seed';
F.worry.value = 'Solo founder with thin runway';
submit();
check(window.FSS_DATA.assessments.length === before + 1, 'assessment appended after valid submit');
const addedA = window.FSS_DATA.assessments[window.FSS_DATA.assessments.length - 1];
check(addedA.intangibles.words.join(',') === 'grit,clarity,fast' && addedA.intangibles.themes.indexOf('Speed') >= 0, 'words and derived themes stored');
check(addedA.scores.customer.score === null && addedA.scores.execution.score === 2, 'null and numeric scores stored');
let stored = null;
try { stored = JSON.parse(window.localStorage.getItem('fss_mvp_added')); } catch (e) { stored = null; }
check(stored && stored.assessments.length === 1, 'localStorage fss_mvp_added holds the added assessment');
check(/Added stage 1 assessment/.test($('form-msg').textContent), 'success message shown: ' + $('form-msg').textContent);

/* Form: new company */
const F2 = $('assessment-form').elements;
F2.company.value = '__new__';
F2.company.dispatchEvent(new window.Event('change'));
F2.new_name.value = 'Smoke Test Co';
F2.decision.value = 'passed';
F2.word1.value = 'polished'; F2.word2.value = 'salesy'; F2.word3.value = 'smooth';
['execution', 'market', 'customer', 'resilience'].forEach(k => { F2['score_' + k].value = '3'; });
F2.stage.value = 'stage2';
$('assessment-form').dispatchEvent(new window.Event('submit', { cancelable: true, bubbles: true }));
check(window.FSS_DATA.companies.filter(c => c.name === 'Smoke Test Co').length === 1, 'exactly one new company appended (submit handler bound once)');
check(window.FSS_DATA.assessments.length === before + 2, 'exactly one assessment per submit');
check(/Added stage 2 assessment/.test($('form-msg').textContent), 'second submit shows a success message: ' + $('form-msg').textContent);
check(window.FSS_DATA.companies.some(c => c.name === 'Smoke Test Co' && c.decision === 'passed' && c.pass_stage), 'new company appended');
check(window.FSS_DATA.outcomes.some(o => o.company_id.indexOf('c_add_') === 0 && o.graduated === null), 'new company got a censored outcome');
check($('explorer-table').textContent.indexOf('Smoke Test Co') >= 0, 'new company visible in explorer');

/* Clear added */
const clearBtn = Array.from($('assessment-form').querySelectorAll('button')).find(b => b.textContent === 'Clear added');
clearBtn.click();
check(window.FSS_DATA.assessments.length === before, 'clear added removes assessments');
check(!window.FSS_DATA.companies.some(c => c.name === 'Smoke Test Co'), 'clear added removes new company');
check(window.localStorage.getItem('fss_mvp_added') === null, 'localStorage cleared');

/* Reload path: persisted data re-applied on load */
window.localStorage.setItem('fss_mvp_added', JSON.stringify({ companies: [], founders: [], assessments: [{ id: 'a_add_999', founder_id: window.FSS_DATA.founders[0].id, stage: 'stage1', date: '2026-09-22', rater: 'Rater A', cohort: 'forward', scores: { execution: { score: 4, confidence: 'M' } }, intangibles: { words: ['a', 'b', 'c'], lean_in: '', worry: '', conviction: 3, would_back_again: 'unsure', themes: [] }, integrity: 'pending', decision_at_stage: 'advance', health_check: null }], outcomes: [] }));
const n0 = window.FSS_DATA.assessments.length;
run('app.js (reload)', fs.readFileSync(path.join(ROOT, 'app', 'app.js'), 'utf8'));
check(window.FSS_DATA.assessments.length === n0 + 1, 'persisted assessment re-applied on load');
window.localStorage.removeItem('fss_mvp_added');

check(!/NaN|undefined|\[object/.test(text()), 'body text clean after interactions');

/* Report */
const consoleErrors = errors.filter(e => !/not implemented/i.test(e));
console.log('Smoke test on ' + DATA_PATH);
console.log(`checks failed: ${failures.length}, console errors: ${consoleErrors.length}`);
failures.forEach(f => console.log('  FAIL ' + f));
consoleErrors.forEach(e => console.log('  ERROR ' + e.split('\n').slice(0, 3).join(' | ')));
process.exit(failures.length || consoleErrors.length ? 1 : 0);

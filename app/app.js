/*
 * Founder Signal System, MVP dashboard.
 * Rendering, filters and the assessment form. All numbers come from FSS_ANALYTICS over FSS_DATA.
 * No framework, no build step, ES2019.
 */
(function () {
  'use strict';

  var A = window.FSS_ANALYTICS;
  var DATA = window.FSS_DATA;
  if (!A || !DATA) {
    document.getElementById('main').innerHTML = '<div class="card">Data or analytics failed to load. Check that data/data.js and analytics.js are present.</div>';
    return;
  }

  var STORAGE_KEY = 'fss_mvp_added';
  /* Read the palette from styles.css custom properties instead of duplicating hex values here,
     so the two never drift apart. */
  var rootStyle = getComputedStyle(document.documentElement);
  function cssVar(name) { return rootStyle.getPropertyValue(name).trim(); }
  var C = {
    blue: cssVar('--blue'), gray: cssVar('--gray'), green: cssVar('--green'), amber: cssVar('--amber'),
    red: cssVar('--red'), ink: cssVar('--ink'), muted: cssVar('--muted'), line: cssVar('--line'), soft: cssVar('--soft')
  };
  var AS_OF = (DATA.meta && DATA.meta.as_of) || '2026-09-22';
  var RATERS = ['Rater A', 'Rater B', 'Rater C', 'Rater D', 'Rater E', 'Rater F'];
  var VERTICALS = Object.keys(A.VERTICAL_FAMILY);
  var STAGES = ['Pre-Seed', 'Seed', 'Series A'];
  var FUNDS = ['Fund I', 'Fund II', 'Fund III', 'Legacy Fund'];
  var PASS_STAGES = ['Chemistry', 'Active DD', 'Pre IC', 'IC', 'Term Sheet'];
  var WORD_THEME = {
    grit: 'Grit', clarity: 'Clarity', magnetism: 'Magnetism', magnetic: 'Magnetism', fast: 'Speed',
    insight: 'Non-obvious insight', unusual: 'Non-obvious insight', honest: 'Intellectual honesty',
    calm: 'Calm under pressure', hustle: 'Hustle', scrappy: 'Hustle', hungry: 'Hustle',
    salesy: 'Storytelling', smooth: 'Storytelling', articulate: 'Storytelling', pedigree: 'Domain depth', network: 'Domain depth'
  };
  var SHORT = { execution: 'Execution', market: 'Market', customer: 'Customer', self_awareness: 'Self-awareness', resilience: 'Resilience', talent: 'Talent', decisiveness: 'Decisiveness', ceiling: 'Ceiling' };
  var ABBR = { execution: 'Exe', market: 'Mkt', customer: 'Cust', self_awareness: 'Self', resilience: 'Res', talent: 'Tal', decisiveness: 'Dec', ceiling: 'Ceil' };

  var state = {
    filters: A.defaultFilters(),
    liftView: 'all',
    sort: { key: 'company', dir: 1 },
    search: '',
    scoredOnly: true,
    selectedFounder: null,
    charts: {},
    added: { companies: [], founders: [], assessments: [], outcomes: [] }
  };

  /* ------------------------------------------------------------------ */
  /* DOM helpers                                                         */
  /* ------------------------------------------------------------------ */

  function $(id) { return document.getElementById(id); }

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') e.className = v;
        else if (k === 'text') e.textContent = v;
        else if (k === 'html') e.innerHTML = v;
        else if (k.indexOf('on') === 0 && typeof v === 'function') e.addEventListener(k.slice(2), v);
        else if (k === 'style' && typeof v === 'object') Object.keys(v).forEach(function (s) { e.style[s] = v[s]; });
        else if (k === 'checked' || k === 'selected' || k === 'disabled' || k === 'required') e[k] = !!v;
        else if (k === 'value') e.value = v;
        else e.setAttribute(k, v === true ? '' : v);
      });
    }
    if (children != null) append(e, children);
    return e;
  }

  function append(parent, children) {
    (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (c == null || c === false) return;
      parent.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    });
    return parent;
  }

  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); return node; }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  /* ------------------------------------------------------------------ */
  /* Formatting                                                          */
  /* ------------------------------------------------------------------ */

  function isNum(x) { return typeof x === 'number' && isFinite(x); }
  function pct(p, d) { return isNum(p) ? (p * 100).toFixed(d == null ? 0 : d) + '%' : 'n/a'; }
  function rateStr(w) { return isNum(w.p) ? pct(w.p) + ' (' + w.k + '/' + w.n + ')' : 'n/a (n=' + (w.n || 0) + ')'; }
  function mult(x, d) { return isNum(x) ? x.toFixed(d == null ? 2 : d) + 'x' : 'n/a'; }
  function num(x, d) { return isNum(x) ? x.toFixed(d == null ? 0 : d) : 'n/a'; }
  function signed(x, d) { return isNum(x) ? (x > 0 ? '+' : '') + x.toFixed(d == null ? 2 : d) : 'n/a'; }
  function money(x) {
    if (!isNum(x)) return 'n/a';
    if (Math.abs(x) >= 1e9) return '$' + (x / 1e9).toFixed(2) + 'B';
    if (Math.abs(x) >= 1e6) return '$' + (x / 1e6).toFixed(1) + 'M';
    if (Math.abs(x) >= 1e3) return '$' + (x / 1e3).toFixed(0) + 'K';
    return '$' + x.toFixed(0);
  }
  function gradLabel(g) { return g === true ? 'Graduated' : (g === false ? 'Not graduated' : 'Pending'); }
  function statusLabel(s) {
    return { active: 'Active', realised: 'Realised', written_off: 'Written off', shut_down: 'Shut down', acquired: 'Acquired', unknown: 'Unknown' }[s] || (s || 'n/a');
  }
  function capital(s) { return s ? String(s).charAt(0).toUpperCase() + String(s).slice(1) : ''; }
  function shortLabel(key, label) { return SHORT[key] || (label || key).split(':')[0]; }
  function dimLabel(key) {
    var d = (DATA.dimensions || []).filter(function (x) { return x.key === key; })[0];
    return d ? d.label : key;
  }

  /* ------------------------------------------------------------------ */
  /* Components                                                          */
  /* ------------------------------------------------------------------ */

  function card(title, value, sub, tone) {
    return el('div', { class: 'card' }, [
      el('div', { class: 'card-title', text: title }),
      el('div', { class: 'card-value', text: value }),
      sub ? el('div', { class: 'card-sub' + (tone ? ' tone-' + tone : ''), text: sub }) : null
    ]);
  }

  function tag(text, tone) { return el('span', { class: 'tag' + (tone ? ' ' + tone : ''), text: text }); }

  function legend(items) {
    return items.map(function (it) {
      return el('span', {}, [el('span', { class: 'dot', style: { background: it.color } }), it.label]);
    });
  }

  function table(headers, rows, opts) {
    opts = opts || {};
    var t = el('table', { class: 'tbl ' + (opts.className || '') });
    var thead = el('thead');
    var tr = el('tr');
    headers.forEach(function (h) {
      var th = el('th', { class: (h.num ? 'num ' : '') + (h.sortable ? 'sortable ' : '') + (h.sorted ? 'sorted' : ''), title: h.title || null }, h.label + (h.sorted ? (h.dir > 0 ? ' ↑' : ' ↓') : ''));
      if (h.onclick) th.addEventListener('click', h.onclick);
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    t.appendChild(thead);
    var tbody = el('tbody');
    rows.forEach(function (r) { tbody.appendChild(r); });
    t.appendChild(tbody);
    return t;
  }

  function td(content, cls) {
    var cell = el('td', { class: cls || null });
    if (content != null) append(cell, content);
    return cell;
  }

  function segmented(options, value, onChange) {
    var wrap = el('div', { class: 'segmented' });
    options.forEach(function (o) {
      wrap.appendChild(el('button', {
        type: 'button', class: o.value === value ? 'active' : '', text: o.label,
        onclick: function () { onChange(o.value); }
      }));
    });
    return wrap;
  }

  function multiSelect(label, options, selected, onChange) {
    var wrap = el('div', { class: 'multi' });
    var btn = el('button', { type: 'button', class: 'multi-btn' + (selected.length ? ' has-selection' : '') });
    btn.textContent = label + ': ' + (selected.length ? (selected.length === 1 ? selected[0] : selected.length + ' selected') : 'All');
    var panel = el('div', { class: 'multi-panel' });
    options.forEach(function (opt) {
      var cb = el('input', { type: 'checkbox', value: opt, checked: selected.indexOf(opt) >= 0 });
      cb.addEventListener('change', function () {
        var next = selected.slice();
        var i = next.indexOf(opt);
        if (cb.checked && i < 0) next.push(opt);
        if (!cb.checked && i >= 0) next.splice(i, 1);
        onChange(next);
      });
      panel.appendChild(el('label', {}, [cb, opt]));
    });
    panel.appendChild(el('div', { class: 'multi-actions' }, [
      el('button', { type: 'button', text: 'Clear', onclick: function () { onChange([]); } })
    ]));
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = wrap.classList.contains('open');
      document.querySelectorAll('.multi.open').forEach(function (m) { m.classList.remove('open'); });
      if (!open) wrap.classList.add('open');
    });
    panel.addEventListener('click', function (e) { e.stopPropagation(); });
    wrap.appendChild(btn);
    wrap.appendChild(panel);
    return wrap;
  }

  document.addEventListener('click', function () {
    document.querySelectorAll('.multi.open').forEach(function (m) { m.classList.remove('open'); });
  });

  function switchToggle(label, checked, onChange) {
    var input = el('input', { type: 'checkbox', checked: checked });
    input.addEventListener('change', function () { onChange(input.checked); });
    return el('label', { class: 'switch' }, [input, el('span', { class: 'track' }), el('span', { class: 'control-label', text: label })]);
  }

  /* ------------------------------------------------------------------ */
  /* Charts                                                              */
  /* ------------------------------------------------------------------ */

  var hasChart = typeof Chart !== 'undefined';
  if (hasChart) {
    Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
    Chart.defaults.font.size = 12;
    Chart.defaults.color = C.muted;
    Chart.defaults.borderColor = C.line;
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.animation = false;
  }

  function makeChart(id, config) {
    if (state.charts[id]) { state.charts[id].destroy(); delete state.charts[id]; }
    var canvas = $(id);
    if (!canvas) return null;
    if (hasChart && typeof Chart.getChart === 'function') {
      var existing = Chart.getChart(canvas);
      if (existing) existing.destroy();
    }
    var box = canvas.parentNode;
    var old = box.querySelector('.chart-fallback');
    if (old) old.remove();
    var ctx2d = hasChart && canvas.getContext ? canvas.getContext('2d') : null;
    if (!hasChart || !ctx2d) {
      canvas.style.display = 'none';
      box.appendChild(el('div', { class: 'chart-fallback', text: hasChart ? 'Canvas not available in this browser. The tables carry the same numbers.' : 'Chart library not loaded (offline). The tables carry the same numbers.' }));
      return null;
    }
    canvas.style.display = '';
    state.charts[id] = new Chart(ctx2d, config);
    return state.charts[id];
  }

  /* ------------------------------------------------------------------ */
  /* Filters and top bar                                                 */
  /* ------------------------------------------------------------------ */

  function setFilter(key, value) {
    state.filters[key] = value;
    renderControls();
    renderAll();
  }

  function renderControls() {
    var box = clear($('controls'));
    var f = state.filters;
    box.appendChild(el('div', { class: 'control' }, switchToggle('Anonymize', f.anonymize, function (v) { setFilter('anonymize', v); })));
    box.appendChild(el('div', { class: 'control' }, [
      el('span', { class: 'control-label', text: 'Decision' }),
      segmented([{ value: 'all', label: 'All' }, { value: 'invested', label: 'Invested' }, { value: 'passed', label: 'Passed' }], f.decision, function (v) { setFilter('decision', v); })
    ]));
    box.appendChild(multiSelect('Stage at entry', STAGES, f.stage_at_entry, function (v) { setFilter('stage_at_entry', v); }));
    var verticals = VERTICALS.filter(function (v) { return DATA.companies.some(function (c) { return c.vertical === v; }); });
    box.appendChild(multiSelect('Vertical', verticals, f.vertical, function (v) { setFilter('vertical', v); }));
    box.appendChild(el('div', { class: 'control' }, [
      el('span', { class: 'control-label', text: 'Cohort' }),
      segmented([{ value: 'all', label: 'All' }, { value: 'backfilled', label: 'Backfilled' }, { value: 'forward', label: 'Forward' }], f.cohort, function (v) { setFilter('cohort', v); })
    ]));
    box.appendChild(el('button', { type: 'button', class: 'btn', text: 'Reset', onclick: function () {
      var anon = state.filters.anonymize;
      state.filters = A.defaultFilters();
      state.filters.anonymize = anon;
      renderControls();
      renderAll();
    } }));
  }

  /* ------------------------------------------------------------------ */
  /* 0. Headline: plain-language ground truth, everything else is detail */
  /* ------------------------------------------------------------------ */

  function headlineLine(r) {
    return el('li', {}, [
      el('span', {}, shortLabel(r.key, r.label) + ': high scorers graduated ' + pct(r.high.p) + ' of the time, low scorers ' + pct(r.low.p) + '.'),
      el('span', { class: 'meta' }, mult(r.lift, 1) + ' as likely')
    ]);
  }

  function renderHeadline() {
    var ti = A.topInsights(DATA, state.filters);
    var box = clear($('headline-body'));
    if (ti.nResolved < 20) {
      box.appendChild(el('div', { class: 'card' }, el('p', { class: 'muted', text: 'Too few resolved outcomes in this filter (n=' + ti.nResolved + ') to read anything here. Widen the filters above.' })));
      return;
    }
    var predictive = ti.predictive.slice(0, 2);
    var predCard = el('div', { class: 'card' });
    predCard.appendChild(el('h3', { text: 'Biggest drivers of success' }));
    if (predictive.length) {
      predCard.appendChild(el('ul', { class: 'list' }, predictive.map(headlineLine)));
    } else {
      predCard.appendChild(el('p', { class: 'muted', text: 'No dimension clears a confident read at this sample size (n=' + ti.nResolved + ' resolved).' }));
    }
    box.appendChild(predCard);

    var owCard = el('div', { class: 'card' });
    owCard.appendChild(el('h3', { text: 'Biggest drivers of weakness' }));
    if (ti.overweighted.length) {
      owCard.appendChild(el('ul', { class: 'list' }, ti.overweighted.map(function (r) {
        return el('li', {}, [
          el('span', {}, shortLabel(r.key, r.label) + ': we favor this when deciding who to fund, but it barely predicts who graduates.')
        ]);
      })));
    } else {
      owCard.appendChild(el('p', { class: 'muted', text: 'Nothing here clears the bar this filter. That is a good sign, not a missing feature.' }));
    }
    box.appendChild(owCard);
  }

  /* ------------------------------------------------------------------ */
  /* 1. Population summary                                               */
  /* ------------------------------------------------------------------ */

  function renderPopulation() {
    var s = A.populationSummary(DATA, state.filters);
    var box = clear($('population-cards'));
    box.appendChild(card('Founders scored', String(s.foundersScored)));
    box.appendChild(card('Invested graduation rate', pct(s.invested.rate)));
    box.appendChild(card('Passed graduation rate', pct(s.passed.rate)));
    box.appendChild(card('Pending or censored', String(s.pending)));
    var stages = Object.keys(s.byStage).sort(function (a, b) { return STAGES.indexOf(a) - STAGES.indexOf(b); });
    $('population-note').textContent = 'By stage at entry: ' + stages.map(function (st) {
      return st + ' ' + s.byStage[st].total + ' (' + s.byStage[st].invested + ' invested, ' + s.byStage[st].passed + ' passed)';
    }).join(', ') + '.';
  }

  /* ------------------------------------------------------------------ */
  /* 2. Dimension lift                                                   */
  /* ------------------------------------------------------------------ */

  function renderLift() {
    var views = A.dimensionLiftViews(DATA, state.filters);
    var all = views.all, inv = views.invested, pas = views.passed;
    var labels = all.rows.map(function (r) { return shortLabel(r.key, r.label); });

    function ds(label, color, rows) {
      return {
        label: label,
        data: rows.map(function (r) { return isNum(r.lift) ? Math.min(r.lift, xMax) : null; }),
        backgroundColor: color,
        borderRadius: 3,
        barPercentage: 0.85,
        categoryPercentage: 0.7,
        fssRows: rows
      };
    }

    /* The lift view below decides what the chart (and the table's row set) shows: the full
       population everyone met, both invested and passed side by side, the portfolio alone, or
       passed founders alone. */
    var seriesByView = {
      all: [{ label: 'Total population', color: C.blue, rows: all.rows, n: all.nResolved }],
      both: [
        { label: 'Full population', color: C.blue, rows: all.rows, n: all.nResolved },
        { label: 'Portfolio only', color: C.gray, rows: inv.rows, n: inv.nResolved }
      ],
      invested: [{ label: 'Portfolio only', color: C.gray, rows: inv.rows, n: inv.nResolved }],
      passed: [{ label: 'Passed only', color: C.amber, rows: pas.rows, n: pas.nResolved }]
    };
    var series = seriesByView[state.liftView] || seriesByView.all;

    var maxLift = 0;
    series.forEach(function (s) { s.rows.forEach(function (r) { if (isNum(r.lift)) maxLift = Math.max(maxLift, r.lift); }); });
    var xMax = Math.max(2, Math.ceil(maxLift * 2) / 2);

    clear($('lift-legend'));
    append($('lift-legend'), legend(series.map(function (s) { return { color: s.color, label: s.label + ' (n=' + s.n + ' resolved founders)' }; })));

    makeChart('lift-chart', {
      type: 'bar',
      data: { labels: labels, datasets: series.map(function (s) { return ds(s.label, s.color, s.rows); }) },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { min: 0, max: xMax, grid: { color: C.soft }, ticks: { callback: function (v) { return v + 'x'; } }, title: { display: true, text: 'Graduation lift, scored 4 to 5 vs 1 to 3' } },
          y: { grid: { display: false } }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (item) {
                var r = item.dataset.fssRows[item.dataIndex];
                if (!isNum(r.lift)) return item.dataset.label + ': n/a';
                return item.dataset.label + ': ' + mult(r.lift) + ', high-scoring grad rate ' + pct(r.high.p) + ', low-scoring grad rate ' + pct(r.low.p);
              }
            }
          }
        }
      }
    });

    $('lift-explainer').textContent = 'Bars right of 1.0x predict graduation.';

    var seg = clear($('lift-view'));
    seg.appendChild(segmented([
      { value: 'all', label: 'Total population' },
      { value: 'both', label: 'Both' },
      { value: 'invested', label: 'Just portfolio' },
      { value: 'passed', label: 'Just passed' }
    ], state.liftView, function (v) { state.liftView = v; renderLift(); }));
    var rowsByView = { passed: pas.rows, invested: inv.rows };
    var rows = rowsByView[state.liftView] || all.rows;
    var body = rows.map(function (r) {
      var tr = el('tr');
      tr.appendChild(td(r.label));
      tr.appendChild(td(el('span', { class: 'read-' + r.read, text: r.read })));
      tr.appendChild(td(rateStr(r.high), 'num nowrap'));
      tr.appendChild(td(rateStr(r.low), 'num nowrap'));
      tr.appendChild(td(mult(r.lift), 'num'));
      return tr;
    });
    clear($('lift-table')).appendChild(table([
      { label: 'Dimension' },
      { label: 'Read', title: 'Strong or Some means the trait reliably predicts graduation; Reversed means it points the other way; None means the data can\'t tell yet; Thin means one of the two groups has fewer than 10 founders, too small to read either way' },
      { label: 'High (4 to 5) graduated', num: true }, { label: 'Low (1 to 3) graduated', num: true },
      { label: 'Lift', num: true }
    ], body));
  }

  /* ------------------------------------------------------------------ */
  /* 3. Veto and spike                                                   */
  /* ------------------------------------------------------------------ */

  function renderVeto() {
    var v = A.vetoSpike(DATA, state.filters);
    var box = clear($('veto-cards'));
    box.appendChild(card('A single score of 1 (veto)', pct(v.veto.with.p), 'vs ' + pct(v.veto.without.p) + ' for founders with no 1s'));
    box.appendChild(card('A single score of 5 (spike)', pct(v.spike.with.p), 'vs ' + pct(v.spike.without.p) + ' for founders with no 5s'));
  }

  /* ------------------------------------------------------------------ */
  /* 4. Decision quality                                                 */
  /* ------------------------------------------------------------------ */

  function renderDecision() {
    var d = A.decisionQuality(DATA, state.filters);
    var q = clear($('decision-quad'));
    q.appendChild(el('div', { class: 'corner' }));
    q.appendChild(el('div', { class: 'col-head', text: 'Graduated' }));
    q.appendChild(el('div', { class: 'col-head', text: 'Not graduated' }));

    function cell(n, label, extra, cls) {
      var c = el('div', { class: 'cell ' + (cls || '') }, [el('div', { class: 'big', text: String(n) }), el('div', { class: 'label', html: label })]);
      if (extra) c.appendChild(extra);
      return c;
    }
    q.appendChild(el('div', { class: 'row-head', text: 'Invested' }));
    q.appendChild(cell(d.cells.investedGraduated, 'Backed and graduated'));
    q.appendChild(cell(d.cells.investedNot, 'Backed, did not graduate'));
    q.appendChild(el('div', { class: 'row-head', text: 'Passed' }));
    var reasons = el('ul');
    d.passedGraduatedByReason.filter(function (r) { return r.count > 0; }).forEach(function (r) {
      reasons.appendChild(el('li', {}, [
        el('span', { text: ({ price: 'Passed on price', founder: 'Passed on founder', business: 'Passed on business', timing: 'Passed on timing', lost: 'Lost at term sheet', other: 'Passed, other reason' })[r.reason] || ('Passed: ' + r.reason) }),
        el('span', { class: 'muted', text: r.count + (r.moicN ? ', ' + mult(r.moicMedian, 1) + ' median step-up missed' : '') })
      ]));
    });
    q.appendChild(cell(d.cells.passedGraduated, '<strong>Anti-portfolio</strong>: passed, then graduated', reasons, 'anti'));
    q.appendChild(cell(d.cells.passedNot, 'Passed, did not graduate'));

    var cards = clear($('decision-cards'));
    cards.appendChild(card('Recall', rateStr(d.recall), 'Share of all graduates we backed. ' + d.note));
    cards.appendChild(card('Precision', rateStr(d.precision), 'Share of the portfolio that graduated'));
    cards.appendChild(card('Hypothetical MOIC missed', mult(d.hypotheticalMoic.median), 'Median across ' + d.hypotheticalMoic.n + ' passed graduates. ' + d.resolved + ' resolved, ' + (d.pending.invested + d.pending.passed) + ' pending.'));
    var moicNow = A.moicSeries(DATA, state.filters);
    var latestMarks = moicNow.companies.map(function (c) { return c.latest; }).filter(isNum);
    cards.appendChild(card('Current portfolio MOIC', mult(A.median(latestMarks)), 'Median latest mark across ' + latestMarks.length + ' invested companies. Compare against Hypothetical MOIC missed.'));

    var misses = clear($('decision-misses'));
    if (!d.judgmentMisses.length) misses.appendChild(el('li', { class: 'muted', text: 'None in the current filter.' }));
    d.judgmentMisses.forEach(function (m) {
      misses.appendChild(el('li', {}, [
        el('span', {}, [el('strong', { text: m.name }), ' ', el('span', { class: 'meta', text: m.vertical + ', ' + m.stage_at_entry + ', passed at ' + m.pass_stage })]),
        el('span', { class: 'meta', text: 'Hypothetical ' + mult(m.hypothetical_moic) + (isNum(m.graduation_months) ? ', ' + m.graduation_months + ' months' : '') })
      ]));
      if (m.pass_reason_note) misses.lastChild.appendChild(el('span', { class: 'meta', style: { flexBasis: '100%' }, text: 'Note: ' + m.pass_reason_note }));
    });

    var vetoes = clear($('decision-vetoes'));
    if (!d.investedWithVeto.length) vetoes.appendChild(el('li', { class: 'muted', text: 'None in the current filter.' }));
    d.investedWithVeto.forEach(function (v) {
      var dims = v.vetoes.map(function (x) { return x.dim.split(':')[0]; });
      var tone = v.graduated === true ? 'good' : (v.graduated === false ? 'bad' : null);
      vetoes.appendChild(el('li', {}, [
        el('span', {}, [el('strong', { text: v.name }), ' ', el('span', { class: 'meta', text: v.fund + ', 1 on ' + dims.join(', ') })]),
        el('span', {}, [tag(gradLabel(v.graduated), tone), ' ', el('span', { class: 'meta', text: statusLabel(v.status) + (isNum(v.latest_moic) ? ', ' + mult(v.latest_moic) : '') })])
      ]));
    });
  }

  /* ------------------------------------------------------------------ */
  /* 5. Persona x vertical                                               */
  /* ------------------------------------------------------------------ */

  function heatColor(rate) {
    if (!isNum(rate)) return { bg: 'transparent', fg: C.muted };
    var a = 0.08 + 0.72 * rate;
    return { bg: 'rgba(42,120,214,' + a.toFixed(3) + ')', fg: a > 0.55 ? '#fff' : C.ink };
  }

  function renderPersona() {
    var g = A.personaGrid(DATA, state.filters);
    var t = el('table', { class: 'tbl heat' });
    var head = el('tr');
    head.appendChild(el('th', { text: 'Background' }));
    g.cols.forEach(function (c) { head.appendChild(el('th', { text: c })); });
    head.appendChild(el('th', { text: 'All verticals' }));
    t.appendChild(el('thead', {}, head));
    var body = el('tbody');
    function cellTd(cell) {
      if (!cell.invested && !cell.passed) return el('td', { class: 'cell empty', text: '·' });
      var col = heatColor(cell.rate);
      var c = el('td', { class: 'cell' + (cell.resolved < g.smallN ? ' small-n' : ''), style: { background: col.bg, color: col.fg }, title: gradLabel(true) + ' ' + cell.graduated + ' of ' + cell.resolved + ' resolved, ' + cell.pending + ' pending' });
      c.appendChild(el('span', { text: cell.graduated + '/' + cell.resolved }));
      c.appendChild(el('span', { class: 'sub', text: '(' + cell.invested + '+' + cell.passed + ')' }));
      return c;
    }
    g.rows.forEach(function (r) {
      var tr = el('tr');
      tr.appendChild(el('th', { class: 'row-head', text: r }));
      g.cols.forEach(function (c) { tr.appendChild(cellTd(g.cells[r][c])); });
      tr.appendChild(cellTd(g.rowTotals[r]));
      body.appendChild(tr);
    });
    var totals = el('tr');
    totals.appendChild(el('th', { class: 'row-head', text: 'All backgrounds' }));
    g.cols.forEach(function (c) { totals.appendChild(cellTd(g.colTotals[c])); });
    totals.appendChild(cellTd(g.total));
    body.appendChild(totals);
    t.appendChild(body);
    var box = clear($('persona-grid'));
    box.appendChild(t);
    var ramp = el('div', { class: 'ramp', style: { padding: '8px 12px' } }, [el('span', { text: 'Graduation rate 0%' })]);
    [0, 0.25, 0.5, 0.75, 1].forEach(function (r) { ramp.appendChild(el('span', { class: 'swatch', style: { background: heatColor(r).bg } })); });
    ramp.appendChild(el('span', { text: '100%. Unit: ' + g.unit + '. Total ' + g.total.graduated + '/' + g.total.resolved + ' resolved.' }));
    box.appendChild(ramp);
  }

  /* ------------------------------------------------------------------ */
  /* 6. Stage 1 to stage 2                                               */
  /* ------------------------------------------------------------------ */

  function renderStage() {
    var s = A.stageDelta(DATA, state.filters);
    clear($('stage-legend'));
    append($('stage-legend'), legend([
      { color: C.blue, label: 'Graduated' },
      { color: C.gray, label: 'Not graduated' }
    ]));
    $('stage-legend').appendChild(el('span', { text: s.nPairs + ' founders with both stages' }));
    makeChart('stage-chart', {
      type: 'bar',
      data: {
        labels: s.rows.map(function (r) { return shortLabel(r.key, r.label); }),
        datasets: [
          { label: 'Graduated', data: s.rows.map(function (r) { return r.graduated.mean; }), backgroundColor: C.blue, borderRadius: 3, fssRows: s.rows, fssSide: 'graduated' },
          { label: 'Not graduated', data: s.rows.map(function (r) { return r.notGraduated.mean; }), backgroundColor: C.gray, borderRadius: 3, fssRows: s.rows, fssSide: 'notGraduated' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { grid: { color: C.soft }, title: { display: true, text: 'Mean stage 2 minus stage 1' }, suggestedMin: -0.5, suggestedMax: 0.5 },
          x: { grid: { display: false } }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (item) {
                var r = item.dataset.fssRows[item.dataIndex][item.dataset.fssSide];
                return item.dataset.label + ': ' + signed(r.mean) + ' (n=' + r.n + ')';
              }
            }
          }
        }
      }
    });
    var top = s.diligence.top3.map(function (t) { return shortLabel(t.key, t.label) + ' ' + mult(t.stage1Lift) + ' to ' + mult(t.stage2Lift); }).join('; ');
    $('stage-summary').textContent = 'Did diligence help: ' + s.diligence.label + (top ? ' (' + top + ').' : '.') +
      ' Stage 2 moved in the right direction for ' + s.rightOverall.k + ' of ' + s.rightOverall.n + ' dimension moves (' + pct(s.rightOverall.share) + '); up for graduates, down for non-graduates.';
  }

  /* ------------------------------------------------------------------ */
  /* 7. Intangibles                                                      */
  /* ------------------------------------------------------------------ */

  function renderIntangibles() {
    var it = A.intangibles(DATA, state.filters);
    function wordList(target, list, titleId, title) {
      var ul = clear($(target));
      var total = list.reduce(function (a, w) { return a + w.count; }, 0);
      $(titleId).textContent = title + ' (' + Math.round(total / 3) + ' founders, top 12 words)';
      if (!list.length) ul.appendChild(el('li', { class: 'muted', text: 'No words in filter' }));
      list.slice(0, 12).forEach(function (w) {
        ul.appendChild(el('li', {}, [el('span', { text: w.word }), el('span', { class: 'n', text: String(w.count) })]));
      });
    }
    wordList('words-grad', it.words.graduated, 'words-grad-title', 'Words: graduated');
    wordList('words-not', it.words.notGraduated, 'words-not-title', 'Words: not graduated');

    clear($('theme-legend'));
    append($('theme-legend'), legend([{ color: C.blue, label: 'Graduated' }, { color: C.gray, label: 'Not graduated' }]));
    var themes = it.themes.filter(function (t) { return t.graduated + t.notGraduated + t.pending > 0; });
    makeChart('theme-chart', {
      type: 'bar',
      data: {
        labels: themes.map(function (t) { return t.theme; }),
        datasets: [
          { label: 'Graduated', data: themes.map(function (t) { return t.graduated; }), backgroundColor: C.blue, borderRadius: 3, fssRows: themes },
          { label: 'Not graduated', data: themes.map(function (t) { return t.notGraduated; }), backgroundColor: C.gray, borderRadius: 3, fssRows: themes }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { grid: { color: C.soft }, title: { display: true, text: 'Founders tagged at entry' }, ticks: { precision: 0 } }, y: { grid: { display: false } } },
        plugins: {
          tooltip: {
            callbacks: {
              afterBody: function (items) {
                var t = items[0].dataset.fssRows[items[0].dataIndex];
                return 'Graduation rate ' + rateStr({ p: t.rate, k: t.graduated, n: t.resolved }) + ', ' + t.pending + ' pending';
              }
            }
          }
        }
      }
    });

    var sc = clear($('specificity-cards'));
    var sp = it.specificity;
    sc.appendChild(card('Specific lean-in', pct(sp.specific.p), 'Contains a number or a concrete verb'));
    sc.appendChild(card('Adjectival lean-in', pct(sp.adjectival.p), 'Praise without an artifact'));
    sc.appendChild(card('Specific vs adjectival lift', mult(sp.lift.lift, 1), A.liftRead(sp.lift.lo, sp.lift.hi, sp.specific.n, sp.adjectival.n)));

    var wt = clear($('worry-table'));
    wt.appendChild(table([{ label: 'Worry keywords hit' }, { label: 'Graduated', num: true }, { label: 'Pending', num: true }],
      it.worry.rows.map(function (r) {
        var tr = el('tr');
        tr.appendChild(td(r.bucket === '0' ? 'None' : r.bucket));
        tr.appendChild(td(pct(r.rate), 'num nowrap'));
        tr.appendChild(td(String(r.pending), 'num'));
        return tr;
      })));
    wt.appendChild(el('p', { class: 'explainer', style: { padding: '8px 10px 0' }, text: 'Keywords: ' + it.worry.keywords.join(', ') + '.' }));

    var bm = clear($('backagain-matrix'));
    var order = it.backAgain.order;
    var mt = el('table', { class: 'tbl matrix' });
    var head = el('tr');
    head.appendChild(el('th', { class: 'row-head', text: 'Entry → QPR' }));
    order.forEach(function (q) { head.appendChild(el('th', { text: capital(q) })); });
    mt.appendChild(el('thead', {}, head));
    var body = el('tbody');
    order.forEach(function (e) {
      var tr = el('tr');
      tr.appendChild(el('th', { class: 'row-head', text: capital(e) }));
      order.forEach(function (q) { tr.appendChild(td(String(it.backAgain.matrix[e][q]), e === q ? 'diag' : '')); });
      body.appendChild(tr);
    });
    mt.appendChild(body);
    bm.appendChild(mt);
    bm.appendChild(el('p', { class: 'explainer', style: { paddingTop: '8px' }, text: it.backAgain.n + ' invested founders with an entry answer and at least one QPR. Rows are the entry answer, columns the latest QPR answer.' }));
  }

  /* ------------------------------------------------------------------ */
  /* 8. MOIC panel                                                       */
  /* ------------------------------------------------------------------ */

  function renderMoic() {
    var m = A.moicSeries(DATA, state.filters);
    var minQ = m.median.length ? m.median[0].q : 0;
    var maxQ = m.median.length ? m.median[m.median.length - 1].q : 0;
    var labels = [];
    for (var q = minQ; q <= maxQ; q++) labels.push(q);
    clear($('moic-legend'));
    append($('moic-legend'), legend([{ color: C.gray, label: m.companies.length + ' invested companies' }, { color: C.blue, label: 'Portfolio median' }]));
    var datasets = m.companies.map(function (co) {
      var byQ = {};
      co.series.forEach(function (r) { byQ[r.q] = r.gross_moic; });
      return {
        label: co.name,
        data: labels.map(function (qq) { return byQ[qq] == null ? null : byQ[qq]; }),
        borderColor: C.gray,
        borderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 4,
        tension: 0,
        spanGaps: false,
        fssMeta: co
      };
    });
    datasets.push({
      label: 'Portfolio median',
      data: labels.map(function (qq) { var p = m.median.filter(function (x) { return x.q === qq; })[0]; return p ? p.median : null; }),
      borderColor: C.blue,
      borderWidth: 2.5,
      pointRadius: 0,
      pointHitRadius: 6,
      tension: 0,
      fssMedian: m.median
    });
    makeChart('moic-chart', {
      type: 'line',
      data: { labels: labels, datasets: datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'nearest', intersect: false },
        scales: {
          x: { grid: { display: false }, title: { display: true, text: 'Quarters since entry' } },
          y: { min: 0, grid: { color: C.soft }, ticks: { callback: function (v) { return v + 'x'; } }, title: { display: true, text: 'Gross MOIC' } }
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: function (items) { return 'Quarter ' + items[0].label + ' since entry'; },
              label: function (item) {
                if (item.dataset.fssMedian) {
                  var p = item.dataset.fssMedian[item.dataIndex];
                  return 'Median ' + mult(p.median) + ' (n=' + p.n + ')';
                }
                return item.dataset.label + ': ' + mult(item.parsed.y);
              }
            }
          }
        }
      }
    });
    $('moic-note').textContent = m.note;
    var cards = clear($('moic-cards'));
    cards.appendChild(card('Median MOIC at 24 months', mult(m.moic24.median), 'n=' + m.moic24.n + ' companies past the horizon'));
    cards.appendChild(card('Median MOIC at 36 months', mult(m.moic36.median), 'n=' + m.moic36.n + ' companies past the horizon'));
    var latest = m.companies.map(function (c) { return c.latest; }).filter(isNum);
    cards.appendChild(card('Latest median mark', mult(A.median(latest)), 'n=' + latest.length + ' companies, 2026Q2 valuation committee'));
  }

  /* ------------------------------------------------------------------ */
  /* 9. Rater calibration                                                */
  /* ------------------------------------------------------------------ */

  function renderRaters() {
    var r = A.raterCalibration(DATA, state.filters);
    var rows = r.rows.map(function (x) {
      var tr = el('tr');
      tr.appendChild(td(x.rater));
      tr.appendChild(td(String(x.n), 'num'));
      tr.appendChild(td(num(x.meanScore, 2), 'num'));
      tr.appendChild(td(pct(x.share3.share) + ' (' + x.share3.k + '/' + x.share3.n + ')', 'num nowrap'));
      tr.appendChild(td(pct(x.shareNull.share) + ' (' + x.shareNull.k + '/' + x.shareNull.n + ')', 'num nowrap'));
      tr.appendChild(td(pct(x.share5.share) + ' (' + x.share5.k + '/' + x.share5.n + ')', 'num nowrap'));
      tr.appendChild(td(pct(x.share1.share) + ' (' + x.share1.k + '/' + x.share1.n + ')', 'num nowrap'));
      var c = td(rateStr(x.ceilingHigh), 'num nowrap');
      if (x.ceilingHigh.smallN) { c.appendChild(document.createTextNode(' ')); c.appendChild(tag('small n', 'caution')); }
      tr.appendChild(c);
      return tr;
    });
    var box = clear($('rater-table'));
    box.appendChild(table([
      { label: 'Rater' }, { label: 'Assessments', num: true }, { label: 'Mean score', num: true }, { label: 'Share of 3s', num: true },
      { label: 'Not assessed', num: true }, { label: 'Share of 5s', num: true }, { label: 'Share of 1s', num: true },
      { label: 'Graduation when ceiling 4 or 5', num: true, title: r.note }
    ], rows));
  }

  /* ------------------------------------------------------------------ */
  /* 10. Completeness                                                    */
  /* ------------------------------------------------------------------ */

  function renderCompleteness() {
    var c = A.completeness(DATA, state.filters);
    var rows = c.byStage.map(function (s) {
      var tr = el('tr');
      tr.appendChild(td({ stage1: 'Stage 1', stage2: 'Stage 2', qpr: 'QPR' }[s.stage] || s.stage));
      tr.appendChild(td(String(s.n), 'num'));
      tr.appendChild(td(s.nullScores.n ? pct(s.nullScores.share, 1) + ' (' + s.nullScores.k + '/' + s.nullScores.n + ')' : 'n/a', 'num nowrap'));
      tr.appendChild(td(s.missingIntangibles.n ? pct(s.missingIntangibles.share, 1) + ' (' + s.missingIntangibles.k + '/' + s.missingIntangibles.n + ')' : 'n/a', 'num nowrap'));
      return tr;
    });
    clear($('completeness-table')).appendChild(table([{ label: 'Stage' }, { label: 'Assessments', num: true }, { label: 'Scores not assessed', num: true }, { label: 'Missing intangibles', num: true }], rows));
    var cards = clear($('completeness-cards'));
    cards.appendChild(card('Outcomes censored', pct(c.censored.share) + ' (' + c.censored.k + '/' + c.censored.n + ')', 'Window still open and no round yet'));
    cards.appendChild(card('QPR in last 2 quarters', pct(c.recentQpr.share) + ' (' + c.recentQpr.k + '/' + c.recentQpr.n + ')', 'Invested companies with a QPR since ' + c.recentQpr.since));
  }

  /* ------------------------------------------------------------------ */
  /* 11. Founder explorer                                                */
  /* ------------------------------------------------------------------ */

  var EXPLORER_COLS = [
    { key: 'company', label: 'Company' },
    { key: 'role', label: 'Role' },
    { key: 'decision', label: 'Decision' },
    { key: 'fund', label: 'Fund' },
    { key: 'vertical', label: 'Vertical' },
    { key: 'stage', label: 'Stage' },
    { key: 'vintage', label: 'Vintage', num: true },
    { key: 'rater', label: 'Rater' }
  ];

  function sortRows(rows) {
    var k = state.sort.key, dir = state.sort.dir;
    function val(r) {
      if (k.indexOf('score:') === 0) { var s = r.scores[k.slice(6)]; return s ? s.score : null; }
      return r[k];
    }
    return rows.slice().sort(function (a, b) {
      var va = val(a), vb = val(b);
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * dir;
      if (typeof va === 'boolean' || typeof vb === 'boolean') return ((va ? 1 : 0) - (vb ? 1 : 0)) * dir;
      return String(va).localeCompare(String(vb)) * dir;
    });
  }

  function renderExplorerControls() {
    var box = clear($('explorer-controls'));
    var search = el('input', { type: 'search', placeholder: 'Search company, role, words', value: state.search });
    search.addEventListener('input', function () { state.search = search.value; renderExplorerTable(); });
    box.appendChild(search);
    box.appendChild(switchToggle('Scored founders only', state.scoredOnly, function (v) { state.scoredOnly = v; renderExplorerTable(); }));
    box.appendChild(el('span', { class: 'muted small', id: 'explorer-count' }));
  }

  var explorerCache = null;

  function renderExplorerTable() {
    var t = explorerCache || (explorerCache = A.founderTable(DATA, state.filters));
    var rows = t.rows;
    if (state.scoredOnly) rows = rows.filter(function (r) { return r.rater != null; });
    var q = state.search.trim().toLowerCase();
    if (q) {
      rows = rows.filter(function (r) {
        return [r.company, r.role, r.vertical, r.fund, r.status, r.words.join(' '), r.rater, r.decision].join(' ').toLowerCase().indexOf(q) >= 0;
      });
    }
    rows = sortRows(rows);
    $('explorer-count').textContent = rows.length + ' founders shown of ' + t.rows.length;

    function header(key, label, numeric, title) {
      var sorted = state.sort.key === key;
      return { label: label, num: numeric, sortable: true, sorted: sorted, dir: state.sort.dir, title: title,
        onclick: function () {
          if (sorted) state.sort.dir = -state.sort.dir; else { state.sort.key = key; state.sort.dir = key.indexOf('score:') === 0 || numeric ? -1 : 1; }
          renderExplorerTable();
        } };
    }
    var headers = EXPLORER_COLS.map(function (c) { return header(c.key, c.label, c.num); });
    t.keys.forEach(function (k) { headers.push(header('score:' + k, ABBR[k] || k, true, t.labels[k])); });
    headers.push(header('n1', '1s', true));
    headers.push(header('n5', '5s', true));
    headers.push(header('conviction', 'Conviction', true));
    headers.push({ label: 'Words' });
    headers.push(header('graduated', 'Graduated', false));
    headers.push(header('months', 'Months', true));
    headers.push(header('moic_24', 'MOIC 24m', true));
    headers.push(header('status', 'Status', false));

    var body = rows.map(function (r) {
      var tr = el('tr', { class: 'clickable' + (state.selectedFounder === r.founder_id ? ' selected' : '') });
      tr.addEventListener('click', function () { state.selectedFounder = r.founder_id; renderExplorerTable(); renderDetail(); });
      tr.appendChild(td(r.company));
      tr.appendChild(td(r.role));
      tr.appendChild(td(capital(r.decision)));
      tr.appendChild(td(r.fund || ''));
      tr.appendChild(td(r.vertical));
      tr.appendChild(td(r.stage));
      tr.appendChild(td(r.vintage != null ? String(r.vintage) : '', 'num'));
      tr.appendChild(td(r.rater || el('span', { class: 'faint', text: 'none' })));
      t.keys.forEach(function (k) {
        var s = r.scores[k];
        if (!s || s.score == null) tr.appendChild(td(el('span', { class: 'score-cell na', text: r.rater ? 'NA' : '' , title: 'Not assessed' }), 'num'));
        else tr.appendChild(td(el('span', { class: 'score-cell conf-' + (s.confidence || 'M'), text: String(s.score), title: 'Confidence ' + (s.confidence || 'n/a') }), 'num'));
      });
      tr.appendChild(td(r.rater ? String(r.n1) : '', 'num'));
      tr.appendChild(td(r.rater ? String(r.n5) : '', 'num'));
      tr.appendChild(td(r.conviction != null ? String(r.conviction) : '', 'num'));
      tr.appendChild(td(r.words.join(', '), 'small'));
      tr.appendChild(td(tag(gradLabel(r.graduated), r.graduated === true ? 'good' : (r.graduated === false ? 'bad' : null))));
      tr.appendChild(td(r.months != null ? String(r.months) : '', 'num'));
      tr.appendChild(td(r.decision === 'invested' ? mult(r.moic_24) : (isNum(r.hypothetical_moic) ? mult(r.hypothetical_moic) + ' hyp.' : ''), 'num nowrap'));
      tr.appendChild(td(statusLabel(r.status)));
      return tr;
    });
    clear($('explorer-table')).appendChild(table(headers, body));
  }

  function sparkline(series) {
    var vals = series.map(function (r) { return r.gross_moic; }).filter(isNum);
    if (!vals.length) return el('p', { class: 'muted small', text: 'No MOIC marks.' });
    var w = 320, h = 56, pad = 4;
    var max = Math.max(1.2, Math.max.apply(null, vals));
    var pts = series.map(function (r, i) {
      var x = pad + (series.length === 1 ? 0 : (i / (series.length - 1)) * (w - 2 * pad));
      var y = h - pad - ((isNum(r.gross_moic) ? r.gross_moic : 0) / max) * (h - 2 * pad);
      return x.toFixed(1) + ',' + y.toFixed(1);
    });
    var oneY = h - pad - (1 / max) * (h - 2 * pad);
    var svg = '<svg class="sparkline" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' +
      '<line x1="0" y1="' + oneY.toFixed(1) + '" x2="' + w + '" y2="' + oneY.toFixed(1) + '" stroke="' + C.line + '" stroke-dasharray="3 3" />' +
      '<polyline fill="none" stroke="' + C.blue + '" stroke-width="2" points="' + pts.join(' ') + '" />' +
      '</svg>';
    var wrap = el('div', { html: svg });
    wrap.appendChild(el('div', { class: 'small muted', text: series[0].quarter + ' to ' + series[series.length - 1].quarter + ', latest ' + mult(vals[vals.length - 1]) + ', peak ' + mult(Math.max.apply(null, vals)) + '. Dashed line is 1.0x.' }));
    return wrap;
  }

  function renderDetail() {
    var box = clear($('explorer-detail'));
    var t = explorerCache || (explorerCache = A.founderTable(DATA, state.filters));
    var r = t.rows.filter(function (x) { return x.founder_id === state.selectedFounder; })[0];
    if (!r) { box.appendChild(el('p', { class: 'muted', text: 'Select a founder to see the profile.' })); return; }

    var left = el('div');
    left.appendChild(el('h3', { text: r.display_name }));
    left.appendChild(el('p', { class: 'muted small', style: { marginBottom: '10px' }, text: capital(r.decision) + (r.fund ? ', ' + r.fund : '') + ', ' + r.vertical + ', ' + r.stage + ' entry ' + (r.entry_date || '') + (r.pass_stage ? ', passed at ' + r.pass_stage + ' (' + r.pass_reason + ')' : '') }));
    var profile = el('div', { class: 'profile' });
    if (!r.rater) profile.appendChild(el('p', { class: 'muted small', text: 'No entry assessment for this founder.' }));
    t.keys.forEach(function (k) {
      var s = r.scores[k];
      var row = el('div', { class: 'profile-row' });
      row.appendChild(el('span', { class: 'dim', title: t.labels[k], text: shortLabel(k, t.labels[k]) }));
      var track = el('div', { class: 'bar-track' });
      if (s && s.score != null) {
        var opacity = s.confidence === 'H' ? 1 : (s.confidence === 'M' ? 0.7 : 0.45);
        track.appendChild(el('div', { class: 'bar', style: { width: (s.score / 5 * 100) + '%', opacity: String(opacity) } }));
        row.appendChild(track);
        row.appendChild(el('span', { class: 'val' }, [String(s.score), ' ', tag(s.confidence || 'n/a')]));
      } else {
        track.appendChild(el('div', { class: 'bar na' }));
        row.appendChild(track);
        row.appendChild(el('span', { class: 'val muted', text: 'Not assessed' }));
      }
      profile.appendChild(row);
    });
    left.appendChild(profile);
    if (r.rater) left.appendChild(el('p', { class: 'muted small', style: { marginTop: '8px' }, text: 'Entry scores from ' + (r.entry_stage === 'stage2' ? 'stage 2' : 'stage 1') + ' by ' + r.rater + ' on ' + r.entry_date_assessed + '. ' + r.n5 + ' fives, ' + r.n1 + ' ones, ' + r.nNull + ' not assessed. Mean ' + num(r.mean, 2) + ' (reference only, we do not average). Bar opacity is confidence.' }));

    var mid = el('div');
    mid.appendChild(el('h3', { text: 'Intangibles' }));
    if (r.rater) {
      mid.appendChild(el('p', {}, r.words.map(function (w) { return tag(w, 'blue'); }).reduce(function (acc, t, i) { if (i) acc.push(' '); acc.push(t); return acc; }, [])));
      mid.appendChild(el('p', { class: 'small muted', style: { marginTop: '8px' }, text: 'Lean in' }));
      mid.appendChild(el('p', { class: 'quote', text: r.lean_in || 'n/a' }));
      mid.appendChild(el('p', { class: 'small muted', text: 'Worry' }));
      mid.appendChild(el('p', { class: 'quote', text: r.worry || 'n/a' }));
      var kv = el('dl', { class: 'kv' });
      kv.appendChild(el('dt', { text: 'Conviction' })); kv.appendChild(el('dd', { text: r.conviction != null ? r.conviction + ' of 5' : 'n/a' }));
      kv.appendChild(el('dt', { text: 'Would back again' })); kv.appendChild(el('dd', { text: capital(r.would_back_again) || 'n/a' }));
      kv.appendChild(el('dt', { text: 'Themes' })); kv.appendChild(el('dd', { text: r.themes.length ? r.themes.join(', ') : 'none' }));
      kv.appendChild(el('dt', { text: 'Specific lean-in' })); kv.appendChild(el('dd', { text: A.isSpecific(r.lean_in) ? 'Yes' : 'No' }));
      kv.appendChild(el('dt', { text: 'Worry keywords' })); kv.appendChild(el('dd', { text: String(A.worryIntensity(r.worry)) }));
      mid.appendChild(kv);
    } else mid.appendChild(el('p', { class: 'muted small', text: 'No entry assessment.' }));
    if (r.archetype) {
      mid.appendChild(el('h3', { style: { marginTop: '14px' }, text: 'Archetype' }));
      var ak = el('dl', { class: 'kv' });
      [['Background', r.archetype.background], ['Founder-market fit', r.archetype.fmf_type], ['Team shape', r.archetype.team_shape],
        ['Shared history', r.archetype.prior_shared_history ? 'Yes' : 'No'], ['Repeat founder', r.archetype.repeat_founder ? 'Yes' : 'No'], ['Prior exit', r.archetype.prior_exit]
      ].forEach(function (p) { ak.appendChild(el('dt', { text: p[0] })); ak.appendChild(el('dd', { text: p[1] || 'n/a' })); });
      mid.appendChild(ak);
    }

    var right = el('div');
    right.appendChild(el('h3', { text: 'Outcome' }));
    var ok = el('dl', { class: 'kv' });
    ok.appendChild(el('dt', { text: 'Graduated' })); ok.appendChild(el('dd', {}, tag(gradLabel(r.graduated), r.graduated === true ? 'good' : (r.graduated === false ? 'bad' : null))));
    ok.appendChild(el('dt', { text: 'Window' })); ok.appendChild(el('dd', { text: r.window_months ? r.window_months + ' months, ' + (r.window_closed ? 'closed' : 'open') : 'n/a' }));
    ok.appendChild(el('dt', { text: 'Months to round' })); ok.appendChild(el('dd', { text: r.months != null ? String(r.months) : 'n/a' }));
    ok.appendChild(el('dt', { text: 'Up round' })); ok.appendChild(el('dd', { text: r.up_round === true ? 'Yes' : (r.up_round === false ? 'No, flat or down' : 'No round yet') }));
    ok.appendChild(el('dt', { text: 'Status' })); ok.appendChild(el('dd', { text: statusLabel(r.status) }));
    ok.appendChild(el('dt', { text: 'Current stage' })); ok.appendChild(el('dd', { text: r.current_stage || 'n/a' }));
    ok.appendChild(el('dt', { text: 'Headcount' })); ok.appendChild(el('dd', { text: isNum(r.headcount_entry) ? r.headcount_entry + ' to ' + r.headcount_now : 'n/a' }));
    if (r.decision === 'invested') {
      ok.appendChild(el('dt', { text: 'MOIC 24m / 36m' })); ok.appendChild(el('dd', { text: mult(r.moic_24) + ' / ' + mult(r.moic_36) }));
      ok.appendChild(el('dt', { text: 'Motive led follow-on' })); ok.appendChild(el('dd', { text: r.motive_led_followon ? 'Yes (label leakage risk)' : 'No' }));
    } else {
      ok.appendChild(el('dt', { text: 'Hypothetical MOIC' })); ok.appendChild(el('dd', { text: isNum(r.hypothetical_moic) ? mult(r.hypothetical_moic) : 'n/a' }));
    }
    right.appendChild(ok);
    if (r.decision === 'invested') {
      right.appendChild(el('h3', { style: { marginTop: '14px' }, text: 'Gross MOIC by quarter' }));
      right.appendChild(sparkline(r.moic_series));
      if (r.last_health) {
        right.appendChild(el('h3', { style: { marginTop: '14px' }, text: 'Latest QPR health check' }));
        var hk = el('dl', { class: 'kv' });
        ['execution', 'talent', 'self_awareness', 'resilience', 'relationship'].forEach(function (k) {
          var v = r.last_health[k];
          hk.appendChild(el('dt', { text: shortLabel(k, k === 'relationship' ? 'Relationship' : dimLabel(k)) }));
          hk.appendChild(el('dd', {}, tag({ G: 'Green', A: 'Amber', R: 'Red' }[v] || v || 'n/a', { G: 'good', A: 'caution', R: 'bad' }[v])));
        });
        hk.appendChild(el('dt', { text: 'Milestones' })); hk.appendChild(el('dd', { text: r.last_health.milestones || 'n/a' }));
        right.appendChild(hk);
        if (r.last_health.what_changed) right.appendChild(el('p', { class: 'quote', style: { marginTop: '8px' }, text: r.last_health.what_changed }));
      }
    }
    box.appendChild(el('div', { class: 'detail' }, [left, mid, right]));
  }

  /* ------------------------------------------------------------------ */
  /* 12. Assessment form                                                 */
  /* ------------------------------------------------------------------ */

  function field(labelText, input, cls) {
    return el('div', { class: 'field ' + (cls || '') }, [el('label', { text: labelText }), input]);
  }
  function select(name, options, value) {
    var s = el('select', { name: name });
    options.forEach(function (o) {
      var opt = typeof o === 'string' ? { value: o, label: o } : o;
      s.appendChild(el('option', { value: opt.value, text: opt.label, selected: opt.value === value }));
    });
    return s;
  }

  function companyOptions() {
    var anon = state.filters.anonymize;
    var list = DATA.companies.slice().sort(function (a, b) { return A.companyName(a, anon).localeCompare(A.companyName(b, anon)); });
    return [{ value: '__new__', label: 'New company' }].concat(list.map(function (c) { return { value: c.id, label: A.companyName(c, anon) + ' (' + c.decision + ')' }; }));
  }

  function buildForm() {
    var form = clear($('assessment-form'));
    var company = select('company', companyOptions(), '__new__');
    form.appendChild(field('Company', company));
    var newName = el('input', { type: 'text', name: 'new_name', placeholder: 'Company name' });
    form.appendChild(field('New company name', newName, 'f-new'));
    var decision = select('decision', [{ value: 'passed', label: 'Passed' }, { value: 'invested', label: 'Invested' }], 'passed');
    form.appendChild(field('Decision', decision, 'f-new'));
    form.appendChild(field('Vertical', select('vertical', VERTICALS, 'Payments'), 'f-new'));
    form.appendChild(field('Stage at entry', select('stage_at_entry', STAGES, 'Seed'), 'f-new'));
    form.appendChild(field('Fund', select('fund', FUNDS, 'Fund II'), 'f-new f-invested'));
    form.appendChild(field('Pass stage', select('pass_stage', PASS_STAGES, 'Active DD'), 'f-new f-passed'));
    form.appendChild(field('Pass reason', select('pass_reason', A.PASS_REASONS.map(function (r) { return { value: r, label: capital(r) }; }), 'founder'), 'f-new f-passed'));

    form.appendChild(field('Founder role', select('role', ['CEO', 'CTO', 'COO'], 'CEO')));
    form.appendChild(field('Stage', select('stage', [{ value: 'stage1', label: 'Stage 1, first meeting' }, { value: 'stage2', label: 'Stage 2, diligence' }], 'stage1')));
    form.appendChild(field('Rater', select('rater', RATERS, 'Rater A')));
    var founderNote = el('p', { class: 'muted small full', id: 'founder-note' });
    form.appendChild(founderNote);

    var dims = el('fieldset', { class: 'full' }, el('legend', { text: 'Dimension scores: 1 to 5 or Not assessed' }));
    var grid = el('div', { class: 'dim-grid' });
    (DATA.dimensions || []).forEach(function (d) {
      var row = el('div', { class: 'dim-row' });
      row.appendChild(el('span', { text: d.label }));
      row.appendChild(select('score_' + d.key, [{ value: '', label: 'Not assessed' }, '1', '2', '3', '4', '5'], ''));
      grid.appendChild(row);
    });
    dims.appendChild(grid);
    form.appendChild(dims);

    var arch = el('fieldset', { class: 'full' }, el('legend', { text: 'Archetype (used when the founder is new)' }));
    var ag = el('div', { class: 'form', style: { gap: '8px 16px' } });
    ag.appendChild(field('Background', select('background', A.BACKGROUNDS, 'Domain insider')));
    ag.appendChild(field('Founder-market fit', select('fmf_type', ['Lived the problem', 'Sold into it', 'Built it before', 'Outsider with insight'], 'Lived the problem')));
    ag.appendChild(field('Team shape', select('team_shape', ['Solo', 'Two complementary', 'Three or more'], 'Two complementary')));
    ag.appendChild(field('Prior shared history', select('prior_shared_history', [{ value: 'false', label: 'No' }, { value: 'true', label: 'Yes' }], 'false')));
    ag.appendChild(field('Repeat founder', select('repeat_founder', [{ value: 'false', label: 'No' }, { value: 'true', label: 'Yes' }], 'false')));
    ag.appendChild(field('Prior exit', select('prior_exit', ['None', 'Small', 'Meaningful'], 'None')));
    arch.appendChild(ag);
    form.appendChild(arch);

    var words = el('div', { class: 'words-row' }, [1, 2, 3].map(function (i) { return el('input', { type: 'text', name: 'word' + i, placeholder: 'word ' + i, required: true, maxlength: 24 }); }));
    form.appendChild(field('Three words (required)', words, 'full'));
    form.appendChild(field('Lean in: what made you lean in, one sentence', el('textarea', { name: 'lean_in', placeholder: 'Closed 3 design partners before the seed' }), 'span-2'));
    form.appendChild(field('Worry: what worries you, one sentence', el('textarea', { name: 'worry', placeholder: 'Solo founder, no technical hire yet' })));
    form.appendChild(field('Conviction (1 to 5)', select('conviction', ['1', '2', '3', '4', '5'], '3')));
    form.appendChild(field('Would back again', select('would_back_again', [{ value: 'unsure', label: 'Unsure' }, { value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }], 'unsure')));
    form.appendChild(field('Integrity check', select('integrity', [{ value: 'pending', label: 'Pending' }, { value: 'passed', label: 'Passed' }], 'pending')));

    var msg = el('p', { class: 'form-msg full', id: 'form-msg' });
    var actions = el('div', { class: 'form-actions full' }, [
      el('button', { type: 'submit', class: 'btn primary', text: 'Add assessment' }),
      el('button', { type: 'button', class: 'btn danger', text: 'Clear added', onclick: clearAdded }),
      el('span', { class: 'muted small', id: 'added-count' })
    ]);
    form.appendChild(msg);
    form.appendChild(actions);

    function syncVisibility() {
      var isNew = company.value === '__new__';
      form.querySelectorAll('.f-new').forEach(function (n) { n.classList.toggle('hidden', !isNew); });
      if (isNew) {
        var inv = decision.value === 'invested';
        form.querySelectorAll('.f-invested').forEach(function (n) { n.classList.toggle('hidden', !inv); });
        form.querySelectorAll('.f-passed').forEach(function (n) { n.classList.toggle('hidden', inv); });
        founderNote.textContent = 'A new company gets a censored outcome (window open, no round) so it appears as pending until an outcome is recorded.';
      } else {
        var role = form.elements.role.value;
        var existing = DATA.founders.filter(function (f) { return f.company_id === company.value && f.role === role; })[0];
        founderNote.textContent = existing
          ? 'Adds to the existing ' + role + ' of this company; archetype fields are ignored. If a stage 2 already exists the latest one becomes the entry score.'
          : 'No ' + role + ' recorded for this company yet; a new founder will be created from the archetype fields.';
      }
    }
    company.addEventListener('change', syncVisibility);
    decision.addEventListener('change', syncVisibility);
    form.elements.role.addEventListener('change', syncVisibility);
    syncVisibility();
    if (!form.dataset.bound) { form.addEventListener('submit', onSubmit); form.dataset.bound = '1'; }
    updateAddedCount();
  }

  function updateAddedCount() {
    var n = state.added.assessments.length;
    var node = $('added-count');
    if (node) node.textContent = n ? n + ' added assessment' + (n > 1 ? 's' : '') + ' stored in this browser' : 'Nothing added yet';
  }

  function nextId(prefix, list) {
    var n = 1;
    var ids = {};
    list.forEach(function (x) { ids[x.id] = true; });
    while (ids[prefix + String(n).padStart(3, '0')]) n++;
    return prefix + String(n).padStart(3, '0');
  }

  function onSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var F = form.elements;
    var msg = $('form-msg');
    msg.className = 'form-msg full';
    var errors = [];

    var words = [1, 2, 3].map(function (i) { return F['word' + i].value.trim().toLowerCase(); });
    if (words.some(function (w) { return !w; })) errors.push('All three words are required.');
    var scores = {};
    var nScored = 0;
    (DATA.dimensions || []).forEach(function (d) {
      var v = F['score_' + d.key].value;
      var s = v === '' ? null : Number(v);
      if (s != null) nScored++;
      scores[d.key] = { score: s, confidence: null };
    });
    if (nScored < 4) errors.push('Score at least 4 dimensions (' + nScored + ' scored).');
    var isNew = F.company.value === '__new__';
    if (isNew && !F.new_name.value.trim()) errors.push('New company needs a name.');
    if (errors.length) { msg.classList.add('error'); msg.textContent = errors.join(' '); return; }

    var added = { companies: [], founders: [], assessments: [], outcomes: [] };
    var company;
    if (isNew) {
      var decision = F.decision.value;
      var stage = F.stage_at_entry.value;
      company = {
        id: nextId('c_add_', DATA.companies),
        name: F.new_name.value.trim(),
        anon_name: 'Added company ' + (state.added.companies.length + 1),
        decision: decision,
        fund: decision === 'invested' ? F.fund.value : null,
        vertical: F.vertical.value,
        stage_at_entry: stage,
        current_stage: stage,
        entry_date: AS_OF,
        vintage_year: Number(AS_OF.slice(0, 4)),
        pass_stage: decision === 'passed' ? F.pass_stage.value : null,
        pass_reason: decision === 'passed' ? F.pass_reason.value : null,
        pass_reason_note: null
      };
      added.companies.push(company);
      added.outcomes.push({
        company_id: company.id, as_of: AS_OF, entry_pre_money: null, next_round_date: null, next_round_pre_money: null,
        up_round: null, graduated: null, graduation_months: null, window_months: { 'Pre-Seed': 18, 'Seed': 24, 'Series A': 30 }[stage] || 24,
        window_closed: false, motive_led_followon: false, headcount_entry: null, headcount_now: null, headcount_growth_yoy: null,
        status: 'active', hypothetical_moic: null
      });
    } else {
      company = DATA.companies.filter(function (c) { return c.id === F.company.value; })[0];
      if (!company) { msg.classList.add('error'); msg.textContent = 'Company not found.'; return; }
    }
    var role = F.role.value;
    var founder = DATA.founders.filter(function (f) { return f.company_id === company.id && f.role === role; })[0];
    if (!founder) {
      founder = {
        id: nextId('f_add_', DATA.founders),
        company_id: company.id,
        role: role,
        display_name: role + ', ' + company.name,
        archetype: {
          background: F.background.value, fmf_type: F.fmf_type.value, team_shape: F.team_shape.value,
          prior_shared_history: F.prior_shared_history.value === 'true', repeat_founder: F.repeat_founder.value === 'true', prior_exit: F.prior_exit.value
        }
      };
      added.founders.push(founder);
    }
    var themes = [];
    words.forEach(function (w) { var t = WORD_THEME[w]; if (t && themes.indexOf(t) < 0) themes.push(t); });
    var stageVal = F.stage.value;
    var assessment = {
      id: nextId('a_add_', DATA.assessments),
      founder_id: founder.id,
      stage: stageVal,
      date: AS_OF,
      rater: F.rater.value,
      cohort: 'forward',
      scores: scores,
      intangibles: {
        words: words,
        lean_in: F.lean_in.value.trim(),
        worry: F.worry.value.trim(),
        conviction: Number(F.conviction.value),
        would_back_again: F.would_back_again.value,
        themes: themes
      },
      integrity: F.integrity.value,
      decision_at_stage: stageVal === 'stage2' ? (company.decision === 'invested' ? 'invest' : 'pass') : 'advance',
      health_check: null
    };
    added.assessments.push(assessment);

    applyAdded(added);
    ['companies', 'founders', 'assessments', 'outcomes'].forEach(function (k) { state.added[k] = state.added[k].concat(added[k]); });
    persistAdded();
    msg.classList.add('ok');
    msg.textContent = 'Added ' + stageVal.replace('stage', 'stage ') + ' assessment for ' + A.displayName(founder, company, state.filters.anonymize) + '. All sections re-computed.';
    form.reset();
    buildForm();
    $('form-msg').className = 'form-msg full ok';
    $('form-msg').textContent = msg.textContent;
    renderAll();
  }

  function applyAdded(added) {
    ['companies', 'founders', 'assessments', 'outcomes'].forEach(function (k) {
      var list = DATA[k] = DATA[k] || [];
      var ids = {};
      list.forEach(function (x) { ids[x.id || x.company_id] = true; });
      (added[k] || []).forEach(function (x) {
        var id = x.id || x.company_id;
        if (k === 'outcomes' ? !list.some(function (o) { return o.company_id === x.company_id; }) : !ids[id]) list.push(x);
      });
    });
  }

  function persistAdded() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.added));
    } catch (err) {
      var msg = $('form-msg');
      if (msg) { msg.className = 'form-msg full error'; msg.textContent = 'Could not persist to localStorage (' + (err && err.message ? err.message : 'blocked') + '). The assessment is kept in memory for this session.'; }
    }
  }

  function loadAdded() {
    var raw = null;
    try { raw = window.localStorage.getItem(STORAGE_KEY); } catch (err) { raw = null; }
    if (!raw) return;
    try {
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;
      ['companies', 'founders', 'assessments', 'outcomes'].forEach(function (k) { state.added[k] = Array.isArray(parsed[k]) ? parsed[k] : []; });
      applyAdded(state.added);
    } catch (err) {
      state.added = { companies: [], founders: [], assessments: [], outcomes: [] };
    }
  }

  function clearAdded() {
    var ids = {};
    ['companies', 'founders', 'assessments'].forEach(function (k) { state.added[k].forEach(function (x) { ids[x.id] = true; }); });
    var companyIds = {};
    state.added.companies.forEach(function (c) { companyIds[c.id] = true; });
    DATA.companies = DATA.companies.filter(function (c) { return !ids[c.id]; });
    DATA.founders = DATA.founders.filter(function (f) { return !ids[f.id]; });
    DATA.assessments = DATA.assessments.filter(function (a) { return !ids[a.id]; });
    DATA.outcomes = DATA.outcomes.filter(function (o) { return !companyIds[o.company_id]; });
    state.added = { companies: [], founders: [], assessments: [], outcomes: [] };
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignore */ }
    if (state.selectedFounder && !DATA.founders.some(function (f) { return f.id === state.selectedFounder; })) state.selectedFounder = null;
    buildForm();
    var msg = $('form-msg');
    msg.className = 'form-msg full ok';
    msg.textContent = 'Added assessments cleared.';
    renderAll();
  }

  /* ------------------------------------------------------------------ */
  /* Render everything                                                   */
  /* ------------------------------------------------------------------ */

  function renderAll() {
    explorerCache = null;
    var steps = [renderHeadline, renderPopulation, renderLift, renderVeto, renderDecision, renderExplorerControls, renderExplorerTable, renderDetail];
    var supportingDetail = $('supporting-detail');
    if (!supportingDetail || supportingDetail.open) {
      steps.push(renderPersona, renderStage, renderIntangibles, renderMoic, renderRaters, renderCompleteness);
    }
    steps.forEach(function (fn) {
      try { fn(); } catch (err) {
        if (window.console) console.error('Render step failed', fn.name, err);
      }
    });
    updateAddedCount();
  }

  $('asOf').textContent = AS_OF;
  loadAdded();
  renderControls();
  buildForm();
  renderAll();

  /* The six exploratory sections render lazily the first time this is opened, so charts get a real
     width to lay out against instead of the zero-width a closed <details> would have handed them. */
  var supportingDetailEl = $('supporting-detail');
  if (supportingDetailEl) {
    supportingDetailEl.addEventListener('toggle', function () {
      if (supportingDetailEl.open) {
        [renderPersona, renderStage, renderIntangibles, renderMoic, renderRaters, renderCompleteness].forEach(function (fn) {
          try { fn(); } catch (err) { if (window.console) console.error('Render step failed', fn.name, err); }
        });
      }
    });
  }
})();

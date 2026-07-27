/* ═══════════════════════════════════════════════════════════
   ATNOS — shared shell: header, mobile nav, footer, cookies,
   scroll reveal. Injected on every page so the markup for the
   chrome lives in exactly one place.
   ═══════════════════════════════════════════════════════════ */
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── navigation model (mirrors ADOS-site-content, the source document) ── */
const NAV = [
  {label:'Product', href:'index.html#platform', flyout:[
    ['Overview','index.html','What the platform does today.'],
    ['Integrations','index.html#integrations','Connect the services you already use.'],
    ['Enterprise','security.html','Roles, isolation, audit and support.'],
  ]},
  {label:'Pricing', href:'pricing.html'},
  {label:'Security', href:'security.html'},
  {label:'Resources', href:'developers.html', flyout:[
    ['Documentation','developers.html','Concepts, setup and workspace guides.'],
    ['API Reference','api.html','Endpoints, authentication and webhooks.'],
    ['Support','support.html','Answers and how to reach a person.'],
    ['Status','status.html','Live availability of every service.'],
  ]},
  {label:'About', href:'about.html'},
  {label:'Contact', href:'contact.html'},
];

const FOOT = [
  ['Product',[['Overview','index.html'],['Integrations','index.html#integrations'],['Pricing','pricing.html'],['Enterprise','security.html']]],
  ['Resources',[['Documentation','developers.html'],['Blog','#'],['Help Center','support.html'],['Status','status.html']]],
  ['Developers',[['API Documentation','api.html'],['Webhooks','api.html#webhooks'],['Responsible Disclosure','security.html#disclosure']]],
  ['Company',[['About','about.html'],['Careers','#'],['Contact','contact.html']]],
  ['Support',[['Support Center','support.html'],['Contact us','contact.html'],['System status','status.html']]],
  ['Legal',[['Privacy Policy','privacy-policy.html'],['Terms of Service','terms-of-service.html'],['Cookie Policy','cookie-policy.html'],['Security','security.html'],['Data Deletion','data-deletion.html']]],
];

/* current page as a bare slug — works for /about.html (file://) and /about (Vercel cleanUrls) */
const slug = p => (p.split('/').pop() || 'index').toLowerCase().replace(/\.html$/, '') || 'index';
const PAGE = slug(location.pathname);
/* Mark: an A drawn as one unbroken stroke, its crossbar replaced by the
   core everything reports into. Legible down to 16px. */
const LOGO = `<span class="logo-mark" aria-hidden="true"><i></i><b></b>
  <svg viewBox="0 0 32 32" fill="none">
    <path class="mk-a" d="M6.2 25.8 14.9 7.3a1.25 1.25 0 0 1 2.2 0l8.7 18.5"
      stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle class="mk-core" cx="16" cy="19.4" r="3.05" fill="currentColor"/>
  </svg></span>ATNOS`;

/* ── header ── */
function buildHeader() {
  const host = document.getElementById('hdr');
  if (!host) return;
  const link = it => {
    /* a section is current when its own page or one of its flyout pages is open */
    const hit = h => slug(h.split('#')[0]) === PAGE;
    const active = hit(it.href) || (it.flyout || []).some(([,h]) => hit(h)) ? ' aria-current="page"' : '';
    if (!it.flyout) return `<a href="${it.href}" class="nav-link"${active}>${it.label}</a>`;
    return `<span class="has-flyout">
      <a href="${it.href}" class="nav-link"${active}>${it.label}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="opacity:.6"><path d="M6 9l6 6 6-6"/></svg>
      </a>
      <span class="flyout">${it.flyout.map(([t,h,d]) =>
        `<a href="${h}"><span class="fl-t">${t}</span><span class="fl-d">${d}</span></a>`).join('')}</span>
    </span>`;
  };
  host.className = 'site';
  host.innerHTML = `
  <nav class="container nav" aria-label="Primary">
    <a href="index.html" class="logo">${LOGO}</a>
    <div class="nav-links">
      ${NAV.map(link).join('')}
      <span class="nav-cta">
        <a href="#" class="btn btn-sm btn-ghost-inv"><span>Sign in</span></a>
        <a href="contact.html" class="btn btn-sm btn-inverse"><span>Start free</span></a>
      </span>
    </div>
    <button class="burger" aria-label="Open navigation" aria-expanded="false" id="burger">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </nav>
  <div class="mobile-menu" id="mmenu">
    <div class="container">
      ${NAV.flatMap(it => it.flyout ? it.flyout.map(([t,h]) => [t,h]) : [[it.label,it.href]])
           .map(([t,h]) => `<a href="${h}">${t}</a>`).join('')}
      <div class="mm-cta">
        <a href="#" class="btn btn-sm btn-glass" style="flex:1"><span>Sign in</span></a>
        <a href="contact.html" class="btn btn-sm btn-inverse" style="flex:1"><span>Start free</span></a>
      </div>
    </div>
  </div>`;

  const burger = document.getElementById('burger'), mm = document.getElementById('mmenu');
  burger.addEventListener('click', () => {
    const open = mm.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });

  /* condense with hysteresis */
  let solid = false, raf = 0;
  const apply = () => {
    const y = scrollY;
    if (!solid && y > 24) { solid = true; host.classList.add('solid'); }
    else if (solid && y < 8) { solid = false; host.classList.remove('solid'); }
  };
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; apply(); }); }, {passive:true});
  apply();
}

/* ── footer ── */
function buildFooter() {
  const host = document.getElementById('ftr');
  if (!host) return;
  host.className = 'site';
  host.innerHTML = `
  <div class="container">
    <div class="f-grid">
      <div>
        <a href="index.html" class="f-logo">${LOGO}</a>
        <p style="margin-top:16px;max-width:20rem;font-size:15px;line-height:1.7" class="muted">
          Autonomous AI Marketing Platform. Connect the services you already use and run marketing operations from one workspace.</p>
        <address style="margin-top:24px;font-style:normal;font-size:14px;line-height:1.7" class="muted">
          <span style="display:block;color:hsl(var(--ink))">ATNOS Technologies Inc.</span>
          1 Market Street, Suite 3600<br>San Francisco, CA 94105<br>
          <a href="mailto:hello@atnos.ai" style="color:hsl(var(--ink));text-underline-offset:4px">hello@atnos.ai</a></address>
      </div>
      ${FOOT.map(([h,ls]) => `<nav aria-labelledby="f-${h}"><h2 class="f-h" id="f-${h}">${h}</h2>
        <ul>${ls.map(([l,u])=>`<li><a href="${u}" class="f-l">${l}</a></li>`).join('')}</ul></nav>`).join('')}
    </div>
    <div style="height:1px;background:hsl(var(--line))"></div>
    <div class="f-bot">
      <p>© 2026 ATNOS Technologies Inc. All rights reserved.</p>
      <div class="f-util">
        <a href="privacy-policy.html">All policies</a>
        <a href="data-deletion.html">Data deletion</a>
        <button type="button" id="ckopen">Cookie settings</button>
        <a href="status.html" style="display:inline-flex;align-items:center;gap:8px"><span class="dot ok"><i></i><b></b></span>All systems operational</a>
      </div>
    </div>
  </div>`;
  const fw = host.querySelector('.f-grid > div');
  const place = () => fw.style.gridColumn = innerWidth >= 1280 ? 'auto' : '1/-1';
  place(); addEventListener('resize', place);
  document.getElementById('ckopen').addEventListener('click', () => cookieEl.classList.add('show'));
}

/* ── cookie banner ── */
let cookieEl;
function buildCookies() {
  cookieEl = document.createElement('div');
  cookieEl.className = 'cookie';
  cookieEl.id = 'cookie';
  cookieEl.setAttribute('role','region');
  cookieEl.setAttribute('aria-label','Cookie consent');
  cookieEl.innerHTML = `
  <div class="cookie-in">
    <h2 style="font-size:16px;letter-spacing:-.015em">Cookies on atnos.ai</h2>
    <p style="margin-top:8px;max-width:42rem;font-size:14.5px;line-height:1.7;color:hsl(var(--muted))">
      Essential cookies keep the site secure and working. With your permission we also use analytics, functional and marketing cookies. You can change this at any time from Cookie settings in the footer.
      <a href="cookie-policy.html" style="font-weight:500;color:hsl(var(--ink));text-decoration:underline;text-underline-offset:4px">Cookie Policy</a>
    </p>
    <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:8px">
      <button class="btn btn-sm btn-accent" data-ck><span>Accept all</span></button>
      <button class="btn btn-sm btn-outline" data-ck><span>Reject non-essential</span></button>
      <button class="btn btn-sm btn-ghost" data-ck><span>Customize</span></button>
    </div>
  </div>`;
  document.body.appendChild(cookieEl);
  cookieEl.querySelectorAll('[data-ck]').forEach(b => b.addEventListener('click', () => {
    sessionStorage.setItem('atnos-consent','1');
    cookieEl.classList.remove('show');
  }));
  if (!sessionStorage.getItem('atnos-consent')) setTimeout(() => cookieEl.classList.add('show'), 1200);
}

/* ── scroll reveal ── */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), {threshold:.1, rootMargin:'-64px'});
function observeReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach((el,i) => {
    el.style.transitionDelay = `${Math.min(i%4,3)*60}ms`;
    io.observe(el);
  });
}

/* ── word-by-word headline reveal ── */
function words(el, text, base) {
  el.innerHTML = text.split(' ').map(w => `<span class="wr">${w}</span>`).join(' ');
  [...el.querySelectorAll('.wr')].forEach((s,i) =>
    setTimeout(() => s.classList.add('in'), RM ? 0 : base + i*45));
}

/* ── letter-by-letter reveal; `sparks` letters keep a slow lift afterwards ──
   Never pass sparks for text inside .accent-grad: a running transform
   animation gets composited, and a composited glyph loses the parent's
   background-clip:text fill, so the letter renders transparent. */
function letters(el, text, base, sparks = []) {
  el.innerHTML = [...text]
    .map(ch => ch === ' ' ? '<span class="lt sp"> </span>' : `<span class="lt">${ch}</span>`)
    .join('');
  const all = [...el.querySelectorAll('.lt')];
  all.forEach((s,i) => setTimeout(() => s.classList.add('in'), RM ? 0 : base + i*38));
  /* once the entrance has landed, drop the blur so nothing stays promoted */
  setTimeout(() => {
    all.forEach(s => s.classList.add('done'));
    if (RM) return;
    sparks.forEach((idx,n) => {
      const s = all[idx];
      if (!s) return;
      s.style.setProperty('--pd', `${n*1.6}s`);
      s.classList.add('pulse');
    });
  }, RM ? 0 : base + all.length*38 + 700);
}

/* ── boot ── */
buildHeader();
buildFooter();
buildCookies();
document.querySelectorAll('.fade').forEach(el =>
  setTimeout(() => el.classList.add('in'), RM ? 0 : +el.dataset.d || 0));
observeReveals();

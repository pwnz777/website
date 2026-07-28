/* ═══════════════════════════════════════════════════════════
   ATNOS — shared shell: header, mobile nav, footer, cookies,
   scroll reveal. Injected on every page so the markup for the
   chrome lives in exactly one place.

   Multilingual: English at the root, every other locale a folder of the
   same name (/es/, /pt/) mirroring the root filenames, so link targets are
   shared and only labels are per-locale. Locale comes from <html lang>,
   never from the URL, so a page dropped in the wrong folder shows its own
   language rather than guessing.
   ═══════════════════════════════════════════════════════════ */
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const DOC_LANG = (document.documentElement.lang || 'en').toLowerCase();
const LANG = DOC_LANG.startsWith('es') ? 'es' : DOC_LANG.startsWith('pt') ? 'pt' : 'en';
/* English sits at the root; every other locale is a folder of the same name */
const FOLDER = LANG === 'en' ? '' : LANG;
const LOCALES = [['en','English','EN'], ['es','Español','ES'], ['pt','Português','PT']];

/* ── one href table for both locales ── */
const HREF = {
  overview:'index.html', platform:'index.html#platform', integrations:'index.html#integrations',
  enterprise:'security.html', pricing:'pricing.html', security:'security.html',
  docs:'developers.html', api:'api.html', apiHooks:'api.html#webhooks', oauth:'oauth.html',
  support:'support.html', status:'status.html', about:'about.html', contact:'contact.html',
  privacy:'privacy-policy.html', terms:'terms-of-service.html', cookies:'cookie-policy.html',
  deletion:'data-deletion.html', disclosure:'security.html#disclosure',
  supportCenter:'support.html', contactUs:'contact.html', systemStatus:'status.html',
};

const NAV = [
  {id:'product', href:HREF.platform, flyout:['overview','integrations','enterprise']},
  {id:'pricing', href:HREF.pricing},
  {id:'security', href:HREF.security},
  {id:'resources', href:HREF.docs, flyout:['docs','api','oauth','support','status']},
  {id:'about', href:HREF.about},
  {id:'contact', href:HREF.contact},
];

const FOOT = [
  ['colProduct', ['overview','integrations','pricing','enterprise']],
  ['colResources', ['docs','support','status']],
  ['colDevelopers', ['api','apiHooks','disclosure']],
  ['colCompany', ['about','contact']],
  ['colSupport', ['supportCenter','contactUs','systemStatus']],
  ['colLegal', ['privacy','terms','cookies','oauth','deletion']],
];

/* ── copy ── */
const STR = {
  en: {
    product:'Product', pricing:'Pricing', security:'Security', resources:'Resources',
    about:'About', contact:'Contact',
    overview:['Overview','What the platform does today.'],
    integrations:['Integrations','Connect the services you already use.'],
    enterprise:['Enterprise','Roles, isolation, audit and support.'],
    docs:['Documentation','Concepts, setup and workspace guides.'],
    api:['API Reference','Endpoints, authentication and webhooks.'],
    oauth:['Connected access','What each connection asks for, and how to revoke it.'],
    support:['Support','Answers and how to reach a person.'],
    status:['Status','Live availability of every service.'],
    apiHooks:['Webhooks'], disclosure:['Responsible Disclosure'],
    privacy:['Privacy Policy'], terms:['Terms of Service'], cookies:['Cookie Policy'],
    deletion:['Data Deletion'], supportCenter:['Support Center'], contactUs:['Contact us'],
    systemStatus:['System status'],
    colProduct:'Product', colResources:'Resources', colDevelopers:'Developers',
    colCompany:'Company', colSupport:'Support', colLegal:'Legal',
    signIn:'Sign in', startFree:'Start free', openNav:'Open navigation', primaryNav:'Primary',
    blurb:'Autonomous AI Marketing Platform. Connect the services you already use and run marketing operations from one workspace.',
    rights:'© 2026 ATNOS Technologies Inc. All rights reserved.',
    allPolicies:'All policies', dataDeletion:'Data deletion', cookieSettings:'Cookie settings',
    operational:'All systems operational',
    ck: {
      region:'Cookie consent', title:'Cookies on atnos.ai',
      body:'Essential cookies keep the site secure and working. With your permission we also use analytics, functional and marketing cookies. You can change this at any time from Cookie settings in the footer.',
      policy:'Cookie Policy', accept:'Accept all', reject:'Reject non-essential', custom:'Customize',
    },
    langLabel:'Language', langShort:'EN',
  },
  es: {
    product:'Producto', pricing:'Precios', security:'Seguridad', resources:'Recursos',
    about:'Nosotros', contact:'Contacto',
    overview:['Visión general','Lo que la plataforma hace hoy.'],
    integrations:['Integraciones','Conecta los servicios que ya usas.'],
    enterprise:['Empresas','Roles, aislamiento, auditoría y soporte.'],
    docs:['Documentación','Conceptos, configuración y guías del espacio de trabajo.'],
    api:['Referencia de API','Endpoints, autenticación y webhooks.'],
    oauth:['Acceso conectado','Qué pide cada conexión y cómo revocarla.'],
    support:['Soporte','Respuestas y cómo hablar con una persona.'],
    status:['Estado','Disponibilidad en vivo de cada servicio.'],
    apiHooks:['Webhooks'], disclosure:['Divulgación responsable'],
    privacy:['Política de Privacidad'], terms:['Términos del Servicio'], cookies:['Política de Cookies'],
    deletion:['Eliminación de Datos'], supportCenter:['Centro de soporte'], contactUs:['Escríbenos'],
    systemStatus:['Estado del sistema'],
    colProduct:'Producto', colResources:'Recursos', colDevelopers:'Desarrolladores',
    colCompany:'Compañía', colSupport:'Soporte', colLegal:'Legal',
    signIn:'Iniciar sesión', startFree:'Empezar gratis', openNav:'Abrir navegación', primaryNav:'Principal',
    blurb:'Plataforma autónoma de marketing con IA. Conecta los servicios que ya usas y opera todo el marketing desde un solo espacio de trabajo.',
    rights:'© 2026 ATNOS Technologies Inc. Todos los derechos reservados.',
    allPolicies:'Todas las políticas', dataDeletion:'Eliminación de datos', cookieSettings:'Preferencias de cookies',
    operational:'Todos los sistemas operativos',
    ck: {
      region:'Consentimiento de cookies', title:'Cookies en atnos.ai',
      body:'Las cookies esenciales mantienen el sitio seguro y funcionando. Con tu permiso también usamos cookies analíticas, funcionales y de marketing. Puedes cambiarlo cuando quieras desde Preferencias de cookies en el pie de página.',
      policy:'Política de Cookies', accept:'Aceptar todas', reject:'Rechazar las no esenciales', custom:'Personalizar',
    },
    langLabel:'Idioma', langShort:'ES',
  },
  pt: {
    product:'Produto', pricing:'Preços', security:'Segurança', resources:'Recursos',
    about:'Sobre', contact:'Contato',
    overview:['Visão geral','O que a plataforma faz hoje.'],
    integrations:['Integrações','Conecte os serviços que você já usa.'],
    enterprise:['Empresas','Papéis, isolamento, auditoria e suporte.'],
    docs:['Documentação','Conceitos, configuração e guias do workspace.'],
    api:['Referência da API','Endpoints, autenticação e webhooks.'],
    oauth:['Acesso conectado','O que cada conexão pede e como revogá-la.'],
    support:['Suporte','Respostas e como falar com uma pessoa.'],
    status:['Status','Disponibilidade ao vivo de cada serviço.'],
    apiHooks:['Webhooks'], disclosure:['Divulgação responsável'],
    privacy:['Política de Privacidade'], terms:['Termos de Serviço'], cookies:['Política de Cookies'],
    deletion:['Exclusão de Dados'], supportCenter:['Central de suporte'], contactUs:['Fale conosco'],
    systemStatus:['Status do sistema'],
    colProduct:'Produto', colResources:'Recursos', colDevelopers:'Desenvolvedores',
    colCompany:'Empresa', colSupport:'Suporte', colLegal:'Jurídico',
    signIn:'Entrar', startFree:'Começar grátis', openNav:'Abrir navegação', primaryNav:'Principal',
    blurb:'Plataforma autônoma de marketing com IA. Conecte os serviços que você já usa e opere todo o marketing a partir de um único workspace.',
    rights:'© 2026 ATNOS Technologies Inc. Todos os direitos reservados.',
    allPolicies:'Todas as políticas', dataDeletion:'Exclusão de dados', cookieSettings:'Preferências de cookies',
    operational:'Todos os sistemas operacionais',
    ck: {
      region:'Consentimento de cookies', title:'Cookies em atnos.ai',
      body:'Os cookies essenciais mantêm o site seguro e funcionando. Com a sua permissão, também usamos cookies analíticos, funcionais e de marketing. Você pode mudar isso quando quiser em Preferências de cookies, no rodapé.',
      policy:'Política de Cookies', accept:'Aceitar todos', reject:'Recusar os não essenciais', custom:'Personalizar',
    },
    langLabel:'Idioma', langShort:'PT',
  },
};
const T = STR[LANG];
const label = id => Array.isArray(T[id]) ? T[id][0] : T[id];
const hint = id => Array.isArray(T[id]) ? (T[id][1] || '') : '';

/* current page as a bare slug — works for /about.html (file://) and /about (Vercel cleanUrls) */
const slug = p => (p.split('/').pop() || 'index').toLowerCase().replace(/\.html$/, '') || 'index';
/* the locale folder is not part of the page identity: /es/about is still `about` */
const PAGE = slug(location.pathname.replace(/\/(es|pt)(?=\/|$)/, ''));

/* Vercel canonicalises /es/ to /es, so on a locale home page the relative
   base is the site root and every relative link would land on its English
   twin. Detect that one case and re-point links into the folder. */
const DIR = location.pathname.replace(/[^/]*$/, '');
const INSIDE = !FOLDER || new RegExp(`/${FOLDER}/$`).test(DIR);
const L = href => !INSIDE && !/^([a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(href) ? `${FOLDER}/${href}` : href;

/* the same page in another locale: every folder mirrors the root filenames */
const linkFor = code => {
  const up = FOLDER && INSIDE ? '../' : '';
  return code === 'en' ? `${up}${PAGE}.html` : `${up}${code}/${PAGE}.html`;
};
const HOME = L('index.html');

/* static links written into the page markup need the same treatment */
function localiseStaticLinks() {
  if (INSIDE) return;
  document.querySelectorAll('a[href]').forEach(a => {
    const h = a.getAttribute('href');
    if (h !== L(h)) a.setAttribute('href', L(h));
  });
}

/* Mark: an A drawn as one unbroken stroke, its crossbar replaced by the
   core everything reports into. Legible down to 16px. */
const LOGO = `<span class="logo-mark" aria-hidden="true"><i></i><b></b>
  <svg viewBox="0 0 32 32" fill="none">
    <path class="mk-a" d="M6.2 25.8 14.9 7.3a1.25 1.25 0 0 1 2.2 0l8.7 18.5"
      stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle class="mk-core" cx="16" cy="19.4" r="3.05" fill="currentColor"/>
  </svg></span>ATNOS`;

const GLOBE = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
  <circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18a15 15 0 010-18"/></svg>`;
const CHEV = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="opacity:.55" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;

/* Three locales are past the point where a toggle works, so the pill opens a
   menu — every entry goes to the same page, not to that language's home. */
const langMenu = () => `<span class="has-flyout lang-wrap">
  <button type="button" class="lang-pill" aria-haspopup="true" aria-expanded="false" aria-label="${T.langLabel}">
    <span>${GLOBE}${T.langShort}${CHEV}</span>
  </button>
  <span class="flyout lang-flyout">
    ${LOCALES.map(([code,name,short]) => `<a href="${linkFor(code)}" lang="${code}"
      ${code === LANG ? 'aria-current="true"' : ''}><span class="fl-t">${name}</span><span class="fl-d">${short}</span></a>`).join('')}
  </span></span>`;

/* ── header ── */
function buildHeader() {
  const host = document.getElementById('hdr');
  if (!host) return;
  const hit = h => slug(h.split('#')[0]) === PAGE;
  const link = it => {
    const active = hit(it.href) || (it.flyout || []).some(id => hit(HREF[id])) ? ' aria-current="page"' : '';
    if (!it.flyout) return `<a href="${L(it.href)}" class="nav-link"${active}>${label(it.id)}</a>`;
    return `<span class="has-flyout">
      <a href="${L(it.href)}" class="nav-link"${active}>${label(it.id)}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="opacity:.6"><path d="M6 9l6 6 6-6"/></svg>
      </a>
      <span class="flyout">${it.flyout.map(id =>
        `<a href="${L(HREF[id])}"><span class="fl-t">${label(id)}</span><span class="fl-d">${hint(id)}</span></a>`).join('')}</span>
    </span>`;
  };
  host.className = 'site';
  host.innerHTML = `
  <nav class="container nav" aria-label="${T.primaryNav}">
    <a href="${HOME}" class="logo">${LOGO}</a>
    <div class="nav-links">
      ${NAV.map(link).join('')}
      <span class="nav-cta">
        ${langMenu()}
        <a href="${L(HREF.contact)}" class="btn btn-sm btn-ghost-inv"><span>${T.signIn}</span></a>
        <a href="${L(HREF.contact)}" class="btn btn-sm btn-inverse"><span>${T.startFree}</span></a>
      </span>
    </div>
    <button class="burger" aria-label="${T.openNav}" aria-expanded="false" id="burger">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </nav>
  <div class="mobile-menu" id="mmenu">
    <div class="container">
      ${NAV.flatMap(it => it.flyout ? it.flyout.map(id => [label(id), HREF[id]]) : [[label(it.id), it.href]])
           .map(([t,h]) => `<a href="${L(h)}">${t}</a>`).join('')}
      <div class="mm-cta">
        ${langMenu()}
        <a href="${L(HREF.contact)}" class="btn btn-sm btn-inverse" style="flex:1"><span>${T.startFree}</span></a>
      </div>
    </div>
  </div>`;

  /* the language pill is a button, so it needs a click as well as the hover
     the CSS gives it — otherwise it is unusable on touch */
  host.querySelectorAll('.lang-wrap').forEach(w => {
    const btn = w.querySelector('.lang-pill'), menu = w.querySelector('.lang-flyout');
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    addEventListener('keydown', e => {
      if (e.key !== 'Escape' || !menu.classList.contains('open')) return;
      menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); btn.focus();
    });
    addEventListener('click', e => {
      if (w.contains(e.target)) return;
      menu.classList.remove('open'); btn.setAttribute('aria-expanded', false);
    });
  });

  const burger = document.getElementById('burger'), mm = document.getElementById('mmenu');
  const setMenu = open => { mm.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
  burger.addEventListener('click', () => setMenu(!mm.classList.contains('open')));
  mm.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !mm.classList.contains('open')) return;
    setMenu(false); burger.focus();
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
        <a href="${HOME}" class="f-logo">${LOGO}</a>
        <p style="margin-top:16px;max-width:20rem;font-size:15px;line-height:1.7" class="muted">${T.blurb}</p>
        <address style="margin-top:24px;font-style:normal;font-size:14px;line-height:1.7" class="muted">
          <span style="display:block;color:hsl(var(--ink))">ATNOS Technologies Inc.</span>
          1 Market Street, Suite 3600<br>San Francisco, CA 94105<br>
          <a href="mailto:hello@atnos.ai" style="color:hsl(var(--ink));text-underline-offset:4px">hello@atnos.ai</a></address>
      </div>
      ${FOOT.map(([col,ids]) => `<nav aria-labelledby="f-${col}"><h2 class="f-h" id="f-${col}">${T[col]}</h2>
        <ul>${ids.map(id=>`<li><a href="${L(HREF[id])}" class="f-l">${label(id)}</a></li>`).join('')}</ul></nav>`).join('')}
    </div>
    <div style="height:1px;background:hsl(var(--line))"></div>
    <div class="f-bot">
      <p>${T.rights}</p>
      <div class="f-util">
        <a href="${L(HREF.privacy)}">${T.allPolicies}</a>
        <a href="${L(HREF.deletion)}">${T.dataDeletion}</a>
        <button type="button" id="ckopen">${T.cookieSettings}</button>
        <a href="${L(HREF.status)}" style="display:inline-flex;align-items:center;gap:8px"><span class="dot ok"><i></i><b></b></span>${T.operational}</a>
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
  cookieEl.setAttribute('aria-label', T.ck.region);
  cookieEl.innerHTML = `
  <div class="cookie-in">
    <h2 style="font-size:16px;letter-spacing:-.015em">${T.ck.title}</h2>
    <p style="margin-top:8px;max-width:42rem;font-size:14.5px;line-height:1.7;color:hsl(var(--muted))">
      ${T.ck.body}
      <a href="${L(HREF.cookies)}" style="font-weight:500;color:hsl(var(--ink));text-decoration:underline;text-underline-offset:4px">${T.ck.policy}</a>
    </p>
    <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:8px">
      <button class="btn btn-sm btn-accent" data-ck><span>${T.ck.accept}</span></button>
      <button class="btn btn-sm btn-outline" data-ck><span>${T.ck.reject}</span></button>
      <button class="btn btn-sm btn-ghost" data-ck><span>${T.ck.custom}</span></button>
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
/* first, so it only ever touches links written in the page markup:
   the generated chrome already runs its hrefs through L() */
localiseStaticLinks();
buildHeader();
buildFooter();
buildCookies();
document.querySelectorAll('.fade').forEach(el =>
  setTimeout(() => el.classList.add('in'), RM ? 0 : +el.dataset.d || 0));
observeReveals();

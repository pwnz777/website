/* ═══════════════════════════════════════════════════════════
   ATNOS — landing page only: starfield, product preview,
   platform tabs, capability blocks, trust grid, integration
   network. Depends on site.js (RM, LANG, words, letters,
   observeReveals).

   All landing copy lives in HC below, keyed by locale, so the
   Spanish landing page is the same markup with a different table.
   ═══════════════════════════════════════════════════════════ */
const HC = {
  en: {
    h1:'Every channel.', h2:'One workspace.', sparks:[0,6,11],
    cta:'A new way to run marketing.',
    act:[
      ['Website audit completed','Website','Automated'],
      ['Campaign draft prepared','Advertising','Needs approval'],
      ['Analytics synchronised','Analytics','Automated'],
      ['SEO recommendations ready','SEO','Needs approval'],
      ['Weekly report generated','Reporting','Automated'],
      ['CRM records reconciled','CRM','Automated'],
    ],
    auto:'Automated',
    metrics:[['Sessions','48,210','+12.4%'],['Qualified leads','1,284','+8.1%'],['Blended CAC','$62.40','−6.2%']],
    contribution:'Channel contribution',
    channels:[['Google Ads',34],['Meta',27],['Organic search',21],['Email',11],['Direct',7]],
    campaigns:[['Q3 launch — Search','Live','Google Ads · 4 ad groups'],
      ['Retargeting — warm','Live','Meta · 3 audiences'],
      ['Clinic vertical — Search','Draft','Google Ads · Awaiting approval']],
    live:'Live', draft:'Draft',
    content:[['Pricing page — variant B','Landing page','Ready'],
      ['How lead scoring works','Article','In review'],
      ['Q3 launch — 12 ad variants','Creative','Ready']],
    ready:'Ready',
    caps:[
      ['Create','Build websites, landing pages and content from a brief, with revisions prepared as drafts against your connected CMS.','brand',['Pages','Content','Assets']],
      ['Advertise','Manage advertising workflows across supported platforms. Campaigns are created in your own accounts and stay paused until you launch them.','purple',['Campaigns','Audiences','Creative']],
      ['Optimize','SEO insights, reconciled analytics and performance recommendations — each one showing the evidence behind it.','cyan',['Search','Analytics','Recommendations']],
      ['Manage','CRM synchronisation, scheduled reporting and the recurring workflows you have approved, running on their own.','brand',['Contacts','Reports','Automations']],
    ],
    trust:[
      ['Security','OAuth 2.0 with scoped permissions, TLS 1.3 in transit and AES-256 at rest. Credentials are encrypted with separately managed keys.','available'],
      ['Privacy','GDPR and CCPA compliant, with a Data Processing Agreement offered to every customer. Your data is never used to train generalised models.','available'],
      ['Role-based access','Owner, admin, operator, analyst and billing roles scoped per workspace. Every permission is explicit rather than inherited.','available'],
      ['Audit logs','Every agent action, approval and configuration change recorded with actor, timestamp and what changed.','available'],
      ['API and webhooks','A documented REST API with signed webhooks, so ATNOS fits into systems you already operate.','available'],
      ['Scalable infrastructure','Multi-zone deployment with encrypted point-in-time backups and documented recovery objectives.','available'],
      ['Professional support','Named contacts, agreed response times and a documented escalation path for organisations on an enterprise agreement.','planned'],
    ],
    availableLbl:'Available', plannedLbl:'Planned',
    net:[
      ['Google Ads','Campaign structure, assets and spend','brand'],
      ['Meta','Campaigns, audiences and creative','brand'],
      ['Google Analytics','Sessions, events and conversions','cyan'],
      ['Search Console','Queries, impressions and positions','cyan'],
      ['HubSpot','Contacts, deals and lifecycle stages','purple'],
      ['Shopify','Products, orders and customers','purple'],
      ['WordPress','Pages, posts and metadata','cyan'],
      ['Stripe','Subscriptions and revenue records','purple'],
      ['Business Profile','Local listings and reviews','brand'],
      ['Slack','Approvals and notifications','brand'],
    ],
    netHint:'Hover a service to see what it syncs',
    netAria:'Services that connect into the ATNOS core',
  },
  es: {
    h1:'Cada canal.', h2:'Un solo espacio.', sparks:[0,5,9],
    cta:'Una nueva forma de hacer marketing.',
    act:[
      ['Auditoría del sitio completada','Sitio web','Automático'],
      ['Borrador de campaña preparado','Publicidad','Requiere aprobación'],
      ['Analítica sincronizada','Analítica','Automático'],
      ['Recomendaciones SEO listas','SEO','Requiere aprobación'],
      ['Informe semanal generado','Informes','Automático'],
      ['Registros de CRM conciliados','CRM','Automático'],
    ],
    auto:'Automático',
    metrics:[['Sesiones','48.210','+12,4 %'],['Leads cualificados','1.284','+8,1 %'],['CAC combinado','62,40 $','−6,2 %']],
    contribution:'Contribución por canal',
    channels:[['Google Ads',34],['Meta',27],['Búsqueda orgánica',21],['Email',11],['Directo',7]],
    campaigns:[['Lanzamiento Q3 — Búsqueda','Activa','Google Ads · 4 grupos de anuncios'],
      ['Retargeting — audiencia templada','Activa','Meta · 3 audiencias'],
      ['Vertical clínicas — Búsqueda','Borrador','Google Ads · Pendiente de aprobación']],
    live:'Activa', draft:'Borrador',
    content:[['Página de precios — variante B','Landing page','Lista'],
      ['Cómo funciona el lead scoring','Artículo','En revisión'],
      ['Lanzamiento Q3 — 12 variantes','Creatividades','Lista']],
    ready:'Lista',
    caps:[
      ['Crear','Crea sitios, landing pages y contenido a partir de un brief, con las revisiones preparadas como borradores en tu propio CMS.','brand',['Páginas','Contenido','Recursos']],
      ['Anunciar','Gestiona flujos de publicidad en las plataformas soportadas. Las campañas se crean en tus propias cuentas y quedan en pausa hasta que tú las lances.','purple',['Campañas','Audiencias','Creatividades']],
      ['Optimizar','SEO, analítica conciliada y recomendaciones de rendimiento: cada una muestra la evidencia en la que se apoya.','cyan',['Búsqueda','Analítica','Recomendaciones']],
      ['Gestionar','Sincronización de CRM, informes programados y los flujos recurrentes que hayas aprobado, funcionando solos.','brand',['Contactos','Informes','Automatizaciones']],
    ],
    trust:[
      ['Seguridad','OAuth 2.0 con permisos acotados, TLS 1.3 en tránsito y AES-256 en reposo. Las credenciales se cifran con claves gestionadas por separado.','available'],
      ['Privacidad','Cumple GDPR y CCPA, con un Acuerdo de Tratamiento de Datos disponible para cada cliente. Tus datos nunca se usan para entrenar modelos generalistas.','available'],
      ['Acceso por roles','Roles de propietario, administrador, operador, analista y facturación, acotados por espacio de trabajo. Cada permiso es explícito, no heredado.','available'],
      ['Registros de auditoría','Cada acción de un agente, cada aprobación y cada cambio de configuración quedan registrados con autor, fecha y qué cambió.','available'],
      ['API y webhooks','Una API REST documentada con webhooks firmados, para que ATNOS encaje en los sistemas que ya operas.','available'],
      ['Infraestructura escalable','Despliegue multizona con copias cifradas de recuperación puntual y objetivos de recuperación documentados.','available'],
      ['Soporte profesional','Contactos asignados, tiempos de respuesta acordados y una ruta de escalado documentada para organizaciones con acuerdo empresarial.','planned'],
    ],
    availableLbl:'Disponible', plannedLbl:'Previsto',
    net:[
      ['Google Ads','Estructura de campañas, recursos e inversión','brand'],
      ['Meta','Campañas, audiencias y creatividades','brand'],
      ['Google Analytics','Sesiones, eventos y conversiones','cyan'],
      ['Search Console','Consultas, impresiones y posiciones','cyan'],
      ['HubSpot','Contactos, negocios y etapas del ciclo','purple'],
      ['Shopify','Productos, pedidos y clientes','purple'],
      ['WordPress','Páginas, entradas y metadatos','cyan'],
      ['Stripe','Suscripciones y registros de ingresos','purple'],
      ['Business Profile','Fichas locales y reseñas','brand'],
      ['Slack','Aprobaciones y notificaciones','brand'],
    ],
    netHint:'Pasa el cursor por un servicio para ver qué sincroniza',
    netAria:'Servicios que se conectan al núcleo de ATNOS',
  },
  pt: {
    h1:'Cada canal.', h2:'Um só workspace.', sparks:[0,5,9],
    cta:'Um novo jeito de fazer marketing.',
    act:[
      ['Auditoria do site concluída','Site','Automático'],
      ['Rascunho de campanha preparado','Publicidade','Requer aprovação'],
      ['Analytics sincronizado','Analytics','Automático'],
      ['Recomendações de SEO prontas','SEO','Requer aprovação'],
      ['Relatório semanal gerado','Relatórios','Automático'],
      ['Registros de CRM conciliados','CRM','Automático'],
    ],
    auto:'Automático',
    metrics:[['Sessões','48.210','+12,4%'],['Leads qualificados','1.284','+8,1%'],['CAC combinado','US$ 62,40','−6,2%']],
    contribution:'Contribuição por canal',
    channels:[['Google Ads',34],['Meta',27],['Busca orgânica',21],['E-mail',11],['Direto',7]],
    campaigns:[['Lançamento Q3 — Busca','No ar','Google Ads · 4 grupos de anúncios'],
      ['Retargeting — público morno','No ar','Meta · 3 públicos'],
      ['Vertical clínicas — Busca','Rascunho','Google Ads · Aguardando aprovação']],
    live:'No ar', draft:'Rascunho',
    content:[['Página de preços — variante B','Landing page','Pronto'],
      ['Como funciona o lead scoring','Artigo','Em revisão'],
      ['Lançamento Q3 — 12 variações','Criativos','Pronto']],
    ready:'Pronto',
    caps:[
      ['Criar','Crie sites, landing pages e conteúdo a partir de um briefing, com as revisões preparadas como rascunhos no seu próprio CMS.','brand',['Páginas','Conteúdo','Materiais']],
      ['Anunciar','Gerencie fluxos de publicidade nas plataformas suportadas. As campanhas são criadas nas suas próprias contas e ficam pausadas até você lançá-las.','purple',['Campanhas','Públicos','Criativos']],
      ['Otimizar','SEO, analytics conciliado e recomendações de desempenho — cada uma mostrando a evidência por trás dela.','cyan',['Busca','Analytics','Recomendações']],
      ['Gerenciar','Sincronização de CRM, relatórios programados e os fluxos recorrentes que você aprovou, rodando sozinhos.','brand',['Contatos','Relatórios','Automações']],
    ],
    trust:[
      ['Segurança','OAuth 2.0 com permissões restritas, TLS 1.3 em trânsito e AES-256 em repouso. As credenciais são cifradas com chaves gerenciadas separadamente.','available'],
      ['Privacidade','Em conformidade com GDPR e CCPA, com Acordo de Tratamento de Dados oferecido a todo cliente. Seus dados nunca são usados para treinar modelos generalistas.','available'],
      ['Acesso por papéis','Papéis de proprietário, administrador, operador, analista e financeiro, restritos por workspace. Cada permissão é explícita, não herdada.','available'],
      ['Registros de auditoria','Cada ação de agente, cada aprovação e cada mudança de configuração ficam registradas com autor, data e o que mudou.','available'],
      ['API e webhooks','Uma API REST documentada com webhooks assinados, para o ATNOS caber nos sistemas que você já opera.','available'],
      ['Infraestrutura escalável','Implantação multizona com backups cifrados de recuperação pontual e objetivos de recuperação documentados.','available'],
      ['Suporte profissional','Contatos nomeados, prazos de resposta acordados e um caminho de escalonamento documentado para organizações com contrato empresarial.','planned'],
    ],
    availableLbl:'Disponível', plannedLbl:'Previsto',
    net:[
      ['Google Ads','Estrutura de campanhas, materiais e investimento','brand'],
      ['Meta','Campanhas, públicos e criativos','brand'],
      ['Google Analytics','Sessões, eventos e conversões','cyan'],
      ['Search Console','Consultas, impressões e posições','cyan'],
      ['HubSpot','Contatos, negócios e estágios do ciclo','purple'],
      ['Shopify','Produtos, pedidos e clientes','purple'],
      ['WordPress','Páginas, posts e metadados','cyan'],
      ['Stripe','Assinaturas e registros de receita','purple'],
      ['Business Profile','Fichas locais e avaliações','brand'],
      ['Slack','Aprovações e notificações','brand'],
    ],
    netHint:'Passe o cursor sobre um serviço para ver o que ele sincroniza',
    netAria:'Serviços que se conectam ao núcleo do ATNOS',
  },
};
const H = HC[LANG];

/* ── hero headline: both lines reveal glyph by glyph ──
   The breathing letters sit on the white line: the accent line is painted
   through background-clip:text, where a composited glyph goes blank. */
letters(document.getElementById('hl1'), H.h1, 120, H.sparks);
letters(document.getElementById('hl2'), H.h2, 700);

/* ── starfield ── */
if (!RM) {
  const c = document.getElementById('stars'), x = c.getContext('2d');
  let ps = [], w = 0, h = 0, t = 0, run = false, f = 0;
  const rs = () => {
    const r = c.getBoundingClientRect(), d = Math.min(devicePixelRatio||1, 2);
    w = r.width; h = r.height; c.width = w*d; c.height = h*d; x.setTransform(d,0,0,d,0,0);
    const n = Math.max(8, Math.round(34 * Math.min(1, (w*h)/(1440*900))));
    ps = Array.from({length:n}, () => ({x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.28, vy:(Math.random()-.5)*.28,
      r:.8+Math.random()*1.4, a:.08+Math.random()*.2}));
  };
  const draw = time => {
    if (!run) return;
    const dt = t ? Math.min(time-t,48) : 16; t = time;
    x.clearRect(0,0,w,h);
    for (const p of ps) {
      p.x += p.vx*dt*.06; p.y += p.vy*dt*.06;
      if (p.x < -8) p.x = w+8; if (p.x > w+8) p.x = -8;
      if (p.y < -8) p.y = h+8; if (p.y > h+8) p.y = -8;
      x.beginPath(); x.arc(p.x,p.y,p.r,0,6.283);
      x.fillStyle = `rgba(255,255,255,${p.a})`; x.fill();
    }
    f = requestAnimationFrame(draw);
  };
  const start = () => { if (!run) { run = true; t = 0; f = requestAnimationFrame(draw); } };
  const stop = () => { run = false; cancelAnimationFrame(f); };
  rs(); new ResizeObserver(rs).observe(c);
  new IntersectionObserver(([e]) => e.isIntersecting ? start() : stop()).observe(c);
  addEventListener('visibilitychange', () => document.hidden ? stop() : start());
}

/* ── card tilt ── */
const win = document.getElementById('win');
if (!RM && matchMedia('(pointer: fine)').matches) {
  win.addEventListener('pointermove', e => {
    const r = win.getBoundingClientRect();
    const px = (e.clientX-r.left)/r.width - .5, py = (e.clientY-r.top)/r.height - .5;
    win.style.transform = `perspective(1200px) rotateX(${-py*4}deg) rotateY(${px*4}deg) translateZ(6px) scale(1.008)`;
  });
  win.addEventListener('pointerleave', () => win.style.transform = '');
}

/* ── preview: connections, chart, feed ── */
const SERVICES = ['Google Ads','Meta','Analytics','HubSpot','Shopify'];
document.getElementById('chips').innerHTML = SERVICES.map((s,i) =>
  `<li class="chip" style="opacity:0;animation:actin .45s var(--ease-in) ${450+i*90}ms forwards">
     <span class="dot ok"><i style="animation-delay:${i*400}ms"></i><b></b></span>${s}</li>`).join('');

const SERIES = [18,22,20,27,25,31,30,36,34,41,44,42,49,53,51,58,62,66];
const max = Math.max(...SERIES);
const pts = SERIES.map((v,i) => `${(i/(SERIES.length-1))*100},${36-(v/max)*30}`).join(' ');
const line = document.getElementById('sline');
line.setAttribute('points', pts);
document.getElementById('sfill').setAttribute('points', `0,40 ${pts} 100,40`);
if (!RM) {
  const L = line.getTotalLength();
  line.style.strokeDasharray = L; line.style.strokeDashoffset = L;
  requestAnimationFrame(() => {
    line.style.transition = 'stroke-dashoffset 1.5s var(--ease-in) .7s';
    line.style.strokeDashoffset = 0;
  });
}
setTimeout(() => document.getElementById('sfill').style.opacity = 1, 100);

/* activity stream — every item labelled by who authorised it */
const feed = document.getElementById('feed');
let cur = 2;
const CHECK = '<svg width="10" height="10" viewBox="0 0 14 10" fill="none" stroke="hsl(var(--success))" stroke-width="3"><path d="M1 5l4 4 8-8"/></svg>';
function renderFeed() {
  feed.innerHTML = [0,1,2].map(o => {
    const [l,a,m] = H.act[((cur-o)%H.act.length+H.act.length)%H.act.length];
    const first = o === 0;
    return `<li class="act" style="opacity:${first?1:.5}">
      <span class="ic" style="background:${first?'hsl(var(--brand)/.15)':'hsl(var(--success)/.12)'}">
        ${first?'<span class="spin"></span>':CHECK}</span>
      <span class="lbl">${l}</span><span class="ag">${a}</span>
      <span class="md ${m===H.auto?'md-auto':'md-appr'}">${m}</span></li>`;
  }).join('');
}
renderFeed();
if (!RM) setInterval(() => { if (!document.hidden) { cur = (cur+1)%H.act.length; renderFeed(); } }, 3200);

/* ── platform tabs ── */
const VIEWS = {
  overview: () => `
    <div style="display:grid;gap:8px">
      <div style="display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">
        ${H.metrics.map(([l,v,d]) => `<div class="lpanel"><p style="font-size:12.5px" class="muted">${l}</p>
            <p class="metric-v">${v}</p>
            <p style="margin-top:4px;font-size:12px;font-weight:500;color:hsl(var(--success))">${d}</p></div>`).join('')}
      </div>
      <div class="lpanel">
        <p style="font-size:12.5px;font-weight:500" class="muted">${H.contribution}</p>
        ${H.channels.map(([n,s],i)=>`<div class="crow"><span class="nm">${n}</span>
            <span class="bar"><b data-w="${s}" style="transition-delay:${100+i*70}ms"></b></span>
            <span class="pc">${s}%</span></div>`).join('')}
      </div>
    </div>`,
  campaigns: () => `<div style="display:grid;gap:8px">
    ${H.campaigns.map(([n,s,d])=>`<div class="lpanel" style="display:flex;align-items:center;gap:16px">
        <span style="flex:1;min-width:0"><span style="display:block;font-size:15px;font-weight:500">${n}</span>
        <span style="display:block;margin-top:2px;font-size:12.5px" class="muted">${d}</span></span>
        <span class="badge ${s===H.live?'b-ok':'b-plan'}">${s}</span></div>`).join('')}</div>`,
  content: () => `<div style="display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
    ${H.content.map(([t,ty,s])=>`<div class="lpanel" style="display:flex;flex-direction:column">
        <div style="display:grid;gap:6px;margin-bottom:16px" aria-hidden="true">
          <span style="height:6px;border-radius:999px;background:hsl(var(--line))"></span>
          <span style="height:6px;width:80%;border-radius:999px;background:hsl(var(--line))"></span>
          <span style="height:6px;width:60%;border-radius:999px;background:hsl(var(--line))"></span></div>
        <h3 style="font-size:14.5px;font-weight:500;line-height:1.4">${t}</h3>
        <p style="margin-top:4px;font-size:12.5px" class="muted">${ty}</p>
        <span class="badge ${s===H.ready?'b-ok':'b-plan'}" style="margin-top:16px;width:fit-content">${s}</span></div>`).join('')}</div>`,
};
const showcase = document.getElementById('showcase');
const tabs = [...document.querySelectorAll('.tab')];
const tabbg = document.getElementById('tabbg');
/* measured from live rects, not offsetLeft — offsetParent and the pill's
   containing block are not the same element once an ancestor is filtered */
function moveBg(el) {
  const strip = el.parentElement.getBoundingClientRect();
  const border = parseFloat(getComputedStyle(el.parentElement).borderLeftWidth) || 0;
  const r = el.getBoundingClientRect();
  tabbg.style.width = r.width + 'px';
  tabbg.style.transform = `translateX(${r.left - strip.left - border}px)`;
}
const currentTab = () => tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0];
function setView(el) {
  tabs.forEach(t => { t.setAttribute('aria-selected', t===el); t.tabIndex = t===el ? 0 : -1; });
  moveBg(el);
  showcase.style.opacity = 0;
  setTimeout(() => {
    showcase.innerHTML = VIEWS[el.dataset.v]();
    showcase.style.opacity = 1;
    requestAnimationFrame(() => showcase.querySelectorAll('.bar b').forEach(b => b.style.width = b.dataset.w+'%'));
  }, RM ? 0 : 180);
}
showcase.style.transition = 'opacity .18s var(--ease)';
tabs.forEach((t,i) => {
  t.addEventListener('click', () => setView(t));
  t.addEventListener('keydown', e => {
    const k = {ArrowRight:1, ArrowLeft:-1}[e.key];
    if (!k) return; e.preventDefault();
    const n = tabs[(i+k+tabs.length)%tabs.length]; setView(n); n.focus();
  });
});
setView(tabs[0]);
addEventListener('resize', () => moveBg(currentTab()));
/* webfont swap changes tab widths — re-measure once Inter is in */
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => moveBg(currentTab()));

/* ── capabilities ── */
const CAP_ICON = [
  'M3 9h18M9 21V9M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z',
  'M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 11-5.8-1.6',
  'M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3',
  'M14 9V5a3 3 0 00-6 0v4M5 9h14l1 12H4L5 9z',
];
document.getElementById('caps').innerHTML = H.caps.map(([t,d,h,s],i) => `
  <li class="reveal"><article class="cap">
    <span class="rule" style="background:hsl(var(--${h}))"></span>
    <span class="ico" style="background:hsl(var(--${h}-50));color:hsl(var(--${h}))">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="${CAP_ICON[i]}"/></svg></span>
    <h3>${t}</h3>
    <p class="t-body muted">${d}</p>
    <ul class="surfaces">${s.map(x=>`<li>${x}</li>`).join('')}</ul>
  </article></li>`).join('');

/* ── trust ── */
const TRUST_ICON = [
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'M12 2a5 5 0 015 5v3M7 10V7a5 5 0 012-4M5 10h14v11H5z',
  'M15 7a4 4 0 11-8 0 4 4 0 018 0zM3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2',
  'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15h6M9 11h6',
  'M4 17l6-6-6-6M12 19h8',
  'M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z',
  'M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z',
];
document.getElementById('trust').innerHTML = H.trust.map(([t,d,s],i) => `
  <li class="reveal"><article class="tcard">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px">
      <span class="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="${TRUST_ICON[i]}"/></svg></span>
      <span class="badge ${s==='planned'?'b-plan':'b-ok'}">${s==='planned'?H.plannedLbl:H.availableLbl}</span>
    </div>
    <h3 style="margin-top:24px;font-size:17px;letter-spacing:-.015em">${t}</h3>
    <p style="margin-top:10px;font-size:15px;line-height:1.7" class="muted">${d}</p>
  </article></li>`).join('');

/* ── integration network ── */
const V = 560, C = 280, R = 208;
const nodes = H.net.map(([n,d,h],i) => {
  const a = (i/H.net.length)*Math.PI*2 - Math.PI/2;
  return {n, d, h, x: C+Math.cos(a)*R, y: C+Math.sin(a)*R};
});
const netLines = nodes.map((o,i) => {
  const mx=(o.x+C)/2, my=(o.y+C)/2, dx=C-o.x, dy=C-o.y;
  const cx=mx-dy*.14, cy=my+dx*.14;
  return {id:i, d:`M ${o.x} ${o.y} Q ${cx} ${cy} ${C} ${C}`, h:o.h};
});
document.getElementById('net').innerHTML = `
<svg viewBox="0 0 ${V} ${V}" role="list" aria-label="${H.netAria}">
  <defs>
    <radialGradient id="core" cx="42%" cy="34%" r="62%">
      <stop offset="0%" stop-color="hsl(var(--brand))"/><stop offset="55%" stop-color="hsl(var(--brand-600))"/>
      <stop offset="100%" stop-color="hsl(var(--purple))"/></radialGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="hsl(var(--brand))" stop-opacity=".14"/>
      <stop offset="100%" stop-color="hsl(var(--brand))" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="hsl(var(--line))"/>
  <circle cx="${C}" cy="${C}" r="${R*.58}" fill="none" stroke="hsl(var(--line))" stroke-dasharray="3 7"/>
  <circle cx="${C}" cy="${C}" r="168" fill="url(#halo)"/>
  ${netLines.map(l => `<path id="ln${l.id}" d="${l.d}" fill="none" stroke="hsl(var(--line-strong))" stroke-width="1" stroke-linecap="round" opacity=".5" style="transition:stroke .3s,stroke-width .3s,opacity .3s"/>`).join('')}
  ${RM ? '' : netLines.map(l => `<circle r="2.2" fill="hsl(var(--line-strong))">
    <animateMotion dur="2.6s" repeatCount="indefinite" begin="${(l.id*.34).toFixed(2)}s" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#ln${l.id}"/></animateMotion>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.8;1" dur="2.6s" repeatCount="indefinite" begin="${(l.id*.34).toFixed(2)}s"/></circle>`).join('')}
  ${RM ? '' : `<circle cx="${C}" cy="${C}" r="58" fill="none" stroke="hsl(var(--brand))" stroke-width="1" opacity=".45">
    <animate attributeName="r" values="58;90" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values=".45;0" dur="3.2s" repeatCount="indefinite"/></circle>`}
  <circle cx="${C}" cy="${C}" r="58" fill="url(#core)"/>
  <circle cx="${C}" cy="${C}" r="58" fill="none" stroke="rgb(255 255 255/.28)"/>
  <circle cx="${C-18}" cy="${C-22}" r="20" fill="rgb(255 255 255/.16)"/>
  <text x="${C}" y="${C-2}" text-anchor="middle" fill="#fff" font-size="15" font-weight="600" letter-spacing=".02em">ATNOS</text>
  <text x="${C}" y="${C+16}" text-anchor="middle" fill="rgb(255 255 255/.7)" font-size="10.5">Core</text>
  ${nodes.map((o,i) => {
    const an = o.x > C+24 ? 'start' : o.x < C-24 ? 'end' : 'middle';
    const dx = an==='start'?18:an==='end'?-18:0, dy = an==='middle'?(o.y<C?-18:28):4;
    return `<g class="node" data-i="${i}" tabindex="0" role="listitem" aria-label="${o.n} — ${o.d}">
      <circle class="hit" cx="${o.x}" cy="${o.y}" r="26"/>
      <circle id="nd${i}" cx="${o.x}" cy="${o.y}" r="7" fill="hsl(var(--background))" stroke="hsl(var(--line-strong))" stroke-width="1.5" style="transition:r .3s,stroke .3s,stroke-width .3s"/>
      <circle id="nc${i}" cx="${o.x}" cy="${o.y}" r="2.5" fill="hsl(var(--muted))" style="transition:fill .3s"/>
      <text x="${o.x+dx}" y="${o.y+dy}" text-anchor="${an}">${o.n}</text></g>`;
  }).join('')}
</svg>
<p class="net-detail" id="netd" aria-live="polite"><span style="color:hsl(var(--muted)/.7)">${H.netHint}</span></p>
<ul style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">${H.net.map(([n,d])=>`<li>${n} — ${d}</li>`).join('')}</ul>`;

document.querySelectorAll('.node').forEach(g => {
  const i = +g.dataset.i, o = nodes[i];
  const on = () => {
    g.classList.add('on');
    document.getElementById(`ln${i}`).setAttribute('stroke', `hsl(var(--${o.h}))`);
    document.getElementById(`ln${i}`).setAttribute('stroke-width','1.6');
    document.getElementById(`ln${i}`).setAttribute('opacity','.9');
    document.getElementById(`nd${i}`).setAttribute('r','9');
    document.getElementById(`nd${i}`).setAttribute('stroke',`hsl(var(--${o.h}))`);
    document.getElementById(`nc${i}`).setAttribute('fill',`hsl(var(--${o.h}))`);
    document.getElementById('netd').innerHTML = `<span style="font-weight:500;color:hsl(var(--ink))">${o.n}</span> — ${o.d}`;
  };
  const off = () => {
    g.classList.remove('on');
    document.getElementById(`ln${i}`).setAttribute('stroke','hsl(var(--line-strong))');
    document.getElementById(`ln${i}`).setAttribute('stroke-width','1');
    document.getElementById(`ln${i}`).setAttribute('opacity','.5');
    document.getElementById(`nd${i}`).setAttribute('r','7');
    document.getElementById(`nd${i}`).setAttribute('stroke','hsl(var(--line-strong))');
    document.getElementById(`nc${i}`).setAttribute('fill','hsl(var(--muted))');
    document.getElementById('netd').innerHTML = `<span style="color:hsl(var(--muted)/.7)">${H.netHint}</span>`;
  };
  g.addEventListener('pointerenter', on); g.addEventListener('focus', on);
  g.addEventListener('pointerleave', off); g.addEventListener('blur', off);
});

/* ── CTA headline ── */
const ctaw = document.getElementById('ctaw');
new IntersectionObserver(([e],ob) => {
  if (!e.isIntersecting) return; ob.disconnect();
  words(ctaw, H.cta, 0);
}, {threshold:.3}).observe(ctaw);

/* newly injected .reveal nodes */
observeReveals();

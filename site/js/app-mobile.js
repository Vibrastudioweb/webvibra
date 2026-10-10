/* VIBRA · capa de app para móvil (<=720px). No se construye en escritorio. */
(function () {
'use strict';

/* ---- CONSTANTES (editar aquí) ---- */
// PENDIENTE DE CONFIRMAR: número de WhatsApp para cotizaciones (formato internacional, sin + ni espacios).
// Valor actual = el número que ya figura en el sitio. Si se deja '' el asistente usa solo el correo.
var WA_NUMBER = '584126553528';
var MAIL = 'hola@vibra.ink';
var SIGN = '[vibra.ink]';

var root = document.documentElement;
var mq = window.matchMedia('(max-width:720px)');
var rmq = window.matchMedia('(prefers-reduced-motion: reduce)');
var built = false, rootEl = null, V = null;
var layers = [], sheets = {}, lastSrc = null, view = 'inicio', deferred = null;
var rail = null;

function $(id) { return document.getElementById(id); }
function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function vib(n) { try { if (navigator.vibrate) navigator.vibrate(n || 8); } catch (e) {} }
function reduce() { return rmq.matches; }

/* ---- datos ---- */
var SERVICES = [
{ id: 'branding', t: 'Branding e identidad', ic: '<path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.3 6.8 19l1-5.8L3.6 9.1l5.8-.8z"/>', d: 'Creamos la identidad de tu negocio: logo, colores y tipografía, para que tu marca se vea igual y profesional en todas partes.', need: 'Branding e identidad' },
{ id: 'web', t: 'Sitios web', ic: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>', d: 'Sitios rápidos y claros que se ven bien en el celular, para que tus clientes te encuentren y te escriban directo por WhatsApp.', need: 'Sitio web' },
{ id: 'apps', t: 'Apps y PWA a medida', ic: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18h2"/>', d: 'Apps que se instalan desde el navegador y funcionan en cualquier teléfono, hechas a la medida de tu negocio.', need: 'App o PWA a medida' },
{ id: 'sistemas', t: 'Sistemas para negocios', ic: '<path d="M4 20h16M7 20v-8M12 20V6M17 20v-5"/>', d: 'Paneles y herramientas para ordenar tu operación: ventas, citas, pedidos o reparto, con información que puedes usar a diario.', need: 'Sistema para mi negocio' }
];
var STEPS = [
['Escuchamos', 'Hablamos de tu negocio, tu meta y tu presupuesto.'],
['Proponemos', 'Te mostramos una propuesta clara con alcance, tiempo y precio.'],
['Construimos', 'Diseñamos y desarrollamos, con avances que puedes ver y comentar.'],
['Lanzamos', 'Publicamos, te acompañamos y ajustamos lo que haga falta.']
];
var NEEDS = ['Branding e identidad', 'Sitio web', 'App o PWA a medida', 'Sistema para mi negocio', 'Aún no lo sé'];
var STAGES = ['Solo estoy explorando', 'Tengo una idea y quiero empezar pronto', 'Lo necesito con urgencia'];

var IC = {
inicio: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
portafolio: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>',
servicios: '<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"/>',
proceso: '<path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
contacto: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
mas: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
close: '<path d="M6 6l12 12M18 6L6 18"/>',
back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
wa: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 7l9 6 9-6"/>',
ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
install: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
share: '<path d="M12 15V3M8 7l4-4 4 4M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>',
boom: '<rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="9" y="9" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/>'
};
function svgRaw(path, extra) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + path + '</svg>'; }
function svg(name, extra) { return svgRaw(IC[name], extra); }

/* ---- toast ---- */
var toastT = 0;
function toast(msg) {
var t = $('am-toast'); if (!t) return;
t.textContent = msg; t.classList.add('on');
clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 3200);
}

/* ---- pila de capas + History API ---- */
function pushLayer(l) { layers.push(l); try { history.pushState({ vl: layers.length }, ''); } catch (e) {} }
function closeTop() { if (!layers.length) return; try { history.back(); } catch (e) { layers.pop().close(); } }
function closeAll() { var n = layers.length; if (!n) return; try { history.go(-n); } catch (e) { while (layers.length) layers.pop().close(); } }
window.addEventListener('popstate', function (e) {
if (!built) return;
var target = (e.state && e.state.vl) || 0;
if (target > layers.length) { try { history.replaceState({ vl: layers.length }, ''); } catch (er) {} return; }
while (layers.length > target) layers.pop().close();
});

/* ---- View Transitions (con respaldo) ---- */
function vt(fn, from, to) {
var L = $('vd-layer');
if (!document.startViewTransition || reduce() || !from || !to) { fn(); return; }
from.style.viewTransitionName = 'proj';
L.classList.add('am-novt');
var done = function () { to.style.viewTransitionName = ''; from.style.viewTransitionName = ''; L.classList.remove('am-novt'); };
try {
var t = document.startViewTransition(function () { from.style.viewTransitionName = ''; to.style.viewTransitionName = 'proj'; fn(); });
t.finished.then(done, done);
} catch (e) { done(); fn(); }
}

/* ---- detalle de proyecto (reutiliza el de app.js) ---- */
function openProject(i, el) {
if (!V || layers.some(function (l) { return l.name === 'detail'; })) return;
vib(8);
lastSrc = el || null;
var L = $('vd-layer'); L.style.transform = '';
pushLayer({ name: 'detail', close: function () {
var src = lastSrc && document.body.contains(lastSrc) && lastSrc.getBoundingClientRect().height ? lastSrc : null;
vt(function () { V.close(); }, $('vd-shot'), src);
} });
vt(function () { V.open(i); }, el, $('vd-shot'));
}

/* ---- hojas inferiores ---- */
function makeSheet(id, title, bodyHtml, opts) {
opts = opts || {};
var el = h('div', 'am-sheet'); el.id = 'sh-' + id;
el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', title); el.setAttribute('aria-hidden', 'true');
el.innerHTML =
'<div class="am-backdrop"></div>' +
'<div class="am-panel">' +
'<div class="am-grab"><span class="am-handle"></span><h2 class="am-title">' + title + '</h2><button class="am-x" type="button" aria-label="Cerrar">' + svg('close') + '</button></div>' +
'<div class="am-body">' + bodyHtml + '</div></div>';
rootEl.appendChild(el);
var s = { el: el, panel: el.querySelector('.am-panel'), body: el.querySelector('.am-body'), tab: opts.tab || '', onOpen: opts.onOpen };
sheets[id] = s;
el.querySelector('.am-backdrop').addEventListener('click', function () { reqClose(id); });
el.querySelector('.am-x').addEventListener('click', function () { reqClose(id); });
drag(s.panel, el.querySelector('.am-grab'), function () { reqClose(id); });
return s;
}
function topIs(id) { var l = layers[layers.length - 1]; return !!l && l.sheet === id; }
function reqClose(id) { if (topIs(id)) closeTop(); else closeSheetUI(id); }
function openSheet(id, arg) {
var s = sheets[id]; if (!s || layers.some(function (l) { return l.sheet === id; })) return;
vib(8);
s.panel.style.transform = '';
if (s.onOpen) s.onOpen(arg);
s.el.classList.add('open'); s.el.setAttribute('aria-hidden', 'false');
root.classList.add('am-lock');
pushLayer({ sheet: id, close: function () { closeSheetUI(id); } });
setTab();
setTimeout(function () { var x = s.el.querySelector('.am-x'); if (x && s.el.classList.contains('open')) x.focus({ preventScroll: true }); }, 60);
}
function closeSheetUI(id) {
var s = sheets[id]; if (!s) return;
s.el.classList.remove('open'); s.el.setAttribute('aria-hidden', 'true');
if (!document.querySelector('.am-sheet.open')) root.classList.remove('am-lock');
setTab();
}

/* arrastre hacia abajo para cerrar */
function drag(panel, grab, onClose) {
var sy = 0, dy = 0, t0 = 0, on = false;
grab.addEventListener('pointerdown', function (e) {
if (e.button > 0 || (e.target.closest && e.target.closest('.am-x, .vd-close'))) return;
on = true; sy = e.clientY; dy = 0; t0 = e.timeStamp;
try { grab.setPointerCapture(e.pointerId); } catch (er) {}
panel.style.transition = 'none';
});
grab.addEventListener('pointermove', function (e) {
if (!on) return;
dy = Math.max(0, e.clientY - sy);
panel.style.transform = 'translateY(' + dy + 'px)';
});
function end(e) {
if (!on) return; on = false;
panel.style.transition = '';
var v = dy / Math.max(1, e.timeStamp - t0);
if (dy > 110 || (dy > 30 && v > 0.6)) { vib(6); panel.style.transform = 'translateY(105%)'; onClose(); }
else panel.style.transform = '';
}
grab.addEventListener('pointerup', end);
grab.addEventListener('pointercancel', end);
}

/* ---- pestañas y vistas ---- */
function setView(name) {
view = name;
Array.prototype.forEach.call(rootEl.querySelectorAll('.am-view'), function (v) { v.classList.toggle('on', v.getAttribute('data-view') === name); });
window.scrollTo(0, 0);
setTab();
}
function setTab() {
if (!rootEl) return;
var open = '', l = null, i;
for (i = layers.length - 1; i >= 0; i--) if (layers[i].sheet) { l = layers[i]; break; }
if (l) open = (sheets[l.sheet] && sheets[l.sheet].tab) || '';
Array.prototype.forEach.call(rootEl.querySelectorAll('.am-tab'), function (b) {
var t = b.getAttribute('data-tab');
var on = l ? t === open : t === view;
b.classList.toggle('on', on); b.setAttribute('aria-current', on ? 'page' : 'false');
});
}
function goTab(t) {
vib(8);
if (t === 'inicio' || t === 'portafolio') { if (layers.length) closeAll(); setView(t); }
else openSheet(t);
}

/* ---- asistente de cotización ---- */
var W = { step: 1, need: '', stage: '', name: '' };
function msg() {
var n = W.name.trim();
return 'Hola VIBRA' + (n ? ', soy ' + n : '') + '. Quiero cotizar: ' + (W.need || 'aún no lo sé') + '. Etapa: ' + (W.stage || 'sin definir') + '. ' + SIGN;
}
function renderWizard() {
var b = sheets.cotizar.body, s = W.step;
var html = '<p class="am-step">Paso ' + s + ' de 3</p><div class="am-prog" aria-hidden="true"><i class="on"></i><i class="' + (s >= 2 ? 'on' : '') + '"></i><i class="' + (s >= 3 ? 'on' : '') + '"></i></div>';
if (s === 1) {
html += '<h3 class="am-q">¿Qué necesitas?</h3><div class="am-opts">' + NEEDS.map(function (n) { return '<button class="am-opt' + (W.need === n ? ' sel' : '') + '" type="button" data-need="' + n + '">' + n + '</button>'; }).join('') + '</div>';
} else if (s === 2) {
html += '<h3 class="am-q">¿En qué etapa estás?</h3><div class="am-opts">' + STAGES.map(function (n) { return '<button class="am-opt' + (W.stage === n ? ' sel' : '') + '" type="button" data-stage="' + n + '">' + n + '</button>'; }).join('') + '</div><button class="am-ghost" type="button" data-wback>' + svg('back') + 'Atrás</button>';
} else {
html += '<h3 class="am-q">¿Cómo te llamas? <span class="am-opt-tag">opcional</span></h3><input class="am-input" id="am-name" type="text" maxlength="40" autocomplete="given-name" placeholder="Tu nombre">' +
'<div class="am-send">' +
(WA_NUMBER ? '<a class="am-cta" id="am-wa" target="_blank" rel="noopener" href="#">Enviar por WhatsApp ' + svg('arrow') + '</a>' : '') +
'<a class="am-ghost wide" id="am-mail" href="#">' + svg('mail') + (WA_NUMBER ? 'Prefiero enviar por correo' : 'Enviar por correo') + '</a>' +
'<button class="am-ghost" type="button" data-wback>' + svg('back') + 'Atrás</button></div>';
}
b.innerHTML = html;
if (s === 3) { var inp = $('am-name'); inp.value = W.name; inp.addEventListener('input', function () { W.name = inp.value; links(); }); links(); }
}
function links() {
var m = msg();
var wa = $('am-wa'); if (wa) wa.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(m);
var ml = $('am-mail'); if (ml) ml.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Cotización VIBRA') + '&body=' + encodeURIComponent(m);
}
function openWizard(need) {
W = { step: 1, need: '', stage: '', name: '' };
if (need) { W.need = need; W.step = 2; }
openSheet('cotizar');
}
function later(fn) { if (layers.length) { closeAll(); setTimeout(fn, 90); } else fn(); }

/* ---- construir la app ---- */
function build() {
if (built) return;
V = window.VIBRA; if (!V) return;
built = true;
rootEl = h('div', 'am-root'); rootEl.id = 'am-root';
var items = V.items, nn = String(items.length).padStart(2, '0');

var cards = items.map(function (it, i) {
return '<button class="am-card" type="button" data-i="' + i + '" aria-label="Ver proyecto ' + it.name + '"><img src="' + it.shots[0] + '" alt="" loading="' + (i < 2 ? 'eager' : 'lazy') + '" decoding="async"><span class="am-tint"></span><span class="am-cname">' + it.name + '</span><span class="am-cpill">' + it.tag + '</span></button>';
}).join('');
var tile = function (act, label, ic) { return '<button class="am-tile" type="button" data-act="' + act + '"><span class="am-tic">' + svg(ic) + '</span><span class="am-tl">' + label + '</span></button>'; };
var foot = '<p class="am-foot">&copy; 2026 <b>VIBRA</b> &middot; Valera, Trujillo &middot; Venezuela</p>';
var row = function (ic, label, attrs) { return '<a class="am-row" ' + attrs + '><span class="am-tic">' + svg(ic) + '</span><span class="am-rt">' + label + '</span>' + svg('arrow') + '</a>'; };

rootEl.innerHTML =
'<section class="am-view on" data-view="inicio">' +
'<header class="am-top"><img src="assets/iso-gradiente.png" alt="" aria-hidden="true"><span class="am-brand">VIBRA</span><span class="am-loc">Valera · Venezuela</span></header>' +
'<div class="am-hero"><p class="am-kicker">Estudio de marcas, web y apps</p>' +
'<h1 class="am-h1">Construimos <em>marcas</em> que funcionan.</h1>' +
'<button class="am-cta" type="button" data-act="cotizar">Cotizar proyecto ' + svg('arrow') + '</button>' +
'<button class="am-install" type="button" data-act="instalar" hidden>' + svg('install') + 'Instalar VIBRA</button></div>' +
'<div class="am-tiles">' + tile('portafolio', 'Portafolio', 'portafolio') + tile('servicios', 'Servicios', 'servicios') + tile('proceso', 'Proceso', 'proceso') + tile('contacto', 'Contacto', 'contacto') + '</div>' +
'<div class="am-manwrap"><div class="am-mani" id="am-mani"><h2 class="am-mh" aria-label="Construimos marcas que funcionan."><span class="am-ml">Construimos</span><span class="vibra-slot" aria-hidden="true"><span class="vibra-cube"><span class="vibra-face f1">Marcas</span><span class="vibra-face f2">Apps</span><span class="vibra-face f3">Sitios web</span><span class="vibra-face f4">Sistemas<br>a medida</span></span></span><span class="am-ml">que</span><span class="am-ml am-mp">funcionan.</span></h2><span class="am-mhint" aria-hidden="true">Ver servicios ' + svg('arrow') + '</span><button class="am-mgo" type="button" data-act="servicios" aria-label="Ver servicios"></button></div></div>' +
'<div class="am-sec"><h2>Destacados</h2><span class="am-count" id="am-count" aria-hidden="true">01 / ' + nn + '</span></div>' +
'<div class="am-rail" id="am-rail">' + cards + '</div>' + foot +
'</section>' +
'<section class="am-view" data-view="portafolio">' +
'<header class="am-top"><img src="assets/iso-gradiente.png" alt="" aria-hidden="true"><span class="am-brand">Portafolio</span></header>' +
'<p class="am-lead">Trabajo real: marcas, sitios y sistemas.</p>' +
'<div class="am-list">' + cards.replace(/class="am-card"/g, 'class="am-card wide"') + '</div>' + foot +
'</section>' +
'<nav class="am-bar" aria-label="Navegación principal">' +
['inicio:Inicio', 'portafolio:Portafolio', 'servicios:Servicios', 'contacto:Contacto', 'mas:Más'].map(function (x) { var p = x.split(':'); return '<button class="am-tab" type="button" data-tab="' + (p[0] === 'mas' ? 'mas' : p[0]) + '" aria-current="false">' + svg(p[0]) + '<span>' + p[1] + '</span></button>'; }).join('') + '</nav>' +
'<div class="am-toast" id="am-toast" role="status" aria-live="polite"></div>';
document.body.appendChild(rootEl);

makeSheet('servicios', 'Servicios',
'<p class="am-lead">Lo que hacemos en VIBRA.</p><div class="am-svc">' + SERVICES.map(function (s) { return '<button class="am-row" type="button" data-svc="' + s.id + '"><span class="am-tic">' + svgRaw(s.ic) + '</span><span class="am-rt">' + s.t + '</span>' + svg('arrow') + '</button>'; }).join('') + '</div>',
{ tab: 'servicios' });
makeSheet('servicio', 'Servicio', '', { tab: 'servicios', onOpen: function (id) {
var s = null; SERVICES.forEach(function (x) { if (x.id === id) s = x; }); if (!s) return;
var sh = sheets.servicio; sh.el.querySelector('.am-title').textContent = s.t;
sh.body.innerHTML = '<span class="am-tic big">' + svgRaw(s.ic) + '</span><p class="am-desc">' + s.d + '</p><button class="am-cta" type="button" data-quote="' + s.need + '">Cotizar esto ' + svg('arrow') + '</button>';
} });
makeSheet('contacto', 'Contacto',
'<p class="am-lead">Cuéntanos qué necesitas.</p><div class="am-svc">' +
(WA_NUMBER ? row('wa', 'WhatsApp', 'href="https://wa.me/' + WA_NUMBER + '" target="_blank" rel="noopener"') : '') +
row('mail', MAIL, 'href="mailto:' + MAIL + '"') +
row('ig', '@vibrastudioweb', 'href="https://instagram.com/vibrastudioweb" target="_blank" rel="noopener"') +
'<div class="am-row static"><span class="am-tic">' + svg('pin') + '</span><span class="am-rt">Valera, Trujillo · Venezuela</span></div></div>' +
'<button class="am-cta" type="button" data-act="cotizar">Cotizar proyecto ' + svg('arrow') + '</button>',
{ tab: 'contacto' });
makeSheet('proceso', 'Proceso', '<ol class="am-steps">' + STEPS.map(function (s, i) { return '<li><span class="am-n">' + (i + 1) + '</span><div><b>' + s[0] + '</b><p>' + s[1] + '</p></div></li>'; }).join('') + '</ol><button class="am-cta" type="button" data-act="cotizar">Cotizar proyecto ' + svg('arrow') + '</button>', { tab: '' });
makeSheet('cotizar', 'Cotizar proyecto', '', { tab: '', onOpen: renderWizard });
makeSheet('mas', 'Más',
'<div class="am-svc">' +
'<button class="am-row" type="button" data-act="instalar" hidden><span class="am-tic">' + svg('install') + '</span><span class="am-rt">Instalar VIBRA</span>' + svg('arrow') + '</button>' +
'<button class="am-row" type="button" data-act="proceso"><span class="am-tic">' + svg('proceso') + '</span><span class="am-rt">Cómo trabajamos</span>' + svg('arrow') + '</button>' +
row('ig', 'Instagram', 'href="https://instagram.com/vibrastudioweb" target="_blank" rel="noopener"') +
'<button class="am-row danger" type="button" data-act="boom"><span class="am-tic">' + svg('boom') + '</span><span class="am-rt">NO me toques</span>' + svg('arrow') + '</button></div>' + foot,
{ tab: 'mas' });
makeSheet('ios', 'Instalar VIBRA',
'<p class="am-desc">En iPhone o iPad: toca <b>Compartir</b> ' + svg('share', ' class="inl"') + ' y luego <b>Agregar a inicio</b>.</p>', { tab: 'mas' });

rootEl.addEventListener('click', function (e) {
var t = e.target.closest && e.target.closest('[data-tab],[data-act],[data-i],[data-svc],[data-quote],[data-need],[data-stage],[data-wback]');
if (!t || !rootEl.contains(t)) return;
if (t.hasAttribute('data-tab')) { goTab(t.getAttribute('data-tab')); return; }
if (t.hasAttribute('data-i')) { openProject(+t.getAttribute('data-i'), t); return; }
if (t.hasAttribute('data-svc')) { openSheet('servicio', t.getAttribute('data-svc')); return; }
if (t.hasAttribute('data-quote')) { var need = t.getAttribute('data-quote'); later(function () { openWizard(need); }); return; }
if (t.hasAttribute('data-need')) { W.need = t.getAttribute('data-need'); W.step = 2; vib(6); renderWizard(); return; }
if (t.hasAttribute('data-stage')) { W.stage = t.getAttribute('data-stage'); W.step = 3; vib(6); renderWizard(); return; }
if (t.hasAttribute('data-wback')) { W.step = Math.max(1, W.step - 1); renderWizard(); return; }
var a = t.getAttribute('data-act');
vib(8);
if (a === 'cotizar') later(function () { openWizard(); });
else if (a === 'portafolio') { later(function () { setView('portafolio'); }); }
else if (a === 'servicios') later(function () { openSheet('servicios'); });
else if (a === 'contacto') later(function () { openSheet('contacto'); });
else if (a === 'proceso') later(function () { openSheet('proceso'); });
else if (a === 'instalar') install();
else if (a === 'boom') { closeAll(); setTimeout(function () { try { V.boom(); } catch (er) {} }, 420); }
});

/* detalle: cerrar con el historial + arrastre */
$('vd-close').addEventListener('click', function (e) {
if (!mq.matches || !layers.some(function (l) { return l.name === 'detail'; })) return;
e.stopImmediatePropagation(); closeTop();
}, true);
drag($('vd-layer'), document.querySelector('.vd-top'), function () { closeTop(); });

/* riel de destacados */
rail = $('am-rail');
var cnt = $('am-count'), ticking = false;
rail.addEventListener('scroll', function () {
if (ticking) return; ticking = true;
requestAnimationFrame(function () {
ticking = false;
var c = rail.querySelector('.am-card'); if (!c) return;
var step = c.getBoundingClientRect().width + 12;
var i = Math.max(0, Math.min(items.length - 1, Math.round(rail.scrollLeft / step)));
cnt.textContent = String(i + 1).padStart(2, '0') + ' / ' + nn;
});
}, { passive: true });

/* tarjeta manifiesto: el cubo se pausa fuera de pantalla o con la pestaña oculta */
var mani = $('am-mani');
if (mani) {
if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es.forEach(function (e) { mani.classList.toggle('off', !e.isIntersecting); }); }, { threshold: 0 }).observe(mani);
document.addEventListener('visibilitychange', function () { mani.classList.toggle('hid', document.hidden); });
}

updateInstall();
setTab();
try { history.replaceState({ vl: 0 }, ''); } catch (e) {}
root.classList.add('app-ready');
}

/* ---- instalar ---- */
function standalone() { return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; }
function isIOS() { return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); }
function updateInstall() {
if (!built) return;
var show = !standalone() && (!!deferred || isIOS());
Array.prototype.forEach.call(rootEl.querySelectorAll('[data-act=instalar]'), function (b) { b.hidden = !show; });
}
function install() {
if (deferred) {
var d = deferred; deferred = null;
try { d.prompt(); var p = d.userChoice; if (p && p.then) p.then(updateInstall, updateInstall); } catch (e) {}
updateInstall();
} else if (isIOS()) later(function () { openSheet('ios'); });
}
window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; updateInstall(); });
window.addEventListener('appinstalled', function () { deferred = null; updateInstall(); toast('VIBRA instalada'); });

/* ---- conexión ---- */
window.addEventListener('offline', function () { if (built && mq.matches) toast('Sin conexión, sigues viendo VIBRA'); });
window.addEventListener('online', function () { if (built && mq.matches) toast('Conexión restablecida'); });

/* ---- splash: una vez por sesión, se salta con un toque ---- */
function splash() {
var sp = $('am-splash');
if (!sp || !root.classList.contains('splash')) return;
var gone = false;
function out() {
if (gone) return; gone = true;
root.classList.add('splash-out');
setTimeout(function () { root.classList.remove('splash', 'splash-out'); }, 260);
}
sp.addEventListener('click', out);
setTimeout(out, 1200);
}

/* ---- activar / desactivar según el ancho ---- */
function sync() {
if (mq.matches) { root.classList.add('app'); build(); }
else { root.classList.remove('app', 'splash', 'splash-out'); }
}
function init() {
sync();
splash();
if (mq.addEventListener) mq.addEventListener('change', sync); else if (mq.addListener) mq.addListener(sync);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

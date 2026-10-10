(function () {
'use strict';
var A = 'assets/';
var ISO_W = A + 'iso-blanco.png';
var items = [
{ name: 'Conxulty', sub: 'Marca VIBRA · Salud', host: 'conxulty.com', url: 'https://conxulty.com', tag: 'conxulty.com', desc: 'Marca de VIBRA en la línea salud. Directorio de salud de Trujillo con versión app, y Conxulty OS: sistema de gestión clínica con pacientes, citas, consultas, recetas y cobros, en acceso anticipado.', bg: '#9A2BEA', fg: '#FFFFFF', pillBg: '#14F0FF', pillFg: '#0A0612', iso: ISO_W, shots: [A + 'cx-1-directorio.jpg', A + 'cx-2-categorias.jpg', A + 'cx-3-cerca.jpg', A + 'cx-4-os.jpg'], alts: ['Portada de conxulty.com: Directorio de salud Trujillo con buscador por especialidad', 'Sección Busca por categoría con médicos, odontólogos, psicólogos, fisioterapeutas, clínicas, farmacias y laboratorios', 'Sección Cerca de ti: lista de profesionales y mapa con ubicación', 'Conxulty OS: panel médico con pacientes, citas, consultas y recetas'] },
{ name: 'La Feria', sub: 'Producto propio', host: 'laferia.shop', url: 'https://laferia.shop', tag: 'laferia.shop', desc: 'Guía gastronómica de Valera y Trujillo: más de 100 negocios con menú digital, mapa y pedidos directos por WhatsApp, sin comisión.', bg: '#FF5321', fg: '#FFFFFF', pillBg: '#FFFFFF', pillFg: '#0A0612', iso: ISO_W, tint: 'linear-gradient(rgba(255,83,33,.78), rgba(190,40,8,.88))', shots: [A + 'lf-1-portada.jpg', A + 'lf-2-explora.jpg', A + 'lf-3-negocios.jpg'], alts: ['Portada de laferia.shop: ¿Qué se te antoja hoy? con buscador y categorías en puestos de feria', 'Listado de negocios de Valera con filtros por tipo de comida y mapa', 'Sección Trujillo se saborea y Para negocios: menú digital con pedidos por WhatsApp'] },
{ name: 'MANDAO', sub: 'Sistema a medida', host: 'Sistema a medida', url: '', tag: 'Sistema a medida', desc: 'Sistema a medida para servicios de delivery: panel de control y app para repartidores con lectura de pedidos por voz.', bg: '#0A0612', fg: '#FFFFFF', pillBg: '#FF1FC8', pillFg: '#0A0612', iso: ISO_W, tint: 'linear-gradient(rgba(10,6,18,.35), rgba(10,6,18,.62))', shots: [A + 'md-d1.jpg', A + 'md-d2.jpg', A + 'md-d3.jpg', A + 'md-d4.jpg', A + 'md-d5.jpg'], alts: ['Portada de la demo de MANDAO: el sistema que le devuelve la noche al dueño de un delivery', 'Despacho en vivo: se pega el mensaje del cliente y el sistema arma el pedido', 'App del rider: escucha el pedido por voz sin sacar el teléfono', 'Compra personalizada: la central aprueba y el cliente elige, todo en un mismo pedido', 'Cierre del día: cifras de cobro por forma de pago, antes y después de MANDAO'] },
{ name: 'Alma y Células', sub: 'Cliente', host: 'almaycelulas.com', url: 'https://almaycelulas.com', tag: 'almaycelulas.com', desc: 'Sitio web con agenda de citas en línea para un centro clínico de hematología y psiquiatría en Valera: especialistas, tipo de consulta y solo los horarios realmente libres.', bg: '#CC0FA5', fg: '#FFFFFF', pillBg: '#FFD0F3', pillFg: '#0A0612', iso: ISO_W, tint: 'linear-gradient(rgba(204,15,165,.74), rgba(140,8,112,.9))', shots: [A + 'ac-1-inicio.jpg', A + 'ac-2-agenda.jpg', A + 'ac-3-doctores.jpg'], alts: ['Portada de almaycelulas.com: Atendemos la sangre y la mente con la misma atención', 'Página Agenda tu cita: elegir especialista, tipo de consulta, día y datos del paciente', 'Sección Quiénes te atienden con los dos especialistas y testimonios de pacientes'] },
{ name: 'CUADRAO', sub: 'Producto propio · Punto de venta', host: 'cuadrao.pro', url: 'https://cuadrao.pro', tag: 'cuadrao.pro', desc: 'Punto de venta para negocios de un solo equipo: sigue vendiendo aunque se vaya la señal, la venta se guarda y se sincroniza sola. Con apertura y cierre de caja por turno.', bg: '#16210B', fg: '#FFFFFF', pillBg: '#C6F732', pillFg: '#0A0612', iso: ISO_W, tint: 'linear-gradient(rgba(10,6,18,.4), rgba(10,6,18,.74))', shots: [A + 'cq-1-portada.jpg', A + 'cq-2-paraquien.jpg'], alts: ['Portada de cuadrao.pro: Sigue vendiendo aunque se vaya la señal, con una vendedora atendiendo en una bodega', 'Sección Para quién es: bodega, mecánico, barbero, cafetería, comida rápida y manicurista'] },
{ name: 'Apps a medida', sub: 'Prototipos', host: 'Prototipos de apps', url: '', tag: 'Prototipos de apps', desc: 'Prototipos de apps para distintos negocios: movilidad, gastronomía, repuestos e inmobiliaria. Muestras de lo que podemos construir para el tuyo.', bg: '#2A1459', fg: '#FFFFFF', pillBg: '#14F0FF', pillFg: '#0A0612', iso: ISO_W, tint: 'linear-gradient(rgba(42,20,89,.76), rgba(10,6,18,.92))', fit: 'contain', cta: { url: 'https://wa.me/584126553528?text=Hola%20VIBRA%2C%20quiero%20un%20prototipo%20de%20app%20para%20mi%20negocio.', text: 'Pídenos el prototipo de tu negocio' }, caps: ['Rapidito · Movilidad, taxi privado', 'La Feria app · Gastronomía, guía y pedidos', 'AutoParts · Repuestos para vehículos', 'Rivas · Bienes raíces'], bgs: ['#F9F9F8', '#F7F1EA', '#DEDCDD', '#E5E5E7'], shots: [A + 'ap-rapidito.jpg', A + 'ap-laferia.jpg', A + 'ap-autoparts.jpg', A + 'ap-rivas.jpg'], alts: ['Tres pantallas de la app Rapidito: mapa con conductores cercanos, selección de servicio y viaje en curso', 'Pantallas de la app La Feria: inicio, restaurantes, menú, pedido, seguimiento, favoritos y perfil', 'Tienda web de AutoParts en laptop y pantallas de la app: inicio, carrito, envío, pedidos y cuenta', 'Pantallas de la app Rivas Bienes Raíces: inicio, listado, mapa, detalle, agendar visita y contacto'] }
];
var N = items.length;
var posMap = { '-2': 'pos-m2', '-1': 'pos-m1', '0': 'pos-0', '1': 'pos-p1', '2': 'pos-p2' };
var $ = function (id) { return document.getElementById(id); };
var Q = function (s) { return document.querySelector(s); };

var S = { index: 0, menuOpen: false, hf: 0, pxOk: false, boom: false, detail: false, shot: 0, tab: 'inicio' };
var boomT = 0, hfNow = 0, drawn = -1, PX = null, GW = 320, raf = 0;
var cardEls = [];

function rnd(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }

/* ---------- build cards once ---------- */
function buildCards() {
var stage = $('vg-stage');
items.forEach(function (c, i) {
var fs = Math.min(7, 71 / c.name.length);
var has = c.shots.length > 0;
var el = document.createElement('div');
el.className = 'vg-card pos-hide' + (has ? ' has-img' : '');
el.style.background = c.bg; el.style.color = c.fg;
el.setAttribute('aria-hidden', 'true');
var tint = c.tint || 'linear-gradient(rgba(10,6,18,.5), rgba(10,6,18,.7))';
el.innerHTML =
'<img class="vg-bg" src="' + (has ? c.shots[0] : c.iso) + '" alt="" aria-hidden="true" loading="' + (i < 2 ? 'eager' : 'lazy') + '" decoding="async" style="display:' + (has ? 'block' : 'none') + '">' +
'<div class="vg-tint" aria-hidden="true" style="display:' + (has ? 'block' : 'none') + ';background:' + tint + '"></div>' +
'<img class="vg-iso" src="' + c.iso + '" alt="" aria-hidden="true">' +
'<div class="vg-info"><h3 class="vg-name"></h3><span class="vg-pill"></span><p class="vg-desc"></p></div>' +
'<span class="vg-more">Ver proyecto +</span>' +
'<button class="vg-open" type="button" tabindex="-1"></button>';
var nm = el.querySelector('.vg-name'); nm.textContent = c.name;
nm.style.fontSize = 'min(calc(' + fs.toFixed(2) + ' * var(--vgu)), ' + Math.round(fs * 19.2) + 'px)';
var pill = el.querySelector('.vg-pill'); pill.textContent = c.tag; pill.style.background = c.pillBg; pill.style.color = c.pillFg;
el.querySelector('.vg-desc').textContent = c.desc;
var more = el.querySelector('.vg-more'); more.style.background = c.pillBg; more.style.color = c.pillFg;
var btn = el.querySelector('.vg-open'); btn.setAttribute('aria-label', 'Ver proyecto ' + c.name);
btn.addEventListener('click', function () { if (S.index === i) openDetail(); else goTo(i); });
stage.appendChild(el); cardEls.push(el);
});
}

/* ---------- render (updates classes/attrs only) ---------- */
function render() {
var idx = S.index, half = Math.floor(N / 2);
cardEls.forEach(function (el, i) {
var d = ((i - idx + N + half) % N) - half;
var cls = 'vg-card ' + (posMap[String(d)] || 'pos-hide') + (items[i].shots.length ? ' has-img' : '');
if (el.className !== cls) el.className = cls;
el.setAttribute('aria-hidden', d === 0 ? 'false' : 'true');
el.querySelector('.vg-open').tabIndex = d === 0 ? 0 : -1;
});
var it = items[idx];
$('vg-sr').textContent = it.name + '. ' + it.desc;
$('vg-count').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(N).padStart(2, '0');
$('vh-whole').style.opacity = (S.hf === 0 || !S.pxOk) ? 1 : 0;
$('vn-layer').classList.toggle('is-open', S.menuOpen);
$('btn-menu').setAttribute('aria-expanded', S.menuOpen ? 'true' : 'false');
$('vx-layer').classList.toggle('is-on', S.boom);
['inicio', 'trabajo', 'contacto'].forEach(function (t) {
var b = $('tab-' + t); b.classList.toggle('on', S.tab === t); b.setAttribute('aria-current', S.tab === t ? 'page' : 'false');
});
renderDetail();
}

function renderDetail() {
var L = $('vd-layer');
L.classList.toggle('is-open', S.detail);
var it = items[S.index], n = it.shots.length, sh = Math.min(S.shot, Math.max(0, n - 1));
L.style.background = it.bg; L.style.color = it.fg;
$('vd-iso').src = it.iso;
var cl = $('vd-close'); cl.style.color = it.fg;
var nm = $('vd-name');
nm.textContent = it.name;
var longest = Math.max.apply(null, it.name.split(' ').map(function (w) { return w.length; }));
nm.style.fontSize = 'min(calc(' + Math.min(9, 27 / (longest * 0.66)).toFixed(2) + ' * 1vw), 150px)';
$('vd-sub').textContent = it.sub;
$('vd-cap').style.display = it.caps ? 'flex' : 'none';
$('vd-captext').textContent = it.caps ? it.caps[Math.min(sh, it.caps.length - 1)] : '';
$('vd-desc').textContent = it.desc;
var cta = $('vd-cta');
cta.style.display = it.cta ? 'inline-flex' : 'none';
cta.href = it.cta ? it.cta.url : '#';
cta.textContent = it.cta ? it.cta.text + ' ↗' : '';
cta.style.background = it.pillBg; cta.style.color = it.pillFg;
$('vd-shot').style.background = it.bgs ? it.bgs[Math.min(sh, it.bgs.length - 1)] : 'rgba(10,6,18,.3)';
var img = $('vd-img');
if (n) { var src = it.shots[sh]; if (img.getAttribute('src') !== src) img.setAttribute('src', src); img.alt = it.alts[sh]; }
else { img.removeAttribute('src'); img.alt = ''; }
img.style.display = n ? 'block' : 'none';
img.style.objectFit = it.fit || 'cover';
$('vd-shot').setAttribute('data-fit', it.fit || 'cover');
$('vd-zoom').style.display = n ? 'inline-flex' : 'none';
$('vd-shade').style.display = it.fit ? 'none' : (n ? 'block' : 'none');
$('vd-win').style.display = n ? 'none' : 'flex';
$('vd-addr').textContent = it.host;
$('vd-u').style.background = it.pillBg;
var dots = $('vd-dots');
dots.style.display = n > 1 ? 'flex' : 'none';
if (dots.childNodes.length !== n || dots.dataset.idx !== String(S.index)) {
dots.innerHTML = ''; dots.dataset.idx = String(S.index);
it.shots.forEach(function (u, j) {
var b = document.createElement('button'); b.type = 'button'; b.className = 'vd-dot';
b.setAttribute('aria-label', 'Ver captura ' + (j + 1) + ' de ' + n);
b.addEventListener('click', function () { set({ shot: j }); });
dots.appendChild(b);
});
}
Array.prototype.forEach.call(dots.childNodes, function (b, j) { b.classList.toggle('on', j === sh); b.setAttribute('aria-current', j === sh ? 'true' : 'false'); });
var lb = $('vd-label'); lb.style.display = it.fit ? 'none' : 'block'; lb.style.color = n ? '#FFFFFF' : 'inherit'; lb.textContent = it.name;
var v = $('vd-visit'); v.style.display = it.url ? 'inline-flex' : 'none'; v.href = it.url || '#';
v.style.background = it.pillBg; v.style.color = it.pillFg;
}

function set(patch) {
var ch = false;
for (var k in patch) if (S[k] !== patch[k]) { S[k] = patch[k]; ch = true; }
if (ch) render();
}

/* ---------- hero pixels ---------- */
function buildPixels() {
var img = new Image();
img.onload = function () {
try {
var gh = Math.round(GW * 371 / 2000);
var c = document.createElement('canvas'); c.width = GW; c.height = gh;
var cx = c.getContext('2d'); cx.drawImage(img, 0, 0, GW, gh);
var d = cx.getImageData(0, 0, GW, gh).data;
var P = [], n = 0;
for (var y = 0; y < gh; y++) for (var x = 0; x < GW; x++) {
if (d[(y * GW + x) * 4 + 3] > 110) {
n++;
P.push({ id: n, u: (x + 0.5) / GW, v: (y + 0.5) / gh, a: rnd(n * 7 + 1), b: rnd(n * 7 + 2), c: rnd(n * 7 + 3), d: rnd(n * 7 + 4), e: rnd(n * 7 + 5) });
}
}
PX = P; drawn = -1;
drawPixels(hfNow);
set({ pxOk: true });
} catch (e) { PX = null; }
};
img.src = A + 'logo-blanco.png';
}
function drawPixels(hf) {
var cv = Q('.vh-px'), lgEl = Q('.vh-logo');
if (!cv || !lgEl || !PX) return;
var st = cv.parentElement;
var W = st.clientWidth, H = st.clientHeight;
if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
var ctx = cv.getContext('2d');
ctx.clearRect(0, 0, W, H);
if (!hf) return;
var lg = lgEl.getBoundingClientRect(), sr = st.getBoundingClientRect();
var lx = lg.left - sr.left, ly = lg.top - sr.top, lw = lg.width, lh = lg.height;
var cs = lw / GW, k = lw / 1100;
var M = [0, 3, 14, 38, 80, 140, 220, 330, 470, 640];
var COL = ['#14F0FF', '#FF1FC8', '#A62BFF'];
for (var i = 0; i < PX.length; i++) {
var p = PX[i];
var dly = p.u < 0.34 ? 0 : p.u < 0.67 ? 1 : 2;
var f = hf - dly;
var x = lx + p.u * lw, y = ly + p.v * lh, s = cs, col = '#FFFFFF';
if (f > 0) {
var life = 3 + Math.floor(p.d * 5);
if (f >= life) continue;
var mag = M[f] * k * (0.4 + p.c * 1.2);
var dirx = (p.u - 0.5) * 0.6 + (p.a - 0.5) * 1.4;
var diry = -0.5 + (p.b - 0.5) * 1.6;
var jit = (f < 3 ? 0.8 : 2) * cs;
x += dirx * mag + (rnd(p.id * 13 + hf * 29 + 1) - 0.5) * 2 * jit;
y += diry * mag + (rnd(p.id * 13 + hf * 29 + 2) - 0.5) * 2 * jit;
if (f >= 4) s = cs * Math.max(0.35, 1 - (f - 3) * 0.14);
if (f >= 2 && p.e < 0.55) col = COL[Math.floor(p.a * 3) % 3];
}
ctx.fillStyle = col;
ctx.fillRect(Math.round(x), Math.round(y), Math.ceil(s), Math.ceil(s));
}
}

/* ---------- scroll sync ---------- */
function syncFromScroll() {
var next = {};
var g = Q('.vg-scroll');
if (g) {
var total = g.offsetHeight - window.innerHeight;
if (total > 0) {
var p = Math.min(1, Math.max(0, -g.getBoundingClientRect().top / total));
next.index = Math.round(p * (N - 1));
}
}
var vh = window.innerHeight, gE = $('trabajo'), cE = $('contacto'), tab = 'inicio';
if (gE && gE.getBoundingClientRect().top < vh * 0.5) tab = 'trabajo';
if (cE && cE.getBoundingClientRect().top < vh * 0.5) tab = 'contacto';
next.tab = tab;
var h = Q('.vh-scroll');
if (h) {
var t2 = h.offsetHeight - window.innerHeight;
if (t2 > 0) {
var p2 = Math.min(1, Math.max(0, -h.getBoundingClientRect().top / t2));
var f = Math.min(9, Math.floor(p2 * 10));
next.hf = f; hfNow = f;
if (f !== drawn) { drawn = f; drawPixels(f); }
}
}
// on mobile the gallery is not scroll-driven for index (swipe), keep it
if (window.innerWidth <= 720) delete next.index;
set(next);
}
function onScroll() {
if (raf) return;
raf = requestAnimationFrame(function () { raf = 0; syncFromScroll(); });
}

/* ---------- actions ---------- */
function openDetail() {
document.documentElement.style.overflow = 'hidden';
set({ detail: true, shot: 0 });
renderDetail();
setTimeout(function () { var b = $('vd-close'); if (b) b.focus(); }, 80);
}
function closeDetail() { document.documentElement.style.overflow = ''; set({ detail: false }); }
function goSection(id) {
var el = $(id); if (!el) return;
var top = id === 'inicio' ? 0 : el.getBoundingClientRect().top + window.scrollY;
window.scrollTo({ top: top, behavior: 'smooth' });
}
function goTo(i) {
if (window.innerWidth <= 720) { set({ index: i, shot: 0 }); return; }
var el = Q('.vg-scroll'); if (!el) return;
var total = el.offsetHeight - window.innerHeight;
window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + (i / (N - 1)) * total, behavior: 'smooth' });
}

function boom() {
if (boomT) return;
var W = window.innerWidth, H = window.innerHeight;
var CELL = Math.max(8, Math.round(W / 144));
var cols = Math.ceil(W / CELL), rows = Math.ceil(H / CELL);
var INK = '#0A0612';
var rgb = function (str) { var m = /rgba?\(([^)]+)\)/.exec(str || ''); if (!m) return null; var q = m[1].split(/[ ,\/]+/).filter(Boolean).map(parseFloat); return { c: 'rgb(' + q[0] + ',' + q[1] + ',' + q[2] + ')', a: q.length > 3 ? q[3] : 1 }; };
var cache = new Map();
var info = function (el) {
var v = cache.get(el); if (v) return v;
var bg = INK;
for (var e = el; e; e = e.parentElement) { var r = rgb(getComputedStyle(e).backgroundColor); if (r && r.a > 0.5) { bg = r.c; break; } }
var cs = getComputedStyle(el);
var fg = (rgb(cs.color) || { c: '#FFFFFF' }).c;
var text = Array.prototype.some.call(el.childNodes, function (n) { return n.nodeType === 3 && n.textContent.trim(); });
v = { bg: bg, fg: fg, text: text, img: el.tagName === 'IMG' };
cache.set(el, v); return v;
};
var PAL = ['#0A0612', '#0A0612', '#FFFFFF', '#FFFFFF', '#FF1FC8', '#FF1FC8', '#14F0FF', '#14F0FF', '#7B2FF7', '#7B2FF7', '#FFD0F3', '#FFD0F3', '#E4C2FA', '#CC0FA5', '#9A2BEA', '#0FB5C4', '#FFA3EA', '#2A1459'];
var P = [], g = Math.random;
for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
var x = c * CELL, y = r * CELL;
var el = document.elementFromPoint(Math.min(W - 1, x + CELL / 2), Math.min(H - 1, y + CELL / 2));
var col = INK;
if (el) { var v = info(el); col = v.bg; if (v.img && g() < 0.6) col = '#FFFFFF'; else if (v.text && g() < 0.35) col = v.fg; }
P.push({ x: x, y: y, vy: 0, dx: (g() - 0.5) * 3, col: col, settler: g() < 0.09, tx: Math.min(W - CELL, Math.max(0, W / 2 + (g() + g() + g() - 1.5) * W * 0.24)), delay: Math.floor(g() * 18 + (x / W) * 8), life: 6 + Math.floor(g() * 16), age: 0, settled: false, dead: false });
}
var cv = Q('.vx-cv'); if (!cv) return;
cv.width = W; cv.height = H;
var ctx = cv.getContext('2d');
var draw = function () {
ctx.clearRect(0, 0, W, H);
for (var i = 0; i < P.length; i++) {
var p = P[i]; if (p.dead) continue;
var s = CELL;
if (!p.settler && p.age > 0) s = Math.max(2, Math.round(CELL * (1 - (p.age / p.life) * 0.8)));
ctx.fillStyle = p.col; ctx.fillRect(Math.round(p.x), Math.round(p.y), s, s);
}
};
draw();
var h = new Array(cols).fill(0), tk = 0;
document.documentElement.style.overflow = 'hidden';
set({ boom: true, menuOpen: false });
setTimeout(function () { var b = $('vx-refresh'); if (b) b.focus(); }, 120);
boomT = setInterval(function () {
tk++;
var active = 0;
for (var i = 0; i < P.length; i++) {
var p = P[i];
if (p.dead || p.settled) continue;
if (tk < p.delay) { active++; continue; }
p.vy += 2.4; p.y += p.vy;
if (p.settler) {
p.x += (p.tx - p.x) * 0.07; active++;
var cc = Math.min(cols - 1, Math.max(0, Math.round(p.x / CELL)));
if (p.y + CELL >= H - h[cc] * CELL) {
for (var n = 0; n < 200; n++) {
var l = cc > 0 ? h[cc - 1] : 999, rr = cc < cols - 1 ? h[cc + 1] : 999;
if (l < h[cc] - 1 && l <= rr) cc--; else if (rr < h[cc] - 1) cc++; else break;
}
h[cc]++; p.x = cc * CELL; p.y = H - h[cc] * CELL; p.settled = true;
p.col = PAL[Math.floor(Math.random() * PAL.length)];
}
} else {
p.x += p.dx; p.age++;
if (p.age > p.life) { p.dead = true; continue; }
active++;
}
}
draw();
if (!active) { clearInterval(boomT); boomT = -1; }
}, 55);
}
function reset() {
if (boomT > 0) clearInterval(boomT);
boomT = 0;
document.documentElement.style.overflow = '';
set({ boom: false });
window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ---------- init ---------- */
function init() {
buildCards();
$('vg-prev').addEventListener('click', function () { goTo(Math.max(0, S.index - 1)); });
$('vg-next').addEventListener('click', function () { goTo(Math.min(N - 1, S.index + 1)); });
$('vd-close').addEventListener('click', closeDetail);
function openZoom() { var it = items[S.index]; if (!it.shots.length) return; var sh = Math.min(S.shot, it.shots.length - 1); var im = $('vl-img'); im.src = it.shots[sh]; im.alt = it.alts[sh]; $('vl-layer').classList.add('is-open'); setTimeout(function () { $('vl-close').focus(); }, 50); }
function closeZoom() { $('vl-layer').classList.remove('is-open'); }
$('vd-zoom').addEventListener('click', openZoom);
$('vd-img').addEventListener('click', openZoom);
$('vl-close').addEventListener('click', closeZoom);
$('vl-layer').addEventListener('click', function (e) { if (e.target.id !== 'vl-img') closeZoom(); });
$('btn-menu').addEventListener('click', function () { set({ menuOpen: true }); });
$('vn-close').addEventListener('click', function () { set({ menuOpen: false }); });
$('vn-backdrop').addEventListener('click', function () { set({ menuOpen: false }); });
Array.prototype.forEach.call(document.querySelectorAll('.vn-item'), function (a) { a.addEventListener('click', function () { set({ menuOpen: false }); }); });
$('btn-top').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
$('btn-boom').addEventListener('click', boom);
$('vx-refresh').addEventListener('click', reset);
$('tab-inicio').addEventListener('click', function () { goSection('inicio'); });
$('tab-trabajo').addEventListener('click', function () { goSection('trabajo'); });
$('tab-contacto').addEventListener('click', function () { goSection('contacto'); });
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', function () { drawn = -1; onScroll(); });
window.addEventListener('keydown', function (e) {
if (e.key === 'Escape') { if ($('vl-layer').classList.contains('is-open')) closeZoom(); else if (S.detail) closeDetail(); else if (S.menuOpen) set({ menuOpen: false }); }
});
var tx = 0, ty = 0, tOn = false;
document.addEventListener('touchstart', function (e) {
var t = e.touches && e.touches[0]; if (!t) return;
tOn = !!(e.target && e.target.closest && e.target.closest('.vg-stage'));
tx = t.clientX; ty = t.clientY;
}, { passive: true });
document.addEventListener('touchend', function (e) {
if (!tOn) return; tOn = false;
var t = e.changedTouches && e.changedTouches[0]; if (!t) return;
var dx = t.clientX - tx, dy = t.clientY - ty;
if (window.innerWidth > 720 || S.detail) return;
if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
var i = S.index + (dx < 0 ? 1 : -1);
if (i >= 0 && i < N) set({ index: i });
}
}, { passive: true });
render();
syncFromScroll();
buildPixels();
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
}
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

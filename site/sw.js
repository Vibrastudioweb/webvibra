const V='vibra-v2';
const CORE=['/','/index.html','/css/styles.css','/js/app.js','/assets/logo-blanco.png','/assets/iso-blanco.png','/assets/iso-gradiente.png','/assets/icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
const netFirst=(r,key)=>fetch(r,{cache:'no-cache'}).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(h=>h.put(key||r,c))}return x}).catch(()=>caches.match(key||r).then(h=>h||caches.match('/index.html')));
self.addEventListener('fetch',e=>{
 const r=e.request; if(r.method!=='GET')return;
 const u=new URL(r.url); if(u.origin!==location.origin)return;
 if(r.mode==='navigate'){e.respondWith(netFirst(r,'/index.html'));return}
 if(u.pathname==='/index.html'||u.pathname.startsWith('/css/')||u.pathname.startsWith('/js/')){e.respondWith(netFirst(r));return}
 e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(k=>k.put(r,c))}return x})));
});

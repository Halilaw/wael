/* Offline cache. The version below is rewritten by scripts/make_pages.py on every build. */
const V="wh-3528c7916c";
const CORE=["./","index.html","assets/css/style.css","assets/css/fx.css","assets/js/app.js","assets/js/fx.js","assets/img/av-body.webp","assets/img/av-head.webp","manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||r.headers.has("range"))return;const u=new URL(r.url);if(u.origin!==location.origin)return;
const put=res=>{if(res&&res.status===200){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res};
if(r.mode==="navigate"){e.respondWith(fetch(r).then(put).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));return}
e.respondWith(caches.match(r).then(m=>m||fetch(r).then(put)))});

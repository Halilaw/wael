/* Offline cache. Bump VERSION on every release so returning visitors get the new files. */
const VERSION="2026.10.17-1",CACHE="wh-"+VERSION;
const CORE=["./","index.html","manifest.webmanifest","assets/css/app.css","assets/js/boot.js","assets/js/data.js","assets/js/qr.js","assets/js/app.js","assets/fonts/display-800.woff","assets/fonts/inter-400.woff","assets/fonts/inter-600.woff","assets/img/hero-600.webp","assets/img/favicon-32.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;
  if(r.mode==="navigate"){ /* pages: network first, cached copy when offline */
    e.respondWith(fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(CACHE).then(h=>h.put(r,c))}return x}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(r).then(m=>{ /* assets: cached first, refreshed in the background */
    const n=fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(CACHE).then(h=>h.put(r,c))}return x}).catch(()=>m);
    return m||n;
  }));
});

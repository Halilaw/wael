/* Tiny offline cache. Bump VERSION on each release to refresh clients. */
const VERSION="v1",CACHE="wh-"+VERSION;
const CORE=["./","index.html","manifest.webmanifest","assets/img/hero-480.webp","assets/img/favicon-32.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;
  if(r.mode==="navigate"){ /* network-first for pages */
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(CACHE).then(h=>h.put(r,c));return x}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(r).then(m=>{ /* stale-while-revalidate for assets */
    const n=fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(CACHE).then(h=>h.put(r,c))}return x}).catch(()=>m);
    return m||n;
  }));
});

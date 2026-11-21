// Network-first so updates show up immediately; cache is the offline fallback.
const CACHE = "quill-home-v4";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  const keys = await caches.keys();
  const hadOld = keys.some(n => n !== CACHE);
  await Promise.all(keys.filter(n => n !== CACHE).map(n => caches.delete(n)));
  await self.clients.claim();
  // Pages opened from an old cached version get reloaded onto the new one.
  if (hadOld) for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
})()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request, { cache: "no-cache" }).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});

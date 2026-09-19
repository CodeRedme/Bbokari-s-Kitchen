// Bbokari's Kitchen service worker: makes the site work offline.
// When you change any file, bump the number in CACHE (v1 -> v2) so phones get the update.
const CACHE = "bbokaris-kitchen-v1";
const CORE = ["./", "index.html", "manifest.webmanifest", "assets/logo.webp", "assets/hero.jpg", "assets/mascot.jpg", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: show the saved copy fast, refresh it in the background
  if (url.hostname.endsWith("googleapis.com") || url.hostname.endsWith("gstatic.com")) {
    e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
    return;
  }

  // Other websites (like NGL) always go to the network
  if (url.origin !== location.origin) return;

  // Pages: try the network first so updates show up, fall back to the saved copy offline
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
        .catch(() => caches.match(req).then(hit => hit || caches.match("index.html")))
    );
    return;
  }

  // Images and other files: saved copy first
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r;
  })));
});

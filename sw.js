// OfflineHire v9 — Service Worker
// Cache: offlinehire2026
const CACHE = 'offlinehire2026';
const CORE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png',
];

// Install — cache core files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' }))))
      .catch(() => {}) // Don't fail install if some assets missing
      .then(() => self.skipWaiting())
  );
});

// Activate — delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch — cache-first for app shell, network-first for API
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always pass through Anthropic API calls (never cache)
  if (url.hostname === 'api.anthropic.com') {
    e.respondWith(fetch(e.request));
    return;
  }

  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(e.request)
          .then(resp => {
            // Cache successful GET responses
            if (resp && resp.status === 200 && e.request.method === 'GET') {
              const clone = resp.clone();
              caches.open(CACHE).then(c => c.put(e.request, clone));
            }
            return resp;
          })
          .catch(() => {
            // Offline fallback for navigation
            if (e.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

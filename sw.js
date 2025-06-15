const CACHE_NAME = 'pwa-v2';
const ASSETS = [
  '/PWA-teste/',
  '/PWA-teste/index.html',
  '/PWA-teste/manifest.json',
  '/PWA-teste/assets/icon-192.png',
  '/PWA-teste/sw.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
});

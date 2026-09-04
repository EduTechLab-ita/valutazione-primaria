const CACHE_NAME = 'valutazione-primaria-v3';
const urlsToCache = [
  './manifest.json',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './lib/css/all.min.css',
  './lib/chart.umd.min.js',
  './lib/html2pdf.bundle.min.js',
  './lib/webfonts/fa-solid-900.woff2',
  './lib/webfonts/fa-regular-400.woff2',
  './lib/webfonts/fa-brands-400.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Non intercettare mai sw.js, index.html o root — devono sempre venire dal server
  if (url.pathname.endsWith('sw.js') ||
      url.pathname.endsWith('index.html') ||
      url.pathname.endsWith('/')) {
    return;
  }

  // Le chiamate a Google (OAuth e Drive) devono passare intatte: un SW che
  // intercetta POST e PATCH provoca "Failed to fetch" intermittenti, cioè
  // salvataggi che falliscono senza motivo apparente.
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request);
    })
  );
});

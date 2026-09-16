// Bump this version string whenever you change any cached file —
// it's what tells old installs to fetch fresh copies instead of
// serving stale ones forever from cache.
const CACHE_NAME = 'go-app-cache-v7';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/intro-background.png',
  './cards/CyberPunk.png',
  './cards/Necromancer.png',
  './cards/Gardner.png',
  './cards/Spy.png',
  './cards/Astrologist.png',
  './cards/Student.png',
  './cards/deathknight.png',
  './characters/cyberpunk.js',
  './characters/necromancer.js',
  './characters/gardner.js',
  './characters/spy.js',
  './characters/astrologist.js',
  './characters/deathknight.js',
  './characters/template.js',
  './bot.js',
  './puzzles/puzzle1.js',
  './media/jazz-lounge.mp3'
];

// On install: download and cache every file the app needs to run,
// so it works even with no network afterward.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// On activate: delete any caches from older versions so they don't
// pile up on the device.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Cache-first strategy: serve from cache when available (instant load,
// works offline), otherwise fall back to the network.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

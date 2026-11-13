const CACHE_NAME = 'paleta-malarza-v13';
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon-16.png",
  "./favicon-32.png",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png",
  "./schemat_001.jpg",
  "./schemat_002.jpg",
  "./schemat_003.jpg",
  "./schemat_004.jpg",
  "./schemat_005.jpg",
  "./schemat_006.jpg",
  "./schemat_007.jpg",
  "./schemat_008.jpg",
  "./schemat_009.jpg",
  "./schemat_010.jpg",
  "./schemat_011.jpg",
  "./schemat_012.jpg",
  "./schemat_013.jpg",
  "./schemat_014.jpg",
  "./schemat_015.jpg",
  "./schemat_016.jpg",
  "./pejzaz_017.jpg",
  "./pejzaz_018.jpg",
  "./pejzaz_019.jpg",
  "./pejzaz_020.jpg",
  "./pejzaz_021.jpg",
  "./pejzaz_022.jpg",
  "./pejzaz_023.jpg",
  "./pejzaz_024.jpg",
  "./pejzaz_025.jpg",
  "./pejzaz_026.jpg",
  "./pejzaz_027.jpg",
  "./pejzaz_028.jpg",
  "./pejzaz_029.jpg",
  "./pejzaz_030.jpg",
  "./pejzaz_031.jpg",
  "./pejzaz_032.jpg",
  "./pejzaz_033.jpg",
  "./pejzaz_034.jpg",
  "./pejzaz_035.jpg",
  "./pejzaz_036.jpg",
  "./pejzaz_037.jpg",
  "./pejzaz_038.jpg",
  "./pejzaz_039.jpg",
  "./pejzaz_040.jpg",
  "./pejzaz_041.jpg",
  "./zasada_042.jpg",
  "./zasada_043.jpg",
  "./zasada_044.jpg",
  "./zasada_045.jpg",
  "./zasada_046.jpg",
  "./zasada_047.jpg",
  "./zasada_048.jpg",
  "./zasada_049.jpg",
  "./zasada_050.jpg",
  "./zasada_051.jpg",
  "./zasada_052.jpg",
  "./zasada_053.jpg"
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

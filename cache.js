const cacheName = 'my-pwa-cache-v1';
const assetsToCache = ['/', '/index.html', '/styles.css', '/script.js'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});
const staticCacheName = 'site-static';
const assets = [
    'TechInnovators',
    'TechInnovators/index.html',
];


self.addEventListener('install', e => {
    // console.log('service worker has been installed');
    e.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// Activate event
self.addEventListener('activate', e => {
    // console.log('service worker has been activated');
});

// Fetch event
self.addEventListener('fetch', e => {
    // console.log('fetch event', e);
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    );
});
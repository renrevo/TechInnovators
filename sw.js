const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/assets/illustration/interactive-class.svg',
    '/assets/illustration/personalized-learning.svg',
    '/assets/illustration/reading.svg',
    '/assets/illustration/zero-to-hero.svg',
    '/css/all.css',
    '/css/reset.css',
    '/css/style.css',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap',
    '/js/app.js',
    '/js/carousel.js',
    '/js/hamburger-toggler.js',
    '/js/theme.js',
    '/js/transparent-to-solid-header.js',
    '/pages/about-us.html',
    '/pages/programs.html',

    // remove these when website is moved to its domain from github pages
    '/TechnInnovators/',
    '/TechnInnovators/index.html',
    '/TechnInnovators/pages/about-us.html',
    '/TechnInnovators/pages/programs.html',
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
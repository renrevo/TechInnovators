const staticCacheName = 'site-static';
const assets = [
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap',
    '/[techinnovators]',
    '/[techinnovators]/index.html',
    '/[techinnovators]/assets/illustration/interactive-class.svg',
    '/[techinnovators]/assets/illustration/personalized-learning.svg',
    '/[techinnovators]/assets/illustration/reading.svg',
    '/[techinnovators]/assets/illustration/zero-to-hero.svg',
    '/[techinnovators]/css/all.css',
    '/[techinnovators]/css/reset.css',
    '/[techinnovators]/css/style.css',
    '/[techinnovators]/js/app.js',
    '/[techinnovators]/pages/about-us.html',
    '/[techinnovators]/pages/programs.html',
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
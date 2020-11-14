self.addEventListener('install', e => {
    console.log('service worker has been installed');
});

// Activate event
self.addEventListener('activate', e => {
    console.log('service worker has been activated');
});

// Fetch event
self.addEventListener('fetch', e => {
    console.log('fetch event', e);
});
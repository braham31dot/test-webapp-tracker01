// service-worker.js - Service worker for offline support
const staticAssets = [
    './',
    './index.html',
    './info.html',
    './tracker.html',
    './offline.html',
    './style.css',
    './responsive.css',
    './theme.css',
    './main.js',
    './tracker.js',
    './themeToggle.js',
    './manifest.json',
    './favicon.ico'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('static-assets');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}

async function networkFirst(request) {
    const dynamicCache = await caches.open('dynamic-assets');
    try {
        const response = await fetch(request);
        dynamicCache.put(request, response.clone());
        return response;
    } catch (error) {
        const cached = await dynamicCache.match(request);
        return cached ?? await caches.match('./offline.html'); // Serve offline.html if offline
    }
}
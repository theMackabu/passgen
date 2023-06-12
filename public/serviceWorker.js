let CACHE_NAME = 'pwgen' + new Date().getTime();
let urlsToCache = ['/offline/index.html'];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return console.log('Cache opened'), cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((cache) => {
			if (cache) return cache;
			return fetch(event.request);
		})
	);
});

self.addEventListener('activate', (event) => {
	var name = [CACHE_NAME];
	event.waitUntil(
		caches.keys().then((cache) => {
			return Promise.all(
				cache.map((item) => {
					if (name.indexOf(item) === -1) {
						return caches.delete(item);
					}
				})
			);
		})
	);
});

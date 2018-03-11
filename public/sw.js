importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.2/workbox-sw.js');
if (workbox) {
	workbox.routing.registerRoute(/.*\.js/, workbox.strategies.staleWhileRevalidate());
	workbox.routing.registerRoute(/\//, workbox.strategies.staleWhileRevalidate());
}
// Service Worker básico para Mono's Panel
const CACHE_NAME = "Finanzas-Barberia-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Por ahora solo deja pasar las peticiones (sin cache agresivo)
  event.respondWith(fetch(event.request));
});

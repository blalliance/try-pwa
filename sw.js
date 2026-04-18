const CACHE_NAME = 'bl-alliance-v1'; // Changez v1 en v2 pour forcer la mise à jour
const ASSETS = [
  '/',
  '/dashboard.html',
  '/style/dashboard.css',
  '/script/dashboard.js',
  '/assets/logo2.png'
];

// Installation : Mise en cache initiale
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Force la mise à jour immédiate
});

// Activation : Nettoyage de l'ancien cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    })
  );
});

// Stratégie "Network First" : Toujours chercher la version récente, sinon cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si l'image ou la page est trouvée sur le réseau, on met à jour le cache
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request)) // Si réseau mort, on prend le cache
  );
});

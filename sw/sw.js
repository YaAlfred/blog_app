this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/build/bundle.js'
        ]);
      })
    );
});

this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
    );
});

this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v2'];
  
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
});
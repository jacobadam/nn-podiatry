const CACHE_NAME = "v1";
const CACHE_ASSETS = [
  "/",
  "/index.html",
  "/static/js/main.d81f90a7.js",
  "/static/css/main.9909d66b.css",
  "/homepage-image.webp",
  "/homepage-image-mobile.webp",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching Assets");
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Service Worker: Returning Cached Response");
        return response;
      }
      return fetch(event.request).catch(() => {
        console.log("Service Worker: Fetch failed, returning fallback");
      });
    })
  );
});

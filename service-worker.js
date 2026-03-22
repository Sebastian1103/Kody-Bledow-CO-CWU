self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("serwis-app").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/app.js",
        "/data.js",
        "/manifest.json"
      ]);
    })
  );
});

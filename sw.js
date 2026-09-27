/* Biblical Pharmacy — service worker (works under /biblical-pharmacy/ on GitHub Pages) */
const CACHE_NAME = "bp-pwa-v20260927unlock";

function basePath() {
  return self.location.pathname.replace(/sw\.js$/i, "");
}

function asset(rel) {
  const clean = String(rel).replace(/^\.\//, "").replace(/^\//, "");
  return basePath() + clean;
}

const PRECACHE_RELS = [
  "",
  "index.html",
  "library.html",
  "vitamins.html",
  "recipes.html",
  "styles.css",
  "app.js",
  "i18n.js",
  "pwa.js",
  "unlock.js",
  "herbs.js",
  "herb-locales.js",
  "herb-locales-es-01-04.js",
  "herb-locales-es-05-08.js",
  "herb-locales-es-09-12.js",
  "herb-locales-es-13-16.js",
  "herb-locales-pt-01-04.js",
  "herb-locales-pt-05-08.js",
  "herb-locales-pt-09-12.js",
  "herb-locales-pt-13-16.js",
  "vitamins-locales.js",
  "recipes-locales.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-512-maskable.png",
  "icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  const urls = PRECACHE_RELS.map(asset);
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.all(
          urls.map((url) =>
            cache.add(url).catch((err) => {
              console.warn("[bp-sw] precache skip", url, err && err.message);
            })
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("bp-pwa-") && k !== CACHE_NAME)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

function isExternalSkip(url) {
  const h = url.hostname;
  return (
    h.includes("fonts.googleapis.com") ||
    h.includes("fonts.gstatic.com") ||
    h.includes("etsy.com")
  );
}

function underSite(url) {
  if (url.origin !== self.location.origin) return false;
  const prefix = basePath().replace(/\/$/, "");
  if (!prefix) return true;
  return url.pathname === prefix || url.pathname.startsWith(prefix + "/");
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    networkPromise.catch(() => {});
    return cached;
  }

  const fresh = await networkPromise;
  if (fresh) return fresh;

  if (request.mode === "navigate") {
    const fallback = await cache.match(asset("index.html"), {
      ignoreSearch: true,
    });
    if (fallback) return fallback;
  }
  return Response.error();
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (isExternalSkip(url)) return;
  if (!underSite(url)) return;

  event.respondWith(staleWhileRevalidate(request));
});

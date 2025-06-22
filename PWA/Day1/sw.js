const filesToCache = [
    "/index.html",
    "/Page1.html",
    "/Pages/Page2.html",
    "/CSS/index.css",
    "/CSS/Page1.css",
    "/CSS/Page2.css",
    "/JS/main.js",
    "/JS/page1.js",
    "/JS/page2.js",
    "/offline.html",
    "/404.html",
]

const cacheName = "myAppCache-v1"

self.addEventListener("install", (e) => {
    console.log("Service Worker installed", e)
    //   self.skipWaiting()
    e.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => {
                console.log("Caching files", filesToCache)
                return cache.addAll(filesToCache)
            })
            .catch((error) => {
                console.error("Failed to cache files", error)
            })
    )
})

self.addEventListener("activate", (e) => {
    console.log("Service Worker activated", e)
})

self.addEventListener("fetch", (e) => {
    console.log("Service Worker fetching", e.request.url)
    e.respondWith(
        caches.match(e.request).then((response) => {
            if (response) {
                console.log("Returning cached response for", e.request.url)
                return response
            }
            console.log("Fetching from network", e.request.url)
            return fetch(e.request)
                .then((networkResponse) => {
                    // If the response is 404 and it's a navigation, show custom 404
                    if (networkResponse.status === 404 && e.request.mode === "navigate") {
                        return caches.match("/404.html")
                    }
                    // Save new GET requests to cache
                    if (
                        e.request.method === "GET" &&
                        networkResponse &&
                        networkResponse.status === 200 &&
                        networkResponse.type === "basic"
                    ) {
                        const responseClone = networkResponse.clone()
                        caches.open(cacheName).then((cache) => {
                            cache.put(e.request, responseClone)
                        })
                    }
                    return networkResponse
                })
                .catch((error) => {
                    console.error("Network request failed", error)
                    if (e.request.mode === "navigate") {
                        return caches.match("/offline.html")
                    }
                })
        })
    )
})

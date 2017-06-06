/* Previous Service Worker Script

importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('airhorner').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.html?homescreen=1',
                '/?homescreen=1',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css',
                'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
                '/js/portfolio.js',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            ]);
        })
    );
});

*/



/* New Service Worker - In service-worker.js */

var cacheName = 'cache-v1'; //Cache Name

//Files to cache
var filesToCache = [
    '/',
    '/index.html',
    '/index.html?homescreen=1',
    './index.html?utm=homescreen',
    '/?homescreen=1',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
    '/js/portfolio.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
];

//Adding 'install' event listener
self.addEventListener('install', function(event) {
    console.log('Event: Install');

    // waitUntil method extends the lifetime of an event
    event.waitUntil(
        //Open the cache
        caches.open(cacheName)
        .then(function(cache) {
            //Adding the files to cache
            return cache.addAll(filesToCache)
                .then(function() {
                    console.log("All files are cached.");
                })
        })
        .catch(function(err) {
            console.log("Error occurred while caching ", err);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Event: Activate');

    //Delete unwanted and old caches here
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cache) {
                    if (cache !== cacheName) {
                        return caches.delete(cache); //Deleting the cache
                    }
                })
            );
        })
    );
});

//Adding 'fetch' event listener
self.addEventListener('fetch', function(event) {
    console.log('Event: Fetch');

    var request = event.request; // request made by the app

    //Tell the browser to wait for network request and respond with below
    event.respondWith(
        //If request is already in cache, return its response
        caches.match(request).then(function(response) {
            if (response) {
                return response;
            }

            //else make a request and add it to cache and return the response
            return fetch(request).then(function(response) {
                var responseToCache = response.clone(); //Cloning the response stream in order to add it to cache
                caches.open(cacheName).then(function(cache) {
                    cache.put(request, responseToCache); //Adding to cache
                });

                return response;
            });
        })
    );
});

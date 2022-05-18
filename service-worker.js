
// Called when the SW is installed
self.addEventListener('install', function (event) {
  console.log('SW Installed:', event);
  self.skipWaiting();
});

// Called when the SW is activated
self.addEventListener('activate', function (event) {
  console.log('SW Activated:', event);
  event.waitUntil(clients.claim());
});

// Every time something comes from the web
self.addEventListener('fetch', function (event) {
  return;
});
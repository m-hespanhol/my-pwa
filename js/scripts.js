
console.log('From Scripts:', document);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/my-pwa/service-worker.js', { scope: '/my-pwa/' })
    .then(function (registration) {
      console.log('SW Register success:', registration);
    })
    .catch(function (error) {
      console.log('SW Register failed:', error);
    });
}
else {
  console.log('Service worker is not supported.');
}
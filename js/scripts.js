
console.log('From Scripts:', document);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
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
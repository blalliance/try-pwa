let deferredPrompt;

// 1. Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

// 2. Réveil du serveur Render (votre demande)
function wakeUpServer() {
  // fetch('https://bl-alliance-api.onrender.com', { mode: 'no-cors' })
  fetch('https://blalliance.github.io/try-pwa/', { mode: 'no-cors' })
    .then(() => console.log("API réveillée !"))
    .catch(() => console.log("Le serveur est déjà en route."));
}

window.addEventListener('load', wakeUpServer);

// 3. Gestion de l'installation
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

function handleAppInstallation() {
  // Si l'app est déjà installée
  if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone) {
    alert("Vous utilisez déjà l'application BL Alliance !");
    return;
  }

  // Sinon, on propose l'installation
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') console.log('PWA installée');
      deferredPrompt = null;
    });
  } else {
    alert("L'application est déjà prête ou votre navigateur ne supporte pas l'installation directe.");
  }
}


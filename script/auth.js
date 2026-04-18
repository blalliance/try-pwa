// Fonction pour basculer la visibilité des mots de passe
function togglePass(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Gestionnaire pour le formulaire d'Inscription
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            
            // Ici, vous pourriez ajouter une logique de validation ou d'appel Firebase
            console.log("Inscription réussie, redirection...");
            
            // Redirection vers le dashboard
            window.location.href = 'dashboard.html';
        });
    }

    // Gestionnaire pour le formulaire de Connexion
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            
            // Redirection vers le dashboard
            window.location.href = 'dashboard.html';
        });
    }
});

// Rappel : Gardez votre fonction togglePass() existante en dessous
function togglePass(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


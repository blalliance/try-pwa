document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menuBtn');
    const profileGrid = document.getElementById('profile-grid');
    const loader = document.getElementById('loader');
    const body = document.body;

    // On sélectionne tous les liens de la sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    
    sidebarLinks.forEach(link => {
        // On vérifie si le texte du lien contient "Mobile App"
        if(link.innerText.includes("Mobile App")) {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Empêche le lien de recharger la page
                if (typeof handleAppInstallation === "function") {
                    handleAppInstallation(); // Appelle la fonction dans pwa-handler.js
                } else {
                    console.error("pwa-handler.js n'est pas encore chargé.");
                }
            });
        }
    });

    // Ouvrir le menu
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden'; // Bloque le scroll du dashboard
    });

    // Fermer le menu
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = 'auto'; // Réactive le scroll du dashboard
    });

    // Gestion Sidebar
    menuBtn?.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    overlay?.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Infinite Scroll Simulé
    let profileCount = 0;

    // On définit les données directement ici pour éviter l'erreur CORS en local
    const allProfiles = [
              {
                "id": 1,
                "nom": "Sarah Mushizi",
                "age": 26,
                "ville": "Bukavu",
                "photo": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
                "bio": "Passionnée par l'entrepreneuriat social et la lecture. Je cherche quelqu'un de sérieux pour bâtir un avenir stable.",
                "telephone": "+243 812 345 678",
                "profession": "Comptable",
                "interets": ["Lecture", "Voyages", "Cuisine"],
                "sport": "Tennis",
                "habitudes": "Lève-tôt, non-fumeuse"
              },
              {
                "id": 2,
                "nom": "Marc Zihindula",
                "age": 31,
                "ville": "Goma",
                "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
                "bio": "Ingénieur civil, j'aime les randonnées et les discussions intellectuelles. Calme et attentionné.",
                "telephone": "+243 998 765 432",
                "profession": "Ingénieur",
                "interets": ["Technologie", "Randonnée"],
                "sport": "Football",
                "habitudes": "Cuisine souvent, aime le jazz"
              },
              {
                "id": 3,
                "nom": "Esther Nabintu",
                "age": 24,
                "ville": "Bukavu",
                "photo": "https://images.unsplash.com/photo-1529946179074-87642f6204d7?auto=format&fit=crop&q=80&w=400",
                "bio": "Infirmière de profession, j'ai le cœur sur la main. Je cherche une personne respectueuse et pieuse.",
                "telephone": "+243 822 111 222",
                "profession": "Infirmière",
                "interets": ["Chant", "Bénévolat"],
                "sport": "Fitness",
                "habitudes": "Très famille, aime la nature"
              }
            ];

    async function loadProfiles() {
        const loader = document.getElementById('loader');
        const profileGrid = document.getElementById('profile-grid');
        
        loader.style.display = 'block';
        
        setTimeout(() => {
            // On utilise directement la variable allProfiles
            for(let i = 0; i < 20; i++) {
                const profile = allProfiles[i % allProfiles.length];
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${profile.photo}" class="card-img" alt="${profile.nom}">
                    <div class="card-info">
                        <h3>${profile.nom}, ${profile.age}</h3>
                        <p><i class="fas fa-map-marker-alt"></i> ${profile.ville}</p>
                    </div>
                    <div class="card-btns">
                        <button class="btn-view" onclick="viewProfile(${profile.id})">Voir le profil</button>
                        <button class="btn-contact">Contacter</button>
                    </div>
                `;
                profileGrid.appendChild(card);
            }
            loader.style.display = 'none';
        }, 500);
    }

    // Détection du scroll
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            if (loader.style.display === 'none') loadProfiles();
        }
    });

    // Initial load
    loadProfiles();
});

// Redirection vers page profil (Page 5)
function viewProfile(id) {
    window.location.href = `profil.html?id=${id}`;
}


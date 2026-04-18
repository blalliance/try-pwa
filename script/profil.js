// Les données (à mettre en haut de votre fichier global ou via fetch corrigé)
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

if(window.location.pathname.includes('profil.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const profile = allProfiles.find(p => p.id == id) || allProfiles[0];

    const container = document.getElementById('profile-content');
    
    // Injection des données sans exception
    container.innerHTML = `
        <div class="profile-image-section" id="zoom-trigger">
            <img src="${profile.photo}" alt="${profile.nom}" id="main-photo">
        </div>
        
        <div class="profile-info-card">
            <h1 class="main-title">${profile.nom}, ${profile.age}</h1>
            <div class="sub-info">
                <span><i class="fas fa-map-marker-alt"></i> ${profile.ville}</span>
                <span><i class="fas fa-briefcase"></i> ${profile.profession}</span>
            </div>

            <div class="detail-section">
                <h2>Ma Biographie</h2>
                <p>${profile.bio}</p>
            </div>

            <div class="detail-section">
                <h2>Centres d'intérêt & Sport</h2>
                <p>${profile.interets} / ${profile.sport}</p>
            </div>

            <div class="detail-section">
                <h2>Habitudes & Style de vie</h2>
                <p>${profile.habitudes}</p>
            </div>

            <div class="detail-section">
                <h2>Contact direct</h2>
                <p><i class="fas fa-phone-alt"></i> ${profile.telephone}</p>
            </div>
        </div>
    `;

    // Gestion du Plein Écran
    const overlay = document.getElementById('photo-overlay');
    const fsImg = document.getElementById('fullscreen-img');
    const trigger = document.getElementById('zoom-trigger');
    const closeBtn = document.getElementById('close-fullscreen');

    trigger.addEventListener('click', () => {
        fsImg.src = profile.photo;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Bloque le scroll
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Réactive le scroll
    });
}

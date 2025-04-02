// Obține elementele pop-up
const openRegisterPopup = document.getElementById('open-register-popup');
const registerPopup = document.getElementById('register-popup');
const closeRegisterPopup = document.getElementById('close-register-popup');

if (openRegisterPopup && registerPopup && closeRegisterPopup) {
    // Deschide pop-up-ul la click pe buton
    openRegisterPopup.addEventListener('click', function() {
        registerPopup.style.display = 'block';
    });

    // Închide pop-up-ul la click pe "x"
    closeRegisterPopup.addEventListener('click', function() {
        registerPopup.style.display = 'none';
    });

    // Închide pop-up-ul dacă utilizatorul face clic în afara acestuia
    window.addEventListener('click', function(event) {
        if (event.target === registerPopup) {
            registerPopup.style.display = 'none';
        }
    });
}

// Fonction générique pour gérer les modals
function setupModal(modalId, btnId, closeId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);
    var span = document.getElementById(closeId);

    // Ouvrir le modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Fermer le modal quand on clique sur "X"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer le modal si l'utilisateur clique en dehors du contenu
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}


0
// Initialisation des modals
setupModal("modalHome", "Home", "closeModalHome");
setupModal("modalBts", "Bts", "closeModalBts");
setupModal("modalContact", "Contact", "closeModalContact");
setupModal("modalProjects", "Projects", "closeModalProjects");




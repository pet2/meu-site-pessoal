document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Verifica se os elementos existem antes de adicionar o listener
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
            navLinks.classList.toggle('active');
        });
    }
});
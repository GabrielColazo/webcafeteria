// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
});

// Cerrar menu al click afuera
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    if (!navbar.contains(e.target) && !toggler.contains(e.target)) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbar);
        if (bsCollapse) bsCollapse.hide();
    }
});

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('demo-banner');

    window.addEventListener('scroll', () => {
        // Si el scroll baja más de 50px
        if (window.scrollY > 50) {
            banner.classList.add('hidden');
        } else {
            // Si vuelve al inicio, se vuelve a mostrar
            banner.classList.remove('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('demo-banner');
    const body = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            banner.classList.add('hidden');
            body.classList.add('banner-hidden'); // Agregamos clase al body para el CSS
        } else {
            banner.classList.remove('hidden');
            body.classList.remove('banner-hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    // Lo ocultamos inicialmente por CSS o JS
    whatsappBtn.style.opacity = '0';
    whatsappBtn.style.transition = 'opacity 0.5s ease';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            whatsappBtn.style.opacity = '1';
        } else {
            whatsappBtn.style.opacity = '0';
        }
    });
});
// script.js

// === 1. Menú Hamburguesa (Mobile Menu) ===
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Verificar que los elementos existan antes de añadir eventos
if (menuToggle && mobileMenu) {
    // Alternar el menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el evento cierre el menú inmediatamente
        mobileMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace dentro del menú móvil
    document.querySelectorAll('.mobile-menu-list a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Cerrar el menú si se hace clic fuera del menú o del botón
    window.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Cerrar el menú si se hace scroll (mejora UX en móvil)
    window.addEventListener('scroll', () => {
        mobileMenu.classList.remove('active');
    });
}

// === 2. Scroll Suave a Secciones ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Evitar comportamiento predeterminado solo si el enlace es una sección interna
        if (targetId !== '#' && targetId !== '#contacto' && targetId !== '#demo') {
            e.preventDefault();
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste por el navbar fijo
                behavior: 'smooth'
            });
        }
    });
});

// === 3. Efecto en el Navbar al hacer Scroll ===
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// === 4. (Opcional) Asegurar que el menú móvil se cierre al cargar ===
document.addEventListener('DOMContentLoaded', () => {
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
});

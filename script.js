// script.js

// Menú Responsive (Hamburguesa)
document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector(".nav-menu");
    const menuItems = document.querySelectorAll(".nav-menu a");

    // Añadir evento de clic a cada enlace para cerrar el menú en móvil
    menuItems.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navMenu.style.display = "none";
            }
        });
    });

    // Opcional: Si agregas un botón de hamburguesa en el futuro, este código lo maneja
    // Por ahora, el menú es fijo, pero este script prepara el terreno
});

// Scroll Suave al hacer clic en enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste por el menú fijo
                behavior: "smooth"
            });
        }
    });
});

// Animación al hacer scroll (opcional: aparecer secciones con fadeIn)
const sections = document.querySelectorAll(".section");

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
});
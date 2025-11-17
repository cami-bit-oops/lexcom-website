// Menu móvil
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});

document.querySelectorAll('.card, .member, .hero-text').forEach(el => observer.observe(el));

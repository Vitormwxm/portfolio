const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    const expanded = menuList.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});
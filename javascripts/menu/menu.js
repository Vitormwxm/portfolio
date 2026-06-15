const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    console.log("Clicou")
    const expanded = menuList.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
});
import './scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('menu-overlay');

    if (hamburger && menu) {
        const openMenu = () => {
            menu.classList.add('open');
            // Надежно блокируем скролл (страница никуда не дернется, так как скроллбара и так нет)
            document.documentElement.classList.add('lock'); 
            document.body.classList.add('lock');
        };

        const closeMenu = () => {
            menu.classList.remove('open');
            // Снимаем блокировку
            document.documentElement.classList.remove('lock');
            document.body.classList.remove('lock');
        };

        hamburger.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        const menuLinks = menu.querySelectorAll('.nav__link');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    });
});
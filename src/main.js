import './scss/style.scss'

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('menu-overlay');

    if (hamburger && menu) {
        const openMenu = () => {
            menu.classList.add('open');
            document.documentElement.classList.add('lock');
            document.body.classList.add('lock');
        };

        const closeMenu = () => {
            menu.classList.remove('open');
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
    const achievementsSlider = document.querySelector('.achievements-slider');
    
    if (achievementsSlider) {
        new Swiper('.achievements-slider', {
            modules: [Pagination],
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,   // Чтобы на точки можно было кликать
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        });
    }
});
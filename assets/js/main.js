document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.remove();
                new WOW().init();
            }, 500);
        });
    }

    /**
     * Sticky Header on Scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        let nextElement = selectHeader.nextElementSibling;

        const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
                selectHeader.classList.add('sticked');
                if (nextElement) nextElement.classList.add('sticked-header-offset');
            } else {
                selectHeader.classList.remove('sticked');
                if (nextElement) nextElement.classList.remove('sticked-header-offset');
            }
        }
        window.addEventListener('load', headerFixed);
        document.addEventListener('scroll', headerFixed);
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        window.addEventListener('load', togglescrollTop);
        document.addEventListener('scroll', togglescrollTop);
        scrollTop.addEventListener('click', window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }));
    }

    /**
     * Navbar Links
     */
    let navbarlinks = document.querySelectorAll('#navbar a');
    function navbarlinksActive() {
        navbarlinks.forEach(navbarlink => {

            if (!navbarlink.hash) return;

            let section = document.querySelector(navbarlink.hash);
            if (!section) return;

            let position = window.scrollY + 200;

            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        })
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    new Swiper(".rating-slider",
    {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
})
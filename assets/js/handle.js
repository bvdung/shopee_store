
// handle for open mobile navbar
const openMenuMobileBtn = document.querySelector('.btn-select-menu-mobile');
const body = document.querySelector('.body');

openMenuMobileBtn.addEventListener('click', function(){
    screenCover.style.display = "block";
    mobileMenu.classList.add('menu-mobile-slide');
    body.classList.add('no-scroll');
});


//handle for close mobile navbar
const navbarMobileCloseBtn = document.querySelector('.btn-close');
const mobileMenu = document.querySelector('.menu-mobile');
const screenCover = document.querySelector('.cover-screen');

const functionCloseMenuMobile = function() {
    mobileMenu.classList.remove('menu-mobile-slide');
    screenCover.style.display = "none";

    // allow body to scroll normally
    body.classList.remove('no-scroll');
};

navbarMobileCloseBtn.addEventListener('click', functionCloseMenuMobile);
screenCover.addEventListener('click', functionCloseMenuMobile);

// Header menu 
let headerOpen = document.querySelector('.head-contact__btn');
let headerClose = document.querySelector('.head-mob-close');
let headerMenuBg = document.querySelector('.header-mob-bg');
let headerMenu = document.querySelector('.header-mob');

headerOpen.addEventListener('click', toggleMenu);
headerClose.addEventListener('click', toggleMenu);
headerMenuBg.addEventListener('click', toggleMenu);

function toggleMenu() {
    headerMenu.classList.toggle('active');
    headerMenuBg.classList.toggle('active');
}

// Input date value
document.addEventListener('DOMContentLoaded', function () {
    let inputElement = document.getElementById('dateInp');

    let newValue = '2024-04-12'; 

    inputElement.value = newValue;
});



// Swiper sliders
let charterSlide = new Swiper(".charterSlide", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

var yachtSlide = new Swiper(".yachtSlide", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let destinationSlide = new Swiper(".destinationSlide", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        780: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});
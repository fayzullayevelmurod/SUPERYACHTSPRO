// header scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// Header menu 
let headerOpen = document.querySelector('.head-contact__btn');
let headerClose = document.querySelector('.head-mob-close');
let headerMenuBg = document.querySelector('.header-mob-bg');
let headerMenu = document.querySelector('.header-mob');
let headerMenuLink = document.querySelectorAll('.header-mob-link');

headerOpen.addEventListener('click', toggleMenu);
headerClose.addEventListener('click', toggleMenu);
headerMenuBg.addEventListener('click', toggleMenu);

function toggleMenu() {
    headerMenu.classList.toggle('active');
    headerMenuBg.classList.toggle('active');
}
headerMenuLink.forEach(function (item) {
    item.addEventListener('click', function (e) {
        headerMenu.classList.remove('active');
        headerMenuBg.classList.remove('active');
    });
});

// Custom modal open
let yachtsCard = document.querySelectorAll('.yachts-img img');
let customModal = document.querySelector('.custom-modal');
let customModalBg = document.querySelector('.custom-modal-bg');
let customModalClose = document.querySelectorAll('.custom-close');

yachtsCard.forEach(function (item) {
    item.addEventListener('click', function (e) {
        customModal.classList.add('active');
    });
});
customModalClose.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        customModal.classList.remove('active');
    });
});
customModalBg.addEventListener('click', function (e) {
    customModal.classList.remove('active');
});
headerOpen.addEventListener('click', function (e) {
    customModal.classList.remove('active');
});

// Yachts card more
document.querySelector('.yachts-more-btn').addEventListener('click', function () {
    const yachtsCards = document.querySelectorAll('.yacht-card.d-none');
    yachtsCards.forEach(function (card) {
        card.classList.remove('d-none');
    });
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
        776: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});


// Custom slider1
var customBigSlide1 = new Swiper(".customBigSlide1", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var customBigSlide2 = new Swiper(".customBigSlide2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: customBigSlide1,
    },
    breakpoints: {
        300: {
            slidesPerView: 1.5,
            centeredSlides: true,
        },
        776: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    }
});



// Datepicker
$(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd.mm.yy",
        duration: "fast"
    });
});
// Transparent to solid header
const header = document.querySelector("header");

function scrollFunction() {

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        header.classList.add("header__solid");
    } else {
        header.classList.remove("header__solid");
    }

}

window.onscroll = function () {
    scrollFunction()
};

// Mobile navbar toggler
const menu = document.getElementById('btn__menu');
const closeMenu = document.getElementById('btn__close');
const overlay = document.querySelector('.overlay');

function navToggler() {
    document.querySelector('.nav').classList.toggle('nav__active');
    document.querySelector('.overlay').classList.toggle('hide');
}

menu.addEventListener('click', () => {
    navToggler();
});

closeMenu.addEventListener('click', () => {
    navToggler();
});

overlay.addEventListener('click', () => {
    navToggler();
});

// Testimony toggler

const parents = document.getElementById('parents');
const students = document.getElementById('parents');
const clients = document.getElementById('clients');

// Service Worker for PWA

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//         navigator.serviceWorker.register('/techinnovators/sw.js')
//     });
// }
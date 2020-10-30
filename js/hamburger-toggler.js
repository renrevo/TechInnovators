const menu = document.getElementById('btn__menu');
const overlay = document.querySelector('.overlay');

function navToggler() {
    document.querySelector('.fa-bars').classList.toggle('fa-times');
    document.body.classList.toggle('no-scroll');
    document.querySelector('.nav').classList.toggle('nav__active');
    document.querySelector('.overlay').classList.toggle('hide');
}

menu.addEventListener('click', () => {
    navToggler();
});

overlay.addEventListener('click', () => {
    navToggler();
});
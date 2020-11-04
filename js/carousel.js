const track = document.querySelector('.carousel__slides');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.btn__carousel--right');
const prevButton = document.querySelector('.btn__carousel--left');

const carouselNav = document.querySelector('.carousel__nav');
const dotIndicator = Array.from(carouselNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

const showHideArrows = (slides, prevButton, nextButton, targetIndex) => {

    if (targetIndex === 0) {
        prevButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
        nextButton.classList.remove('hidden');
    }

}

const updateIndicators = (currentIndicator, targetIndicator) => {

    currentIndicator.classList.remove('current-indicator');
    targetIndicator.classList.add('current-indicator');

}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

};

nextButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndicator = carouselNav.querySelector('.current-indicator');
    const nextIndicator = currentIndicator.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateIndicators(currentIndicator, nextIndicator);
    showHideArrows(slides, prevButton, nextButton, nextIndex);

});

prevButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentIndicator = carouselNav.querySelector('.current-indicator');
    const prevIndicator = currentIndicator.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateIndicators(currentIndicator, prevIndicator);
    showHideArrows(slides, prevButton, nextButton, prevIndex);

});

carouselNav.addEventListener('click', e => {

    const targetIndicator = e.target.closest('button');

    if (!targetIndicator) return;

    const currentSlide = track.querySelector('.current-slide');
    console.log(currentSlide);
    const targetIndex = dotIndicator.findIndex(dot => dot === targetIndicator);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);

    // Highlighting the current silde indicator
    const currentIndicator = carouselNav.querySelector('.current-indicator');
    updateIndicators(currentIndicator, targetIndicator);
    showHideArrows(slides, prevButton, nextButton, targetIndex);

});
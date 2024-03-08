const carouselContainer = document.querySelector('.carousel-container');
const haircuts = document.querySelector('.haircuts');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.haircut');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 15; // Considerando o gap entre os slides

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length - 2) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 3;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

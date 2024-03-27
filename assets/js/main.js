const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.carousel-container');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    const newTransform = `translateX(-${currentIndex * slideWidth}px)`;
    container.style.transform = newTransform;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = slides.length - 3; // Loop back to the end
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    const isMobile = window.innerWidth <= 764;
    const limit = isMobile ? slides.length - 1 : slides.length - 3;

    if (currentIndex < limit) {
        currentIndex += 1;
    } else {
        currentIndex = 0; // Loop back to the start
    }

    updateCarousel();

});

// Update slide position on window resize to maintain the correct slide visibility
window.addEventListener('resize', updateCarousel);
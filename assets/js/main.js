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

const TABLE_WIDTH = 1024;
const MOBILE_WIDTH = 764;


nextBtn.addEventListener('click', () => {
    const isMobile = window.innerWidth <= MOBILE_WIDTH;
    const isTablet = window.innerWidth <= TABLE_WIDTH;
    let limit;
    if (isMobile) {
        limit = slides.length - 1
    } else if (isTablet) {
        limit = slides.length - 2
    } else {
        limit = slides.length - 3
    }

    if (currentIndex < limit) {
        currentIndex += 1;
    } else {
        currentIndex = 0; // Loop back to the start
    }

    updateCarousel();
    console.log("a")
});

// Update slide position on window resize to maintain the correct slide visibility
window.addEventListener('resize', updateCarousel);
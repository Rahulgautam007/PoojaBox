const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');

let index = 0;

function updateCarousel() {
    const itemWidth = carouselItems[0].clientWidth;
    const totalItems = carouselItems.length;
    const visibleItems = Math.floor(carouselInner.clientWidth / itemWidth); // Number of visible items
    const maxIndex = totalItems - visibleItems;

    // Calculate the new transform value
    const newTransform = -index * itemWidth;
    carouselInner.style.transform = `translateX(${newTransform}px)`;
    
    // Update button states
    prevButton.disabled = index === 0;
    nextButton.disabled = index >= maxIndex;
}

nextButton.addEventListener('click', () => {
    const totalItems = carouselItems.length;
    const visibleItems = Math.floor(carouselInner.clientWidth / carouselItems[0].clientWidth); // Number of visible items
    const maxIndex = totalItems - visibleItems;
    
    if (index < maxIndex) {
        index++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

// Initialize carousel and attach resize event listener
updateCarousel();
window.addEventListener('resize', updateCarousel);




// review slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll('.review-slide');
  let dots = document.querySelectorAll('.dot');
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  slides.forEach((slide, i) => {
    slide.style.display = (i + 1 === slideIndex) ? 'flex' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.className = dot.className.replace(' active', '');
    if (i + 1 === slideIndex) dot.className += ' active';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let autoSlide = setInterval(() => plusSlides(1), 5000);
  document.querySelector('.review-slider').addEventListener('mouseenter', () => clearInterval(autoSlide));
  document.querySelector('.review-slider').addEventListener('mouseleave', () => autoSlide = setInterval(() => plusSlides(1), 5000));
});

let slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slider img');
    if (n >= slides.length) { 
        slideIndex = 0 
    }
    if (n < 0) { 
        slideIndex = slides.length - 1 
    }
    const offset = -slideIndex * 100; // Calculate offset for translating the slider
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex); // Show the first slide
});

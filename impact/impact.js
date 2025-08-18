const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const slideInterval = 4000;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === currentIndex) {
            slide.classList.add("active");
        }
    });
    dots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === currentIndex) {
            dot.classList.add("active");
        }
    });
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToSlide(index) {
    currentIndex = index;
    updateSlides();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

let autoSlide = setInterval(nextSlide, slideInterval);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        moveToSlide(index);
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
    });
});

function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = Math.min((currentTime - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * range + start);
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

window.addEventListener('load', () => {
    updateSlides();
    animateValue("stat1", 0, 35, 2000);
    animateValue("stat2", 0, 120, 2500);
    animateValue("stat3", 0, 15, 3000);
});
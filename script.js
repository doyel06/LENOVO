const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

document.querySelectorAll('.comparison-container').forEach(container => {
  const afterWrapper = container.querySelector('.after-wrapper');
  const handle = container.querySelector('.handle');
  let isDragging = false;

  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percent = (offsetX / rect.width) * 100;
    afterWrapper.style.width = percent + "%";
    handle.style.left = percent + "%";
  });
});

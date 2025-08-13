// Animated Stats Counter
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
    animateValue("stat1", 0, 35, 2000);
    animateValue("stat2", 0, 120, 2500);
    animateValue("stat3", 0, 15, 3000);
});

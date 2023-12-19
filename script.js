// script.js
window.addEventListener('scroll', function () {
    var arrow = document.getElementById('location-arrow');

    if (window.scrollY > 100) {
        arrow.style.opacity = '1';
        arrow.classList.remove('hidden-arrow');
    } else {
        arrow.style.opacity = '0';
        arrow.classList.add('hidden-arrow');
    }
});
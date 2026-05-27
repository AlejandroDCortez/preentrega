const images = document.querySelectorAll(".carrusel-container img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

function nextImage() {
    current++;
    if (current >= images.length) {
        current = 0;
    }
    showImage(current);
}

function prevImage() {
    current--;
    if (current < 0) {
        current = images.length - 1;
    }
    showImage(current);
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Cambio automático cada 5 segundos
setInterval(nextImage, 5000);

// Mostrar la primera imagen al cargar
showImage(current);
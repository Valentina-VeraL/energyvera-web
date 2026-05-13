// CARRUSEL
// Cambia automáticamente entre slides cada 4 segundos.
// El primer slide ya tiene la clase .active en el HTML,
// así que es visible desde antes de que este script corra.


document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".carousel-slide");

  // Si no hay slides en esta página no hace nada y evita errores
  if (!slides.length) return;

  // Arranca en 0 porque el primer slide ya está activo en el HTML
  let index = 0;

  function cambiarSlide() {
    // Quita .active de todos los slides
    slides.forEach(slide => slide.classList.remove("active"));

    // Avanza al siguiente, y si llegó al último vuelve al primero
    index = (index + 1) % slides.length;

    // Activa el nuevo slide
    slides[index].classList.add("active");
  }

  // Cambia cada 4 segundos
  setInterval(cambiarSlide, 4000);

});
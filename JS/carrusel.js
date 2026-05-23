// CARRUSEL

// Espera a que toda la página cargue antes de arrancar
document.addEventListener("DOMContentLoaded", function () {

  // Agarra todos los slides del carrusel
  const slides = document.querySelectorAll(".carousel-slide");

  // si no hay slides en la pagina retorna
  if (!slides.length) return;

  // indice del slide que esta activo
  let index = 0;

  function cambiarSlide() {
    // Le quita .active a todos los slides para "apagarlos"
    slides.forEach(slide => slide.classList.remove("active"));

    // Avanzamos al siguiente — el % hace que cuando llegue al ultimo
    // vuelva automaticamente al primero
    index = (index + 1) % slides.length;

    // Le ponemos .active al nuevo slide para mostrarlo
    slides[index].classList.add("active");
  }

  // cambia cada 4 segundos automáticamente
  setInterval(cambiarSlide, 4000);

  // Esta función la usamos cuando el usuario hace clic en las flechas
  // direccion es +1 (siguiente) o -1 (anterior)
  window.cambiarManual = function(direccion) {
    // Apagamos todos igual que antes
    slides.forEach(slide => slide.classList.remove("active"));

    index = (index + direccion + slides.length) % slides.length;

    // Mostramos el slide correspondiente
    slides[index].classList.add("active");
  }

});
// BOTONES FLOTANTES
// Maneja el menú desplegable del botón de WhatsApp.
// El botón de Facebook no necesita JS porque es solo un link.


document.addEventListener("DOMContentLoaded", () => {

  const btn  = document.getElementById("wspBtn");
  const menu = document.getElementById("wspMenu");

  // El guard evita errores en páginas donde no existan estos elementos
  if (btn && menu) {

    // Click en el botón: alterna el menú entre abierto y cerrado
    btn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    // Click en cualquier parte de la página: cierra el menú
    // si el click fue fuera del botón y fuera del menú
    document.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
      }
    });

  }

});
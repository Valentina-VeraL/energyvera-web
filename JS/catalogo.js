// CATALOGO
// Buscador global que filtra en todos los productos de todas las marcas.
// Se llama con onkeyup desde el input en catalogo.html,
// así busca en tiempo real sin necesidad de botón.


function buscar() {
  const q          = document.getElementById("inputBusqueda").value.toLowerCase().trim();
  const contenedor = document.getElementById("resultados");

  // Si el contenedor no existe en la página, no hace nada
  if (!contenedor) return;

  // Si el input está vacío limpia los resultados y para
  if (!q) {
    contenedor.innerHTML = "";
    return;
  }

  // Busca en nombre y marca de todos los productos
  // todoProductos viene de marca.js que se carga antes que este archivo
  const encontrados = todoProductos.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.marca.toLowerCase().includes(q)
  );

  // Si no hay nada muestra el mensaje de sin resultados
  if (encontrados.length === 0) {
    contenedor.innerHTML = `<p style="text-align:center;color:#888;padding:30px;">
      No se encontraron resultados para "<strong>${q}</strong>"
    </p>`;
    return;
  }

  // Convierte cada producto encontrado en una tarjeta HTML
  // onerror carga la imagen de DUNCAN si la original no existe
  contenedor.innerHTML = encontrados.map(p => `
    <div class="bateria">
      <img src="${p.img}" onerror="this.src='IMG/DUNCAN/DUNCAN.jpg'" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
    </div>
  `).join("");
}
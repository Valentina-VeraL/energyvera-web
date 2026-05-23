function buscar() {
  const q          = document.getElementById("inputBusqueda").value.toLowerCase().trim();
  const contenedor = document.getElementById("resultados");

  if (!contenedor) return;

  if (!q) {
    contenedor.innerHTML = "";
    return;
  }

  const encontrados = todoProductos.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.marca.toLowerCase().includes(q)
  );

  if (encontrados.length === 0) {
    contenedor.innerHTML = `<p style="text-align:center;color:#888;padding:30px;">
      No se encontraron resultados para "<strong>${q}</strong>"
    </p>`;
    return;
  }

  //modal
  contenedor.innerHTML = encontrados.map(p => {
  const idx = todoProductos.indexOf(p);
  return `
    <a class="bateria" href="marca.html?marca=${p.marca}&producto=${idx}" style="text-decoration:none;">
      <img src="${p.img}" onerror="this.src='IMG/DUNCAN/DUNCAN.jpg'" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p class="bateria-desc">${p.descripcion}</p>
      <div class="bateria-specs">
        ${Object.entries(p.specs).slice(0, 2).map(([k, v]) => `
          <span><b>${k}:</b> ${v}</span>
        `).join("")}
      </div>
      <div class="bateria-footer">
        <span class="bateria-marca">${p.marca.toUpperCase()}</span>
        <span class="bateria-cta">Ver detalles →</span>
      </div>
    </a>
  `;
}).join("");
}
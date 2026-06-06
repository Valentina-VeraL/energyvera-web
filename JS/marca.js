// MARCA
// Tiene tres responsabilidades: guarda todos los datos del catalogo,
// arrancar la página segun la marca que viene en la URL,
// y manejar las interacciones del buscador local y el modal.


// -- Datos de productos
// Todos los productos de todas las marcas estan aca
// El buscador global de catalogo.js y las paginas individuales
// de cada marca se forman parte de este mismo array.
const todoProductos = [

  // -- MAC
  {
    nombre: "MAC SILVER PLUS NS60-800",
    img: "IMG/MAC/MAC-SP-NS60-800.jpg",
    marca: "mac",
    descripcion: "Línea superior, confiable para uso diario, ideal para la mayoría de vehículos familiares y urbanos.",
    specs: { "Amperaje": "700 AMP", "CCA": "410 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC SILVER PLUS 36-800",
    img: "IMG/MAC/MAC-SP-36-800.jpg",
    marca: "mac",
    descripcion: "Línea superior, confiable para uso diario, ideal para la mayoría de vehículos familiares y urbanos.",
    specs: { "Amperaje": "800 AMP", "CCA": "750 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC SILVER PLUS 42-850",
    img: "IMG/MAC/MAC-SP-42-850.jpg",
    marca: "mac",
    descripcion: "Línea superior, confiable para uso diario, ideal para vehículos que requieren un alto rendimiento en condiciones de carga intensa.",
    specs: { "Amperaje": "850 AMP", "CCA": "520 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC SILVER PLUS 47-950",
    img: "IMG/MAC/MAC-SP-47-950.jpg",
    marca: "mac",
    descripcion: "Línea superior, confiable para uso diario, ideal para la mayoría de vehículos familiares y urbanos.",
    specs: { "Amperaje": "950 AMP", "CCA": "550 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC SILVER PLUS 48-1000",
    img: "IMG/MAC/MAC-SP-48-1000.jpg",
    marca: "mac",
    descripcion: "Línea superior, confiable para uso diario, ideal para la mayoría de vehículos familiares y urbanos.",
    specs: { "Amperaje": "1000 AMP", "CCA": "550 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC SILVER PLUS 27-1140",
    img: "IMG/MAC/MAC-SP-27-1140.jpg",
    marca: "mac",
    descripcion: "Línea superior, confiable para uso diario, ideal para la mayoría de vehículos familiares y urbanos.",
    specs: { "Amperaje": "1140 AMP", "CCA": "640 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC SILVER PLUS 31H-1300",
    img: "IMG/MAC/MAC-SP-31H-1300.jpg",
    marca: "mac",
    descripcion: "Línea superior, confiable para uso diario, ideal para la mayoría de vehículos familiares y urbanos.",
    specs: { "Amperaje": "1300 AMP", "CCA": "800 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC GOLD PLUS L1-900",
    img: "IMG/MAC/MAC-GP-L1-900.jpg",
    marca: "mac",
    descripcion: "Línea premium, diseñada para vehículos con mayor demanda eléctrica.",
    specs: { "Amperaje": "900 AMP", "CCA": "550 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC GOLD PLUS 42-1000",
    img: "IMG/MAC/MAC-GP-42-1000.jpg",
    marca: "mac",
    descripcion: "Línea premium, diseñada para vehículos con mayor demanda eléctrica.",
    specs: { "Amperaje": "1000 AMP", "CCA": "550 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MAC GOLD PLUS 34-1200",
    img: "IMG/MAC/MAC-GP-34-1200.jpg",
    marca: "mac",
    descripcion: "Línea premium, diseñada para vehículos con mayor demanda eléctrica.",
    specs: { "Amperaje": "1200 AMP", "CCA": "680 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },

  // -- DUNCAN
  {
    nombre: "DUNCAN NS40-670",
    img: "IMG/DUNCAN/DCN-S40-670.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento para vehículos de demanda tradicional.",
    specs: { "Amperaje": "670 AMP", "CCA": "350 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN NS60-750",
    img: "IMG/DUNCAN/DCN-NS60-750.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, ideal para carros livianos y camionetas.",
    specs: { "Amperaje": "750 AMP", "CCA": "400 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 36-750",
    img: "IMG/DUNCAN/DCN-36-750.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, ideal para varios tipos de vehículos.",
    specs: { "Amperaje": "750 AMP", "CCA": "350 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 42-850",
    img: "IMG/DUNCAN/DCN-42-850.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, adecuada para vehículos medianos y grandes.",
    specs: { "Amperaje": "850 AMP", "CCA": "500 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 42-950",
    img: "IMG/DUNCAN/DCN-42-950.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, adecuada para vehículos medianos y grandes.",
    specs: { "Amperaje": "950 AMP", "CCA": "600 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 35-1000",
    img: "IMG/DUNCAN/DCN-35-1000.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, ideal para camionetas.",
    specs: { "Amperaje": "1000 AMP", "CCA": "570 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 27-1150",
    img: "IMG/DUNCAN/DCN-27-1150.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, ideal para vehículos pesados.",
    specs: { "Amperaje": "1150 AMP", "CCA": "670 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 24-1150",
    img: "IMG/DUNCAN/DCN-24-1150.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, ideal para camionetas y vehículos pesados.",
    specs: { "Amperaje": "1150 AMP", "CCA": "670 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 30H-1250",
    img: "IMG/DUNCAN/DCN-30H-1250.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, ideal para vehículos pesados.",
    specs: { "Amperaje": "1250 AMP", "CCA": "700 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "DUNCAN 49-1300",
    img: "IMG/DUNCAN/DCN-49-1300.jpg",
    marca: "duncan",
    descripcion: "Batería de alto rendimiento, ideal para vehículos pesados.",
    specs: { "Amperaje": "1300 AMP", "CCA": "700 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },

  // -- MOURA
  {
    nombre: "MOURA 36-750",
    img: "IMG/MOURA/MOU-36-750.jpg",
    marca: "moura",
    descripcion: "Tecnología brasileña, con polaridad derecha, perfecta para vehículos ligeros y pesados.",
    specs: { "Amperaje": "750 AMP", "CCA": "430 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MOURA 42-950",
    img: "IMG/MOURA/MOU-42-950.jpg",
    marca: "moura",
    descripcion: "Tecnología brasileña, con polaridad derecha, ideal para vehículos de uso diario, carros particulares y de trabajo.",
    specs: { "Amperaje": "950 AMP", "CCA": "570 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "MOURA 48-1200",
    img: "IMG/MOURA/MOU-48-1200.jpg",
    marca: "moura",
    descripcion: "Tecnología brasileña, con polaridad derecha, perfecta para vehículos de carga.",
    specs: { "Amperaje": "1200", "CCA": "650 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },

  // -- VARTA
  {
    nombre: "VARTA 36-780",
    img: "IMG/VARTA/VTA-36-780.jpg",
    marca: "varta",
    descripcion: "Batería con polaridad derecha, ideal para vehículos livianos.",
    specs: { "Amperaje": "780 AMP", "CCA": "440 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "VARTA 42-870",
    img: "IMG/VARTA/VTA-42-870.jpg",
    marca: "varta",
    descripcion: "Batería de alto rendimiento, ideal para una amplia gama de vehículos.",
    specs: { "Amperaje": "870 AMP", "CCA": "520 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "VARTA BLUE L2-900",
    img: "IMG/VARTA/VTA-BL-L2-900.jpg",
    marca: "varta",
    descripcion: "Batería con polaridad derecha, ideal para vehículos livianos.",
    specs: { "Amperaje": "900 AMP", "CCA": "550 A", "Garantía": "15 meses", "Tipo": "BLUE" }
  },
  {
    nombre: "VARTA 48-1200",
    img: "IMG/VARTA/VTA-48-1200.jpg",
    marca: "varta",
    descripcion: "Batería con polaridad derecha para arranque confiable. Perfecta para vehículos con elevado consumo eléctrico.",
    specs: { "Amperaje": "1200 AMP", "CCA": "660 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "VARTA BLUE 49-1250",
    img: "IMG/VARTA/VTA-BL-49-1250.jpg",
    marca: "varta",
    descripcion: "Batería con polaridad derecha, ideal para coches de gama media a alta y algunos vehículos tipo taxi o placa blanca.",
    specs: { "Amperaje": "1250 AMP", "CCA": "850 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "VARTA 4D-1550",
    img: "IMG/VARTA/VTA-4D-1550.jpg",
    marca: "varta",
    descripcion: "Batería con polaridad derecha, indicada para vehículos de gran cilindraje, camiones, camionetas grandes y vehículos de lujo con alto consumo eléctrico.",
    specs: { "Amperaje": "1550 AMP", "CCA": "1060 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },

  // -- BOSCH
  {
    nombre: "BOSCH NS40-800 ",
    img: "IMG/BOSCH/BOSCH-NS40-800.jpg",
    marca: "bosch",
    descripcion: "Confiabilidad Bosch en cada arranque. Compatible con carros livianos.",
    specs: { "Amperaje": "800 AMP", "CCA": "420 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "BOSCH 42-970",
    img: "IMG/BOSCH/BOSCH-42-970.jpg",
    marca: "bosch",
    descripcion: "Confiabilidad Bosch en cada arranque. Compatible con carros livianos.",
    specs: { "Amperaje": "970 AMP", "CCA": "560 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "BOSCH NS40-700",
    img: "IMG/BOSCH/BOSCH-NS40-700.jpg",
    marca: "bosch",
    descripcion: "Confiabilidad Bosch en cada arranque. Compatible con carros livianos.",
    specs: { "Amperaje": "700 AMP", "CCA": "330 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "BOSCH 42-960",
    img: "IMG/BOSCH/BOSCH-42-960.jpg",
    marca: "bosch",
    descripcion: "Confiabilidad Bosch en cada arranque. Compatible con la mayoría de vehículos europeos y japoneses.",
    specs: { "Amperaje": "960 AMP", "CCA": "400 A", "Garantía": "15 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "BOSCH EFB-LN2",
    img: "IMG/BOSCH/BOSCH-EFB-LN2.jpg",
    marca: "bosch",
    descripcion: "Confiabilidad Bosch en cada arranque. Compatible con la mayoría de vehículos europeos y japoneses.",
    specs: { "Amperaje": "60 Ah", "CCA": "540 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "BOSCH L3N-AGM",
    img: "IMG/BOSCH/BOSCH-L3N-AGM.jpg",
    marca: "bosch",
    descripcion: "Confiabilidad Bosch en cada arranque. Compatible con la mayoría de vehículos europeos y japoneses.",
    specs: { "Amperaje": "60 Ah", "CCA": "540 A", "Garantía": "24 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "BOSCH LN4-AGM",
    img: "IMG/BOSCH/BOSCH-LN4-AGM.jpg",
    marca: "bosch",
    descripcion: "Confiabilidad Bosch en cada arranque. Compatible con la mayoría de vehículos europeos y japoneses.",
    specs: { "Amperaje": "60 Ah", "CCA": "540 A", "Garantía": "24 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },

  // -- HELLA
  {
    nombre: "HELLA 60Ah Premium",
    img: "IMG/HELLA/HELLA.jpg",
    marca: "hella",
    descripcion: "Batería premium con resistencia superior a vibraciones y altas temperaturas.",
    specs: { "Amperaje": "60 Ah", "CCA": "600 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "HELLA 60Ah Premium",
    img: "IMG/HELLA/HELLA.jpg",
    marca: "hella",
    descripcion: "Batería premium con resistencia superior a vibraciones y altas temperaturas.",
    specs: { "Amperaje": "60 Ah", "CCA": "600 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },
  {
    nombre: "HELLA 60Ah Premium",
    img: "IMG/HELLA/HELLA.jpg",
    marca: "hella",
    descripcion: "Batería premium con resistencia superior a vibraciones y altas temperaturas.",
    specs: { "Amperaje": "60 Ah", "CCA": "600 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },

  // -- ALPHALINE
  {
    nombre: "ALPHALINE X 55Ah",
    img: "IMG/ALPHALINE/ALPHALINE.jpg",
    marca: "alphaline",
    descripcion: "Solución económica sin sacrificar calidad. Ideal para taxis y vehículos de uso diario.",
    specs: { "Amperaje": "55 Ah", "CCA": "500 A", "Garantía": "12 meses", "Tipo": "Sellada, libre de mantenimiento" }
  },

  // -- HANKOOK
  {
    nombre: "HANKOOK MF 75Ah",
    img: "IMG/HANKOOK/HANKOOK.jpg",
    marca: "hankook",
    descripcion: "Batería sellada libre de mantenimiento, larga vida útil para uso intensivo.",
    specs: { "Amperaje": "75 Ah", "CCA": "680 A", "Garantía": "18 meses", "Tipo": "Sellada, libre de mantenimiento" }
  }
];


// -- Info de cada marca
// Logo, descripción y color de acento por marca.
// El color se aplica dinámicamente a --marca-color en el CSS.
const infoMarcas = {
  mac:       { nombre: "MAC",       logo: "IMG/MAC/MAC.jpg",             desc: "Baterías MAC, alto rendimiento y durabilidad para el mercado colombiano, disponibles en líneas Silver, Gold y AGM.", color: "#f5a623" },
  duncan:    { nombre: "DUNCAN",    logo: "IMG/DUNCAN/DUNCAN.jpg",       desc: "Baterías colombianas de excelente relación calidad-precio. Ideales para el mercado nacional.",                   color: "#f5a623" },
  varta:     { nombre: "VARTA",     logo: "IMG/VARTA/VARTA.jpg",         desc: "Tecnología alemana líder mundial en almacenamiento de energía automotriz.",                                       color: "#f5a623" },
  moura:     { nombre: "MOURA",     logo: "IMG/MOURA/MOURA.jpg",         desc: "Moura es una marca brasileña de baterías automotrices, conocida por su durabilidad y calidad.",                  color: "#f5a623" },
  bosch:     { nombre: "BOSCH",     logo: "IMG/BOSCH/BOSCH.jpg",         desc: "Confiabilidad y precisión alemana en cada producto. Una de las marcas más reconocidas del mundo.",              color: "#f5a623" },
  hella:     { nombre: "HELLA",     logo: "IMG/HELLA/HELLA.jpg",         desc: "Innovación en autopartes eléctricas con más de 125 años de experiencia.",                                        color: "#f5a623" },
  alphaline: { nombre: "ALPHALINE", logo: "IMG/ALPHALINE/ALPHALINE.jpg", desc: "Baterías de origen coreano con excelente desempeño a precio accesible.",                                         color: "#f5a623" },
  hankook:   { nombre: "HANKOOK",   logo: "IMG/HANKOOK/HANKOOK.jpg",     desc: "Fabricante coreano con alta tecnología MF para vehículos de alto rendimiento.",                                  color: "#f5a623" }
};


// -- Arranque de la página
const params   = new URLSearchParams(window.location.search);
const marcaKey = (params.get("marca") || "").toLowerCase();
const info     = infoMarcas[marcaKey];

if (!info) {
  document.getElementById("marcaTitulo").textContent = "Marca no encontrada";
} else {

  // Llena el hero con los datos de la marca
  document.getElementById("marcaLogo").src            = info.logo;
  document.getElementById("marcaTitulo").textContent  = info.nombre;
  document.getElementById("marcaDesc").textContent    = info.desc;

  // Cambia el titulo de la pestaña del navegador
  document.title = `${info.nombre} — Energyvera`;

  document.documentElement.style.setProperty("--marca-color", info.color);

  // Filtra solo los productos de esta marca y ve cuantos hay
  const productos = todoProductos.filter(p => p.marca === marcaKey);
  document.getElementById("marcaCount").textContent =
    `${productos.length} referencia${productos.length !== 1 ? "s" : ""} disponible${productos.length !== 1 ? "s" : ""}`;

  renderProductos(productos);
}

// Si viene un producto específico en la URL, abre su modal automáticamente
const productoIdx = params.get("producto");
if (productoIdx !== null) {
  // Espera a que los productos rendericen antes de abrir el modal
  setTimeout(() => abrirModal(parseInt(productoIdx)), 300);
}

// -- Render de productos
// Recibe un array de productos y los convierte en tarjetas html
// indexOf busca el índice global del producto en todoProductos
// para pasarselo al modal y que sepa que producto mostrar.
function renderProductos(lista) {
  const grid   = document.getElementById("gridProductos");
  const sinRes = document.getElementById("sinResultados");

  if (lista.length === 0) {
    grid.innerHTML = "";
    sinRes.style.display = "block";
    return;
  }

  sinRes.style.display = "none";
  grid.innerHTML = lista.map((p, i) => `
    <div class="prod-card" style="animation-delay:${i * 0.07}s" onclick="abrirModal(${todoProductos.indexOf(p)})">
      <div class="prod-img-wrap">
        <img src="${p.img}" alt="${p.nombre}" onerror="this.src='IMG/DUNCAN/DUNCAN.jpg'">
      </div>
      <div class="prod-info">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <div class="prod-specs">
          ${Object.entries(p.specs).slice(0, 2).map(([k, v]) => `<span><b>${k}:</b> ${v}</span>`).join("")}
        </div>
        <button class="btn-ver">Ver detalles <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>
  `).join("");
}


// -- Filtro local
// Se llama con cada tecla que el usuario presiona en el buscador.
// este busca también en descripción
// y en todos los valores de specs, no solo en nombre y marca.
function filtrarLocal() {
  const q    = document.getElementById("inputBusqueda").value.toLowerCase();
  const base = todoProductos.filter(p => p.marca === marcaKey);

  const filtrados = base.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.descripcion.toLowerCase().includes(q) ||
    Object.values(p.specs).some(v => v.toLowerCase().includes(q))
  );

  renderProductos(filtrados);
}


// -- Modal
// Recibe el índice global del producto en todoProductos
// El link de WhatsApp usa encodeURIComponent para que el nombre
// del producto con tildes y espacios no rompa la URL.
function abrirModal(idx) {
  const p = todoProductos[idx];

  document.getElementById("modalImg").src              = p.img;
  document.getElementById("modalNombre").textContent   = p.nombre;
  document.getElementById("modalDesc").textContent     = p.descripcion;
  document.getElementById("modalSpecs").innerHTML      = Object.entries(p.specs)
    .map(([k, v]) => `<div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>`)
    .join("");

  // Arma el link de WhatsApp con el nombre del producto ya escrito
  const msg = encodeURIComponent(`Hola, me interesa la batería ${p.nombre}. ¿Podría darme más información?`);
  document.getElementById("modalWsp").href = `https://wa.me/573152168760?text=${msg}`;

  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}


// -- Cerrar modal
// Quita la clase .active del overlay y devuelve el scroll al body.
function cerrarModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// Tambien se puede cerrar presionando Escape
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarModal(); });
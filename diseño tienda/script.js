// === JSON con productos ===
const productosJSON = [
  { id: 1, nombre: "hora libre", precio: 800, imagen: "https://via.placeholder.com/200?text=Laptop" },
  { id: 2, nombre: "falta a tutoria", precio: 40, imagen: "https://via.placeholder.com/200?text=Mochila" },
  { id: 3, nombre: "puntos extra", precio: 5, imagen: "https://via.placeholder.com/200?text=Cuaderno" },
  { id: 4, nombre: "clase recrativa", precio: 25, imagen: "https://via.placeholder.com/200?text=Audifonos" },
  { id: 5, nombre: "posponer examen", precio: 15, imagen: "https://via.placeholder.com/200?text=Mouse" },

];

let carrito = [];

// Mostrar productos
const contenedor = document.getElementById("productos");
productosJSON.forEach(p => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>Precio: <price>c$${p.precio}</price></p>
    <button class="boton" onclick="agregarAlCarrito(${p.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});

// Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productosJSON.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// Actualizar contenido del carrito
function actualizarCarrito() {
  const lista = document.getElementById("lista");
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  lista.innerHTML = carrito.map(p => `${p.nombre} - $${p.precio}`).join("<br>");
  document.getElementById("total").textContent = total.toFixed(2);
}

// Calcular total con descuento
function calcularTotal() {
  let total = carrito.reduce((acc, p) => acc + p.precio, 0);
  const esEstudiante = document.getElementById("esEstudiante").checked;

// if (esEstudiante) {
//    total *= 0.9; // 10% descuento
//    alert("🎓 Descuento del 10% aplicado para estudiantes");
//  }

  document.getElementById("total").textContent = total.toFixed(2);
}

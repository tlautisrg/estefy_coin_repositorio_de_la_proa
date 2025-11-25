let usuarios = [];

const mailInput = document.getElementById("mail");
const contraseñaInput = document.getElementById("contraseña");
const iniciarSesion = document.getElementById("iniciarSesion");
const borrarJSON = document.getElementById("borrarJSON");
const mensaje = document.getElementById("mensaje");

const confirmacion = document.getElementById("confirmacion");
const confirmarSi = document.getElementById("confirmarSi");
const confirmarNo = document.getElementById("confirmarNo");

// 🔹 Mostrar mensajes en pantalla
function mostrarMensaje(texto, tipo = "info") {
  mensaje.textContent = texto;
  mensaje.className = tipo;

  setTimeout(() => {
    mensaje.textContent = "";
    mensaje.ClassName = "";
  }, 3000);
}

// 🔹 Cargar los usuarios guardados
window.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("Usuarios");
  if (data) usuarios = JSON.parse(data);
});

// 🔹 Iniciar sesión / registrar
iniciarSesion.addEventListener("click", () => {
  const mail = mailInput.value.trim();
  const contraseña = contraseñaInput.value.trim();

  if (mail === "" || contraseña === "") {
    mostrarMensaje("⚠️ Completá los datos correctamente.", "error");
    return;
  }

  const usuarioExistente = usuarios.find(u => u.mail === mail);

  if (usuarioExistente) {
    if (usuarioExistente.contraseña === contraseña) {
      mostrarMensaje("✅ Contraseña correcta. ¡Bienvenido!", "ok");
    } else {
      mostrarMensaje("❌ Contraseña incorrecta.", "error");
    }
  } else {
    const nuevoUsuario = { mail, contraseña };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("Usuarios", JSON.stringify(usuarios));
    mostrarMensaje("🆕 Usuario registrado correctamente.", "ok");
  }

  mailInput.value = "";
  contraseñaInput.value = "";

});

borrarJSON.addEventListener("click", () => {
  confirmacion.classList.remove("oculto");
});

confirmarSi.addEventListener("click", () => {
  localStorage.removeItem("Usuarios");
  usuarios = [];
  mostrarMensaje("🗑️ Todos los usuarios fueron borrados correctamente.", "info");
  confirmacion.classList.add("oculto");
});

confirmarNo.addEventListener("click", () => {
  localStorage.removeItem("Usuarios");
  usuarios = [];
  mostrarMensaje("❎ Cancelaste el borrado de usuarios.", "info");
  confirmacion.classList.add("oculto");
});
let data;

// Cargar JSON
async function loadData() {
    const res = await fetch("data.json");
    data = await res.json();

    // Mostrar monedas
    document.getElementById("coinCount").textContent = data.usuario.monedas;

    renderTasks();
    renderStore();
}

// Cambiar entre secciones
function showSection(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Crear usuario
function createUser() {
    const name = document.getElementById("newUser").value;
    if (!name) return alert("Ingrese un nombre");

    data.usuario.nombre = name;

    alert("Cuenta creada para: " + name);
}

// Mostrar tareas
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    data.tareas.forEach(t => {
        const li = document.createElement("li");
        li.textContent = `${t.nombre} — ${t.estado}`;
        list.appendChild(li);
    });
}

// Mostrar tienda
function renderStore() {
    const list = document.getElementById("shopList");
    list.innerHTML = "";

    data.tienda.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} — ${item.precio} monedas`;
        list.appendChild(li);
    });
}

function goToCoins() {
    
    window.location.href = "../Visualizacion de coins/index.html";
}

function goToShop() {
    window.location.href = "../diseño tienda/index.html";
}

function goToTasks() {
    window.location.href = "../stehicoinsHTML/index.html";
}
loadData();


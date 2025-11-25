const tasks = [
  { id: 1, materia: "Programación", titulo: "Desarrollar calculadora en JavaScript", descripcion: "Crear una calculadora básica con operaciones aritméticas", docente: "Prof. García", coins: 150, fechaLimite: "2025-11-15", completada: false },
  { id: 2, materia: "Matemática", titulo: "Ejercicios de derivadas", descripcion: "Resolver ejercicios del libro", docente: "Prof. Martínez", coins: 100, fechaLimite: "2025-11-10", completada: false },
  { id: 3, materia: "Lengua y Literatura", titulo: "Análisis del Quijote", descripcion: "500 palabras sobre personajes", docente: "Prof. Rodríguez", coins: 120, fechaLimite: "2025-11-12", completada: true },
  { id: 4, materia: "Inglés", titulo: "Essay about Technology", descripcion: "300-word essay", docente: "Prof. Smith", coins: 130, fechaLimite: "2025-11-14", completada: false },
  { id: 5, materia: "Taller de Inglés", titulo: "Conversational recording", descripcion: "5-minute recording", docente: "Prof. Johnson", coins: 80, fechaLimite: "2025-11-11", completada: false },
  { id: 6, materia: "Estructura y Almacenamiento de Datos", titulo: "Implementar un árbol binario", descripcion: "Crear e implementar un árbol binario", docente: "Prof. López", coins: 180, fechaLimite: "2025-11-18", completada: false },
  { id: 7, materia: "Biología", titulo: "Informe sobre la fotosíntesis", descripcion: "Proceso en plantas", docente: "Prof. Fernández", coins: 110, fechaLimite: "2025-11-13", completada: true },
  { id: 8, materia: "Educación Artística", titulo: "Proyecto de pintura abstracta", descripcion: "Obra con acuarelas", docente: "Prof. Moreno", coins: 90, fechaLimite: "2025-11-20", completada: false }
];

const materiaClasses = {
  "Programación": "bg-programacion",
  "Matemática": "bg-matematica",
  "Lengua y Literatura": "bg-lengua",
  "Inglés": "bg-ingles",
  "Taller de Inglés": "bg-taller",
  "Estructura y Almacenamiento de Datos": "bg-estructura",
  "Biología": "bg-biologia",
  "Educación Artística": "bg-artistica",
};

function updateStats() {
  document.getElementById("totalTareas").textContent = tasks.length;
  document.getElementById("tareasPendientes").textContent = tasks.filter(t => !t.completada).length;
  document.getElementById("coinsGanadas").textContent = tasks.filter(t => t.completada).reduce((sum, t) => sum + t.coins, 0);
}

function renderTasks() {
  const container = document.getElementById("tasksContainer");
  container.innerHTML = "";

  tasks.forEach(task => {
    const card = document.createElement("div");

    card.className = `task-card ${task.completada ? "opacity-75" : ""}`;

    card.innerHTML = `
      <div class="task-top-bar" style="background:${task.completada ? '#34c759' : '#ff8c42'}"></div>

      <div class="task-content">
        
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <span class="materia-badge ${materiaClasses[task.materia]}">${task.materia}</span>
          <span class="coin-badge">${task.coins} 💰</span>
        </div>

        <h3 style="font-size:18px; font-weight:bold; color:#333;">${task.titulo}</h3>
        <p class="task-desc">${task.descripcion}</p>

        <p class="docente"><strong>Enviado por:</strong> ${task.docente}</p>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #ddd; padding-top:10px;">
          <span class="fecha"><strong>Fecha:</strong> ${new Date(task.fechaLimite).toLocaleDateString("es-AR")}</span>

          <button class="btn ${task.completada ? 'btn-comp' : 'btn-pend'}" onclick="toggleCompletion(${task.id})">
            ${task.completada ? "✅ Completada" : "❌ Pendiente"}
          </button>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

function toggleCompletion(id) {
  const task = tasks.find(t => t.id === id);
  task.completada = !task.completada;
  updateStats();
  renderTasks();
}

updateStats();
renderTasks();

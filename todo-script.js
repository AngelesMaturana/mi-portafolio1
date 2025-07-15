function agregarTarea() {
  const entrada = document.getElementById("nueva-tarea");
  const texto = entrada.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  const boton = document.createElement("button");
  boton.textContent = "Eliminar";
  boton.onclick = () => li.remove();

  li.appendChild(boton);
  document.getElementById("lista-tareas").appendChild(li);

  entrada.value = "";
}
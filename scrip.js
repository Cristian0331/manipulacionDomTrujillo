
function cambiarTexto() {
    document.getElementById("titulo").innerText = "Hola gente que programa mucho!";

    const valor = document.getElementById("input").value;

    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText = valor;

    document.getElementById("lista").appendChild(nuevoParrafo);

    
    document.getElementById("input").value = "";
}

function eliminarTodo() {
    document.getElementById("lista").innerHTML = "";
}

function cambiarTexto() {
    document.getElementById("titulo").innerText = "Hola gente que programa mucho!";

    const valor = document.getElementById("input").value;

    const nuevoParrafo = document.createElement("p")
    nuevoParrafo.innerText = valor;

    document.getElementById("lista").appendChild(nuevoParrafo); 
}
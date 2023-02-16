let boton = document.getElementById("btn")

boton.addEventListener("click", (e) =>{
    e.preventDefault()
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let fecha = document.getElementById("fecha").value
    let salario = document.getElementById("salario").value

    let cartas = document.getElementById("cartas")

    const datos = {
        nombre,
        apellido,
        edad,
        fecha,
        salario
    }

    cartas.innerHTML += `<div class="card">
            <img src="./Imagen/imagencita.png" alt="">
            <h3> ${datos.nombre}</h3>
            <h3> ${datos.salario}</h3>
            </div>`
    
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("salario").value = ""
    
})
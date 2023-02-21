let btn = document.getElementById("btn-search")
const palabras = ["juego", "leon", "entrenar", "ahorcado", "perro", "negro"]

const palabraRandom = palabras[Math.floor(Math.random()* palabras.length)]

const guiones = palabraRandom.replace(/./g, "_ ")


btn.addEventListener("click", () =>{
    const letra = document.getElementById("search").value;

    for(let i in palabraRandom){
        if (letra == palabraRandom[i]) {
            
        }
    }
})
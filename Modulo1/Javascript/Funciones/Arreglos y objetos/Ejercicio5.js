let palabras = ["hola", "que", "haces", "hoy"]
let letra = "h"

const findLetter = (palabras, letra) =>{
    let np = ""
    console.log(palabras)
    palabras.forEach(element => {
        np += element.replaceAll(letra, "X")
    });

    return np
}

let resultado = findLetter(palabras,letra)
console.log(resultado);
let edad = 0
let peso = 0.0
let sumaNiños = 0
let sumaJoven = 0
let sumaAdulto = 0
let sumaViejo = 0

let promedioPesoNiños = 0.0
let promedioPesoJoven = 0.0
let promedioPesoAdulto = 0.0
let promedioPesoViejo = 0.0
let niños = 0
let jovenes = 0
let adulto = 0
let viejo = 0


for (let index = 0; index < 8; index++) {

    edad = parseInt(prompt("Ingrese su edad: "))
    switch ((edad > 0)) {
        case (edad > 0 && edad < 12):
            niños++
            peso = parseFloat(prompt("Ingrese su peso "))
            sumaNiños += peso
            promedioPesoNiños = sumaNiños / niños
            break;
        case (edad > 13 && edad < 29):
            jovenes++
            peso = parseFloat(prompt("Ingrese su peso "))
            sumaJoven += peso
            promedioPesoJoven = sumaJoven / jovenes
            break;
        case (edad > 30 && edad < 59):
            adulto++
            peso = parseFloat(prompt("Ingrese su peso "))
            sumaAdulto += peso
            promedioPesoAdulto = sumaAdulto/adulto
            break;
        case (edad >= 60):
            viejo++
            peso = parseFloat(prompt("Ingrese su peso "))
            sumaViejo += peso
            promedioPesoViejo = sumaViejo/viejo
            break;
        default:
            console.log("Edad invalida");
            break;
    }
}

console.log("Promedio peso niños: ", promedioPesoNiños, 
            "Cantidad de niños: ", niños)

console.log("Promedio peso jovenes: ", promedioPesoJoven, 
"Cantidad de niños: ", jovenes)

console.log("Promedio peso adultos: ", promedioPesoAdulto, 
            "Cantidad de adultos: ", adulto)

console.log("Promedio peso viejo: ", promedioPesoViejo, 
"Cantidad de viejo: ", viejo)
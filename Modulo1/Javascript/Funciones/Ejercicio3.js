function calcularPromedio(nota1, nota2, nota3, nota4, nota5){
    let definitiva = 0
    let promedioDos = ((nota1 + nota2)/2) * 0.4
    let promedio3 = ((nota3 +nota4+ nota5)/3) * 0.6
    
    definitiva = promedioDos + promedio3

    return definitiva
}

let estudiante = prompt("Ingrese el nombre del estudiante")
let nota1 = parseFloat(prompt("Ingrese la nota 1"))
let nota2 = parseFloat(prompt("Ingrese la nota 2"))
let nota3 = parseFloat(prompt("Ingrese la nota 3"))
let nota4 = parseFloat(prompt("Ingrese la nota 4"))
let nota5 = parseFloat(prompt("Ingrese la nota 5"))


let definitiva = 0

definitiva = calcularPromedio(nota1, nota2, nota3, nota4, nota5)

console.log("La definitiva del estudiante ", estudiante, " es: ", definitiva)
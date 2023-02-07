let nAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a evaluar"))
let notas = []

for (let index = 0; index < nAlumnos; index++) {
    notas.push(prompt(`Ingrese la nota del estudiante: ${index+1}`))
    if (notas[index] > 3.5) {
        alert(`El estudiante: ${index+1} Aprobo`)
    }else{
        alert(`El estudiante: ${index+1} Reprobo`)

    }

    console.log(`El estudiante: ${index+1} Tiene una nota de: ${notas[index]}`)
}



// 4.Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
// 	A = 19 y 20.
// 	B = 16, 17 y 18.
// 	C = 13, 14 y 15. 
// 	D = 10, 11 y 12.
// 	E = 1 hasta 9.

// Las notas solo pueden ser numeros entre 1 y 20.

let nota = parseInt(prompt("Ingrese una nota"))

let calificacion= ""

if (nota < 0) {
    alert("Esta nota no es valida")
}else{
    if(nota == 19 || nota == 20){
        calificacion = "A"
    }else if(nota == 16 || nota == 17 || nota == 18){
        calificacion = "B"
    }else if (nota == 13 || nota == 14 || nota == 15) {
        calificacion = "C"
    }else if (nota == 10 || nota == 11 || nota == 12) {
        calificacion = "D"
    }else if(nota < 10 && nota > 0){
        calificacion = "E"
    }else{
        calificacion = "F"
        console.log("Perdio el examen, su nota es: ", nota)
        console.log("Su calificacion es de rango: ", calificacion);
    }
    console.log("La nota de su examen es: ", nota)
    console.log("Su calificacion es de rango: ", calificacion);
}



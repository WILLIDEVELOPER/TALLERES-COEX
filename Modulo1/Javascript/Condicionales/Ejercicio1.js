
// 1.Desarrolle un algoritmo que permita leer 3 números enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
// Ademas ninguno de los 3 numeros ingresados pueden ser iguales. En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.

let n1 = parseInt(prompt("Ingrese un numero entero"))
let n2 = parseInt(prompt("Ingrese un numero entero"))
let n3 = parseInt(prompt("Ingrese un numero entero"))

let mayor = 0
let menor = 0

if ((n1 < 0) || (n2 < 0) || (n3 < 0)) {
    alert("Alguno de los numeros no es valido. Ingrese un numero mayor o igual a 0.")
} else if ((n1 == n2) || (n1 == n3) || (n2 == n3)) {
    alert("No puede aver numero iguales. Ingrese valores diferentes")
} else {
    if ((n1 > n2) && (n1 > n3)) {
        mayor = n1
        if (n2 > n3) {
            menor = n3
        } else {
            menor = n2
        }
    } else if ((n2 > n1) && (n2 > n3)) {
        mayor = n2
        if (n1 > n3) {
            menor = n3
        } else {
            menor = n1
        }
    } else if ((n3 > n1) && (n3 > n2)) {
        mayor = n3
        if (n1 > n2) {
            menor = n2
        } else {
            menor = n1
        }
    }

    console.log("Los 3 numeros son: ", n1, " ", n2, " ", n3)
    console.log("el numero mayor es: ", mayor)
    console.log("el numero menor es: ", menor)

}
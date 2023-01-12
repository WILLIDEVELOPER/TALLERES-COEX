// 8.Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 
// caso contrario mostrar false, utilizar el operador ternario.

let num1 = parseInt(prompt("Ingrese el primer numero "))
let num2 = parseInt(prompt("Ingrese el segundo numero "))
let num3 = parseInt(prompt("Ingrese el tercer numero "))

let promedio = 0


if((num1 < 1 || num1 > 10) || (num2 < 1 || num2 > 10) || (num3 < 1 || num3 > 10)){
    alert("cada uno de los 3 numeros tiene que tener un valor en el rango de 1 a 10")
}else{
    promedio = (num1 + num2 + num3 )/ 3

    (promedio > 5) ? console.log(true) : console.log(false) 
}
let numero = parseInt(prompt("Ingrese un numero "))

let suma = 0

while(numero != 0){
    if(numero > 0){
        suma += numero
        numero = parseInt(prompt("Ingrese un numero "))
    }else{
        console.log("El numero es negativo, no se puede sumar.");
        numero = parseInt(prompt("Ingrese un numero "))
    }
}

console.log("Suma Total: ", suma)
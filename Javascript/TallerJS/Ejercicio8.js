// 9.Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar. Ademas el numero debe ser positivo.

let numero = parseInt(prompt("Ingrese un numero "))

if( numero < 0){
    console.log("El numero ingresado no es valido")
}else{
    if(numero % 2 == 0){
        console.log("El numero "+ numero + " Es par")
    }else{
        console.log("El numero "+ numero + " Es impar")
    }
}
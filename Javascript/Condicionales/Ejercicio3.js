// 3.Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar.

let n = parseInt(prompt("Ingrese un numero entero: "))

if( n <= 0){
    console.log("El numero ingresado no es valido")
}else{
    if(n % 2 == 0){
        console.log("El numero "+ n + " Es par")
    }else{
        console.log("El numero "+ n + " Es impar")
    }
}
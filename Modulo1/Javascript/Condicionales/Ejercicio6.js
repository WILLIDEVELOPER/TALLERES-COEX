// 7.Pedir un número y decir si es un número negativo, si es positivo o cero.

let numero = parseInt(prompt("Ingrese un numero"))

if(numero < 0){ 
    console.log("El numero ", numero, " es negativo")
}else if(numero > 0){
    console.log("El numero ", numero, " es positivo")
}else{
    console.log("El numero ", numero, " es cero")
}
// 6.Pedir dos números y decir si son múltiplos o no.


let num1 = parseInt(prompt("Ingrese un numero"))
let num2 = parseInt(prompt("Ingrese otro numero"))

let resultado = num2 % num1

if(num1 < 0 || num2 < 0){
    alert("Algun numero no es valido")
}else{
    if(resultado == 0){
        console.log("El numero ", num1, "Es multiplo de ", num2)
    }else{
        console.log("El numero ", num1, "No es multiplo de ", num2)
    }
}


// console.log(resultado, num1, num2)
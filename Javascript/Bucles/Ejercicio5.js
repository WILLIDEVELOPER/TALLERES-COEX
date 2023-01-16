let numero = parseInt(prompt("ingrese un numero "))

let impares = 0

if(numero > 0){
    for (let index = 1; index <= numero; index++) {
        if(index % 2 != 0){
            impares = index
            console.log(impares)
        }
    }
}else{
    alert("El numero no es valido")
}


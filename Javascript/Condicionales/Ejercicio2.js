// 2.Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
//  debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la
//  base multiplicado por 2 y sumarle 10.

let base = parseFloat(prompt("Ingrese la base del triangulo en cm"))
let altura = parseFloat(prompt("Ingrese la altura del triangulo en cm"))

let areaT = 0

if( (base < 0) || (altura < 0)){
    alert("Los datos tienen que ser mayor a 0")
}else{
    if(base == altura){
        alert("Los 2 valores ingresados no pueden ser iguales")
    }else{
        if(altura > 4 && base > 5){
            areaT = (base * altura)/2
            console.log("El area es: ", areaT)
        }else{
            console.log("Valor de la base: ", ((base * 2) + 10))
        }
    }
}

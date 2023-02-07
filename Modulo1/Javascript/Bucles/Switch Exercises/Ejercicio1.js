// 1) Ingresar 2 números y luego un carácter indicando la operación a realizar (+,-,*,/) y reportar el resultado de la operación.

let num1 = parseInt(prompt("Ingrese un numero "));
let num2 = parseInt(prompt("Ingrese un numero "));
let operación = prompt(
  "Ingrese un caracter entre (+,-,*,/) para realizar una operacion"
);
let resultado = 0;
if(num1 >= 0 && num2 >= 0){
    switch (operación) {
        case "*":
          resultado = num1 * num2;
          console.log("El resultado de la operacion multiplicar es: ", resultado)
          break;
        case "/":
          resultado = num1 / num2;
          console.log("El resultado de la operacion dividir es: ", resultado)
          break;
        case "+":
          resultado = num1 + num2;
          console.log("El resultado de la operacion sumar es: ", resultado)
          break;
        case "-":
          resultado = num1 - num2;
          console.log("El resultado de la operacion restar es: ", resultado)
          break;
        default:
          console.log("No es posible hacer esta operacion");
          break;
      }
}else{
    alert("Datos invalidos")
}



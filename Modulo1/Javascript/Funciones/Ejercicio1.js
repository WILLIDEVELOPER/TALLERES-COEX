let operador = prompt("Ingrese un operador para hacer una operacion para la potencia ingrese ** y para la raiz ingrese R")

const operacion = (a, b, operador)=>{
  switch (operador) {
    case "+":
      return a + b

    case "-":
      return a - b

    case "/":
      if(b == 0){
        alert("No se puede dividir por cero")
      }else{
        return a/b
      }
    
    case "*":
      return a*b

    case "**":
      return a**b
    
    case "R":
      return Math.sqrt(a) || Math.sqrt(b)
    default:
      alert("No existe esta operacion")
      break;
  }
}

let num1 = parseInt(prompt("Ingrese un numero: "))
let num2 = parseInt(prompt("Ingrese otro numero: "))

const res = operacion(num1, num2,operador)

console.log(res)


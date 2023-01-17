// 3) Simular el tirado de un dado 10 veces. Mostrar luego la cantidad de veces que salieron valores pares e impares.

let numero = 0;
let par = 0;
let impar = 0;

for (let index = 0; index < 10; index++) {
  numero = parseInt(prompt("Ingrese el resultado del dado: "));
  switch (numero) {
    case 1:
      numero % 2 == 0 ? par++ : impar++;
      break;
    case 2:
      numero % 2 == 0 ? par++ : impar++;
      break;
    case 3:
      numero % 2 == 0 ? par++ : impar++;
      break;
    case 4:
      numero % 2 == 0 ? par++ : impar++;
      break;
    case 5:
      numero % 2 == 0 ? par++ : impar++;
      break;
    case 6:
      numero % 2 == 0 ? par++ : impar++;
      break;
    default:
        alert("Un dado no contiene este valor en ninguno de sus lados")
      break;
  }
}

console.log("salieron", par, "pares")
console.log("salieron", impar, "impares")

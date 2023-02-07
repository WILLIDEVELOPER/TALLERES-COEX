// 2) Crear un programa que lea un numero por teclado (1 - 7) y muestre a que dia de la semana corresponde

let numero = parseInt(prompt("Ingrese un numero de (1-7)"));

switch (numero) {
  case 1:
    alert("Estamos en el dia domingo el primer dia de la semana");
    break;
  case 2:
    alert("Estamos en el dia lunes el segundo dia de la semana");
    break;
  case 3:
    alert("Estamos en el dia martes el tercer dia de la semana");
    break;
  case 4:
    alert("Estamos en el dia miercoles el cuarto dia de la semana");
    break;
  case 5:
    alert("Estamos en el dia jueves el quinto dia de la semana");
    break;
  case 6:
    alert("Estamos en el dia viernes el sexto dia de la semana");
    break;
  case 7:
    alert("Estamos en el dia sabado el septimo dia de la semana");
    break;
  default:
    alert("No existe tal dia de la semana");
    break;
}

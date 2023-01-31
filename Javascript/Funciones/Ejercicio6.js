//3.	Se desea llenar una lista con 20 animales, y le han pedido a usted que sabe
//  programar que les ayude para solicitar esos 20 nombres,
//  mostrarlos ordenados alfabéticamente, Luego solicitar al usuario un número entre el 1 y el 20 y que le
//  permita ver cuales animales se encuentra entre el número dicho
// y el final de la lista. También cree una opción que permita al usuario escribir el
// nombre de un animal y verificar si ese animal se encuentra en la lista

let opcion = parseInt(
  prompt(`Ingrese la opcion para proceder:
1. -agregar animales
2. -listarlos
3. -encontrarlos
4. -encontrar animal
5. -salir`)
);
let cantAnimals = 0;
let animales = [];
let ordenAlfa = [];
let numero = 0;
let animalito = "";

while (opcion != 5) {
  switch (opcion) {
    case 1:
      cantAnimals = parseInt(
        prompt(`Ingrese la cantidad de animales que desea registrar`)
      );
      for (let index = 0; index < cantAnimals; index++) {
        animales.push(prompt(`Ingrese el nombre del animal ${index + 1}`));
      }
      ordenAlfa = animales.sort();
      opcion = parseInt(
        prompt(`Ingrese la opcion para proceder:
            2. -listarlos
            3. -encontrarlos
            4. -encontrar animal
            5. -salir`)
      );
      break;
    case 2:
      console.log(ordenAlfa);
      opcion = parseInt(
        prompt(`Ingrese la opcion para proceder:
            1. -agregar animales
            3. -encontrarlos
            4. -encontrar animal
            5. -salir`)
      );
      break;
    case 3:
      numero = parseInt(prompt(`Ingrese un numero entre 1 y 20`));
      if (numero >= 1 && numero <= cantAnimals) {
        for (let index = numero; index < animales.length; index++) {
            console.log(animales[index]);
        }
      } else {
        alert("Ingrese un numero valido entre el rango de valores");
      }
      opcion = parseInt(
        prompt(`Ingrese la opcion para proceder:
            1. -Agregar animales
            2. -listarlos
            4. -encontrar animal
            5. -salir`)
      );
      break;
    case 4:
      animalito = prompt("Ingrese el nombre del animal que desea encontrar");
      animales.forEach((e) => {
        if (e == animalito) {
          console.log(`Animal buscado: ${animalito}`);
          console.log(`Animal encontrado: ${e}`);
        }
      });

      opcion = parseInt(
        prompt(`Ingrese la opcion para proceder:
            1.-Agregar animales
            2. -listarlos
            3. -encontrarlos
            5. -salir`)
      );
      break;
    default:
      alert("Opcion no valida");
      opcion = parseInt(
        prompt(`Ingrese la opcion para proceder:
1. -agregar animales
2. -listarlos
3. -encontrarlos
4. -encontrar animal
5. -salir`)
      );
      break;
  }
}

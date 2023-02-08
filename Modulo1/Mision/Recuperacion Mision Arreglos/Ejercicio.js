let menu = parseInt(
  prompt(`Ingrese una opcion de menu
    1. -Ingresar N cantidad de talentos
    2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
    3. Registrar nota de Misión 1
    4. Registrar nota de Misión 2
    5. Registrar nota de Misión 3
    6. Registrar prueba de nivel final
    7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
    8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
    9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
    10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
    de las 4 pruebas)
    11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
    prueba final
    12.Nombre de los talentos que desarrollaron el ejercicio
    13.Salir`)
);
let bestNotaM1 = 0;
let bestNotaM2 = 0;
let bestNotaM3 = 0;

let nombreBestNoM1 = "";
let nombreBestNoM2 = "";
let nombreBestNoM3 = "";

let cantTalentos = 0;
let opcionMision = "";
let talentos = [];
let datos = {
  nombre: "",
  codigo: "",
  notas: {
    nMision1: 0,
    nMision2: 0,
    nMision3: 0,
  },
  prueba: 0,
  promedio: 0,
};

const registrarDatos = (n, data, index) => {
  if (n > 0) {
    data.nombre = prompt(`Ingrese el nombre del estudiante ${index + 1}`);
    data.codigo = prompt(
      `Ingrese un codigo unico para el estudiante ${index + 1}. `
    );
    return data;
  } else {
    alert("Algo no esta bien");
    return data;
  }
};
const registrarNotas = (n, data, opcion) => {
  if (n > 0) {
    if (opcion == "mision1") {
      data.notas.nMision1 = parseFloat(
        prompt(`Ingrese nota mision 1 estudiante: ${data.nombre}`)
      );

      if (data.notas.nMision1 >= 1 && data.notas.nMision1 <= 100) {
        return data;
      } else {
        alert("La nota ingresada no esta dentro del rango valido(1 -100)");
        data.notas.nMision1 = parseFloat(
          prompt(`Ingrese nota mision 1 estudiante: ${data.nombre}`)
        );
      }
    } else if (opcion == "mision2") {
      data.notas.nMision2 = parseFloat(
        prompt(`Ingrese nota mision 2 estudiante: ${data.nombre}`)
      );

      if (data.notas.nMision2 >= 1 && data.notas.nMision2 <= 100) {
        return data;
      } else {
        alert("La nota ingresada no esta dentro del rango valido(1 -100)");
        data.notas.nMision2 = parseFloat(
          prompt(`Ingrese nota mision 2 estudiante: ${data.nombre}`)
        );
      }
    } else if (opcion == "mision3") {
      data.notas.nMision3 = parseFloat(
        prompt(`Ingrese nota mision 3 estudiante: ${data.nombre}`)
      );

      if (data.notas.nMision3 >= 1 && data.notas.nMision3 <= 100) {
        return data;
      } else {
        alert("La nota ingresada no esta dentro del rango valido(1 -100)");
        data.notas.nMision3 = parseFloat(
          prompt(`Ingrese nota mision 3 estudiante: ${data.nombre}`)
        );
      }
    } else {
      alert("No existe esta mision");
      return data;
    }
  } else {
    alert("Algo no esta bien");
    return data;
  }
};

const regPruebaFinal = (n, data) => {
  if (n > 0) {
    data.prueba = parseFloat(
      prompt(
        `Ingrese la nota de la prueba de nivel final del estudiante: ${data.nombre}`
      )
    );
    if (data.prueba >= 1 && data.prueba <= 100) {
      data.promedio =
        (data.notas.nMision1 +
          data.notas.nMision2 +
          data.notas.nMision3 +
          data.prueba) /
        4;
      return data;
    } else {
      alert("La nota ingresada no esta dentro del rango valido(1 -100)");
      data.prueba = parseFloat(
        prompt(
          `Ingrese la nota de la prueba de nivel final del estudiante: ${data.nombre}`
        )
      );
    }
    return data;
  } else {
    alert("Algo no esta bien");
    return data;
  }
};

while (menu != 13) {
  switch (menu) {
    case 1:
      cantTalentos = parseInt(prompt("Ingrese la cantidad de talentos"));
      if (cantTalentos > 0) {
        menu = parseInt(
          prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
        );
      } else {
        alert("Digite una cantidad de talentos valida");
        cantTalentos = parseInt(prompt("Ingrese la cantidad de talentos"));
      }
      break;
    case 2:
      if (cantTalentos > 0) {
        for (let index = 0; index < cantTalentos; index++) {
          datos = registrarDatos(cantTalentos, datos, index);
          talentos.push(datos);
          if (index > 0) {
            if (talentos[index].codigo === talentos[index - 1].codigo) {
              alert("El codigo que ingresaste ya esta en uso");
              talentos[index].codigo = prompt(
                `Ingrese un codigo unico para el estudiante ${talentos[index].nombre}. `
              );
            }
          }
          datos = {
            nombre: "",
            codigo: "",
            nivel: "",
            notas: {
              nota1: 0,
              nota2: 0,
              nota3: 0,
            },
            promedio: 0,
            mensaje: "",
          };
        }
        menu = parseInt(
          prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
        );
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 3:
      if (cantTalentos > 0) {
        opcionMision = "mision1";
        if (talentos.length > 0) {
          talentos.map((e) => {
            if (e.nombre != "" && e.codigo != "") {
              e.nombre = e.nombre;
              e.codigo = e.codigo;
              e = registrarNotas(cantTalentos, e, opcionMision);
              return e;
            }
          });
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 4:
      if (cantTalentos > 0) {
        opcionMision = "mision2";
        if (talentos.length > 0) {
          talentos.map((e) => {
            if (e.nombre != "" && e.codigo != "") {
              e.nombre = e.nombre;
              e.codigo = e.codigo;
              e = registrarNotas(cantTalentos, e, opcionMision);
              return e;
            }
          });
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 5:
      if (cantTalentos > 0) {
        opcionMision = "mision3";
        if (talentos.length > 0) {
          talentos.map((e) => {
            if (e.nombre != "" && e.codigo != "") {
              e.nombre = e.nombre;
              e.codigo = e.codigo;
              e = registrarNotas(cantTalentos, e, opcionMision);
              return e;
            }
          });
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 6:
      if (cantTalentos > 0) {
        if (talentos.length > 0) {
          talentos.map((e) => {
            if (
              e.nombre != "" &&
              e.codigo != "" &&
              e.notas.nMision1 != 0 &&
              e.notas.nMision2 != 0 &&
              e.notas.nMision3 != 0
            ) {
              e.nombre = e.nombre;
              e.codigo = e.codigo;
              e.notas = e.notas;
              e = regPruebaFinal(cantTalentos, e);
              return e;
            }
          });
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 7:
      // 7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
      if (cantTalentos > 0) {
        if (talentos.length > 0) {
          for (let index = 0; index < talentos.length; index++) {
            if (talentos[index].notas.nMision1 > bestNotaM1) {
              bestNotaM1 = talentos[index].notas.nMision1;
              nombreBestNoM1 = talentos[index].nombre;
            }
          }
          console.log(
            `Estudiante con la mejor nota en la mision 1: \n Nombre: ${nombreBestNoM1} \n Nota: ${bestNotaM1}`
          );
          alert(
            "nombre y nota del talento con la mejor nota en la Misión 1 en consola"
          );
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 8:
      // 8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
      if (cantTalentos > 0) {
        if (talentos.length > 0) {
          for (let index = 0; index < talentos.length; index++) {
            if (talentos[index].notas.nMision2 > bestNotaM2) {
              bestNotaM2 = talentos[index].notas.nMision2;
              nombreBestNoM2 = talentos[index].nombre;
            }
          }
          console.log(
            `Estudiante con la mejor nota en la mision 2: \n Nombre: ${nombreBestNoM2} \n Nota: ${bestNotaM2}`
          );
          alert(
            "nombre y nota del talento con la mejor nota en la Misión 2 en consola"
          );

          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 9:
      // 9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
      if (cantTalentos > 0) {
        if (talentos.length > 0) {
          for (let index = 0; index < talentos.length; index++) {
            if (talentos[index].notas.nMision3 > bestNotaM3) {
              bestNotaM3 = talentos[index].notas.nMision3;
              nombreBestNoM3 = talentos[index].nombre;
            }
          }
          console.log(
            `Estudiante con la mejor nota en la mision 3: \n Nombre: ${nombreBestNoM3} \n Nota: ${bestNotaM3}`
          );
          alert(
            "nombre y nota del talento con la mejor nota en la Misión 3 en consola"
          );
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 10:
      // 10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
      //     de las 4 pruebas)
      if (cantTalentos > 0) {
        if (talentos.length > 0) {
          talentos.forEach((item) => {
            console.log(`Nombre: ${item.nombre} \n Promedio: ${item.promedio}`);
          });
          alert("nombre y el promedio de cada talento en consola")
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    case 11:
      // 11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
      // prueba final

      if (cantTalentos > 0) {
        if (talentos.length > 0) {
          talentos.forEach((item) => {
            console.log(
              `Codigo: ${item.codigo} \n Nombre: ${item.nombre} \n Nota mision1: ${item.notas.nMision1} \n Nota mision2: ${item.notas.nMision2} \n Nota mision3: ${item.notas.nMision3} \n Prueba Final: ${item.prueba}`
            );
          });
          alert("código, nombre, nota misión1, nota mision2 y nota misión 3, y prueba final en consola")
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }

      break;
    case 12:
      // 12.Nombre de los talentos que desarrollaron el ejercicio
      if (cantTalentos > 0) {
        if (talentos.length > 0) {
          console.log(`TALENTOS QUE DESARROLLARON EL EJERCICIO:`);
          talentos.forEach((item) => {
            console.log(`Nombre: ${item.nombre}`);
          });
          alert("TALENTOS QUE DESARROLLARON EL EJERCICIO EN CONSOLA")
          menu = parseInt(
            prompt(`Ingrese una opcion de menu
            1. -Ingresar N cantidad de talentos
            2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
            3. Registrar nota de Misión 1
            4. Registrar nota de Misión 2
            5. Registrar nota de Misión 3
            6. Registrar prueba de nivel final
            7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
            8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
            9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
            10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
            de las 4 pruebas)
            11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
            prueba final
            12.Nombre de los talentos que desarrollaron el ejercicio
            13.Salir`)
          );
        } else {
          alert("no hay talentos");
          menu = 1;
        }
      } else {
        alert("Error. Ingrese una cantidad de talentos");
        menu = 1;
      }
      break;
    default:
      alert("Esta opcion no existe");
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
                1. -Ingresar N cantidad de talentos
                2. -Registrar los datos de los talentos en una matriz (Código y Nombre)
                3. Registrar nota de Misión 1
                4. Registrar nota de Misión 2
                5. Registrar nota de Misión 3
                6. Registrar prueba de nivel final
                7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
                8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
                9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
                10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
                de las 4 pruebas)
                11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
                prueba final
                12.Nombre de los talentos que desarrollaron el ejercicio
                13.Salir`)
      );
      break;
  }
}

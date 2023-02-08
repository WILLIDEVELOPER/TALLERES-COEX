let menu = parseInt(
  prompt(`Ingrese una opcion de menu
    1. -Definir cantidad de estudiantes
    2. -Registrar datos estudiantes
    3. -Mostrar listado estudiantes
    4. -Registrar notas estudiantes
    5. -Imprimir notas estudiantes
    6. -salir`)
);

let cantEstudiantes = 0;
let estudiantes = [];
let datos = {
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

const registrarDatosEstu = (n, data, index) => {
  if (n > 0) {
    data.nombre = prompt(`Ingrese el nombre del estudiante ${index + 1}`);
    data.codigo = prompt(
      `Ingrese un codigo unico para el estudiante ${index + 1}. `
    );
    data.nivel = prompt(`Ingrese el nivel del estudiante ${index + 1}: 
        -Beginner
        -Junior
        -Senior`);
    if (
      data.nivel != "Junior" &&
      data.nivel != "Beginner" &&
      data.nivel != "Senior"
    ) {
      alert(
        "El nivel ingresado no es valido, Ingrese un nivel entre(Beginner, Junior, Senior)"
      );
      data.nivel = prompt(`Ingrese el nivel del estudiante ${index + 1}: 
        -Beginner
        -Junior
        -Senior`);
    }

    return data;
  } else {
    return data;
  }
};

const listarEstudiantes = (n, estudiantes) => {
  if (n > 0) {
    alert("Listado de estudiantes en consola");
    estudiantes.forEach((element) => {
      console.log(
        `Nombre: ${element.nombre},\n Codigo: ${element.codigo},\n Nivel: ${element.nivel}`
      );
    });
  } else {
    alert("No hay estudiantes para hacer un listado");
  }
};

const registrarNotasEstu = (n, data) => {
  if (n > 0) {
    data.notas.nota1 = parseFloat(
      prompt(`Ingrese la primera nota del estudiante ${data.nombre}`)
    );
    if (data.notas.nota1 >= 0 && data.notas.nota1 <= 5) {
      data.notas.nota2 = parseFloat(
        prompt(`Ingrese la segunda nota del estudiante ${data.nombre}`)
      );
      if (data.notas.nota2 >= 0 && data.notas.nota2 <= 5) {
        data.notas.nota3 = parseFloat(
          prompt(`Ingrese la tercera nota del estudiante ${data.nombre}`)
        );
        if (data.notas.nota3 >= 0 && data.notas.nota3 <= 5) {
          alert("Notas validas");
            data.promedio =
              (data.notas.nota1 + data.notas.nota2 + data.notas.nota3) / 3;
            if (data.promedio >= 3.5) {
              data.mensaje = "Aprobo";
            } else {
              data.mensaje = "Reprobo";
            }
          return data;
        } else {
          return data;
        }
      } else {
        alert("Nota no valida, asegurese de ingresar una nota de 0 a 5");
        nota2 = parseFloat(
          prompt(`Ingrese la segunda nota del estudiante ${data.nombre}`)
        );
      }
    } else {
      alert("Nota no valida, asegurese de ingresar una nota de 0 a 5");
      nota1 = parseFloat(
        prompt(`Ingrese la primera nota del estudiante ${data.nombre}`)
      );
    }
  } else {
    alert("No hay suficientes estudiantes");
    return data;
  }
};

const imprimirNotasEstu = (n, estudiantes) => {
  let promedioGeneral = 0;
  let sumatoriaPromedio = 0;
  if (n > 0) {
    alert("Listado de notas de estudiantes en consola");
    estudiantes.forEach((element) => {
      console.log(
        `Nombre: ${element.nombre}, \n Notas: \n Nota1: ${element.notas.nota1} \n Nota2: ${element.notas.nota2} \n Nota3: ${element.notas.nota3} \n Promedio Estudiante: ${element.promedio} \n Mensaje: ${element.mensaje}`
      );
      sumatoriaPromedio += element.promedio;
    });
    promedioGeneral = sumatoriaPromedio / estudiantes.length;
    console.log(`Promedio general de los estudiantes: ${promedioGeneral}`);
  } else {
    alert("No hay estudiantes para hacer un listado");
  }
};

while (menu != 6) {
  switch (menu) {
    case 1:
      cantEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes."));
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
                  2. -Registrar datos estudiantes
                  3. -Mostrar listado estudiantes
                  4. -Registrar notas estudiantes
                  5. -Imprimir notas estudiantes
                  6. -salir`)
      );
      break;

    case 2:
      for (let index = 0; index < cantEstudiantes; index++) {
        datos = registrarDatosEstu(cantEstudiantes, datos, index);
        estudiantes.push(datos);
        if (index > 0) {
          if (estudiantes[index].codigo === estudiantes[index - 1].codigo) {
            alert("El codigo que ingresaste ya esta en uso");
            estudiantes[index].codigo = prompt(
              `Ingrese un codigo unico para el estudiante ${estudiantes[index].nombre}. `
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
                3. -Mostrar listado estudiantes
                4. -Registrar notas estudiantes
                5. -Imprimir notas estudiantes
                6. -salir`)
      );
      break;

    case 3:
      console.log("Listado de estudiantes:");
      listarEstudiantes(cantEstudiantes, estudiantes);
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
                4. -Registrar notas estudiantes
                5. -Imprimir notas estudiantes
                6. -salir`)
      );
      break;

    case 4:
      estudiantes.map((e) => {
        if (e.nombre != "" && e.codigo != "" && e.nivel != "") {
          e.nombre = e.nombre;
          e.codigo = e.codigo;
          e.nivel = e.nivel;
          e = registrarNotasEstu(cantEstudiantes, e);
          return e;
        }
      });

      menu = parseInt(
        prompt(`Ingrese una opcion de menu
                5. -Imprimir notas estudiantes
                6. -salir`)
      );
      break;

    case 5:
      console.log("Notas de estudiantes:");
      imprimirNotasEstu(cantEstudiantes, estudiantes);
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
                6. -salir`)
      );
      break;
    default:
      alert("Esta opcion no existe");
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
              1. -Definir cantidad de estudiantes
              2. -Registrar datos estudiantes
              3. -Mostrar listado estudiantes
              4. -Registrar notas estudiantes
              5. -Imprimir notas estudiantes
              6. -salir`)
      );
      break;
  }
}

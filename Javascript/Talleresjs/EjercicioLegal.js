let menu = parseInt(
  prompt(`Ingrese una opcion de menu
  1. -Agregar familiares
  2. -Ingresar datos de familiares
  3. -Mostrar resultados
  4. -salir`)
);

let cantFamiliares = 0;
let familia = [];
let datos = {
  nombre: "",
  peso: 0,
  altura: 0,
  IMC: 0,
};

const familiares = (n, info, index) => {
  if (n > 0) {
    info.nombre = prompt(`Ingrese el nombre del familiar ${index + 1}`);
    return info;
  } else {
    return info;
  }
};

const ingresarDatos = (n, info) => {
  if (n > 0) {
    info.peso = parseFloat(
      prompt(`ingrese el peso del familiar ${info.nombre}`)
    );
    info.altura = parseFloat(
      prompt(`ingrese la altura del familiar ${info.nombre}`)
    );
    return info;
  } else {
    return info;
  }
};

const mostrarResultados = (n, info) => {
  if (n > 0) {
    info.IMC = info.peso / info.altura ** 2;
    return info;
  } else {
    return info;
  }
};

while (menu != 4) {
  switch (menu) {
    case 1:
      cantFamiliares = parseInt(prompt("Ingrese el numero de familiares"));
      for (let index = 0; index < cantFamiliares; index++) {
        datos = familiares(cantFamiliares, datos, index);
        familia.push(datos);
        datos = {};
      }
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
          1. -Agregar familiares
          2. -Ingresar datos de familiares
          3. -Mostrar resultados
          4. -salir`)
      );
      break;
    case 2:
      familia.map((e) => {
        if (e.nombre != "") {
          e.nombre = e.nombre;
          e = ingresarDatos(cantFamiliares, e);
          return e;
        }
      });
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
          1. -Agregar familiares
          2. -Ingresar datos de familiares
          3. -Mostrar resultados
          4. -salir`)
      );
      break;
    case 3:
      const resultado = familia.map((e) => {
        if (e.nombre != "" && e.peso > 0 && e.altura > 0) {
          e.nombre = e.nombre;
          e.peso = e.peso;
          e.altura = e.altura;
          e = mostrarResultados(cantFamiliares, e);
          return e;
        }
      });
      resultado.forEach((e) => {
        console.log(`Nombre: ${e.nombre}
        Peso: ${e.peso}
        Altura: ${e.altura}
        IMC: ${e.IMC}`);
      });
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
          1. -Agregar familiares
          2. -Ingresar datos de familiares
          3. -Mostrar resultados
          4. -salir`)
      );
      break;
    default:
      alert("Ingrese una opcion valida");
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
          1. -Agregar familiares
          2. -Ingresar datos de familiares
          3. -Mostrar resultados
          4. -salir`)
      );
      break;
  }
}

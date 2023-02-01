let menu = parseInt(
  prompt(`Ingrese una opcion de menu
1. -Agregar familiares
2. -Ingresar datos de familiares
3. -Mostrar resultados
4. -salir`)
);
let cantFamiliares = 0;
let familia = {
  nombre: [],
  peso: [],
  altura: [],
  IMC: [],
};

let datos = {};
let resultado = {};

const familiares = (n) => {
  let familia = [];
  if (n > 0) {
    for (let index = 0; index < n; index++) {
      familia.push(prompt(`Ingrese el nombre del familiar ${index + 1}`));
    }
    return familia;
  } else {
    return familia;
  }
};

const ingresarDatos = (nFamiliares, familia) => {
  let datos = {
    peso: [],
    altura: [],
  };
  if (nFamiliares > 0) {
    for (let index = 0; index < nFamiliares; index++) {
      datos.peso.push(
        parseFloat(
          prompt(`ingrese el peso del familiar ${familia.nombre[0][index]}`)
        )
      );
      datos.altura.push(
        parseFloat(
          prompt(`ingrese la altura del familiar ${familia.nombre[0][index]}`)
        )
      );
    }
    return datos;
  } else {
    return datos;
  }
};

const mostrarResultados = (familia) => {
  let n = familia.nombre[0].length;
  if (n > 0) {
    for (let index = 0; index < n; index++) {
      familia.IMC.push(familia.peso[0][index] / familia.altura[0][index] ** 2);
    }
    return familia;
  } else {
    return familia;
  }
};

while (menu != 4) {
  switch (menu) {
    case 1:
      cantFamiliares = parseInt(prompt("Ingrese el numero de familiares"));
      familia.nombre.push(familiares(cantFamiliares));
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
        1. -Agregar familiares
        2. -Ingresar datos de familiares
        3. -Mostrar resultados
        4. -salir`)
      );
      break;
    case 2:
      datos = ingresarDatos(familia.nombre[0].length, familia);
      familia.peso.push(datos.peso);
      familia.altura.push(datos.altura);
      // console.log(familia, familia.nombre[0][0]);
      menu = parseInt(
        prompt(`Ingrese una opcion de menu
        1. -Agregar familiares
        2. -Ingresar datos de familiares
        3. -Mostrar resultados
        4. -salir`)
      );
      break;
    case 3:
      resultado = mostrarResultados(familia);
      familia.IMC.push(resultado.IMC);
      let imcFamilia = []
      for (const key in familia) {
        imcFamilia.push((familia[key]+ " "))
      }
      console.log(imcFamilia);
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

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
    if (info.peso > 0 ) {
      info.altura = parseFloat(
        prompt(`ingrese la altura del familiar ${info.nombre}`)
      );
      if (info.altura > 0 && info.altura <=2.72) {
        return info;
      }else{
        alert("Ingrese una altura valida")
        info.altura = parseFloat(
          prompt(`ingrese la altura del familiar ${info.nombre}`)
        );
      }
    }else{
      alert("Ingrese un peso valido por favor")
      info.peso = parseFloat(
        prompt(`ingrese el peso del familiar ${info.nombre}`)
      );
    }
    
  } else {
    alert("Ingrese una cantidad valida de familiares")
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
        if (e.IMC < 18.5) {
          console.log(`Nombre: ${e.nombre}
        Peso: ${e.peso}
        Altura: ${e.altura}
        IMC: ${e.IMC.toFixed(2)}
        Nivel: Bajo peso`);
        }else if(e.IMC>=18.5 && e.IMC<=24.9){
          console.log(`Nombre: ${e.nombre}
        Peso: ${e.peso}
        Altura: ${e.altura}
        IMC: ${e.IMC.toFixed(2)}
        Nivel: Normal`);
        }else if(e.IMC>=25 && e.IMC<=28.9){
          console.log(`Nombre: ${e.nombre}
        Peso: ${e.peso}
        Altura: ${e.altura}
        IMC: ${e.IMC.toFixed(2)}
        Nivel: Sobrepeso`);
        }else if(e.IMC>=29 && e.IMC<=34.9){
          console.log(`Nombre: ${e.nombre}
        Peso: ${e.peso}
        Altura: ${e.altura}
        IMC: ${e.IMC.toFixed(2)}
        Nivel: Obeso l`);
        }else if(e.IMC >= 35){
          console.log(`Nombre: ${e.nombre}
        Peso: ${e.peso}
        Altura: ${e.altura}
        IMC: ${e.IMC.toFixed(2)}
        Nivel: Obeso ll`);
        }else{
          console.log(`Nombre: ${e.nombre}
        Peso: ${e.peso}
        Altura: ${e.altura}
        IMC: ${e.IMC.toFixed(2)}
        Nivel: Not found`);
        }
      });
      menu = 4
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

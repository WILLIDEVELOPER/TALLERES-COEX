let menu = parseInt(prompt("Ingrese una opcion de menu"));
let cantFamiliares = parseInt(prompt("Ingrese el numero de familiares"))

const familiares = (n) => {
  let familia = [];
  for (let index = 0; index < n; index++) {
    familia.push(prompt(`Ingrese el nombre del familiar ${index + 1}`));
  }
  return familia
};

let grupo = familiares(cantFamiliares)

let estudiantes = [];
let estudiante = {
  nombre: "",
  edad: 0,
  nota: 0,
};

let numeroE = parseInt(prompt("Ingrese el numero de estudiantes:"));
let promedioFinal = 0;

if (numeroE > 0) {
  for (let index = 0; index < numeroE; index++) {
    estudiante = {
      nombre: prompt(`Ingrese el nombre del estudiante ${index + 1}`),
      edad: parseInt(prompt(`Ingrese la edad del estudiante ${index + 1}`)),
      nota: parseFloat(prompt(`Ingrese la nota del estudiante ${index + 1}`)),
    };
    if (estudiante.edad <= 0 || estudiante.nota <= 0 || estudiante.nota > 5) {
      alert(
        "este estudiante y esta nota no existe, digite bien la edad y la nota"
      );
      estudiante = {
        edad: parseInt(prompt(`Ingrese la edad del estudiante ${index + 1}`)),
        nota: parseFloat(prompt(`Ingrese la nota del estudiante ${index + 1}`)),
      };
    }
    estudiantes.push(estudiante);
    promedioFinal += estudiante.nota;
  }

  promedioFinal = promedioFinal / estudiantes.length;

  console.log(estudiantes);
  console.log(
    `El promedio final de los estudiantes es: ${promedioFinal} y el total de los estudiantes es: ${estudiantes.length} `
  );
}else{
    alert("Ingrese Un numero valido de estudiantes")
    numeroE = parseInt(prompt("Ingrese el numero de estudiantes:"));
}

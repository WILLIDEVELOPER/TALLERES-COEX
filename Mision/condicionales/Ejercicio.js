let estudiante = prompt("Ingrese el nombre del estudiante: ");

let examen1 = parseFloat(prompt("Ingrese la nota del examen 1"));
let examen2 = 0;
let examen3 = 0;
let nota1 = 0;
let nota2 = 0;
let notaExFinal = 0;
let noAutoevaluacion = 0;
let noCoEvaluacion = 0;
let promedioExamenes = 0;
let promedioNotas = 0;
// promedio de auto y coevaluacion
let promedioACEvaluciones = 0;
let notaDefinitiva = 0;
let porcentajeExamenes = 0;
let porcentajeNotasT = 0;
let porcentajeACE = 0;
let porcentajeExFinal = 0;

if (examen1 >= 0 && examen1 <= 5) {
  examen2 = parseFloat(prompt("Ingrese la nota del examen 2"));

  if (examen2 >= 0 && examen2 <= 5) {
    examen3 = parseFloat(prompt("Ingrese la nota del examen 3"));

    if (examen3 >= 0 && examen3 <= 5) {
      promedioExamenes = (examen1 + examen2 + examen3) / 3;
      porcentajeExamenes = promedioExamenes * 0.55;
      //to fixed es solo para eliminar decimales nada mas
      alert(`El promedio de examenes es: ${promedioExamenes.toFixed(1)}`);

      nota1 = parseFloat(prompt("Ingrese la nota del primer trabajo"));
      if (nota1 >= 0 && nota1 <= 5) {
        nota2 = parseFloat(prompt("Ingrese la nota del segundo trabajo"));

        if (nota2 >= 0 && nota2 <= 5) {
          promedioNotas = (nota1 + nota2) / 2;
          porcentajeNotasT = promedioNotas * 0.15;
          //to fixed es solo para eliminar decimales nada mas
          alert(
            `El promedio de notas de trabajos es: ${promedioNotas.toFixed(1)}`
          );

          notaExFinal = parseFloat(prompt("Ingrese la nota del examen final"));

          if (notaExFinal >= 0 && notaExFinal <= 5) {
            porcentajeExFinal = notaExFinal * 0.2;
            noAutoevaluacion = parseFloat(
              prompt("Ingrese la nota autoevaluativa del estudiante")
            );

            if (noAutoevaluacion >= 0 && noAutoevaluacion <= 5) {
              noCoEvaluacion = parseFloat(
                prompt("Ingrese la nota coevaluativa del profesor")
              );

              if (noCoEvaluacion >= 0 && noCoEvaluacion <= 5) {
                promedioACEvaluciones = (noAutoevaluacion + noCoEvaluacion) / 2;
                porcentajeACE = promedioACEvaluciones * 0.1;
                //to fixed es solo para eliminar decimales nada mas
                alert(
                  `El promedio entre auto y coevaluacion es: ${promedioACEvaluciones.toFixed(
                    1
                  )}`
                );
                notaDefinitiva =
                  porcentajeExamenes +
                  porcentajeNotasT +
                  porcentajeExFinal +
                  porcentajeACE;

                if (notaDefinitiva >= 3) {
                  //to fixed es solo para eliminar decimales nada mas
                  alert(
                    `El estudiante ${estudiante} Aprobo el curso con una nota de: ${notaDefinitiva.toFixed(
                      1
                    )}`
                  );
                  if (notaDefinitiva >= 3.0 && notaDefinitiva <= 3.9) {
                    alert(`El nivel del estudiante ${estudiante} es BASICO`);
                  } else if (notaDefinitiva >= 4.0 && notaDefinitiva <= 4.9) {
                    alert(`El nivel del estudiante ${estudiante} es ALTO`);
                  } else if (notaDefinitiva >= 4.7 && notaDefinitiva <= 5.0) {
                    alert(`El nivel del estudiante ${estudiante} es SUPERIOR`);
                  }
                } else {
                  //to fixed es solo para eliminar decimales nada mas
                  alert(
                    `El estudiante ${estudiante} Reprobo el curso con una nota de: ${notaDefinitiva.toFixed(
                      1
                    )}`
                  );
                  if (notaDefinitiva >= 2.0 && notaDefinitiva <= 2.9) {
                    alert(`El nivel del estudiante ${estudiante} es BAJO`);
                  } else if (notaDefinitiva >= 0 && notaDefinitiva <= 1.9) {
                    alert(`El nivel del estudiante ${estudiante} es MUY BAJO`);
                  }
                }
              } else {
                alert(
                  "La nota ingresada no pertenece a el rango definido(0-5)"
                );
              }
            } else {
              alert("La nota ingresada no pertenece a el rango definido(0-5)");
            }
          } else {
            alert("La nota ingresada no pertenece a el rango definido(0-5)");
          }
        } else {
          alert("La nota ingresada no pertenece a el rango definido(0-5)");
        }
      } else {
        alert("La nota ingresada no pertenece a el rango definido(0-5)");
      }
    } else {
      alert("La nota ingresada no pertenece a el rango definido(0-5)");
    }
  } else {
    alert("La nota ingresada no pertenece a el rango definido(0-5)");
  }
} else {
  alert("La nota ingresada no pertenece a el rango definido(0-5)");
}

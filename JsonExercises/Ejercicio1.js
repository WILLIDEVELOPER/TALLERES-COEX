// 1. Imprimir el nombre de los empleados.

const objeto = {
  empleados: [
    {
      nombre: "Juanjose",
      edad: 23,
      direccion: {
        calle: 16,
        carrera: 66,
        orientacion: "w",
      },
      telefonos: ["1234567", "7654321"],
      hobbies: ["videojuegos", "peliculas"],
    },
    {
      nombre: "Pedro",
      edad: 25,
      direccion: {
        calle: 56,
        carrera: 42,
      },
      telefonos: ["65465458", "132138"],
      hobbies: ["futbol", "peliculas"],
    },
    {
      nombre: "Maria",
      edad: 27,
      direccion: {
        calle: 6,
        carrera: 12,
      },
      telefonos: ["1234567", "7654321"],
      hobbies: ["trotar"],
    },
    {
      nombre: "Luis",
      edad: 29,
      direccion: {
        calle: 66,
        carrera: 2,
        orientacion: "w",
      },
      telefonos: ["1234567", "7654321"],
      hobbies: ["futbol"],
    },
    {
      nombre: "Luisa",
      edad: 31,
      direccion: "conjunto el dorado apto 123",
      hobbies: ["cocinar", "programar"],
    },
  ],
};

const {empleados} = objeto

// console.log("Nombre de los empleados: ");
// empleados.forEach(element => {
//     console.log(element.nombre); 
// });

// 2. En un solo string imprimir la direccion completa de cada empleado.

// empleados.forEach(element =>{
//   if (!element.direccion.orientacion && typeof element.direccion =="object") {
//     console.log(`Empleado: ${element.nombre}, Direccion: Cll ${element.direccion.calle} Crr ${element.direccion.carrera} Orc "Not found"`);
//   }else if(typeof element.direccion == "string"){
//     console.log(`Empleado: ${element.nombre}, Direccion: Cll ${element.direccion}`);
//   }else{
//     console.log(`Empleado: ${element.nombre}, Direccion: Cll ${element.direccion.calle} Crr ${element.direccion.carrera} Orc ${element.direccion.orientacion}`);
//   }
// })

// 3. Imprimir los Hobbies del primer y ultimo empleado.

// let first = empleados[0]
// let last = empleados[empleados.length -1]

// console.log(`Primer empleado: Hobbies: ${first.hobbies}
// Ultimo empleado: Hobbies ${last.hobbies}`);


// 4. Imprimir el nombre y la edad de los 3 ultimos empleados.

// const [, , ...rest] = empleados

// rest.forEach(element =>{
//   console.log(`Nombre: ${element.nombre}
//   Edad: ${element.edad}`);
// })


// 5. Imprimir el nombre y el primer telefono de todos los empleados.

// empleados.forEach(element =>{
//   if(!element.telefonos){
//     console.log(`Nombre: ${element.nombre}
//   Primer telefono: "Not found"`);
//   }else{
//     const [a , ] = element.telefonos
//     console.log(`Nombre: ${element.nombre}
//   Primer telefono: ${a}`);
//   }
// })
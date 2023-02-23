// const datos = [
//   {
//     pregunta: "¿A cuanto esta el dolar?",
//     opciones: {
//       a: "4944",
//       b: "5000",
//       c: "5200",
//       d: "3000",
//     },
//     respuestaCorrecta: "4944",
//   },
//   {
//     pregunta: "¿Como se llama el profesor?",
//     opciones: {
//       a: "jose jose",
//       b: "el mono",
//       c: "juan jose",
//       d: "chayanne",
//     },
//     respuestaCorrecta: "juan jose",
//   },
//   {
//     pregunta:
//       "¿Como se llama el metodo para ordenar un arreglo de palabras en orden alfabetico?",
//     opciones: {
//       a: "foreach",
//       b: "sort",
//       c: "map",
//       d: "includes",
//     },
//     respuestaCorrecta: "sort",
//   },
//   {
//     pregunta: "¿Que me devuelve un .map?",
//     opciones: {
//       a: "recorre el arreglo",
//       b: "ordena el arreglo",
//       c: "filtra el arreglo",
//       d: "mapea el arreglo segun una condicion",
//     },
//     respuestaCorrecta: "mapea el arreglo segun una condicion",
//   },
// ];

let cuestinario = [
  {
    pregunta: "¿Cual es la capital de Australia?",
    respuesta1: "Bogota",
    respuesta2: "Sídney",
    respuesta3: "New York",
    respuesta4: "Canberra",
    respuestaCorrecta: "Canberra",
  },
  {
    pregunta:
      "¿Cual es la fuerza necesaria para levantar una masa de 100kg en la Luna?",
    respuesta1: "980_N",
    respuesta2: "162_N",
    respuesta3: "372.1N",
    respuesta4: "2479_N",
    respuestaCorrecta: "162_N",
  },
  {
    pregunta: "¿Quién es el actual campeón de clavadas de la NBA All Star?",
    respuesta1: "Jason Tatum",
    respuesta2: "Mac MaClung",
    respuesta3: "Lebron James",
    respuesta4: "Kevin Durán",
    respuestaCorrecta: "Mac MaClung",
  },
  {
    pregunta: "¿Quién es el actual campeón de la Campions League?",
    respuesta1: "Real Madrid",
    respuesta2: "Barcelona",
    respuesta3: "Bayern de Múnich",
    respuesta4: "PSG",
    respuestaCorrecta: "Real Madrid",
  },
  {
    pregunta: "¿Quién es el actual campeón de la Formula Uno?",
    respuesta1: "Charles Lecler",
    respuesta2: "Lewis Hamilton",
    respuesta3: "Fernado Alonso",
    respuesta4: "Max Verstapen",
    respuestaCorrecta: "Max Verstapen",
  },
];
let posicion = 0;
let card = document.getElementById("card");

card.innerHTML = `<div>
<p id="pregunta" class="p-[7px] bg-slate-700 text-white rounded-md">${cuestinario[posicion].pregunta}</p>
</div>
<div class="text-white bg-slate-600">
<div id="a" class="p-[5px] rounded-md hover:bg-slate-800">A:  ${cuestinario[posicion].respuesta1}</div>
<div id="b" class="p-[5px] rounded-md hover:bg-slate-800">B:  ${cuestinario[posicion].respuesta2}</div>
<div id="c" class="p-[5px] rounded-md hover:bg-slate-800">C:  ${cuestinario[posicion].respuesta3}</div>
<div id="d" class="p-[5px] rounded-md hover:bg-slate-800">D:  ${cuestinario[posicion].respuesta4}</div>
</div>
<div id="respuesta" class="bg-slate-800 text-white rounded-md p-[7px]"> Respuesta </div>
<button class="bg-[#2ECC71] font-bold p-[12px] text-white rounded-md hover:bg-[#82E0AA]" id="next" type="submit"> Siguiente</button>
`;

let pre = document.getElementById("pregunta");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let nextCard = document.getElementById("next");
let res = document.getElementById("respuesta");

nextCard.addEventListener("click", () => {
  posicion += 1;
  if (posicion > cuestinario.length) {
    alert("No hay mas preguntas")
    window.location.reload()
  }
  pre.innerHTML = `${cuestinario[posicion].pregunta}`;
  a.innerHTML = `A:  ${cuestinario[posicion].respuesta1}`;
  b.innerHTML = `B:  ${cuestinario[posicion].respuesta2}`;
  c.innerHTML = `C:  ${cuestinario[posicion].respuesta3}`;
  d.innerHTML = `D:  ${cuestinario[posicion].respuesta4}`;
});

a.addEventListener("click", () => {
  let respuesta = cuestinario[posicion].respuesta1;
  if (respuesta == cuestinario[posicion].respuestaCorrecta) {
    res.innerHTML = "Respuesta: Correcta";
  } else {
    res.innerHTML = "Respuesta: Incorrecta";
  }
});

b.addEventListener("click", () => {
  let respuesta = cuestinario[posicion].respuesta2;
  if (respuesta == cuestinario[posicion].respuestaCorrecta) {
    res.innerHTML = "Respuesta: Correcta";
  } else {
    res.innerHTML = "Respuesta: Incorrecta";
  }
});

c.addEventListener("click", () => {
  let respuesta = cuestinario[posicion].respuesta3;
  if (respuesta == cuestinario[posicion].respuestaCorrecta) {
    res.innerHTML = "Respuesta: Correcta";
  } else {
    res.innerHTML = "Respuesta: Incorrecta";
  }
});

d.addEventListener("click", () => {
  let respuesta = cuestinario[posicion].respuesta4;
  if (respuesta == cuestinario[posicion].respuestaCorrecta) {
    res.innerHTML = "Respuesta: Correcta";
  } else {
    res.innerHTML = "Respuesta: Incorrecta";
  }
});

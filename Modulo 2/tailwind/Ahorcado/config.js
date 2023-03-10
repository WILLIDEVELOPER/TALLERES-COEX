let btn = document.getElementById("btn-search");
const palabras = ["juego", "leon", "entrenar", "ahorcado", "perro", "negro"];

let palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];

let guiones = palabraRandom.replace(/./g, "_ ");
const letra = document.getElementById("search");
let respuesta = document.getElementById("output");
let contFallos = 0;
let resultado = document.getElementById("resultado");
let next = document.getElementById("next");
let clear = document.getElementById("clear");
let fallo = true;
respuesta.innerHTML = guiones;
let guionesUpdated = []
let palabraCompleta = document.getElementById("palabraCompleta")



const fallos = (fallo) => {
  let letrica = letra.value;
  for (let i in palabraRandom) {
    if (letrica == palabraRandom[i]) {
      guiones =
        guiones.substring(0, i * 2) + letrica + guiones.substring(i * 2 + 1);
      fallo = false;
    }
  }


  for (let i = 0; i < guionesUpdated.length; i++) {
    if (guionesUpdated[i].includes(letrica)) {
      fallo = true
      break;
    }
  }
  


  if (fallo) {
    contFallos++;
    document.getElementById("ahorcado").style.backgroundPosition =
      -(200 * contFallos) + "px 0";

    if (contFallos == 4) {
      resultado.style.color = "#FF00FF";
      resultado.innerHTML = "Perdiste";
    }
  } else {
    if (guiones.indexOf("_") < 0) {
      resultado.style.color = "#FFFF00";
      resultado.innerHTML = "Ganaste";
    }
  }

  
};

letra.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    guionesUpdated.push(guiones)
    fallos(fallo);

    respuesta.innerHTML = guiones;
    letra.value = "";
    letra.focus();
  }
});

next.addEventListener("click", () => {
  for (let i = 0; i < palabras.length; i++) {
    if (palabraRandom == palabras[i]) {
      palabras.splice(i, 1);
    }
  }
  if (palabras.length > 0) {
    palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
    guiones = palabraRandom.replace(/./g, "_ ");
    respuesta.innerHTML = guiones;
    document.getElementById("ahorcado").style.backgroundPosition = 0 + "px 0";
    letra.value = "";
    letra.focus();
    resultado.innerHTML = "";
  }else{
    resultado.style.color = "#FFFF00";
    resultado.innerHTML = "Game Over";
  }

});

clear.addEventListener("click", () => {
  window.location.reload();
});

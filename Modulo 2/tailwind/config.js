let btn = document.getElementById("btn-search");
const palabras = ["juego", "leon", "entrenar", "ahorcado", "perro", "negro"];

const palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];

let guiones = palabraRandom.replace(/./g, "_ ");
const letra = document.getElementById("search");
let respuesta = document.getElementById("output");
let contFallos = 0;
let resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
  let letrica = letra.value;

  let fallo = true;

  for (let i in palabraRandom) {
    if (letrica == palabraRandom[i]) {
      guiones =
        guiones.substring(0, i * 2) + letrica + guiones.substring(i * 2 + 1);
      fallo = false;
    }
  }

  if (fallo) {
    contFallos++;
    document.getElementById("ahorcado").style.backgroundPosition =
      -(200 * contFallos) + "px 0";

    if (contFallos == 4) {
      resultado.style.color = "#FF00FF";
      resultado.innerHTML = "Perdiste";
      setTimeout(()=>{
        window.location.reload();
      }, 2000)
    }
  } else {
    if (guiones.indexOf("_") < 0) {
      resultado.style.color = "#FFFF00";
      resultado.innerHTML = "Ganaste";
      setTimeout(()=>{
        window.location.reload();
      }, 2000)
    }
  }

  respuesta.innerHTML = guiones;
  letra.value = "";
  letra.focus();
});

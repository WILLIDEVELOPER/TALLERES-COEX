let url = "https://pokeapi.co/api/v2/pokemon";
let descarga = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let pokemonsList = document.getElementById("pokemonsList");
let links = document.getElementById("links");
let pokemones = [];
let pokemon = {
  img: "",
  nombre: "",
};

fetch(descarga)
  .then((res) => res.json())
  .then((data) => {
    for (let i of data.results) {
      fetch(i.url)
        .then((x) => x.json())
        .then((x) => {
          pokemon.img = x.sprites.front_default;
          pokemon.nombre = x.name;
          pokemones.push(pokemon);
          pokemon = {
            img: "",
            nombre: "",
          };
        });
    }
  });

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
    for (let i of res.results) {
      fetch(i.url)
        .then((x) => x.json())
        .then((x) => {
          pokemonsList.innerHTML += `<div class="card">
                                        <img src="${x.sprites.front_default}" alt="">
                                        <p>${x.name}</p>
                                    </div>`;
          // pokemon.img = x.sprites.front_default
          // pokemon.nombre = x.name
          // pokemones.push(pokemon)
          // pokemon = {
          //   img: "",
          //   nombre: ""
          // }
        });
    }
    links.innerHTML = `<button type="submit" class="listar" id="listar" onclick="listar()">Listar</button>`;
  });

let writer = document.getElementById("buscador");

const handleSubmit = (nombre) => {
  let url = ``;

  if (nombre) {
    url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        pokemonsList.innerHTML = `<div class="card">
                                        <img src="${res.sprites.front_default}" alt="">
                                        <p>${res.name}</p>
                                    </div>`;
      });
  } else {
    alert("Ingrese un nombre");
  }
};

writer.addEventListener("input", (e) => {
  pokemonsList.innerHTML = ``;
  if (e.target.value) {
    const respuesta = pokemones.filter((item) => {
      return item.nombre.includes(e.target.value);
    });
    for (let i = 0; i < 20; i++) {
      pokemonsList.innerHTML += `<div class="card">
                                      <img src="${respuesta[i].img}" alt="">
                                      <p>${respuesta[i].nombre}</p>
                                  </div>`;
    }
  }else{
    listar()
  }
});

const listar = () => {
  pokemonsList.innerHTML = ``;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
      for (let i of res.results) {
        fetch(i.url)
          .then((x) => x.json())
          .then((x) => {
            pokemonsList.innerHTML += `<div class="card">
                                        <img src="${x.sprites.front_default}" alt="">
                                        <p>${x.name}</p>
                                    </div>`;
          });
      }
      links.innerHTML = `<button type="submit" class="listar" id="listar" onclick="listar()">Listar</button>`;
    });
};
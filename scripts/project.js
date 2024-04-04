/* W6: Project */

/* Declare and initialize global variables */
const LIMIT = 50; // Pokemon download limit
let pokemonIndex = 1; //  index of the first pokemon according to the API
const pokemonsElement = document.querySelector("#pokemons");
let pokemonList = []; // array of pokemon-objects

/* async getTemples Function using fetch()*/
const getPokemonsData = async () => {
  for (let i = 1; i <= LIMIT; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);

      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      const data = await response.json();

      pokemonList.push({
        name: data.name,
        imageUrl: data.sprites.other.dream_world.front_default,
        height: data.height,
        weight: data.weight,
      });
    } catch (error) {
      console.error(`Fetch error: ${error}`);
    }
  }
  displayPokemons(pokemonList);
};

/* async displayPokemons Function */
const displayPokemons = async (pokemons) => {
  pokemons.forEach((pokemon) => {
    const articleElement = document.createElement("article");

    const h3Element = document.createElement("h3");
    h3Element.innerText = `${pokemon.name}`;

    const imgElement = document.createElement("img");
    imgElement.src = pokemon.imageUrl;
    imgElement.alt = `${pokemon.name} image`;
    imgElement.style.maxWidth = "150px";
    imgElement.style.maxHeight = "150px";
    imgElement.style.padding = "20px";
    imgElement.style.borderRadius = "10%";

    const p1Element = document.createElement("p1");
    p1Element.innerText = `height: ${pokemon.height}`;
    p1Element.style.marginTop = "15px";
    const p2Element = document.createElement("p2");
    p2Element.innerText = `weight: ${pokemon.weight}`;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    articleElement.appendChild(p1Element);
    articleElement.appendChild(p2Element);

    pokemonsElement.appendChild(articleElement);
  });
};

/* clear Function */
const clear = () => {
  while (pokemonsElement.firstChild) {
    pokemonsElement.removeChild(pokemonsElement.firstChild);
  }
};

/* sortPokemons Function */
const sortPokemons = (pokemons) => {
  clear();
  const sorting = document.querySelector("#sorted").value;

  switch (sorting) {
    case "alphASC":
      let alphAscSortedPokemons = pokemons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      displayPokemons(alphAscSortedPokemons);
      break;

    case "alphaDESC":
      let alphDescSortedPokemons = pokemons.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      displayPokemons(alphDescSortedPokemons);
      break;

    case "all":
      displayPokemons(pokemonList);
      break;
  }
};

/* filterPokemons Function */
const filterPokemons = (pokemons) => {
  clear();
  const filter = document.querySelector("#filtered").value;

  switch (filter) {
    case "heightAbove":
      let heightAboveFilteredPokemons = pokemons.filter(pokemon => pokemon.height >= 6);
      displayPokemons(heightAboveFilteredPokemons);
      break;

    case "heightLess":
      let heightLessFilteredPokemons = pokemons.filter(pokemon => pokemon.height < 6);
      displayPokemons(heightLessFilteredPokemons);
      break;

    case "weightAbove":
      let weightAboveFilteredPokemons = pokemons.filter(pokemon => pokemon.weight >= 60);
      displayPokemons(weightAboveFilteredPokemons);
      break;

    case "weightLess":
      let weightLessFilteredPokemons = pokemons.filter(pokemon => pokemon.weight < 60);
      displayPokemons(weightLessFilteredPokemons);
      break;

    case "all":
      displayPokemons(pokemonList);
      break;
  }
};

/* Event Listener */
document.querySelector("#sorted").addEventListener("change", () => {
  sortPokemons(pokemonList);
});

document.querySelector("#filtered").addEventListener("change", () => {
  filterPokemons(pokemonList);
});

getPokemonsData();

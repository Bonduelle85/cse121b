const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemonData(url, doStuffCallback) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffCallback(data);
  }
}

function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;

  pokeList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    pokeListElement.innerHTML += html;
        // OR
    // var li = document.createElement('li');
    // li.innerHTML = currentItem.name
    // pokeListElement.appendChild(li)
  });
}

function sortPokemon(list) {

}


getPokemonData(url, doStuff);
console.log("second: ", results);

getPokemonData(urlList, doStuffList);

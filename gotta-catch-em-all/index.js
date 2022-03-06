const pokemonsContainer = document.querySelector(".pokemons");

const renderPokemons = (pokemons) => {
  for (i = 0; i < Object.keys(pokemons).length; i++) {
    const newDiv = document.createElement("div");
    const classes = pokemons[i].types.join(" ").split(" ");
    newDiv.classList.add(...classes);
    newDiv.classList.add("pokemonDiv");
    newDiv.innerHTML = `<p>${pokemons[i].name}</p> <img src='${pokemons[i].image}' /> `;
    pokemonsContainer.appendChild(newDiv);
  }
};

renderPokemons(pokemons);

const pokemonName = document.querySelector("#pokemon-name");
let filterInput = "";

const filterPokemons = (pokemons) => {
  const checkboxes = [...document.querySelectorAll("input[type='checkbox']")];
  const filterCheckboxes = checkboxes.filter(
    (checkbox) => checkbox.checked === true
  );

  for (i = 0; i < Object.keys(filterCheckboxes).length; i++) {
    filterInput += `${filterCheckboxes[i].id} `;
  }

  filterInput = filterInput.split(" ");

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.value.toLowerCase()) &&
      (filterInput.includes(pokemon.types[0]) ||
        filterInput.includes(pokemon.types[1]))
  );

  return filteredPokemons;
};

const form = document.querySelector("form");

const submitForm = (event) => {
  event.preventDefault();

  pokemonsContainer.innerHTML = ``;
  renderPokemons([...filterPokemons(pokemons)]);
  filterInput = "";
};

form.addEventListener("submit", submitForm);

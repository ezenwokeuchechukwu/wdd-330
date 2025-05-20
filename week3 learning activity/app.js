const select = document.getElementById('pokemonSelect');
const main = document.querySelector('main');

// Fetch the list of Pokemon
async function fetchPokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await response.json();
    return data.results;
}

// Fetch details for a single Pokemon
async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    return await response.json();
}

// Populate the select dropdown
async function populateSelect() {
    const pokemonList = await fetchPokemonList();
    select.innerHTML = '';
    pokemonList.forEach(pokemon => {
        const option = document.createElement('option');
        option.value = pokemon.url;
        option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        select.appendChild(option);
    });
}

// Display Pokemon details
async function displayPokemon(url) {
    main.innerHTML = 'Loading...';
    const details = await fetchPokemonDetails(url);
    main.innerHTML = `
        <h2>${details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
        <img src="${details.sprites.front_default}" alt="${details.name}">
        <p>Height: ${details.height}</p>
        <p>Weight: ${details.weight}</p>
        <p>Types: ${details.types.map(t => t.type.name).join(', ')}</p>
    `;
}

// Event listener for select change
select.addEventListener('change', (e) => {
    displayPokemon(e.target.value);
});

// Initialize
(async function init() {
    await populateSelect();
    // Display first Pokemon by default
    if (select.options.length > 0) {
        displayPokemon(select.options[0].value);
    }
})();
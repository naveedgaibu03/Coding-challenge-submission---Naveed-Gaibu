document.querySelector('#search').addEventListener("click", getPokemon);
function lowerCaseName(string) {
    return string.tolowerCase();
}
function getPokemon() {
    const name = document.querySelector("#pokemonName").Value;
    const pokemonName = lowerCaseName(name);
fetch('https://pokeapi.co/api/v2/pokemon/${name}')
.then(response) => response.json())
.then((data) => {
    document.querySelector(".pokemonBox").innerHTML = '
    </div>
        <img 
        src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}"
        />
        </div>
        <div class="pokemonInfo">
            <h1>${data.name}</h1>
            <p>wight: ${data.weight}</p>
        </div>
        '; 
    console.log(data);
}).catch((err) => {
    console.log('Pokemon not found',err);
});

e.preventDefault();

getPokemon()

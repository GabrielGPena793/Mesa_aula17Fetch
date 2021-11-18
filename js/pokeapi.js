let button = document.querySelector("button")
let conteudo = document.querySelector(".conteudo")
let pokemon = document.querySelector(".pokemon")


button.addEventListener("click", (event) =>{

    event.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
    .then(response => response.json())
    .then(json => {

        conteudo.innerHTML =  `<div class="post"> <h2>${json.name}</h2> <img src="${json.sprites.front_default}"/></div>`;

    })
})

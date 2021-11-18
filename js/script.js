let button = document.querySelector("button")
let conteudo = document.querySelector(".conteudo")

button.addEventListener("click", (event) =>{

    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {

        conteudo.innerHTML =  json.map( post => `<div class="post"> <h2>${post.title}</h2> <p>${post.body}</p></div>`).join("");

    })
})

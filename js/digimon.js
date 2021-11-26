const button = document.querySelector("button");
const digimon = document.querySelector("input[type=text]");
const contain = document.querySelector(".contain")

document.body.style.background = "url('https://assets.papelpop.com/wp-content/uploads/2020/01/Captura-de-Tela-2020-01-21-a%CC%80s-15.44.08.png') center/cover no-repeat"
document.body.style.height = "100vh"

button.addEventListener("click", event => {

    event.preventDefault();

    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon.value}`)
    .then( response => response.json())
    .then(  digimon  => {  

        contain.innerHTML += `
        <div class="card bg-warning p-3 m-auto" style="width: 18rem;">
            <h2>${digimon[0].name}</h2>
            <img src="${digimon[0].img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Level: ${digimon[0].level}</p>
            </div>
        </div>`

    } )

})
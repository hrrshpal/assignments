const container = document.querySelector("#pokemon-container")
const showBtn = document.querySelector("#show-btn")

async function fetchData(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let data = await response.json()
    
    const div = document.createElement("div")
    div.setAttribute("class","pokemon-card")
    const name = document.createElement("h2")
    name.innerText = data.name
    const image = document.createElement("img")
    image.setAttribute("src", data.sprites.front_default)
    image.setAttribute("alt", data.name)
    const type = document.createElement("p")
    type.innerHTML = "<strong>Type:</strong> " + data.types[0].type.name
    const height = document.createElement("p")
    height.innerHTML = "<strong>Height:</strong> " + data.height
    const weight = document.createElement("p")
    weight.innerHTML = "<strong>Weight:</strong> " + data.weight

    div.appendChild(name)
    div.appendChild(image)
    div.appendChild(type)
    div.appendChild(height)
    div.appendChild(weight)

    container.appendChild(div)
}

showBtn.addEventListener("click", function() {
    container.innerHTML = ""

    const cardCount = document.querySelector("#card-count").value
    const pokemonCategory = document.querySelector("#pokemon-category").value
    const range = pokemonCategory.split("-")
    const start = Number(range[0])
    const end = Number(range[1])

    for(let i=start; i<start + Number(cardCount); i++){
        fetchData(i)
    }
})
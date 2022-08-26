const URI = "https://api.spotify.com/v1/artists/3LY2cnBt6jqLEdJco5NBE2/top-tracks?market=US"
const PETICION = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQCW_NIG_nz5NZtWpEnuGm9yu0GkS9cyCTiZQ9LDrjCifDjJ6tQzx036JfQPHuMwxwRe6lZKajl90e8q99bQHk9G09BKyNHGBaJbZsloczMgugj6lkqpBy6eJB3ZFw2ORoWYG99uH'
    }
}
let contenedor = document.getElementById("canciones")
let selection = document.getElementById("selection")
fetch(URI,PETICION).then(function(respuesta){
    return respuesta.json()
}).then(function(respuesta){

    respuesta.tracks.forEach(function(cancion){
        let card = document.createElement("div")
        card.classList.add("card","mb-3", "cardmax")
        let row = document.createElement("div")
        row.classList.add("row")
        let col1 = document.createElement("div")
        col1.classList.add("col-md-4", "g-0")
        let image = document.createElement("img")
        image.classList.add("img-fluid", "rounded-start")
        image.src = cancion.album.images[0].url
        let col2 = document.createElement("div")
        col2.classList.add("col-md-8")
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        let titulo = document.createElement("h5")
        titulo.classList.add("card-title")
        titulo.textContent = cancion.name
        let descripcion = document.createElement("p")
        descripcion.classList.add("card-text")
        descripcion.textContent = cancion.popularity
        let audio = document.createElement("audio")
        audio.classList.add("w-100")
        audio.src = cancion.preview_url
        audio.setAttribute("controls","controls")

        cardBody.appendChild(titulo)
        cardBody.appendChild(descripcion)
        cardBody.appendChild(audio)
        col1.appendChild(image)
        col2.appendChild(cardBody)
        row.appendChild(col1)
        row.appendChild(col2)
        card.appendChild(row)
        contenedor.appendChild(card)
    })
}).catch(function(error){
    console.log(error)
})
import { generarUri } from "../helpers/generarURI.js"
import { pintarCanciones } from "./pintarCanciones.js"
import { PETICION } from "../helpers/datosGET.js"
import { consultarCanciones } from "../services/consultarCanciones.js"

let artista = document.getElementById("artista")
artista.addEventListener("change",function(e){
    const URI = generarUri(artista.value)
    activarServicio()
    async function activarServicio(){
        let canciones = await consultarCanciones(URI,PETICION)
        pintarCanciones(canciones)
    }
})
import { URI,PETICION } from "../helpers/datosGET.js";
import { consultarCanciones } from "./consultarCanciones.js";
import { pintarCanciones } from "../controllers/pintarCanciones.js";

let selection = document.getElementById("selection")
selection.addEventListener("change",function(e){
    consultarCanciones("https://api.spotify.com/v1/artists/"+selection.value+"/top-tracks?market=US",PETICION)
})
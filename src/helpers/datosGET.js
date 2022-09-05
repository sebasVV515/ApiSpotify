import {obtenerTOKEN} from "../services/generarTOKEN.js"

let TOKEN = await obtenerTOKEN()

export const PETICION = {
    method: 'GET',
    headers: {
        Authorization: TOKEN.token_type+" "+TOKEN.access_token
    }
}

const URI = "https://accounts.spotify.com/api/token"
const DATO1 = "grant_type=client_credentials"
const DATO2 = "client_id=509da18a4b934c3bba1623523158c976"
const DATO3 = "client_secret=224fc6ff0c0c479dbc9421d0db759b28"
const PETICION = {
    method: "POST",
    headers:{

    },
    body:DATO1+"&"+DATO2+"&"+DATO3
}
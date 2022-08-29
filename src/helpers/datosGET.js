const IDARTISTA = "3LY2cnBt6jqLEdJco5NBE2"
export const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=US`
const TOKEN = "Bearer BQAqLn4T5HOkZcSfJZrVOJHx0HRsAB1ThQs12thyOY7y4FcohX8RCgBI-p2l0RtpTZQasIL2YRiOUJxZ3ba0QJd4PK5C_X2opj9bHKhn1lXI2Rmlot7u4257OQqF-1E2l7N4gqhzL3vHAtsKQvZ08zSdXZUADmT2KwzxJCVtGLNRDRvZA2Z-Rzvr9-3i3963u_I"

export const PETICION = {
    method: 'GET',
    headers: {
        Authorization: TOKEN
    }
}

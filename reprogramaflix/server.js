const filmesJson = require("./models/filmes.json")
const seriesJson = require("./models/series.json")

const express = require("express")
const app = express()


app.get("/catalogo", (request, response) => {
    response.status(200).json([
        {
            "filmes": filmesJson,
            "series": seriesJson,
        }

    ])
})

app.get("/filmes/:id", (request, response)=> {
    let idRequest = request.params.id

    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
})


app.get("/series", (request, response) => {
    let idRequest = request.query.id
    let idEncontrado = seriesJson.find(series => series.id == idRequest)

    response.status(200).send(idEncontrado)
})

app.listen(7070, ()=> {
    console.log("Alô paixão, alô doçura");
})
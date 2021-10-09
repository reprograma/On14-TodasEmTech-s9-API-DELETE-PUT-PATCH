const filmesJson = require("./models/filmes.json") //puxar filmes data
const serieJson = require("./models/series.json") // puxas series data

const { request, response } = require("express")
const express = require("express") // chamando express
const app = express() //executando o express

app.get("/catalogo", (request, response) =>{

    response.status(200).json([
    {
        "filmes": filmesJson,
        "series": serieJson
    }
    ])
})

app.get("/filmes/:id", (request, response) => {
    let idRequest = request.params.id //vindo do cliente
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
})

app.get("/series", (request, response) => {
    let idRequest = request.query.id
    let idEcontrado = serieJson.find(serie => serie.id == idRequest)

    response.status(200).send(idEcontrado)
})

// configurando porta
app.listen(7072, ()=>{
console.log("alo doçura? to na porta 7072")
})
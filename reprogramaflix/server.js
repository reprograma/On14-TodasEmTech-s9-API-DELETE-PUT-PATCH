/*const filmesJson = require("./models/filmes.json")
const seriesJson = require("./models/series.json")

const express = require("express") // chamando o express
const app = express ()  // executando o express

app.get("/catalogo", (request, response) =>{
response.status(200).json([
    {
    "filmes": filmesJson,
    "series": seriesJson
}
])

app.get("/filmes/:id", (request, response) => {
    let idRequest = request.params.id
    let idEncontrado = filmesJson.ind(filme => filme.id ==idRequest)
    response.status(200).send(idEncontrado)
})

app.get ("/series", (request, response => {
    let idRequest = request.query.id
    let idEncontrado = seriesJson.find(series.id == idRequest)

    response.status(200).send(idEncontrado)

}))

})*/


//Iniciando o servidor
const app = require("./src/app")  // chamando o arquuivo app

app.listen(7071, () => {
    console.log("alo doçura? Estou na porta 7071")
})
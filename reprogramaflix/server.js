const app = require ("./src/app")

/*const filmesJson = require ("./src/models/filmes.json")
const seriesJson = require ("./src/models/series.json")
const express = require("express") //chamando o express
const app = express () //executando o express

app.get("/catalogo", (request, response)=>{
//criando resposta com um json com uma chave filmes e outra chave series
    response.status(200).json([
        {
            "filmes": filmesJson,
            "series": seriesJson
        }
    ])
})
//o id vai com : - precisa pegar o id requisitado - criar variável params
//encontrar o filme - criar outra variavel 
//- na response usa send pra buscar o id

app.get("/filmes/:id", (request, response) =>{
    let idRequest = request.params.id //path params - busca direto na rota

    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
})


app.get("/series", (request, response) => {
    let idRequest = request.query.id //query params - multiplos parametros para buscar no get
    //console.log(request.query)
    let idEncontrado = seriesJson.find(serie => serie.id == idRequest)
    response.status(200).send(idEncontrado)
})*/



//configurando a porta
app.listen(7070, ()=>{
    console.log("Servidor rodando na porta 7070")
})


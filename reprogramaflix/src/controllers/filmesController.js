//controller vai ter a logica

//chamando o json de filmes
const filmesJson = require("../models/filmes.json")


//função getAll retorna todos os filmes
const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}


//função getById retorna um filme de um id especifico
const getById = (request, response)=>{
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}

//exportando todas os funções do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,
    getById
}
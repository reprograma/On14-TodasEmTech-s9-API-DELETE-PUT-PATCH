//controller vai ter a logica

const filmesJson = require("../models/filmes.json") // chamando o json de filmes

//funcao getAll retorna todos os filmes
const getAll = (request, response) =>{

    response.status(200).json([
    {
        "filmes": filmesJson,
    }
    ])
}

//funcao getById retorna um filme de um id especifico
const getById = (request, response) => {
    let idRequest = request.params.id //vindo do cliente
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}

//expostando todas as funções do controller para ser usada no filmesRouter.js
module.exports = {
    getAll,
    getById
}

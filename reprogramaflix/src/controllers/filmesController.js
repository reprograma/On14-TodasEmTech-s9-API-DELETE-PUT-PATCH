//controller vai ter a logica

const { request, response } = require("../app")
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

const createMovie = (request, response) => {
    let body = request.body

    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [
            {
                "mensagem":"filme cadastrado com sucesso",
                novoFilme
            }
        ]
    )
}


const updateTitle = (request, response)=>{
    const idRequest = request.params.id //path params é o nome do request params
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizadocom sucesso",
                filmeFiltrado
            }
        ]
    )
}

//exportando todas as funções do controller para ser usada no filmesRouter.js
module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle
}

//controller vai ter a logica

const filmesJson = require("../models/filmes.json"); //chamando o json de filmes

const getAll = (request, response) => {  //função getAll retorna todos os filmes
    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}

const getById = (request, response)=>{  //função getById retorna um filme de um id especifico
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}

const createMovie = (request, response) => {
    const body = request.body

    let novoFilme = {
        id:(filmesJson.length) + 1,
        title: body.title,
        plot: body.plot

    }

 filmesJson.push(novoFilme)
 response.status(201).json(
    [

     { "Mensagem":"Filme cadastrado com sucesso", 
        novoFilme
     }
    ]
 )

}

const updateTitle = (request, response) =>{
    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)
    filmeFiltrado.Title = novoTitulo

    response.status(200).json([

        {
            "mensagem": "Filme atualizado com sucesso", filmeFiltrado
        }

    ])

}

//exportando todas os funções do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,   //  Get  -- ler informação
    getById,  //  Get
    createMovie, // Post
    updateTitle  // pacth

}


const filmesJson = require("../models/filmes.json") //chama o json

const getAll = (request, response)=> { //getall retorna todos os filmes

    response.status(200).json([
        {
            "filmes": filmesJson,
            "series": seriesJson
        }
    ])
}

const getById = (request, response)=>{ //retorna um filme específico
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}
//POST
const createMovie = (request, response)=>{ //criar um novo filme
    let body = request.body //pega info do body

    let novoFilme = { //cria novo objeto
        id: (filmesJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    }
}

//patch atualiza somente o titulo do filme
const updateTitle = (request, response)=>{
    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                filmeFiltrado
            }

        ]
    )
}

//PUT
const updateMovie = (request, response) => {
    const idRequest = request.params.id //path params é melhor para id
    let filmeRequest = request.body

    const indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                filmesJson
            }
        ]
    )
}

//exporta todas as funções controller
module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle,
    updateMovie
}
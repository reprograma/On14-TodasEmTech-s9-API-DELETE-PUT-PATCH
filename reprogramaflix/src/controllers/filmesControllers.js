const { request, response } = require("../app")
const filmesJson = require("../models/filmes.json")

const getAll = (req, res) => {
    res.status(200).json(
        [{
            filmesJson
        }])
}

const getById = (req, res) => {
    let idRequest = req.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)
    res.status(200).send(idEncontrado)
}

const createMovie = (req, res) => {
    let bodyReq = req.body

    let novoFilme = {
        id: (filmesJson.length) + 1,
        Title: bodyReq.Title,
        Plot: bodyReq.Plot
    }

    filmesJson.push(novoFilme)

    res.status(201).json(
        [
            {
                "mensagem": "filme cadastrado com sucesso", novoFilme
            }
        ]
    )
}

const updateTitle = (req, res) => {
    //no put temos que mandar body + id
    const idReq = req.params.id
    let novoTitulo = req.body.Title

    filmesFiltrado = filmesJson.find(filme => filme.id == idReq)
    filmesFiltrado.Title = novoTitulo

    res.status(200).json(
        [
            {
                "mensagem": "Filme atualizado com sucesso", filmesFiltrado
            }
        ]
    )
}

const updateMovie = (req, res) => {
    const idReq = req.params.id
    let filmeReq = req.body

    const indexEcontrado = filmesJson.findIndex(filme => filme.id == idReq)

    filmesJson.splice(indexEcontrado, 1, filmeReq)

    res.status(200).json(
        [{
            "mensagem": "Filme atualizado com sucesso",
            filmesJson
        }]
    )

}

module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle,
    updateMovie
}


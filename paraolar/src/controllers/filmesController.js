const filmesJson = require("../models/filmes.json")

const getAll = (req, res) => {
    res.status(200).json(
        [{
            filmesJson
        }]
    )
}
//
const getById = (req, res) => {
    let idRequest = req.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)
    res.status(200).send(idEncontrado)
}

const getByTitle = (req, res) => {
    let tituloReq = req.query.titulo
    let filmeEncontrado = filmesJson.filter(filme => filme.Title.includes(tituloReq)
    )
    res.status(200).send(filmeEncontrado)
}

const getByGenre = (req, res) => {
    let generoReq = req.query.genre
    let filmeEncontrado = filmesJson.filter(filme => filme.Genre.includes(generoReq)
    )
    res.status(200).send(filmeEncontrado)
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre
}
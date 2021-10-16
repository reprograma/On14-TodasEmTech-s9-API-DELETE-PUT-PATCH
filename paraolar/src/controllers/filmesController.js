const filmesJson = require("../models/filmes.json")

const getAll = (req, res) => {
    res.status(200).json(
        [{
            filmesJson
        }]
    )
}

const getById = (req, res) => {
    let idRequest = req.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)
    res.status(200).send(idEncontrado)
}

module.exports = {
    getAll,
    getById
}
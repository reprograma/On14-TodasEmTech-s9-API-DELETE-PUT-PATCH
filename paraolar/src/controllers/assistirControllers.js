const series = require("../models/series.json")
const filmes = require("../models/filmes.json")
// const teste = require("../models/teste.json")

const getAllTodos = (req, res) => {
    res.status(200).json(
        [{
            series, filmes
        }]
    )
}

// const getById = (req, res) => {
//     let idReq = req.params.id
//     let idEncontrado = filmesJson.find(filme => filme.id == idReq)
//     res.status(200).send(idEncontrado)
// }

module.exports = {getAllTodos}

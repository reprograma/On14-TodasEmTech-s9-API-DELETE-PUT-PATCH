const filmesJson = require("../models/filmes.json")
const seriesJson = require("../models/series.json")


//GET
const getAll = (req, res) => {
    res.status(200).send([filmesJson,seriesJson])
}

module.exports = {
    getAll
}
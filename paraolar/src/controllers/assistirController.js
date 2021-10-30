const filmesJson = require("../models/filmes.json")
const seriesJson = require("../models/series.json")

//[GET] /assistir✔
const getAll = (request, response)=>{
    response.status(200).send([filmesJson, seriesJson])
}

module.exports = {
    getAll
}
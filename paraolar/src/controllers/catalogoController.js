const filmesJson = require("../models/filmes.json")
const seriesJson = require("../models/series.json")

const getAll = (request, response) => {
    response.status(200).json([
        {
            "filmes": filmesJson,
            "series": seriesJson
        }
    ])
}
module.exports = {
    getAll
}
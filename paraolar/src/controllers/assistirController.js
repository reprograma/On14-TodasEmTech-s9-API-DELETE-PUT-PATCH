const filmesJson = require("../models/filmes.json")
const seriesJson = require("../models/series.json")

const getAssistir = (req, res) => {
    console.log(seriesJson);
    res.status(200).json(
        [{
            filmesJson, seriesJson
        }]
    )
}

module.exports = { getAssistir }
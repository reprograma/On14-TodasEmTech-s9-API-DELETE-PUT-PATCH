const seriesJson = require("../models/series.json")

const getAllSeries = (req, res) => {
    res.status(200).json(
        [{
            seriesJson
        }]
    )
}

module.exports = {
    getAllSeries
}
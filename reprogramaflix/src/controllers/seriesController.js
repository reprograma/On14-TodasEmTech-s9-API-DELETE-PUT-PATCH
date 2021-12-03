// importar  o json de series
const seriesJson = require("../models/series.json")

const getAll = (req, res)=>{
    res.status(200).send(seriesJson)
}

module.exports = {
    getAll
}
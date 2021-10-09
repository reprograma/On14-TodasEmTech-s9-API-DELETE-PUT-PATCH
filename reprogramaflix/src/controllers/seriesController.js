//importar o json de serie
const serieJson = require("../models/series.json")


const getAll = (req, res) => {
    res.status(200).send(serieJson)
}

module.exports = {
    getAll
}
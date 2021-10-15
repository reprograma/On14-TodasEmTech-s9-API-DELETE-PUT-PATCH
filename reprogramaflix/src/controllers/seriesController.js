//importar o json de series
const seriesJson = require("../models/series.json")

const getAll = (req, res)=>{
    res.status(200).send(seriesJson)
}

const getByGender = (req, res)=>{
    const generoRequest = req.query.genero

    const seriesFiltradas = seriesJson.filter( serie =>
        serie.genre.toString().includes(generoRequest)
    )

    res.status(200).send(seriesFiltradas)

}

module.exports ={
    getAll,
    getByGender
}
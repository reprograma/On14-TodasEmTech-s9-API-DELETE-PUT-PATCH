const serieJson = require("../models/series.json")


const getAllSerie = (request, response)=>{
    response.status(200).send(serieJson)
}

const getIdSerie = (request, response)=>{
    
    let serieChamada = request.query.id
    let serieAchada = serieJson.find(serie => serie.id == serieChamada)
    
    response.status(200).send(serieAchada)
}

module.exports = {
    getIdSerie,
    getAllSerie
}

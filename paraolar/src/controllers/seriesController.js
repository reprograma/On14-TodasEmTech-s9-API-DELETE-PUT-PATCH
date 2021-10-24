const serieJson = require("../models/series.json")


const getAllSerie = (request, response)=>{
    response.status(200).send(serieJson)
}

const getIdSerie = (request, response)=>{
    
    let serieChamada = request.query.id
    let serieAchada = serieJson.find(serie => serie.id == serieChamada)
    
    response.status(200).send(serieAchada)
}

const getTitle = (request, response)=>{
    let tituloChamado = request.query.id
    let tituloEncontrado = serieJson.find(serie => serie.Title == tituloChamado)

    response.status(200).send(tituloEncontrado)
}

const getGenero = (request, response) =>{
    let generoChamado = request.query.id
    let generoEncontrado = serieJson.find(serie => serie.Genre == generoChamado)
    
    
    response.status(200).send(generoEncontrado)
}

const criarSerie = (request, response)=>{
    let body = request.body

    let serieNova = {
        id: (seriesJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    }

    seriesJson.push(serieNova)

    response.status(201).json(
        [{
            "mensagem": "nova serie", serieNova
        }]
    )
}




module.exports = {
    getIdSerie,
    getAllSerie,
    getTitle,
    getGenero,
    criarSerie
}

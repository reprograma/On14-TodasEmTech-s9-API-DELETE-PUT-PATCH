const seriesJson = require("../models/series.json")

//GET/series
const getAll = (request, response) => {
    response.status(200).json (
        [{
            "series": seriesJson
        }]
    )
}


//GET/series{genero}
const getGenre = (request, response) => {
    const genreRequest = request.query.genero.toLocaleLowerCase()
    
    const seriesFilters = seriesJson.filter(serie =>
        serie.genre.toString().toLocaleLowerCase().includes(genreRequest)
    )

    response.status(200).send(seriesFilters)
}


//GET/series{titulo}
const getTitle = (request, response) => {
    let titleRequest = request.query.titulo.toLocaleLowerCase()
    let titleFound = seriesJson.filter(
        series => series.title.toLocaleLowerCase().includes(titleRequest)
    )

    response.status(200).send(titleFound)
}


//GET/series{id}
const getById = (request, response) => {
    let idRequest = request.params.id
    let idFound = seriesJson.find(serie => serie.id == idRequest)

    if (idFound == undefined){
        response.status(404).send({message:"Infelizmente não temos esta série." })
    }

    response.status(200).send(idFound)
}


//POST/series/criar
const createSerie = (request, response) => {
    const body = request.body

    let newSerie = {
        id: (seriesJson.length) + 1,
        title: body.title,
        totalSeasons: body.totalSeasons,
        genre: body.genre,
        writes: body.writes,
        poster: body.poster,
        actors: body.actors,
        ratings: body.ratings
    }

    seriesJson.push(newSerie)
    response.status(200).json(
        [{
            "mensagem": "Série cadastrada com sucesso!",
            newSerie
        }]
    )
}


//PUT/series/update/{id}
const updateSeries = (request, response) => {
    const idRequest = request.params.id
    let serieRequest = request.body

    let serieFound = seriesJson.findIndex(serie => serie.id == idRequest)
    seriesJson.splice(serieFound, 1, serieRequest)
    
    response.status(200).json(
        [{
            "mensagem":"Série atualizada com sucesso!",
            seriesJson
        }]
    )
}


//PATCH/series/updateTitle?/{id}
const updateTitle = (request, response) => {
    const idRequest = request.params.id
    let bodyRequest = request.body.title

    serieFilter = seriesJson.find(series => series.id == idRequest)
    serieFilter.title = bodyRequest

    response.status(200).json(
        [{
            "mensagem":"Título da série atualizado com sucesso!",
            serieFilter
        }]
    )
}



//PATCH/series/update/{id}
const updateSeriesById = (request, response) => {
    const idRequest = request.params.id
    const bodyRequest = request.body

    const serieFound = seriesJson.find(series => series.id == idRequest)

    bodyRequest.id = idRequest

    Object.keys (serieFound).forEach((chave) => {

        if (bodyRequest[chave] == undefined){
            serieFound[chave] == serieFound [chave]
        }else{
            serieFound[chave] = bodyRequest [chave]
        }

    })

    response.status(200).json(
        [{
            "mensagem":"Série atualizada com sucesso!",
            serieFound
        }]
    )
}



//DELETE/series/deletar/{id}
const deleteSerie = (request, response) => {
    const idRequest = request.params.id
    const serieFound = seriesJson.findIndex(series => series.id == idRequest)

    seriesJson.splice(serieFound, 1)

    response.status(200).json(
        [{
            "message":"Série deletada com sucesso!",
            "deletado": idRequest,
            seriesJson
        }]
    )

}


module.exports ={
    getAll,
    getGenre,
    getTitle,
    getById,
    createSerie,
    updateSeries,
    updateTitle,
    updateSeriesById,
    deleteSerie
}
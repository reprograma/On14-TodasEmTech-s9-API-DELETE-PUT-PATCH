const seriesJson = require("../models/series.json")

const getAllSerie = (request, response) => {
    response.status(200).json([
        {
            "series": seriesJson,
        }
    ])
}

const getByIdSerie = (request, response) => {
    let idRequest = request.params.id
    let idEncontrado = seriesJson.find(serie => serie.id == idRequest)
    
    response.status(200).send(idEncontrado)
}

const getTitle = (request, response) => {
    let titleRequest = request.consulta.title.tolocalelowercase()
    let titleFound = seriesJson.filter(
        serie => serie.title.toLocaleLowerCase().includes(titleRequest)
    )
    response.status(200).send(titleFound)
}

const getGenre = (request, response) => {
    let genreRequest = request.consulta.genre.tolocalelowercase()
    let seriesFilters = seriesJson.filter(serie => serie.genre.toString().
    tolocalelowercase().includes(genreRequest)
    )
    response.status(200).send(seriesFilters)
}

const criarSerie = (request, response) => {
    let body = request.body

    let novoFilme = {
        id: (seriesJson.length)+1,
        title: body.title,
        totalSeasons: body.totalSeasons,
        genre: body.genre, 
        writers: body.writers,
        poster: body.poster,    
        actors: body.actors, 
        ratings: body.ratings,      
        rating: body.ratings, 
        likes: body.likes
}

seriesJson.push(novaSerie)
response.status(201).json([
    {
        "mensagem": "Nova série cadastrada com sucesso",
        novaSerie
    }
])
}

const updateSeries = (request, response) => {
    let idRequest = request.params.id
    let serieRequest = request.body

    let seriesfound = seriesJson.findIndex(series => series.id == idRequest)
    seriesJson.splice(seriesJson.indexOf(seriesfound), 1)

    response.status(200).json([
        {
            "mensagem": "Série atualizada com sucesso",
            seriesJson
        }
    ])
}


const updateTitle = (request, response) => {
    let idRequest = request.params.id
    let novaSerie = request.body.title

    serieFiltrada = seriesJson.find(serie => serie.id == idRequest)
    serieFiltrada.title = novoTitulo

    response.status(200).json([
            {
                "mensagem": "Novo título cadastrado com sucesso",
                novoTitulo
            }
        ])

}


const updateSeriesById = (request, response) => {
    let idRequest = request.params.id
    let bodyRequest = request.body
    let seriesFound = seriesJson.find(series => series.id == idRequest)
    bodyRequest.id = idRequest

    Object.keys(seriesFound).forEach((keys) => {
        if (bodyRequest[keys] == undefined) {
            seriesFound [keys] == seriesFound [keys]
        } else {
            seriesFound [keys] = bodyRequest[keys]
        }

    })

    response.status(200).json ([
        {
            "mensagem": "Série atualizada com sucesso",
            seriesFound
        }
    ])
}

const deleteSeries = (request, response) => {
    idRequest = request.params.id

    seriesToBeDeleted = seriesJson.find(series => series.id == idRequest)
    seriesJson.splice(seriesJson.indexOf(seriesToBeDeleted), 1)

    response.status(200).json([
        {
            "mensagem": "Série deletada com sucesso",
            "series": seriesToBeDeleted

        }
    ])
}



module.exports = {
    getAllSerie,
    getByIdSerie,
    getTitle,
    getGenre,
    criarSerie,
    updateSeries,
    updateTitle,
    updateSeriesById,
    deleteSeries
}
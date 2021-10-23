const seriesJson = require("../models/series.json")

// [GET] /series
const getAll = (request, response)=> { //getall retorna todos os filmes

    response.status(200).json([
        {
            "filmes": seriesJson
        }
    ])
}

// [GET] /series{id}
const getById = (request, response)=>{ //retorna uma serie específica
    let idRequest = request.params.id
    let idEncontrado = seriesJson.find(serie => serie.id == idRequest)

    response.status(200).send(idEncontrado)
}

// [GET] /series{titulo}
const getByTitulo = (request, response)=>{
    let tituloRequest = request.params.tituloRequest
    let tituloEncontrado = seriesJson.filter(serie=> serie.Title == tituloRequest)

    response.status(200).send(tituloEncontrado)
}

// [GET] /series{genero}
const getByGenero = (request, response)=>{
    let generoRequest = request.params.generoRequest
    let generoEncontrado = seriesJson.filter(serie=> serie.Genre == generoRequest)

    response.status(200).send(generoEncontrado)
}

// [POST]/series/criar
const createSerie = (request, response)=>{
    const bodyRequest = request.bodyRequest

    let novaSerie = {
            "id": (seriesJson.length)+1,
            "title": bodyRequest.title,
            "totalSeasons": bodyRequest.totalSeasons,
            "genre": bodyRequest.genre,
            "writers": bodyRequest.writers,
            "poster": bodyRequest.poster,
            "actors": bodyRequest.actors,
            "ratings": bodyRequest.ratings
    }

    seriesJson.push(novaSerie)

    response.status(201).json(
        [
            {
                "mensagem": "Série cadastrada com sucesso",
                novaSerie
            }
        ]
    )
}

// [PUT]/series/update/{id}
const updateSeries = (request, response) => {
    const idRequest = request.params.id //path params é melhor para id
    let serieRequest = request.body

    const indexEncontrado = seriesJson.findIndex(serie => serie.id == idRequest)
    seriesJson.splice(indexEncontrado, 1, serieRequest)

    response.status(200).json(
        [
            {
                "mensagem": "Série atualizada com sucesso",
                seriesJson
            }
        ]
    )
}


// [PATCH]/series/updateTitle?{id}
const updateTitle = (request, response)=>{
    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    serieFiltrada = seriesJson.find(serie => serie.id == idRequest)

    serieFiltrada.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "Série atualizada com sucesso",
                serieFiltrada
            }

        ]
    )
}

// [PATCH]/series/update/{id}
const updateBody = (request, response)=>{
    const idRequest = request.params.id
    let novoUpDate = request.body

    serieUpDate = seriesJson.find(serie => serie.id == idRequest)

    serieUpDate = novoUpDate

    response.status(200).json(
        [
            {
                "mensagem": "Série atualizada com sucesso",
                serieUpDate
            }

        ]
    )
}

// [DELETE]/series/deletar/{id}
const deleteSeries = (request, response)=>{
    const idRequest = request.params.id
    seriesDelete = seriesJson.findIndex(serie => serie.id == idRequest)
//altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
    seriesJson.splice(seriesDelete, 1)

    response.status(200).json(
        [
            {
                "mensagem": "Série deletada com sucesso",
                seriesDelete
            }
        ]
    )
}


module.exports = {
    getAll,
    getById,
    getByTitulo,
    getByGenero,
    createSerie,
    updateSeries,
    updateTitle,
    updateBody,
    deleteSeries
}
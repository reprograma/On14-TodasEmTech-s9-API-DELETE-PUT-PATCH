const seriesJson = require("../models/series.json");

const getAll = (request, response) => {
    response.status(200).json([
        {
            "series" : seriesJson
        }
    ])
}

// get por titulo e genero será o mesmo 

const getById = (request, response) => {
    const idRequest = request.params.id;
    const idEncontrado = seriesJson.find(serie => serie.id == idRequest);
    response.status(200).send(idEncontrado);
}

const createSerie = (request, response) => {
    let body = request.body;

    let novaSerie = {
        id: (seriesJson.length)+1,
        title: body.title,
        totalSeasons: body.totalSeasons
    }

    seriesJson.push(novaSerie);
    response.status(201).json(
        [
            {
                "mensagem" : "Nova serie cadastrada com sucesso!",
                novaSerie 
            }
        ]
    )
}

const updateTitle = (request, response) => {
    const idRequest = request.params.id;
    let novoTitulo = request.body.title;

    const serieEncontrada = seriesJson.find(serie => serie.id == idRequest);

    serieEncontrada.title = novoTitulo;

    response.status(200).json(
        [
            {
                "mensagem" : "Serie atualizada com sucesso!",
                serieEncontrada
            }
        ]
    )
}

const updateSerie = (request, response) => {
    const idRequest = request.params.id;
    let serieRequest = request.body;

    let indexEncontrado = seriesJson.findIndex(serie => serie.id == idRequest);
    seriesJson.splice(indexEncontrado, 1, serieRequest);

    response.status(200).json(
        [
            {
                "mensagem": "Serie atualizada com sucesso!",
                seriesJson
            }
        ]
    )
}

module.exports = {
    getAll,
    getById,
    createSerie,
    updateTitle,
    updateSerie
}
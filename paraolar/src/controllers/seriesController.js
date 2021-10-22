const seriesJson = require("../models/series.json");

//get - todas as series
const getAll = (request, response) => {
    response.status(200).json(
        [
            {
                "mensagem" : "Series:",
                seriesJson
            }
        ]
    )
}        

//get - serie por id
const getById = (request, response) => {
    const idRequest = request.params.id;
    const idEncontrado = seriesJson.find(serie => serie.id == idRequest);
    response.status(200).send(idEncontrado);
}

//get - serie por titulo
const getByTitle = (request, response) => {
    let titleRequest = request.query.title.toLocaleLowerCase();
    let titleFound = seriesJson.filter(serie => serie.title.toLocaleLowerCase().includes(titleRequest));

    response.status(200).json(
        [
            {
                "mensagem": "Series encontradas com esse genero:",
                titleFound
            }
        ]
    )
}

//get - serie por genero
const getByGenre = (request, response) => {
    const genreRequest = request.query.genre.toLocaleLowerCase();    
    const serieFiltrada = seriesJson.filter(serie => serie.genre.toString().toLocaleLowerCase().includes(genreRequest));

    response.status(200).json(
        [
            {
                "mensagem": "Series encontradas com esse genero:",
                serieFiltrada
            }
        ]
    )
}

//post - criar nova serie
const createSerie = (request, response) => {
    let body = request.body;

    let novaSerie = {
        id: (seriesJson.length)+1,
        title: body.title,
        totalSeasons: body.totalSeasons,
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

//patch - atualizar titulo da serie
const updateTitle = (request, response) => {
    const idRequest = request.params.id;
    let bodyRequest = request.body.title;

    const serieEncontrada = seriesJson.find(serie => serie.id == idRequest);

    serieEncontrada.title = bodyRequest;

    response.status(200).json(
        [
            {
                "mensagem" : "Titulo da serie atualizada com sucesso!",
                serieEncontrada
            }
        ]
    )
}

//patch - atualizar serie por id
const updateSerieId = (request, response) => {
    const idRequest = request.params.id;
    const bodyRequest = request.body;

    const serieFound = seriesJson.find(serie => serie.id == idRequest);
    bodyRequest.id = idRequest;

    Object.keys(serieFound).forEach((chave) => {

        if (bodyRequest[chave] == undefined){
            serieFound[chave] == serieFound [chave]
        }
        else{
            serieFound[chave] = bodyRequest [chave]
        }
    })

    response.status(200).json(
        [{
            "mensagem":"Serie atualizada com sucesso!",
            serieFound
        }]
    )
}

//put - atualizar serie
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

//delete - deletar serie
const deleteSerie = (request, response) => {
    const idRequest = request.params.id;

    const indiceSerie = seriesJson.findIndex(serie => serie.id == idRequest);

    seriesJson.splice(indiceSerie, 1);

    response.status(200).json(
        [
            {
                "mensagem" : "Serie deletada com sucesso!",
                "deletada" : idRequest,
                seriesJson
            }
        ]
    )    
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createSerie,
    updateTitle,
    updateSerieId,
    updateSerie,
    deleteSerie
}
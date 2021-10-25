const seriesJson = require("../models/series.json");

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
const getByTitle = (request, response) => {
    let titleRequest = request.query.title.toLocaleLowerCase();
    let titleFound = seriesJson.filter(serie => serie.title.toLocaleLowerCase().includes(titleRequest));

    response.status(200).json(
        [
            {
                "mensagem": "Resultado da pesquisa:",
                titleFound
            }
        ]
    )
} 

const getById = (request, response) => {
    const idRequest = request.params.id;
    const idFound = seriesJson.find(serie => serie.id == idRequest);
    response.status(200).send(idFound);
}



const getByGenre = (request, response) => {
    const genreRequest = request.query.genre.toLocaleLowerCase();    
    const seriesFilter = seriesJson.filter(serie => serie.genre.toString().toLocaleLowerCase().includes(genreRequest));

    response.status(200).json(
        [
            {
                "mensagem": "Series encontradas com esse genero:",
                seriesFilter
            }
        ]
    )
}

const createSerie = (request, response) => {
    let body = request.body;

    let newTvshow = {
        id: (seriesJson.length)+1,
        title: body.title,
        totalSeasons: body.totalSeasons,
    }

    seriesJson.push(newTvshow);
    response.status(201).json(
        [
            {
                "mensagem" : "Cadastro realizado com sucesso!",
                newTvshow 
            }
        ]
    )
}

const updateTitle = (request, response) => {
    const idRequest = request.params.id;
    let bodyRequest = request.body.title;

    const serieEncontrada = seriesJson.find(serie => serie.id == idRequest);

    serieEncontrada.title = bodyRequest;

    response.status(200).json(
        [
            {
                "mensagem" : "Titulo da serie atualizado!",
                serieEncontrada
            }
        ]
    )
}

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
            "mensagem":"Atualizado!",
            serieFound
        }]
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
                "mensagem": "Atualizado!",
                seriesJson
            }
        ]
    )
}

const deleteSerie = (request, response) => {
    const idRequest = request.params.id;

    const indiceSerie = seriesJson.findIndex(serie => serie.id == idRequest);

    seriesJson.splice(indiceSerie, 1);

    response.status(200).json(
        [
            {
                "mensagem" : "Série deletada!",
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
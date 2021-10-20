const filmesJson = require("../models/filmes.json");

const getAll = (request, response) => {
    response.status(200).json([
        {
            "filmes" : filmesJson
        }
    ])
}

const getById = (request, response) => {
    const idRequest = request.params.id;
    const idEncontrado = filmesJson.find(filme => filme.id == idRequest);
    response.status(200).send(idEncontrado)
}

const createMovie = (request, response) => {
    let body = request.body;

    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: body.Title,      
        Plot: body.Plot
    } 

    filmesJson.push(novoFilme);

    response.status(201).json(
        [
            {
                "menssagem": "Novo filme cadastrado com sucesso!",
                novoFilme
            }
        ]
    )
}

const updateTitle = (request, response) => {
    const idRequest = request.params.id;
    let novoTitulo = request.body.Title;

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest);
    filmeFiltrado.Title = novoTitulo;

    response.status(200).json(
        [
            {
                "mensagem" : "Filme atualizado com sucesso!",
                filmeFiltrado
            }
        ]
    )
}

const updateMovie = (request, response) => {
    const idRequest = request.params.id;
    let filmeRequest = request.body;

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest);

    filmesJson.splice(indexEncontrado, 1, filmeRequest);
    response.status(200).json(
        [
            {
                "mensagem" : "Filme atualizado com sucesso",
                filmesJson
            }
        ]
    )
}

module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle,
    updateMovie
}
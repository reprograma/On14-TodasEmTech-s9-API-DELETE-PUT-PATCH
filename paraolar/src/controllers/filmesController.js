const filmesJson = require("../models/filmes.json");


const getByGenre = (request, response) => {
    let genreRequest = request.query.Genre.toLocaleLowerCase();
    let genreFound = filmesJson.filter(filme => filme.Genre.toLocaleLowerCase().includes(genreRequest));
    response.status(200).json(
        [
            {
                "mensagem" : "Resultado da pesquisa:",
                genreFound
            }
        ]
    )

}

const getById = (request, response) => {
    const idRequest = request.params.id;
    const idEncontrado = filmesJson.find(filme => filme.id == idRequest);
    response.status(200).send(idEncontrado);
}

const getByTitle = (request, response) => {    
    let titleRequest = request.query.Title.toLocaleLowerCase();
    let titleFound = filmesJson.filter(filme => filme.Title.toLocaleLowerCase().includes(titleRequest));    
    response.status(200).json(
        [
            {
                "mensagem" : "Resultado da pesquisa:",
                titleFound
            }
        ]
    )
}

const getAll = (request, response) => {
    response.status(200).json([
        {
            "filmes" : filmesJson
        }
    ])
}



const createMovie = (request, response) => {
    let body = request.body;

    let newMovie = {
        id: (filmesJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    } 

    filmesJson.push(newMovie);

    response.status(201).json(
        [
            {
                "menssagem": "Filme cadastrado!",
                newMovie
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
                "mensagem" : "Atualizado!",
                filmeFiltrado
            }
        ]
    )
}

const updateMoviesId = (request, response) => {
    const idRequest = request.params.id;
    const bodyRequest = request.body;

    const movieFound = filmesJson.find(filme => filme.id == idRequest);
    
    bodyRequest.id = idRequest;

    Object.keys(movieFound).forEach((chave) => {
        
        if (bodyRequest[chave] == undefined){
            movieFound[chave] = movieFound [chave]
        }
        else{
            movieFound [chave] = bodyRequest [chave]
        }
    })

    response.status(200).json(
        [{
            "mensagem": "Atualizado!",
            movieFound
        }]
    )
}

const updateMovie = (request, response) => {
    const idRequest = request.params.id;
    let filmeRequest = request.body;

    let indexMovie = filmesJson.findIndex(filme => filme.id == idRequest);

    filmesJson.splice(indexMovie, 1, filmeRequest);
    response.status(200).json(
        [
            {
                "mensagem" : "Filme atualizado com sucesso",
                filmesJson
            }
        ]
    )
}

const deleteMovie = (request, response) => {
    const idRequest = request.params.id;
    const indiceMovie = filmesJson.findIndex(filme => filme.id == idRequest);
    
    filmesJson.splice(indiceMovie, 1);
    response.status(200).json(
        [
            {
                "mensagem" : "Filme deletado com sucesso!",
                "deletado" : idRequest,
                filmesJson
            }
        ]
    )    
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createMovie,
    updateTitle,
    updateMoviesId,
    updateMovie,
    deleteMovie
}
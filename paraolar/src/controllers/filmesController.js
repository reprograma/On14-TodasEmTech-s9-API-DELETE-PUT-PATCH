const filmesJson = require("../models/filmes.json");

//get - todos os filmes
const getAll = (request, response) => {
    response.status(200).json([
        {
            "filmes" : filmesJson
        }
    ])
}

//buscar filme por ID
const getById = (request, response) => {
    const idRequest = request.params.id;
    const idEncontrado = filmesJson.find(filme => filme.id == idRequest);
    response.status(200).send(idEncontrado);
}

//get - buscar filme por titulo
const getByTitle = (request, response) => {    
    let titleRequest = request.query.Title.toLocaleLowerCase();
    let tituloEncontrado = filmesJson.filter(filme => filme.Title.toLocaleLowerCase().includes(titleRequest));    
    response.status(200).json(
        [
            {
                "mensagem" : "Filme encontrado:",
                tituloEncontrado
            }
        ]
    )
}

//get - buscar filmes por genero
const getByGenre = (request, response) => {
    let genreRequest = request.query.Genre.toLocaleLowerCase();
    let genreEncontrado = filmesJson.filter(filme => filme.Genre.toLocaleLowerCase().includes(genreRequest));
    response.status(200).json(
        [
            {
                "mensagem" : "Filmes encontrados:",
                genreEncontrado
            }
        ]
    )

}

//post - criar um novo filme
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

//patch - modificar o título, passando o ID como parâmetro de busca
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

//patch - modificar filme, passando o ID como parâmetro de busca
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
            "mensagem": "Filme atualizado com sucesso!",
            movieFound
        }]
    )
}

//put - atualizar filme
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

//delete - deletar filme
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
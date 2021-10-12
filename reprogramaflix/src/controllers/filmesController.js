const filmesJson = require("../models/filmes.json"); //../para sair da pasta atual. O controller vai conter todas as informarções contidas no filmes.json

//função getAll retorna todos os filmes
const getAll = (request, response) => {
    
    response.status(200).json([
        {
            "filmes": filmesJson,            
        }
    ]);
}


const getById = (request, response) => {
    let idRequest = request.params.id;

    let idEncontrado = filmesJson.find(filme => filme.id == idRequest);

    response.status(200).send(idEncontrado);
}

const createMovie = (request, response) => {
    let body = request.body;

    let novoFilme = {
        id: (filmesJson.length) + 1,
        Title: body.Title,
        Plot: body.Plot
    }

    filmesJson.push(novoFilme);
    response.status(201).json(
        [
            {
            "mensagem":"filmes cadastrado com sucesso.", novoFilme
            
            }
        ]
    )
}

const updateTitle = (request, response) => {
    const idRequest = request.params.id;
    let novoTitulo = request.body.Title;

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest);

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "Filme atualizado com sucesso.", filmeFiltrado
            }
        ]
    )
}

//exportando todas as funções do controller para ser usada no filmesRoutes.js

module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle
} //me possibilita usar essas funções fora do arquivo, em qualquer lugar do meu código.
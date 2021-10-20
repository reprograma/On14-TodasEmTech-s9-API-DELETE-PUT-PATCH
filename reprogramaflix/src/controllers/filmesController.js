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
    let body = request.body; //pegar a informação que vem do body

    let novoFilme = {
        id: (filmesJson.length) + 1,
        Title: body.Title,
        Plot: body.Plot
    } //cria um novo objeto

    filmesJson.push(novoFilme);

    response.status(201).json(
        [
            {
            
                "mensagem":"Filme cadastrado com sucesso.", novoFilme
            
            } // avisa que o filme foi cadastrado
        ]
    );
}

const updateTitle = (request, response) => {
    let idRequest = request.params.id; //pega o id
    let novoTitulo = request.body.Title; //armazena o novo title enviado na request

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest); //filme encontrado

    filmeFiltrado.Title = novoTitulo //substituindo o titulo antigo fdo filme pelo novo enviado na request

    response.status(200).json(
        [
            {
                "mensagem": "Filme atualizado com sucesso.", filmeFiltrado
            }
        ]
    )
}

//PUT
const updateMovie = (request, response) => {
    const idRequest = request.params.id //path.params é melhor para id
    let filmeRequest = request.body

    const indexEncontrado = filmesJson.findIndex(
        filme => filme.id == idRequest
    )

    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json(
        [
            {
                "mensagem": "Filmes atualizado com sucesso.", filmesJson
            }
        ]
    )
}

//exportando todas as funções do controller para ser usada no filmesRoutes.js

module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle,
    updateMovie
} //me possibilita usar essas funções fora do arquivo, em qualquer lugar do meu código.
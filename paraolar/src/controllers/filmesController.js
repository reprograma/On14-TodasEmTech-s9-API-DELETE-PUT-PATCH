const filmesJson = require("../models/filmes.json")

//[GET] /filmes
const getAll = (request, response)=> { //getall retorna todos os filmes

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}

//[GET] /filmes/buscar/{id}
const getById = (request, response)=>{ //retorna um filme específico
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}

// [GET] /filmes/buscar?{titulo}
const getByTitulo = (request, response)=>{
    let tituloRequest = request.params.tituloRequest
    let tituloEncontrado = filmesJson.filter(filme=> filme.Title == tituloRequest)

    response.status(200).send(tituloEncontrado)
}

// [GET] /filmes/filtrar?{genero}
const getByGenero = (request, response)=>{
    let generoRequest = request.params.generoRequest
    let generoEncontrado = filmesJson.filter(filme=> filme.Genre == generoRequest)

    response.status(200).send(generoEncontrado)
}

// [POST]/filmes/criar
const createFilme = (request, response)=>{
    const bodyRequest = request.bodyRequest

    let novoFilme = {
        "id": (filmesJson.length)+1,
        "Title": bodyRequest.Title,
        "Year": bodyRequest.Year,
        "Rated": bodyRequest.Rated,
        "Released": bodyRequest.Released,
        "Runtime": bodyRequest.Runtime,
        "Genre": bodyRequest.Genre,
        "Director": bodyRequest.Director,
        "Writer": bodyRequest.Writer,
        "Actors": bodyRequest.Actors,
        "Plot": bodyRequest.Plot,
        "Language": bodyRequest.Language,
        "Country":bodyRequest.Country,
        "Awards": bodyRequest.Awards
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [
            {
                "mensagem": "Filme cadastrado com sucesso",
                novoFilme
            }
        ]
    )
}

// [PUT]/filmes/update/{id}
const updateFilme = (request, response) => {
    const idRequest = request.params.id //path params é melhor para id
    let filmeRequest = request.body

    const indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json(
        [
            {
                "mensagem": "Filme atualizado com sucesso",
                filmesJson
            }
        ]
    )
}

// [PATCH]/filmes/updateTitle?{id}
const updateTitle = (request, response)=>{
    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                filmeFiltrado
            }

        ]
    )
}

// [PATCH]/filmes/update/{id}
const updateBody = (request, response)=>{
    const idRequest = request.params.id
    let novoUpDate = request.body

    filmeUpDate = filmesJson.find(filme => filme.id == idRequest)

    filmeUpDate = novoUpDate

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                filmeUpDate
            }

        ]
    )
}


// [DELETE]/filmes/deletar/{id}
const deleteFilmes = (request, response)=>{
    const idRequest = request.params.id
    filmesDelete = filmesJson.findIndex(filmes => filmes.id == idRequest)
//altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
    filmesJson.splice(filmesDelete, 1)

    response.status(200).json(
        [
            {
                "mensagem": "Filme deletado com sucesso",
                filmesDelete
            }
        ]
    )
}



module.exports = {
    getAll,
    getById,
    getByTitulo,
    getByGenero,
    createFilme,
    updateFilme,
    updateTitle,
    updateBody,
    deleteFilmes
}
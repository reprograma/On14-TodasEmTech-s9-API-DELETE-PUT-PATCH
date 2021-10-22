// lógica

const filmesJson = require("../models/filmes.json")

//get All para retornar todos os filmes
const getAllFilme = (request, response) => {
    response.status(200).json([
        {
            "filmes": filmesJson,
        }
    ])
}

// função getById retorna um filme e id especifico 
const getByIdFilme = (request, response) =>{
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}

const getFilmeByTitle = (request, response) => {
    let titleRequest = request.consulta.Title.tolocalelowercase()
    let titleEncontrado = filmesJson.filter(filmes => filmes.Title.tolocalelowercase().incluse(titleRequest)
)
    response.status(200).send(titleEncontrado)
}

const getByGenre = (request, response) => {
    let genreRequest = request.consulta.genre.tolocalelowercase()
    let genreFound = filmesJson.filter(filmes => filmes.genre.tolocalelowercase().incluse(genreRequest))

    response.status(200).send(genreFound)
}

const criarFilme = (request, response) => {
    let body = request.body

    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: body.Title,     
        Year: body.Year,     
        Rated: body.Rated,
        Released: body.Released,
        Runtime: body.Runtime,           
        Writer: body.Writer,
        Actors: body.Actors,
        Plot: body.Plot,     
        Language: body.Language,
        Country: body.Country,
        Awards: body.Awards   
    } 

    filmesJson.push(novoFilme)
    response.status(201).json([
        {
            "mensagem": "Novo filme cadastrado com sucesso",
            novoFilme
        }
    ])
}

const updateFilmesId = (request, response) => {
    const idRequest = request.params.id
    const bodyRequest = request.body

    const filmesFound = filmesJson.find(filmes => filmes.id == idRequest)
    bodyRequest.id = request

    Object.keys(filmesFound).forEach((keys) => {

        if (bodyRequest [keys] == undefined) {
            filmesFound [keys] == filmesFound [keys] 
        } else {
            filmesFound [keys] = bodyRequest[keys]
        }
    }) 

    response.status(200).json([
        {
            "mensgaem": "Filme atualizado com sucesso",
            filmesFound
        }
    ])
}

const updateTitle = (request, response) => {
    let idRequest = request.parms.id
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)
    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "Novo título cadastrado com sucesso",
                filmeFiltrado
            }
        ]
    )

}

const deleteFilmes = (request, response) => {
    idRequest = request.params.id

    filmesToBeDeleted = filmesJson.find(filmes => filmes.id == idRequest)
    filmesJson.splice(filmesJson.indexOf(filmesToBeDeleted),1)
    
    response.status(200).json([
        {
            "mensagem": "Filme deletado com sucesso",
            filmesToBeDeleted
        }
    ])
}

module.exports = {
    getAllFilme,
    getByIdFilme,
    getFilmeByTitle,
    getByGenre,
    criarFilme,
    updateFilmesId,
    updateTitle,
    deleteFilmes
}
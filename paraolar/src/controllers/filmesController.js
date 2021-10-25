const filmesJson = require("../models/filmes.json")


const getAll = (req, res) => {
res.status(200).json([
        {
            "filmes": filmesJson,
        }
    ])
}


const getByGenre = (request, response) => {
let genreRequest = request.query.genre.toLocaleLowerCase();
let genreFound = filmesJson.filter(
    filmes => filmes.Genre.toLocaleLowerCase().includes(genreRequest)
    );
        
    response.status(200).send(genreFound)
}
    

const createMovie = (request, response) => {
const body = request.body
    
    let newMovie = {
        id: (filmesJson.length) + 1,
        title: body.Title,
        year: body.Year,
        genre: body.Genre,
        languange: body.Languange
    }
    
filmesJson.push(newMovie)
    
response.status(200).json(
        [{
            "mensagem": "Filme cadastrado com sucesso",
            newMovie
        }]
    )
}


const getByTitle = (request, response) => {
    let titleRequest = request.query.titulo.toLocaleLowerCase();
    let titleEncontrado = filmesJson.filter(
        filmes => filmes.Title.toLocaleLowerCase().includes(titleRequest)
    );

    response.status(200).send(titleEncontrado)

}


const deleteMovie = (request, response) => {
    const idRequest = request.params.id
    const indexMovie = filmesJson.findIndex(filmes => filmes.id == idRequest)

    filmesJson.splice(indexMovie, 1)

    response.status(200).json(
        [{
            "message":"Filme deletado com sucesso!",
            "deletado": idRequest,
            filmesJson
        }]
    )
}

const getById = (req, res) => {
    let idRequest = req.params.id
    let idEnconstrado = filmesJson.find(filme => filme.id == idRequest)
    
    if(idEnconstrado == undefined){
        res.status(404).send({message:`Infelizmente, não temos o filme ${idRequest} disponível!`})
    }
    res.status(200).send(idEnconstrado)
}
    

        
const updateTitle = (request, response) => {
    const idRequest = request.params.id
    let bodyRequest = request.body.Title
        
    movieFilter = filmesJson.find(filmes => filmes.id == idRequest)
    movieFilter.Title = bodyRequest

    response.status(200).json(
        [{
             "mensagem": "Título filme atualizado com sucesso!",
            movieFilter
        }]
    )
}


const updateMoviesId = (request, response) => {
    const idRequest = request.params.id
    const bodyRequest = request.body

    const movieFound = filmesJson.find(filmes => filmes.id == idRequest)
    
    bodyRequest.id = idRequest

    Object.keys (movieFound).forEach((chave) => {
        
        if (bodyRequest[chave] == undefined){
         movieFound[chave] = movieFound [chave]
        }else{
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

//exportando os módulos

const updateMovie = (request, response) => {
    const idRequest = request.params.id
    let movieRequest = request.body

    let indexFind = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson.splice(indexFind, 1, movieRequest) 

    response.status(200).json(
        [{
            "mensagem": "Filme atualizado com sucesso!",
            filmesJson
        }]
    )
} 



module.exports = {
    getAll,
    getByGenre,
    createMovie,
    getByTitle,
    deleteMovie,
    getById,
    updateTitle,
    updateMoviesId,
    updateMovie,
}

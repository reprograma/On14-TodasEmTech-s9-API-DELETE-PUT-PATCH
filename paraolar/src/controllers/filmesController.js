const { query, request, response } = require("express")
const filmesJson = require("../models/filmes.json")


const getAll = (req, res) => {
    res.status(200).json([
        {
            "filmes": filmesJson,
        }
    ])
}


const getById = (req, res) => {
    let idRequest = req.params.id
    let idEnconstrado = filmesJson.find(filme => filme.id == idRequest)
    
    if(idEnconstrado == undefined){
        res.status(404).send({message:`Infelizmente, não temos o filme ${idRequest} disponível!`})
    }

    res.status(200).send(idEnconstrado)

}


const getByTitle = (request, response) => {
    let titleRequest = request.query.titulo.toLocaleLowerCase();
    let titleEncontrado = filmesJson.filter(
        filmes => filmes.Title.toLocaleLowerCase().includes(titleRequest)
    );

    response.status(200).send(titleEncontrado)

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




module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createMovie
}
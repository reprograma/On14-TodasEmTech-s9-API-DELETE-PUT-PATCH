const filmesJson = require("../models/filmes.json")

const getAll = (req, res) => {
    res.status(200).json(
        [{
            filmesJson
        }]
    )
}

const getById = (req, res) => {
    let idReq = req.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idReq)
    res.status(200).send(idEncontrado)
}

const getByTitle = (req, res) => {
    let tituloReq = req.query.titulo
    let filmeEncontrado = filmesJson.filter(filme => filme.Title.includes(tituloReq))
    res.status(200).send(filmeEncontrado)
}

const getByGenre = (req, res) => {
    let generoReq = req.query.genre
    let filmeEncontrado = filmesJson.filter(filme => filme.Genre.includes(generoReq))
    res.status(200).send(filmeEncontrado)
}

const postMovie = (req, res) => {
    let tituloReq = req.body.Title
    let yearReq = req.body.Year
    let ratedReq = req.body.Rated
    let releasedReq = req.body.Released
    let runtimeReq = req.body.Runtime
    let genreReq = req.body.Genre
    let directorReq = req.body.Director
    let writerReq = req.body.Writer
    let actorsReq = req.body.Actors
    let plotReq = req.body.Plot
    let languageReq = req.body.Language
    let countryReq = req.body.Country
    let awardsReq = req.body.Awards

    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: tituloReq,
        year: yearReq,
        rated: ratedReq,
        released: releasedReq,
        runtime: runtimeReq,
        genre: genreReq,
        director: directorReq,
        writer: writerReq,
        actors: actorsReq,
        plot: plotReq,
        language: languageReq,
        country: countryReq,
        awards: awardsReq
    }
    filmesJson.push(novoFilme)

    res.status(201).json(
        [{
            "mensagem": "filme cadastrado com sucesso",
            novoFilme
        }])
}

const putByIdFilme = (req, res) => {
    const idReq = req.params.id
    let filmeReq = req.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idReq)
    filmesJson.splice(indexEncontrado, 1, filmeReq)
    res.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                filmeReq
            }
        ]
    )
}

const patchTitleFilme = (req, res) => {
    let idReq = req.query.id
    let filmeReq = req.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idReq)
    filmesJson.splice(indexEncontrado, 1, filmeReq)
    res.status(200).json(
        [
            {
                "mensagem": "Filme atualizado com sucesso",
                "filme": filmeReq
            }
        ]
    )
}

const deletaFilme = (req, res) => {
    const idReq = req.params.id
    const indexFilme = filmesJson.findIndex(filme => filme.id == idReq)

    filmesJson.splice(indexFilme, 1)

    res.status(200).json([
        {
            "message": "Filme deletado com sucesso",
            "filme": idReq
        }
    ])
}

//fiquei em dúvida de como iria construir patchUpSerie para diferenciar do putByIdSerie, pq teoriacamente em patch poderia mudar só uma ou algumas propriedades, mas o quem que escolhe qual mudar, eu ou o usuario? ou posso escolher arbitrariamente?? Outra questão, se é pra mudar tudo o put faz isso, se for pra mudar só uma propriedade o put where também faz. Como escolher entre os dois, patch ou put? :/  E como ficaria a lógica aqui no controller, pensando sobre acredito (e espero kk) que qd estudarmos sql vai ficar mais facil visualizar isso

const patchUpFilme = (req, res) => {
    const idReq = req.params.id
    let filmeReq = req.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idReq)
    filmesJson.splice(indexEncontrado, 1, filmeReq)
    res.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                "filme": filmeReq
            }
        ]
    )
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    postMovie,
    putByIdFilme,
    patchTitleFilme,
    deletaFilme,
    patchUpFilme
}
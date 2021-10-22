const seriesJson = require("../models/series.json")

const getAllSeries = (req, res) => {
    const { id, title, genre } = req.query
    let filtrados = seriesJson

    if (id) {
        filtrados = filtrados.find(series => {
            return series.id == id
        })
    }

    if (title) {
        filtrados = filtrados.filter(series => {
            return series.title.includes(title)
        })
    }

    if (genre) {
        filtrados = filtrados.filter(series => {
            return series.genre.includes(genre)
        })
    }

    // if(id ==! undefined && title !== undefined){
    //     res.status(400).send({message : "Busca invalida"})
    // }

    // console.log(filtrados);

    if (filtrados == undefined) {
        res.status(404).send({ message: "Não foi possivel encontrar a serie" })
    }

    res.status(200).send(filtrados)

}

const createSerie = (req, res) => {
    let { title, totalSeasons, genre, writers, poster, actors, ratings } = req.body
    let found = req.body

    let novaSerie = {
        id: (seriesJson.length) +1,
        title: title,
        totalSeasons: totalSeasons,
        genre: genre,
        writers: writers,
        poster: poster,
        actors: actors,
        ratings: ratings
    }
    seriesJson.push(novaSerie)

    res.status(201).json([{
        "mensagem": "Serie cadastrado com sucesso", novaSerie
    }])
}

module.exports = {
    getAllSeries,
    createSerie
}
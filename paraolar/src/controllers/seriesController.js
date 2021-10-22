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

    let novaSerie = {
        id: (seriesJson.length) + 1,
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

const putByIdSeries = (req, res) => {
    const { id } = req.params
    let serieAtualizada = req.body
    let indexEncontrado = seriesJson.findIndex(serie => serie.id == id)
    seriesJson.slice(indexEncontrado, 1, serieAtualizada)
    res.status(200).send({ message: "Serie atualizada com sucesso." })
}

const patchNovoTituloSerie = (req, res) => {
    let idReq = req.query
    let novoTitulo = req.body
    let indexEncontrado = seriesJson.findIndex(serie => serie.id == idReq)
    seriesJson.slice(indexEncontrado, 1, novoTitulo)
    res.status(200).send({ messagem: "Titulo atualizado." })
}
//fiquei em dúvida de como iria construir patchUpSerie para diferenciar do putByIdSerie, pq teoriacamente em patch poderia mudar só uma ou algumas propriedades, mas o quem que escolhe qual mudar, eu ou o usuario? ou posso escolher arbitrariamente?? Outra questão, se é pra mudar tudo o put faz isso, se for pra mudar só uma propriedade o put where também faz. Como escolher entre os dois, patch ou put? :/  E como ficaria a lógica aqui no controller, pensando sobre acredito (e espero kk) que qd estudarmos sql vai ficar mais facil visualizar isso

const patchSerie = (req, res) => {
    const { id } = req.params
    let serieReq = req.body
    let indexEncontrado = seriesJson.findIndex(serie => serie.id == id)
    seriesJson.splice(indexEncontrado, 1, serieReq)
    res.status(200).json({ message: "Serie atualizada" })
}

const deletaSerie = (req, res) => {
    const idReq = req.params.id
    const indexSerie = seriesJson.findIndex(serie => serie.id == idReq)

    seriesJson.splice(indexSerie, 1)

    res.status(200).json([
        {
            "message": "Serie deletada com sucesso",
            "filme": idReq
        }
    ])
}



module.exports = {
    getAllSeries,
    createSerie,
    putByIdSeries,
    patchNovoTituloSerie,
    patchSerie,
    deletaSerie
}
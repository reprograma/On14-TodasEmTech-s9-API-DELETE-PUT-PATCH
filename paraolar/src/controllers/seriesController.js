const seriesJson = require("../models/series.json")

const getAllSeries = (req, res) => {
    const { id, title, genre } = req.query
    let filtrados = seriesJson

    if (id) {
        filtrados = filtrados.find(series => series.id == id)
    }

    if(title){
        filtrados = filtrados.filter(series => {
            return series.title.includes(title)
        })
    }

    if(genre){
        filtrados = filtrados.filter(series => {
            return series.genre.includes(genre)
        })
    }

    // if(id ==! undefined && title !== undefined){
    //     res.status(400).send({message : "Busca invalida"})
    // }

    console.log(filtrados);
    
    if(filtrados == undefined){
        res.status(404).send({message: "Não foi possivel encontrar a serie"})
    }

    res.status(200).send(filtrados)
    
}

module.exports = {
    getAllSeries
}
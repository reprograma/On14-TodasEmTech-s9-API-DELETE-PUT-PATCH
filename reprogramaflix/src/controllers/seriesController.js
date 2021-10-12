const seriesData = require('../models/series.json');

const getAll = (req,res) =>{
    res.status(200).send(seriesData)
}

// app.get('/series', (req,res) =>{
//     let idRequest = req.query.id
//     let serieEscolhida = seriesData.filter((serie) => {serie.id == idRequest})

//     res.status(200).send(serieEscolhida)
// })

module.exports = {
    getAll
}
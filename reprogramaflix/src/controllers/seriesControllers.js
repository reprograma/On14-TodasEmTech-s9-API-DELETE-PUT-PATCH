const seriesJson = require("../models/series.json")

const getAll = (req, res) =>{
    res.status(200).send(seriesJson)
}

module.exports = {
    getAll
}
// app.get("/series", (req, res)=>{
//     let idRequest = req.query.id
//     let idEncontrado = seriesJson.find(series => series.id == idRequest)
//     res.status(200).send(idEncontrado)
// })
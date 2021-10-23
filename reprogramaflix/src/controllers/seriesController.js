const seriesJson = require("../models/series.json")

// app.get("/series", (request, response)=>{
//     let idRequest = request.query.id
//     let idEncontrado = seriesJson.find(serie => serie.id == idRequest)

//     response.status(200).send(idEncontrado)
// })

const getAll = (req, res) =>{
    res.status(200).send(seriesJson)
}
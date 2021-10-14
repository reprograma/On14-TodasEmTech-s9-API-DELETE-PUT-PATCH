const seriesJson = require("../models/series.json")

app.get("/series", (req, res)=>{
    let idRequest = req.query.id
    let idEncontrado = seriesJson.find(series => series.id == idRequest)
    res.status(200).send(idEncontrado)
})
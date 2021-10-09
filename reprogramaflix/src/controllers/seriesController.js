const serieJson = require("../models/series.json")


app.get("/series", (request, response) => {
    let idRequest = request.query.id
    let idEcontrado = serieJson.find(serie => serie.id == idRequest)

    response.status(200).send(idEcontrado)
})
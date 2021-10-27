//controller vai ter a logica

//chamando o json de series
const seriesJson = require("../models/series.json")


//função getAll retorna todos as series
const getAll = (req, res) => {

    res.status(200).send(seriesJson)

}

//exportando todas os funções do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,
    
}

const seriesJson = require("../models/series.json")
const filmesJson = require("../models/filmes.json")

 const getAll = (request,response) =>{

    response.status(200).json([
    {
        series: seriesJson,
        filmes: filmesJson
    }
    ])}


module.exports = {getAll}
   
   


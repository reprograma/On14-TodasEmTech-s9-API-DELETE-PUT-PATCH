


//AQUI FICA A LÓGICA


const seriesJson = require("../models/series.json") //Importar o json de series 

 const getAll = (request,response)=>{   //Pode abreviar req res
    
    response.status(200).send(seriesJson)
    
}
const getIdseries = (request, response)=>{
    let idRequest = request.params.id
    let idEncontrado = seriesJson.find(serie => serie.id == idRequest)
    response.status(200).send(idEncontrado)
}
module.exports = {
    getAll,
    getIdseries
}
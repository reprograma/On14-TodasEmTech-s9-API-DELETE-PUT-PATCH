const seriesJson = require("../models/series.json")


const getAll = (req, res)=>{
    res.status(200).send(seriesJson)
}

const getIdseries =(request,response)=>{
    let idRequest =request.query.id
    let idEncontrado = seriesJson.find(serie => serie.id == idRequest)
    response.status(200).send(idEncontrado)
}

module.exports ={
    getAll,getIdseries
    
}
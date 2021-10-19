const filmeJson = require("../models/filmes.json")


const getAllFilme = (request, response)=>{
    response.status(200).send(filmeJson)
}

const getIdFilme = (request, response)=>{
    
    let filmeChamado = request.query.id
    let filmeAchado = filmeJson.find(filme => filme.id == filmeChamado)
    
    response.status(200).send(filmeAchado)
}

module.exports = {
    getIdFilme,
    getAllFilme
}

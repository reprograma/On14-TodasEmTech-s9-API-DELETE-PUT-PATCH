const { query } = require("express")
const filmesJson = require("../models/filmes.json")


const getAll = (req, res) => {
    res.status(200).json([
        {
            "filmes": filmesJson,
        }
    ])
}


const getById = (req, res) => {
    let idRequest = req.params.id
    let idEnconstrado = filmesJson.find(filme => filme.id == idRequest)
    
    if(idEnconstrado == undefined){
        res.status(404).send({message:`Infelizmente, não temos o filme ${idRequest} disponível!`})
    }

    res.status(200).send(idEnconstrado)

}


const getByTitle = (request, response) => {
    let titleRequest = request.query.titulo.toLocaleLowerCase();
    let titleEncontrado = filmesJson.filter(
        filmes => filmes.Title.toLocaleLowerCase().includes(titleRequest)
    );


    response.status(200).send(titleEncontrado)

}






module.exports = {
    getAll,
    getById,
    getByTitle
}
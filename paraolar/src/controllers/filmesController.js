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


const getByTitle = (req, res) => {
    let tituloRequest = req.query.titulo.toLocaleLowerCase()
    console.log(req.query.titulo)
    
    let tituloEncontrado = filmesJson.filter(
        filme => filme.Title.toLocaleLowerCase().includes(tituloRequest)
    )
    if (tituloEncontrado == undefined){
        res.status(404).send ({message:`Filme ${tituloRequest} não cadastrado.`})
    }

    res.status(200).send(tituloEncontrado)

}






module.exports = {
    getAll,
    getById,
    getByTitle
}
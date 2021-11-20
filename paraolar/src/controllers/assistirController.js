const FilmesSchema = require("../models/filmesSchema")
const SeriesSchema = require("../models/seriesSchema")
const mongoose = require('mongoose')


//GET
const getAll = async (req, res) => {
    try{
        const series = await FilmesSchema.find()
        const filmes = await SeriesSchema.find()

        res.status(200).send([series, filmes])
    
    } catch (erro){
        res.status(500).json({
            mensagem: error.message
        })
    }
}

module.exports = {
    getAll
}
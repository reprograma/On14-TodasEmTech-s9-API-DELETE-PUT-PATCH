const SeriesSchema = require("../models/seriesSchema")
const mongoose = require ("mongoose")

//GET/series
const getAll = async (req, res) => {
    try {
        const series = await SeriesSchema.find()
        res.status(200).json(series) 
    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

//GET/series{genero}
const getGenre = async (req, res) => {
    try{
        const serieFound = await SeriesSchema.find({
            genre: new RegExp(req.query.genre, "i")
        })

        if (serieFound){
            res.status(200).json({
                message: `Series de ${req.query.genre}:`,
                serieFound
            })
        }
    } catch (error) {
        res.status(500).json ({
            message: error.message
        })
    }
}




//GET/series{titulo}
const getTitle = async (req, res) => {
    try{
        const serieFound = await SeriesSchema.find({title: new RegExp (req.query.title, "i")})
        
        if(serieFound){
            res.status(200).json({serieFound})  
        }else {
            res.status(404).json({
              message: "Serie não cadastrada."
            });
        }
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}




//GET/series{id}
const getById = async (req, res) => {
    try {
        const serieFound = await SeriesSchema.findById(req.params.id)
        if (serieFound) {
            res.status(200).send(serieFound)
        }else{
            res.status(404).json({
              message: "Serie não localizada."
            });
        }
    } catch (error) {
        res.status(500).json({
            mensagem: error.message 
        })
    } 

}
    

//POST/series/criar
const createSerie = async (req, res) => {
        try{
        const newSerie = new SeriesSchema({
            _id: mongoose.Types.ObjectId(),
            title: req.body.title,
            totalSeasons: req.body.totalSeasons,
            genre: req.body.genre,
            writers: req.body.writers,
            poster: req.body.poster,
            actors: req.body.actors,
            ratings: req.body.ratings,
            })
    
        const savedSerie = await newSerie.save()
            res.status(201).json([{
                message: `Serie ${newSerie.title} criada com sucesso!`,
                savedSerie
             }])
        }catch (error) {
            res.status(500).json ({
                message: error.message
            })
        }
    }


//PATCH/series/update/{id}
const updateSeriesById = async (req, res) => {
    try {
        const serieFound = await SeriesSchema.findById(req.params.id)
        if(serieFound) {
        serieFound.title = req.body.title || serieFound.title;
        serieFound.totalSeasons = req.body.totalSeasons || serieFound.totalSeasons;
        serieFound.genre = req.body.genre || serieFound.genre;
        serieFound.writers = req.body.writers || serieFound.writers;
        serieFound.poster = req.body.poster || serieFound.poster;
        serieFound.actors = req.body.actors || serieFound.actors;
        serieFound.ratings = req.body.ratings || serieFound.ratings;
        }

        const savedSerie = await serieFound.save()
        res.status(200).json({
            message: `Serie ${serieFound.title} atualizada com sucesso!`,
            savedSerie
        })
        
    } catch (error) {
        res.status(500).json({
            mensagem: error.message 
        })
    } 
}



//DELETE/series/deletar/{id}
const deleteSerie = async (req, res) => {
        try {
            const serieFound = await SeriesSchema.findById(req.params.id)
            await serieFound.delete()
            res.status(200).json({
                mensagem: `Serie ${serieFound.title} deletada com sucesso.`
            })
    
        } catch (error) {
            res.status(500).json({
                mensagem: error.message 
            })
        } 
    }


module.exports ={
    getAll,
    getGenre,
    getTitle,
    getById,
    createSerie,
    updateSeriesById,
    deleteSerie
}

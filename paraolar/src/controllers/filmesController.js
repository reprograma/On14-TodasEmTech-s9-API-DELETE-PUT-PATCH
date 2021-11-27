const FilmesSchema = require("../models/filmesSchema")
const mongoose = require('mongoose')


//GET
const getAll = async (req, res) => {
    try {
        const filmes = await FilmesSchema.find()
        res.status(200).json(filmes) 
    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}



//GET
const getByGenre = async (req, res) => {
    try{
        const movieFound = await FilmesSchema.find({
            Genre: new RegExp(req.query.Genre, "i")
        })

        if (movieFound){
            res.status(200).json({
                message: `Filmes de ${req.query.Genre}:`,
                movieFound
            })
        }
    } catch (error) {
        res.status(500).json ({
            message: error.message
        })
    }
}
    

//POST
const createMovie = async (req, res) => {
    try{
    const newMovie = new FilmesSchema({
        _id: mongoose.Types.ObjectId(),
        Title: req.body.Title,
        Year: req.body.Year,
        Rated: req.body.Rated,
        Released: req.body.Released,
        Runtime: req.body.Runtime,
        Genre: req.body.Genre,
        Director: req.body.Director,
        Writer: req.body.Writer,
        Actors: req.body.Actors,
        Plot: req.body.Plot,
        Language: req.body.Language,
        Country: req.body.Country,
        Awards: req.body.Awards,
        })

    const savedMovie = await newMovie.save()
        res.status(201).json([{
            message: `Filme criado com sucesso!`,
            savedMovie
         }])
    }catch (error) {
        res.status(500).json ({
            message: error.message
        })
    }
}



//GET
const getByTitle = async (req, res) => {
    try{
        const movieFound = await FilmesSchema.find({Title: new RegExp (req.query.Title, "i")})
        
        if(movieFound){
            res.status(200).json({movieFound})  
        }else {
            res.status(404).json({
              message: "Filmes não cadastrado."
            });
        }
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


//DELETE
const deleteMovie = async (req, res) => {
    try {
        const movieFound = await FilmesSchema.findById(req.params.id)
        await movieFound.delete()
        res.status(200).json({
            mensagem: `Filme ${movieFound.Title} deletado com sucesso.`
        })

    } catch (error) {
        res.status(500).json({
            mensagem: error.message 
        })
    } 
}






//GET
const getById = async (req, res) => {
    try {
        const movieFound = await FilmesSchema.findById(req.params.id)
        if (movieFound) {
            res.status(200).send(movieFound)
        }else{
            res.status(404).json({
              message: "Filmes não localizado."
            });
        }
    } catch (error) {
        res.status(500).json({
            mensagem: error.message 
        })
    } 

}
    


/*PATCH/filmes/update/{id}*/
const updateMoviesId = async (req, res) => {
    try {
        const movieFound = await FilmesSchema.findById(req.params.id)
        if(movieFound) {
        movieFound.Title = req.body.Title || movieFound.Title;
        movieFound.Year = req.body.Year || movieFound.Year;
        movieFound.Rated = req.body.Rated || movieFound.Rated;
        movieFound.Released = req.body.Released || movieFound.Released;
        movieFound.Runtime = req.body.Runtime || movieFound.Runtime;
        movieFound.Genre = req.body.Genre || movieFound.Genre;
        movieFound.Director = req.body.Director || movieFound.Director;
        movieFound.Writer = req.body.Writer || movieFound.Writer;
        movieFound.Actors = req.body.Actors || movieFound.Actors;
        movieFound.Plot = req.body.Plot || movieFound.Plot;
        movieFound.Language = req.body.Language || movieFound.Language;
        movieFound.Country = req.body.Country || movieFound.Country;
        movieFound.Awards = req.body.Awards || movieFound.Awards;
        }

        const savedMovie = await movieFound.save()
        res.status(200).json({
            message: `Filme ${movieFound.Title} atualizado com sucesso!`,
            savedMovie
        })
        
    } catch (error) {
        res.status(500).json({
            mensagem: error.message 
        })
    } 
}



module.exports = {
    getAll,
    getByGenre,
    createMovie,
    getByTitle,
    deleteMovie,
    getById,
    updateMoviesId,
}
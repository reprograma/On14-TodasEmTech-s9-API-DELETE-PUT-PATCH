let moviesData = require('../models/movies.json');

const getMovies = (req,res) => {
    res.status(200).send(moviesData)
}

const getMovieById = (req,res) => {
    idRequest = req.params.id
    movieById = moviesData.find( movie => movie.id == idRequest)
    res.status(200).send(movieById)
}

const getMovieByTitle = (req,res) => {
    titleRequested = req.query.Title.toLocaleLowerCase()
    
    movieRequested = moviesData.filter(
         movie => movie.Title.toLocaleLowerCase().includes(titleRequested))
    
    res.status(200).send(movieRequested)
}

const getMoviesByGenre = (req,res) => {
    genreRequested = (req.query.Genre).toLocaleLowerCase()

    moviesByGenre = moviesData.filter( 
        movie => movie.Genre.toLocaleLowerCase().includes(genreRequested))

    res.status(200).send(moviesByGenre)
}

const createMovie = (req,res) => {
    newMovie = ({
        id:moviesData.length + 1,
        Title: req.body.Title,
        Year: req.body.Year,
        Rated:req.body.Rated,
        Released: req.body.Released,
        Runtime: req.body.Runtime,
        Genre:req.body.Genre,
        Director: req.body.Director,
        Writer: req.body.Writer,
        Actors: req.body.Actors,
        Plot: req.body.Plot,
        Language: req.body.Language,
        Country: req.body.Country,
        Awards: req.body.Awards
    })

    moviesData.push(newMovie)

    res.status(201).json({
        "Message":"Movie successfully added",
        "Movie":newMovie
    })
}

const updateTitle = (req, res) => {
    idRequest = req.query.id
    titleUpdate = req.query.Title

    movieToBeUpdated = moviesData.find(movie => movie.id == idRequest)

    movieToBeUpdated.Title = titleUpdate

    res.status(200).json(
        {"Message":"Title updated successfully",
        "Movie":movieToBeUpdated})
}

const updateAnything = (req,res) => {
    idRequest = req.params.id

    infoUpdate = req.body

    movieToBeUpdated = moviesData.find( movie => movie.id == idRequest)

    infoUpdate.id = idRequest
    

    Object.keys(movieToBeUpdated).forEach( key => {
        if( infoUpdate[key] == undefined){
            movieToBeUpdated[key] = movieToBeUpdated[key]
        }else{
            movieToBeUpdated[key] = infoUpdate[key]
        }
        
    })
    res.status(200).json({
        "Message":"Movie updated successfully",
        "Movie": movieToBeUpdated   
    })
}

const updateMovie = (req, res) => {
    idRequest = req.params.id
    infoUpdate = req.body

    infoUpdate.id = idRequest

    indexMovie = moviesData.findIndex(movie => movie.id == idRequest)

    moviesData.splice(indexMovie, 1, infoUpdate)

    res.status(200).json({
        "Message": "Movie updated successfully",
        "Movie":infoUpdate
    })
}

const deleteMovie = (req, res) => {
    idRequest = req.params.id;
    
    indexMovie = moviesData.findIndex(movie => movie.id == idRequest)
    
    movieDeleted = moviesData[indexMovie]
    
    moviesData.splice(indexMovie , 1)

    res.status(200).json({
        "Message": "Movie deleted successfully",
        "Movie": movieDeleted
    })
    
}

module.exports = {
    getMovies,
    getMovieById,
    getMovieByTitle,
    getMoviesByGenre,
    createMovie,
    updateTitle,
    updateAnything,
    updateMovie,
    deleteMovie,
}
const { response, request } = require("express")
const seriesJson = require("../models/series.json")

//GET/series
const getAll = (require, response) => {
    response.status(200).json (
        [{
            "series": seriesJson
        }]
    )
}


//GET/series{genero}
const getGenre = (request, response) => {
    const genreRequest = request.query.genero.toLocaleLowerCase()
    
    const seriesFilters = seriesJson.filter(serie =>
        serie.genre.toString().toLocaleLowerCase().includes(genreRequest)
    )

    response.status(200).send(seriesFilters)
}

//GET/series{titulo}




//GET/series{id}



//POST/series/criar
const createSerie = (request, response) => {

}



//PUT/series/update/{id}

//PATCH/series/updateTitle?/{id}
//PATCH/series/update/{id}

//DELETE/series/deletar/{id}


module.exports ={
    getAll,
    getGenre,
    

}
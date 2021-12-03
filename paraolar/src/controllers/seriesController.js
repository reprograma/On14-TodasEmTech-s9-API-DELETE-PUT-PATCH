const seriesJson = require("../models/series.json")

const getAll = (request, response) => {
    response.status(200).send(seriesJson)
    
};


const getByTitle = (request, response) => {
    let titleRequest = request.query.titulo

    let titleFind = seriesJson.filter(serie =>
      serie.Title.toLocaleLowerCase().includes(titleRequest)
    );
  
    response.status(200).send(titleFind);
};


const getById = (request, response) => {

let idRequest = request.params.id

let idEncontrado = seriesJson.find(serie => serie.id == idRequest)
    response.status(200).send(idEncontrado)
};

const getByGenre = (request, response) => {
    let genreRequest = request.query.genero
  
    let genreFind = seriesJson.filter(serie =>
      serie.Genre.toLocaleLowerCase().toString().includes(genreRequest)
    );
  
    response.status(200).send(genreFind);
  };


const createSeries = (request, response) => {
let body = request.body

let newSerie = {

    id: (seriesJson.length) + 1,
    title: body.title,
    totalSeasons: body.totalSeasons,
    genre: body.genre,
    writers: body.writers,
    poster: body.poster,
    actors: body.actors,
    ratings: body.ratings
}


seriesJson.push(newSerie)
    response.status(201).json(
        [
            {
                "mensagem": "serie cadastrada com sucesso",
                newSerie
            }
        ]
)
}


const updateTitle = (request, response) => {
    
    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    serieFiltrado = seriesJson.find(serie => serie.id == idRequest)

    serieFiltrado.Title = novoTitulo
        response.status(200).json(
            [
                {
                    "mensagem": "serie atualizada com sucesso",
                    serieFiltrado
                }
            ]
            )


}


const updateSeries = (request, response) => {

const idRequest = request.params.id
let body = request.body

let newSerie = {

    id: (seriesJson.length) + 1,
    title: body.title,
    totalSeasons: body.totalSeasons,
    genre: body.genre,
    writers: body.writers,
    poster: body.poster,
    actors: body.actors,
    ratings: body.ratings
}


const indexEncontrado = seriesJson.findIndex(serie => serie.id == idRequest)

seriesJson.splice(indexEncontrado, 1, newSerie)
    response.status(200).json(
        [
            {
                "mensagem": "serie atualizada com sucesso",
                newSerie
            }
        ]
    )

}


const updateId = (request, response) => {
    const idRequest = request.params.id;
    let newTitle = request.body.Title;
  
    let serieFind = seriesJson.find(serie => serie.id == idRequest);
  
    serieFind.Title = newTitle;
  
    res.status(200).json([
      {
        "mensagem": "Atualizada com sucesso",
        serieFind
      }
    ])
  };


const deleteSeries = (request, response) => {
    let idRequest = request.params.id;
    let deleteSerie = seriesJson.findIndex(
      series => series.id == idRequest
    )
    console.log(deleteSerie)
  
    seriesJson.splice(deleteSerie, 1);
    response.status(200).json([{
      "mensagem": "serie deletada com sucesso",
      seriesJson
    }])
  }


module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createSeries,
    updateTitle,
    updateId,
    updateSeries, 
    deleteSeries
}

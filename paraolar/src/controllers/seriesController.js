const seriesJson = require("../models/series.json");


const getAll = (request, response) => {
  response.status(200).send(seriesJson);
}

const getByTitle = (request, response) => {
 let titleRequest = request.query.titulo.toLocaleLowerCase()
 let seriesEncontrado = seriesJson.filter(
   series => series.title.toLocaleLowerCase().includes(titleRequest)
   )

 response.status(200).send(seriesEncontrado)
}

const getByGenre = (request, response) => {
  let genreRequest = request.query.genero.toLocaleLowerCase();
  let seriesEncontrado = seriesJson.filter(
    series => series.genre.toLocaleLowerCase == genreRequest
  )

  response.status(200).send(seriesEncontrado);
}

const getById = (request, response) => {
  let idRequest = request.params.id
  let idEncontrado = seriesJson.find(series => series.id == idRequest);
  
  response.status(200).send(idEncontrado);
}

const createSerie = (request, response) => {
  let bodyRequest = request.body;
  
  let newSerie = {
    id: (seriesJson.length) + 1,
    title: bodyRequest.title,
    totalSeasons: bodyRequest.totalSeasons,
    genre: bodyRequest.genre,
    writers: bodyRequest.writers,
    poster: bodyRequest.poster,
    actors: bodyRequest.actors,
    ratings: bodyRequest.ratings
  }
  
  seriesJson.push(newSerie)
  response.status(201).json([{ "mensagem": "cadastrado com sucesso", newSerie}])
}

const updateTitle = (request, response)=>{
  const idRequest = request.params.id 
  let novoTitulo = request.body.title

  serieFiltrada = seriesJson.find(serie => serie.id == idRequest)

  serieFiltrada.title = novoTitulo

  response.status(200).json([{
              "mensagem": "serie atualizado com sucesso",
              serieFiltrada
          }])
}

const deleteSerie = (request, response) => {
  let idRequest = request.params.id;
  let indexRequested = seriesJson.findIndex(
    series => series.id == idRequest
  )

  seriesJson.splice(indexRequested, 1);
  response.status(200).json([{
    "mensagem": "Serie deletado com sucesso",
    seriesJson
  }])
}

module.exports = {
  getAll,
  getByTitle,
  getById,
  getByGenre,
  createSerie,
  updateTitle,
  deleteSerie
}
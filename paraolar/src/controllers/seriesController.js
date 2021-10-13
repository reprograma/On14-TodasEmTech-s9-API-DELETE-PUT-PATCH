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

module.exports = {
  getAll,
  getByTitle,
  getById,
  getByGenre,
  createSerie
}
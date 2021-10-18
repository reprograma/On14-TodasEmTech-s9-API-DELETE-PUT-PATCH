const seriesJson = require("../models/series.json");


const getSeries = (request, response) => {
  const serieRequest = request.query;
  let keySelecionada = Object.keys(serieRequest);

  if(keySelecionada == "") {
    response.status(200).send(seriesJson)
  } else {
 
  let valueRequest = request.query[keySelecionada].toLocaleLowerCase();
  

  let seriesEncontrado = seriesJson.filter(
    series => (series[keySelecionada]).toString().toLocaleLowerCase().includes(valueRequest)
    )
 
  response.status(200).send(seriesEncontrado) }

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
    series => (series.genre).toString().toLocaleLowerCase().includes(genreRequest)
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

  let serieFiltrada = seriesJson.find(serie => serie.id == idRequest)

  serieFiltrada.title = novoTitulo

  response.status(200).json([{
              "mensagem": "serie atualizado com sucesso",
              serieFiltrada
          }])
}

const updateAnything = (request, response) => {
  const idRequest = request.params.id;
  let bodyRequest = request.body;

  let serieFilter = seriesJson.find(serie => serie.id == idRequest);

  bodyRequest.id = idRequest;

  Object.keys(serieFilter).forEach((chave) => {
    if(bodyRequest[chave] != undefined) {
       serieFilter[chave]  = bodyRequest[chave]
      }
  })

  response.status(200).json([{
    "mensagem": "Serie atualizada", serieFilter
  }])

}

const updateSerie = (request, response) => {
  const bodyRequest = request.body
  const idRequest = request.params.id 

  const newSerie = {
      id: idRequest,
      title: bodyRequest.title,
      totalSeasons: bodyRequest.totalSeasons,
      genre: bodyRequest.genre,
      writers: bodyRequest.writers,
      poster: bodyRequest.poster,
      actors: bodyRequest.actors,
      ratings: bodyRequest.ratings
    }

    const indexSelecionado = seriesJson.findIndex(series => series.id == idRequest);
    seriesJson.splice(indexSelecionado, 1, newSerie);
    response.status(200).json([{
      "mensagem": "Serie atualizada com sucesso",
      newSerie
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
  getSeries,
  getById,
  createSerie,
  updateTitle,
  deleteSerie,
  updateSerie,
  updateAnything
}
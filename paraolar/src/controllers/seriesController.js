// Controler vai conter a logica de cada Json
const seriesJson = require('../models/series.json')

const getAll = (request, response) => {
  response.status(200).send(seriesJson)
}

/**
 * quqndo  voce  utiizar parametro para bater na rota  vc sempre tem que por no
 *(Post[Parames{kel"id"  VALUE"4"}]) so assim voce vai encontrar o que procura   */

/*app.get("/series", (request, response)=>{
  let idRequest = request.query.id
  let idEncontrado = seriesJson.find(serie => serie.id == idRequest)
  response.status(200).send(idEncontrado)
})*/
const getByGrender = (request, response)=>{
  const generoRequest = request.query.genero// requerindo os generos 
  
  const serisFiltro  = seriesJson.filter(serie => serie.Genre.toLocaleLowerCase().toString().includes(generoRequest))
  response.status(200).send(serisFiltro)

}

module.exports = {
  getAll,
  getByGrender
}

// para trabalhar o body aprecisamos trasformalo em jsom  este ato de trasformação deste tipo de dado é o parse 
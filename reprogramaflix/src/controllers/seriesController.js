//chamando o json de series
const seriesJson = require("../models/filmes.json");

const getAll = (req, res) => {
  res.status(200).send(seriesJson)
}

  const getById = (request, response) => {
  let idRequest = request.query.id;
  let idEncontrado = seriesJson.find((serie) => serie.id == idRequest);
  response.status(200).send(idEncontrado);
};

const createSerie = (request, response) => {
  let body = request.body

  let novaSerie = {
    id: (seriesJson.length)+1,
    Title: body.Title,
    Plot: body.Plot
  }

  seriesJson.push(novaSerie)

  response.status(201).json(
    [
      {
        "mensagem":"Serie cadastrada com sucesso",
        novaSerie
      }
    ]
  )

}

module.exports = {
  getAll,
  getById,
  createSerie

}
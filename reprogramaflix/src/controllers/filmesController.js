const filmesJson = require("../models/filmes.json");

const getAll = (request, response) => {
  response.status(200).json([
    {
      filmes: filmesJson,
      series: seriesJson,
    },
  ]);

};
const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.find((filme) => filme.id == idRequest);

  response.status(200).send(idEncontrado);
}

module.exports = {
    getAll,
    getById
}
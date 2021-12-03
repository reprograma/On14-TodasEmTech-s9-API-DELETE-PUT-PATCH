const filmesJson = require("../models/filmes.json");
const seriesJson = require("../models/series.json");

const listarJson = (request, response) => {
  response.status(200).json([filmesJson, seriesJson]);
};

module.exports = {
  listarJson
}
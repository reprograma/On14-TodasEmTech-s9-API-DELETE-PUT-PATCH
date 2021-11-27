const filmesJson = require("../models/filmes.json");
const seriesJson = require("../models/series.json");

const listarJson = (req, res) => {
  res.status(200).json([filmesJson, seriesJson]);
};

module.exports = {
  listarJson
};
const movies = require("../models/filmes.json")
const series = require("../models/series.json")

const searchAll = (request, response) => {
    try {
      response.status(200).json([
        {
          assistir_Filmes: movies,
          assistir_Series: series
        },
      ]);
    } catch (error) {
      response.status(404).json([
        {
          message: "Erro, não foi possível listar filmes e séries.",
        },
      ]);
    }
  };

  module.exports = {
      searchAll
    }
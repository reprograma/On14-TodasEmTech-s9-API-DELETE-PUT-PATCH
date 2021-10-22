const seriesJson = require("../models/series.json");

const getAll = (request, response) => {
  try {
    response.status(200).json(seriesJson);
  } catch (error) {
    response.status(404).json([
      {
        message: "Erro, a lista de séries não foi encontrada.",
      },
    ]);
  }
};

const getByGenre = (request, response) => {
  try {
    const genreRequest = request.query.genre;
    const seriesFiltered = seriesJson.filter((series) =>
      series.genre.toString().includes(genreRequest)
    );

    if (seriesFiltered.length === 0) {
      response.status(404).send([
        {
          message: "Não foi possível encontrar este gênero.",
        },
      ]);
    }
    response.status(200).send(seriesFiltered);
  } catch (error) {
    response.status(404).json([
      {
        message: "Erro, a lista de séries não foi encontrada.",
      },
    ]);
  }
};

module.exports = {
  getAll,
  getByGenre,
};

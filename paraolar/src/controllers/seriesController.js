const seriesJson = require("../models/series.json");

const searchAll = (request, response) => {
  response.status(200).json([
    {
      message: seriesJson,
    },
  ]);
};

const searchTitle = (request, response) => {
  let titleReq = request.query.title.toLocaleLowerCase();
  let titleFound = seriesJson.filter((series) =>
    series.title.toLocaleLowerCase().includes(titleReq)
  );

  response.status(200).send(titleFound);
};

const searchGenre = (request, response) => {
  let genreReq = request.query.genre;
  let genreFound = seriesJson.filter((series) =>
    series.genre.toString().includes(genreReq)
  );

  response.status(200).send(genreFound);
};

const createSeries = (request, response) => {
  const body = request.body;

  const newSeries = {
    id: seriesJson.length + 1,
    title: body.title,
    totalSeasons: body.totalSeasons,
    genre: body.genre,
  };
  seriesJson.push(newSeries);

  response.status(200).json([
    {
      message: "Série cadastrada com sucesso.",
      newSeries,
    },
  ]);
};

const updateSeries = (request, response) => {
  const idRequest = request.params.id;
  const seriesRequest = request.body;
  let indexFound = seriesJson.findIndex((series) => series.id == idRequest);

  seriesJson.splice(indexFound, 1, seriesRequest);

  response.status(200).json([
    {
      message: "Séries atualizadas com sucesso",
      seriesJson,
    },
  ]);
};

const updateTitle = (request, response) => {
  const idReq = request.params.id;
  const newTitle = request.body.title;
  let seriesFound = seriesJson.find((series) => series.id == idReq);
  seriesFound.title = newTitle;

  response.status(200).json([
    {
      message: "Série atualizada com sucesso!",
      seriesFound,
    },
  ]);
};

const deleteSeries = (request, response) => {
  const idRequest = request.params.id;
  const indexFound = seriesJson.findIndex((series) => series.id == idRequest);
  seriesJson.splice(indexFound, 1);

  response.status(200).json([
    {
      message: "Séries deletadas com sucesso!",
      deleted: "idRequest",
      seriesJson,
    },
  ]);
  response.status(201).send(seriesJson);
};

const updateAll = (request, response) => {
  const idRequest = request.params.id;
  let seriesRequest = request.body;
  const seriesFound = seriesJson.find((series) => series.id == idRequest);

  seriesRequest.id = idRequest;

  Object.keys(seriesFound).map((keys) => {
    if (seriesRequest[keys] == undefined) {
      seriesRequest[keys] = seriesFound[keys];
    } else {
      seriesFound[keys] = seriesRequest[keys];
    }
  });

  response.status(200).json([
    {
      message: "Séries atualizadas com sucesso!",
      seriesFound,
    },
  ]);
};

const searchId = (request, response) => {
  let idRequest = request.params.id;
  let idFound = seriesJson.find((series) => series.id == idRequest);
  response.status(200).send(idFound);
};

module.exports = {
  searchAll,

  searchTitle,
  searchGenre,
  createSeries,
  updateSeries,
  updateTitle,
  deleteSeries,
  updateAll,
  searchId,
};

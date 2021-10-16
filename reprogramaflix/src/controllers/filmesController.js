const moviesJson = require("../models/filmes.json");

const getAll = (request, response) => {
  response.status(200).json([
    {
      movies: moviesJson,
    },
  ]);
};

const getById = (request, response) => {
  let idRequest = request.params.id;
  let moviesFound = moviesJson.find((filme) => filme.id == idRequest);
  response.status(200).send(moviesFound);
};

const createMovie = (request, response) => {
  let body = request.body;

  let newMovie = {
    id: moviesJson.length + 1,
    Title: body.Title,
    Plot: body.Plot,
  };

  moviesJson.push(newMovie);

  response.status(201).json([
    {
      message: " Filme cadastrado com sucesso.",
      newMovie,
    },
  ]);
};

const updateTitle = (request, response) => {
  const idRequest = request.params.id;
  let newTitle = request.body.title;

  moviesFound = moviesJson.find((movies) => movies.id == idRequest);

  moviesFound.Title = newTitle;

  response.status(200).json([
    {
      message: "Filme atualizado com sucesso.",
      moviesFound,
    },
  ]);
};

const updateMovie = (request, response) => {
  const idRequest = request.params.id;
  const moviesRequest = request.body;
  let indexFound = moviesJson.findIndex((movies) => movies.id == idRequest);
  moviesJson.splice(indexFound, 1, moviesRequest);

  response.status(200).json([
    {
      message: " Filme atualizado com sucesso!",
      moviesJson,
    },
  ]);
};

module.exports = {
  getAll,
  getById,
  createMovie,
  updateTitle,
  updateMovie,
};

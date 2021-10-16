const moviesJson = require("../models/filmes.json");

const searchAll = (request, response) => {
  response.status(200).json([
    {
      movies: moviesJson,
    },
  ]);
};

const searchTitle = (request, response) => {
  let titleReq = request.query.title.toLocaleLowerCase();
  let movieFound = moviesJson.find((movies) =>
    movies.Title.toLocaleLowerCase().includes(titleReq)
  );

  response.status(200).send(movieFound);
};

const searchGenre = (request, response) => {
  let genreReq = request.query.genre.toLocaleLowerCase();
  let genreFound = moviesJson.filter((movies) =>
    movies.Genre.toLocaleLowerCase().includes(genreReq)
  );
  response.status(200).send(genreFound);
};

const createMovies = (request, response) => {
  let body = request.body;
  let Movie = {
    id: moviesJson.length + 1,
    Title: body.Title,
    Plot: body.Plot,
    Genre: body.Genre,
    Year: body.year,
  };

  moviesJson.push(Movie);

  response.status(201).json([
    {
      message: "Filme cadastrado com sucesso!",
      Movie,
    },
  ]);
};

const updateTitle = (request, response) => {
  const idReq = request.params.id;
  let newTitle = request.body.Title;
  let moviefound = moviesJson.find((movies) => movies.id == idReq);
  moviefound.Title = newTitle;

  response.status(200).json([
    {
      message: "Filme atualizado com sucesso!",
    },
  ]);
};

const updateMovie = (request, response) => {
  const idRequest = request.params.id;
  let movieRequest = request.body;
  let indexFound = moviesJson.findIndex((movies) => movies.id == idRequest);
  moviesJson.splice(indexFound, 1, movieRequest);

  response.status(200).json([
    {
      message: "Filme atualizado com sucesso!",
      moviesJson,
    },
  ]);
};

const updateMovies = (request, response) => {
  const idRequest = request.params.id;
  let moviesRequest = request.body;
  const moviesFound = moviesJson.find((movies) => movies.id == idRequest);
  moviesRequest.id = idRequest;

  Object.keys(moviesFound).forEach((keys) => {
    if (moviesRequest[keys] == undefined) {
      moviesFound[keys] = moviesFound[keys];
    } else {
      moviesFound[keys] = moviesRequest[keys];
    }
  });

  response.status(200).json([
    {
      message: "Filme atualizado com sucesso!",
      moviesFound,
    },
  ]);
};

const deleteMovies = (request, response) => {
  const idRequest = request.params.id;
  const indexFound = moviesJson.findIndex((movies) => movies.id == idRequest);
  moviesJson.splice(indexFound, 1);

  response.status(200).json([
    {
      message: "Filme deletado com sucesso.",
      deleted: "idRequest",
      moviesJson,
    },
  ]);
  response.status(201).send(moviesJson);
};

const searchId = (request, response) => {
  let idReq = request.params.id;
  let idFound = moviesJson.find((movies) => movies.id == idReq);
  response.status(200).send(idFound);
};

module.exports = {
  searchAll,
  searchTitle,
  searchGenre,
  createMovies,
  updateTitle,
  updateMovie,
  updateMovies,
  deleteMovies,
  searchId,
};

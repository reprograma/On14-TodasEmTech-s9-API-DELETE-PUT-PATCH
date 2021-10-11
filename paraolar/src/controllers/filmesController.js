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
    movies.Genre.toLowerCase().includes(genreReq)
  );
  response.status(200).send(genreFound);
};

const createMovies = (request, response) => {
  let body = request.body;
  let Movie = {
    id: (moviesJson.length)+1,
    Title: body.Title,
    Plot: body.Plot,
    Genre: body.Genre,
    Year: body.year,
  };

  moviesJson.push(Movie);

  response.status(201).json([
    {
      "mensagem": "Filme cadastrado com sucesso!",
      Movie
    },
  ]);
};

const searchId = (request, response) => {
  let idReq = request.params.id;
  let idFound = moviesJson.find((movie) => movie.id == idReq);
  response.status(200).send(idFound);
};

module.exports = {
  searchAll,
  searchId,
  searchTitle,
  searchGenre,
  createMovies
};

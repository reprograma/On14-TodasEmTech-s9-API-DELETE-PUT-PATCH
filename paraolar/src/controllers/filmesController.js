const filmesJson = require("../models/filmes.json");

const getAll = (req, res) => {
  res.status(200).send(filmesJson);
};

const getByTitle = (req, res) => {
  let titleRequest = req.query.titulo;
  let titleFind = filmesJson.filter((filme) =>
    filme.Title.toLocaleLowerCase().includes(titleRequest)
  );

  res.status(200).send(titleFind);
};

const getById = (req, res) => {
  let idRequest = req.params.id;
  let idFind = filmesJson.find((filme) => filme.id == idRequest);
  res.status(200).send(idFind);
};

const getByGenre = (req, res) => {
  let genreRequest = req.query.genero;

  let genreFind = filmesJson.filter((filme) =>
    filme.Genre.toLocaleLowerCase().toString().includes(genreRequest)
  );

  res.status(200).send(genreFind);
};

const createMovie = (req, res) => {
  let body = req.body;

  let newMovie = {
    id: (filmesJson.length) + 1,
    Title: body.Title,
    Year: body.Year,
    Rated: body.Rated,
    Released: body.Released,
    Runtime: body.Runtime,
    Genre: body.Genre,
    Director: body.Director,
    Writer: body.Writer,
    Actors: body.Actors,
    Plot: body.Plot,
    Language: body.Language,
    Country: body.Country,
    Awards: body.Awards
}

  filmesJson.push(newMovie);

  res.status(201).json([
    {
      mensagem: "Filme cadastrado com sucesso",
      newMovie
    }
  ])
};

const updateMovie = (req, res) => {
  const idRequest = req.params.id;
  let movieRequest = req.body;

  let newMovie = {
    id: idRequest,
    Title: movieRequest.Title,
    Year: movieRequest.Year,
    Rated: movieRequest.Rated,
    Released: movieRequest.Released,
    Runtime: movieRequest.Runtime,
    Genre: movieRequest.Genre,
    Director: movieRequest.Director,
    Writer: movieRequest.Writer,
    Actors: movieRequest.Actors,
    Plot: movieRequest.Plot,
    Language: movieRequest.Language,
    Country: movieRequest.Country,
    Awards: movieRequest.Awards
  }

  let indexFind = filmesJson.findIndex(filme => filme.id == idRequest);

  filmesJson.splice(indexFind, 1, newMovie);

  res.status(200).json([
    {
      "mensagem": "Filme atualizado com sucesso",
      newMovie
    }
  ])
};

const updateTitle = (req, res) => {
  const idRequest = req.query.id;
  let newTitle = req.body.Title;

  let movieFind = filmesJson.find(filme => filme.id == idRequest);

  movieFind.Title = newTitle;

  res.status(200).json([
    {
      "mensagem": "Filme atualizado com sucesso",
      movieFind
    }
  ])
};

const updateId = (req, res) => {
  const idRequest = req.params.id;
  let newTitle = req.body.Title;

  let movieFind = filmesJson.find(filme => filme.id == idRequest);

  movieFind.Title = newTitle;

  res.status(200).json([
    {
      "mensagem": "Atualizado com sucesso",
      movieFind
    }
  ])
};


const deleteMovie = (req, res) => {
  let idRequest = req.params.id;
  let deleteMovie = filmesJson.findIndex(
    filmes => filmes.id == idRequest
  )
  console.log(deleteMovie)

  filmesJson.splice(deleteMovie, 1);
  res.status(200).json([{
    "mensagem": "Filme deletado com sucesso",
    filmesJson
  }])
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByGenre,
  createMovie,
  updateMovie,
  updateTitle,
  updateId,
  deleteMovie
};
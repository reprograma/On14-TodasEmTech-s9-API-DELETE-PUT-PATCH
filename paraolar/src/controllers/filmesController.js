const filmesJson = require("../models/filmes.json");

const getAll = (request, response) => {
  response.status(200).send(filmesJson);
}

const getByTitle = (request, response) => {
  let titleRequest = request.query.titulo.toLocaleLowerCase();
  let titleEncontrado = filmesJson.filter(
    filmes => filmes.Title.toLocaleLowerCase().includes(titleRequest)
  );
    response.status(200).send(titleEncontrado);
}

const getByGenre = (request, response) => {
  let genreRequest = request.query.genero.toLocaleLowerCase()
  let genreEncontrado = filmesJson.filter(
    filmes => filmes.Genre.toLocaleLowerCase() == genreRequest
  )
  response.status(200).send(genreEncontrado);
}

const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

  response.status(200).send(idEncontrado);
} 

const createMovie = (request, response) => {
  let bodyRequest = request.body;
  let newMovie = {
    id: (filmesJson.length) + 1,
    Title: bodyRequest.Title,
    Year: bodyRequest.Year,
    Rated: bodyRequest.Rated,
    Released: bodyRequest.Released,
    Runtime: bodyRequest.Runtime,
    Genre: bodyRequest.Genre,
    Director: bodyRequest.Director,
    Writer: bodyRequest.Writer,
    Actors: bodyRequest.Actors,
    Plot: bodyRequest.Plot,
    Language: bodyRequest.Language,
    Country: bodyRequest.Country,
    Awards: bodyRequest.Awards
  }
  filmesJson.push(newMovie);
  response.status(201).json([
    {"mensagem": "Cadastro feito com sucesso", newMovie}
  ])
}

const updateTitle = (request, response)=>{
  const idRequest = request.params.id 
  let novoTitulo = request.body.Title

  filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

  filmeFiltrado.Title = novoTitulo

  response.status(200).json([{
              "mensagem": "filme atualizado com sucesso",
              filmeFiltrado
          }])
}

const deleteMovie = (request, response) => {
  let idRequest = request.params.id;
  let indexRequested = filmesJson.findIndex(
    filmes => filmes.id == idRequest
  )
  console.log(indexRequested)

  filmesJson.splice(indexRequested, 1);
  response.status(200).json([{
    "mensagem": "Filme deletado com sucesso",
    filmesJson
  }])
}

module.exports = {
  getAll,
  getByTitle,
  getById,
  getByGenre,
  createMovie,
  updateTitle,
  deleteMovie
}
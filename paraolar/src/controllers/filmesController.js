const filmesJson = require("../models/filmes.json");

const getAll = (request, response) => {
  response.status(200).send(filmesJson);
}

const getByTitle = (request, response) => {
  let titleRequest = request.query.titulo.toLocaleLowerCase();
  let titleEncontrado = filmesJson.filter (
    filmes => filmes.Title.toLocaleLowerCase().includes(titleRequest)
  );
    response.status(200).send(titleEncontrado);
}


const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

  response.status(200).send(idEncontrado);
} 

module.exports = {
  getAll,
  getByTitle,
  getById
}
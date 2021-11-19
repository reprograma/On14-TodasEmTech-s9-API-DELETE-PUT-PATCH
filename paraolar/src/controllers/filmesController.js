const filmesJson = require("../models/filmes.json");

const getAll = (request, response) => {
  response.status(200).json([
    {
      filmes: filmesJson,
    },
  ]);
};

const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.find((filme) => filme.id == idRequest);

  response.status(200).send(idEncontrado);
};

const createMovie = (request, response) => {
  let body = request.body;

  let novoFilme = {
    id: filmesJson.length + 1,
    Title: body.Title,
    Plot: body.Plot,
  };

  filmesJson.push(novoFilme);

  response.status(201).json([
    {
      mensagem: "filme cadastrado ",
      novoFilme,
    },
  ]);
};

const updateTitle = (request, response) => {
  const idRequest = request.params.id;
  let novoTitulo = request.body.Title;

  FilmeFiltrado = filmesJson.find((filme) => filme.id == idRequest);

  FilmeFiltrado.Title = novoTitulo;

  response.status(200).json({
    mensagem: "Filme atualizado com sucesso",
    FilmeFiltrado,
  });
};

module.exports = {
  getAll,
  getById,
  createMovie,
  updateTitle,
};

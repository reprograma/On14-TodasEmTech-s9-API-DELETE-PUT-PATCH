const filmesJson = require("../models/filmes.json");

//controller vai ter a logica

//chamando o json de filmes
const getAll = (request, response) => {
  response.status(200).json([
    {
      filmes: filmesJson,
      //serie: seriesJson,
    },
  ]);
};
// funçao getbayid retorna um filme de um id especifico
const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.find((filme) => filme.id == idRequest);

  response.status(200).send(idEncontrado);
};

const createMovie = (request, response) => {
  let bodyRequest = request.body;

  let novoFilme = {
    id: filmesJson.length + 1,
    Title: body.Title,
    Plot: body.Plot,
  };

  //criando novo filme
  filmesJson.push(novoFilme);
  response.status(201).json([
    {
      mensagem: "filme cadastrado com sucesso",
      novoFilme,
    },
  ]);
};

//exportando todas as funções do controller para ser usada
module.exports = {
  getAll,
  getById,
  createMovie,
};

const moviesJson = require("../models/filmes.json");

const getAll = (request, response) => {
  try {
    response.status(200).json([
      {
        movies: moviesJson,
      },
    ]);
  } catch (error) {
    response.status(404).json([
      {
        message: "Erro, a lista de filmes não foi encontrada.",
      },
    ]);
  }
};

const getById = (request, response) => {
  try {
    let idRequest = request.params.id;
    let moviesFound = moviesJson.find((filme) => filme.id == idRequest);

    if (moviesFound == undefined) {
      response.status(404).jon([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    }

    response.status(200).send(moviesFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente, por favor.",
      },
    ]);
  }
};

const createMovie = (request, response) => {
  let body = request.body;

  let newMovie = {
    id: moviesJson.length + 1,
    Title: body.Title,
    Plot: body.Plot,
  };

  console.log(newMovie.Plot);
  if (newMovie.Title == "" || newMovie.Plot == "") {
    response.status(400).json([
      {
        message: "Insira todas as informações corretamente, por favor.",
      },
    ]);
  } else {
    moviesJson.push(newMovie);
  }

  response.status(201).json([
    {
      message: " Filme cadastrado com sucesso.",
      newMovie,
    },
  ]);
};

const updateTitle = (request, response) => {
  try {
    const idRequest = request.params.id;
    let newTitle = request.body.title;

    moviesFound = moviesJson.find((movies) => movies.id == idRequest);

    if (moviesFound == undefined) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    }
    if (newTitle == "") {
      response.status(400).json([
        {
          message: "Erro, informe o título, por favor.",
        },
      ]);
    } else {
      moviesFound.Title = newTitle;
    }

    response.status(200).json([
      {
        message: "Filme atualizado com sucesso.",
        moviesFound,
      },
    ]);
  } catch (error) {}
};

const updateMovie = (request, response) => {
  try {
    const idRequest = request.params.id;
    const moviesRequest = request.body;
    let indexFound = moviesJson.findIndex((movies) => movies.id == idRequest);

    if (Object.keys(moviesRequest).length === 0) {
      response.status(406).send("erro");
    }
    if (indexFound == -1) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    } else if ((moviesRequest.id = idRequest)) {
      moviesJson.splice(indexFound, 1, moviesRequest);
    }
    response.status(200).json([
      {
        message: " Filme atualizado com sucesso!",
        moviesJson,
      },
    ]);
  } catch (error) {}
};

module.exports = {
  getAll,
  getById,
  createMovie,
  updateTitle,
  updateMovie,
};

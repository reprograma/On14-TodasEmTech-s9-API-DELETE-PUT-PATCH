const moviesJson = require("../models/filmes.json");

const searchAll = (request, response) => {
  try {
    response.status(200).json([
      {
        movies: moviesJson,
      },
    ]);
  } catch (error) {
    response.status(404).json([
      {
        message: "Erro, a lista de filmes não pôde ser encontrada.",
      },
    ]);
  }
};

const searchTitle = (request, response) => {
  try {
    let titleReq = request.query.title.toLocaleLowerCase();
    let movieFound = moviesJson.filter((movies) =>
      movies.Title.toLocaleLowerCase().includes(titleReq)
    );
    if (movieFound.length === 0) {
      response.status(400).json([
        {
          message: "Este título não pôde ser encontrado.",
        },
      ]);
    }
    response.status(200).send(movieFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente. ",
      },
    ]);
  }
};

const searchGenre = (request, response) => {
  try {
    let genreReq = request.query.genre.toLocaleLowerCase();
    let genreFound = moviesJson.filter((movies) =>
      movies.Genre.toLocaleLowerCase().includes(genreReq)
    );

    if (genreFound.length === 0) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este gênero",
        },
      ]);
    } else {
      response.status(200).send(genreFound);
    }
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente",
      },
    ]);
  }
};

const createMovies = (request, response) => {
  try {
    let body = request.body;
    let Movie = {
      id: moviesJson.length + 1,
      Title: body.Title,
      Plot: body.Plot,
      Genre: body.Genre,
      Year: body.Year,
    };
    console.log(Movie.Year);
    if (
      Movie.Title == "" ||
      Movie.Plot == "" ||
      Movie.Genre == "" ||
      Movie.Year == ""
    ) {
      response.status(400).json([
        {
          message: "Insira todas as informações corretamente, por favor.",
        },
      ]);
    } else {
      moviesJson.push(Movie);
    }

    response.status(201).json([
      {
        message: "Filme cadastrado com sucesso!",
        Movie,
      },
    ]);
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente.",
      },
    ]);
  }
};

const updateTitle = (request, response) => {
  const idReq = request.params.id;
  let newTitle = request.body.Title;
  let moviefound = moviesJson.find((movies) => movies.id == idReq);
  moviefound.Title = newTitle;

  response.status(200).json([
    {
      message: "Filme atualizado com sucesso!",
      moviefound,
    },
  ]);
};

const updateMovie = (request, response) => {
  try {
    const idRequest = request.params.id;
    let movieRequest = request.body;
    let indexFound = moviesJson.findIndex((movies) => movies.id == idRequest);
    moviesJson.splice(indexFound, 1, movieRequest);

    if (indexFound == -1) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    } else if ((movieRequest.id = idRequest)) {
      moviesJson.splice(indexFound, 1, movieRequest);
    }

    response.status(200).json([
      {
        message: "Filme atualizado com sucesso!",
        moviesJson,
      },
    ]);
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente.",
      },
    ]);
  }
};

const updateMovies = (request, response) => {
  try {
    const idRequest = request.params.id;
    let moviesRequest = request.body;
    const moviesFound = moviesJson.find((movies) => movies.id == idRequest);

    if (moviesFound == undefined) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    } else {
      moviesRequest.id = idRequest;

      Object.keys(moviesFound).forEach((keys) => {
        if (moviesRequest[keys] == undefined) {
          moviesFound[keys] = moviesFound[keys];
        } else {
          moviesFound[keys] = moviesRequest[keys];
        }
      });
    }
    response.status(200).json([
      {
        message: "Filme atualizado com sucesso!",
        moviesFound,
      },
    ]);
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente.",
      },
    ]);
  }
};

const deleteMovies = (request, response) => {
  try {
    const idRequest = request.params.id;
    const indexFound = moviesJson.findIndex((movies) => movies.id == idRequest);

    if (indexFound == -1) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    } else {
      moviesJson.splice(indexFound, 1);
    }
    response.status(200).json([
      {
        message: "Filme deletado com sucesso.",
        deleted: idRequest,
        moviesJson,
      },
    ]);
    response.status(201).send(moviesJson);
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente.",
      },
    ]);
  }
};

const searchId = (request, response) => {
  try {
    let idReq = request.params.id;
    let idFound = moviesJson.find((movies) => movies.id == idReq);
    if (idFound == undefined) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    }
    response.status(200).send(idFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Erro, verifique e tente novamente.",
      },
    ]);
  }
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

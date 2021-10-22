const seriesJson = require("../models/series.json");

const searchAll = (request, response) => {
  try {
    response.status(200).json([
      {
        message: seriesJson,
      },
    ]);
  } catch (error) {
    response.status(404).json([
      {
        message: "Erro, a lista de séries não foi encontrada.",
      },
    ]);
  }
};

const searchTitle = (request, response) => {
  try {
    let titleReq = request.query.title.toLocaleLowerCase();
    let titleFound = seriesJson.find((series) =>
      series.title.toLocaleLowerCase().includes(titleReq)
    );

    if (titleFound == undefined) {
      response.status(404).send([
        {
          message: "Não foi possível encontrar este título.",
        },
      ]);
    }

    response.status(200).json(titleFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error, verifique as informações corretamente.",
      },
    ]);
  }
};

const searchGenre = (request, response) => {
  try {
    let genreReq = request.query.genre;

    let genreFound = seriesJson.filter((series) =>
      series.genre.toString().includes(genreReq)
    );

    if (genreFound.length === 0) {
      response.status(404).send([
        {
          message: "Não foi possível encontrar este gênero.",
        },
      ]);
    }

    response.status(200).json(genreFound);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error, verifique as informações corretamente.",
      },
    ]);
  }
};

const createSeries = (request, response) => {
  try {
    const body = request.body;
    const newSeries = {
      id: seriesJson.length + 1,
      title: body.title,
      totalSeasons: body.totalSeasons,
      genre: body.genre,
    };
    if (
      newSeries.title == "" ||
      newSeries.totalSeasons == "" ||
      newSeries.genre == ""
    ) {
      response.status(400).json([
        {
          message: "Insira todas as informações corretamente, por favor.",
        },
      ]);
    } else {
      seriesJson.push(newSeries);
    }
    response.status(200).json([
      {
        message: "Série cadastrada com sucesso.",
        newSeries,
      },
    ]);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error, verifique as informações corretamente.",
      },
    ]);
  }
};

const updateSeries = (request, response) => {
  try {
    const idRequest = request.params.id;
    const seriesRequest = request.body;

    if (Object.keys(seriesRequest).length === 0) {
      response.status(406).send("erro");
    }

    let indexFound = seriesJson.findIndex((series) => series.id == idRequest);

    if (indexFound == -1) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    } else if ((seriesRequest.id = idRequest)) {
      seriesJson.splice(indexFound, 1, seriesRequest);
    }

    response.status(200).json([
      {
        message: "Séries atualizadas com sucesso",
        seriesJson,
      },
    ]);
  } catch (error) {
    response.status(404).json([
      {
        message: "Error, verifique e tente novamente.",
      },
    ]);
  }
};

const updateTitle = (request, response) => {
  try {
    const idReq = request.params.id;
    const newTitle = request.body.title;

    let seriesFound = seriesJson.find((series) => series.id == idReq);
    
    if (seriesFound == undefined) {
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
      seriesFound.title = newTitle;
    }
    response.status(200).json([
      {
        message: "Série atualizada com sucesso!",
        seriesFound,
      },
    ]);
  } catch (error) {
    response.status(404).json([
      {
        message: "Error, verifique e tente novamente.",
      },
    ]);
  }
};

const deleteSeries = (request, response) => {
  try {
    const idRequest = request.params.id;
    const indexFound = seriesJson.findIndex((series) => series.id == idRequest);

    if (indexFound == -1) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    } else {
      seriesJson.splice(indexFound, 1);
    }

    response.status(200).json([
      {
        message: "Séries deletadas com sucesso!",
        deleted: idRequest,
        seriesJson,
      },
    ]);
    response.status(201).send(seriesJson);
  } catch (error) {}
};

const updateAll = (request, response) => {
  try {
    const idRequest = request.params.id;
    let seriesRequest = request.body;
    const seriesFound = seriesJson.find((series) => series.id == idRequest);
    if (seriesFound == undefined) {
      response.status(404).json([
        {
          message: "Não foi possível encontrar este id.",
        },
      ]);
    } else {
      seriesRequest.id = idRequest;
      Object.keys(seriesFound).map((keys) => {
        if (seriesRequest[keys] == undefined) {
          seriesRequest[keys] = seriesFound[keys];
        } else {
          seriesFound[keys] = seriesRequest[keys];
        }
      });
    }

    response.status(200).json([
      {
        message: "Séries atualizadas com sucesso!",
        seriesFound,
      },
    ]);
  } catch (error) {
    response.status(400).json([
      {
        message: "Error, verifique e tente novamente.",
      },
    ]);
  }
};

const searchId = (request, response) => {
  try {
    let idRequest = request.params.id;
    let idFound = seriesJson.find((series) => series.id == idRequest);

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
        message: "Error, verifique e tente novamente.",
      },
    ]);
  }
};

module.exports = {
  searchAll,
  searchTitle,
  searchGenre,
  createSeries,
  updateSeries,
  updateTitle,
  deleteSeries,
  updateAll,
  searchId,
};

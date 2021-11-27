const seriesJson = require("../models/series.json");

const getAll = (req, res) => {
  res.status(200).send(seriesJson);
};

const getByTitle = (req, res) => {
  let titleRequest = req.query.titulo;
  let titleFind = seriesJson.filter(serie =>
    serie.Title.toLocaleLowerCase().includes(titleRequest)
  );

  res.status(200).send(titleFind);
};

const getById = (req, res) => {
  let idRequest = req.params.id;
  let idFind = seriesJson.find(serie => serie.id == idRequest);
  res.status(200).send(idFind);
};

const getByGenre = (req, res) => {
  let genreRequest = req.query.genero;

  let genreFind = seriesJson.filter(serie =>
    serie.Genre.toLocaleLowerCase().toString().includes(genreRequest)
  );

  res.status(200).send(genreFind);
};

const createSeries = (req, res) => {
  let body = req.body;

  let newSerie = {
    id: (seriesJson.length) + 1,
    title: body.title,
    totalSeasons: body.totalSeasons,
    genre: body.genre,
    writers: body.writers,
    poster: body.poster,
    actors: body.actors,
    ratings: body.ratings
}

  seriesJson.push(newSerie);

  res.status(201).json([
    {
      mensagem: "Série cadastrada com sucesso",
      newSerie
    }
  ])
};

const updateSeries = (req, res) => {
  const idRequest = req.params.id;
  let body = req.body;

  let newSerie = {
    id: idRequest,
    title: body.title,
    totalSeasons: body.totalSeasons,
    genre: body.genre,
    writers: body.writers,
    poster: body.poster,
    actors: body.actors,
    ratings: body.ratings
  }

  let indexFind = seriesJson.findIndex(filme => filme.id == idRequest);

  seriesJson.splice(indexFind, 1, newSerie);

  res.status(200).json([
    {
      "mensagem": "Série atualizada com sucesso",
      newSerie
    }
  ])
};

const updateTitle = (req, res) => {
  const idRequest = req.query.id;
  let newTitle = req.body.Title;

  let serieFind = seriesJson.find(filme => filme.id == idRequest);

  serieFind.Title = newTitle;

  res.status(200).json([
    {
      "mensagem": "Série atualizada com sucesso",
      serieFind
    }
  ])
};

const updateId = (req, res) => {
  const idRequest = req.params.id;
  let newTitle = req.body.Title;

  let serieFind = seriesJson.find(filme => filme.id == idRequest);

  serieFind.Title = newTitle;

  res.status(200).json([
    {
      "mensagem": "Atualizada com sucesso",
      serieFind
    }
  ])
};


const deleteSeries= (req, res) => {
  let idRequest = req.params.id;
  let deleteSerie = seriesJson.findIndex(
    filmes => filmes.id == idRequest
  )
  console.log(deleteSerie)

  seriesJson.splice(deleteSerie, 1);
  res.status(200).json([{
    "mensagem": "Filme deletado com sucesso",
    seriesJson
  }])
}


module.exports = {
  getAll,
  getById,
  getByTitle,
  getByGenre,
  createSeries,
  updateSeries,
  updateTitle,
  updateId,
  deleteSeries
};
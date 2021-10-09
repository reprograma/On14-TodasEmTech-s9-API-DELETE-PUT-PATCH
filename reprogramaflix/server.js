const filmesJson = require("./models/filmes.json");
const seriesJson = require("./models/series.json");

const express = require("express"); // importando express
const app = express(); // executa o express

app.get("/catalogo", (request, response) => {
  response.status(200).json([
    {
      filmes: filmesJson,
      serie: seriesJson,
    },
  ]);
});

app.get("/filmes/:id", (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.find((filme) => filme.id == idRequest);

  response.status(200).send(idEncontrado);
});

app.get("/series", (request, response) => {
  let idRequest = request.query.id;
  let idEncontrado = seriesJson.find((serie) => serie.id == idRequest);

  response.status(200).send(idEncontrado);
});

app.listen(7070, () => console.log("toctoc, porta 7070 ativa"));

const filmesJson = require('./models/filmes.json');
const seriesJson = require('./models/series.json')

const express = require('express');
const app = express();

app.get('/catalogo', (request, response) => {
  response.status(200).json([
    {"filmes": filmesJson,
    "series": seriesJson}

  ])
})

app.listen(7070, () => {

})
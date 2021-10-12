//  unifica todos os módulos (arquivos)
// app.use('/filmes', filmesRoutes)
// É PARA ISSO QUE O APP EXISTE, PARA CENTRALIZAR ROTAS RAÍZ E EVITAR REPETIÇÃO.

const express = require('express');
const cors = require('cors');
const filmesRoutes = require('./routes/filmesRoutes.js') // importa as todas 
const seriesRoutes = require('./routes/seriesRoutes.js')

const app = express(); // executo o express

app.use(cors()); //uso o cors
app.use(express.json()); // uso o bodyparser

// armazena a rota raiz (/filmes) em  todas as rotas presentes em filmesRoutes.
// chama os routes para os arquivos.
app.use('/filmes', filmesRoutes) 
app.use('/series', seriesRoutes) //cria rotas raiz de séries

module.exports = app; //exportando para o server.js
//centraliza r o conteudo da aplicação (dentro do SRC)
//rotas raizes
//aqui fica coisas que se usa pra todos os arquivos tipo cors e bodyparse

const express = require ("express") // chama o express
const cors = require("cors") // chama o cors

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/filmesRoutes") // chamando a continuacao das rotas de filmes
const seriesRoutes = require("./routes/seriesRoutes")

const app = express() // executo o express

app.use(cors()) // uso o cors
app.use(express.json()) // uso o bodyparser

app.use("/filmes", filmesRoutes) // crio a rota raiz de filme e executo a continuação de rotas (é como se fosse o home)
app.use("/series", seriesRoutes) //crio rota raiz de serie

// exportando para usar o server.js
module.exports = app
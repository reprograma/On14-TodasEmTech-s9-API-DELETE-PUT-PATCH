//chama o express
const express = require("express");
//chama o cors
const cors = require("cors");
//executa o express
const app = express()
//cria const pras rotas
const filmesRouter = require("./routes/filmesRoutes")
const seriesRouter = require("./routes/seriesRoutes")
const assistirRouter = require("./routes/assistirRoutes")
//dar ordem ao app para usar
app.use(cors());
app.use(express.json());
// app.use(routes)->pq qd ativo não dá certo??????????
//cria as rotas raíz
app.use("/filmes", filmesRouter)
app.use("/series", seriesRouter)
app.use("/assistir", assistirRouter)

//coloca para exportar
module.exports = app
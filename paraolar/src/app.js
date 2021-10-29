//chama o express
const express = require("express");
//chama o cors
const cors = require("cors");
//executa o express
const app = express()
//cria const pras rotas
const filmesRouter = require("./routes/filmesRoutes")
//dar ordem ao app para usar
app.use(cors());
app.use(express.json());
// app.use(routes)->pq qd ativo não dá certo??????????
//cria as rotas raíz
app.use("/filmes", filmesRouter)

//coloca para exportar
module.exports = app
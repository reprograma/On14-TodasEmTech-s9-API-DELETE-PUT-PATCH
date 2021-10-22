// rotas raizes

const express = require("express")
const cors = require("cors") //importando 

const catalogoRoutes = require("./routes/catalogoRoutes")
const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")

const app = express() // executo o express

app.use(cors()) //uso o cors
app.use(express.json()) // uso o bodyspacer

app.use("/assistir", catalogoRoutes)
app.use("/filmes", filmesRoutes)
app.use("/series", seriesRoutes) // criando as rotas raízes

module.exports = app;

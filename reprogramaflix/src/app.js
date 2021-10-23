//

const express = require ("express")
const cors = require("cors")
const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")

const app = express()

app.use(cors()) //usa o cors 
app.use(express.json()) // uso o bodyparser

//cria rota raiz de filmes e de séries
app.use("/filmes", filmesRoutes)
app.use("/series", seriesRoutes)
// app.use("/series")
// app.use("/tvShows")
// app.use("/new")
// app.use("/minhas")

module.exports = app
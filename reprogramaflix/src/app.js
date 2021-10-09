const express = require ("express")
const cors = require("cors")
const filmesRoutes = require("./routes/filmesRoutes") // chamando

const app = express()

app.use(cors())
app.use(express.json())

app.use("/filmes", filmesRoutes) // no app.js definindo a rota raiz

module.exports = app
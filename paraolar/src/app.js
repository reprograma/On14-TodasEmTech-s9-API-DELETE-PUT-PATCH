const express = require("express")
const cors = require("cors")
require('dotenv-safe').config()

const db = require("./database/mongoConfig") // importar database


const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")
const assistirRoutes = require("./routes/assistirRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/assistir", assistirRoutes)
app.use("/filmes", filmesRoutes)
app.use("/series", seriesRoutes)

db.connect() // conectar

module.exports = app
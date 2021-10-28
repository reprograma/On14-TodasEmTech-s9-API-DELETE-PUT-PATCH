const express = require("express")
const cors = require("cors")
const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRouter")
const assistir = require("./routes/assistirRoutes")
const app = express()

app.use(cors())
app.use(express.json())

app.use("/filmes", filmesRoutes)
app.use("/series", seriesRoutes)
app.use("/assistir",assistir)

module.exports = app
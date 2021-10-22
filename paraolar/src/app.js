const express = require("express")
const cors = require("cors")

const filmesRouters = require("./routes/filmesRoutes")
const seriesRouters = require("./routes/seriesRoutes")
const assistirRouters = require("./routes/assistirRouter")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/filmes", filmesRouters)
app.use("/series", seriesRouters)
app.use("/assistir", assistirRouters)

module.exports = app
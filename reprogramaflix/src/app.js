const express =  require("express")
const cors = require("cors")
const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")
const app = express()

app.use(cors())
app.use(express.json())

app.use("/filmes", filmesRoutes)
app.use("/series", seriesRoutes)

module.exports = app
const express = require("express")
const cors = require("cors")

const filmesRoutes = require("./routes/filmesRoutes")
const assitirRoutes = require("./routes/assitirRouter")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/filmes", filmesRoutes)
app.use("/assitir", assitirRoutes)

module.exports = app
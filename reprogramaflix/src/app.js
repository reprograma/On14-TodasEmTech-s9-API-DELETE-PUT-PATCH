const express = require("express")
const cors = require("cors")

const seriesRouter = require("./routes/seriesRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/series", seriesRouter)

module.exports = app 
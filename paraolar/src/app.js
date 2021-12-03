const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const filmesRouter = require("./routes/filmesRoutes");
const seriesRouter = require("./routes/seriesRoutes");

app.use("/filmes", filmesRouter)
app.use("/series", seriesRouter)

module.exports = app
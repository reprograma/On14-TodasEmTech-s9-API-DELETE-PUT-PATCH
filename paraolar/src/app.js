const express = require("express");
const cors = require("cors");

const filmesRotas = require("./routes/filmesRoutes");
const seriesRotas = require("./routes/seriesRoutes");
const listarRotas = require("./routes/listarRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", listarRotas);
app.use("/filmes", filmesRotas);
app.use("/series", seriesRotas);

module.exports = app;
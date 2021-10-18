const express = require("express");
const cors = require("cors");
const filmesRoutes = require("./routes/filmesRoutes");
const seriesRoutes = require("./routes/seriesRoutes");
const catalogoRoutes = require("./routes/catalogoRoutes");

const app = express();

app.use(cors());
app.use(express.json())

app.use("/catalogo", catalogoRoutes);
app.use("/filmes", filmesRoutes);
app.use("/series", seriesRoutes);


//Exports 
module.exports = app;
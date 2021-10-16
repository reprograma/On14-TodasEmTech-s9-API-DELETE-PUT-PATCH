const express = require("express");
const cors = require("cors");
const moviesRoutes = require("./routes/filmesRoutes");
const seriesRoutes = require("./routes/seriesRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/movies", moviesRoutes);
app.use("/series", seriesRoutes);

module.exports = app;

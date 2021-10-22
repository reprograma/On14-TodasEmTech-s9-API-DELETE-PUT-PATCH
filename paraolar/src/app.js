const express = require("express");
const cors = require("cors");
const moviesRoutes = require("./routes/filmesRoutes");
const seriesRoutes = require("./routes/seriesRoutes");
const watchRoutes = require("./routes/assistirRoutes")
const app = express();

app.use(cors());
app.use(express.json());
app.use("/movies", moviesRoutes);
app.use("/series", seriesRoutes);
app.use("/assistir", watchRoutes)

module.exports = app;

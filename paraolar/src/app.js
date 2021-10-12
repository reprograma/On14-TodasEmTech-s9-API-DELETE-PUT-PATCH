const express = require("express");
const cors = require("cors");


const movieRoute = require("./routes/filmesRoutes");
const tvShowRoute = require("./routes/filmesRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/movies", movieRoute);
app.use("/tvShow", tvShowRoute);

module.exports = app;
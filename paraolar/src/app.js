const express = require("express");
const cors = require("cors");

const seriesRoutes = require("./routes/seriesRoutes")
const filmesRoutes = require("./routes/filmesRoutes")

const app = express();


app.use(express.json());
app.use(cors());


app.use("/series", seriesRoutes)
app.use("/filmes", filmesRoutes)


module.exports =  app
 
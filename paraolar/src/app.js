const express = require("express");
const cors = require("cors");
const app = express();

const filmesRouter = require("./routes/filmesRoutes");
const seriesRouter = require("./routes/seriesRoutes");
const assistirRouter = require("./routes/assistirRoutes")

app.use(cors());
app.use(express.json());

// app.use(routes);
app.use("/filmes", filmesRouter);//executa a const q criamos para que tenha um caminho na url
app.use("/series", seriesRouter);
app.use("/assistir", assistirRouter);

module.exports = app;
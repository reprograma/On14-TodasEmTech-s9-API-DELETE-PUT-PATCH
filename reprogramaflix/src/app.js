const express = require("express"); //chamando
const cors = require("cors"); //chamando
const filmesRoutes = require("./routes/filmesRoutes"); //chamando
const seriesRoutes = require("./routes/seriesRoutes");

const app = express(); //executo express

app.use(cors()); //uso
app.use(express.json()); //uso

app.use("/filmes", filmesRoutes); //crio rota raiz de filmes
app.use("/series", seriesRoutes);

module.exports = app; //exportando para usar o server.js

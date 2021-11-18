const express = require("express"); //chamando
const cors = require("cors");   //chamando
const filmesRoutes = require("./routes/filmesRoutes");  //chamando

const app = express(); //executo express

app.use(cors()); //uso
app.use(express.json()); //uso

app.use("/filmes", filmesRoutes); //crio rota raiz de filmes

module.exports = app;   //exportando para usar o server.js

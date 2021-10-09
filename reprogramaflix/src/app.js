const express = require("express"); // chamo o express
const cors = require("cors"); // chama cors
const filmesRoutes = require("./routes/filmesRoutes"); // continuação da rota

const app = express();

app.use(cors()); //uso o cors
app.use(express.json()); // uso o bodyparser

app.use("/filmes", filmesRoutes); // crio a rota raiz filmes (aparece no inicio de td rota)-> continuar a rota

//rota raiz

module.exports = app; // exportando para usar o server.js

const express = require("express"); // chamo o express
const cors = require("cors"); // chama cors
//(base)

const filmesRoutes = require("./routes/filmesRoutes"); // continuação da rota
const seriesRouter = require("./routes/seriesRoutes");

const app = express();
//(base)

app.use(cors()); //uso o cors
app.use(express.json()); // uso o bodyparser
//(base)

app.use("/filmes", filmesRoutes); // crio a rota raiz filmes (aparece no inicio de td rota)-> continuar a rotaCannot find module
app.use("/series", seriesRouter);
//rota raiz

module.exports = app; // exportando para usar o server.js
//(base)
//terceiro

const express = require("express"); //importa o express
const cors = require("cors"); //importa o cors


const moviesRoute = require("./routes/filmesRoutes"); //importa as rotas criadas nas Routes e atribuo a uma variável
const tvShowRoute = require("./routes/tvShowRoutes");
const allRoutes = require("./routes/allRoutes");
const app = express(); //executa o express e coloca na variável app

app.use(cors()); //executa o cors
app.use(express.json());

app.use("/movies", moviesRoute); // "//movies" é a rota raíz que criei para chamar o "moviesRoute", variável que criei para armazenar o "filmesRoutes".
app.use("/tvshow", tvShowRoute); //cria a rota raíz para tv show
app.use("/assistir", allRoutes);

module.exports = app; // exporta as rotas raízes criadas aqui
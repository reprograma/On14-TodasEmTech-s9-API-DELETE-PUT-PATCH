


//FICA A ROTA RAIZ  CENTRALIZA O CONTEUDO DA APLICAÇÃO
//cONFIGURAÇÕES QUE VAI SER APLICADO A TODOS

const express = require("express") // Import o express
const cors = require("cors") // Import o cors

const filmesRoutes = require("./routes/filmesRoutes")//Importe da continuação das rotas
const seriesRoutes = require("./routes/seriesRoutes")

const app = express() //executo o express


app.use(cors()) // uso o cors
app.use(express.json()) // uso o bodyparser

app.use("/filmes", filmesRoutes)//crio a rota raiz de filmes e executo a continuação de rotas

app.use("/series", seriesRoutes )//Crio rotas raiz de series


module.exports = app //exportando para usar o server.js
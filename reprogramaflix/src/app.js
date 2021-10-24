//centralizar o conteudo da aplicação
//rotas raizes


const express = require("express") //importe do express
const cors = require("cors") //importe do cors

//importe da continuacao das rotas de filmes
const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")

const app = express() //executo o express

app.use(cors()) //uso o cors
app.use(express.json()) //uso o bodyparser

//crio a rota raiz de filmes 
app.use("/filmes", filmesRoutes) 

//crio rota raiz de series
app.use("/series", seriesRoutes)
 //filmesJson[0].genre[0]


//exportando para usar o server.js
module.exports = app



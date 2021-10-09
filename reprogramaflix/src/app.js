//centralizar o conteudo da aplicação
//rotas raizes


const express = require("express") //chamo o express
const cors = require("cors") //chamo o cors

//chamo a continuacao das rotas de filmes
const filmesRoutes = require("./routes/filmesRoutes") 

const app = express() //executo o express

app.use(cors()) //uso o cors
app.use(express.json()) //uso o bodyparser

//crio a rota raiz de filmes e executo a continuação de rotas
app.use("/filmes", filmesRoutes) 


//exportando para usar o server.js
module.exports = app 



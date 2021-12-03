//centraliza o conteudo da aplicação
// rotas raizes

const express = require("express") // chamo o express

const cors = require("cors") // chamo o cors


const filmesRoutes = require("./routes/filmesRoutes") // chama a continuação das outras rotas

const seriesRoutes = require("./routes/seriesRoutes")




const app = express() // executo o express


app.use(cors()) // evita erro cors

app.use(express.json()) // uso o body parser

app.use("/filmes", filmesRoutes) // cria rota raiz e executa a continuação de rotas

app.use("/series", seriesRoutes)

module.exports = app // exporta para usar o server



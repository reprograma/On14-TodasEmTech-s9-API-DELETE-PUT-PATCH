//local da rota principal e deve conter as configurações que serão expalhadas para todo o código.

// as configurações devem ser chamadas/importadas aqui:

const express = require("express")
const cors = require ("cors") //será aplicado p/ todas as rotas

const filmesRouter = require("./router/filmesRouter")
const seriesRouter = require("./router/seriesRouter")



const app = express()

app.use(cors())
app.use(express.json())

//criando a minha rota raiz p filmes e séries:

app.use("/filmes", filmesRouter)
app.use("/series", seriesRouter)




//exportar o app para fazer rodar o servidor:

module.exports = app
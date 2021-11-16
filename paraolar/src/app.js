// Vai ser o lugar onde vamos centralizar tudo que acontece no servidor 
//rota  raiz
const express = require('express')//chamando o express

const cors = require('cors')// chamo o cors 

const filmesRoutes = require('./routes/filmesRoutes')// chamar a rota // chamo a continuação 

const seriesRoutes = require('./routes/seriesRoutes')

const app = express()// execulta o express

app.use(cors())//è importante que uma api sempre tenha para evitar o erro de cors mesmo que o erro ainda não esteja // uso o cors
app.use(express.json())// uso o bobyparse 

app.use("/filmes", filmesRoutes)// crio a rota raiz  de filmes qe execulto as rotas

app.use("/series", seriesRoutes)// 


//exportando para usar o serve.js 
module.exports = app

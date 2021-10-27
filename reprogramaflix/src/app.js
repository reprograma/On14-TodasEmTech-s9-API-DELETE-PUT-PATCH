//Centraliza o conteudo da aplicação
//

express = require("express") // chama o express
const cors = require("cors") // chama o cors
const filmesRouter = require("./routes/filmesRouter")
const seriesRouter = require("./routes/seriesRouter")
const app = express() // executo o express

app.use(cors())  // uso o cors
app.use(express.json()) // uso o bodyparser

 // crio a rota raiz de filmes e executo a criação 
 app.use("/filmes", filmesRouter)

 //Crio a rota raiz de serie

 app.use("/series", seriesRouter)

//app.use("/series")
//app.use("/tvshows")
//app.use("/new")
//app.use("/minhas")


module.exports = app //exportando para usar no server .jsrortas raizes
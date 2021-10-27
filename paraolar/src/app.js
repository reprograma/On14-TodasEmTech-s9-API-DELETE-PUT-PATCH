
const express = require("express") // Chama o express
const cors = require("cors") // Chama o cors
const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")
const assistirRoutes = require("./routes/assistirRoutes")
const app = express() // Executa o express


app.use(cors())  // uso o cors para evitar erro no cors
app.use(express.json()) // uso o bodyparser


 //Criar a rota raiz de serie
 app.use("/filmes", filmesRoutes);
 app.use("/series", seriesRoutes);
 app.use("/assistir", assistirRoutes)
 

//app.use("/series")
//app.use("/tvshows")
//app.use("/new")
//app.use("/minhas")


module.exports = app //exportando para usar no server .jsrortas raizes



//Centraliza o conteúdo da aplicação  - Tudo que acontece no servidor
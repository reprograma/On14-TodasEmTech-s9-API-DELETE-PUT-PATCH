const express = require("express")
const cors = require("cors")
const filmesRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")

const app = express()// o app executa o express

app.use(cors())//evitar futuros erros no cors
app.use(express.json())//usando o bodyParse

app.use("/filmes", filmesRoutes)
app.use("/series", seriesRoutes)


module.exports = app // exportando o app, eu consigo usar todos os itens desse arquivo e usar no server
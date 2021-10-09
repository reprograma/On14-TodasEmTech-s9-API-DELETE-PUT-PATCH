//chama o controller de filmes
const controller = require("../controllers/filmesController") 

const express = require("express") //chamo o express
const router = express.Router() //função de rotas do express

//router. metodo http (rota, funcao)
router.get("/catalogo", controller.getAll)
router.get("/:id", controller.getById)

//exportando para ser usado no app.js
module.exports = router
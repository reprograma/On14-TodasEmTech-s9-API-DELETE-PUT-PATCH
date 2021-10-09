//chama o controller de filmes
const controller = require("../controllers/filmesController")

const express = require("express") // chamo express
const router = express.Router() // função exclusiva para criar diversas rotas no express (no lugar do app estamos usando isso)

//metodo http + continuação rota + funcao
//router.metodo http (rota, funcao)
 router.get("/catalogo", controller.getAll) //que nem faz do app
router.get("/:id", controller.getById)

router.post("/criar", controller.createMovie)
//exportando para ser usado no app.js
module.exports = router
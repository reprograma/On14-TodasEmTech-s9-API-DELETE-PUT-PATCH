
//Chama o controller de filmes
const controller = require ("../controllers/filmesController")


const express = require("express") // Chamo o express
const router = express.Router()  // função de rotas express


//Metodo do HTTP + a coontinuação da rota + a função
router.get ("/catalogo", controller.getAll)  //função que esta no controller
router.get("/:id", controller.getById)



router.post("/criar", controller.createMovie)
//Exportando para ser usando no App.js
module.exports = router




//Chamar o controller de filmes

const controller  = require("../controllers/filmesControllers")

const express = require("express") //Chama o express para se criar as rotas 
const router  = express.Router()   //nova função express, ela exclusiva para criar diversas rotas ou seja função de rotas express


//Router: metodo http  + continuação da rota + a função
router.get("/catalogo", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.createMovie)

//exportando para ser usado no app.js
module.exports = router
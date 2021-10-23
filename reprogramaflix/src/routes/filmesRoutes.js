<<<<<<< HEAD
const controller = require("../controllers/filmesControllers")

//chamando o express
const express = require("express")
//função de Router é exclusiva para criar rotes
//executando o router que é uma função do express
const router = express.Router()

//metodo http + rota + função
=======
//AS ROTAS E METODOS DE FILMES

//chama o controller de filmes
const controller = require("../controllers/filmesController") 

const express = require("express") //chamo o express

//função de rotas do express
const router = express.Router() 

//router. metodo http (rota, funcao)
>>>>>>> 20728e85d6b39f01f72122aa881a786d6cfa83b0
router.get("/catalogo", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.createMovie)

router.patch("/update/:id", controller.updateTitle)

router.put("/update/:id", controller.updateMovie)

<<<<<<< HEAD
module.exports = router
=======
//exportando para ser usado no app.js
module.exports = router
>>>>>>> 20728e85d6b39f01f72122aa881a786d6cfa83b0

//AS ROTAS E METODOS DE FILMES

//chama o controller de filmes
const controller = require("../controllers/filmesController") 

const express = require("express") //chamo o express

//função de rotas do express
const router = express.Router() 

//router. metodo http (rota, funcao)
router.get("/catalogo", controller.getAll)

router.post("/criar", controller.createMovie)

router.get("/:id", controller.getById)

router.patch("/update/:id", controller.updateTitle)

router.put("/update/:id", controller.updateMovie)

//exportando para ser usado no app.js
module.exports = router
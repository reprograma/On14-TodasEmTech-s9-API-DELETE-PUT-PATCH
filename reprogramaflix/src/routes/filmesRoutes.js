//chama o controller de filmes
const controller = require("../controllers/filmesController") 

const express = require("express") //chamo o express
const router = express.Router() //função de rotas do express

//router. metodo http (rota, funcao)
router.get("/catalogo", controller.getAll)
router.get("/:id", controller.getById)
router.post("/criar", controller.createMovie)
router.patch("/update/:id", controller.updateTitle) 
//passa o id pq ele precisa saber qual objeto vai atualizar
router.put("/update/:id", controller.updateMovie)
//pode usar a mesma rota ja que sao metodos diferentes
router.delete("/delete/:id", controller.deleteMovie)






//exportando para ser usado no app.js
module.exports = router
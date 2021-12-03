const controller = require ("../controllers/filmesController") //chama controller de filmes

const express = require("express") // chama express

const router = express.Router() //exclusiva função para criar diversas rotas

// metodo http + rota + função
router.get("/catalogo", controller.getAll)

router.get("/:id", controller.getById)

router.post("/criar", controller.createMovie)

router.patch("/update/:id", controller.updateTitle)

router.put("/update/:id", controller.updateMovie)

module.exports = router



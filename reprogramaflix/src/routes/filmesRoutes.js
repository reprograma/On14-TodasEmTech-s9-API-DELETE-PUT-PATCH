const controller = require("../controllers/filmesControllers")

//chamando o express
const express = require("express")
//função de Router é exclusiva para criar rotes
//executando o router que é uma função do express
const router = express.Router()

//metodo http + rota + função
router.get("/catalogo", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.createMovie)

router.patch("/update/:id", controller.updateTitle)

router.put("/update/:id", controller.updateMovie)

module.exports = router

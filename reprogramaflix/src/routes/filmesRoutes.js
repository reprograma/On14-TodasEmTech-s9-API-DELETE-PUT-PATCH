const controller = require("../controllers/filmesControllers")

const express = require("express")
//função de Router é exclusiva para criar rotes
const router = express.Router()

//metodo http + rota + função
router.get("/catalogo", controller.getAll)
router.get("/:id", controller.getById)

module.exports = router

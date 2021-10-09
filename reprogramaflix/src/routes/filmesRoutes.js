const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router() // função exclusiva para criar diversas rotas (no lugar do app estamos usando isso)

router.get("/catalogo", controller.getAll) //que nem faz do app
router.get("/:id", controller.getById)

module.exports = router
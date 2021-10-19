const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)
router.get("/buscar/:id", controller.getById)
router.get("/buscar?", controller.getByTitle)
router.get("/filtrar?", controller.getByGenre)

module.exports = router
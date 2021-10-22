const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("", controller.getAll)
router.get("/buscar/:id", controller.getById)
router.get("/buscar?", controller.getByTitle)
router.get("/filtrar?", controller.getByGenre)

router.post("/criar", controller.postMovie)

router.put("/update/:id", controller.putById)

router.patch("/updateTitle?", controller.patchTitle)
router.patch("/update/:id", controller.pacth)

router.delete("/deletar/:id", controller.deletaFilme)

module.exports = router
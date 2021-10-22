const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("", controller.getAll)
router.get("/buscar/", controller.getById)
router.get("/buscar?", controller.getByTitle)
router.get("/filtrar?", controller.getByGenre)

router.post("/criar", controller.postMovie)

router.put("/update/", controller.putByIdFilme)

router.patch("/updateTitle?", controller.patchTitleFilme)
router.patch("/update/", controller.patchUpFilme)

router.delete("/deletar/", controller.deletaFilme)

module.exports = router
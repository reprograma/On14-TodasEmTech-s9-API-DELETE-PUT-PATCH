const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("/listar", controller.getAll)
router.get("/buscar/:id", controller.getById)
router.get("/titulo", controller.getByTitle)
router.get("/filtrar", controller.getByGenre)
router.post("/criar", controller.creatMovie)
router.put("/atualizar", controller.updateMovie)
router.patch("/updateTitle", controller.updateTitle)
router.delete("/deletar", controller.deleteMovie)
router.patch("/update/:id", controller.updateMovieId)
module.exports = router
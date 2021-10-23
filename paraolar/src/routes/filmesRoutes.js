const filmesController = require("../controllers/filmesController")
const express = require("express")
const router = express.Router()

//router. metodo http (rota, função) exporta só o router
router.get("", filmesController.getAll)
router.get("/buscar/", filmesController.getById)
router.get("/buscar?", filmesController.getByTitulo)
router.get("/filtrar?",filmesController.getByGenero)
router.post("/criar", filmesController.createFilme)
router.put("/update/", filmesController.updateFilme)
router.patch("/updateTitle?", filmesController.updateTitle)
router.patch("/update/", filmesController.updateBody)
router.delete("/deletar/", filmesController.deleteFilmes)


// router.post("/criar", controller.createMovie)

// router.patch("/update/:id", controller.updateTitle)
// router.put("/update/:id", controller.updateMovie)

module.exports = router //exporta a const pq ela quem vai chamar as rotas
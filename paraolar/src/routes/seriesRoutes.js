const seriesController = require("../controllers/seriesController")
const express = require("express")
const router = express.Router()

//chama as rotas secundarias
router.get("", seriesController.getAll)
router.get("", seriesController.getById)
router.get("", seriesController.getByTitulo)
router.get("", seriesController.getByGenero)
router.post("/criar", seriesController.createSerie)
router.put("/update/", seriesController.updateSeries)
router.patch("/updateTitle?", seriesController.updateTitle)
router.patch("/update/", seriesController.updateBody)
router.delete("/deletar/", seriesController.deleteSeries)


module.exports = router //exporta a const pq ela quem vai chamar as rotas
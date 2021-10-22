const controller = require("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("", controller.getAllSeries)
router.post("/criar", controller.createSerie)
router.put("/update/", controller.putByIdSeries)
router.patch("/updateTitle?", controller.patchNovoTituloSerie)
router.patch("/update/", controller.patchSerie)
router.delete("/deletar/", controller.deletaSerie)

module.exports = router
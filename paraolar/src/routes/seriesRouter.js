const controller = require("../controllers/seriesController")

const express = require("express")

const router = express.Router()

router.get("", controller.getAll)

router.post("/criar", controller.criarSeries )

router.put("/update/", controller.updateSeries)

router.patch("/updatetitle", controller.updateTitle)

router.patch("/update/", controller.updateId)

router.delete("/deletar/", controller.deletar)



module.exports = router


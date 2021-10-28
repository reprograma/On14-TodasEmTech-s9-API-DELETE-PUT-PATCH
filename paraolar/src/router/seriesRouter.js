const controller = require("../controller/seriesController")
const express = require("express")
const router = express.Router()

router.get ("/", controller.getALL)
router.get("/genre", controller.getGenre)
router.get("/title", controller.getTitle)
router.get("/buscar:id", controller.getById)

router.post("/creat", controller.creatSeries)

router.put("/update/:id", controller.updateSeries)

router.patch("/updateTitle/:id", controller.updateTitle)
router.patch("/update/:id", controller.updateSeries)

router.delete("/delete/:id", controller.deleteSeries)

module.exports = router
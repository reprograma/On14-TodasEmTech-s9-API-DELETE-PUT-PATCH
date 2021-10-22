const controller = require("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("", controller.getAllSeries)
router.post("/criar", controller.createSerie)

module.exports = router
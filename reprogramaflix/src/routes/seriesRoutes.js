const controller = require("../controllers/seriesControllers")

const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)

module.exports = router
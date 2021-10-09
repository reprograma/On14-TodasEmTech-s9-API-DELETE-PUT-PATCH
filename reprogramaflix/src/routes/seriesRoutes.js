const controller = require("../controllers/seriesController") // chamar controller

const express = require("express") // chama expressa
const router = express.Router()

router.get("/", controller.getAll)

module.exports = router
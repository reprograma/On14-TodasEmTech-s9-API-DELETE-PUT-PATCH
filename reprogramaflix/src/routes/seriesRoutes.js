const controller = require("../controllers/seriesControllers") // chamar controller

const express = require("express") // chama expressa
const router = express.Router()

router.get("/catalago", controller.getAll)
router.get("/buscar/:id", controller.getIdseries)


module.exports = router






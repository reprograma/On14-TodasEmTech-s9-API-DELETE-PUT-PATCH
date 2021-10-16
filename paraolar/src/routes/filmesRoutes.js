const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)
router.get("/buscar/", controller.getById)

module.exports = router
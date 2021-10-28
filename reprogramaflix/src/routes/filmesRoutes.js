const controller = require("../controllers/filmesController")


const express = require("express")
const router = express.Router()

router.get("/catalogo",controller.getAll)
router.get("/:id" , controller.getById)

module.exports = router

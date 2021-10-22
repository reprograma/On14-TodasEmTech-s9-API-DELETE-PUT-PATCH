const controller = require("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("/", controller.getAllSerie)
router.get("/id", controller.getByIdSerie)

router.post("/criar", controller.criarSerie)
router.patch("/update/:id", controller.updateTitle)


module.exports = router;

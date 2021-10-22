
const controller = require("../controllers/filmesController")

const express = require("express")
const router = express.Router()

router.get("/", controller.getAllFilme)
router.get("/id", controller.getByIdFilme)

router.post("/criar", controller.criarFilme)
router.patch("/update/:id", controller.updateTitle)



module.exports = router;


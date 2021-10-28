const controller = require("../controllers/filmesController")


const express = require("express")
const router = express.Router()

router.get("",controller.getAll)
router.get("/:id" , controller.getById)
router.get("/buscar/:id", controller.getByTitle)
router.get("/genre/:id", controller.filtrarGenero)
router.post("/criar", controller.criarFilme)
router.put("/update/:id",controller.updateMovie)
router.patch("/updatetitulo/:id", controller.updateTitle)
router.patch("/updateid/:id" , controller.updateId)
router.delete("/delete/:id" , controller.deletar)


module.exports = router
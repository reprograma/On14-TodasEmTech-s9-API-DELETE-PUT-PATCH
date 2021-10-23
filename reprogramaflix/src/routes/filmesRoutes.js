//rotas e métodos
const controller = require("../controllers/filmesController") //chama o controller

const express = require("express") //chama o express
const router = express.Router() 
//facilita a criação de rotas. junta todas as rotas em uma só

//router.metodo http (rota, funcao)
router.get("/catalogo", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.createMovie)

router.patch("/update/:id", controller.updateTitle)
router.put("/update/:id", controller.updateMovie)

module.exports = router;
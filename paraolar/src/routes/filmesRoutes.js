const controller = require("../controllers/filmesController") 
const express = require("express") 
const router = express.Router() 

router.get("/catalogo", controller.getAll)
router.get("/buscar/:id", controller.getById)
router.get("/titulo", controller.getByTitle)
router.get("/filtro", controller.getByGenre)

router.post("/criar", controller.createMovie)

router.put("/update/:id", controller.updateMovie)


module.exports = router

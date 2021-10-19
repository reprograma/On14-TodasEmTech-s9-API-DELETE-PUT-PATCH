const controller = require("../controllers/filmesController") 
const express = require("express") 
const router = express.Router() 

router.get("/catalogo", controller.getAll)
router.get("/buscar/:id", controller.getById)
router.get("/titulo", controller.getByTitle)


module.exports = router

const controller = require("../controllers/filmesController") 
const express = require("express") 
const router = express.Router() 

router.get("/", controller.getAll) // ok
router.get("/filtro", controller.getByGenre) // ok

router.post("/criar", controller.createMovie) // ok

router.get("/titulo", controller.getByTitle) // ok

router.delete("/deletar/:id", controller.deleteMovie) // ok

router.get("/buscar/:id", controller.getById) // ok

router.patch("/update/:id", controller.updateMoviesId) // ok



module.exports = router



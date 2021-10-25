const controller = require("../controllers/filmesController") 
const express = require("express") 
const router = express.Router() 

router.get("/", controller.getAll) 
router.get("/filtro", controller.getByGenre) 

router.post("/criar", controller.createMovie) 

router.get("/titulo", controller.getByTitle) 

router.delete("/deletar/:id", controller.deleteMovie) 

router.get("/buscar/:id", controller.getById) 

router.patch("/updateTitle/:id", controller.updateTitle) 
router.patch("/update/:id", controller.updateMoviesId) 

router.put("/update/:id", controller.updateMovie) 


module.exports = router

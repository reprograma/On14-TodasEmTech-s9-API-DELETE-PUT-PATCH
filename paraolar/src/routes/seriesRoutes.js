const controller = require("../controllers/seriesControllers")
const express = require("express")
const router = express.Router()

router.get ("/", controller.getAll) //GET/series ok
router.get ("/genero", controller.getGenre) //GET/series{genero} ok 
router.get ("/titulo", controller.getTitle) //GET/series{titulo} ok
router.get ("/buscar/:id", controller.getById) //GET/series{id} ok

router.post ("/criar", controller.createSerie) //POST/series/criar ok 

router.patch ("/update/:id", controller.updateSeriesById)//PATCH/series/update/{id} ok

router.delete("/deletar/:id", controller.deleteSerie)//DELETE/series/deletar/{id} ok


module.exports = router
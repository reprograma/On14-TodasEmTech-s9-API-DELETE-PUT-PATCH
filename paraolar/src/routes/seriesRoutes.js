const controller = require("../controllers/seriesController")
const express = require("express")
const router = express.Router()

router.get ("/", controller.getAll) //GET/series
router.get ("/genero", controller.getGenre) //GET/series{genero}
router.get ("/titulo", controller.getTitle) //GET/series{titulo}
router.get ("/buscar/:id", controller.getById) //GET/series{id}

router.post ("/criar", controller.createSerie) //POST/series/criar

router.put ("/update/:id", controller.updateSeries)//PUT/series/update/{id}

router.patch ("/updateTitulo/:id", controller.updateTitle)//PATCH/series/updateTitle?/{id}
router.patch ("/update/:id", controller.updateSeriesById)//PATCH/series/update/{id}

router.delete("/deletar/:id", controller.deleteSerie)//DELETE/series/deletar/{id}


module.exports = router

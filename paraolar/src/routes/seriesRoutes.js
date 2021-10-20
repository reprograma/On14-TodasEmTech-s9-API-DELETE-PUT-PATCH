const controller = require("../controllers/seriesControllers")
const express = require("express")
const router = express.Router()

router.get ("/", controller.getAll) //GET/series
router.get ("/genero", controller.getGenre) //GET/series{genero}



//GET/series{id}
//GET/series{titulo}

//POST/series/criar

//PUT/series/update/{id}

//PATCH/series/updateTitle?/{id}
//PATCH/series/update/{id}

//DELETE/series/deletar/{id}


module.exports = router

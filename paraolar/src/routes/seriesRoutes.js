//Na pasta Routes  --- Devo chamar o Controller, método e parte da rota, sempre chamando a logíca.

const controller = require ("../controller/seriesController"); //Chama o controller de filmes


const express = require("express") // Chamo o express

const router = express.Router()  // função de rotas express - cria diversas rotas


//Metodo do HTTP + a coontinuação da rota + a função
router.get ("/catalogo", controller.getAll)  //função que esta no controller
router.get("/:id", controller.getById)

router.post("/criar", controller.createSeries)  //Exportando para ser usando no App.js

router.patch("/update/:id", controller.updateTitle)


module.exports = router
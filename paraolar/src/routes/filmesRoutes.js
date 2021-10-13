const moviesController = require("../controllers/filmesController.js"); //importa a lógica criada no controller

const express = require("express"); //importa express
const router = express.Router(); //utiliza a função Router do express

router.get("/list", moviesController.getAll); //coloca depois da rota raiz criada na app

module.exports = router; //exporta a função router

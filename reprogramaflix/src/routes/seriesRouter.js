
//Chama o controller de series
const controller = require ("../controllers/seriesController")


const express = require("express") // Chamo o express
const router = express.Router()  // função de rotas express


//Metodo do HTTP + a coontinuação da rota + a função
router.get ("/", controller.getAll)  //função que esta no controller


//Exportando para ser usando no App.js
module.exports = router
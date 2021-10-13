 const tvShowController = require("../controllers/tvShowController"); //importa a lógica criada no controller

const express = require("express"); //importa express

const router = express.Router(); //utiliza a função Router do express
 
router.get("/list", tvShowController.getAll); //chama a função router com o get e cria a rota que vem dps da rota raíz criada na app. Utiliza a variável criada para chamar o controller. 
 
module.exports = router; //exporta a variável que contem a função router
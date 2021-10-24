const express = require("express");

const controller = require("../controllers/seriesController")
const router = express.Router();

router.get("/todaserie", controller.getAllSerie)
router.get("/id", controller.getIdSerie)
router.get("/titulo", controller.getTitle)
router.get("/genero", controller.getGenero)
router.get("/novaserie", controller.criarSerie)



module.exports = router 

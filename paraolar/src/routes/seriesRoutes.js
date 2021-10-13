const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();

router.get("", controller.getAll);
//Verificar sobre as rotas selecionadas
router.get("", controller.getByTitle);
router.get("", controller.getByGenre);
router.get("/:id", controller.getById);
router.post("/criar", controller.createSerie);


module.exports = router;
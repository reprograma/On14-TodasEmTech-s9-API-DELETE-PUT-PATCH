const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();


//Verificar sobre as rotas selecionadas
router.get("", controller.getByTitle);
router.get("", controller.getByGenre);
router.get("", controller.getAll);
router.get("/:id", controller.getById);
router.post("/criar", controller.createSerie);
router.patch("/update/:id", controller.updateTitle);
router.delete("/delete/:id", controller.deleteSerie);


module.exports = router;
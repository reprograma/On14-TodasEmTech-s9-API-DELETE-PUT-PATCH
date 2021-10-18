const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();


//Verificar sobre as rotas selecionadas
router.get("", controller.getSeries);
router.get("/:id", controller.getById);
router.post("/criar", controller.createSerie);
router.patch("/update/:id", controller.updateAnything);
router.patch("/updateTitle?:id", controller.updateTitle)
router.delete("/delete/:id", controller.deleteSerie);
router.put("/update/:id", controller.updateSerie);


module.exports = router;
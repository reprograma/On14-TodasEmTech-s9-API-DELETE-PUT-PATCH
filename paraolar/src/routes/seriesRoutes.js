const express = require("express");
const controller = require("../controllers/seriesController");
const router = express.Router();

router.get("/", controller.getAll);

router.get("/buscar/:id", controller.getById);

router.get("/titulo", controller.getByTitle);

router.get("/genero", controller.getByGenre);

router.post("/criar", controller.createSerie);

router.put("/update/:id", controller.updateSerie);

router.patch("/updateTitle/:id", controller.updateTitle);

router.patch("/update/:id", controller.updateSerieId);

router.delete("/delete/:id", controller.deleteSerie);


module.exports = router;
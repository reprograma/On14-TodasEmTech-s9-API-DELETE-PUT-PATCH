const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/buscar", controller.getByTitle);
router.get("/buscar/:id", controller.getById);
router.get("/filtrar", controller.getByGenre);
router.post("/criar", controller.createSeries);
router.put("/update", controller.updateSeries);
router.patch("/updateTitle", controller.updateTitle);
router.patch("/update/:id", controller.updateId);
router.delete("/deletar", controller.deleteSeries);

module.exports = router;
const express = require("express");

const controller = require("../controllers/seriesController");

const router = express.Router();

router.get("/all", controller.getAll)

router.get("/buscar", controller.getByTitle);

router.get("/:id", controller.getById)

router.get("/filter", controller.getByGenre)

router.post("/create", controller.createSeries)

router.patch("/update", controller.updateTitle)

router.patch("/update/:id", controller.updateId)

router.put("/update", controller.updateSeries)

router.delete("/delete", controller.deleteSeries)

module.exports = router

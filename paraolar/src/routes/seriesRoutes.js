const controllerSeries = require("../controllers/seriesController");
const express = require("express");
const router = express.Router();

router.get("/", controllerSeries.searchAll);
router.get("/search", controllerSeries.searchTitle);
router.get("/filter", controllerSeries.searchGenre);
router.post("/create", controllerSeries.createSeries);
router.put("/update/:id", controllerSeries.updateSeries);
router.patch("/update/:id", controllerSeries.updateTitle);
router.delete("/delete/:id", controllerSeries.deleteSeries);
router.patch("/update/filter/:id", controllerSeries.updateAll);
router.get("/:id", controllerSeries.searchId);

module.exports = router;

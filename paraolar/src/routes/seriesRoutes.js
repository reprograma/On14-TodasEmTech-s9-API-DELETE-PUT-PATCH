const express = require("express");
const controller = require("../controllers/seriesController");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/criar", controller.createSerie);

router.patch("/updateTitle/:id", controller.updateTitle);

router.put("/update/:id", controller.updateSerie);

module.exports = router;
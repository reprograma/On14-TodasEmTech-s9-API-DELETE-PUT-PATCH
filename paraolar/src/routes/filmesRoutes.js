const express = require("express");
const controller = require("../controllers/filmesController");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/buscar/:id", controller.getById);

router.post("/criar", controller.createMovie);

router.patch("/updateTitle/:id", controller.updateTitle);

router.put("/update/:id", controller.updateMovie);

module.exports = router;
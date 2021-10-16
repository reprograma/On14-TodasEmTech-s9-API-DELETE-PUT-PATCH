const controller = require("../controllers/filmesController");

const express = require("express");
const router = express.Router();

router.get("/catalog", controller.getAll);
router.get("/:id", controller.getById);
router.post("/create", controller.createMovie);
router.patch("/update/:id", controller.updateTitle);
router.put("/update/:id", controller.updateMovie);

module.exports = router;

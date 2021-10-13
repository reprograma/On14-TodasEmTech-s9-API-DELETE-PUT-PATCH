const controller = require("../controllers/filmesController");

const express = require("express");
const router = express.Router();

router.get("", controller.getAll);
router.get("/buscar", controller.getByTitle);
router.get("/buscar/:id", controller.getById);
router.get("/filtrar", controller.getByGenre);
router.post("/criar", controller.createMovie);
router.patch("/update/:id", controller.updateTitle);
router.delete("/delete/:id", controller.deleteMovie);



module.exports = router
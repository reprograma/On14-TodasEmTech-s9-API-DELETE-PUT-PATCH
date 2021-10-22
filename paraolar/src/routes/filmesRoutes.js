const express = require("express");
const controller = require("../controllers/filmesController");
const router = express.Router();

router.get("/", controller.getAll);

router.get("/buscar/:id", controller.getById);

router.get("/titulo", controller.getByTitle);

router.get("/filtrar", controller.getByGenre);

router.post("/criar", controller.createMovie);

router.put("/update/:id", controller.updateMovie);

router.patch("/updateTitle/:id", controller.updateTitle);

router.patch("/update/:id", controller.updateMoviesId);

router.delete("/delete/:id", controller.deleteMovie);

module.exports = router;
const controller = require("../controllers/filmesController");
const express = require("express");
const router = express.Router();

router.get("/all", controller.getAll)

router.get("/buscar", controller.getByTitle);

router.get("/:id", controller.getById)

router.get("/filter", controller.getByGenre)

router.post("/create", controller.createMovie)

router.patch("/update", controller.updateTitle)

router.patch("/update/:id", controller.updateId)

router.put("/update", controller.updateMovie)

router.delete("/delete", controller.deleteMovie)

module.exports = router


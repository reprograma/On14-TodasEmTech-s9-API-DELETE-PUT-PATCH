const controllerMovies = require("../controllers/filmesController");

const express = require("express");
const router = express.Router();

router.get("/", controllerMovies.searchAll);
router.get("/buscar/:id", controllerMovies.searchId);
router.get("/buscar", controllerMovies.searchTitle);
router.get("/filtrar", controllerMovies.searchGenre);
router.post("/criar", controllerMovies.createMovies);

module.exports = router;

const controllerMovies = require("../controllers/filmesController");

const express = require("express");
const router = express.Router();

router.get("/", controllerMovies.searchAll);
router.get("/search", controllerMovies.searchTitle);
router.get("/filter", controllerMovies.searchGenre);
router.post("/create", controllerMovies.createMovies);
router.patch("/update/:id", controllerMovies.updateTitle);
router.put("/update/:id", controllerMovies.updateMovie);
router.patch("/update/filter/:id", controllerMovies.updateMovies);
router.delete("/delete/:id", controllerMovies.deleteMovies);
router.get("/search/:id", controllerMovies.searchId);

module.exports = router;

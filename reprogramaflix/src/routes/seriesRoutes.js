const controller = require("../controllers/seriesController");

const express = require("express");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/filter", controller.getByGenre);

module.exports = router;

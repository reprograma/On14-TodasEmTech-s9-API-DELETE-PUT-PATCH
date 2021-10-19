const express = require("express");

const controller = require("../controllers/seriesController")
const router = express.Router();

router.get("/todaserie", controller.getAllSerie)
router.get("/id", controller.getAllSerie)

module.exports = router 

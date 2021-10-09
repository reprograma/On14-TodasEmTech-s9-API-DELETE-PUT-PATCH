const controller = require("../controllers/seriesControlles");

const express = require("express");
const router = express.Router();

router.get("/", controller.getAll);

module.exports = router;

//segundo

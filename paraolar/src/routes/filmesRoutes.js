const controller = require("../controllers/filmesController.js");

const express = require("express");
const router = express.Router();

router.get("/list", controller.getAll);

module.exports = router;

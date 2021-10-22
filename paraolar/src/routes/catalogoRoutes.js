const express = require("express");
const controller = require("../controllers/catalogoController");
const router = express.Router();

router.get("/", controller.getAll);

module.exports = router;
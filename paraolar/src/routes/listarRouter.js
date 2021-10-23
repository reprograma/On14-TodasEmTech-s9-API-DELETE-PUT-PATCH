const controller = require("../controllers/listarController");

const express = require("express");
const router = express.Router();

router.get("/", controller.listarJson);

module.exports = router;

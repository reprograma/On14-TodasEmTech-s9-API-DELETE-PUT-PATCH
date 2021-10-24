const allController = require("../controllers/allController"); //importa a lógica criada no controller

const express = require("express"); //importa express
const router = express.Router();

router.get("", allController.getAll)

module.exports = router;
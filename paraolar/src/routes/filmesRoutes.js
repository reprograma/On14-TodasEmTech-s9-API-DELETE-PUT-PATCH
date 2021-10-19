const express = require("express");

const controller = require("../controllers/filmesController")
const router = express.Router();

router.get("/todosfilmes", controller.getAllFilme)
router.get("/id", controller.getAllFilme)

module.exports = router 

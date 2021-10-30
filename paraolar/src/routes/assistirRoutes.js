const assistirController = require("../controllers/assistirController")
const express = require("express")
const router = express.Router()

//[GET] /assistir✔
router.get("", assistirController.getAll)

module.exports = router
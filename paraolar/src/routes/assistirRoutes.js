const assistirController = require("../controllers/assistirController")
const express = require("express")
const router = express.Router()

router.get("", assistirController.getAll)

module.exports = router
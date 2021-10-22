const controller = require("../controllers/catalogoController")

const express = require("express")
const router = express.Router()

router.get ("/", controller.getAll)

module.exports = router;
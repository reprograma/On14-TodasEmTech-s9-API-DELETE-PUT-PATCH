const controller = require("../controllers/assistirController")

const express = require("express")
const router = express.Router()

router.get("/", controller.listarTodos)


module.exports = router
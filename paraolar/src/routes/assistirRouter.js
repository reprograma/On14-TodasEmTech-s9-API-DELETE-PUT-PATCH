const controller = require("../controllers/assistirControllers")

const express = require("express")
const router = express.Router()

router.get("/", controller.getAllTodos)

module.exports = router
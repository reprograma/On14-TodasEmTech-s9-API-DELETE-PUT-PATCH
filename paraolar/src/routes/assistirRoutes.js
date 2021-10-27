const controller = require("../controller/assistirController")
const express = require ("express")
const router = express.Router()  // Router é uma função pronta 

router.get ("/", controller.getAll)

module.exports = router  

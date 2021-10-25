const controller = require("../controllers/listaController") 
const express = require("express") 
const router = express.Router() 

router.get("/", controller.getAll) 

module.exports = router

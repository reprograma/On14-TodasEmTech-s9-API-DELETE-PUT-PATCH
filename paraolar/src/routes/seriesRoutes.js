//chamar o controler
const controllers = require("../controllers/seriesController")


const express = require("express")
const router =  express.Router()

router.get("/", controllers.getAll)
router.get("/filter", controllers.getByGender)


module.exports = router
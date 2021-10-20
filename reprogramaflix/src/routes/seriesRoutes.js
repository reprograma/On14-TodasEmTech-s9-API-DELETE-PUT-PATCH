<<<<<<< HEAD
const controller = require("../controllers/seriesControllers")
=======
const controller = require("../controllers/seriesController")
>>>>>>> 20728e85d6b39f01f72122aa881a786d6cfa83b0

const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)
<<<<<<< HEAD
=======
router.get("/filter", controller.getByGender)
>>>>>>> 20728e85d6b39f01f72122aa881a786d6cfa83b0

module.exports = router
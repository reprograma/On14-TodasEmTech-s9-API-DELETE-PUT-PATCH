const watch = require("../controllers/assistirController")

const express = require("express");
const router = express.Router();

router.get("/", watch.searchAll);

module.exports = router
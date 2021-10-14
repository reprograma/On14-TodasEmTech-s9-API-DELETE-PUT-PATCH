const controller = require("../controllers/filmesControles"); // chma o controller de filmes

const express = require("express"); // chamo o express
const { Router } = require("express");
const router = express.Router(); // função de rotas do express
//(base)

//router.metodo http (rota,funçao)
router.get("/catalogo", controller.getAll);
router.get("/:id", controller.getById);

router.post("/criar", controller.createMovie);
router.patch("/update/:id", controller.updateTitle);
router.put("/update/:id", controller.updateMovie);
module.exports = router;
//(base)

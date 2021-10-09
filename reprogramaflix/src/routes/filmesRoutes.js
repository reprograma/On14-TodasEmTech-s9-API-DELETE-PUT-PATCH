const controller = require("../controllers/filmesControles"); // chma o controller de filmes

const express = require("express"); // chamo o express
const router = express.Router(); // função de rotas do express
//(base)

//router.metodo http (rota,funçao)
router.get("/catalogo", controller.getAll);
router.get("/:id", controller.getById);

router.post("/criar", controller.createMovie);

module.exports = router;
//(base)

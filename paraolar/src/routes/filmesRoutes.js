//chama o controller
const filmesController = require("../controllers/filmesController")
//chama o express
const express = require("express")
//chama a rota
const router = express.Router()
//cria as rotas dos pedidos do client
//[GET] /filmes✔
router.get("", filmesController.getAll)
//[GET] /filmes/buscar/{id}✔
router.get("/buscar/:id", filmesController.getById)
// [GET] /filmes/buscar?{titulo}✔
router.get("/buscar?", filmesController.getByTitle)
// [GET] /filmes/filtrar?{genero}✔
router.get("/filtrar?", filmesController.getByGenre)
// [POST]/filmes/criar✔
router.post("/criar", filmesController.createfilme)
// [PUT]/filmes/update/{id}
router.put("/update/:id", filmesController.updateFilme)
// [PATCH]/filmes/updateTitle?{id}✔
router.patch("/updateTitle?", filmesController.updateTitle)
// [PATCH]/filmes/update/{id}
router.patch("/update/:id", filmesController.updateFilmesId)
// [DELETE]/filmes/deletar/{id}✔
router.delete("/deletar/:id", filmesController.removeFilme)



//exporta o arquivo de rotas
module.exports = router
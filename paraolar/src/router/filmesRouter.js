const controller = require("../controller/filmesController")
const express = require("express")
const router = express.Router()


//chamndo os verbos para as rotas
router.get("/", controller.getALL) //getALL - função q retorna todos os filmes.

router.get("/:id", controller.getById) //getById - retorna filme do id especifico.
router.get("/title/:id", controller.getByTitle)
router.get("/genre/:id", controller.filtrarGenre)

router.post("/creat", controller.creatMovie) //criando

router.put("/update/:id", controller.updateMovie) //mudar tudo

router.patch("modify/:id", controller.modifyTitle) //atualizando

router.delete("delete/:id", controller.deleteMovie) // deletando

//executando
module.exports = router
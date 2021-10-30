const seriesController = require("../controllers/seriesController")
const express = require("express")
const router = express.Router()

//chama as rotas secundarias
//[GET] /series✔
//[GET] /series{id}✔
//[GET] /series{titulo}✔
//[GET] /series{genero}✔
router.get("", seriesController.getAll)
//[POST]/series/criar✔
router.post("/criar", seriesController.createSerie)
//[PUT]/series/update/{id}
router.put("/update/:id", seriesController.updateSeries)
//[PATCH]/series/updateTitle?{id}✔
router.patch("/updateTitle?", seriesController.updateTitle)
//[PATCH]/series/update/{id}
router.patch("/update/:id", seriesController.updateBody)
// [DELETE]/series/deletar/{id}
router.delete("/deletar/:id", seriesController.deleteSeries)


module.exports = router //exporta a const pq ela quem vai chamar as rotas
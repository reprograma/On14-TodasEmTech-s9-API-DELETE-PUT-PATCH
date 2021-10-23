const tvShowController = require("../controllers/tvShowController"); //importa a lógica criada no controller

const express = require("express"); //importa express

const router = express.Router(); //utiliza a função Router do express

//[GET] /series
//[GET] /series{id}
//[GET] /series{titulo}
//[GET] /series{genero}
router.get("", tvShowController.getAll); //chama a função router com o get e cria a rota que vem dps da rota raíz criada na app. Utiliza a variável criada para chamar o controller. 

//[POST]/series/criar
router.post("/create", tvShowController.postNewTvShow);

//[PUT]/filmes/update/{id}
router.put("/update/:id", tvShowController.putUpdateById);

//[PATCH]/series/updateTitle?{id}
router.patch("/updatetitle", tvShowController.patchUpdateTitle);

//[PATCH]/series/update/{id}
router.patch("/update/:id", tvShowController.patchUpdateAnything);

//[DELETE]/series/deletar/{id}
router.delete("/delete/:id", tvShowController.deleteTvShow);

module.exports = router; //exporta a variável que contem a função router
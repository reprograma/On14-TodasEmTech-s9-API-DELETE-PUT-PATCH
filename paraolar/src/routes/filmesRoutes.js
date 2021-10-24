const moviesController = require("../controllers/filmesController.js"); //importa a lógica criada no controller

const express = require("express"); //importa express
const router = express.Router(); //chama a função Router do express

//coloca depois da rota raiz criada na app.
//[GET] /filmes
router.get("", moviesController.getAll);

//[GET] /filmes/buscar/{id}
router.get("/search/:id", moviesController.getById); // "/:id" é o parâmetro, a pesquisa que vai ser feita, nesse caso, direto na rota, pq é um request.params.

//[GET] /filmes/buscar?{titulo}
router.get("/search/title", moviesController.getByTitle); //request.query

//[GET] /filmes/filtrar?{genero}
router.get("/filter/genre", moviesController.getByGenre); //request.query

//[POST]/filmes/criar
router.post("/create", moviesController.postNewMovie);

//[PUT]/filmes/update/{id}
router.put("/update/:id", moviesController.putUpdateById);

//[PATCH]/filmes/updateTitle?{id}
router.patch("/updatetitle", moviesController.patchUpdateTitleById);

//[PATCH]/filmes/update/{id}
router.patch("update/:id", moviesController.patchUpdateAnything);

//[DELETE]/filmes/deletar/{id}
router.delete("/delete/:id", moviesController.deleteMovie);

module.exports = router; //exporta a função router

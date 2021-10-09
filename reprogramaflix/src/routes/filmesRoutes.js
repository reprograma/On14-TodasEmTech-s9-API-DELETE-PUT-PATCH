const controller = require("../controllers/filmesController") //a variavel vai chamar filmes controller
const express = require ("express") // chamar o express posibilida cirar e usar as rotas, exemplo : get,post,put só pode ser usado com ele
//se nao nem consigo fazer app.get por exemplo
const router = express.Router() // essa função é utilizada para conseguir utilizar varias rotas
//para evitar o filmes - filmes/id - filmes/criar e colocar apenas a parte que realmente importa
//colocar por exemplo nesse caso a pasta raiz, que é filmes

router.get("/catalogocompleto", controller.getAll)// a rota receber do controller o catalogo completo
router.get("/catalogo", controller.getFilmes)
router.get("/catalogo/:id", controller.getFilmesId)// a rota receber do controller o catalogo completo
// aqui ele nao precisou mais criar filmes/:id
router.post("/criar", controller.postFilmes)

router.patch("/update/:id", controller.updateTitle) // :id porque estamos usando os params
//router.get("/catalogo", controller.getFilmes)


module.exports = router // o proprio router consegue guardar todos as rotas e exporta
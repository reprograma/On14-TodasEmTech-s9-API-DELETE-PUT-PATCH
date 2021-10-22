//1° GET - Consultar a Lista de: Bucar - Filmes / Buscar - Titulo / Buscar - Id / Filtrar - Genero
//2° POST - Criar //3° PUT - mudar ID //4° PATCH - alterar ID //5° PATCH - alterar Title 


const controller = require("../controllers/filmesController") 

const express = require("express") //chamo o express


const router = express.Router() 


router.get("/title", controller.getAll)
router.get("/:id", controller.getById)

router.post("/criar", controller.createMovie)

router.patch("/update/:id", controller.updateTitle)

router.put("/update/:id", controller.updateMovie)

//exportar para o app.js
module.exports = router
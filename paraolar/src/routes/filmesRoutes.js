const controller = require("../controllers/filmesController") 
const express = require("express") 
const router = express.Router() 

//falta GET/assistir

router.get("/catalogo", controller.getAll) // OK FUNCIONANDO - NOME CATALOGO NA BARRA DE ENDEREÇO
router.get("/filtro", controller.getByGenre) // OK FUNCIONANDO - CHAVE Genre + VALUE qualquer coisa

router.post("/criar", controller.createMovie) //OK FUNCIONANDO - INFORMACOES NO BODY

router.get("/titulo", controller.getByTitle) // OK FUNCIONANDO - CHAVE titulo + VALUE qualquer coisa

router.delete("/deletar/:id", controller.deleteMovie) // OK FUNCIONANDO - ID NA BARRA DE ENDEREÇO

router.get("/buscar/:id", controller.getById) //OK FUNCIONANDO - ID NA BARRA DE ENDEREÇO

router.patch("/updateTitle/:id", controller.updateTitle) //OK FUNCIONANDO - ID NA BARRA DE ENDEREÇO / TITLE NO BODY
router.patch("/update/:id", controller.updateMoviesId) // 

router.put("/update/:id", controller.updateMovie) // OK FUNCIONANDO - ID NA BARRA DE ENDEREÇO / ID= NO BODY + OUTROS ITENS DO COD.


module.exports = router



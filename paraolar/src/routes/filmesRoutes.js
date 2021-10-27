// parte que realmete importa 
//chamar o controller de filme 
const controllers = require("../controllers/filmesController")

// chamar o express em uma  função 
 const express = require('express')//chama o express
 // esta  função router serve para por 
 const router = express.Router()//função de rotas do express

/**assim  vomos fazer as rotas */
//router. metodo http (+ rota + função )
 router.get("/catalogo",controllers.getAll)
 router.get("/:id", controllers.getByid)

 // assim exportar as rotas 
 //exportando para ser usado no app.js 
 module.exports = router

//controller vai ter a logica

const seriesJson = require("../models/series.json"); //chamando o json de filmes



const getAll = (req, res) => {  //função getAll retorna todos os filmes
    res.status(200).json([
        {
            "series": series.Json
        }
    ])
}

const getById = (request, response)=>{  //função getById retorna um filme de um id especifico
    let idRequest = request.params.id
    let idEncontrado = seriesJson.find(series => series.id == idRequest)

    response.status(200).send(idEncontrado)
}

const createSeries = (request, response) => {
    const body = request.body

    let novoSeries = {
        id:(seriesJson.length)+1,
        title: body.title,
        plot: body.plot

    }

    seriesJson.push(novoSeries)
    response.status(201).json(
       [
   
        { 
            
        "Mensagem":"Filme cadastrado com sucesso", 
           novoSeries
        }
       ]
    )
   
   }
   
   const updateTitle = (request, response) =>{
       const idRequest = request.params.id
       let novoTitulo = request.body.title
   
       seriesFiltrado = seriesJson.find(series => series.id == idRequest)
       seriesFiltrado.title = novoTitulo
   
       response.status(200).json([
   
           {
               "mensagem": "Filme atualizado com sucesso", seriesFiltrado
           }
   
       ])                               


}

//exportando todas os funções do controller para ser usada no SeriesRoutes.js
module.exports = {
    getAll,
    getById,
    createSeries,
    updateTitle 

}


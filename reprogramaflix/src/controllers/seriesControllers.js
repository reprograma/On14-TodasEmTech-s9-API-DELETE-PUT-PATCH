const seriesData = require("../models/series.json") // chamei o seriesData que estava em models


const getSeriesAll = (req, res) => { //fazer um filtro por query
    if ( req.query.id){
        let idRequest = req.query.id
    let serieEncontrado = seriesData.find(serie => serie.id == idRequest)
    res.status(200).send(serieEncontrado)
    }
        

res.status(200).send(seriesData)

}



const postSeries =(req, res) =>{
    console.log(req.body.title)
  
    

    let tituloRequest = req.body

    let novoSeries = {
        id : ( seriesData.length) +1,
       title : tituloRequest.title
       
       
    }
    seriesData.push(novoSeries)
    res.status(201).json([{"mensagem" : "Serie Cadastrada", novoSeries
}
]
)
}



const updateTitle = (req, res) =>{
   const idRequest = req.params.id

   console.log(req.body)
   let novoTitulo = req.body.title

   SerieFiltrado = seriesData.find (movie => movie.id == idRequest)

   SerieFiltrado.title = novoTitulo

   res.status(200).json([{
       "mensagem" : "Serie Atualizada com Sucesso", SerieFiltrado
   }])
}

const deleteItem = (req,res) =>{
    const item = findItem(req.params.id)
    let itemDeletado = item
    return res.status(200).json([{
        "mensagem" : "Item apagado com sucesso", itemDeletado
    }])
}


module.exports = {
    getSeriesAll,postSeries, updateTitle, deleteItem
} // para eu poder reutiliar essas funções eu preciso exportar elas
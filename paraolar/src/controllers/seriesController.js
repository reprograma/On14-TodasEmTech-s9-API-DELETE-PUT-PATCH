const seriesJson = require("../models/series.json")



const getAll = (request, response)=>{
    
    const {id, title, genre} = request.query
    let filtrados = seriesJson
    

   if(id) {
       filtrados = filtrados.filter(series=> {
           return series.id == id
       })
   }
   if (title) {
      filtrados = filtrados.filter(series =>{
          return series.title.toLowerCase().includes(title.toLowerCase())
      })
  }
if(genre) {
   filtrados = filtrados.filter(series => {
       return series.genre.includes(genre)
   })
}
          
   response.status(200).send(filtrados);
}


const criarSeries = (request,response) =>{
    let body = request.body
   
    let novaSeries = {
      
       "id":(seriesJson.length)+1,
        "Title":body.Title,
        "totalSeasons":body.totalSeasons,
        "Genre":body.Genre,
        "writers":body.writers,
        "poster":body.poster,
        "ratings":body.ratings

        
    }
    
    seriesJson.push(novaSeries)
   response.status(201).json(
       [
           {
               "mensagem " : "Series cadastrado com sucesso",
               novaSeries
           }
       ]
   )
  }


  const updateSeries = (request, response) => {
    const idRequest = request.params.id
    let seriesRequest = request.body

    let indexEncontrado = series.findIndex(series => series.id == idRequest)
    seriesJson.splice(indexEncontrado, 1, seriesRequest)

    response.status(200).json(
  [
      {
          "mensagem": " Serie atualizado com sucesso",
          seriesJson
      }
  ]
    )
}

const updateTitle = (request,response) =>{
    const idRequest = request.params.id
     console.log(idRequest)

    let novoTitulo = request.body.title
    serieFiltrado = seriesJson.find(serie => serie.id == idRequest)

    serieFiltrado.title = novoTitulo
    
    response.status(200).json(
        [
            {
                "mensagem": "titulo de filme atualizado com sucesso",
                serieFiltrado
            }
        ]
    )
}

const updateId = (request,response)=>{ 
    const idRequest = request.params.id
    const bodyRequest = request.body
    const found = seriesJson.find(series => series.id == idRequest)
     bodyRequest.id = idRequest
 
     Object.keys(found).forEach((informacao)=>{
         if(bodyRequest[informacao] == undefined){
             found[informacao] = found[informacao]
         } else {
             found[informacao] = bodyRequest[informacao]
         }
     })
 
     if(found == undefined){
         response.status(404).send({message: 'series não encontrado'})
     }
    }

    const deletar = (request,response)=>{ 
        const id = request.params.id
        const found = seriesJson.find(series => series.id == id)
     
        if(found == undefined){
            response.status(404).send({message: ' series não encontrado'})
        }
        const index = seriesJson.indexOf(found)
        seriesJson.splice(index, 1)
        
        response.status(200).send({message: 'series deletado'})
    }

module.exports ={
    getAll,
    criarSeries,
    updateTitle,
    updateSeries,
    updateId,
    deletar
    
}
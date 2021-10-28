const filmesJson = require("../models/filmes.json")


 const getAll = (request,response) =>{

    response.status(200).send([
    {
        "filmes": filmesJson
    
    }
])
}
 const getById = (request,response)=>{
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(idEncontrado)
}
const getByTitle = (request,response)=>{
    let titleRequest = request.query.Title
    let tittleEncontrado = filmesJson.find(filme => filme.Title == titleRequest)
    response.status(200).send(tittleEncontrado)
}

const filtrarGenero = (request, response) => {
    let genreRequest = request.query.Genre.toLocaleLowerCase();
    let genreEncontrado = filmesJson.filter(filme => filme.Genre.toLocaleLowerCase().includes(genreRequest))
   // let genreEncontrado = filmesJson.filter(filme => filme.Genre == genreRequest)
  
    response.status(200).send(genreEncontrado)
}

const criarFilme = (request,response) =>{
    let body = request.body
   
    let novofilme = {
      
       "id":(filmesJson.length)+1,
        "Title":body.Title,
        "Year":body.Year,
        "Rated":body.Rated,
        "Released": body.released,
        "Runtime":body.Runtime,
        "Genre":body.Genre,
        "Director":body.Director,
        "Writer":body.Write,
        "Actors":body.Actors,
        "Plot":body.Plot,
        "Language":body.Language,
        "Country":body.Country,
        "Awards":body.Awards
    }
    
    filmesJson.push(novofilme)
   response.status(201).json(
       [
           {
               "mensagem " : "filme cadastrado com sucesso",
               novofilme
           }
       ]
   )
  }
  //put
  const updateMovie = (request, response) => {
       const idRequest = request.params.id
       let filmeRequest = request.body

       let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
       filmesJson.splice(indexEncontrado, 1, filmeRequest)

       response.status(200).json(
     [
         {
             "mensagem": "filme atualizado com sucesso",
             filmesJson
         }
     ]
       )
  }

  const updateTitle = (request,response) =>{
      const idRequest = request.params.id
       console.log(idRequest)

      let novoTitulo = request.body.Title
      filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

      filmeFiltrado.Title = novoTitulo
      
      response.status(200).json(
          [
              {
                  "mensagem": "titulo de filme atualizado com sucesso",
                  filmeFiltrado
              }
          ]
      )
  }
      
  const updateId = (request,response)=>{ 
    const idRequest = request.params.id
    const bodyRequest = request.body
    const found = filmesJson.find(filme => filme.id == idRequest)
     bodyRequest.id = idRequest
 
     Object.keys(found).forEach((informacao)=>{
         if(bodyRequest[informacao] == undefined){
             found[informacao] = found[informacao]
         } else {
             found[informacao] = bodyRequest[informacao]
         }
     })
 
     if(found == undefined){
         response.status(404).send({message: 'Estabelecimento não encontrado'})
     }
    }
    const deletar = (request,response)=>{ 
        const {id}= request.params //const id =request.params.id
        const found = filmesJson.find(filme => filme.id == id)
     
        if(found == undefined){
            response.status(404).send({message: 'filme não encontrado'})
        }
        const index = filmesJson.indexOf(found)
        filmesJson.splice(index, 1)
        
        response.status(200).send({message: 'filme deletado'})
    }

module.exports = {
    getAll,
    getById,
    getByTitle,
    filtrarGenero,
    criarFilme,
    updateMovie,
    updateTitle,
    updateId,
    deletar
   
}
const filmesJson = require( "../models/filmes.json")

const getAll = (request, response) => {

    response.status(200).json([

        {
            "filmes": filmesJson
        }
    ]

    )



}

const getById = (request, response)=>{
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

response.status(200).send(idEncontrado)

}

const createMovie = (request ,response)=>{
    let body = request.body
     
    let novoFilme = {
        id:(filmesJson.length)+1,
        title: body.title,
        plot: body.plot

    }

    filmesJson.push(novoFilme)

    response.status(201).json(

        [
         {
             "mensagem": "filme cadastrado com sucesso",

         }

        ]
    )




}

const updateTitle = (request, response)=>{
    const idRequest = request.params.id
     let novoTitulo = request.body.title

     filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

     filmeFiltrado.title = request.body.title

     response.status(200).json(
      [

       {     
           "mensagem": "filme atualizado com sucesso" ,
           filmeFiltrado        

       }

      ]

     )

}

   const updateMovie = (request, response) => {
       const idRequest = request.params.id
       let filmeRequest = request.body
       
       let indexEncontrado = filmesJson.findIndex(filme.id == idRequest)
         
       filmes.json.splice(indexEncontrado , 1, filmeRequest)
       
       response.status(200).json(
      [
        {
          "mensagem": "filme atualizado com sucesso" ,
             filmesJson
        }

      ]

       )

   }

     module.exports = {
       getAll,
       getById,
       createMovie,
       updateTitle,
       updateMovie,



     }




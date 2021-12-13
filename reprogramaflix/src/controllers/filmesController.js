//controller vai ter a logica

//chamando o json de filmes
const filmesJson = require("../models/filmes.json")


//função getAll retorna todos os filmes
const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}


//função getById retorna um filme de um id especifico
const getById = (request, response)=>{
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}
//POST
const createMovie = (request, response)=>{
    let body = request.body

    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [
            {
                "mensagem":"filme cadastrado com sucesso",
                novoFilme
            }
        ]
    )

}
//pra fazer um update é preciso enviar um id e um body pq precisa saber quem quer modificar
//PATCH - título

const updateTitle = (request, response)=>{
    const idRequest = request.params.id 
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizadocom sucesso",
                filmeFiltrado
            }
        ]
    )
}

//PUT - substitui todo objeto buscado
const updateMovie = (req, res) =>{
    const idRequest = req.params.id //para id path params é melhor
    let filmeRequest = req.body
    //primeiro precisa pegar a posição do filme no array- findindex e guarda na const
    const indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
    
    //splice = json.splice(item a ser substituido, qtd, valor pelo qual será substituido)
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    res.status(200).json(
        [
            {
                "mensagem": "Filme atualizado com sucesso",
                filmesJson
            }
        ]
    )
}

//Delete - Deleta objeto selecionado
    const deleteMovie = (req, res) => {
    const idRequest = req. params.id
    const indexMovie = filmesJson.findIndex(filme =>filme.id ==idRequest)
  
    filmes.Json.splice(indexMovie, 1)

    res.status(200).json(
        [
            { 
                "mensagem": "Filme deletado com sucesso!",
                idRequest
            }
        ]
    )


}
//exportando todas os funções do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle,
    updateMovie,
    deleteMovie
}
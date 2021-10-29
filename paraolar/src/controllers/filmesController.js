//chama o json
const modelsJson = require("../models/filmes.json")
//[GET]/filmes
const getAll = (request, response)=> { //getall retorna todos os filmes

    response.status(200).json([
        {
            "filmes": modelsJson
        }
    ])
}
// [GET] /filmes/buscar/{id}
const getById = (request, response)=> {
    const idRequest = request.params.id
    idEncontrado = modelsJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}
// [GET] /filmes/buscar?{titulo}
const getByTitle = (request, response) => {
    let titleRequest = request.query.Title //query pq são os parametros buscados depois de ?
    let titleEncontrado = modelsJson.filter(
        filme => filme.Title.includes(titleRequest)) //o includes serve pra buscar o elemento no array

    response.status(200).send(titleEncontrado)
}
// [GET] /filmes/filtrar?{genero}
const getByGenre = (request, response) =>{
    let genreRequest = request.query.Genre.toLocaleLowerCase()
    let genreEncontrado = modelsJson.filter(filme=> filme.Genre.toLocaleLowerCase().includes(genreRequest))

    response.status(200).send(genreEncontrado)
}

// [POST]/filmes/criar
const createfilme = (request, response) =>{
    let body = request.body

    let novoFilme = { //cria novo objeto
        id: (modelsJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    }

    response.status(200).send(novoFilme)
}
//[PUT]/filmes/update/{id}
const updateFilme = (request, response) => {
    const idRequest = request.params.id
    let filmeRequest = request.body

    const indexEncontrado = modelsJson.findIndex(filme => filme.id == idRequest)
    //.findIndex retorna o índice no array do primeiro elemento que satisfizer a função de teste provida
    modelsJson.splice(indexEncontrado, 1, filmeRequest)
    //splice() permite inserir novos elementos e excluir elementos existentes em um array simultaneamente

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                modelsJson
            }
        ]
    )
}

// [PATCH]/filmes/updateTitle?{id}
const updateTitle = (request, response)=>{
    const idRequest = request.query.id
    let novoTitulo = request.body.Title

    filmeFiltrado = modelsJson.find(filme => filme.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizado com sucesso",
                filmeFiltrado
            }

        ]
    )
}

// [PATCH]/filmes/update/{id}
const updateFilmesId = (request, response) => {
    const idRequest = request.params.id
    const bodyRequest = request.body
    const filmeEncontrado = modelsJson.find(filmes => filmes.id == idRequest)
    
    bodyRequest.id = idRequest
    Object.keys (filmeEncontrado).forEach((chave) => { //forEach() permite executar uma função em cada elemento
        
        if (bodyRequest[chave] == undefined){
         filmeEncontrado[chave] = filmeEncontrado [chave]
        }else{
         filmeEncontrado [chave] = bodyRequest [chave]
        }
    })
    response.status(200).json(
        [{
            "mensagem": "Filme atualizado com sucesso!",
         filmeEncontrado
        }]
    )
}

// [DELETE]/filmes/deletar/{id}
const removeFilme = (request, response)=>{
    const idRequest = request.params.id //igual a const id = req.params.id e entre chaves pq o id era um objeto

    const idEncontrado = modelsJson.findIndex(filme => filme.id == idRequest)

    // if(idEncontrado == undefined){
    //     response.status(404).send({message: "Filme não encontrado."})
    // }

    modelsJson.splice(idEncontrado, 1) //tira o item de dentro do array

    response.status(200).send({mensage: 'Estabelecimento deletado.'}) //pode substituir status por res.sendStatus(204)
}

//exporta os verbos para usar em routes
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createfilme,
    updateFilme,
    updateTitle,
    updateFilmesId,
    removeFilme
}
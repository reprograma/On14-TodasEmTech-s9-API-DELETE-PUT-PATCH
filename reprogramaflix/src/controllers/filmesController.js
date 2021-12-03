// controller vai ter a logica

// chamando o json de filmes

const filmesJson = require("../models/filmes.json")

//app.get("/catalogo", 

const getAll = (request, response) => { // chama todos filmes e series de acordo com q foi pedido 5. era a rota e colocou uma função

    response.status(200).json([
    {
        "filmes": filmesJson,
       

    }
])

}


//app.get("/filmes/:id", retorna um filme de id especifico
const getById = (request, response)=> { // buscar filmes por id 6 envia numero direto na rota no postman(path params)
   
    let idRequest = request.params.id
    
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}

const createMovie = (request, response)=> {
    let body = request.body

    let novoFilme= {

        id: (filmesJson.length) +1,
        Title: body.Title,
        Plot: body.Plot
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [
            {
                "mensagem": "filme cadastrado com sucesso",
                novoFilme

    }
]
)
}

const updateTitle = (request, response)=> {
    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesjson.find(filme => filme.id == idRequest)

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

// PUT

const updateMovie = (request, response) =>{
    const idRequest = request.params.id
    let filmeRequest = request.body

    const indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

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

// exporta todas as funções do controller para ser usada no filmesRoutes
module.exports = {
    getAll, 
    getById,
    createMovie, 
    updateTitle,
    updateMovie
}
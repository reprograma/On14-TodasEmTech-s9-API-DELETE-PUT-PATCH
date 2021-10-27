
//AQUI FICA A LÓGICA

const filmesJson = require("../models/filmes.json") 

//Chamando a função getAll retorna todos os filmes 
const getAll =  (request, response)=>{    //Criar uma variavel que vai guardar essa função foi retirado a rota
    response.status(200).json([
        {
            "filmes": filmesJson
        
        }
    ])
}
//Função GetById retorna um filme de id especifico
 const getById = (request, response)=>{ //Criar uma variavel que vai guardar essa função foi retirado a rota
    let idRequest = request.params.id    //Pegar o id que esta na resquest a primeira coisa a se fazer
   
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest) //encontrar o filme
    response.status(200).send(idEncontrado)
}
//Criando o post
const createMovie = (request, response)=>{
    let body  = request.body
    let novoFilme = {
        id:(filmesJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    }
    //Depois que cria vai dá um push
    filmesJson.push(novoFilme)
    response.status(201).json(
        [
            {
                "Mensagem": "filme cadastrado com sucesso",
                novoFilme
            }
        ]
    )


}
// exportando todas as funções do controller para ser usada no filmeRoutes

module.exports = {
    getAll,
    getById,
    createMovie      //Essas funçoes posso chamar em qualque lugar
}
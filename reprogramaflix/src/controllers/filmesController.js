const seriesData = require("../models/series.json")
const filmesData = require("../models/filmes.json") // chamei o filmesData que estava em model

const getAll = (req, res) =>{ // tirei a tora e transformei em função que chama a rota catalogo, essa variavel guarda essa funcao, consigo reutilizar ela
    // res.status(200).send([filmesData, seriesData]) // desse jeito ele lista sem separar por serie e filme
     res.status(200).json([ // desse jeito ele lista separadamente
     {
         "Filmes do Catalógo" : filmesData,
         "Series do Catalógo" : seriesData
     }
 ])

 }
 
 
 const getFilmes =(req, res) =>{
     res.status(200).json(filmesData)
 }
 
 const getFilmesId =(req, res) =>{
     let idRequest = req.params.id // busca por path params
 
     let filmeEncontrado = filmesData
     .find(movie => movie.id ==idRequest)
     res.status(200).send(filmeEncontrado)
 }
 
 
 
 
 const postFilmes =(req, res) =>{
     console.log(req.body.title)
     console.log(req.body.plot)
     

     let tituloRequest = req.body
 
     let novoFilmes = {
         id : ( filmesData.length) +1,
        Title : tituloRequest.Title,
        Plot : tituloRequest.Plot
        
     }
     filmesData.push(novoFilmes)
     res.status(201).json([{"mensagem" : "Filme Cadastrado",novoFilmes
 }
]
)
 }


 const updateTitle = (req, res) =>{
    const idRequest = req.params.id

    console.log(req.body)
    let novoTitulo = req.body.Title

    filmeFiltrado = filmesData.find (movie => movie.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    res.status(200).json([{
        "mensagem" : "Filme Atualizado com Sucesso", filmeFiltrado
    }])
 }

 

 
 module.exports = {
     getAll,getFilmes,getFilmesId,postFilmes, updateTitle
 } // para eu poder reutiliar essas funções eu preciso exportar elas
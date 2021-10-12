// CONTROLER GUARDA A LÓGICA (de cada rota)

//    ../ sai da pasta de origem e entra e outra pasta
const filmesData = require('../models/filmes.json')

// Controlers ficam apenas com a callback, com a lógica
const getAll = (req,res) =>{
    res.status(200).json([{
        "filmes":filmesData
    }])
}



const getMovies = (req,res) =>{
    res.status(200).send(filmesData)
}

//  query params não tem /:id  - no postamn altera params > key(id) > value (4)

const getMovieByTitle =  (req,res) =>{ // NAO FUNCIONA
    let tituloEscolhido = req.query.Title
    let filmeEscolhidoID = filmesData.filter((filme) => {filme.Title == tituloEscolhido})

    res.status(200).send(filmeEscolhidoID)
}

// /:id é APENAS para path params - direto na rota 9no postman apenas altera url)
const getMovieById =  (req,res) =>{
    let idRequest = req.params.id
    let filmeEscolhido = filmesData.find( filme => filme.id == idRequest)

    res.status(200).send(filmeEscolhido)

}

const createMovie = (req,res) => {
    let bodyRequested = req.body //é a data que o cliente (ex:postamn) manda.
    let novoFilme = {
        id: filmesData.length + 1,
        Title: bodyRequested.Title,
        Plot: bodyRequested.Plot
    }

    filmesData.push(novoFilme)

    res.status(201).json({
        "mensagem": "Filme cadastrado com suceso", 
        "filme": novoFilme})
    }

const updateMovie = (req, res) => {
    let body = req.body //informação enviada pelo cliente
    let movieUpdated = {
    Title:body.Title,
    Plot:body.Plot
    }

    res.status(200).send("Filme modificado com sucesso")
}
// exportando funções para serem usadas nas rotas.
module.exports = {
    getAll,
    getMovies,
    getMovieById,
    getMovieByTitle,
    createMovie
}
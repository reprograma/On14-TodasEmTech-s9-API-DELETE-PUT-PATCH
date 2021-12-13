const filmesJson = require("../models/filmes.json")

const getAll = (req, res) => {
    res.status(200).send(filmesJson)
};

const getById = (req,res)=>{
    let idRequest = req.params.id
    let idfound = filmesJson.find(filme => filme.id == idRequest)
    res.status(200).send(idfound)
}

const getByTitle = (req, res) => {
    let titleRequest = req.query.titulo
    let titleFound = filmesJson.filter(
        (filmes) => filmes.Title.toLocaleLowerCase().includes(titleRequest))
        res.status(200).send(titleFound)
}

const getByGenre = (req, res) => {
    let genreRequest = req.query.genero
    let genreFound = filmesJson.filter((filmes) => 
    filmes.Genre.toLocaleLowerCase().toString().includes(genreRequest))
    res.status(200).send(genreFound)
}

const creatMovie = (req, res) =>{
    let body = req.body
    let newMovie ={
        id: (filmesJson.length)+1,
        Title: body.Title,
        Year: body.Year,
        Rated:body.Rated,
        Released: body.Released,
        Runtime: body.Runtime,
        Genre: body.Genre,
        Director: body.Director,
        Writer: body.Writer,
        Actors: body.Actors,
        Plot: body.Plot,
        Language: body.Language,
        Country:body.Country,
        Awards: body.Awards
    }
    filmesJson.push(newMovie)

    res.status(200).json(
        [
            {
                "mensage": "Filme cadastrado com sucesso",
                newMovie
            }
        ]
    )
}

const updateMovie = (req, res) =>{
    const idRequest = req.params.id 
    let filmeRequest = req.body
    const indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
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

const updateTitle = (req, res) => {
    const idRequest = req.params.id
    let newTitle = req.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == filme.idRequest)
    filmeFiltrado.Title = newTitle

    res.status(200).json(
        [
            {
                "mensagem": "Título atualizado com sucesso",
                filmeFiltrado
            }
        ]
    )
}
const deleteMovie = (req, res) => {
    const idRequest = req.params.id
    const indexMovie = filmesJson.findIndex(filmes => filmes.id == idRequest)

    filmesJson.splice(indexMovie, 1)

    res.status(200).json(
        [
            {
                "mensagem": "Filme deletado com sucesso"
            }
        ]
    )
}

//patch - atualiza qlq coisa(qlq coisa enviada pelo usuário será atualizada, menos o id)
//será um patch pq se for put e o usuário enviar uma coisa só, perdemos o cadastro
const updateMovieId = (req, res) => {
    const idRequest = req. params.id
    const bodyRequest = req.body

    const movieFound = filmesJson.find(filmes => filmes.id == idRequest)
    
    //o usuário nao pode modificar o id, (garantindo que não vai mudar essa parte) 
    bodyRequest.id = idRequest

    Object.keys(movieFound).forEach((chave) =>  {
       //tratativa: se usuário passar chave invalida, manter chave original
        if(bodyRequest[chave] == undefined){
            movieFound[chave] = movieFound [chave]
        }else{
            movieFound[chave] = bodyRequest [chave]
        }
        
    }) 
    res.status(200).json(
        [
            {
                "mensagem": "Filme atualizado",
                movieFound
            }
        ]
    )
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    creatMovie,
    updateMovie,
    updateTitle,
    deleteMovie,
    updateMovieId

}
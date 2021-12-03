const filmesJson = require("../models/filmes.json")

const getAll = (request, response) => {
    response.status(200).send(filmesJson)

};


const getByTitle = (request, response) => {
    let titleRequest = request.query.titulo

    let titleFind = filmesJson.filter((filme) =>
      filme.Title.toLocaleLowerCase().includes(titleRequest)
    );
  
    response.status(200).send(titleFind);
};


const getById = (request, response) => {

let idRequest = request.params.id

let idEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(idEncontrado)
};

const getByGenre = (request, response) => {
    let genreRequest = request.query.genero
  
    let genreFind = filmesJson.filter((filme) =>
      filme.Genre.toLocaleLowerCase().toString().includes(genreRequest)
    );
  
    response.status(200).send(genreFind);
  };


const createMovie = (request, response) => {

let body = request.body

let novoFilme = {

    id: (filmesJson.length) +1,
    Title: body.Title,
    Plot: body.plot
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


const updateTitle = (request, response) => {
    
    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

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


const updateMovie = (request, response) => {

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


const updateId = (request, response) => {
    const idRequest = request.params.id;
    let newTitle = request.body.Title;
  
    let movieFind = filmesJson.find(filme => filme.id == idRequest);
  
    movieFind.Title = newTitle;
  
    res.status(200).json([
      {
        "mensagem": "Atualizado com sucesso",
        movieFind
      }
    ])
  };


const deleteMovie = (request, response) => {
    let idRequest = request.params.id;
    let deleteMovie = filmesJson.findIndex(
      filmes => filmes.id == idRequest
    )
    console.log(deleteMovie)
  
    filmesJson.splice(deleteMovie, 1);
    response.status(200).json([{
      "mensagem": "Filme deletado com sucesso",
      filmesJson
    }])
  }


module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createMovie,
    updateTitle,
    updateId,
    updateMovie, 
    deleteMovie
}

// veremos aqui toda a lógica

//1° chamando o Json de filmes:
const filmesJson = require("../models/filmes.json")

//2° retornando todos os filmes (get):
const getALL = (request, response)=>{response.status(200).json([{"filmes": filmesJson}])}

//3° retornando filmes por ID (get):
const getById = (request, response)=>
{ let idRequest = request.params.id
  let idFound = filmesJson.find(movie=> movie.id == idRequest)
  response.status(200).send(idFound)
}

//4° retornando titulo por ID (get):
const getByTitle = (request, response)=>
{
  let titleRequest = request.params.title
  let titleFound = filmesJson.find(Title=> title.id == idRequest)
  response.status(200).send(idFound)
}

//5° retornando genero por ID (get):
const filtrarGenre = (request, response)=>
{
  let genreRequest = request.params.genre
  let genreFound = filmesJson.find(genre=> genre.id == idRequest)
  response.status(200).send(idFound)
}

//6° Criar um novo dado de filmes (post):
const creatMovie = (request, response)=>
{
  let body = request.body
  console.log(body);
  let creatMovie=
  { 
    id: (filmesJson.length)+1,
    title: body.title,
    plot: body.plot
  } 
  filmesJson.push(creatMovie)
  response.status(201).Json([{"mensagem": "movie successfully creat", creatMovie}])
}

//7° atualizando dados completo (put):
const updateMovie = (request, response)=>
{
  const idRequest = request.params.id
  const movieRequest = request.body

  let indexFound = filmesJson.findIndex(movie=> movie.id == idRequest)
  filmesJson.splice(indexFound, 1, movieRequest)
  response.status(200).Json([{"mensagem": "movie successfully updated", updateMovie}])
}

//8° atualizando só o titulo do filme (path):
const modifyTitle = (request, response)=>
{
  const idRequest = request.params.id
  let newTitle = request.body.title
  
  modifyTitle = filmesJson.find(filme => title.id == idRequest)
  filmeFiltrado.title = request.body.title

  response.status(200).Json([{"mensagem": "moviesuccessfully updated", modifyTitle}])
}



//9° Deletando um filme por ID:
const deleteMovie = (request, response)=>
{
  const idRequest = request.params.id
  const indexMovie = filmesJson.findIndex(movie=> movie.id == idRequest)

  filmesJson.splice(indexMovie, 1)

  response.status(200).json([{"mensagem": "movie delete with successfully", "delete": idRequest, filmesJson}])
}


//exportando todas as funções controller para imprimir o filmesRouter:
module.exports =
{
  getALL,
  getById,
  getByTitle,
  creatMovie,
  updateMovie,
  modifyTitle,
  filtrarGenre,
  deleteMovie
}
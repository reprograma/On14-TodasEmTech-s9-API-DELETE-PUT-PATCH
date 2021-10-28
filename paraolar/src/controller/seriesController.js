const seriesJson = require("../models/series.json")


//1° puxando meu get series:
const getALL = (request, response)=>
{response.status(200).json([{"series": seriesJson}])}

//2° puxando meu get genre/series:
const getGenre = (request, response)=>
{
  const genreRequest = request.query.genre.tolocaleLowerCase()
  const seriesFilters = seriesJson.filter(series =>
    {
      series.genre.toString().tolocaleLowerCase().includes(genreRequest)
      response.status(200).send(seriesFilters)
    })
}

//3° puxando meu get title/series:
const getTitle = (request, response)=>
{
  let titleRequest = request.query.title.tolocaleLowerCase().includes(titleRequest)
  response.status(200).send(titleFound)
}

//4° puxando get por ID/series:
const getById = (request, response)=>
{
  let idRequest = request.params.id
  let idFound = seriesJson.find(series=> series.id == idRequest)

  if (idFound == undefined)
  {
    response.status(404).send({mensagem: "series out of registration!"})

    response.status(200).send(idFound)
  }
}

//5° cadastrando uma serie/POST:
const creatSeries = (request, response)=>
{
  const body = request.body

  let newSeries = 
  {
    id: (seriesJson.length) +1,
    title: body.title,
    totalSeasons: body.totalSeasons,
    genre: body.genre,
    writes: body.writes,
    poster: body.poster,
    actors: body.actors,
    ratings: body.ratings
  }

  seriesJson.push(newSeries)
  response.status(200).json([{"mensagem": "the series was successfully registered", newSeries}])
}

//6° alterando o cadastro PUT:
const updateSeries = (request, response) =>
{
  const idRequest = request.params.id
  let seriesRequest = request.body

  let seriesFound = seriesJson.findIndex(series=> series.id == idRequest)
  seriesJson.splice(seriesFound,  1, seriesRequest)

  response.status(200).json([{"mensagem": "series updated successfully!", seriesJson}])
}

//7° atualizando titulo de series PATCH1:
const updateTitle = (request, response) =>
{
  const idRequest = request.params.id
  let bodyRequest = request.body.title

  seriesFilter = seriesJson.find(series => series.id == idRequest)
  seriesFilter.title = bodyRequest

  response.status(200).json([{"mensagem": "title the series updated wiht successfully!", seriesFilter}])
}

//8° atualizando por id PATCH2:
const updateSeriesById = (request, response)=>
{
  const idRequest = request.params.id
  const bodyRequest = request.body

  const seriesFound = seriesJson.find(series=> series.id == idRequest)

  bodyRequest.id = idRequest

  Object.keys (seriesFound).forEach((chave)=>
  {
    if (bodyRequest[chave] == undefined)
    {
      seriesFound[chave] = bodyRequest [chave]
    }
  })

  response.status(200).json([{"mensagem": "series updated successfully!", seriesFound}])
}

//deletando por id DELETE:
const deleteSeries = (request, response)=>
{
  const idRequest = request.params.id
  const seriesFound = seriesJson.findIndex(series=> series.id == idRequest)

  seriesJson.splice(seriesFound, 1)

  response.status(200).json([{"mensagem": "series delete wiht successfully!", "delete": idRequest, seriesJson }])
}


module.exports = 
{
  getALL,
  getGenre,
  getTitle,
  getById,
  creatSeries,
  updateSeries,
  updateSeriesById,
  updateTitle,
  deleteSeries

}
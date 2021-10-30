const seriesJson = require("../models/series.json")

//[GET] /series✔
//[GET] /series{id}✔
//[GET] /series{titulo}✔
//[GET] /series{genero}✔
const getAll = (request, response)=>{

    const {id, title, genre} = request.query
    let filtrados = seriesJson

    if(id) {
       filtrados = filtrados.filter(series => {
           return series.id == id
    })
   }

    if (title) {
      filtrados = filtrados.filter(series => {
          return series.title.toLowerCase().includes(title.toLowerCase())
      })
  }
    if(genre) {
    filtrados = filtrados.filter(series => {
       return series.genre.includes(genre)
   })
}

   response.status(200).send(filtrados);
}

// [POST]/series/criar✔
const createSerie = (request, response) =>{
    let body = request.body

    let novaSerie = { //cria novo objeto
        id: (seriesJson.length)+1,
        title: body.title,
        totalSeasons: body.totalSeasons
    }

    response.status(200).json([
        {
            "mensagem": "Série cadastrada.",
            novaSerie
        }
    ])
}

//[PUT]/series/update/{id} ---> ainda não sei como atualiza no postman
const updateSeries = (request, response) => {
    const idRequest = request.params.id //path params é melhor para id
    let serieRequest = request.body

    const indexEncontrado = seriesJson.findIndex(serie => serie.id == idRequest)
    seriesJson.splice(indexEncontrado, 1, serieRequest)

    response.status(200).json(
        [
            {
                "mensagem": "Série atualizada com sucesso"
            }
        ]
    )
}


//[PATCH]/series/updateTitle?{id}✔
const updateTitle = (request, response)=>{
    const idRequest = request.query.id
    let novoTitulo = request.body.title

    serieFiltrada = seriesJson.find(serie => serie.id == idRequest)

    serieFiltrada.title = novoTitulo

    response.status(200).json(
        [
            {
                mensagem: "Série atualizada com sucesso", serieFiltrada
            }

        ]
    )
}

// [PATCH]/series/update/{id}✔
const updateBody = (request, response) => {
    const idRequest = request.params.id
    const bodyRequest = request.body
    const serieEncontrada = seriesJson.find(series => series.id == idRequest)
    
    bodyRequest.id = idRequest
    Object.keys (serieEncontrada).forEach((chave) => { //forEach() permite executar uma função em cada elemento
        
        if (bodyRequest[chave] == undefined){
         serieEncontrada[chave] = serieEncontrada [chave]
        }else{
         serieEncontrada [chave] = bodyRequest [chave]
        }
    })
    response.status(200).json(
        [{
            "mensagem": "Série atualizada com sucesso!",
         serieEncontrada
        }]
    )
}

// [DELETE]/series/deletar/{id}
const deleteSeries = (request, response)=>{
    const idRequest = request.params.id
    seriesDelete = seriesJson.findIndex(serie => serie.id == idRequest)
//altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
    seriesJson.splice(seriesDelete, 1)

    response.status(200).json(
        [
            {
                "mensagem": "Série deletada com sucesso",
                seriesJson
            }
        ]
    )
}


module.exports = {
    getAll,
    createSerie,
    updateSeries,
    updateTitle,
    updateBody,
    deleteSeries
}
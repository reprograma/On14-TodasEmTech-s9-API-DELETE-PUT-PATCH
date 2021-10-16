const seriesJson = require("../models/series.json")

const getAll = (request, response) => {
    response.status(200).send(seriesJson);
  }
  
  const getByGenre =(request, response)=>{
      const genreRequest = request.query.genre
      const seriesFiltered = seriesJson.filter( series => series.genre.toString().includes(genreRequest))
      response.status(200).send(seriesFiltered)
  }
  
  module.exports = {
      getAll,
      getByGenre
  }
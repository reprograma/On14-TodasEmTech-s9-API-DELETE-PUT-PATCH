const seriesJson = require("../models/series.json")

const getAll = (request, response) => {
   
    response.status(200).send(seriesJson);
  }
  
  module.exports = {
      getAll
  }
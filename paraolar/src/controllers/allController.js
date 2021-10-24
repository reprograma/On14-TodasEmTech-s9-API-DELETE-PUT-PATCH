const moviesJson = require("../models/filmes.json");
const tvShowJson = require("../models/series.json");

const getAll = (request, response) => {
    
    response.status(200).send(
        [
            moviesJson, tvShowJson
        ]
    );

}

module.exports = {
    getAll
}
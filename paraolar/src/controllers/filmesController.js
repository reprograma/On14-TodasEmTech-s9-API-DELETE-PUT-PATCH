const movieJson = require("../models/filmes.json");

const getAll = (request, response) => {
    
    response.status(200).send(
        [
            {
                "movies": movieJson
            }
        ]
    );

}

module.exports ={
    getAll
}
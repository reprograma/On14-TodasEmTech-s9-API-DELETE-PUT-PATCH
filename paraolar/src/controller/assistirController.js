const filmesJson = require("../models/filmes.json");
const seriesJson = require("../models/series.json");

//Fazer um GET ALL

const getAll = (req, res) => {  
    
    res.status(200).send([filmesJson, seriesJson])
}
module.exports = {

getAll

}



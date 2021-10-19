const filmesJson = require("../models/filmes.json")

const getAll = (req, res) => {
    res.status(200).json([
        {
            "filmes": filmesJson,
        }
    ])
}











module.exports = {
    getAll,

}
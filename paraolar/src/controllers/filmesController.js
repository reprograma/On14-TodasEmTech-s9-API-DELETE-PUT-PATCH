const filmesModel = require("../models/filmes.json");

const getAll = (req, res) => {
  console.log(filmesModel);
  res.status(200).json([
    {
      filme: filmesModel,
    },
  ]);
};

module.exports = {
  getAll,
};

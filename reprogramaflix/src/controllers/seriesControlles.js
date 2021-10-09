const seriesJson = require("../models/serie.js");

app.get("/series", (request, response) => {
  let idRequest = request.query.id;
  let idEncontrado = seriesJson.find((serie) => serie.id == idRequest);

  response.status(200).send(idEncontrado);
});

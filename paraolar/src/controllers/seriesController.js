// Controler vai conter a logica de cada Json 
const seriesJson = require('../models/series.json')


 /**
  * quqndo  voce  utiizar parametro para bater na rota  vc sempre tem que por no
  *(Post[Parames{kel"id"  VALUE"4"}]) so assim voce vai encontrar o que procura   */ 
  

 app.get("/series", (request, response)=>{
  let idRequest = request.query.id
  let idEncontrado = seriesJson.find(serie => serie.id == idRequest)
  response.status(200).send(idEncontrado)
})
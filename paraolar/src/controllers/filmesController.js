//o controlle vai conter todas as logicas do Jsom
// controller vai ter a logica 


// chamando o jsom de filme 
const filmesJson = require ("../models/filmes.json")




/*2 passo configurar rota OBS"não se esqueça de iportar o produto que vai usar "
* 3 passo trasformar O (app.get em uma função )EX=app.get("/catalogo", {Vai ficar assim Ex= const getAll = require} a unica coisa que não vai mudar é (request, response) => {.../
*/
//função getByid retorna um filme de um id especifico 
const getAll = (request, response) => {
  response.status(200).json([
    { 
      "filme": filmesJson
    }
  ])
}



 //get por id del
 //o mesmo foi feito aqui Porem [app.get("/filmes/:id", )]  foi subistituido por uma  
 //const getByid=
 //retorna um filme com id especifico 
 const getByid = (request, response) => {
   let idRequest = request.params.id

   let idEncontrado = filmesJson.find(filme => filme.id == idRequest)// find vai sempre retornar o primeiro  como o id é unico  ele vai sempre trazer o que encotrar 
   response.status(200).send(idEncontrado)
 }

  /** 
   * Reformulando tudo isto  temos que exportar os arquivos  
   * assim chamaremos as funçoes  no modo de exportação para chamalas quando quisermos em qualquer lugarb do codigo 
   */
//exporta todas as funçoes do controle para filmeroutes
  module.exports = {
    getAll,
    getByid
  }
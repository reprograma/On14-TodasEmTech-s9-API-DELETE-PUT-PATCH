//o controlle vai conter todas as logicas do Jsom
// controller vai ter a logica 


// chamando o jsom de filme 
const filmesJson = require ('../models/filmes.json')




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

 const createMovie = (request, response)=>{
   let body = request.body // pedindo para lançar algo no corpo do arry 


   let novoFilme = {
     id : (filmesJson.length)+1,
     Title : body.Title,
     Plot : body.Plot
     
   }
   filmesJson.push(novoFilme)// serve para alterar o arquivo inserindo novos arquivos 
   response.status(201).json(
     [
       {
         "mensagem": "Filme cadastrado com sucesso",
         novoFilme
       }
     ]
   )

 }

 const updateTitle = (request, response) => {
   const idRequest = request.params.id //é feito pa ra usar diretamento na rota 

   let novoTitulo = request.body.Title// 
   
   filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)
   
   filmeFiltrado.Title = novoTitulo
   
   response.status(200).json(
     [
       {
         "mensagem": "Filme atualizado com sucesso",
         filmeFiltrado
       }
     ]
   )
 }
 


  /** 
   * Reformulando tudo isto  temos que exportar os arquivos  
   * assim chamaremos as funçoes  no modo de exportação para chamalas quando quisermos em qualquer lugarb do codigo 
   */
//exporta todas as funçoes do controle para filmeroutes
  module.exports = {
    getAll,
    getByid,// as virgulas são importante para não quebrar o seu codigo 
    createMovie,
    updateTitle
  }
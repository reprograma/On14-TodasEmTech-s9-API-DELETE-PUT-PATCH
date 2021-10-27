
// inciando o servido 
const app = require("./src/app")// chama



//1 add a porta para abrir a rota ;)
app.listen(7070, () => {  
  console.log("fé no Pai que agora vai!! Abre a porta  7070 que eu quero entrar !!! ")
})


 /**
  * Arquitetura - Mvc é um padrão de arquitetura de software separado sua aplicação  em 3 camadas de interação do usuário (view), a camada  de manipulação dos dados (Model ) e a acamada de controle (controller )
  * no caso do beck-end não lidaremos  com as viewes q faremos  com as rotas (Routs)
  * MVC forma de organizar o nosso codigo 
  * Server.js=> configurando só as configuraçoes de Porta e configurasoes de servidor com porta
  * App.js => vai centralizar todas as rotas e requisição  para  aplicação
  * Pasta Routes => rota e o verbo que ela vai executar 
  * Pasta controller => 
  * Pasta Model => conecção dos  bamco de dados 
  */ 
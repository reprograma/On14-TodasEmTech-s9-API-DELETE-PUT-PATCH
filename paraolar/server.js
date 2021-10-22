//Iniciando o Projeto ReprogramaFlix - Criando minha API
//Criando a minha porta 8090

const app = require ("./src/app")
const PORT = 8090

app.listen(PORT, ()=>{
  console.log(`Alô, Prof Ana Lu? to na porta: ${PORT}`)
  })

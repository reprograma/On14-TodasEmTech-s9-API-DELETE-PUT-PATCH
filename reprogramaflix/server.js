const app = require("./src/app") //chamando o arquivo app

const PORT = 5050
//variavel de porta tem que ser sempre maiusculo

// configurando porta e iniciando o servidor
app.listen(PORT, ()=>{
console.log(`Agora é minha vez ${PORT}`)
})
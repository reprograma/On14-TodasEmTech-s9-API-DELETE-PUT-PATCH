const app = require("./src/app") //chamando o arquivo app

const PORT = 7076
//variavel de porta tem que ser sempre maiusculo

// configurando porta e iniciando o servidor
app.listen(PORT, ()=>{
console.log(`alo doçura? to na porta ${PORT}`)
})
const app = require("./src/app") //chamando o arquivo app

const PORT = 7070 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`alo doçura? to na porta ${PORT}`)
})
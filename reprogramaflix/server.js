
const app = require("./src/app") // chamando o arquivo app

const PORT = 7072

// iniciando servidor
app.listen(PORT , ()=>{
    console.log(`alo doçura? to na porta ${PORT}`) // cria porta 3
})
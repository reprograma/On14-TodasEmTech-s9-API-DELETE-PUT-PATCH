const app = require("./src/app") //chamando o arquivo app

const PORT = 5050

//iniciando o servidor
app.listen(5050, ()=>{
    console.log(`Porta: ${PORT}`)
})

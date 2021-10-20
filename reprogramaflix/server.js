const app = require("./src/app") //chamando o arquivo app

//Variável de porta

const PORT = 7070;

//iniciando o servidor
app.listen(PORT, ()=>{
    console.log(`alo doçura? to na porta ${PORT}`);
})


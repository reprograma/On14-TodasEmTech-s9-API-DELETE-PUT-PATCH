//Iniciando o servidor
const app = require("./src/app")  // chamando o arquuivo app

app.listen(7071, () => {
    console.log("alo doçura? Estou na porta 7071")
})
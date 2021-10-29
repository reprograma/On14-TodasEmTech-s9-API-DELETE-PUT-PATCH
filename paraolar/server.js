//importa o app.js
const app = require("./src/app")
//abre a porta para ser utilizada no servidor
const PORT = 8082
//configurar a mensagem da porta executando
app.listen(PORT, () => {
    console.log(`Hoje estamos utilizando a porta ${PORT}.`)
})
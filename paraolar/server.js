const app = require("./src/app") //chamando o app


//executando o servidor 
const PORT = 8081

app.listen(PORT, () =>{
    console.log(`Oie, servidor na porta ${PORT}`)
})

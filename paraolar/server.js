//criando a minha porta e iniciando o servidor

const app = require("./src/app"); 

const PORT = 9090
 
app.listen(PORT, ()=>{console.log(`prof Ana Lu? Voltei! to na porta: ${PORT}`)})
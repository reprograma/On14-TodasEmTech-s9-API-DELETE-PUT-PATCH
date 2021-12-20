const app = require("./src/app"); //chamando o arquivo app

const PORT = 7070;

//escutando a porta
app.listen(PORT, () => {
  console.log(`Alo docura? To na porta ${PORT}`);
  
});